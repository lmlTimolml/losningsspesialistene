// schemas/footer.ts
import { defineField, defineType } from 'sanity';
import { backGroundColors, pageBlocks } from './sharedTypes/globals';
import { InfoOutlineIcon } from '@sanity/icons';

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'footerColor',
      title: 'Footer Color',
      type: 'string',
      initialValue: 'bg-transparent',
      options: {
        list: backGroundColors,
        layout: 'radio',
      },
    }),
    defineField({
      name: 'blocks',
      type: 'array',
      title: 'Footer Blocks',
      of: pageBlocks,
    }),
  ],
});
