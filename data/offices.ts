// Office locations shown on the home page map and city strip. Edit freely.
// lon/lat place each pin on the schematic map; dx/dy nudge crowded cities apart; l = label on the left; hq = head office.
export interface Office { n: string; lon: number; lat: number; dx?: number; dy?: number; l?: boolean; hq?: boolean }
export const OFFICES: Office[] = [
  { n: 'Delhi', lon: 77.2, lat: 28.6 },
  { n: 'Kolkata', lon: 88.4, lat: 22.6, hq: true },
  { n: 'Mumbai', lon: 72.9, lat: 19.1, l: true },
  { n: 'Bengaluru', lon: 77.6, lat: 12.97 },
  { n: 'Goa', lon: 74.0, lat: 15.5, l: true },
  { n: 'Gurugram', lon: 77.0, lat: 28.46, dx: -20, dy: 14, l: true },
  { n: 'Bhubaneswar', lon: 85.8, lat: 20.3 },
  { n: 'Udaipur', lon: 73.7, lat: 24.6, l: true },
  { n: 'Guwahati', lon: 91.7, lat: 26.1, l: true },
  { n: 'Hyderabad', lon: 78.5, lat: 17.4 },
  { n: 'Kochi', lon: 76.3, lat: 9.95, l: true },
  { n: 'Noida', lon: 77.4, lat: 28.5, dx: 20, dy: 12 },
]
