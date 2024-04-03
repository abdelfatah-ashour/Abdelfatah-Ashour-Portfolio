import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Tiras',
    slug: 'tiras',
    banner: '/static/projects/tiras/banner.png',
    website: 'https://beta.tiras.app/en',
    description:
      'Tiras is the leading Real Estate marketplace in Saudi Arabia where you can browse thousands of freshly updated properties for sale or rent, and you can advertise your properties too',
    shortDescription:
      'Ready to deploy, distributed cryptocurrency trading bot.',
    repository: '',
    stack: [
      Stack.node,
      Stack.nextjs,
      Stack.react,
      Stack.redux,
      Stack.javascript,
      Stack.pusherjs,
      Stack.CSS,
      Stack.tailwindcss,
      Stack.redux,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/tiras/screens/1.png',
      '/static/projects/tiras/screens/2.png',
      '/static/projects/tiras/screens/3.png',
      '/static/projects/tiras/screens/4.png',
      '/static/projects/tiras/screens/5.png',
      '/static/projects/tiras/screens/6.png',
      '/static/projects/tiras/screens/7.png',
      '/static/projects/tiras/screens/8.png',
      '/static/projects/tiras/screens/9.png',
    ],
    deployment: {
      web: 'https://krafttopia.com/',
    },
    subProjects: [],
  },
  {
    title: 'Thiqeel',
    slug: 'thiqeel',
    banner: '/static/projects/thiqeel/banner.png',
    website: 'https://thiqeel.com/',
    description:
      'is a digital platform that allows buyers and suppliers to place bids, enabling rapid and effective negotiations based on real-time price and volume.Featuring real-time collaboration and advanced buying analytics, auction — or eAuction — software  enables live viewing of bids, with in-the-moment context. Procurement organizations can set custom bidding parameters and make them available to suppliers too, so that everyone may bid on contracts fairly. eAuctions ensure that suppliers’ names remain masked and private.A unified platform such as GEP SMART™ facilitates eAuctions as routine sourcing events where users can simply create an auction, just like they would create an RFP, and enable real-time bidding.',
    shortDescription:
      'Ready to deploy, distributed cryptocurrency trading bot.',
    repository: '',
    stack: [
      Stack.node,
      Stack.nextjs,
      Stack.react,
      Stack.redux,
      Stack.javascript,
      Stack.pusherjs,
      Stack.CSS,
      Stack.SASS,
      Stack.bootstrap,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/thiqeel/screens/12.png',
      '/static/projects/thiqeel/screens/4.png',
      '/static/projects/thiqeel/screens/1.png',
      '/static/projects/thiqeel/screens/2.png',
      '/static/projects/thiqeel/screens/3.png',
      '/static/projects/thiqeel/screens/5.png',
      '/static/projects/thiqeel/screens/6.png',
      '/static/projects/thiqeel/screens/7.png',
      '/static/projects/thiqeel/screens/8.png',
      '/static/projects/thiqeel/screens/9.png',
      '/static/projects/thiqeel/screens/10.png',
      '/static/projects/thiqeel/screens/11.png',
    ],
    deployment: {
      web: 'https://thiqeel.com/',
    },
    subProjects: [],
  },
  {
    title: 'Portflash',
    slug: 'portflash',
    banner: '/static/projects/port-flash/banner.png',
    website: 'https://port-flash.com/',
    description:
      'provider of a hosting service which, at the request of a recipient of the service, stores and disseminates to the public information, unless that activity is a minor and purely ancillary feature of another service and, for objective and technical reasons cannot be used without that other service, and the integration of the feature into the other service is not a means to circumvent the applicability of this Regulation.',
    shortDescription:
      'Ready to deploy, distributed cryptocurrency trading bot.',
    repository: '',
    stack: [
      Stack.react,
      Stack.typescript,
      Stack.SASS,
      Stack.firebase,
      Stack.node,
      Stack.materialui,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/port-flash/screens/4.png',
      '/static/projects/port-flash/screens/1.png',
      '/static/projects/port-flash/screens/2.png',
      '/static/projects/port-flash/screens/3.png',
      '/static/projects/port-flash/screens/5.png',
      '/static/projects/port-flash/screens/6.png',
      '/static/projects/port-flash/screens/7.png',
    ],
    deployment: {
      web: 'https://port-flash.com/',
    },
    subProjects: [],
  },
  {
    title: 'Krafttopia',
    slug: 'krafttopia',
    banner: '/static/projects/krafttopia/banner.png',
    website: 'https://krafttopia.com/',
    description:
      'The system includes the user subsystem as well the seller subsystem. The online shopping system provides an outstanding way of bringing sellers and customers on an online platform to sell and make purchases in an efficient and secure manner irrespective of the distance between the two. It is a platform for customers to shop items online without having to visit a store or meet a seller  physically, and a platform for vendors to sell their items online without having to meet the  customers physically or have a physical store set up for his products. This system is a one stop for  customers to shop from millions of products online. The seller uploads his listing to the system and  the customers browse from these items and purchase them.',
    shortDescription:
      'Ready to deploy, distributed cryptocurrency trading bot.',
    repository: '',
    stack: [
      Stack.react,
      Stack.typescript,
      Stack.SASS,
      Stack.firebase,
      Stack.node,
      Stack.materialui,
    ],
    dimensions: [360, 640],
    screenshots: [
      '/static/projects/krafttopia/screens/1.png',
      '/static/projects/krafttopia/screens/2.png',
      '/static/projects/krafttopia/screens/3.png',
      '/static/projects/krafttopia/screens/4.png',
      '/static/projects/krafttopia/screens/5.png',
    ],
    deployment: {
      web: 'https://krafttopia.com/',
    },
    subProjects: [],
  },
];
