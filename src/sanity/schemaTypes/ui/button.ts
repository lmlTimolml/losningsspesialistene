import { defineType, defineField } from 'sanity';

export const button = defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        defineField({
          name: 'external',
          title: 'External URL',
          type: 'url',
        }),
        defineField({
          name: 'internal',
          title: 'Internal Reference',
          type: 'reference',
          to: [{ type: 'page' }], // Change 'page' to match your internal document types
        }),
      ],
    }),
    defineField({
      name: 'section',
      title: 'Anchor / Section ID',
      type: 'string',
      description:
        'Optional anchor to scroll to (e.g. footer, contact, services)',
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      initialValue: 'btn-primary',
      options: {
        list: [
          { title: 'Primary', value: 'btn-primary' },
          { title: 'Primary Outline', value: 'btn-primary-outline' },
          { title: 'Secondary', value: 'btn-secondary' },
          { title: 'Secondary Outline', value: 'btn-secondary-outline' },
          { title: 'Contrast', value: 'btn-contrast' },
          { title: 'Contrast Outline', value: 'btn-contrast-outline' },
          { title: 'Support', value: 'btn-support' },
          { title: 'Support Outline', value: 'btn-support-outline' },
          { title: 'Black', value: 'btn-black' },
          { title: 'Black Outline', value: 'btn-black-outline' },
          { title: 'White', value: 'btn-white' },
          { title: 'White Outline', value: 'btn-white-outline' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'newTab',
      title: 'Open in New Tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'variant',
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title}`,
        subtitle: `Variant: ${subtitle}`,
      };
    },
  },
});
