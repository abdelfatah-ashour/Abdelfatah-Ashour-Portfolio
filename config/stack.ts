import { Colors } from './colors';

export enum Stack {
  // Languages
  typescript,
  javascript,

  // Frontend
  react,
  nextjs,
  reactnative,
  SASS,

  // Backend
  graphql,
  node,

  // Databases
  mongo,

  // Tools
  CSS,
  HTML,
  bootstrap,
  materialui,
  tailwindcss,
  styledcomponent,
  firebase,
  pusherjs,
  redux,

  // deployment
  docker,
}

export const WorkStack = [
  Stack.HTML,
  Stack.CSS,
  Stack.javascript,
  Stack.typescript,
  Stack.react,
  Stack.nextjs,
  Stack.reactnative,
  Stack.graphql,
  Stack.bootstrap,
  Stack.firebase,
  Stack.materialui,
  Stack.tailwindcss,
  Stack.styledcomponent,
  Stack.docker,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.react]: {
    value: 'React.js',
    color: Colors.react,
  },
  [Stack.nextjs]: {
    value: 'Next.js',
    color: Colors.nextjs,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },

  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },

  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.HTML]: {
    value: 'HTML',
    color: Colors.email,
  },
  [Stack.CSS]: {
    value: 'CSS',
    color: Colors.terraform,
  },
  [Stack.SASS]: {
    value: 'Sass',
    color: Colors.sass,
  },
  [Stack.bootstrap]: {
    value: 'Bootstrap 5',
    color: Colors.bootstrap,
  },
  [Stack.firebase]: {
    value: 'Firebase Cloud Functions',
    color: Colors.firebase,
  },
  [Stack.materialui]: {
    value: 'Material UI',
    color: Colors.materialui,
  },
  [Stack.tailwindcss]: {
    value: 'Tailwind CSS',
    color: Colors.tailwindcss,
  },
  [Stack.styledcomponent]: {
    value: 'Styled Components',
    color: Colors.styledcomponent,
  },
  [Stack.pusherjs]: {
    value: 'Pusher JS',
    color: Colors.pusherjs,
  },
  [Stack.redux]: {
    value: 'Redux',
    color: Colors.redux,
  },

  [Stack.docker]: {
    value: 'Docker',
    color: Colors.typescript,
  },
};
