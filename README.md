# RoutePilot — Logistics & Fleet Tracking Platform

A responsive logistics operations frontend built with React, TypeScript, Vite, React Router, Lucide icons and Recharts. Includes dashboard KPIs, vehicle and driver directories, shipment management, a stylized tracking map, alerts/activity, search, status filters, validated create/edit forms, and local persistence.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Modules
- **Overview:** fleet and driver KPIs, delivery performance chart, fleet availability, recent shipments and alerts.
- **Vehicles:** add/edit/delete vehicles, status, driver, location, fuel and maintenance information.
- **Drivers:** availability, assigned vehicle, deliveries, rating and location.
- **Shipments:** create/edit/delete shipments, customer, route, assignments, priority, status and ETA.
- **Live tracking:** interactive demo map with selectable vehicles and shipment routes.
- **Alerts & activity:** operational alerts and recent activity timeline.

## Data and API integration
The starter dataset is in `src/data.ts`. `src/services/api.ts` contains a small asynchronous persistence layer using localStorage. Replace its implementation with authenticated `fetch`/Axios requests when a backend is available. The map is a visual prototype and does not display live GPS coordinates; integrate a mapping provider and tracking API for production.

## Notes
- The app is frontend-only and uses mock data.
- Responsive layout supports desktop, tablet and mobile.
- `.gitignore` excludes dependencies, build output and local environment files.


## Reusable components

The `src/components/` directory contains shared `StatusBadge`, `EmptyState`, and `PageHeader` components. StatusBadge and EmptyState are used by the app; PageHeader is available for consistent headings as the app grows.
