import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

import pocketbase from 'astro-pocketbase';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), tailwind(), pocketbase(), sitemap(), icon()],
  output: 'server',
  adapter: netlify()
});