// Content for the Cruises page (/cruises). Edit text here; add pictures under public/images/cruise/ (see IMAGES.md).
export const CRUISE = {
  heroSub: 'Luxury, comfort and world-class hospitality at sea — from short scenic cruises to international multi-day voyages.',
  intro: 'We offer exciting cruise holiday experiences for guests looking to explore beautiful destinations while enjoying luxury, comfort and world-class hospitality at sea. From short scenic cruises to international multi-day voyages, we assist our guests in selecting the right cruise experience based on their preferences, budget and travel requirements.',
  highlights: [
    ['Short scenic cruises', 'Relaxed getaways on the water.'],
    ['International multi-day voyages', 'Singapore, Dubai, the Mediterranean, Europe, Alaska and the Caribbean.'],
    ['Matched to you', 'Chosen around your preferences, budget and travel requirements.'],
  ],
  // [title, text, tags]
  services: [
    ['International Cruise Bookings', 'Cruise holiday arrangements across popular destinations such as Singapore, Dubai, the Mediterranean, Europe, Alaska and the Caribbean.', ['Singapore', 'Dubai', 'Mediterranean', 'Europe', 'Alaska', 'Caribbean']],
    ['Domestic Cruise Experiences', 'Assistance with river cruises, coastal cruises and other cruise experiences within India.', ['River cruises', 'Coastal cruises', 'Within India']],
    ['Cruise Packages', 'Complete cruise holiday arrangements with accommodation, meals, entertainment and onboard activities as per the selected cruise package.', ['Accommodation', 'Meals', 'Entertainment', 'Onboard activities']],
    ['Pre & Post Cruise Arrangements', 'Assistance with flights, hotel accommodation, transfers and sightseeing before or after the cruise.', ['Flights', 'Hotels', 'Transfers', 'Sightseeing']],
  ] as [string, string, string[]][],
  // [name, tag, gradient a, gradient b]
  lines: [
    ['Cordelia Cruise', 'India', '#0e9196', '#064a52'],
    ['Royal Caribbean', 'International', '#4a7fb5', '#1a2a52'],
    ['Singapore Dream Cruise', 'International', '#14a37f', '#0b3d56'],
    ['Disney Cruise', 'International', '#b85a7a', '#2a2050'],
    ['Norwegian Cruise Line', 'International', '#3b8f6a', '#0d2f4d'],
    ['Costa Cruise', 'International', '#e0a800', '#0e6a73'],
  ] as [string, string, string, string][],
  // [name, sub, gradient a, gradient b]
  destinations: [
    ['Singapore', 'International', '#14a37f', '#0b3d56'],
    ['Dubai', 'International', '#e0a800', '#0e6a73'],
    ['Mediterranean', 'International', '#4a7fb5', '#1a2a52'],
    ['Europe', 'International', '#b85a7a', '#2a2050'],
    ['Alaska', 'International', '#3b8f6a', '#0d2f4d'],
    ['Caribbean', 'International', '#0e9196', '#064a52'],
    ['River cruises', 'Within India', '#2f9e7a', '#0d3b3b'],
    ['Coastal cruises', 'Within India', '#d4a017', '#6a3a1a'],
  ] as [string, string, string, string][],
  steps: [
    ['Share your plans', 'Tell us your preferences, budget and travel requirements.'],
    ['We shortlist', 'We help you pick the cruise experience that fits.'],
    ['We arrange everything', 'Cruise package, plus flights, hotels, transfers and sightseeing if you need them.'],
    ['Set sail', 'Enjoy the luxury, comfort and hospitality at sea.'],
  ] as [string, string][],
  faq: [
    ['Which destinations do you offer cruises to?', 'International cruises across popular destinations such as Singapore, Dubai, the Mediterranean, Europe, Alaska and the Caribbean. Within India, we assist with river cruises, coastal cruises and other cruise experiences.'],
    ['What is included in a cruise package?', 'Complete cruise holiday arrangements with accommodation, meals, entertainment and onboard activities as per the selected cruise package. Inclusions can differ between cruises, so we confirm them for the cruise you choose.'],
    ['Can you also arrange my flights and hotels?', 'Yes. Our pre & post cruise arrangements cover flights, hotel accommodation, transfers and sightseeing before or after your cruise.'],
    ['How do I choose the right cruise?', 'Tell us your preferences, budget and travel requirements and we will help you select the cruise experience that suits you — from short scenic cruises to international multi-day voyages.'],
    ['Which cruise lines can you help me with?', 'We assist with cruises on Cordelia Cruise, Royal Caribbean, Singapore Dream Cruise, Disney Cruise, Norwegian Cruise Line and Costa Cruise.'],
  ] as [string, string][],
}
export const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')