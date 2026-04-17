import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';

interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}

const initialMessages: ChatMessage[] = [
  {
    role: 'assistant',
    text: 'Hi there! I’m your travel assistant. Ask me about flights, hotels, destinations, or planning your next trip.',
  },
];

function getAiReply(question: string) {
  const normalized = question.trim().toLowerCase();
  if (!normalized) {
    return 'Please ask me something about travel, and I’ll help you find the best option.';
  }

  if (normalized.includes('flight')) {
    return 'Looking for flights? I can help you compare options, choose the best cabin, and find travel dates with lower fares.';
  }

  if (normalized.includes('hotel')) {
    return 'For hotels, tell me your destination and budget, and I’ll suggest stays with great location and ratings.';
  }

  if (normalized.includes('train') || normalized.includes('bus') || normalized.includes('cab')) {
    return 'I can help with ground travel too — trains, buses, cabs, and regional transfers are all covered.';
  }

  if (normalized.includes('trip') || normalized.includes('destination') || normalized.includes('recommend')) {
    return 'Tell me where you want to go, and I’ll propose an itinerary with top sights and travel tips.';
  }

  if (normalized.includes('budget') || normalized.includes('cheap') || normalized.includes('price')) {
    return 'I can suggest budget-friendly options and help you find the best deals for your budget.';
  }

  return 'That sounds great. I’m here to help with travel planning, booking guidance, and destination ideas — what would you like to know?';
}

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState('');

  const lastResponse = useMemo(
    () => messages[messages.length - 1],
    [messages],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: ChatMessage = { role: 'user', text: trimmed };
    const assistantMessage: ChatMessage = {
      role: 'assistant',
      text: getAiReply(trimmed),
    };

    setMessages([...messages, userMessage, assistantMessage]);
    setInput('');
  }

  return (
    <div className={`chat-bubble ${open ? 'open' : ''}`}>
      {open && (
        <div className="chat-panel-floating" role="dialog" aria-label="Travel chat bot">
          <div className="chat-panel-header">
            <div>
              <strong>Travel AI Chat</strong>
              <p>Ask about flights, hotels, or travel planning.</p>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-window">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`chat-message ${message.role}`}
              >
                <strong>{message.role === 'user' ? 'You' : 'Assistant'}</strong>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <form className="chat-actions" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={event => setInput(event.target.value)}
              className="chat-input"
              placeholder="Ask the travel bot a question..."
            />
            <button type="submit" className="chat-submit">
              Send
            </button>
          </form>

          {lastResponse.role === 'assistant' && (
            <div className="chat-hint">
              Try asking about flights, hotels, or top destinations.
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        className="chat-bubble-button"
        onClick={() => setOpen(open => !open)}
        aria-label="Open travel chat bot"
      >
        💬
      </button>
    </div>
  );
}
