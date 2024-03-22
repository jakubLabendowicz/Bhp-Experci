import {defineField, defineType} from 'sanity'
import {CommentIcon} from '@sanity/icons'

export default defineType({
    name: 'question',
    title: 'Question',
    type: 'document',
    icon: CommentIcon,
  fields: [
    // defineField({
    //   name: 'icon',
    //   title: 'Icon',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
        name: 'question',
        title: 'Question',
        type: 'string',
    }),
    defineField({
        name: 'answer',
        title: 'Answer',
        type: 'string',
    })
  ],
  preview: {
    select: {
      title: 'question',
      author: 'author.name',
    //   media: 'icon',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
