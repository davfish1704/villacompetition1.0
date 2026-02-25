// Company Information
export const companyInfo = {
  name: "Luck Dip Luxury Items Limited",
  shortName: "Luck Dip Luxury",
  established: 2025,
  currency: "USD",
  ticketPrice: 30,
  maxTickets: 150000,
  currentPrizes: 5,
  maxPrizes: 8,
  prizeValue: 10000,
  villaValue: 1000000,
  totalPrizesAwarded: 50000,
  campaignsCompleted: 4,
  markets: ["UK", "EU", "US", "AUS"],
  minAge: 18,
};

// Villa Details
export const villaDetails = {
  name: "La Casa De Villa",
  location: "Canggu, Bali, Indonesia",
  value: 1000000,
  bedrooms: 5,
  bathrooms: 6,
  sqft: 11500,
  sqm: 1070,
  staffApartment: true,
  pool: true,
  garden: true,
  garage: true,
  rentalIncome: 8000,
  description: "A stunning tropical paradise in the heart of Canggu, Bali's most sought-after location. This luxury villa offers the perfect blend of modern comfort and traditional Balinese charm.",
  features: [
    "5 spacious bedrooms with en-suite bathrooms",
    "Separate staff apartment",
    "Private infinity pool",
    "Lush tropical garden",
    "Fully equipped modern kitchen",
    "Open-plan living and dining areas",
    "Covered parking garage",
    "24/7 security system",
    "High-speed fiber internet",
    "Air conditioning throughout",
  ],
};

// Prize Structure
export const prizeStructure = {
  current: {
    count: 5,
    value: 10000,
    total: 50000,
  },
  extended: {
    count: 8,
    value: 10000,
    total: 80000,
  },
  threshold: 120000,
  mainPrize: {
    type: "villa",
    value: 1000000,
    description: "La Casa De Villa in Canggu, Bali",
  },
};

