export type ServiceMetric = {
  label: string;
  value: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  image: string;
  accent: string;
  metrics: ServiceMetric[];
  pillars: string[];
};

export const serviceCatalog: ServiceItem[] = [
  {
    slug: "corporate-ev-fleet",
    title: "Fleet360: Corporate Electric Vehicles (EV) Fleet",
    shortTitle: "Fleet360",
    eyebrow: "Corporate EV Fleets",
    description:
      "We offer comprehensive Electric Vehicles (EV) solutions tailored to corporate clients in Africa. Our services include supplying a diverse range of Electric Vehicles, such as Cars, Buses, tricycles, and Pickups, that facilitate employee mobility and dispatch.",
    image: "corporate.png",
    accent: "#5c8d73",
    metrics: [
      { label: "Use Case", value: "Employee Mobility" },
      { label: "Vehicle Mix", value: "Cars, Buses, Pickups" },
      { label: "Focus", value: "Operational Efficiency" },
    ],
    pillars: [
      "Fleet planning for private and institutional operators",
      "EV sourcing aligned to workforce and dispatch needs",
      "Lower running-cost mobility for daily operations",
      "Cleaner transport systems with enterprise-ready support",
    ],
  },
  {
    slug: "green-fleet",
    title: "GreenFleet: Public Transportation Renewal",
    shortTitle: "GreenFleet",
    eyebrow: "Public Transport Renewal",
    description:
      "GreenFleet is our Electric Vehicles (EV) Fleet Renewal Initiative for Public Transportation, developed in collaboration with governments at various levels. This initiative focuses on integrating Electric Vehicles (EV) into public transportation systems, including tricycles, minicars, taxis, minibuses, and buses. By transitioning to EVs, we aim to create greener, cleaner cities while enhancing the efficiency and sustainability of public transport networks.",
    image: "greenfleet.webp",
    accent: "#719f63",
    metrics: [
      { label: "Stakeholders", value: "Government & Operators" },
      { label: "Deployment", value: "City-Scale Transit" },
      { label: "Impact", value: "Cleaner Urban Mobility" },
    ],
    pillars: [
      "Public transport electrification for cleaner cities",
      "Renewal strategies across multiple vehicle classes",
      "Government-facing implementation partnerships",
      "Operationally grounded transition planning",
    ],
  },
  {
    slug: "metro-charge",
    title: "Metro Charge: Electric Vehicles (EV) Charging Infrastructure",
    shortTitle: "Metro Charge",
    eyebrow: "Charging Infrastructure",
    description:
      "Recognising the importance of supporting infrastructure, Metro Charge is our network of Electric Vehicles (EV) charging stations in partnership with Sunphos, dedicated to ensuring seamless and convenient charging for all Electric Vehicles (EV) users. Our stations will be strategically located to provide easy access and reliability, supporting the growing adoption of EVs across the continent.",
    image: "metro.png",
    accent: "#7a9aab",
    metrics: [
      { label: "Purpose", value: "Charging Access" },
      { label: "Coverage", value: "Strategic Locations" },
      { label: "Role", value: "EV Adoption Support" },
    ],
    pillars: [
      "Charging network planning for growing EV demand",
      "Infrastructure deployment with reliability in mind",
      "Accessible station placement for daily convenience",
      "Foundational support for broader EV ecosystems",
    ],
  },
  {
    slug: "ryde",
    title: "RYDE: Ride-Hailing And Sharing Services",
    shortTitle: "RYDE",
    eyebrow: "Ride-Hailing & Shared Mobility",
    description:
      "RYDE is our innovative ride-hailing, sharing, charter, and taxi service. Starting in Nigeria, RYDE will deploy a fleet of owned Electric Vehicles (EV) assets, offering affordable, convenient, safe, and eco-friendly transportation. Positioned to rival global giants like Uber, Bolt, and Lyft, RYDE aims to redefine urban mobility in Africa.",
    image: "ryde.webp",
    accent: "#7d8db0",
    metrics: [
      { label: "Model", value: "Shared Mobility" },
      { label: "Launch Market", value: "Nigeria" },
      { label: "Goal", value: "Affordable EV Rides" },
    ],
    pillars: [
      "Ride-hailing and charter operations built on EV assets",
      "User-facing mobility with cleaner fleet economics",
      "Urban transport designed for affordability and comfort",
      "Scalable shared mobility positioning for African cities",
    ],
  },
  {
    slug: "assembli",
    title: "ASSEMBLI: Electric Vehicles (EV) Assembly Network",
    shortTitle: "ASSEMBLI",
    eyebrow: "Assembly Network",
    description:
      "ASSEMBLI is our extensive network of Electric Vehicles (EV) Assembly Plants dedicated to assembling Electric Vehicles, including tricycles, cars, and buses. This network ensures high-quality production standards, reduces costs, and expedites the delivery of EVs to various markets across Africa. By building and assembling vehicles locally, we support local economies and create job opportunities.",
    image: "assembli.webp",
    accent: "#a68b6d",
    metrics: [
      { label: "Capability", value: "Local Assembly" },
      { label: "Vehicle Types", value: "Tricycles to Buses" },
      { label: "Outcome", value: "Faster Market Delivery" },
    ],
    pillars: [
      "Local assembly designed for speed and cost control",
      "Production support for multiple EV classes",
      "Regional delivery readiness across African markets",
      "Industrial growth through local capability building",
    ],
  },
  {
    slug: "ev-care",
    title: "Electric Vehicles (EV) Care: Electric Vehicles (EV) Maintenance Services",
    shortTitle: "EV Care",
    eyebrow: "Maintenance & Aftercare",
    description:
      "Electric Vehicles (EV) Care offers comprehensive maintenance services to ensure your EV fleet's longevity and optimal performance. Our network of specialised service and maintenance garages will be equipped with the latest technology and staffed by trained professionals. From routine maintenance to advanced repairs, we provide support to keep your Electric Vehicles running smoothly and efficiently.",
    image: "evCare.webp",
    accent: "#6e8f8b",
    metrics: [
      { label: "Support", value: "End-to-End Aftercare" },
      { label: "Coverage", value: "Routine to Advanced Repairs" },
      { label: "Priority", value: "Fleet Uptime" },
    ],
    pillars: [
      "Specialised maintenance support for EV fleets",
      "Garage networks built around uptime and reliability",
      "Preventive servicing and repair capability",
      "Operational support to extend vehicle lifespan",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  serviceCatalog.find((service) => service.slug === slug);
