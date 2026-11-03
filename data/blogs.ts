export interface Section { h: string; p: string[]; img?: string[]; quote?: string; list?: string[]; gallery?: boolean }
export interface Blog { slug: string; cat: string; key: string; title: string; excerpt: string; date: string; read: number; a: string; b: string; author: string[]; intro: string; tags: string[]; sections: Section[] }

// One entry per blog post. Add a post here and it appears on /blogs and gets its own page at /blogs/<slug>.
export const BLOGS: Blog[] = [
 {
  "slug": "bali-beyond-the-beaches",
  "cat": "Guides",
  "key": "Bali",
  "title": "Bali beyond the beaches",
  "excerpt": "Quiet temples and rice terraces most visitors miss.",
  "date": "12 Oct 2026",
  "read": 8,
  "a": "#0e9196",
  "b": "#0b3b4d",
  "author": [
   "Meera Das",
   "Head of Design"
  ],
  "intro": "Bali is more than beach clubs and sunsets. Look inland and you’ll find mist-covered terraces, quiet water temples and villages where ceremony still shapes the day.",
  "tags": [
   "Guides",
   "Bali",
   "Travel tips"
  ],
  "sections": [
   {
    "h": "Why it’s worth your time",
    "p": [
     "Bali rewards travellers who take their time. This is sample text — swap in your own story, first-hand details and local tips; the layout keeps the spacing and rhythm for you.",
     "A good guide mixes the practical with the personal: when to go, how long to stay, and the small moments that stay with you long after you’ve flown home."
    ],
    "img": [
     "Wide image · 1200×700",
     "Image caption — add a short description here."
    ]
   },
   {
    "h": "What to expect on the ground",
    "p": [
     "Describe the pace of the place, the people you meet and the surprises along the way. Short paragraphs read best, so keep each idea to a few sentences.",
     "Add practical details too — getting around, how much time to allow, and what to book ahead."
    ],
    "quote": "A short pull-quote from your story goes here — one memorable line that captures the feeling."
   },
   {
    "h": "Our designers’ tips",
    "p": [
     "A few lessons our travel designers have learned the hard way, and the ones they’d pass on to a friend."
    ],
    "list": [
     "Go early — mornings are quieter and the light is kinder.",
     "Book popular experiences a few weeks ahead.",
     "Leave one afternoon in every itinerary unplanned.",
     "Ask locals where they eat, then follow them."
    ],
    "gallery": true
   },
   {
    "h": "Planning your trip",
    "p": [
     "Ready to go? Our designers can turn this guide into a fully planned itinerary, with stays, transfers and experiences arranged end to end."
    ]
   }
  ]
 },
 {
  "slug": "japan-in-autumn",
  "cat": "Seasons",
  "key": "Japan",
  "title": "Japan in autumn",
  "excerpt": "When and where to catch the best foliage.",
  "date": "03 Oct 2026",
  "read": 6,
  "a": "#d8584a",
  "b": "#3a2a4a",
  "author": [
   "Arjun Sen",
   "Founder & CEO"
  ],
  "intro": "Every November, Japan turns crimson and gold. Timing it right is the difference between a pleasant trip and a postcard-perfect one.",
  "tags": [
   "Seasons",
   "Japan",
   "Travel tips"
  ],
  "sections": [
   {
    "h": "Why it’s worth your time",
    "p": [
     "Japan rewards travellers who take their time. This is sample text — swap in your own story, first-hand details and local tips; the layout keeps the spacing and rhythm for you.",
     "A good guide mixes the practical with the personal: when to go, how long to stay, and the small moments that stay with you long after you’ve flown home."
    ],
    "img": [
     "Wide image · 1200×700",
     "Image caption — add a short description here."
    ]
   },
   {
    "h": "What to expect on the ground",
    "p": [
     "Describe the pace of the place, the people you meet and the surprises along the way. Short paragraphs read best, so keep each idea to a few sentences.",
     "Add practical details too — getting around, how much time to allow, and what to book ahead."
    ],
    "quote": "A short pull-quote from your story goes here — one memorable line that captures the feeling."
   },
   {
    "h": "Our designers’ tips",
    "p": [
     "A few lessons our travel designers have learned the hard way, and the ones they’d pass on to a friend."
    ],
    "list": [
     "Go early — mornings are quieter and the light is kinder.",
     "Book popular experiences a few weeks ahead.",
     "Leave one afternoon in every itinerary unplanned.",
     "Ask locals where they eat, then follow them."
    ],
    "gallery": true
   },
   {
    "h": "Planning your trip",
    "p": [
     "Ready to go? Our designers can turn this guide into a fully planned itinerary, with stays, transfers and experiences arranged end to end."
    ]
   }
  ]
 },
 {
  "slug": "planning-an-egypt-cruise",
  "cat": "Tips",
  "key": "Nile",
  "title": "Planning an Egypt cruise",
  "excerpt": "What to know before sailing the Nile.",
  "date": "24 Sep 2026",
  "read": 7,
  "a": "#e0a800",
  "b": "#3b5a4a",
  "author": [
   "Sneha Roy",
   "Guest Experience"
  ],
  "intro": "A Nile cruise is the slowest, most graceful way to meet ancient Egypt — if you plan the route, the season and the ship with care.",
  "tags": [
   "Tips",
   "Nile",
   "Travel tips"
  ],
  "sections": [
   {
    "h": "Why it’s worth your time",
    "p": [
     "Nile rewards travellers who take their time. This is sample text — swap in your own story, first-hand details and local tips; the layout keeps the spacing and rhythm for you.",
     "A good guide mixes the practical with the personal: when to go, how long to stay, and the small moments that stay with you long after you’ve flown home."
    ],
    "img": [
     "Wide image · 1200×700",
     "Image caption — add a short description here."
    ]
   },
   {
    "h": "What to expect on the ground",
    "p": [
     "Describe the pace of the place, the people you meet and the surprises along the way. Short paragraphs read best, so keep each idea to a few sentences.",
     "Add practical details too — getting around, how much time to allow, and what to book ahead."
    ],
    "quote": "A short pull-quote from your story goes here — one memorable line that captures the feeling."
   },
   {
    "h": "Our designers’ tips",
    "p": [
     "A few lessons our travel designers have learned the hard way, and the ones they’d pass on to a friend."
    ],
    "list": [
     "Go early — mornings are quieter and the light is kinder.",
     "Book popular experiences a few weeks ahead.",
     "Leave one afternoon in every itinerary unplanned.",
     "Ask locals where they eat, then follow them."
    ],
    "gallery": true
   },
   {
    "h": "Planning your trip",
    "p": [
     "Ready to go? Our designers can turn this guide into a fully planned itinerary, with stays, transfers and experiences arranged end to end."
    ]
   }
  ]
 },
 {
  "slug": "hosting-500-in-dubai",
  "cat": "MICE",
  "key": "Dubai",
  "title": "Hosting 500 in Dubai",
  "excerpt": "A planner’s checklist for large-format conferences.",
  "date": "15 Sep 2026",
  "read": 9,
  "a": "#4a7fb5",
  "b": "#1a2a52",
  "author": [
   "Rahul Basu",
   "MICE Director"
  ],
  "intro": "Hosting five hundred delegates in Dubai is thrilling — and unforgiving. These are the decisions that make or break a large-format conference.",
  "tags": [
   "MICE",
   "Dubai",
   "Travel tips"
  ],
  "sections": [
   {
    "h": "Why it’s worth your time",
    "p": [
     "Dubai rewards travellers who take their time. This is sample text — swap in your own story, first-hand details and local tips; the layout keeps the spacing and rhythm for you.",
     "A good guide mixes the practical with the personal: when to go, how long to stay, and the small moments that stay with you long after you’ve flown home."
    ],
    "img": [
     "Wide image · 1200×700",
     "Image caption — add a short description here."
    ]
   },
   {
    "h": "What to expect on the ground",
    "p": [
     "Describe the pace of the place, the people you meet and the surprises along the way. Short paragraphs read best, so keep each idea to a few sentences.",
     "Add practical details too — getting around, how much time to allow, and what to book ahead."
    ],
    "quote": "A short pull-quote from your story goes here — one memorable line that captures the feeling."
   },
   {
    "h": "Our designers’ tips",
    "p": [
     "A few lessons our travel designers have learned the hard way, and the ones they’d pass on to a friend."
    ],
    "list": [
     "Go early — mornings are quieter and the light is kinder.",
     "Book popular experiences a few weeks ahead.",
     "Leave one afternoon in every itinerary unplanned.",
     "Ask locals where they eat, then follow them."
    ],
    "gallery": true
   },
   {
    "h": "Planning your trip",
    "p": [
     "Ready to go? Our designers can turn this guide into a fully planned itinerary, with stays, transfers and experiences arranged end to end."
    ]
   }
  ]
 },
 {
  "slug": "vietnam-north-to-south",
  "cat": "Guides",
  "key": "Vietnam",
  "title": "Vietnam north to south",
  "excerpt": "The route, the pace and the dishes worth a detour.",
  "date": "02 Sep 2026",
  "read": 8,
  "a": "#14a37f",
  "b": "#0b3d56",
  "author": [
   "Sneha Roy",
   "Guest Experience"
  ],
  "intro": "From the lanterns of Hanoi to the motorbike hum of Saigon, Vietnam rewards travellers who slow down and follow the food.",
  "tags": [
   "Guides",
   "Vietnam",
   "Travel tips"
  ],
  "sections": [
   {
    "h": "Why it’s worth your time",
    "p": [
     "Vietnam rewards travellers who take their time. This is sample text — swap in your own story, first-hand details and local tips; the layout keeps the spacing and rhythm for you.",
     "A good guide mixes the practical with the personal: when to go, how long to stay, and the small moments that stay with you long after you’ve flown home."
    ],
    "img": [
     "Wide image · 1200×700",
     "Image caption — add a short description here."
    ]
   },
   {
    "h": "What to expect on the ground",
    "p": [
     "Describe the pace of the place, the people you meet and the surprises along the way. Short paragraphs read best, so keep each idea to a few sentences.",
     "Add practical details too — getting around, how much time to allow, and what to book ahead."
    ],
    "quote": "A short pull-quote from your story goes here — one memorable line that captures the feeling."
   },
   {
    "h": "Our designers’ tips",
    "p": [
     "A few lessons our travel designers have learned the hard way, and the ones they’d pass on to a friend."
    ],
    "list": [
     "Go early — mornings are quieter and the light is kinder.",
     "Book popular experiences a few weeks ahead.",
     "Leave one afternoon in every itinerary unplanned.",
     "Ask locals where they eat, then follow them."
    ],
    "gallery": true
   },
   {
    "h": "Planning your trip",
    "p": [
     "Ready to go? Our designers can turn this guide into a fully planned itinerary, with stays, transfers and experiences arranged end to end."
    ]
   }
  ]
 },
 {
  "slug": "pack-light-travel-well",
  "cat": "Tips",
  "key": "Packing",
  "title": "Pack light, travel well",
  "excerpt": "Our designers’ one-bag rules for any trip.",
  "date": "20 Aug 2026",
  "read": 4,
  "a": "#b85a7a",
  "b": "#2a2050",
  "author": [
   "Meera Das",
   "Head of Design"
  ],
  "intro": "The best trips are carried, not dragged. Here are the one-bag rules our designers swear by for any destination.",
  "tags": [
   "Tips",
   "Packing",
   "Travel tips"
  ],
  "sections": [
   {
    "h": "Why it’s worth your time",
    "p": [
     "Packing rewards travellers who take their time. This is sample text — swap in your own story, first-hand details and local tips; the layout keeps the spacing and rhythm for you.",
     "A good guide mixes the practical with the personal: when to go, how long to stay, and the small moments that stay with you long after you’ve flown home."
    ],
    "img": [
     "Wide image · 1200×700",
     "Image caption — add a short description here."
    ]
   },
   {
    "h": "What to expect on the ground",
    "p": [
     "Describe the pace of the place, the people you meet and the surprises along the way. Short paragraphs read best, so keep each idea to a few sentences.",
     "Add practical details too — getting around, how much time to allow, and what to book ahead."
    ],
    "quote": "A short pull-quote from your story goes here — one memorable line that captures the feeling."
   },
   {
    "h": "Our designers’ tips",
    "p": [
     "A few lessons our travel designers have learned the hard way, and the ones they’d pass on to a friend."
    ],
    "list": [
     "Go early — mornings are quieter and the light is kinder.",
     "Book popular experiences a few weeks ahead.",
     "Leave one afternoon in every itinerary unplanned.",
     "Ask locals where they eat, then follow them."
    ],
    "gallery": true
   },
   {
    "h": "Planning your trip",
    "p": [
     "Ready to go? Our designers can turn this guide into a fully planned itinerary, with stays, transfers and experiences arranged end to end."
    ]
   }
  ]
 }
]
