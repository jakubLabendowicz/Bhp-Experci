"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var sanity_1 = require("sanity");
var icons_1 = require("@sanity/icons");
exports["default"] = sanity_1.defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    icon: icons_1.UserIcon,
    fields: [
        sanity_1.defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: function (Rule) { return Rule.required(); },
            options: {
                source: 'firstName',
                maxLength: 96
            }
        }),
        sanity_1.defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        sanity_1.defineField({
            name: 'qr',
            title: 'Qr',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        sanity_1.defineField({
            name: 'firstName',
            title: 'First name',
            type: 'string'
        }),
        sanity_1.defineField({
            name: 'lastName',
            title: 'Last name',
            type: 'string'
        }),
        sanity_1.defineField({
            name: 'position',
            title: 'Position',
            type: 'string'
        }),
        sanity_1.defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string'
        }),
        sanity_1.defineField({
            name: 'email',
            title: 'Email',
            type: 'string'
        }),
        sanity_1.defineField({
            name: 'socialMedia',
            title: 'Scoial media',
            type: 'array',
            of: [{
                    type: 'reference',
                    to: [{ type: 'link' }]
                }]
        }),
        sanity_1.defineField({
            name: 'shortBio',
            title: 'Short bio',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        sanity_1.defineField({
            name: 'longBio',
            title: 'Long bio',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ],
    preview: {
        select: {
            title: 'firstName',
            author: 'author.name',
            media: 'image'
        },
        prepare: function (selection) {
            var author = selection.author;
            return __assign(__assign({}, selection), { subtitle: author && "by " + author });
        }
    }
});
