import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  //__experimental_actions: ['update', 'publish'], // singleton (optional)
  fields: [
    defineField({
      name: 'title',
      title: 'Banner Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Button Link',
      type: 'url',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})
