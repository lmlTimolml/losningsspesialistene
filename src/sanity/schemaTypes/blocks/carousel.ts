// ./src/sanity/schemaTypes/modules/clientsModule.ts
import { defineArrayMember, defineField, defineType } from 'sanity';
import { styleOptionsFields } from '../sharedTypes/styleOptions';

const blockTitle = 'Carousel';

export const carousel = defineType({
  name: 'carousel',
  title: blockTitle,
  type: 'object',
  fields: [
    defineField({
      name: 'carouselHeading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'carouselSpeed',
      title: 'Carousel speed',
      type: 'number',
      description:
        'Write number in millisecinds (1000 = 1 second), default is 5000',
    }),
    defineField({
      name: 'slides',
      title: 'Select Content',
      type: 'array',
      of: [
        /* defineArrayMember({
          name: 'case',
          title: 'Link to case',
          type: 'reference',
          to: [{ type: 'case' }],
        }), */
        defineArrayMember({
          name: 'textBlock',
          title: 'Text',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Text',
              type: 'blockContent',
            }),
          ],
        }),
        defineArrayMember({
          name: 'mediaBlock',
          title: 'Media Block',
          type: 'mediaBlock', // Your existing mediaBlock schema
        }),
      ],
      validation: Rule => Rule.required().min(1),
    }),
    ...styleOptionsFields([
      'blockID',
      'corners',
      'bgColor',
      'textColor',
      'border',
      'activeDotColor',
      'borderDotColor',
    ]),
  ],
  preview: {
    select: {
      title: 'carouselHeading',
      slides: 'slides',
    },
    prepare({ title, slides }) {
      return {
        title: title || 'Carousel',
        subtitle: `${slides?.length || 0} slide(s)`,
      };
    },
  },
});
