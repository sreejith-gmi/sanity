// schemas/project.js
export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Project Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name: 'description',
            type: 'text',
            title: 'Project Description'
        }
    ]
}
  