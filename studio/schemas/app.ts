import {defineField, defineType} from 'sanity'
import {DesktopIcon} from '@sanity/icons'

export default defineType({
  name: 'app',
  title: 'App',
  type: 'document',
  icon: DesktopIcon,
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
        name: 'logo',
        title: 'Logo',
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
      name: 'quickLinks',
      title: 'Quick links',
      type: 'array',
      of: [{
          type: 'reference',
          to: [{type: 'link'}]
      }]
    }),
    defineField({
        name: 'copyright',
        title: 'Copyright',
        type: 'array', 
        of: [{type: 'block'}] 
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'logo',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
