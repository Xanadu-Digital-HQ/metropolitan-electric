export type ServiceMetric = {
  label: string;
  value: string;
};

export type ServiceDetailItem = {
  label: string;
  detail: string;
};

export type ServiceDetailSection = {
  key: 'scope' | 'capabilities' | 'applications';
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  items: ServiceDetailItem[];
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
  serviceLens: string[];
  detailEyebrow: string;
  detailHeading: string;
  detailSections: ServiceDetailSection[];
};

export const serviceCatalog: ServiceItem[] = [
  {
    slug: 'corporate-ev-fleet',
    title: 'Fleet360: Corporate Electric Vehicles (EV) Fleet',
    shortTitle: 'Fleet360',
    eyebrow: 'Corporate EV Fleets',
    description:
      'We offer comprehensive Electric Vehicles (EV) solutions tailored to corporate clients in Africa. Our services include supplying a diverse range of Electric Vehicles, such as Cars, Buses, tricycles, and Pickups, that facilitate employee mobility and dispatch.',
    image: 'corporate.png',
    accent: '#5c8d73',
    metrics: [
      { label: 'Use Case', value: 'Employee Mobility' },
      { label: 'Vehicle Mix', value: 'Cars, Buses, Pickups' },
      { label: 'Focus', value: 'Operational Efficiency' },
    ],
    pillars: [
      'Fleet planning for private and institutional operators',
      'EV sourcing aligned to workforce and dispatch needs',
      'Lower running-cost mobility for daily operations',
      'Cleaner transport systems with enterprise-ready support',
    ],
    serviceLens: ['Fleet fit', 'Charging readiness', 'Uptime support'],
    detailEyebrow: 'Fleet360 Delivery Stack',
    detailHeading: 'Vehicle planning, operating support, and deployment fit for enterprise EV fleets.',
    detailSections: [
      {
        key: 'scope',
        eyebrow: 'Fleet Scope',
        title: 'EV classes aligned to daily operations',
        description:
          'Fleet360 covers vehicle selection and deployment planning across common business mobility needs.',
        summary: 'Scope',
        items: [
          {
            label: 'Passenger Mobility',
            detail: 'Cars and minicars for staff movement, executive transport, and daily business travel.',
          },
          {
            label: 'People Movement',
            detail: 'Buses and minibuses for employee shuttles, institutions, and recurring route operations.',
          },
          {
            label: 'Dispatch & Utility',
            detail: 'Pickups, tricycles, and light commercial EVs for last-mile delivery and field support.',
          },
        ],
      },
      {
        key: 'capabilities',
        eyebrow: 'Operating Capabilities',
        title: 'Practical support from sourcing to uptime',
        description:
          'The service connects vehicle supply, fleet planning, charging fit, and post-deployment support.',
        summary: 'Capabilities',
        items: [
          {
            label: 'Fleet Assessment',
            detail: 'Route patterns, daily mileage, payload needs, charging windows, and replacement priorities.',
          },
          {
            label: 'Vehicle Sourcing',
            detail: 'EV options matched to budget, duty cycle, passenger capacity, and business requirements.',
          },
          {
            label: 'Lifecycle Support',
            detail: 'Coordination across charging, maintenance, driver readiness, and operating cost control.',
          },
        ],
      },
      {
        key: 'applications',
        eyebrow: 'Deployment Fit',
        title: 'Where Fleet360 is designed to operate',
        description:
          'Fleet360 is suited to organisations that need dependable electric mobility at operating scale.',
        summary: 'Use cases',
        items: [
          {
            label: 'Corporate Campuses',
            detail: 'Employee mobility, pool vehicles, executive movement, and inter-office transport.',
          },
          {
            label: 'Institutions',
            detail: 'Schools, hospitals, estates, and public bodies with predictable transport demand.',
          },
          {
            label: 'Field Operations',
            detail: 'Sales teams, dispatch units, technicians, and logistics teams with repeatable routes.',
          },
        ],
      },
    ],
  },
  {
    slug: 'green-fleet',
    title: 'GreenFleet: Public Transportation Renewal',
    shortTitle: 'GreenFleet',
    eyebrow: 'Public Transport Renewal',
    description:
      'GreenFleet is our Electric Vehicles (EV) Fleet Renewal Initiative for Public Transportation, developed in collaboration with governments at various levels. This initiative focuses on integrating Electric Vehicles (EV) into public transportation systems, including tricycles, minicars, taxis, minibuses, and buses. By transitioning to EVs, we aim to create greener, cleaner cities while enhancing the efficiency and sustainability of public transport networks.',
    image: 'greenfleet.webp',
    accent: '#719f63',
    metrics: [
      { label: 'Stakeholders', value: 'Government & Operators' },
      { label: 'Deployment', value: 'City-Scale Transit' },
      { label: 'Impact', value: 'Cleaner Urban Mobility' },
    ],
    pillars: [
      'Public transport electrification for cleaner cities',
      'Renewal strategies across multiple vehicle classes',
      'Government-facing implementation partnerships',
      'Operationally grounded transition planning',
    ],
    serviceLens: ['Route networks', 'Operator readiness', 'City impact'],
    detailEyebrow: 'GreenFleet Delivery Stack',
    detailHeading: 'Public transport renewal structured around vehicles, routes, and operating partners.',
    detailSections: [
      {
        key: 'scope',
        eyebrow: 'Transit Scope',
        title: 'Vehicle classes for public movement',
        description:
          'GreenFleet supports electrification across the vehicle formats that shape urban transport networks.',
        summary: 'Scope',
        items: [
          {
            label: 'Micro & Shared Transit',
            detail: 'Tricycles, minicars, and taxis for high-frequency city movement and feeder routes.',
          },
          {
            label: 'Mass Movement',
            detail: 'Minibuses and buses for structured routes, terminals, and municipal transit corridors.',
          },
          {
            label: 'Renewal Programmes',
            detail: 'Phased replacement of ageing combustion fleets with cleaner electric alternatives.',
          },
        ],
      },
      {
        key: 'capabilities',
        eyebrow: 'Programme Capabilities',
        title: 'Planning support for city-scale adoption',
        description:
          'The service combines government engagement, operator coordination, infrastructure planning, and rollout support.',
        summary: 'Capabilities',
        items: [
          {
            label: 'Stakeholder Alignment',
            detail: 'Coordination with public agencies, unions, operators, and transport programme owners.',
          },
          {
            label: 'Route Electrification',
            detail: 'Assessment of route length, charging points, depot needs, and service frequency.',
          },
          {
            label: 'Transition Planning',
            detail: 'Deployment sequencing that reduces disruption while improving public transport quality.',
          },
        ],
      },
      {
        key: 'applications',
        eyebrow: 'Deployment Fit',
        title: 'Where GreenFleet creates mobility value',
        description:
          'GreenFleet is built for public systems that need cleaner, more efficient passenger transport.',
        summary: 'Use cases',
        items: [
          {
            label: 'Municipal Transit',
            detail: 'City bus corridors, state-backed transport schemes, and route-based fleet renewal.',
          },
          {
            label: 'Feeder Networks',
            detail: 'Neighbourhood routes that connect passengers to major terminals and commercial centres.',
          },
          {
            label: 'Public-Private Operations',
            detail: 'Partnership structures involving governments, operators, investors, and infrastructure providers.',
          },
        ],
      },
    ],
  },
  {
    slug: 'metro-charge',
    title: 'Metro Charge: Electric Vehicles (EV) Charging Infrastructure',
    shortTitle: 'Metro Charge',
    eyebrow: 'Charging Infrastructure',
    description:
      'Recognising the importance of supporting infrastructure, Metro Charge is our network of Electric Vehicles (EV) charging stations in partnership with Sunphos, dedicated to ensuring seamless and convenient charging for all Electric Vehicles (EV) users. Our stations will be strategically located to provide easy access and reliability, supporting the growing adoption of EVs across the continent.',
    image: 'metro.png',
    accent: '#7a9aab',
    metrics: [
      { label: 'Guide Scope', value: 'Level 1 to Industrial' },
      { label: 'Power Range', value: '1.4 kW to 1 MW+' },
      { label: 'Deployment Fit', value: 'Homes, Hubs & Fleets' },
    ],
    pillars: [
      'Charging network planning for growing EV demand',
      'Infrastructure deployment with reliability in mind',
      'Accessible station placement for daily convenience',
      'Foundational support for broader EV ecosystems',
    ],
    serviceLens: ['Charger class', 'Grid readiness', 'Deployment use case'],
    detailEyebrow: 'Charging Infrastructure Guide',
    detailHeading:
      'A structured view of EV charger types, technical requirements, and real-world applications.',
    detailSections: [
      {
        key: 'scope',
        eyebrow: 'Charger Types',
        title: 'Power levels and charging speeds',
        description:
          'Metro Charge planning spans basic AC charging, faster destination charging, DC fast charging, and industrial systems.',
        summary: 'Charger classes',
        items: [
          {
            label: 'Level 1 Charger',
            detail:
              '120V AC single-phase charging at 1.4-1.9 kW, typically adding 3-5 miles of range per hour through a standard household outlet.',
          },
          {
            label: 'Level 2 Charger',
            detail:
              '208V-240V AC charging at 3.3-22 kW, commonly adding 10-30 miles of range per hour for homes, workplaces, hotels, and public parking.',
          },
          {
            label: 'Level 3 DC Fast Charger',
            detail:
              '200V-1000V DC charging at 50-350 kW, delivering rapid public charging for highways, urban hubs, and high-traffic corridors.',
          },
          {
            label: 'Industrial Charging Station',
            detail:
              'High-capacity depot and heavy-duty charging from 100 kW to 1 MW+, designed for buses, trucks, ports, mining, and large fleets.',
          },
        ],
      },
      {
        key: 'capabilities',
        eyebrow: 'Infrastructure Requirements',
        title: 'Electrical, network, and energy systems',
        description:
          'Each charger class carries different installation demands, from simple dedicated circuits to utility-scale power infrastructure.',
        summary: 'Requirements',
        items: [
          {
            label: 'Level 1 Installation',
            detail:
              'Uses a dedicated 15A or 20A household circuit with SAE J1772 equipment in North America; best as basic, backup, or PHEV charging.',
          },
          {
            label: 'Level 2 Installation',
            detail:
              'Requires a dedicated 30A-100A, 240V circuit, wall or pedestal EVSE, permitting, inspection, and often licensed electrical work.',
          },
          {
            label: 'DC Fast Installation',
            detail:
              'Typically needs three-phase 480V utility service, transformers, concrete pads, conduit, network connectivity, and payment monitoring.',
          },
          {
            label: 'Industrial Installation',
            detail:
              'May involve medium-voltage service, custom switchgear, cable management, BESS peak-demand control, SCADA, and 24/7 duty-cycle design.',
          },
        ],
      },
      {
        key: 'applications',
        eyebrow: 'Applications & Technologies',
        title: 'Use cases from home charging to fleet depots',
        description:
          'The right charging format depends on vehicle battery size, dwell time, site power, route pattern, and operating intensity.',
        summary: 'Use cases',
        items: [
          {
            label: 'Residential & Backup Charging',
            detail:
              'Level 1 and Level 2 charging for overnight home use, short-commute drivers, PHEVs, rental properties, and temporary charging needs.',
          },
          {
            label: 'Destination Charging',
            detail:
              'Level 2 charging for workplaces, hotels, shopping centres, retail parking, and multi-unit residential buildings.',
          },
          {
            label: 'Corridor Fast Charging',
            detail:
              'DC fast charging for long-distance travel, petrol-station-style stops, urban charging hubs, and revenue-generating public networks.',
          },
          {
            label: 'Fleet & Heavy-Duty Charging',
            detail:
              'Industrial systems for bus depots, logistics terminals, ports, airports, mining sites, military depots, pantographs, V2G, and smart load balancing.',
          },
        ],
      },
    ],
  },
  // {
  //   slug: "ryde",
  //   title: "RYDE: Ride-Hailing And Sharing Services",
  //   shortTitle: "RYDE",
  //   eyebrow: "Ride-Hailing & Shared Mobility",
  //   description:
  //     "RYDE is our innovative ride-hailing, sharing, charter, and taxi service. Starting in Nigeria, RYDE will deploy a fleet of owned Electric Vehicles (EV) assets, offering affordable, convenient, safe, and eco-friendly transportation. Positioned to rival global giants like Uber, Bolt, and Lyft, RYDE aims to redefine urban mobility in Africa.",
  //   image: "ryde.webp",
  //   accent: "#7d8db0",
  //   metrics: [
  //     { label: "Model", value: "Shared Mobility" },
  //     { label: "Launch Market", value: "Nigeria" },
  //     { label: "Goal", value: "Affordable EV Rides" },
  //   ],
  //   pillars: [
  //     "Ride-hailing and charter operations built on EV assets",
  //     "User-facing mobility with cleaner fleet economics",
  //     "Urban transport designed for affordability and comfort",
  //     "Scalable shared mobility positioning for African cities",
  //   ],
  // },
  {
    slug: 'assembli',
    title: 'ASSEMBLI: Electric Vehicles (EV) Assembly Network',
    shortTitle: 'ASSEMBLI',
    eyebrow: 'Assembly Network',
    description:
      'ASSEMBLI is our extensive network of Electric Vehicles (EV) Assembly Plants dedicated to assembling Electric Vehicles, including tricycles, cars, and buses. This network ensures high-quality production standards, reduces costs, and expedites the delivery of EVs to various markets across Africa. By building and assembling vehicles locally, we support local economies and create job opportunities.',
    image: 'assembli.webp',
    accent: '#a68b6d',
    metrics: [
      { label: 'Capability', value: 'Local Assembly' },
      { label: 'Vehicle Types', value: 'Tricycles to Buses' },
      { label: 'Outcome', value: 'Faster Market Delivery' },
    ],
    pillars: [
      'Local assembly designed for speed and cost control',
      'Production support for multiple EV classes',
      'Regional delivery readiness across African markets',
      'Industrial growth through local capability building',
    ],
    serviceLens: ['Production fit', 'Quality systems', 'Market delivery'],
    detailEyebrow: 'ASSEMBLI Delivery Stack',
    detailHeading: 'Local EV assembly structured around production quality, cost control, and delivery speed.',
    detailSections: [
      {
        key: 'scope',
        eyebrow: 'Assembly Scope',
        title: 'Vehicle production across practical EV classes',
        description:
          'ASSEMBLI supports local assembly capacity for the vehicle types most relevant to African mobility markets.',
        summary: 'Scope',
        items: [
          {
            label: 'Light EVs',
            detail: 'Tricycles and compact vehicles for affordable urban mobility and last-mile movement.',
          },
          {
            label: 'Passenger EVs',
            detail: 'Cars and minicars for consumer, corporate, institutional, and ride-service demand.',
          },
          {
            label: 'Transit EVs',
            detail: 'Buses and minibuses for public transport, private shuttles, and institutional fleets.',
          },
        ],
      },
      {
        key: 'capabilities',
        eyebrow: 'Industrial Capabilities',
        title: 'Assembly processes built for quality and scale',
        description:
          'The network is structured to support repeatable production, quality control, and regional supply needs.',
        summary: 'Capabilities',
        items: [
          {
            label: 'Local Production',
            detail: 'Vehicle assembly closer to demand centres to reduce logistics friction and delivery timelines.',
          },
          {
            label: 'Quality Standards',
            detail: 'Production practices focused on consistent build quality, safety, and market readiness.',
          },
          {
            label: 'Cost Efficiency',
            detail: 'Local capability that can improve affordability and support broader EV adoption.',
          },
        ],
      },
      {
        key: 'applications',
        eyebrow: 'Deployment Fit',
        title: 'Where local assembly strengthens the EV ecosystem',
        description:
          'ASSEMBLI is designed for markets that need reliable vehicle supply and industrial participation.',
        summary: 'Use cases',
        items: [
          {
            label: 'Regional Supply',
            detail: 'Faster delivery of EVs to cities, operators, institutions, and public programmes.',
          },
          {
            label: 'Economic Development',
            detail: 'Job creation, technical skills growth, and stronger local participation in EV manufacturing.',
          },
          {
            label: 'Fleet Programmes',
            detail: 'Vehicle availability for corporate fleets, public transport renewal, and mobility operators.',
          },
        ],
      },
    ],
  },
  {
    slug: 'ev-care',
    title: 'Electric Vehicles (EV) Care: Electric Vehicles (EV) Maintenance Services',
    shortTitle: 'EV Care',
    eyebrow: 'Maintenance & Aftercare',
    description:
      "Electric Vehicles (EV) Care offers comprehensive maintenance services to ensure your EV fleet's longevity and optimal performance. Our network of specialised service and maintenance garages will be equipped with the latest technology and staffed by trained professionals. From routine maintenance to advanced repairs, we provide support to keep your Electric Vehicles running smoothly and efficiently.",
    image: 'evCare.webp',
    accent: '#6e8f8b',
    metrics: [
      { label: 'Support', value: 'End-to-End Aftercare' },
      { label: 'Coverage', value: 'Routine to Advanced Repairs' },
      { label: 'Priority', value: 'Fleet Uptime' },
    ],
    pillars: [
      'Specialised maintenance support for EV fleets',
      'Garage networks built around uptime and reliability',
      'Preventive servicing and repair capability',
      'Operational support to extend vehicle lifespan',
    ],
    serviceLens: ['Preventive care', 'Repair readiness', 'Fleet uptime'],
    detailEyebrow: 'EV Care Delivery Stack',
    detailHeading: 'Maintenance and aftercare built around uptime, diagnostics, and long-term EV reliability.',
    detailSections: [
      {
        key: 'scope',
        eyebrow: 'Service Scope',
        title: 'Maintenance coverage for EV operations',
        description:
          'EV Care covers the routine and advanced service needs required to keep electric fleets operating smoothly.',
        summary: 'Scope',
        items: [
          {
            label: 'Routine Maintenance',
            detail: 'Scheduled inspections, consumables, tyre checks, brake systems, and general vehicle condition checks.',
          },
          {
            label: 'EV Diagnostics',
            detail: 'Battery health checks, software-led troubleshooting, charging system checks, and fault identification.',
          },
          {
            label: 'Advanced Repairs',
            detail: 'Specialist support for drivetrain, power electronics, thermal systems, and fleet-critical issues.',
          },
        ],
      },
      {
        key: 'capabilities',
        eyebrow: 'Workshop Capabilities',
        title: 'Garage networks prepared for electric vehicles',
        description:
          'The service is designed around trained personnel, specialised equipment, and practical fleet support workflows.',
        summary: 'Capabilities',
        items: [
          {
            label: 'Specialised Garages',
            detail: 'Service locations equipped for EV maintenance requirements and operator support.',
          },
          {
            label: 'Trained Professionals',
            detail: 'Technicians prepared to work with EV systems, diagnostics, and safety procedures.',
          },
          {
            label: 'Fleet Coordination',
            detail: 'Maintenance scheduling and support processes designed to reduce downtime.',
          },
        ],
      },
      {
        key: 'applications',
        eyebrow: 'Deployment Fit',
        title: 'Where EV Care protects operating performance',
        description:
          'EV Care is most valuable where vehicle reliability directly affects passenger service, delivery, or business continuity.',
        summary: 'Use cases',
        items: [
          {
            label: 'Corporate Fleets',
            detail: 'Planned maintenance for business vehicles, shuttles, and field operations.',
          },
          {
            label: 'Public Transport Fleets',
            detail: 'Support for buses, minibuses, taxis, and high-use passenger mobility assets.',
          },
          {
            label: 'Institutional Operators',
            detail: 'Service continuity for schools, estates, government fleets, airports, and logistics teams.',
          },
        ],
      },
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  serviceCatalog.find((service) => service.slug === slug);
