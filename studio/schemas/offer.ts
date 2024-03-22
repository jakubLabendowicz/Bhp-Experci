import {defineField, defineType} from 'sanity'
import {BillIcon} from '@sanity/icons'

export default defineType({
  name: 'offer',
  title: 'Offer',
  type: 'document',
    icon: BillIcon,
  fields: [
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'array', 
        of: [{type: 'block'}]
    }),
  ],
  preview: {
    select: {
      title: 'name',
      author: 'author.name',
      media: 'image',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
