// ./src/sanity/lib/resolve.ts

import { defineLocations } from 'sanity/presentation';
import type { PresentationPluginOptions } from 'sanity/presentation';

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    // Homepage
    homepage: defineLocations({
      select: {
        title: 'title',
      },
      resolve: doc => ({
        locations: [
          {
            title: doc?.title || 'Homepage',
            href: `/`,
          },
        ],
      }),
    }),

    // Pages
    page: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: doc => {
        const slug = doc?.slug;
        return {
          locations: [
            {
              title: doc?.title || 'Untitled Page',
              href: slug ? `/pages/${slug}` : `/`, // fallback if slug missing
            },
          ],
        };
      },
    }),
  },
};
