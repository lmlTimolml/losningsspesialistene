import { contentModule } from '../sharedTypes/contentModule';
import { contentBlock } from '../sharedTypes/contentBlock';
import { styleOptionsFields } from '../sharedTypes/styleOptions';

const blockTitle = 'Main Block';

export const mainBlock = contentModule({
  name: 'mainBlock',
  title: blockTitle,
  fields: [
    contentBlock(),
    ...styleOptionsFields([
      'blocktype',
      'blockID',
      'corners',
      'padding',
      'bgColor',
      'textColor',
      'border',
    ]),
  ],
});
