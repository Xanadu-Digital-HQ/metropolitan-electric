import { getVehicleSlug } from '~/utils/vehicleCatalog';
import { vehicles } from '~/utils/vehicles';

type OfferVehicleInput = {
  vehicleName: string;
  offerNote: string;
  displayImage: string;
  startingPrice: string;
  document: string;
};

type OfferHighlight = {
  label: string;
  value: string;
};

type OfferVehicleSpecification = {
  label: string;
  value: string;
};

export type PartnerOfferVehicle = OfferVehicleInput & {
  slug: string;
  name: string;
  image: string;
  category: string;
  startingPrice: string;
  document: string;
  keySpecifications: OfferVehicleSpecification[];
};

export type PartnerOffer = {
  slug: string;
  partnerName: string;
  partnerLogo: string;
  heroImage: string;
  headline: string;
  description: string;
  summary: string;
  terms: string;
  financingOverview: string[];
  benefits: string[];
  contactEmail: string;
  highlights: OfferHighlight[];
  vehicles: PartnerOfferVehicle[];
};

const offerSources: Array<Omit<PartnerOffer, 'vehicles'> & { vehicles: OfferVehicleInput[] }> = [
  {
    slug: 'access-bank-green-drive',
    partnerName: 'Access Bank',
    partnerLogo: '/offers/Access_Bank_Logo.png',
    heroImage: '/offers/access_bg.png',
    headline: 'Drive Electric with Access',
    description:
      'An Electric Vehicle initiative in partnership with Metropolitan Electric, enabling staff to explore electric mobility with access to selected vehicles, flexible financing, and charging support.',
    summary:
      'Access staff can explore selected electric sedans and SUVs through a structured partner programme built around flexible financing and EV charging support.',
    terms:
      'Prices are subject to change. Final eligibility, model availability, financing terms, and delivery details are confirmed during sales consultation.',
    financingOverview: [
      '15% minimum equity',
      '15% - 18% interest p.a.',
      'Up to 48 months',
      'Structured monthly repayments',
    ],
    benefits: [
      'Lower fuel and maintenance costs',
      'Access to EV charging support',
      'Opportunity to explore sustainable mobility',
    ],
    contactEmail: 'TransportSector@accessbankplc.com',
    highlights: [
      { label: 'Partner', value: 'Access Bank' },
      { label: 'Eligible Models', value: '5 Vehicles' },
      { label: 'Financing Term', value: 'Up to 48 Months' },
    ],
    vehicles: [
      {
        vehicleName: 'Leapmotor B01',
        offerNote: 'Access staff financing model',
        displayImage: '/vehicles/leanmotors_b01_1.png',
        startingPrice: '₦41M',
        document: '/vehicles_docs/Leapmotor_Brochure_B01_Metro.pdf',
      },
      {
        vehicleName: 'Leapmotor C10',
        offerNote: 'Access staff financing SUV model',
        displayImage: '/vehicles/leapmotor_c10_1.png',
        startingPrice: '₦57M',
        document: '/vehicles_docs/Leapmotor_Brochure_C101905.pdf',
      },
      {
        vehicleName: 'Leapmotor C16',
        offerNote: 'Access staff financing family SUV model',
        displayImage: '/vehicles/leapmotor_c16_1.png',
        startingPrice: '₦66M',
        document: '/vehicles_docs/Leapmotor_Brochure_C16_Metro.pdf',
      },
      {
        vehicleName: 'Wuling Starlight S (SUV)',
        offerNote: 'Access staff financing crossover SUV model',
        displayImage: '/vehicles/wuling_starlight _s_1.png',
        startingPrice: '₦56M',
        document: '/vehicles_docs/Wuling_Starlight_S.pdf',
      },
      {
        vehicleName: 'Wuling Starlight (Sedan)',
        offerNote: 'Access staff financing crossover SUV model',
        displayImage: '/vehicles/wuling_starlight_sedan_1.png',
        startingPrice: '₦48M',
        document: '/vehicles_docs/Wuling_Starlight.pdf',
      },
    ],
  },
];

const vehicleByName = new Map(vehicles.map((item) => [item.name, item]));
const preferredSpecificationLabels = [
  'VEHICLE TYPE',
  'BATTERY CAPACITY',
  'BATTERY SIZE',
  'RANGE',
  'SEATING CAPACITY',
  'DRIVE TYPE',
  'MOTOR POWER',
  'MOTOR TORQUE',
  'TOP SPEED',
  '0 - 100 KM/H',
  'CHARGING TIME (DC)',
  'INFOTAINMENT SCREEN',
  'SAFETY FEATURES',
  'DIMENSIONS (L X W X H)',
  'COLOR',
  'MODEL',
];

const getKeySpecifications = (vehicleName: string): OfferVehicleSpecification[] => {
  const vehicle = vehicleByName.get(vehicleName);

  if (!vehicle) {
    return [];
  }

  const preferredSpecifications = preferredSpecificationLabels.flatMap((label) => {
    const specification = vehicle.specification.find((item) => item.label === label);
    return specification ? [specification] : [];
  });
  const fallbackSpecifications = vehicle.specification.filter(
    (specification) => !preferredSpecifications.some((item) => item.label === specification.label),
  );

  return [...preferredSpecifications, ...fallbackSpecifications].slice(0, 10);
};

export const partnerOffers: PartnerOffer[] = offerSources.map((offer) => ({
  ...offer,
  vehicles: offer.vehicles.flatMap((offerVehicle) => {
    const vehicle = vehicleByName.get(offerVehicle.vehicleName);

    if (!vehicle) {
      return [];
    }

    return [
      {
        ...offerVehicle,
        slug: getVehicleSlug(vehicle.name),
        name: vehicle.name,
        image: offerVehicle.displayImage,
        category: vehicle.category,
        document: offerVehicle.document || vehicle.document,
        keySpecifications: getKeySpecifications(vehicle.name),
      },
    ];
  }),
}));

export const findPartnerOfferBySlug = (slug: string): PartnerOffer | undefined =>
  partnerOffers.find((offer) => offer.slug === slug);
