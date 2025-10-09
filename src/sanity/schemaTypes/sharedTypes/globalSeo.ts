import { defineType, defineField } from 'sanity';
import { SearchIcon } from '@sanity/icons';

export const globalSeo = defineType({
  name: 'globalSeo',
  title: 'Global SEO Settings (Default)',
  type: 'document',
  icon: SearchIcon,
  fields: [
    defineField({
      name: 'defaultTitle',
      type: 'string',
      title: 'Default Title',
    }),
    defineField({
      name: 'pageLanguage',
      type: 'string',
      title: 'Page Language',
      initialValue: 'no',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Norwegian', value: 'no' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'defaultKeywords',
      type: 'text',
      title: 'Meta Keywords',
      description: 'Define keywords for search engines.',
    }),
    defineField({
      name: 'defaultDescription',
      type: 'text',
      title: 'Default Description',
    }),
    defineField({
      name: 'ogImage',
      type: 'image',
      title: 'Default Social Image',
      options: { hotspot: true },
    }),
  ],
});
