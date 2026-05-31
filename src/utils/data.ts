export interface Project {
  id: string;
  title: string;
  tagline: string;
  location: string;
  status: "Ongoing" | "Upcoming" | "Completed";
  area: string; // e.g. "Purbachal Sector 15"
  description: string;
  image: string;
  images: string[];
  features: string[];
  amenities: string[];
  floorPlans: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: "building" | "shield" | "award" | "drafting" | "compass" | "check";
  benefits: string[];
}

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Construction Update" | "Developer Insights" | "Corporate News";
  readTime: string;
  publishDate: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company?: string;
  quote: string;
  projectBought: string;
  rating: number;
}

export const SBL_PROJECTS: Project[] = [
  {
    id: "purbachal-heights",
    title: "Swapnosiri Purbachal Heights",
    tagline: "The Pinnacle of Luxury Living in Purbachal",
    location: "Plot #14, Road #302, Sector #15, Purbachal New Town, Dhaka",
    status: "Ongoing",
    area: "Purbachal New Town",
    description: "Designed for those who appreciate the finer things in life, Swapnosiri Purbachal Heights stands as a beacon of modern architectural brilliance. Featuring expansive double-height lobbies, floor-to-ceiling smart glass facades, and robust engineering designed to withstand extreme forces, this project offers an unmatched combination of luxury, safety, and comfort.",
    image: "/images/sbl_exterior_1.jpg",
    images: [
      "/images/sbl_exterior_2.jpg",
      "/images/sbl_exterior_4.jpg",
      "/images/sbl_exterior_5.jpg",
    ],
    features: [
      "BNBC Compliant Structural Design",
      "Earthquake Resistant Joint Detailing (Zone 2 Compliant)",
      "Wind Pressure Resistance up to 225 km/h",
      "High-Performance Thermal and Acoustic Glass Facade",
      "100% Standby Auto-Generator Backed Electrical Grid",
      "BSRM 72.5G Ultra-Strength Reinforcement Steel",
    ],
    amenities: [
      "Rooftop Infinity Swimming Pool & Sun Deck",
      "State-of-the-Art Panoramic Fitness Center",
      "Grand Double-Height Entrance Lobby in Italian Marble",
      "24/7 Multi-Layer AI Smart Security & Biometric Access",
      "Dedicated High-Speed Mitsubishi Passenger & Stretcher Lifts",
      "Rooftop Community Lounge and Sky Garden with BBQ Pit",
    ],
    floorPlans: [
      "Type A (3-Bedroom Premium): 1,850 sq ft",
      "Type B (4-Bedroom Executive): 2,450 sq ft",
      "Sky-Villa Duplex (Penthouse): 4,200 sq ft"
    ],
    specifications: [
      { label: "Substructure", value: "Cast-in-situ reinforced concrete piling with thick pile cap" },
      { label: "Superstructure", value: "Reinforced Concrete Frame compliant with BNBC 2020 codes" },
      { label: "Concrete Strength", value: "Ready-mix concrete with cylinder test strength of 4000-5000 PSI" },
      { label: "Steel Reinforcement", value: "BSRM / AKS Grade 500W deformed high-yield bars" },
      { label: "Lobby Finishes", value: "Imported Italian Carrara & Crema Marfil marble slabs" },
      { label: "Elevators", value: "Mitsubishi/Hitachi high-speed gearless smart elevator system" },
    ]
  },
  {
    id: "jolshiri-manor",
    title: "Swapnosiri Jolshiri Manor",
    tagline: "Eco-Friendly Premium Residences",
    location: "Sector #3, Jolshiri Abashon, Dhaka",
    status: "Upcoming",
    area: "Jolshiri Abashon",
    description: "Strategically located in the pristine, eco-friendly sector of Jolshiri Abashon, Swapnosiri Jolshiri Manor represents the next generation of smart residential developments. Focusing on green architectural layouts, rainwater harvesting, solar offsets, and a highly secure wind-resistant concrete envelope, this property ensures green sustainability without compromising on royal luxury.",
    image: "/images/sbl_exterior_2.jpg",
    images: [
      "/images/sbl_exterior_3.jpg",
      "/images/sbl_exterior_5.jpg",
    ],
    features: [
      "Green Building Certification Compliant Layout",
      "Rainwater Harvesting System & Greywater Recycling",
      "Earthquake Resistant Beam-Column Frame",
      "Wind Shield Tested Concrete Envelope (225 km/h)",
      "Solar Panel Net Metering System",
      "Lafarge Surma Premium Grade Concrete Matrices",
    ],
    amenities: [
      "Lush Green Hanging Gardens & Vertical Forest Features",
      "Wellness Center, Steam Room & Sauna room",
      "Eco-Friendly Smart EV Charging Station",
      "Children's Sensory Playground & Indoor Play Zone",
      "Advanced Video Door Phone & Smart Home Automation Ready",
      "Water Treatment & Softening Plant",
    ],
    floorPlans: [
      "Type Premium (3-Bedroom Oasis): 1,650 sq ft",
      "Type Grand (3-Bedroom Royal): 1,980 sq ft",
      "Grand Garden Penthouse: 3,500 sq ft"
    ],
    specifications: [
      { label: "Substructure", value: "Reinforced Concrete Pile Cap and Retaining Walls" },
      { label: "Superstructure", value: "Post-Tensioned concrete slabs for maximum clear heights" },
      { label: "Cement Brand", value: "Holcim / Lafarge Premium structural Portland cement" },
      { label: "Plumbing", value: "Central hot/cold water ring main using food-grade PPR pipes" },
      { label: "Electrical", value: "BBS Premium copper wiring with Schneider Electric switchgears" },
      { label: "Windows", value: "Heavy-duty powder-coated aluminum section with double-glazed glass" },
    ]
  },
  {
    id: "purbachal-skyline",
    title: "Swapnosiri Purbachal Skyline",
    tagline: "Architectural Marvel in Dhaka's Smart City",
    location: "Sector #11, Purbachal New Town, Dhaka",
    status: "Completed",
    area: "Purbachal New Town",
    description: "Completed with absolute perfection in late 2025, Swapnosiri Purbachal Skyline has quickly become an iconic residential address in Sector 11. Boasting custom architectural lines, high-performance wind resistance, and a majestic double-height Italian marble atrium, SBL delivered this masterpiece ahead of schedule to our premium buyers.",
    image: "/images/sbl_exterior_3.jpg",
    images: [
      "/images/sbl_exterior_1.jpg",
      "/images/sbl_exterior_4.jpg",
    ],
    features: [
      "Delivered 3 Months Ahead of Schedule",
      "BNBC 2020 Compliant Post-Delivered Audit Passed",
      "Earthquake Load Tested Structurally Secure",
      "Premium Class A Interior Joinery Work",
      "Double Glazed Argon-Filled Acoustic Windows",
    ],
    amenities: [
      "Fully Furnished Executive Business Lounge",
      "Rooftop Jogging Track & Putting Green",
      "Central Water Purifier & Heavy-Duty Pumps",
      "24/7 Manned Control Room with CC Cameras",
      "Premium Kohler Bathroom Fittings",
      "Intercom system with access card control gates",
    ],
    floorPlans: [
      "Type A (3-Bedroom Standard): 1,550 sq ft",
      "Type B (3-Bedroom Luxury): 1,750 sq ft",
      "Type C (4-Bedroom Penthouse): 3,100 sq ft"
    ],
    specifications: [
      { label: "Structural Frame", value: "Monolithic Reinforced Concrete Frame" },
      { label: "Steel Deformed", value: "BSRM Grade 500W Steel" },
      { label: "Sanitary Fittings", value: "Imported Kohler and Grohe luxury faucets" },
      { label: "Doors", value: "Solid Burma Teak main decorative door and polished veneer internal doors" },
      { label: "Generator", value: "UK Perkins Soundproof European Generator set" },
    ]
  }
];

