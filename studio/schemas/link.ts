import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default defineType({
    name: 'link',
    title: 'Link',
    type: 'document',
    icon: LinkIcon,
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
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
        name: 'label',
        title: 'Label',
        type: 'string',
    }),
    defineField({
        name: 'url',
        title: 'Url',
        type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      author: 'author.name',
      media: 'icon',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
