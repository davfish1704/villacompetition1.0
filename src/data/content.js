// Company Information
export const companyInfo = {
  name: "Villa Competition",
  shortName: "Villa Competition",
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
    { label: "Home", href: "#" },
    { label: "The Villa", href: "#villa" },
    { label: "Gallery", href: "#gallery" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Our Charity", href: "/charity" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Free Postal Entry", href: "#postal-entry" },
  ],
};

// Skill Question Examples
export const skillQuestions = [
  {
    id: 1,
    question: "What is 12 + 3?",
    correctAnswer: 15,
    tolerance: 0,
    unit: "",
    hint: "Simple addition: twelve plus three.",
  },
  {
    id: 2,
    question: "How many days are in a week?",
    correctAnswer: 7,
    tolerance: 0,
    unit: "days",
    hint: "Count the days from Monday to Sunday.",
  },
  {
    id: 3,
    question: "What is 8 multiplied by 2?",
    correctAnswer: 16,
    tolerance: 0,
    unit: "",
    hint: "Simple multiplication: eight times two.",
  },
  {
    id: 4,
    question: "How many months are in a year?",
    correctAnswer: 12,
    tolerance: 0,
    unit: "months",
    hint: "Count from January to December.",
  },
  {
    id: 5,
    question: "What is 20 minus 5?",
    correctAnswer: 15,
    tolerance: 0,
    unit: "",
    hint: "Simple subtraction: twenty minus five.",
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
    question: "Is this competition legal?",
    answer: "Yes, this is a legal skill-based competition, not a lottery or gambling. Under UK law, competitions that require skill to enter are not classified as gambling. We operate in full compliance with the Gambling Act 2005 and all applicable regulations. The skill question ensures this is a competition, not a lottery.",
  },
  {
    question: "Who is eligible to enter?",
    answer: "You must be 18 years or older and a resident of the UK or EU. Proof of age and identity may be required for winners. Employees of Villa Competition and their immediate family members are not eligible to participate.",
  },
  {
    question: "How does the skill question work?",
    answer: "Before completing your purchase, you'll be presented with a simple skill question (e.g., 'What is 12 + 3?'). You must answer correctly to proceed. This ensures the competition is based on skill rather than chance, making it legally compliant.",
  },
  {
    question: "What happens if I answer the skill question incorrectly?",
    answer: "You have up to 3 attempts to answer correctly. If you don't answer correctly after 3 tries, you won't be able to complete your purchase. You can try again with a new session after 24 hours.",
  },
  {
    question: "Are there any taxes on winnings?",
    answer: "Tax obligations vary by jurisdiction. In the UK, competition winnings are typically tax-free. In other countries, you may be responsible for reporting and paying applicable taxes. We recommend consulting with a tax professional in your country. The villa transfer fees and legal costs are covered by us.",
  },
  {
    question: "How do I enter for free?",
    answer: "No purchase is necessary to enter. You can enter for free by sending a postal entry to: Free Entry Department, Villa Competition, 123 Example Street, London, EC1A 1BB, UK. Include your full name, email address, phone number, and the answer to the skill question (What is 12 + 3?). Only one free entry per person per passport/ID is allowed. Entries must be received at least 14 days before the draw.",
  },
  {
    question: "When will the draw take place?",
    answer: "The draw will take place on April 9, 2026 at 6:00 PM GMT. We'll notify all participants via email with the live stream link at least 48 hours before the draw. The winner will be selected using a certified random number generator witnessed by an independent solicitor.",
  },
  {
    question: "What happens if not enough tickets are sold?",
    answer: "If the minimum number of entries is not reached by the closing date, the winner will receive 70% of the total entry receipts as a cash alternative. This is clearly stated in our terms and conditions, ensuring there's always a winner.",
  },
  {
    question: "Can I choose cash instead of the villa?",
    answer: "Yes! The winner can choose to receive a cash alternative of £160,000 instead of the villa. This option must be selected within 14 days of being notified.",
  },
  {
    question: "How are the winners selected?",
    answer: "The winner is selected using a certified random number generator during a live-streamed event. An independent solicitor oversees the process to ensure complete fairness and transparency. All ticket numbers are entered into the draw system.",
  },
  {
    question: "Is this a lottery or gambling?",
    answer: "No, this is a skill-based competition, not a lottery or gambling. The requirement to answer a skill question correctly before purchasing makes this a game of skill, which is legally distinct from gambling. We're fully compliant with UK and EU regulations.",
  },
  {
    question: "How do I know this is legitimate?",
    answer: "Villa Competition is a registered company. Our draws are conducted by independent solicitors and live-streamed for transparency. 10% of every entry goes to our charity partner, Yayasan Harapan Bali, supporting orphan children in Indonesia.",
  },
  {
    question: "What are my odds of winning?",
    answer: "Your odds depend on how many tickets you purchase. With 10,000 tickets total and 1 villa prize, the base odds are 1 in 10,000 per ticket. Buying multiple tickets increases your chances proportionally. Use our odds calculator to see your exact chances!",
  },
  {
    question: "Who is the charity partner?",
    answer: "We partner with Yayasan Harapan Bali, an Indonesian charity supporting orphan children across Bali. 10% of every entry goes directly to support their work providing education, shelter, and care for vulnerable children. Visit our charity page to learn more.",
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

// Ticket Packages
export const ticketPackages = [
  {
    id: 1,
    entries: 1,
    price: 10,
    popular: false,
    savings: 0,
  },
  {
    id: 2,
    entries: 5,
    price: 40,
    popular: true,
    savings: 10,
  },
  {
    id: 3,
    entries: 10,
    price: 75,
    popular: false,
    savings: 25,
  },
];

// Draw Date
export const drawDate = {
  date: "2026-04-09",
  time: "18:00:00",
  timezone: "GMT",
};

// SEO Meta Data
export const seo = {
  title: "Win a Luxury Bali Villa | Enter the Competition Today",
  description: "Enter for a chance to win a stunning luxury villa in Bali. Supporting orphan children in Indonesia. From £10 per entry. Legal UK skill-based competition.",
  keywords: "win villa bali, luxury competition, canggu villa, win house, skill competition, bali property, competition not lottery",
  ogImage: "/media/hero/slide-1.jpg",
};
