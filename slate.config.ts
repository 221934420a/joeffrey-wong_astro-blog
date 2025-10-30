/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'en-US',
  site: 'https://221934420a.github.io/',
  avatar: '/UK_traffic_sign_625.1.svg.png',
  title: 'Joeffrey Wong',
  description: 'Hongkonger, now based in the UK and Looking for software developer job. Trying to make my personal website.',
  lastModified: true,
  readTime: true,
  cv: '/Joeffrey Wong-CV.pdf',
  footer: {
    copyright: '© 2025 Slate Design',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/221934420a'
    },
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/joeffreywong/'
    }
]
});