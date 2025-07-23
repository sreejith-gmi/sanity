import { defineType, defineField } from 'sanity'
import { CodeIcon } from '@sanity/icons'

export const htmlSection = defineType({
    name: 'htmlSection',
    title: 'HTML Section',
    type: 'object',
    icon: CodeIcon,
    fields: [
        defineField({
            name: 'html',
            title: 'HTML Code',
            type: 'text',
            description: 'Add raw HTML code here',
            rows: 10,
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            html: 'html',
        },
        prepare({ html }) {
            return {
                title: 'HTML Section',
                subtitle: html ? `${html.slice(0, 30)}...` : 'No HTML content',
            }
        },
    },
})
