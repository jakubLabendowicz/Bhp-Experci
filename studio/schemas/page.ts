import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    icon: DocumentIcon,
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
  }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
    }),
    defineField({
        name: 'quickLinks',
        title: 'Quick links',
        type: 'array',
        of: [{
            type: 'reference',
            to: [{type: 'link'}]
        }]
    }),
    defineField({
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [{type: 'string'}]
    }),
  ],
  preview: {
    select: {
      title: 'slug.current',
      author: 'author.name',
      media: 'image',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
