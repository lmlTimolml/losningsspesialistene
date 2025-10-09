import { defineField, type FieldDefinition } from 'sanity';
import type { ContentBlockOptions } from '../../../types/sanityTypes';

export function contentBlock({
  enabledFields = ['title', 'text', 'contactInfo', 'buttons'],
}: ContentBlockOptions = {}): FieldDefinition {
  return defineField({
    name: 'content',
    title: 'Content Block',
    type: 'array',
    description:
      'Choose either a Text Block or a Media Block. You can only add one.',
    of: [
      {
        type: 'object',
        name: 'textBlock',
        title: 'Text Block',
        fields: [
          ...(enabledFields.includes('title')
            ? [defineField({ name: 'title', title: 'Title', type: 'string' })]
            : []),
          ...(enabledFields.includes('text')
            ? [
                defineField({
                  name: 'text',
                  title: 'Text Content',
                  type: 'blockContent',
                }),
              ]
            : []),

          ...(enabledFields.includes('contactInfo')
            ? [
                defineField({
                  name: 'contactInfo',
                  title: 'Contact Info',
                  type: 'contactInfo',
                }),
              ]
            : []),
          ...(enabledFields.includes('buttons')
            ? [
                defineField({
                  name: 'buttons',
                  title: 'Buttons',
                  type: 'array',
                  of: [{ type: 'button' }],
                  validation: Rule => Rule.max(3),
                }),
              ]
            : []),
        ],
      },
      { type: 'mediaBlock' },
    ],
    validation: Rule =>
      Rule.custom(value =>
        !value || value.length !== 1
          ? 'You can only select one content type (text or media)'
          : true
      ),
  });
}
