// /schemas/shared/styleOptions.ts
import { defineField } from 'sanity';
import type { StyleField } from '../../../types/sanityTypes';
import {
  blockTypes,
  textColors,
  backGroundColors,
  borderColors,
  dotColors,
  dotBorders,
} from './globals';

export function styleOptionsFields(
  enabledFields: StyleField[] = [
    'blocktype',
    'blockID',
    'corners',
    'padding',
    'textColor',
    'bgColor',
    'border',
    'activeDotColor',
    'borderDotColor',
  ]
): ReturnType<typeof defineField>[] {
  return [
    ...(enabledFields.includes('blocktype')
      ? [
          defineField({
            name: 'blocktype',
            title: 'Block Type',
            type: 'string',
            initialValue: 'col-2-center',
            options: { list: blockTypes, layout: 'radio' },
          }),
        ]
      : []),
    ...(enabledFields.includes('blockID')
      ? [
          defineField({
            name: 'blockID',
            title: 'Anchor / Section ID',
            type: 'string',
            description:
              'Optional anchor to scroll to (e.g. footer, contact, services)',
          }),
        ]
      : []),
    ...(enabledFields.includes('padding')
      ? [
          defineField({
            name: 'padding',
            title: 'Padding',
            type: 'string',
            initialValue: 'p-0',
            options: {
              list: [
                { title: 'None', value: 'p-0' },
                { title: 'Padding 10px', value: 'p-2.5' },
                { title: 'Padding 20px', value: 'p-5' },
                { title: 'Padding 30px', value: 'p-7.5' },
                { title: 'Padding 40px', value: 'p-10' },
              ],
              layout: 'radio',
            },
          }),
        ]
      : []),

    ...(enabledFields.includes('corners')
      ? [
          defineField({
            name: 'allCorners',
            title: 'All Corners Rounded',
            type: 'boolean',
            initialValue: false,
          }),
          defineField({
            name: 'topLeft',
            title: 'Top Left Rounded',
            type: 'boolean',
            initialValue: false,
          }),
          defineField({
            name: 'topRight',
            title: 'Top Right Rounded',
            type: 'boolean',
            initialValue: false,
          }),
          defineField({
            name: 'bottomRight',
            title: 'Bottom Right Rounded',
            type: 'boolean',
            initialValue: false,
          }),
          defineField({
            name: 'bottomLeft',
            title: 'Bottom Left Rounded',
            type: 'boolean',
            initialValue: false,
          }),
        ]
      : []),

    ...(enabledFields.includes('textColor')
      ? [
          defineField({
            name: 'textColor',
            title: 'Text Color',
            type: 'string',
            initialValue: 'text-black',
            options: { list: textColors, layout: 'radio' },
          }),
        ]
      : []),

    ...(enabledFields.includes('bgColor')
      ? [
          defineField({
            name: 'bgColor',
            title: 'Background Color',
            type: 'string',
            initialValue: 'bg-transparent',
            options: { list: backGroundColors, layout: 'radio' },
          }),
        ]
      : []),

    ...(enabledFields.includes('border')
      ? [
          defineField({
            name: 'border',
            title: 'Border',
            type: 'string',
            initialValue: 'border-none',
            options: { list: borderColors, layout: 'radio' },
          }),
        ]
      : []),

    ...(enabledFields.includes('activeDotColor')
      ? [
          defineField({
            name: 'activeDotColor',
            title: 'Active Carousel Dot Color',
            type: 'string',
            initialValue: '#e3dcbf',
            options: { list: dotColors, layout: 'radio' },
          }),
        ]
      : []),

    ...(enabledFields.includes('borderDotColor')
      ? [
          defineField({
            name: 'borderDotColor',
            title: 'Non Active Carousel Dot Color',
            type: 'string',
            initialValue: '#e3dcbf',
            options: { list: dotBorders, layout: 'radio' },
          }),
        ]
      : []),
  ];
}
