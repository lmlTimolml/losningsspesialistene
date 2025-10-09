// schemas/objects/socialLink.ts
import { defineType, defineField } from 'sanity';

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Media Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Twitter/X', value: 'twitter' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Phone', value: 'phone' },
          { title: 'E-mail', value: 'email' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'email',
      title: 'E-post adresse',
      type: 'email',
      validation: Rule => Rule.error('Please enter a valid email address'),
    }),
    defineField({
      name: 'phone',
      title: 'Telefon nummer',
      description: 'Format eks. 47XXXXXXXX ',
      type: 'number',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Image',
      type: 'image',
      description: 'Optional custom icon (default will be used if empty)',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      platform: 'platform',
      url: 'url',
      media: 'icon',
    },
    prepare({ platform, url, media }) {
      return {
        title: platform?.charAt(0).toUpperCase() + platform?.slice(1),
        subtitle: url,
        media,
      };
    },
  },
});
