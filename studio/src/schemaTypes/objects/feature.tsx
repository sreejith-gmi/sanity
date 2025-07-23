
export default {
    name: 'feature',
    title: 'Feature',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true 
            }
        }
    ]
}
  