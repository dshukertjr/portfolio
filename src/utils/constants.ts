import { Article, Favorite, Social } from './types'

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
    description: 'Database used in Supabase. Made me re-realize how great SQL databases are.',
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

export const articles: Article[] = [
  {
    title: '父がMITなら私はスタンフォードだ 入学できなかったけど - Japanese',
    imagePath: '/images/stanford-mit.jpeg',
    link: 'https://atmarkit.itmedia.co.jp/ait/articles/2111/15/news004.html',
  },
  {
    title: '品川でのホームレス経験が「エンジニアの原風景」になった - Japanese',
    imagePath: '/images/solutions-engineer.jpeg',
    link: 'https://atmarkit.itmedia.co.jp/ait/articles/2111/16/news005.html',
  },
  {
    title: 'AWS Dev Day 2022 Guest Speaker',
    imagePath: '/images/aws-dev-day-2022.jpeg',
    link: 'https://www.youtube.com/watch?v=XWYkpQRLsFk',
  },
  {
    title: 'FlutterGakkai Speaker',
    imagePath: '/images/fluttergakkai.png',
    link: 'https://www.youtube.com/live/IpcFqABBKvU?feature=share&t=2128',
  },
]
