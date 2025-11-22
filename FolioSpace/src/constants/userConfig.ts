import { ContactLink } from '../types/userConfig';

export const USER_CONFIG = {
  AVATAR_URL:
    'https://avatars.githubusercontent.com/u/80171544?v=4',
  NAME: 'Apoll011',
  JOB_TITLE: 'Desenvolvedor',
  BIO: [
    'Engenheiro que programa tudo o que mexe (e o que não devia mexer também)',
    'Game Dev de coração | A criar mundos quando devia estar a dormir',
    'Nerd da IA | Sempre a testar coisas que provavelmente vão crashar',
  ],

  CONTACT_LINKS: [
    {
      type: 'github',
      url: 'https://github.com/apoll011',
      icon: 'fab fa-github',
      text: 'GitHub',
    },
    {
      type: 'email',
      url: 'mailto:tiagobernrdp@gmail.com',
      icon: 'fas fa-envelope',
      text: '邮箱',
    },
    {
      type: 'website',
      url: 'https://portfolio-sigma-liard-61.vercel.app/',
      icon: 'fas fa-globe',
      text: 'Portfolio',
    },
  ] as ContactLink[],
} as const;