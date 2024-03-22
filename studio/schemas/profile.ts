import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export default defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'firstName',
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
      name: 'qr',
      title: 'Qr',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'firstName',
      title: 'First name',
      type: 'string',
    }),
    defineField({
        name: 'lastName',
        title: 'Last name',
        type: 'string',
    }),
    defineField({
        name: 'position',
        title: 'Position',
        type: 'string',
    }),
    defineField({
        name: 'phone',
        title: 'Phone',
        type: 'string',
    }),
    defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Scoial media',
      type: 'array',
      of: [{
          type: 'reference',
          to: [{type: 'link'}]
      }]
    }),
    defineField({
        name: 'shortBio',
        title: 'Short bio',
        type: 'array', 
        of: [{type: 'block'}]
    }),
    defineField({
        name: 'longBio',
        title: 'Long bio',
        type: 'array', 
        of: [{type: 'block'}]
    }),
  ],
  preview: {
    select: {
      title: 'firstName',
      author: 'author.name',
      media: 'image',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
