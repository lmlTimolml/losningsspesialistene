import { defineType, type FieldDefinition } from 'sanity';

export function contentModule({
  name,
  title,
  fields,
}: {
  name: string;
  title: string;
  fields: FieldDefinition[];
}) {
  return defineType({
    name,
    title,
    type: 'object',
    fields,
    preview: {
      select: {
        content: 'content',
      },
      prepare({ content }) {
        const block = content?.[0];
        const subtitle = `Blocktype: ${title || '(no title)'}`;

        if (!block) {
          return {
            title: `🟫 ${subtitle} (empty)`,
            subtitle,
          };
        }

        if (block._type === 'textBlock') {
          return {
            title: `📝 Text: ${block.title || '(no title)'}`,
            subtitle,
          };
        }

        if (block._type === 'mediaBlock') {
          return {
            title: `🖼️ Media: ${block.mediaType?.toUpperCase() + ' ' + block.alt || 'Unknown'}`,
            subtitle,
          };
        }

        return {
          title: `🟫 ${subtitle}`,
          subtitle,
        };
      },
    },
  });
}
