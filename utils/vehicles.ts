import type { vehicle } from "~/types/types";
export const vehicles: vehicle[] = [
  {
    name: "E-Bus",
    description:
      "The Metro Electric Mass Transit E-Bus is a state-of-the-art electric vehicle designed to redefine sustainable urban transportation. Equipped with a robust 160 kWh battery, it boasts an impressive range of 265 km per charge, making it ideal for city-wide transit systems. Engineered for efficiency and eco-friendliness, the Metro Electric offers smooth, quiet rides while significantly reducing carbon emissions. This advanced mass transit solution combines innovation, reliability, and environmental consciousness to meet the growing demands for sustainable public transportation. Perfect for modern urban settings, it exemplifies the future of green mobility.",
    category: "bus",
    price: "₦310,000,000",
    images: ["/vehicles/Bus1.png", "/vehicles/Bus2.jpg", "/vehicles/Bus3.png"],
    specification: [
      { label: "NAME", value: "Metro Electric" },
      { label: "MODEL", value: "Mass Transit" },
      { label: "BATTERY SIZE", value: "160kwh" },
      { label: "RANGE", value: "265 km" },
      { label: "COLOR", value: "WHITE" },
    ],
    features: [
      "Eco-Friendly Powertrain",
      "Spacious & Passenger Focused Design",
      "Smart Technology Integration",
      "Quick Charging Capability",
      "Impressive Range",
      "Energy Efficiency",
      "Safety Features",
      "Durability and Reliability",
    ],
  }
  
];