export const SBL_SERVICES: Service[] = [
  {
    id: "residential-development",
    title: "Modern Residential Development",
    description: "Developing world-class luxury residential communities with cutting-edge engineering and modern architectural designs.",
    detailedDescription: "Swapnosiri Builders Ltd. is at the forefront of prestigious housing development in Purbachal New Town and Jolshiri Abashon. We acquire premier plots, collaborate with international architects, and build modern vertical communities designed with luxury aesthetics and structural safety.",
    iconName: "building",
    benefits: [
      "Prime, high-growth investment locations",
      "Unique avant-garde architectural layouts",
      "Premium common spaces and double-height lobbies",
      "Maximized natural ventilation and smart daylighting layouts"
    ]
  },
  {
    id: "structural-design",
    title: "BNBC Compliant Structural Design",
    description: "Engineering robust structures rigorously compliant with the Bangladesh National Building Code (BNBC).",
    detailedDescription: "Safety is our absolute hallmark. Every building designed by Swapnosiri Builders Ltd. is engineered from day one in strict compliance with the latest BNBC (Bangladesh National Building Code) guidelines. We run detailed finite element analysis (FEA) to simulate and secure our frames against all vertical and lateral forces.",
    iconName: "shield",
    benefits: [
      "Certified BNBC Structural Design compliance",
      "Finite Element structural model verification",
      "Strict supervision by experienced veteran structural engineers",
      "Full transparency with blueprints and structural documents"
    ]
  },
  {
    id: "earthquake-resistance",
    title: "Earthquake Resistant Construction",
    description: "Constructing safe buildings structurally engineered to absorb and dissipate seismic loads effortlessly.",
    detailedDescription: "Given Dhaka's geographical layout, SBL implements advanced seismic reinforcement detailing. We use specialized ductile detailing, robust pile foundations, and high-yield Grade 500W steel bars to ensure SBL residences possess the flexibility and core strength to absorb earthquake shocks.",
    iconName: "award",
    benefits: [
      "Zone 2 compliant seismic detailing",
      "High ductility beam-column joints",
      "Strict quality control on concrete pour matrices",
      "Rigorous concrete cylinder crushing load tests"
    ]
  },
  {
    id: "wind-resistance",
    title: "225 km/h Wind Resistance",
    description: "Specifying aerodynamic envelopes and high-strength glazing systems to withstand extreme tropical cyclones.",
    detailedDescription: "Our structural designs are engineered for a base wind speed of 225 km/h, aligning with the most extreme cyclone guidelines in Bangladesh. We specify reinforced structural concrete members, heavy-duty anchorages, and double-glazed tempered glass systems to ensure full occupant safety during severe tropical winds.",
    iconName: "compass",
    benefits: [
      "Aerodynamic structural shapes reducing drag load",
      "225 km/h wind shear force resistance",
      "Heavy-duty aluminum section anchorages",
      "Double-glazed tempered glass systems"
    ]
  }
];

