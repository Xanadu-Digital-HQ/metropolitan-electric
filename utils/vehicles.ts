import type { vehicle } from '~/types/types';
export const vehicles: vehicle[] = [
  {
    name: 'E-Bus',
    description:
      'The Metro Electric Mass Transit E-Bus is a state-of-the-art electric vehicle designed to redefine sustainable urban transportation. Equipped with a robust 160 kWh battery, it boasts an impressive range of 265 km per charge, making it ideal for city-wide transit systems. Engineered for efficiency and eco-friendliness, the Metro Electric offers smooth, quiet rides while significantly reducing carbon emissions. This advanced mass transit solution combines innovation, reliability, and environmental consciousness to meet the growing demands for sustainable public transportation. Perfect for modern urban settings, it exemplifies the future of green mobility.',
    category: 'bus',
    price: '₦310,000,000',
    images: ['/vehicles/Bus1.png', '/vehicles/Bus2.jpg', '/vehicles/Bus3.png'],
    specification: [
      { label: 'NAME', value: 'Metro Electric' },
      { label: 'MODEL', value: 'Mass Transit' },
      { label: 'BATTERY SIZE', value: '160kwh' },
      { label: 'RANGE', value: '265 km' },
      { label: 'COLOR', value: 'WHITE' },
    ],
    features: [
      'Eco-Friendly Powertrain',
      'Spacious & Passenger Focused Design',
      'Smart Technology Integration',
      'Quick Charging Capability',
      'Impressive Range',
      'Energy Efficiency',
      'Safety Features',
      'Durability and Reliability',
    ],
  },
  {
    name: 'Hongqi E-QM5',
    description:
      'The Hongqi E-QM5 is a 4-door, 5-seat all-electric sedan built for efficient city and executive mobility. With LFP battery options, a smooth front-wheel-drive setup, practical cabin technology, and reliable safety features, it offers a refined electric driving experience for everyday transportation.',
    category: 'car',
    price: '₦55,000,000',
    images: [
      '/vehicles/hongqi1.png',
      '/vehicles/hongqi2.png',
      '/vehicles/hongqi3.png',
      '/vehicles/hongqi4.png',
      '/vehicles/hongqi5.png',
    ],
    specification: [
      { label: 'VEHICLE TYPE', value: '4-Door 5-Seat All-Electric Sedan' },
      { label: 'DIMENSIONS (L X W X H)', value: '4,657 x 1,814 x 1,490 mm' },
      { label: 'WHEELBASE', value: '2,680 mm' },
      { label: 'CURB WEIGHT (EST.)', value: '~1,645 - 1,750 kg' },
      { label: 'SEATING CAPACITY', value: '5 Seats' },
      { label: 'DRIVE TYPE', value: 'Front-Wheel Drive (FWD)' },
      { label: 'BATTERY TYPE', value: 'Lithium Iron Phosphate (LFP)' },
      {
        label: 'BATTERY CAPACITY',
        value: '54.0 kWh (Standard) / 61.9 kWh (Long Range)',
      },
      {
        label: 'RANGE',
        value: '420 km  / 560 km CLTC',
      },
      { label: 'MOTOR POWER', value: '120 kW (Max)' },
      { label: 'MOTOR TORQUE', value: '250 Nm (Max)' },
      { label: 'TOP SPEED', value: '140 km/h' },
      { label: '0 - 100 KM/H', value: '~11.8 s' },
      {
        label: 'ENERGY CONSUMPTION',
        value: '~11.9 - 12.8 kWh/100 km (CLTC)',
      },
      { label: 'CHARGING TIME (AC)', value: '6.5 h (6.6 kW)' },
      { label: 'CHARGING TIME (DC)', value: '30 min (30% - 80%)' },
      { label: 'SUSPENSION (FRONT / REAR)', value: 'MacPherson / Multi-link' },
      { label: 'BRAKES (FRONT / REAR)', value: 'Ventilated Disc / Disc' },
      { label: 'TIRE SIZE', value: '195/60 R16' },
      { label: 'INFOTAINMENT SCREEN', value: '10.25-inch Touchscreen' },
      { label: 'INSTRUMENT CLUSTER', value: '7-inch LCD' },
      { label: 'SOUND SYSTEM', value: '6-speaker Audio System' },
      {
        label: 'ADAS SYSTEM',
        value: 'Basic Driver Assistance System (ABS, ESC, TPMS, Parking Sensors)',
      },
      {
        label: 'SAFETY FEATURES',
        value: '4 Airbags, ABS, EBD, ESC, HHC, ISOFIX, Rear Parking Sensors, TPMS',
      },
    ],
    features: [
      'Efficient LFP Battery Technology',
      'Long Range Battery Options',
      'Front-Wheel Drive Comfort',
      'Fast DC Charging',
      'Touchscreen Infotainment',
      'Driver Assistance Features',
      '5-Seat Sedan Layout',
      'Comprehensive Safety Systems',
    ],
  },
  {
    name: 'Xiaomi SU7',
    description:
      'The Xiaomi SU7 is a 2024 full-size four-door fastback electric sedan from Xiaomi Auto. Launched in Beijing in March 2024, it combines a low-drag body, strong single- and dual-motor powertrain options, long CLTC driving range, fast charging on the Max variant, and Xiaomi HyperOS smart ecosystem integration.',
    category: 'car',
    price: '₦75,000,000',
    images: [
      '/vehicles/xiaomi_su7_1.png',
      '/vehicles/xiaomi_su7_2.png',
      '/vehicles/xiaomi_su7_3.png',
      '/vehicles/xiaomi_su7_4.jpg',
      '/vehicles/xiaomi_su7_5.jpg',
    ],
    specification: [
      {
        label: 'VEHICLE TYPE',
        value: 'Full-Size 4-Door Fastback Electric Sedan',
      },
      { label: 'MODEL YEAR', value: '2024' },
      { label: 'LAUNCH', value: 'March 2024, Beijing' },
      {
        label: 'DIMENSIONS (L X W X H)',
        value: '4,997 x 1,963 x 1,440 - 1,455 mm',
      },
      { label: 'WHEELBASE', value: '3,000 mm' },
      { label: 'SEATING CAPACITY', value: '5 Seats' },
      {
        label: 'DRIVE TYPE',
        value: 'Rear-Wheel Drive (Standard/Pro) / All-Wheel Drive (Max)',
      },
      { label: 'DRAG COEFFICIENT', value: '0.195 Cd' },
      {
        label: 'BATTERY CAPACITY',
        value: '73.6 kWh (Standard) / 94.3 kWh (Pro) / 101 kWh CATL Qilin (Max)',
      },
      {
        label: 'RANGE',
        value: '700 km / 800 km CLTC',
      },
      { label: 'CHARGING ARCHITECTURE', value: '800V (Max)' },
      { label: 'FAST CHARGING', value: 'Up to 510 km range in 15 min (Max)' },
      {
        label: 'MOTOR POWER',
        value: '220 kW (Standard/Pro) / 495 kW AWD (Max)',
      },
      {
        label: 'MOTOR TORQUE',
        value: '400 Nm (Standard) / 438 Nm (Pro) / 838 Nm (Max)',
      },
      { label: 'TOP SPEED', value: '210 km/h (Standard) / 265 km/h (Max)' },
      {
        label: '0 - 100 KM/H',
        value: '5.28 s (Standard) / 4.68 s (Pro) / 2.78 s (Max)',
      },
      {
        label: 'INFOTAINMENT SCREEN',
        value: '16.1-inch 3K Central Touchscreen',
      },
      {
        label: 'INSTRUMENT CLUSTER',
        value: 'Rotating Instrument Cluster Display',
      },
      { label: 'OPERATING SYSTEM', value: 'Xiaomi HyperOS' },
      {
        label: 'CONNECTIVITY',
        value:
          'Xiaomi smartphone and smart home integration, CarPlay, UWB proximity unlocking, iPad rear-seat controls',
      },
      {
        label: 'ADAS SYSTEM',
        value: 'L2+ Assisted Driving with LiDAR and high-precision sensors',
      },
      {
        label: 'DRIVER ASSISTANCE',
        value: 'Adaptive Cruise Control, Lane-Keeping Assist, Automatic Emergency Braking',
      },
      {
        label: 'PREMIUM EQUIPMENT',
        value:
          'Active rear spoiler, adjustable ride height, air suspension, soft-close automatic doors, HUD, active noise cancellation',
      },
      {
        label: 'INTERIOR',
        value:
          'Artificial leather dashboard, leather front bucket seats, aluminium-finish center console',
      },
      { label: 'STORAGE', value: 'Front trunk plus rear boot' },
    ],
    features: [
      'Ultra-Low 0.195 Cd Drag Coefficient',
      'Standard, Pro, and Max Powertrain Options',
      'Up to 800 km CLTC Range',
      '800V Ultra-Fast Charging on Max Variant',
      'Xiaomi HyperOS Smart Ecosystem',
      'L2+ Assisted Driving with LiDAR',
      '16.1-inch 3K Central Touchscreen',
      'Active Rear Spoiler and Adjustable Ride Height',
    ],
  },
];
