import { defineField, defineType } from 'sanity';
import { backGroundColors, pageBlocks } from '../sharedTypes/globals';
import { HomeIcon, DocumentIcon, SearchIcon } from '@sanity/icons';

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  groups: [
    { name: 'pagedesign', title: 'Page Design', icon: DocumentIcon },
    { name: 'metadata', title: 'Meta Data', icon: SearchIcon },
  ],
  fields: [
    defineField({
      name: 'pageMeta',
      group: 'metadata',
      type: 'pageMeta',
    }),
    defineField({
      name: 'navigation',
      group: 'pagedesign',
      type: 'reference',
      description: 'You must add navigation (header) to your page!',
      to: { type: 'navigation' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'title',
      group: 'pagedesign',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'pageColor',
      group: 'pagedesign',
      title: 'Page Color',
      type: 'string',
      initialValue: 'bg-transparent',
      options: {
        list: backGroundColors,
        layout: 'radio',
      },
    }),
    defineField({
      name: 'blocks',
      group: 'pagedesign',
      type: 'array',
      title: 'Page Blocks',
      of: pageBlocks,
    }),
    defineField({
      name: 'footer',
      group: 'pagedesign',
      type: 'reference',
      description: 'You must add a footer to your page!',
      to: { type: 'footer' },
      validation: Rule => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
});
