import { Favorite, Social } from './types'

export const favorites: Favorite[] = [
  {
    title: 'React',
    description: 'Web framework. Started using it because everybody is using it.',
    imagePath: 'images/react.svg',
  },
  {
    title: 'TailwindCSS',
    description: 'Simple to use CSS framework. This website uses it. ',
    imagePath: 'images/tailwindcss.svg',
  },
  {
    title: 'Flutter',
    description: 'Mobile app framework. Could not love it more.',
    imagePath: 'images/flutter.svg',
  },
  {
    title: 'Figma',
    description: "Design tool. So awesome and it's free. Use it if you haven't.",
    imagePath: 'images/figma.svg',
  },
  {
    title: 'Supabase',
    description:
      "Everyone's favorite open source Firebase alternative. Give it a try if you haven't yet.",
    imagePath: 'images/supabase.svg',
  },
  {
    title: 'PostgreSQL',
    description: 'Database for Supabase. Made me re-realize how great SQL databases are.',
    imagePath: 'images/posgresql.svg',
  },
  {
    title: 'HubSpot',
    description:
      "CRM/Sales tools/CMS/Marketing tools/many other things. Great tool. Use it if you haven't.",
    imagePath: 'images/hubspot.svg',
  },
]

export const socials: Social[] = [
  {
    name: 'github',
    url: 'https://github.com/dshukertjr',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/dshukertjr/',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/dshukertjr',
  },
]
