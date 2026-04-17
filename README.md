# Travel Portal UI

A React + Vite starter for a travel marketplace with standalone services (flights, hotels, packages).

## Setup

1. Open `F:\Web` in your terminal.
2. Run `npm install`.
3. Start the development server with `npm run dev`.

## Project structure

- `src/App.tsx` — navigation and route layout
- `src/pages` — standalone service pages
- `src/components/ServiceCard.tsx` — reusable card UI
- `src/services/travelService.ts` — API integration layer
- `src/mockData.ts` — local fallback offers

## Next steps

- Replace `API_BASE` in `src/services/travelService.ts` with your real backend endpoint.
- Add real flight/hotel search and booking flows.
- Add authentication and cart/booking state.
- Use `/admin` to enable or disable any service option in the portal.
- Navigate to `/cart` to review booking selections and confirm a mock checkout.
