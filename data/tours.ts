export interface TourData {
  slug: string; name: string; first: string; accent: string
  region: string; place: string; cats: string[]; desc: string; rating: number; label: string; a: string; b: string; fixed: boolean
  tags: string[][]; subtitle: string; route: string[]; heroLabels: string[]; facts: string[][]
  overview: string; highlights: string[]; nodes: string[][]
  days: [number, string, string, string, string[]][]
  stays: string[][]; policies: string[][]; included: string[]; excluded: string[]; perks: string[]
  price: number; gst: number; departure: string; priceNote: string
}

// One entry per tour. Add a tour here and it appears on /leisure and gets its own page at /leisure/<slug>.
export const TOURS: Record<string, TourData> = {
 "kerala-backwaters-hills": {
  "slug": "kerala-backwaters-hills",
  "name": "Kerala Backwaters & Hills",
  "first": "Kerala Backwaters &",
  "accent": "Hills",
  "region": "dom",
  "place": "Kerala",
  "cats": [
   "Beach",
   "Family",
   "Honeymoon"
  ],
  "desc": "Houseboat stay, Munnar tea hills and Kovalam beach.",
  "rating": 4.8,
  "label": "Bestseller",
  "a": "#14a37f",
  "b": "#0b3d56",
  "fixed": false,
  "tags": [
   [
    "Bestseller",
    ""
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Houseboat stay, Munnar tea hills and Kovalam beach.",
  "route": [
   "Munnar",
   "Thekkady",
   "Alleppey",
   "Kovalam"
  ],
  "heroLabels": [
   "Hero image · Kerala · 1400×900",
   "Munnar · 800×500",
   "Thekkady · 800×500",
   "Alleppey · 800×500",
   "Kovalam · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "5N / 6D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Beach · Family"
   ],
   [
    "Region",
    "Domestic"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Houseboat stay, Munnar tea hills and Kovalam beach. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Tea plantations & museum",
   "Mattupetty Dam",
   "Spice plantation walk",
   "Evening cultural show",
   "Periyar Lake boat ride",
   "Houseboat stay",
   "Backwater cruise",
   "Kovalam sunset"
  ],
  "nodes": [
   [
    "Munnar",
    "2 nights"
   ],
   [
    "Thekkady",
    "1 night"
   ],
   [
    "Alleppey",
    "1 night"
   ],
   [
    "Kovalam",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Kochi → Munnar",
    "D",
    "Meet at Kochi and drive up through spice and tea country to Munnar; check in and unwind amid the hills.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Munnar sightseeing",
    "BD",
    "Tea plantations, a tea museum, Mattupetty Dam and the Eravikulam viewpoints.",
    [
     "Tea plantations & museum",
     "Mattupetty Dam"
    ]
   ],
   [
    3,
    "Munnar → Thekkady",
    "BD",
    "Descend to Thekkady for a spice plantation walk and an evening cultural show.",
    [
     "Spice plantation walk",
     "Evening cultural show"
    ]
   ],
   [
    4,
    "Thekkady → Alleppey",
    "BD",
    "A boat ride on Periyar Lake, then drive to the backwaters and board your houseboat.",
    [
     "Periyar Lake boat ride",
     "Houseboat stay"
    ]
   ],
   [
    5,
    "Alleppey → Kovalam",
    "BD",
    "Cruise the backwaters at leisure, then drive to Kovalam for sunset on the beach.",
    [
     "Backwater cruise",
     "Kovalam sunset"
    ]
   ],
   [
    6,
    "Departure",
    "B",
    "Breakfast and transfer to Trivandrum airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Munnar",
    "Munnar",
    "2 nights",
    "#14a37f",
    "#0b3d56"
   ],
   [
    "Premium stay · Thekkady",
    "Thekkady",
    "1 night",
    "#14a37f",
    "#0b3d56"
   ],
   [
    "Premium stay · Alleppey",
    "Alleppey",
    "1 night",
    "#14a37f",
    "#0b3d56"
   ],
   [
    "Premium stay · Kovalam",
    "Kovalam",
    "1 night",
    "#14a37f",
    "#0b3d56"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "5 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 38500,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "royal-rajasthan": {
  "slug": "royal-rajasthan",
  "name": "Royal Rajasthan",
  "first": "Royal",
  "accent": "Rajasthan",
  "region": "dom",
  "place": "Rajasthan",
  "cats": [
   "Culture",
   "Luxury"
  ],
  "desc": "Palaces and forts across Jaipur, Jodhpur and Udaipur.",
  "rating": 4.7,
  "label": "Group departure",
  "a": "#d4a017",
  "b": "#6a3a1a",
  "fixed": false,
  "tags": [
   [
    "Group departure",
    "blue"
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Palaces and forts across Jaipur, Jodhpur and Udaipur.",
  "route": [
   "Jaipur",
   "Jodhpur",
   "Udaipur",
   "Delhi"
  ],
  "heroLabels": [
   "Hero image · Rajasthan · 1400×900",
   "Jaipur · 800×500",
   "Jodhpur · 800×500",
   "Udaipur · 800×500",
   "Delhi · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "7N / 8D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Culture · Luxury"
   ],
   [
    "Region",
    "Domestic"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Palaces and forts across Jaipur, Jodhpur and Udaipur. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Amber Fort",
   "City Palace & Hawa Mahal",
   "Pushkar Lake",
   "Evening at leisure",
   "Mehrangarh Fort",
   "Jaswant Thada",
   "Ranakpur Jain temples",
   "Sunset at Lake Pichola"
  ],
  "nodes": [
   [
    "Jaipur",
    "2 nights"
   ],
   [
    "Jodhpur",
    "2 nights"
   ],
   [
    "Udaipur",
    "2 nights"
   ],
   [
    "Delhi",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Delhi → Jaipur",
    "D",
    "Meet on arrival and drive to the Pink City; check in and rest.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Jaipur sightseeing",
    "BD",
    "Amber Fort, the City Palace and Hawa Mahal, then local bazaars.",
    [
     "Amber Fort",
     "City Palace & Hawa Mahal"
    ]
   ],
   [
    3,
    "Jaipur → Jodhpur",
    "BD",
    "A scenic drive via Ajmer and Pushkar to the Blue City.",
    [
     "Pushkar Lake",
     "Evening at leisure"
    ]
   ],
   [
    4,
    "Jodhpur sightseeing",
    "BD",
    "Mehrangarh Fort, Jaswant Thada and the Clock Tower market.",
    [
     "Mehrangarh Fort",
     "Jaswant Thada"
    ]
   ],
   [
    5,
    "Jodhpur → Udaipur",
    "BD",
    "Drive via the Ranakpur Jain temples to the City of Lakes.",
    [
     "Ranakpur Jain temples",
     "Sunset at Lake Pichola"
    ]
   ],
   [
    6,
    "Udaipur sightseeing",
    "BD",
    "The City Palace, Jagdish Temple and a boat ride on Lake Pichola.",
    [
     "City Palace",
     "Lake Pichola boat ride"
    ]
   ],
   [
    7,
    "Udaipur → Delhi",
    "BD",
    "Fly to Delhi and settle in for the night.",
    []
   ],
   [
    8,
    "Departure",
    "B",
    "Breakfast and transfer to Delhi airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Jaipur",
    "Jaipur",
    "2 nights",
    "#d4a017",
    "#6a3a1a"
   ],
   [
    "Premium stay · Jodhpur",
    "Jodhpur",
    "2 nights",
    "#d4a017",
    "#6a3a1a"
   ],
   [
    "Premium stay · Udaipur",
    "Udaipur",
    "2 nights",
    "#d4a017",
    "#6a3a1a"
   ],
   [
    "Premium stay · Delhi",
    "Delhi",
    "1 night",
    "#d4a017",
    "#6a3a1a"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "7 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 46000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "magical-ladakh": {
  "slug": "magical-ladakh",
  "name": "Magical Ladakh",
  "first": "Magical",
  "accent": "Ladakh",
  "region": "dom",
  "place": "Ladakh",
  "cats": [
   "Adventure",
   "Hills"
  ],
  "desc": "High passes, Pangong Lake and ancient monasteries.",
  "rating": 4.9,
  "label": "Few seats left",
  "a": "#4a7fb5",
  "b": "#1a2a52",
  "fixed": false,
  "tags": [
   [
    "Few seats left",
    "red"
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "High passes, Pangong Lake and ancient monasteries.",
  "route": [
   "Leh",
   "Nubra",
   "Pangong",
   "Leh"
  ],
  "heroLabels": [
   "Hero image · Ladakh · 1400×900",
   "Leh · 800×500",
   "Nubra · 800×500",
   "Pangong · 800×500",
   "Leh · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "6N / 7D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Adventure · Hills"
   ],
   [
    "Region",
    "Domestic"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "High passes, Pangong Lake and ancient monasteries. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Shanti Stupa",
   "Leh Palace",
   "Khardung La",
   "Nubra Valley",
   "Diskit Monastery",
   "Hunder sand dunes",
   "Sunrise at Pangong",
   "Chang La pass"
  ],
  "nodes": [
   [
    "Leh",
    "2 nights"
   ],
   [
    "Nubra",
    "1 night"
   ],
   [
    "Pangong",
    "1 night"
   ],
   [
    "Leh",
    "2 nights"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Leh",
    "D",
    "Land in Leh and rest to acclimatise to the altitude.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Leh local",
    "BD",
    "Shanti Stupa, Leh Palace and the local market.",
    [
     "Shanti Stupa",
     "Leh Palace"
    ]
   ],
   [
    3,
    "Leh → Nubra via Khardung La",
    "BD",
    "Cross one of the world’s highest motorable passes into the Nubra Valley.",
    [
     "Khardung La",
     "Nubra Valley"
    ]
   ],
   [
    4,
    "Nubra → Pangong Lake",
    "BD",
    "Visit Diskit Monastery and the Hunder dunes before heading to Pangong.",
    [
     "Diskit Monastery",
     "Hunder sand dunes"
    ]
   ],
   [
    5,
    "Pangong → Leh via Chang La",
    "BD",
    "Sunrise at the lake, then return over Chang La.",
    [
     "Sunrise at Pangong",
     "Chang La pass"
    ]
   ],
   [
    6,
    "Leh monasteries",
    "BD",
    "Hemis, Thiksey and Shey monasteries.",
    [
     "Hemis Monastery",
     "Thiksey & Shey"
    ]
   ],
   [
    7,
    "Departure",
    "B",
    "Breakfast and transfer to Leh airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Leh",
    "Leh",
    "2 nights",
    "#4a7fb5",
    "#1a2a52"
   ],
   [
    "Premium stay · Nubra",
    "Nubra",
    "1 night",
    "#4a7fb5",
    "#1a2a52"
   ],
   [
    "Premium stay · Pangong",
    "Pangong",
    "1 night",
    "#4a7fb5",
    "#1a2a52"
   ],
   [
    "Premium stay · Leh",
    "Leh",
    "2 nights",
    "#4a7fb5",
    "#1a2a52"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "6 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 52000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "amazing-arunachal": {
  "slug": "amazing-arunachal",
  "name": "Amazing Arunachal",
  "first": "Amazing",
  "accent": "Arunachal",
  "tags": [
   [
    "Summer special",
    ""
   ],
   [
    "Group departure",
    "blue"
   ],
   [
    "Fixed departure · 17 Oct 2026",
    "teal"
   ]
  ],
  "subtitle": "Monasteries above the clouds, high-altitude lakes and the legendary Sela Pass — a 7-night road journey through India’s eastern frontier.",
  "route": [
   "Bhalukpong",
   "Dirang",
   "Sangti Valley",
   "Tawang",
   "Shergaon"
  ],
  "heroLabels": [
   "Hero image · Tawang Monastery · 1400×900",
   "Sela Pass · 800×500",
   "PTSO Lake · 800×500",
   "Mandala Top · 800×500",
   "Bum La Pass · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "7N / 8D"
   ],
   [
    "Departure",
    "17 Oct 2026"
   ],
   [
    "Starts / ends",
    "Guwahati · Itanagar"
   ],
   [
    "Highest point",
    "15,200 ft"
   ],
   [
    "Meals",
    "7B · 7L · 7D"
   ]
  ],
  "overview": "Begin in the elephant-reserve foothills of Bhalukpong and climb through orchid valleys, 108-stupa mountaintops and snow-dusted passes to Tawang — home to a 400-year-old monastery and some of India’s most dramatic high-altitude lakes. Seven nights, one seamless road journey, with transfers, sightseeing and a tour manager included.",
  "highlights": [
   "Tawang Monastery",
   "Sela Pass · 13,700 ft",
   "Bum La Pass · 15,200 ft",
   "PTSO & Madhuri Lakes",
   "Mandala Top",
   "Jaswant Garh War Memorial",
   "Orchid Research Centre",
   "Optional river rafting"
  ],
  "nodes": [
   [
    "Bhalukpong",
    "1 night"
   ],
   [
    "Dirang",
    "1 night"
   ],
   [
    "Sangti Valley",
    "1 night"
   ],
   [
    "Tawang",
    "3 nights"
   ],
   [
    "Shergaon",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Guwahati / Itanagar → Bhalukpong",
    "D",
    "Arrive at Guwahati or Itanagar, where our representative greets you for the journey into Arunachal. First stop is Bhalukpong, an elephant-reserve landscape home to tiger, leopard, sambar, dhole, pygmy hog and Indian bison. Check in, then take a gentle nature walk along the Jia Bhoreli (Kameng) River. The evening is yours to unwind.",
    [
     "Meet & greet on arrival",
     "Nature walk to the Jia Bhoreli River",
     "Overnight in Bhalukpong"
    ]
   ],
   [
    2,
    "Bhalukpong → Dirang",
    "BLD",
    "An early start offers optional river rafting on the Jia Bhoreli and jungle trekking. After breakfast, drive to Dirang, stopping at the Orchid Research Centre in Tipi — home to around 10,000 orchids — and Nag Mandir. Keep your camera ready for waterfalls and valley views along the way.",
    [
     "Optional river rafting / jungle trek",
     "Orchid Research Centre, Tipi",
     "Nag Mandir en route"
    ]
   ],
   [
    3,
    "Dirang local, Mandala Top & Sangti Valley",
    "BLD",
    "After breakfast, explore Dirang — its monastery and hot-water spring — then visit Mandala Top, where 108 Buddhist stupas encircle the mountain crest. Continue to Sangti Valley to watch the sunset by the river before settling in for the night.",
    [
     "Dirang Monastery & hot-water spring",
     "Mandala Top — 108 stupas",
     "Sunset at Sangti Valley"
    ]
   ],
   [
    4,
    "Dirang → Tawang via Sela Pass",
    "BLD",
    "Drive towards Tawang via Dzong Fort and the Nuranang (Jung) Waterfall, then climb to Sela Pass and Sela Lake at 13,700 ft, the high-altitude gateway to Tawang. Continue to the Jaswant Garh War Memorial, honouring Rifleman Jaswant Singh Rawat of the 4 Garhwal Rifles, before arriving in Tawang for the night.",
    [
     "Dzong Fort & Nuranang Waterfall",
     "Sela Pass & Lake · 13,700 ft",
     "Jaswant Garh War Memorial"
    ]
   ],
   [
    5,
    "Tawang local sightseeing",
    "BLD",
    "Spend the day around Tawang: the 400-year-old Tawang Monastery with commanding valley views, the War Memorial and Giant Buddha statue, Urgelling Monastery — birthplace of the 6th Dalai Lama — and the local market. In the evening, attend the light and sound show at the Tawang War Memorial.",
    [
     "Tawang Monastery",
     "Urgelling Monastery & Giant Buddha",
     "Light & sound show at the War Memorial"
    ]
   ],
   [
    6,
    "Bum La Pass & high-altitude lakes",
    "BLD",
    "Head for Bum La Pass (15,200 ft), about 37 km from Tawang, then to PTSO (Pangkang Teng Tso) Lake and Sangetsar — popularly Madhuri — Lake, formed in the 1950 earthquake, with bare tree trunks standing in crystal-clear water. Dress warmly. Return to Tawang for the night.",
    [
     "Bum La Pass · 15,200 ft",
     "PTSO Lake",
     "Sangetsar (Madhuri) Lake"
    ]
   ],
   [
    7,
    "Tawang → Shergaon",
    "BLD",
    "Drive towards Shergaon, stopping at the Bomdila GRL Monastery on the way. Check in on arrival; the evening is free to unwind.",
    [
     "Bomdila GRL Monastery",
     "Evening at leisure"
    ]
   ],
   [
    8,
    "Shergaon → Itanagar",
    "BL",
    "After breakfast, check out and transfer to Itanagar airport for your onward journey.",
    [
     "Transfer to Itanagar airport"
    ]
   ]
  ],
  "stays": [
   [
    "Prasanti Cottage",
    "Bhalukpong",
    "1 night",
    "#14a37f",
    "#0b3d56"
   ],
   [
    "Hotel Mandala",
    "Dirang",
    "1 night",
    "#3b8f6a",
    "#0d2f4d"
   ],
   [
    "Lanjom Homestay",
    "Sangti Valley",
    "1 night",
    "#c98a2b",
    "#4a2f1c"
   ],
   [
    "Hotel Vivid",
    "Tawang",
    "3 nights",
    "#4a7fb5",
    "#1a2a52"
   ],
   [
    "Shergaon stay",
    "Shergaon",
    "1 night",
    "#0e9196",
    "#064a52"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended or reversed, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Security alerts and random closures may affect the itinerary, and air-cooling or air-conditioning depends on local authority declarations."
   ],
   [
    "Baggage & vehicle",
    "One check-in bag and one handbag per person, due to limited boot space. Vehicles are not wheelchair-accessible, with steps to board. Comfortable walking shoes are recommended for sightseeing."
   ],
   [
    "Pricing & airfare",
    "Airfare is based on the fare structure as of 27 January 2026; any airline increase is borne by passengers. Early arrival or late departure may incur extra charges, actioned 30 days before departure. Missed flights are treated as a no-show."
   ],
   [
    "Liability & refunds",
    "Meals are pre-set. There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings, weather, strikes or events beyond its control. Images are for representation only. Tour cost is payable in INR."
   ]
  ],
  "included": [
   "7 nights’ accommodation on twin sharing, or similar standard",
   "7 breakfasts, 7 lunches and 7 dinners, plus bottled water daily",
   "All transfers and excursions by comfortable vehicle, with entrance fees as per itinerary",
   "Professional tour manager or local representative",
   "Return economy group airfare as per itinerary, with taxes",
   "Medical insurance up to 70 years of age"
  ],
  "excluded": [
   "5% GST",
   "Porterage and personal expenses — laundry, drinks, minibar, calls",
   "Meals and excursions not mentioned in the itinerary",
   "Early arrival or late departure beyond the fixed dates",
   "Any airfare increase by the airline",
   "Tips — entirely optional and never requested"
  ],
  "perks": [
   "Return group airfare included",
   "Medical insurance up to 70 years",
   "All meals & bottled water"
  ],
  "price": 52700,
  "gst": 5,
  "departure": "17 Oct 2026",
  "priceNote": "twin / double sharing",
  "region": "dom",
  "place": "Arunachal Pradesh",
  "cats": [
   "Adventure",
   "Culture",
   "Hills"
  ],
  "desc": "Tawang, Sela Pass and Bum La — a 7-night road journey through the eastern frontier.",
  "rating": 4.8,
  "label": "Group departure",
  "a": "#3b8f6a",
  "b": "#0b3d56",
  "fixed": true
 },
 "goa-beach-escape": {
  "slug": "goa-beach-escape",
  "name": "Goa Beach Escape",
  "first": "Goa Beach",
  "accent": "Escape",
  "region": "dom",
  "place": "Goa",
  "cats": [
   "Beach",
   "Family"
  ],
  "desc": "Sun, sand and sunset cruises on the Konkan coast.",
  "rating": 4.5,
  "label": "Family favourite",
  "a": "#0e9196",
  "b": "#064a52",
  "fixed": false,
  "tags": [
   [
    "Family favourite",
    "green"
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Sun, sand and sunset cruises on the Konkan coast.",
  "route": [
   "North Goa",
   "South Goa"
  ],
  "heroLabels": [
   "Hero image · Goa · 1400×900",
   "North Goa · 800×500",
   "South Goa · 800×500",
   "North Goa · 800×500",
   "South Goa · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "3N / 4D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Beach · Family"
   ],
   [
    "Region",
    "Domestic"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Sun, sand and sunset cruises on the Konkan coast. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Fort Aguada",
   "Mandovi sunset cruise",
   "Old Goa churches",
   "Palolem Beach"
  ],
  "nodes": [
   [
    "North Goa",
    "2 nights"
   ],
   [
    "South Goa",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Goa",
    "D",
    "Arrive, check in and spend the evening on the beach.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "North Goa",
    "BD",
    "Baga, Calangute and Fort Aguada, with an evening Mandovi river cruise.",
    [
     "Fort Aguada",
     "Mandovi sunset cruise"
    ]
   ],
   [
    3,
    "South Goa",
    "BD",
    "Old Goa churches, spice plantation and a quiet beach afternoon.",
    [
     "Old Goa churches",
     "Palolem Beach"
    ]
   ],
   [
    4,
    "Departure",
    "B",
    "Breakfast and transfer to the airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · North Goa",
    "North Goa",
    "2 nights",
    "#0e9196",
    "#064a52"
   ],
   [
    "Premium stay · South Goa",
    "South Goa",
    "1 night",
    "#0e9196",
    "#064a52"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "3 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 21000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "andaman-island-hopping": {
  "slug": "andaman-island-hopping",
  "name": "Andaman Island Hopping",
  "first": "Andaman Island",
  "accent": "Hopping",
  "region": "dom",
  "place": "Andaman",
  "cats": [
   "Beach",
   "Honeymoon"
  ],
  "desc": "Radhanagar beach, snorkelling and Havelock sunsets.",
  "rating": 4.8,
  "label": "Honeymoon pick",
  "a": "#14b8be",
  "b": "#0b3d56",
  "fixed": false,
  "tags": [
   [
    "Honeymoon pick",
    "pink"
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Radhanagar beach, snorkelling and Havelock sunsets.",
  "route": [
   "Port Blair",
   "Havelock",
   "Port Blair"
  ],
  "heroLabels": [
   "Hero image · Andaman · 1400×900",
   "Port Blair · 800×500",
   "Havelock · 800×500",
   "Port Blair · 800×500",
   "Port Blair · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "5N / 6D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Beach · Honeymoon"
   ],
   [
    "Region",
    "Domestic"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Radhanagar beach, snorkelling and Havelock sunsets. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Cellular Jail",
   "Light & sound show",
   "Ferry to Havelock",
   "Radhanagar Beach",
   "Snorkelling",
   "Water sports",
   "Kalapathar Beach",
   "Free time"
  ],
  "nodes": [
   [
    "Port Blair",
    "1 night"
   ],
   [
    "Havelock",
    "3 nights"
   ],
   [
    "Port Blair",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Port Blair",
    "D",
    "Visit Cellular Jail and watch the light and sound show.",
    [
     "Cellular Jail",
     "Light & sound show"
    ]
   ],
   [
    2,
    "Port Blair → Havelock",
    "BD",
    "Ferry to Havelock and sunset at Radhanagar Beach.",
    [
     "Ferry to Havelock",
     "Radhanagar Beach"
    ]
   ],
   [
    3,
    "Elephant Beach",
    "BD",
    "Water sports and snorkelling at Elephant Beach.",
    [
     "Snorkelling",
     "Water sports"
    ]
   ],
   [
    4,
    "Kalapathar & leisure",
    "BD",
    "Kalapathar Beach and a free afternoon.",
    [
     "Kalapathar Beach",
     "Free time"
    ]
   ],
   [
    5,
    "Havelock → Port Blair",
    "BD",
    "Ferry back and explore the local markets.",
    []
   ],
   [
    6,
    "Departure",
    "B",
    "Breakfast and transfer to the airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Port Blair",
    "Port Blair",
    "1 night",
    "#14b8be",
    "#0b3d56"
   ],
   [
    "Premium stay · Havelock",
    "Havelock",
    "3 nights",
    "#14b8be",
    "#0b3d56"
   ],
   [
    "Premium stay · Port Blair",
    "Port Blair",
    "1 night",
    "#14b8be",
    "#0b3d56"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "5 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 44500,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "darjeeling-sikkim": {
  "slug": "darjeeling-sikkim",
  "name": "Darjeeling & Sikkim",
  "first": "Darjeeling &",
  "accent": "Sikkim",
  "region": "dom",
  "place": "Darjeeling & Sikkim",
  "cats": [
   "Hills",
   "Culture"
  ],
  "desc": "Toy train, tea gardens and Kanchenjunga views.",
  "rating": 4.6,
  "label": "New",
  "a": "#3b8f6a",
  "b": "#0d2f4d",
  "fixed": false,
  "tags": [
   [
    "New",
    "teal"
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Toy train, tea gardens and Kanchenjunga views.",
  "route": [
   "Gangtok",
   "Darjeeling"
  ],
  "heroLabels": [
   "Hero image · Darjeeling & Sikkim · 1400×900",
   "Gangtok · 800×500",
   "Darjeeling · 800×500",
   "Gangtok · 800×500",
   "Darjeeling · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "6N / 7D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Hills · Culture"
   ],
   [
    "Region",
    "Domestic"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Toy train, tea gardens and Kanchenjunga views. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Tsomgo Lake",
   "Baba Mandir",
   "Rumtek Monastery",
   "Enchey Monastery",
   "Tiger Hill sunrise",
   "Toy train ride",
   "Tea garden visit",
   "Himalayan Mountaineering Institute"
  ],
  "nodes": [
   [
    "Gangtok",
    "3 nights"
   ],
   [
    "Darjeeling",
    "3 nights"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Bagdogra → Gangtok",
    "D",
    "Meet on arrival and drive to Gangtok.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Tsomgo Lake & Baba Mandir",
    "BD",
    "A day trip to the glacial Tsomgo Lake and Baba Harbhajan Singh Mandir.",
    [
     "Tsomgo Lake",
     "Baba Mandir"
    ]
   ],
   [
    3,
    "Gangtok local",
    "BD",
    "Rumtek and Enchey monasteries and MG Marg.",
    [
     "Rumtek Monastery",
     "Enchey Monastery"
    ]
   ],
   [
    4,
    "Gangtok → Darjeeling",
    "BD",
    "Drive along the Teesta river to Darjeeling.",
    []
   ],
   [
    5,
    "Darjeeling sights",
    "BD",
    "Tiger Hill sunrise, Ghum Monastery and Batasia Loop, plus the toy train.",
    [
     "Tiger Hill sunrise",
     "Toy train ride"
    ]
   ],
   [
    6,
    "Darjeeling local",
    "BD",
    "A tea garden visit, the zoo and the Himalayan Mountaineering Institute.",
    [
     "Tea garden visit",
     "Himalayan Mountaineering Institute"
    ]
   ],
   [
    7,
    "Departure",
    "B",
    "Breakfast and transfer to Bagdogra.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Gangtok",
    "Gangtok",
    "3 nights",
    "#3b8f6a",
    "#0d2f4d"
   ],
   [
    "Premium stay · Darjeeling",
    "Darjeeling",
    "3 nights",
    "#3b8f6a",
    "#0d2f4d"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "6 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 29500,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "kashmir-paradise": {
  "slug": "kashmir-paradise",
  "name": "Kashmir Paradise",
  "first": "Kashmir",
  "accent": "Paradise",
  "region": "dom",
  "place": "Kashmir",
  "cats": [
   "Hills",
   "Honeymoon"
  ],
  "desc": "Shikara rides on Dal Lake, Gulmarg and Pahalgam.",
  "rating": 4.7,
  "label": "Bestseller",
  "a": "#b85a7a",
  "b": "#2a2050",
  "fixed": false,
  "tags": [
   [
    "Bestseller",
    ""
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Shikara rides on Dal Lake, Gulmarg and Pahalgam.",
  "route": [
   "Srinagar",
   "Gulmarg",
   "Pahalgam",
   "Srinagar"
  ],
  "heroLabels": [
   "Hero image · Kashmir · 1400×900",
   "Srinagar · 800×500",
   "Gulmarg · 800×500",
   "Pahalgam · 800×500",
   "Srinagar · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "5N / 6D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Hills · Honeymoon"
   ],
   [
    "Region",
    "Domestic"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Shikara rides on Dal Lake, Gulmarg and Pahalgam. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Dal Lake shikara ride",
   "Houseboat view",
   "Nishat & Shalimar gardens",
   "Chashme Shahi",
   "Gulmarg Gondola",
   "Alpine meadows",
   "Saffron fields",
   "Pahalgam"
  ],
  "nodes": [
   [
    "Srinagar",
    "2 nights"
   ],
   [
    "Gulmarg",
    "1 night"
   ],
   [
    "Pahalgam",
    "1 night"
   ],
   [
    "Srinagar",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Srinagar",
    "D",
    "A shikara ride on Dal Lake at sunset.",
    [
     "Dal Lake shikara ride",
     "Houseboat view"
    ]
   ],
   [
    2,
    "Srinagar gardens",
    "BD",
    "Nishat, Shalimar and Chashme Shahi Mughal gardens.",
    [
     "Nishat & Shalimar gardens",
     "Chashme Shahi"
    ]
   ],
   [
    3,
    "Srinagar → Gulmarg",
    "BD",
    "Ride the Gulmarg Gondola over the alpine meadows.",
    [
     "Gulmarg Gondola",
     "Alpine meadows"
    ]
   ],
   [
    4,
    "Gulmarg → Pahalgam",
    "BD",
    "Pass the saffron fields of Pampore on the way to Pahalgam.",
    [
     "Saffron fields",
     "Pahalgam"
    ]
   ],
   [
    5,
    "Pahalgam → Srinagar",
    "BD",
    "Betaab Valley and Aru Valley before returning to Srinagar.",
    [
     "Betaab Valley",
     "Aru Valley"
    ]
   ],
   [
    6,
    "Departure",
    "B",
    "Breakfast and transfer to Srinagar airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Srinagar",
    "Srinagar",
    "2 nights",
    "#b85a7a",
    "#2a2050"
   ],
   [
    "Premium stay · Gulmarg",
    "Gulmarg",
    "1 night",
    "#b85a7a",
    "#2a2050"
   ],
   [
    "Premium stay · Pahalgam",
    "Pahalgam",
    "1 night",
    "#b85a7a",
    "#2a2050"
   ],
   [
    "Premium stay · Srinagar",
    "Srinagar",
    "1 night",
    "#b85a7a",
    "#2a2050"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "5 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 41000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "himachal-highlands": {
  "slug": "himachal-highlands",
  "name": "Himachal Highlands",
  "first": "Himachal",
  "accent": "Highlands",
  "region": "dom",
  "place": "Himachal",
  "cats": [
   "Hills",
   "Adventure",
   "Family"
  ],
  "desc": "Shimla, Manali and the snow-capped Rohtang pass.",
  "rating": 4.6,
  "label": "",
  "a": "#2f9e7a",
  "b": "#0d3b3b",
  "fixed": false,
  "tags": [
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Shimla, Manali and the snow-capped Rohtang pass.",
  "route": [
   "Shimla",
   "Manali",
   "Chandigarh"
  ],
  "heroLabels": [
   "Hero image · Himachal · 1400×900",
   "Shimla · 800×500",
   "Manali · 800×500",
   "Chandigarh · 800×500",
   "Shimla · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "6N / 7D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Hills · Adventure"
   ],
   [
    "Region",
    "Domestic"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Shimla, Manali and the snow-capped Rohtang pass. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Mall Road & Ridge",
   "Kufri",
   "Beas river",
   "Pandoh Dam",
   "Hadimba Temple",
   "Old Manali",
   "Solang Valley",
   "Atal Tunnel"
  ],
  "nodes": [
   [
    "Shimla",
    "2 nights"
   ],
   [
    "Manali",
    "3 nights"
   ],
   [
    "Chandigarh",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Chandigarh → Shimla",
    "D",
    "Drive up to Shimla and check in.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Shimla sightseeing",
    "BD",
    "Mall Road, the Ridge and Kufri.",
    [
     "Mall Road & Ridge",
     "Kufri"
    ]
   ],
   [
    3,
    "Shimla → Manali",
    "BD",
    "A scenic drive along the Beas via Kullu.",
    [
     "Beas river",
     "Pandoh Dam"
    ]
   ],
   [
    4,
    "Manali local",
    "BD",
    "Hadimba Temple, Old Manali and the Mall.",
    [
     "Hadimba Temple",
     "Old Manali"
    ]
   ],
   [
    5,
    "Solang Valley",
    "BD",
    "Solang Valley and Atal Tunnel, with Rohtang subject to permits and weather.",
    [
     "Solang Valley",
     "Atal Tunnel"
    ]
   ],
   [
    6,
    "Manali → Chandigarh",
    "BD",
    "Return drive to Chandigarh.",
    []
   ],
   [
    7,
    "Departure",
    "B",
    "Breakfast and transfer to the airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Shimla",
    "Shimla",
    "2 nights",
    "#2f9e7a",
    "#0d3b3b"
   ],
   [
    "Premium stay · Manali",
    "Manali",
    "3 nights",
    "#2f9e7a",
    "#0d3b3b"
   ],
   [
    "Premium stay · Chandigarh",
    "Chandigarh",
    "1 night",
    "#2f9e7a",
    "#0d3b3b"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "6 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 33000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "corbett-ranthambore-safari": {
  "slug": "corbett-ranthambore-safari",
  "name": "Corbett & Ranthambore Safari",
  "first": "Corbett & Ranthambore",
  "accent": "Safari",
  "region": "dom",
  "place": "Wildlife circuit",
  "cats": [
   "Wildlife",
   "Adventure"
  ],
  "desc": "Jeep safaris in search of tigers and wild jungle trails.",
  "rating": 4.5,
  "label": "New",
  "a": "#c98a2b",
  "b": "#4a2f1c",
  "fixed": false,
  "tags": [
   [
    "New",
    "teal"
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Jeep safaris in search of tigers and wild jungle trails.",
  "route": [
   "Corbett",
   "Ranthambore"
  ],
  "heroLabels": [
   "Hero image · Wildlife circuit · 1400×900",
   "Corbett · 800×500",
   "Ranthambore · 800×500",
   "Corbett · 800×500",
   "Ranthambore · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "4N / 5D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Wildlife · Adventure"
   ],
   [
    "Region",
    "Domestic"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Jeep safaris in search of tigers and wild jungle trails. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Morning jeep safari",
   "Evening jeep safari",
   "Jeep safaris",
   "Ranthambore Fort"
  ],
  "nodes": [
   [
    "Corbett",
    "2 nights"
   ],
   [
    "Ranthambore",
    "2 nights"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Delhi → Corbett",
    "D",
    "Drive to Jim Corbett National Park.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Corbett safaris",
    "BD",
    "Morning and evening jeep safaris through the park.",
    [
     "Morning jeep safari",
     "Evening jeep safari"
    ]
   ],
   [
    3,
    "Corbett → Ranthambore",
    "BD",
    "A long transfer to Ranthambore by road and rail via Delhi.",
    []
   ],
   [
    4,
    "Ranthambore safaris",
    "BD",
    "Jeep safaris through the park and around the fort.",
    [
     "Jeep safaris",
     "Ranthambore Fort"
    ]
   ],
   [
    5,
    "Departure",
    "B",
    "Breakfast and transfer to Jaipur for onward travel.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Corbett",
    "Corbett",
    "2 nights",
    "#c98a2b",
    "#4a2f1c"
   ],
   [
    "Premium stay · Ranthambore",
    "Ranthambore",
    "2 nights",
    "#c98a2b",
    "#4a2f1c"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "4 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 36000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "bali-nusa-penida": {
  "slug": "bali-nusa-penida",
  "name": "Bali & Nusa Penida",
  "first": "Bali & Nusa",
  "accent": "Penida",
  "region": "intl",
  "place": "Indonesia",
  "cats": [
   "Beach",
   "Honeymoon",
   "Culture"
  ],
  "desc": "Temples, volcanic views and cliffside beaches.",
  "rating": 4.8,
  "label": "Bestseller",
  "a": "#0e9196",
  "b": "#064a52",
  "fixed": false,
  "tags": [
   [
    "Bestseller",
    ""
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Temples, volcanic views and cliffside beaches.",
  "route": [
   "Ubud",
   "Uluwatu"
  ],
  "heroLabels": [
   "Hero image · Indonesia · 1400×900",
   "Ubud · 800×500",
   "Uluwatu · 800×500",
   "Ubud · 800×500",
   "Uluwatu · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "5N / 6D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Beach · Honeymoon"
   ],
   [
    "Region",
    "International"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Temples, volcanic views and cliffside beaches. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Tegallalang rice terraces",
   "Tirta Empul",
   "Kintamani",
   "Cliffside views",
   "Kelingking Beach",
   "Angel’s Billabong",
   "Uluwatu Temple",
   "Kecak dance"
  ],
  "nodes": [
   [
    "Ubud",
    "2 nights"
   ],
   [
    "Uluwatu",
    "3 nights"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Bali → Ubud",
    "D",
    "Meet on arrival and transfer to Ubud.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Ubud highlights",
    "BD",
    "Tegallalang rice terraces, the Monkey Forest and Tirta Empul.",
    [
     "Tegallalang rice terraces",
     "Tirta Empul"
    ]
   ],
   [
    3,
    "Ubud → Uluwatu",
    "BD",
    "Via Kintamani volcano views to the southern coast.",
    [
     "Kintamani",
     "Cliffside views"
    ]
   ],
   [
    4,
    "Nusa Penida",
    "BD",
    "A day trip to Kelingking and Angel’s Billabong.",
    [
     "Kelingking Beach",
     "Angel’s Billabong"
    ]
   ],
   [
    5,
    "Uluwatu evening",
    "BD",
    "Uluwatu Temple, a Kecak dance and dinner at Jimbaran.",
    [
     "Uluwatu Temple",
     "Kecak dance"
    ]
   ],
   [
    6,
    "Departure",
    "B",
    "Breakfast and transfer to the airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Ubud",
    "Ubud",
    "2 nights",
    "#0e9196",
    "#064a52"
   ],
   [
    "Premium stay · Uluwatu",
    "Uluwatu",
    "3 nights",
    "#0e9196",
    "#064a52"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "5 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips",
   "Visa fees and travel insurance"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 58000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "dubai-abu-dhabi": {
  "slug": "dubai-abu-dhabi",
  "name": "Dubai & Abu Dhabi",
  "first": "Dubai & Abu",
  "accent": "Dhabi",
  "region": "intl",
  "place": "UAE",
  "cats": [
   "Luxury",
   "Family"
  ],
  "desc": "Burj Khalifa, desert safari and Sheikh Zayed Mosque.",
  "rating": 4.7,
  "label": "Family favourite",
  "a": "#e0a800",
  "b": "#0e6a73",
  "fixed": false,
  "tags": [
   [
    "Family favourite",
    "green"
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Burj Khalifa, desert safari and Sheikh Zayed Mosque.",
  "route": [
   "Dubai",
   "Abu Dhabi"
  ],
  "heroLabels": [
   "Hero image · UAE · 1400×900",
   "Dubai · 800×500",
   "Abu Dhabi · 800×500",
   "Dubai · 800×500",
   "Abu Dhabi · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "4N / 5D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Luxury · Family"
   ],
   [
    "Region",
    "International"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Burj Khalifa, desert safari and Sheikh Zayed Mosque. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Burj Khalifa",
   "Dubai Mall fountain",
   "Dune bashing",
   "Desert BBQ dinner",
   "Sheikh Zayed Grand Mosque",
   "Corniche"
  ],
  "nodes": [
   [
    "Dubai",
    "3 nights"
   ],
   [
    "Abu Dhabi",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Dubai",
    "D",
    "Transfer to your hotel and relax.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Dubai city",
    "BD",
    "Burj Khalifa, Dubai Mall and the fountain show.",
    [
     "Burj Khalifa",
     "Dubai Mall fountain"
    ]
   ],
   [
    3,
    "Desert safari",
    "BD",
    "Dune bashing and a barbecue dinner under the stars.",
    [
     "Dune bashing",
     "Desert BBQ dinner"
    ]
   ],
   [
    4,
    "Abu Dhabi",
    "BD",
    "Sheikh Zayed Grand Mosque and the Corniche.",
    [
     "Sheikh Zayed Grand Mosque",
     "Corniche"
    ]
   ],
   [
    5,
    "Departure",
    "B",
    "Transfer to Dubai airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Dubai",
    "Dubai",
    "3 nights",
    "#e0a800",
    "#0e6a73"
   ],
   [
    "Premium stay · Abu Dhabi",
    "Abu Dhabi",
    "1 night",
    "#e0a800",
    "#0e6a73"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "4 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips",
   "Visa fees and travel insurance"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 49500,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "thailand-island-trails": {
  "slug": "thailand-island-trails",
  "name": "Thailand Island Trails",
  "first": "Thailand Island",
  "accent": "Trails",
  "region": "intl",
  "place": "Thailand",
  "cats": [
   "Beach",
   "Family",
   "Adventure"
  ],
  "desc": "Phuket, Krabi and the emerald waters of Phi Phi.",
  "rating": 4.6,
  "label": "Group departure",
  "a": "#14a37f",
  "b": "#0b3d56",
  "fixed": false,
  "tags": [
   [
    "Group departure",
    "blue"
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Phuket, Krabi and the emerald waters of Phi Phi.",
  "route": [
   "Phuket",
   "Krabi"
  ],
  "heroLabels": [
   "Hero image · Thailand · 1400×900",
   "Phuket · 800×500",
   "Krabi · 800×500",
   "Phuket · 800×500",
   "Krabi · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "5N / 6D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Beach · Family"
   ],
   [
    "Region",
    "International"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Phuket, Krabi and the emerald waters of Phi Phi. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Maya Bay",
   "Snorkelling",
   "Big Buddha",
   "Promthep Cape",
   "Hong Island",
   "Island hopping",
   "Railay Beach",
   "Free time"
  ],
  "nodes": [
   [
    "Phuket",
    "3 nights"
   ],
   [
    "Krabi",
    "2 nights"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Phuket",
    "D",
    "Transfer to your hotel.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Phi Phi Islands",
    "BD",
    "A speedboat day trip with snorkelling.",
    [
     "Maya Bay",
     "Snorkelling"
    ]
   ],
   [
    3,
    "Phuket sights",
    "BD",
    "Big Buddha, Old Town and Promthep Cape sunset.",
    [
     "Big Buddha",
     "Promthep Cape"
    ]
   ],
   [
    4,
    "Phuket → Krabi",
    "BD",
    "Island hopping on the way to Krabi.",
    [
     "Hong Island",
     "Island hopping"
    ]
   ],
   [
    5,
    "Krabi",
    "BD",
    "Railay Beach and a free afternoon.",
    [
     "Railay Beach",
     "Free time"
    ]
   ],
   [
    6,
    "Departure",
    "B",
    "Transfer to the airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Phuket",
    "Phuket",
    "3 nights",
    "#14a37f",
    "#0b3d56"
   ],
   [
    "Premium stay · Krabi",
    "Krabi",
    "2 nights",
    "#14a37f",
    "#0b3d56"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "5 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips",
   "Visa fees and travel insurance"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 46500,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "maldives-overwater-bliss": {
  "slug": "maldives-overwater-bliss",
  "name": "Maldives Overwater Bliss",
  "first": "Maldives Overwater",
  "accent": "Bliss",
  "region": "intl",
  "place": "Maldives",
  "cats": [
   "Beach",
   "Luxury",
   "Honeymoon"
  ],
  "desc": "Private villas, lagoons and world-class diving.",
  "rating": 4.9,
  "label": "Honeymoon pick",
  "a": "#14b8be",
  "b": "#0a3d5a",
  "fixed": false,
  "tags": [
   [
    "Honeymoon pick",
    "pink"
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Private villas, lagoons and world-class diving.",
  "route": [
   "Overwater villa resort"
  ],
  "heroLabels": [
   "Hero image · Maldives · 1400×900",
   "Overwater villa resort · 800×500",
   "Overwater villa resort · 800×500",
   "Overwater villa resort · 800×500",
   "Overwater villa resort · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "4N / 5D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Beach · Luxury"
   ],
   [
    "Region",
    "International"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Private villas, lagoons and world-class diving. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "House reef snorkelling",
   "Lagoon time",
   "Dolphin cruise",
   "Sunset",
   "Sandbank picnic",
   "Spa time"
  ],
  "nodes": [
   [
    "Overwater villa resort",
    "4 nights"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Malé → resort",
    "D",
    "Speedboat to your resort and settle into your villa.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Lagoon & snorkelling",
    "BD",
    "Snorkel the house reef and relax by the lagoon.",
    [
     "House reef snorkelling",
     "Lagoon time"
    ]
   ],
   [
    3,
    "Dolphin cruise",
    "BD",
    "A sunset dolphin cruise.",
    [
     "Dolphin cruise",
     "Sunset"
    ]
   ],
   [
    4,
    "Sandbank picnic",
    "BD",
    "A private sandbank picnic.",
    [
     "Sandbank picnic",
     "Spa time"
    ]
   ],
   [
    5,
    "Departure",
    "B",
    "Transfer to Malé airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Overwater villa resort",
    "Overwater villa resort",
    "4 nights",
    "#14b8be",
    "#0a3d5a"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "4 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips",
   "Visa fees and travel insurance"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 98000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "blissful-japan": {
  "slug": "blissful-japan",
  "name": "Blissful Japan",
  "first": "Blissful",
  "accent": "Japan",
  "region": "intl",
  "place": "Japan",
  "cats": [
   "Culture",
   "Hills"
  ],
  "desc": "Tokyo neon, Kyoto temples and views of Mount Fuji.",
  "rating": 4.9,
  "label": "New",
  "a": "#d8584a",
  "b": "#2a3f5a",
  "fixed": false,
  "tags": [
   [
    "New",
    "teal"
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Tokyo neon, Kyoto temples and views of Mount Fuji.",
  "route": [
   "Tokyo",
   "Hakone",
   "Kyoto",
   "Osaka"
  ],
  "heroLabels": [
   "Hero image · Japan · 1400×900",
   "Tokyo · 800×500",
   "Hakone · 800×500",
   "Kyoto · 800×500",
   "Osaka · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "9N / 10D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Culture · Hills"
   ],
   [
    "Region",
    "International"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Tokyo neon, Kyoto temples and views of Mount Fuji. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Senso-ji",
   "Shibuya Crossing",
   "Akihabara",
   "teamLab",
   "Lake Ashi cruise",
   "Mount Fuji views",
   "Fushimi Inari",
   "Kinkaku-ji"
  ],
  "nodes": [
   [
    "Tokyo",
    "4 nights"
   ],
   [
    "Hakone",
    "1 night"
   ],
   [
    "Kyoto",
    "3 nights"
   ],
   [
    "Osaka",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Tokyo",
    "D",
    "Transfer to your hotel.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Tokyo highlights",
    "BD",
    "Senso-ji, Meiji Shrine and Shibuya Crossing.",
    [
     "Senso-ji",
     "Shibuya Crossing"
    ]
   ],
   [
    3,
    "Modern Tokyo",
    "BD",
    "Akihabara and an immersive digital art museum.",
    [
     "Akihabara",
     "teamLab"
    ]
   ],
   [
    4,
    "Tokyo free day",
    "BD",
    "Free time or an optional Nikko trip.",
    []
   ],
   [
    5,
    "Tokyo → Hakone",
    "BD",
    "Lake Ashi cruise with views of Mount Fuji.",
    [
     "Lake Ashi cruise",
     "Mount Fuji views"
    ]
   ],
   [
    6,
    "Hakone → Kyoto",
    "BD",
    "Ride the Shinkansen to Kyoto.",
    []
   ],
   [
    7,
    "Kyoto temples",
    "BD",
    "Fushimi Inari, Kinkaku-ji and Gion.",
    [
     "Fushimi Inari",
     "Kinkaku-ji"
    ]
   ],
   [
    8,
    "Arashiyama & Nara",
    "BD",
    "The bamboo grove and Nara’s deer park.",
    [
     "Arashiyama bamboo grove",
     "Nara"
    ]
   ],
   [
    9,
    "Kyoto → Osaka",
    "BD",
    "Osaka Castle and Dotonbori.",
    [
     "Osaka Castle",
     "Dotonbori"
    ]
   ],
   [
    10,
    "Departure",
    "B",
    "Transfer to Kansai airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Tokyo",
    "Tokyo",
    "4 nights",
    "#d8584a",
    "#2a3f5a"
   ],
   [
    "Premium stay · Hakone",
    "Hakone",
    "1 night",
    "#d8584a",
    "#2a3f5a"
   ],
   [
    "Premium stay · Kyoto",
    "Kyoto",
    "3 nights",
    "#d8584a",
    "#2a3f5a"
   ],
   [
    "Premium stay · Osaka",
    "Osaka",
    "1 night",
    "#d8584a",
    "#2a3f5a"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "9 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips",
   "Visa fees and travel insurance"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 195000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "vietnam-unfolded": {
  "slug": "vietnam-unfolded",
  "name": "Vietnam Unfolded",
  "first": "Vietnam",
  "accent": "Unfolded",
  "region": "intl",
  "place": "Vietnam",
  "cats": [
   "Culture",
   "Adventure"
  ],
  "desc": "Hanoi to Saigon via Hoi An and a Halong Bay cruise.",
  "rating": 4.6,
  "label": "",
  "a": "#14a37f",
  "b": "#0b3d56",
  "fixed": false,
  "tags": [
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Hanoi to Saigon via Hoi An and a Halong Bay cruise.",
  "route": [
   "Hanoi",
   "Halong Bay",
   "Hoi An",
   "Ho Chi Minh City"
  ],
  "heroLabels": [
   "Hero image · Vietnam · 1400×900",
   "Hanoi · 800×500",
   "Halong Bay · 800×500",
   "Hoi An · 800×500",
   "Ho Chi Minh City · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "6N / 7D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Culture · Adventure"
   ],
   [
    "Region",
    "International"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Hanoi to Saigon via Hoi An and a Halong Bay cruise. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Old Quarter",
   "Temple of Literature",
   "Halong Bay cruise",
   "Overnight on board",
   "Hoi An Ancient Town",
   "Lantern evening",
   "Golden Bridge",
   "Ba Na Hills"
  ],
  "nodes": [
   [
    "Hanoi",
    "2 nights"
   ],
   [
    "Halong Bay",
    "1 night"
   ],
   [
    "Hoi An",
    "2 nights"
   ],
   [
    "Ho Chi Minh City",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Hanoi",
    "D",
    "Transfer to your hotel.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Hanoi sights",
    "BD",
    "The Old Quarter, Temple of Literature and Ho Chi Minh Mausoleum.",
    [
     "Old Quarter",
     "Temple of Literature"
    ]
   ],
   [
    3,
    "Halong Bay cruise",
    "BD",
    "Cruise among limestone karsts and stay overnight on board.",
    [
     "Halong Bay cruise",
     "Overnight on board"
    ]
   ],
   [
    4,
    "Hanoi → Hoi An",
    "BD",
    "Fly to Da Nang and explore Hoi An’s Ancient Town.",
    [
     "Hoi An Ancient Town",
     "Lantern evening"
    ]
   ],
   [
    5,
    "Ba Na Hills",
    "BD",
    "The Golden Bridge at Ba Na Hills.",
    [
     "Golden Bridge",
     "Ba Na Hills"
    ]
   ],
   [
    6,
    "Hoi An → Ho Chi Minh City",
    "BD",
    "Fly south and visit the Cu Chi tunnels.",
    [
     "Cu Chi tunnels",
     "Saigon evening"
    ]
   ],
   [
    7,
    "Departure",
    "B",
    "Transfer to the airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Hanoi",
    "Hanoi",
    "2 nights",
    "#14a37f",
    "#0b3d56"
   ],
   [
    "Premium stay · Halong Bay",
    "Halong Bay",
    "1 night",
    "#14a37f",
    "#0b3d56"
   ],
   [
    "Premium stay · Hoi An",
    "Hoi An",
    "2 nights",
    "#14a37f",
    "#0b3d56"
   ],
   [
    "Premium stay · Ho Chi Minh City",
    "Ho Chi Minh City",
    "1 night",
    "#14a37f",
    "#0b3d56"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "6 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips",
   "Visa fees and travel insurance"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 72000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "swiss-alps-paris": {
  "slug": "swiss-alps-paris",
  "name": "Swiss Alps & Paris",
  "first": "Swiss Alps &",
  "accent": "Paris",
  "region": "intl",
  "place": "Europe",
  "cats": [
   "Luxury",
   "Hills",
   "Honeymoon"
  ],
  "desc": "Glacier trains, alpine lakes and the City of Light.",
  "rating": 4.8,
  "label": "Few seats left",
  "a": "#4a7fb5",
  "b": "#1a2a52",
  "fixed": false,
  "tags": [
   [
    "Few seats left",
    "red"
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Glacier trains, alpine lakes and the City of Light.",
  "route": [
   "Paris",
   "Lucerne",
   "Interlaken",
   "Zurich"
  ],
  "heroLabels": [
   "Hero image · Europe · 1400×900",
   "Paris · 800×500",
   "Lucerne · 800×500",
   "Interlaken · 800×500",
   "Zurich · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "8N / 9D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Luxury · Hills"
   ],
   [
    "Region",
    "International"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Glacier trains, alpine lakes and the City of Light. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Eiffel Tower",
   "Seine cruise",
   "Chapel Bridge",
   "Lake Lucerne",
   "Mount Titlis",
   "Glacier cave",
   "Jungfraujoch",
   "Alpine views"
  ],
  "nodes": [
   [
    "Paris",
    "3 nights"
   ],
   [
    "Lucerne",
    "2 nights"
   ],
   [
    "Interlaken",
    "2 nights"
   ],
   [
    "Zurich",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Paris",
    "D",
    "Transfer to your hotel.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Paris highlights",
    "BD",
    "The Eiffel Tower and a Seine river cruise.",
    [
     "Eiffel Tower",
     "Seine cruise"
    ]
   ],
   [
    3,
    "Paris free day",
    "BD",
    "Free day, or an optional Versailles excursion.",
    []
   ],
   [
    4,
    "Paris → Lucerne",
    "BD",
    "High-speed train to Lucerne and Chapel Bridge.",
    [
     "Chapel Bridge",
     "Lake Lucerne"
    ]
   ],
   [
    5,
    "Mount Titlis",
    "BD",
    "A cable-car excursion to the glacier.",
    [
     "Mount Titlis",
     "Glacier cave"
    ]
   ],
   [
    6,
    "Lucerne → Interlaken",
    "BD",
    "The scenic route to Interlaken.",
    []
   ],
   [
    7,
    "Jungfraujoch",
    "BD",
    "The Top of Europe by cogwheel train.",
    [
     "Jungfraujoch",
     "Alpine views"
    ]
   ],
   [
    8,
    "Interlaken → Zurich",
    "BD",
    "Explore Zurich’s old town.",
    [
     "Zurich old town",
     "Lake promenade"
    ]
   ],
   [
    9,
    "Departure",
    "B",
    "Transfer to Zurich airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Paris",
    "Paris",
    "3 nights",
    "#4a7fb5",
    "#1a2a52"
   ],
   [
    "Premium stay · Lucerne",
    "Lucerne",
    "2 nights",
    "#4a7fb5",
    "#1a2a52"
   ],
   [
    "Premium stay · Interlaken",
    "Interlaken",
    "2 nights",
    "#4a7fb5",
    "#1a2a52"
   ],
   [
    "Premium stay · Zurich",
    "Zurich",
    "1 night",
    "#4a7fb5",
    "#1a2a52"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "8 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips",
   "Visa fees and travel insurance"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 215000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "jewel-of-the-nile": {
  "slug": "jewel-of-the-nile",
  "name": "Jewel of the Nile",
  "first": "Jewel of the",
  "accent": "Nile",
  "region": "intl",
  "place": "Egypt",
  "cats": [
   "Culture",
   "Luxury"
  ],
  "desc": "Pyramids, Luxor and a luxury Nile cruise.",
  "rating": 4.7,
  "label": "",
  "a": "#c98a2b",
  "b": "#4a2f1c",
  "fixed": false,
  "tags": [
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Pyramids, Luxor and a luxury Nile cruise.",
  "route": [
   "Cairo",
   "Aswan",
   "Nile cruise",
   "Luxor",
   "Cairo"
  ],
  "heroLabels": [
   "Hero image · Egypt · 1400×900",
   "Cairo · 800×500",
   "Aswan · 800×500",
   "Nile cruise · 800×500",
   "Luxor · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "11N / 12D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Culture · Luxury"
   ],
   [
    "Region",
    "International"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Pyramids, Luxor and a luxury Nile cruise. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Pyramids of Giza",
   "The Sphinx",
   "Egyptian Museum",
   "Khan el-Khalili",
   "Philae Temple",
   "Aswan",
   "Abu Simbel",
   "Nubian village"
  ],
  "nodes": [
   [
    "Cairo",
    "3 nights"
   ],
   [
    "Aswan",
    "2 nights"
   ],
   [
    "Nile cruise",
    "3 nights"
   ],
   [
    "Luxor",
    "2 nights"
   ],
   [
    "Cairo",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Cairo",
    "D",
    "Transfer to your hotel.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Giza",
    "BD",
    "The Pyramids and the Sphinx.",
    [
     "Pyramids of Giza",
     "The Sphinx"
    ]
   ],
   [
    3,
    "Cairo museums & bazaar",
    "BD",
    "The Egyptian Museum and Khan el-Khalili.",
    [
     "Egyptian Museum",
     "Khan el-Khalili"
    ]
   ],
   [
    4,
    "Cairo → Aswan",
    "BD",
    "Fly to Aswan and visit Philae Temple.",
    [
     "Philae Temple",
     "Aswan"
    ]
   ],
   [
    5,
    "Aswan",
    "BD",
    "An optional Abu Simbel excursion.",
    [
     "Abu Simbel",
     "Nubian village"
    ]
   ],
   [
    6,
    "Nile cruise begins",
    "BD",
    "Board your cruise and visit Kom Ombo.",
    [
     "Board your cruise",
     "Kom Ombo"
    ]
   ],
   [
    7,
    "Edfu",
    "BD",
    "The Temple of Horus at Edfu.",
    [
     "Temple of Horus",
     "Nile sailing"
    ]
   ],
   [
    8,
    "Esna → Luxor",
    "BD",
    "Pass through the Esna lock and arrive in Luxor.",
    [
     "Esna lock",
     "Arrive in Luxor"
    ]
   ],
   [
    9,
    "West Bank",
    "BD",
    "The Valley of the Kings and Hatshepsut Temple.",
    [
     "Valley of the Kings",
     "Hatshepsut Temple"
    ]
   ],
   [
    10,
    "Karnak & Luxor",
    "BD",
    "Karnak and Luxor temples.",
    [
     "Karnak Temple",
     "Luxor Temple"
    ]
   ],
   [
    11,
    "Luxor → Cairo",
    "BD",
    "Fly to Cairo.",
    []
   ],
   [
    12,
    "Departure",
    "B",
    "Transfer to the airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Cairo",
    "Cairo",
    "3 nights",
    "#c98a2b",
    "#4a2f1c"
   ],
   [
    "Premium stay · Aswan",
    "Aswan",
    "2 nights",
    "#c98a2b",
    "#4a2f1c"
   ],
   [
    "Premium stay · Nile cruise",
    "Nile cruise",
    "3 nights",
    "#c98a2b",
    "#4a2f1c"
   ],
   [
    "Premium stay · Luxor",
    "Luxor",
    "2 nights",
    "#c98a2b",
    "#4a2f1c"
   ],
   [
    "Premium stay · Cairo",
    "Cairo",
    "1 night",
    "#c98a2b",
    "#4a2f1c"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "11 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips",
   "Visa fees and travel insurance"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 148000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "scenic-new-zealand": {
  "slug": "scenic-new-zealand",
  "name": "Scenic New Zealand",
  "first": "Scenic New",
  "accent": "Zealand",
  "region": "intl",
  "place": "New Zealand",
  "cats": [
   "Adventure",
   "Hills",
   "Luxury"
  ],
  "desc": "Glowworm caves, Milford Sound fiords and Queenstown’s Skyline gondola.",
  "rating": 4.8,
  "label": "",
  "a": "#3b8f6a",
  "b": "#0d2f4d",
  "fixed": false,
  "tags": [
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Glowworm caves, Milford Sound fiords and Queenstown’s Skyline gondola.",
  "route": [
   "Auckland",
   "Rotorua",
   "Queenstown",
   "Christchurch"
  ],
  "heroLabels": [
   "Hero image · New Zealand · 1400×900",
   "Auckland · 800×500",
   "Rotorua · 800×500",
   "Queenstown · 800×500",
   "Christchurch · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "9N / 10D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Adventure · Hills"
   ],
   [
    "Region",
    "International"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Glowworm caves, Milford Sound fiords and Queenstown’s Skyline gondola. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Sky Tower",
   "Harbour views",
   "Waitomo caves",
   "Rotorua",
   "Te Puia",
   "Māori cultural evening",
   "Skyline Gondola",
   "Lake Wakatipu"
  ],
  "nodes": [
   [
    "Auckland",
    "2 nights"
   ],
   [
    "Rotorua",
    "2 nights"
   ],
   [
    "Queenstown",
    "3 nights"
   ],
   [
    "Christchurch",
    "2 nights"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Auckland",
    "D",
    "Transfer to your hotel.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Auckland highlights",
    "BD",
    "The Sky Tower and harbour.",
    [
     "Sky Tower",
     "Harbour views"
    ]
   ],
   [
    3,
    "Auckland → Rotorua",
    "BD",
    "The Waitomo glowworm caves on the way.",
    [
     "Waitomo caves",
     "Rotorua"
    ]
   ],
   [
    4,
    "Rotorua",
    "BD",
    "Te Puia geothermal valley and a Māori cultural evening.",
    [
     "Te Puia",
     "Māori cultural evening"
    ]
   ],
   [
    5,
    "Rotorua → Queenstown",
    "BD",
    "Fly south and ride the Skyline Gondola.",
    [
     "Skyline Gondola",
     "Lake Wakatipu"
    ]
   ],
   [
    6,
    "Milford Sound",
    "BD",
    "A scenic cruise through the fiord.",
    [
     "Milford Sound cruise",
     "Waterfalls"
    ]
   ],
   [
    7,
    "Queenstown",
    "BD",
    "Arrowtown and optional adventure activities.",
    [
     "Arrowtown",
     "Optional activities"
    ]
   ],
   [
    8,
    "Queenstown → Christchurch",
    "BD",
    "Via Lake Tekapo.",
    [
     "Lake Tekapo",
     "Mount Cook views"
    ]
   ],
   [
    9,
    "Christchurch",
    "BD",
    "Botanic Gardens and punting on the Avon.",
    [
     "Botanic Gardens",
     "Avon river"
    ]
   ],
   [
    10,
    "Departure",
    "B",
    "Transfer to the airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Auckland",
    "Auckland",
    "2 nights",
    "#3b8f6a",
    "#0d2f4d"
   ],
   [
    "Premium stay · Rotorua",
    "Rotorua",
    "2 nights",
    "#3b8f6a",
    "#0d2f4d"
   ],
   [
    "Premium stay · Queenstown",
    "Queenstown",
    "3 nights",
    "#3b8f6a",
    "#0d2f4d"
   ],
   [
    "Premium stay · Christchurch",
    "Christchurch",
    "2 nights",
    "#3b8f6a",
    "#0d2f4d"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "9 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips",
   "Visa fees and travel insurance"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 260000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 },
 "kenya-safari": {
  "slug": "kenya-safari",
  "name": "Kenya Safari",
  "first": "Kenya",
  "accent": "Safari",
  "region": "intl",
  "place": "Kenya",
  "cats": [
   "Wildlife",
   "Adventure",
   "Luxury"
  ],
  "desc": "Masai Mara game drives and the great migration.",
  "rating": 4.9,
  "label": "Bestseller",
  "a": "#b8862b",
  "b": "#3b4a2a",
  "fixed": false,
  "tags": [
   [
    "Bestseller",
    ""
   ],
   [
    "Customisable",
    "teal"
   ]
  ],
  "subtitle": "Masai Mara game drives and the great migration.",
  "route": [
   "Nairobi",
   "Lake Nakuru",
   "Masai Mara",
   "Nairobi"
  ],
  "heroLabels": [
   "Hero image · Kenya · 1400×900",
   "Nairobi · 800×500",
   "Lake Nakuru · 800×500",
   "Masai Mara · 800×500",
   "Nairobi · 800×500"
  ],
  "facts": [
   [
    "Duration",
    "6N / 7D"
   ],
   [
    "Departures",
    "Flexible dates"
   ],
   [
    "Best for",
    "Wildlife · Adventure"
   ],
   [
    "Region",
    "International"
   ],
   [
    "Meals",
    "Breakfast daily"
   ]
  ],
  "overview": "Masai Mara game drives and the great migration. Designed by our travel designers, every detail — transfers, stays and sightseeing — is arranged end to end so you only have to enjoy it.",
  "highlights": [
   "Lake Nakuru",
   "Flamingos",
   "Evening game drive",
   "Full-day game drive",
   "Big cats",
   "Hot-air balloon (optional)",
   "Game drives"
  ],
  "nodes": [
   [
    "Nairobi",
    "1 night"
   ],
   [
    "Lake Nakuru",
    "1 night"
   ],
   [
    "Masai Mara",
    "3 nights"
   ],
   [
    "Nairobi",
    "1 night"
   ]
  ],
  "days": [
   [
    1,
    "Arrive Nairobi",
    "D",
    "Transfer to your hotel.",
    [
     "Meet & greet on arrival",
     "Hotel check-in"
    ]
   ],
   [
    2,
    "Nairobi → Lake Nakuru",
    "BD",
    "Flamingos and rhinos at Lake Nakuru.",
    [
     "Lake Nakuru",
     "Flamingos"
    ]
   ],
   [
    3,
    "Lake Nakuru → Masai Mara",
    "BD",
    "Evening game drive on arrival.",
    [
     "Evening game drive"
    ]
   ],
   [
    4,
    "Masai Mara game drives",
    "BD",
    "Full-day game drives across the savannah.",
    [
     "Full-day game drive",
     "Big cats"
    ]
   ],
   [
    5,
    "Masai Mara",
    "BD",
    "An optional hot-air balloon safari.",
    [
     "Hot-air balloon (optional)",
     "Game drives"
    ]
   ],
   [
    6,
    "Masai Mara → Nairobi",
    "BD",
    "Return to Nairobi.",
    []
   ],
   [
    7,
    "Departure",
    "B",
    "Transfer to the airport.",
    [
     "Transfer to the airport"
    ]
   ]
  ],
  "stays": [
   [
    "Premium stay · Nairobi",
    "Nairobi",
    "1 night",
    "#b8862b",
    "#3b4a2a"
   ],
   [
    "Premium stay · Lake Nakuru",
    "Lake Nakuru",
    "1 night",
    "#b8862b",
    "#3b4a2a"
   ],
   [
    "Premium stay · Masai Mara",
    "Masai Mara",
    "3 nights",
    "#b8862b",
    "#3b4a2a"
   ],
   [
    "Premium stay · Nairobi",
    "Nairobi",
    "1 night",
    "#b8862b",
    "#3b4a2a"
   ]
  ],
  "policies": [
   [
    "Important notes",
    "Itinerary order may occasionally be amended, with all services unchanged. A third person in a triple room is typically given a rollaway bed. Guests aged 12 and under are considered children. Weather and local closures may affect sightseeing."
   ],
   [
    "Baggage & transfers",
    "One check-in bag and one handbag per person is recommended. Comfortable walking shoes are advised for sightseeing."
   ],
   [
    "Pricing & changes",
    "Prices are per person on twin sharing, excluding GST, and may change with airfare, season and availability. Date changes are subject to availability."
   ],
   [
    "Liability & refunds",
    "There are no refunds for unused services. Guests are responsible for damages to rooms or vehicles. Wanderline is not liable for loss of belongings or events beyond its control."
   ]
  ],
  "included": [
   "6 nights’ accommodation on twin sharing, or similar standard",
   "Daily breakfast and dinners as per itinerary",
   "Private vehicle for transfers and sightseeing",
   "Entrance fees and activities mentioned in the itinerary",
   "Professional tour manager or local representative"
  ],
  "excluded": [
   "5% GST",
   "Airfare and train fares unless stated",
   "Lunches and meals not in the itinerary",
   "Personal expenses — laundry, drinks, minibar, calls",
   "Optional activities, porterage and tips",
   "Visa fees and travel insurance"
  ],
  "perks": [
   "Handcrafted by our travel designers",
   "Daily breakfast & dinners included",
   "24/7 on-trip support"
  ],
  "price": 165000,
  "gst": 5,
  "departure": "Flexible dates",
  "priceNote": "twin sharing"
 }
}