// Navigation Links
export const navigation = {
  main: [
    { label: "The Villa", href: "#villa" },
    { label: "Gallery", href: "#gallery" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Responsible Gaming", href: "#responsible" },
  ],
};

// Skill Question Examples
export const skillQuestions = [
  {
    id: 1,
    question: "How many standard tennis balls would fit in a Boeing 747 airplane?",
    correctAnswer: 25000000,
    tolerance: 0.1,
    unit: "balls",
    hint: "Think about the approximate volume of a 747 cabin and the size of a tennis ball.",
  },
  {
    id: 2,
    question: "What is the total length of the Great Wall of China in kilometers?",
    correctAnswer: 21196,
    tolerance: 0.1,
    unit: "km",
    hint: "It's longer than the distance from New York to Tokyo.",
  },
  {
    id: 3,
    question: "How many liters of water are in an Olympic-sized swimming pool?",
    correctAnswer: 2500000,
    tolerance: 0.1,
    unit: "liters",
    hint: "An Olympic pool is 50m long, 25m wide, and 2m deep.",
  },
  {
    id: 4,
    question: "What is the approximate population of Bali, Indonesia?",
    correctAnswer: 4300000,
    tolerance: 0.1,
    unit: "people",
    hint: "It's more than 3 million but less than 6 million.",
  },
  {
    id: 5,
    question: "How many square meters is the White House?",
    correctAnswer: 17000,
    tolerance: 0.1,
    unit: "sqm",
    hint: "It's roughly equivalent to 4-5 average-sized houses.",
  },
];

// How It Works Steps
export const howItWorksSteps = [
  {
    number: 1,
    title: "Choose Your Tickets",
    description: "Select how many tickets you'd like to purchase. Each ticket gives you one entry into the draw.",
    icon: "Ticket",
  },
  {
    number: 2,
    title: "Answer the Skill Question",
    description: "Complete our AI-resistant estimation question. You need to be within 10% of the correct answer to proceed.",
    icon: "Brain",
  },
  {
    number: 3,
    title: "Secure Payment",
    description: "Complete your purchase securely through Stripe. Your payment is protected and encrypted.",
    icon: "CreditCard",
  },
  {
    number: 4,
    title: "Get Your Tickets",
    description: "Receive your unique ticket numbers via email. Watch the live draw when all tickets are sold!",
    icon: "Gift",
  },
];

// Timeline
export const timeline = [
  {
    phase: "Launch",
    status: "completed",
    description: "Campaign goes live with 150,000 tickets available",
  },
  {
    phase: "Sales",
    status: "active",
    description: "Tickets selling fast - don't miss your chance!",
  },
  {
    phase: "Draw",
    status: "pending",
    description: "Live draw happens when all tickets are sold",
  },
  {
    phase: "Announcement",
    status: "pending",
    description: "Winners notified and prizes awarded",
  },
];

// FAQ Items
export const faqItems = [
  {
    question: "Who is eligible to enter?",
    answer: "You must be 18 years or older and a resident of the UK, EU, US, or Australia. Proof of age and identity may be required for winners. Employees of Luck Dip Luxury Items Limited and their immediate family members are not eligible to participate.",
  },
  {
    question: "How does the skill question work?",
    answer: "Before completing your purchase, you'll be presented with an estimation-type skill question (e.g., 'How many tennis balls fit in a Boeing 747?'). Your answer must be within 10% of the correct answer to proceed. This ensures the competition is based on skill rather than chance, making it legally compliant in all our operating markets.",
  },
  {
    question: "What happens if I answer the skill question incorrectly?",
    answer: "You have up to 3 attempts to answer correctly. If you don't answer within the 10% tolerance after 3 tries, you won't be able to complete your purchase. You can try again with a new session after 24 hours.",
  },
  {
    question: "Are there any taxes on winnings?",
    answer: "Tax obligations vary by jurisdiction. In the UK, competition winnings are typically tax-free. In other countries, you may be responsible for reporting and paying applicable taxes. We recommend consulting with a tax professional in your country. The villa transfer fees and legal costs are covered by us.",
  },
  {
    question: "How do I enter for free?",
    answer: "No purchase is necessary to enter. You can enter for free by sending a postal entry to: [PLACEHOLDER: Free Entry Department, Luck Dip Luxury Items Limited, 123 Competition Street, London, UK]. Include your full name, email address, phone number, and the answer to the current skill question. Only one free entry per person per passport/ID is allowed. Entries must be received at least 14 days before the draw.",
  },
  {
    question: "When will the draw take place?",
    answer: "The draw will take place live once all 150,000 tickets are sold. This ensures maximum excitement and transparency. We'll notify all participants via email with the live stream link at least 48 hours before the draw.",
  },
  {
    question: "What happens if not all tickets are sold?",
    answer: "If ticket sales are slower than expected, we reserve the right to extend the campaign or adjust the prize structure. However, the main villa prize will always be awarded. Any changes will be communicated to all participants with at least 30 days notice.",
  },
  {
    question: "Can I choose cash instead of the villa?",
    answer: "Yes! The main winner can choose to receive a cash alternative of $800,000 instead of the villa. This option must be selected within 14 days of being notified. Cash prizes for secondary winners are fixed at $10,000 each.",
  },
  {
    question: "How are the winners selected?",
    answer: "Winners are selected using a certified random number generator during a live-streamed event. An independent adjudicator oversees the process to ensure complete fairness and transparency. All ticket numbers are entered into the draw system.",
  },
  {
    question: "What is the prize scaling feature?",
    answer: "We start with 5 guaranteed cash prizes of $10,000 each. If we reach 120,000 tickets sold, we unlock 3 additional cash prizes, bringing the total to 8 prizes worth $80,000! This gives everyone more chances to win.",
  },
  {
    question: "Is this a lottery or gambling?",
    answer: "No, this is a skill-based competition, not a lottery or gambling. The requirement to answer a skill question correctly before purchasing makes this a game of skill, which is legally distinct from gambling in all our operating markets. We're fully compliant with UK, EU, US, and Australian regulations.",
  },
  {
    question: "How do I know this is legitimate?",
    answer: "Luck Dip Luxury Items Limited is a registered company established in 2025. We've successfully completed 4 previous campaigns with $50,000 in prizes awarded. Our draws are conducted by independent adjudicators and live-streamed for transparency. Read our Trustpilot reviews from previous winners!",
  },
  {
    question: "What are my odds of winning?",
    answer: "Your odds depend on how many tickets you purchase. With 150,000 tickets total and 5-8 prizes available, the base odds are approximately 1 in 18,750 to 1 in 30,000 per ticket. Buying multiple tickets increases your chances proportionally. Use our odds calculator to see your exact chances!",
  },
];

// Benefits Cards
export const benefits = [
  {
    title: "Live In",
    description: "Make this stunning Bali villa your permanent residence or vacation home. Experience the tropical lifestyle every day.",
    icon: "Home",
    highlights: [
      "Year-round tropical climate",
      "Vibrant expat community",
      "World-class surfing beaches",
      "Affordable cost of living",
    ],
  },
  {
    title: "Rent Out",
    description: "Generate passive income by renting the villa to tourists. Bali's rental market is booming with 70%+ occupancy rates.",
    icon: "TrendingUp",
    highlights: [
      "$8,000+/month potential income",
      "High tourist demand in Canggu",
      "Professional management available",
      "Tax advantages for rental property",
    ],
  },
  {
    title: "Sell",
    description: "Cash in on your win by selling the property. Bali real estate has appreciated 8-12% annually in prime locations.",
    icon: "DollarSign",
    highlights: [
      "Strong appreciation potential",
      "High foreign buyer demand",
      "Cash alternative: $800,000",
      "Quick sale options available",
    ],
  },
];

// Trust Metrics
export const trustMetrics = [
  {
    label: "Prizes Awarded",
    value: 50000,
    prefix: "$",
    suffix: "+",
  },
  {
    label: "Campaigns Completed",
    value: 4,
    suffix: "",
  },
  {
    label: "Happy Winners",
    value: 12,
    suffix: "+",
  },
  {
    label: "Trustpilot Rating",
    value: 5.0,
    suffix: "/5",
    decimals: 1,
  },
];

// Testimonials
export const testimonials = [
  {
    name: "Marcus T.",
    location: "London, UK",
    rating: 5,
    text: "Seamless experience from start to finish. Couldn't be happier with the service.",
    avatar: "MT",
  },
  {
    name: "Laura M.",
    location: "Sydney, Australia",
    rating: 5,
    text: "You can tell immediately that this is a serious operation. Great experience!",
    avatar: "LM",
  },
  {
    name: "Karim P.",
    location: "Berlin, Germany",
    rating: 5,
    text: "Professional, transparent and very well executed. Highly recommend!",
    avatar: "KP",
  },
  {
    name: "Felix K.",
    location: "New York, USA",
    rating: 5,
    text: "Always trustworthy and reliable. Clear website and easy process.",
    avatar: "FK",
  },
];

// Past Winners (Placeholder)
export const pastWinners = [
  {
    name: "Sarah J.",
    prize: "Luxury Watch Collection",
    value: 25000,
    location: "Manchester, UK",
    date: "December 2025",
    image: "/media/winners/winner-1.jpg",
    quote: "I still can't believe it! The whole process was so smooth.",
  },
  {
    name: "Michael R.",
    prize: "Sports Car Weekend",
    value: 15000,
    location: "Los Angeles, USA",
    date: "November 2025",
    image: "/media/winners/winner-2.jpg",
    quote: "Best weekend of my life. Thank you Luck Dip Luxury!",
  },
  {
    name: "Emma & James",
    prize: "Caribbean Cruise",
    value: 12000,
    location: "Toronto, Canada",
    date: "October 2025",
    image: "/media/winners/winner-3.jpg",
    quote: "Our honeymoon was absolutely magical. Forever grateful!",
  },
];

// Location Highlights
export const locationHighlights = [
  {
    title: "World-Class Surfing",
    description: "Canggu is Bali's surf capital with breaks for all skill levels",
    icon: "Waves",
  },
  {
    title: "Vibrant Nightlife",
    description: "Beach clubs, bars, and restaurants just minutes away",
    icon: "Music",
  },
  {
    title: "Yoga & Wellness",
    description: "Hundreds of yoga studios and wellness centers nearby",
    icon: "Heart",
  },
  {
    title: "Digital Nomad Hub",
    description: "Fast internet and coworking spaces everywhere",
    icon: "Wifi",
  },
  {
    title: "International Schools",
    description: "Top-rated international schools within 15 minutes",
    icon: "GraduationCap",
  },
  {
    title: "International Airport",
    description: "Ngurah Rai Airport just 45 minutes away",
    icon: "Plane",
  },
];

// Legal Compliance Info
export const legalCompliance = {
  skillBasedExplanation: "This competition requires participants to demonstrate skill by answering an estimation question within a 10% tolerance. This distinguishes it from games of pure chance (lotteries/gambling) and makes it legally compliant in the UK, EU, US, and Australia.",
  freeEntry: {
    available: true,
    method: "Postal entry",
    address: "[PLACEHOLDER: Free Entry Department, Luck Dip Luxury Items Limited, 123 Competition Street, London, UK]",
    restrictions: "One entry per person per passport/ID. Must be received 14+ days before draw.",
  },
  gdpr: true,
  responsibleGaming: "We promote responsible participation. Set limits, take breaks, and never spend more than you can afford to lose. Contact our support team if you need assistance.",
};

// SEO Meta Data
export const seo = {
  title: "Win a $1,000,000 Villa in Bali | Luck Dip Luxury",
  description: "Enter to win La Casa De Villa, a $1M luxury property in Canggu, Bali. 5 bedrooms, private pool, 11,500 sq ft. Plus 5-8 cash prizes of $10,000 each. Tickets $30.",
  keywords: "win villa bali, luxury competition, canggu villa, win house, skill competition, bali property, win cash prize",
  ogImage: "/media/hero/slide-1.jpg",
};
