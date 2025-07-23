// schemas/home.js
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'home',
    type: 'document',
    title: 'Home Page',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Page Title',
        }),
        defineField({
            name: 'heroImage',
            type: 'image',
            title: 'Hero Image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'introText',
            type: 'text',
            title: 'Introduction Text',
        }),
        defineField({
            name: 'featuredProjects',
            type: 'array',
            title: 'Featured Projects',
            of: [{ type: 'reference', to: [{ type: 'project' }] }],
        }),
        defineField({
            name: 'infoSections',
            title: 'Info Sections',
            type: 'array',
            of: [{ type: 'infoSection' }],
        }),
    ],
})