export const SBL_NEWS: NewsArticle[] = [
  {
    slug: "celebrating-safety-standards-bnbc",
    title: "Swapnosiri Achieves Flawless Construction Quality Audit in Purbachal",
    excerpt: "SBL passes the rigorous independent structural engineering audits in Purbachal New Town with flying colors, proving our adherence to BNBC 2020 guidelines.",
    category: "Construction Update",
    readTime: "4 min read",
    publishDate: "May 25, 2026",
    image: "/images/sbl_exterior_4.jpg",
    content: "We are extremely proud to announce that all ongoing Swapnosiri developments in Purbachal New Town have passed an independent structural engineering audit with outstanding remarks. As part of our uncompromising stance on quality construction, the audit team scrutinized SBL's piling depth, steel ductile detailing, concrete cylinder compressive strengths, and structural flex models against the strict criteria of BNBC 2020. Our CEO, Md. Shahbuddin, reiterated our mission: to build quality homes with honesty, care, and commitment, ensuring our premium homeowners feel safe and secure for generations."
  },
  {
    slug: "engineering-luxury-real-estate-future",
    title: "Engineering the Future of Luxury Real Estate in Bangladesh",
    excerpt: "A look into how smart home automation, green solar net metering, and sustainable architecture are redefining prestige developments.",
    category: "Developer Insights",
    readTime: "6 min read",
    publishDate: "April 18, 2026",
    image: "/images/sbl_exterior_2.jpg",
    content: "The modern luxury buyer is no longer just looking for marble floors and gold-accented lobbies. Today, luxury is defined by a building's intellect and resilience. At Swapnosiri Builders Ltd., we are integrating advanced smart home grids, solar net metering, eco-friendly rainwater filters, and EV charging bays across all our upcoming projects in Purbachal and Jolshiri. By building sustainable structures that reduce carbon footprint while utilizing highly robust BNBC-compliant wind and earthquake resistance frames, we protect both the environment and our clients' hard-earned wealth."
  }
];

export const SBL_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Brigadier General (Retd.) K. M. Rahman",
    designation: "Homeowner",
    projectBought: "Swapnosiri Purbachal Heights",
    quote: "Swapnosiri Builders has completely redefined transparency in real estate for me. Their earthquake-resistant structural design and adherence to BNBC standards in Purbachal are exceptional. As an engineer myself, I audited their structural steel and ready-mix concrete pouring, and SBL's engineering quality is truly international class.",
    rating: 5
  },
  {
    id: "t2",
    name: "Dr. Farhana Yasmin",
    designation: "Expat Pediatrician",
    company: "NHS Trust UK",
    projectBought: "Swapnosiri Jolshiri Manor",
    quote: "Living abroad makes it hard to trust developer companies. Swapnosiri provided me with real-time construction updates, digital inspection certificates, and structural paperwork. Their Purbachal office team is highly professional, and my family is proud to own an upcoming sky villa in Jolshiri.",
    rating: 5
  },
  {
    id: "t3",
    name: "Zunaid Ahmed",
    designation: "Co-Founder",
    company: "DhakaTech Ventures",
    projectBought: "Swapnosiri Purbachal Skyline",
    quote: "Completed with absolute perfection, SBL delivered our 4-bedroom luxury apartment ahead of schedule! The double-height lobby with imported Italian marble is stunning, and the smart access control systems give my family peace of mind.",
    rating: 5
  }
];
