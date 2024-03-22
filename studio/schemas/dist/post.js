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
    name: 'post',
    title: 'Post',
    type: 'document',
    icon: icons_1.BlockContentIcon,
    fields: [
        sanity_1.defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        sanity_1.defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: function (Rule) { return Rule.required(); },
            options: {
                source: 'title',
                maxLength: 96
            }
        }),
        sanity_1.defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 4
        }),
        sanity_1.defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        sanity_1.defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage'
        },
        prepare: function (selection) {
            var author = selection.author;
            return __assign(__assign({}, selection), { subtitle: author && "by " + author });
        }
    }
});
