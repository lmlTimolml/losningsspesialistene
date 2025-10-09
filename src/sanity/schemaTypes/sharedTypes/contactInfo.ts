// schemas/modules/contactInfo.ts
import { defineType, defineField } from 'sanity';

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'object',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'socials',
      title: 'Social Media Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
  ],
  preview: {
    select: {
      email: 'email',
      phone: 'phone',
    },
    prepare({ email, phone }) {
      return {
        title: email || 'No Email',
        subtitle: phone || 'No Phone',
      };
    },
  },
});
