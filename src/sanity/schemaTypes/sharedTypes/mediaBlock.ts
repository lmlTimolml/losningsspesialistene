import { defineField, defineType } from 'sanity';

export const mediaBlock = defineType({
  name: 'mediaBlock',
  title: 'Media Block',
  type: 'object',
  fields: [
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: ['image', 'video', 'youtube', 'map'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'image',
      title: 'Image File',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType !== 'image',
    }),
    defineField({
      name: 'video',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/mp4,video/webm', // ✅ No .mov
      },
      validation: Rule =>
        Rule.custom((file, context) => {
          if (!file) return true;
          const ext = file.asset?._ref?.split('-')[1]?.split('.')?.[1];
          if (ext === 'mov') {
            return 'Please use MP4 or WebM format — .mov is not supported.';
          }
          return true;
        }),
      hidden: ({ parent }) => parent?.mediaType !== 'video',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      hidden: ({ parent }) => parent?.mediaType !== 'youtube',
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'string',
      /*       description:
        'Paste the full embed URL from Google Maps (starts with https://www.google.com/maps/embed)', */
      hidden: ({ parent }) => parent?.mediaType !== 'map',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    }),
  ],
});
