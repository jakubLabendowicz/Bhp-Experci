import {defineField, defineType} from 'sanity'
import {CommentIcon} from '@sanity/icons'

export default defineType({
    name: 'opinion',
    title: 'Opinion',
    type: 'document',
    icon: CommentIcon,
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
        name: 'rating',
        title: 'Rating',
        type: 'number',
    }),
    defineField({
        name: 'comment',
        title: 'Comment',
        type: 'array', 
        of: [{type: 'block'}]
    }),
    defineField({
        name: 'date',
        title: 'date',
        type: 'date', 
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
