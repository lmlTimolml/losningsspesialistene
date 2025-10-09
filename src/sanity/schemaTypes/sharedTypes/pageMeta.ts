import { defineType, defineField } from 'sanity';

export const pageMeta = defineType({
  name: 'pageMeta',
  title: 'Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Meta Title',
      description: 'Used in <title>. Should be unique and under 60 characters.',
      validation: Rule => Rule.required().max(60),
    }),
    defineField({
      name: 'keywords',
      type: 'text',
      rows: 3,
      title: 'Meta Keywords',
      description: 'Define keywords for search engines.',
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      title: 'Meta Description',
      description:
        '150–160 characters. Appears in search results and link previews.',
      validation: Rule => Rule.required().max(160),
    }),
    defineField({
      name: 'ogImage',
      type: 'image',
      title: 'Open Graph / Social Image',
      description:
        'Used for social media link previews. Recommended size: 1200x630px.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'canonicalUrl',
      type: 'url',
      title: 'Canonical URL',
      description: 'Optional override. Helps avoid duplicate content issues.',
    }),
    defineField({
      name: 'robots',
      type: 'string',
      title: 'Robots Directive',
      options: {
        list: [
          { title: 'Index, Follow (default)', value: 'index,follow' },
          { title: 'No Index', value: 'noindex,follow' },
          { title: 'No Follow', value: 'index,nofollow' },
          { title: 'No Index, No Follow', value: 'noindex,nofollow' },
        ],
        layout: 'radio',
      },
      initialValue: 'index,follow',
    }),
    // Optional extras
    defineField({
      name: 'ogTitle',
      type: 'string',
      title: 'OG Title (optional)',
      description:
        'Override title for social media cards. Defaults to Meta Title.',
    }),
    defineField({
      name: 'ogDescription',
      type: 'text',
      rows: 3,
      title: 'OG Description (optional)',
      description:
        'Override description for social media cards. Defaults to Meta Description.',
    }),
    defineField({
      name: 'twitterCard',
      type: 'string',
      title: 'Twitter Card Type',
      options: {
        list: [
          { title: 'Summary', value: 'summary' },
          { title: 'Summary with Large Image', value: 'summary_large_image' },
        ],
        layout: 'radio',
      },
      initialValue: 'summary_large_image',
    }),
  ],
});
