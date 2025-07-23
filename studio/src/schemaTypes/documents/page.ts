import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

/**
 * Page schema.  Define and edit the fields for the 'page' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        defineField({
          name: 'feature',
          title: 'Feature',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  // options: {
                  //   isHighlighted: true,
                  // },
                }),
              ],
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'extraHeading',
      title: 'Extra Heading',
      type: 'string',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        { type: 'callToAction' },
        { type: 'infoSection' },
        {
          type: 'image',
          name: 'imageBlock',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              options: { isHighlighted: true },
            },
          ],
        },
        {
          name: 'htmlBlock',
          title: 'HTML Block',
          type: 'object',
          fields: [
            {
              name: 'html',
              title: 'Raw HTML',
              type: 'text',
              description: 'Use this to inject custom HTML directly into the page.',
            },
          ],
          preview: {
            select: { html: 'html' },
            prepare({ html }) {
              return {
                title: 'HTML Block',
                subtitle: html?.substring(0, 40) || 'Raw HTML content',
              }
            },
          },
        },
      ],
      options: {
        insertMenu: {
          views: [
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName) =>
                `/static/page-builder-thumbnails/${schemaTypeName}.webp`,
            },
          ],
        },
      },
    })
  ],
})
