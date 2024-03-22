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
    name: 'opinion',
    title: 'Opinion',
    type: 'document',
    icon: icons_1.CommentIcon,
    fields: [
        sanity_1.defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        sanity_1.defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        sanity_1.defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number'
        }),
        sanity_1.defineField({
            name: 'comment',
            title: 'Comment',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        sanity_1.defineField({
            name: 'date',
            title: 'date',
            type: 'date'
        }),
    ],
    preview: {
        select: {
            title: 'name',
            author: 'author.name',
            media: 'image'
        },
        prepare: function (selection) {
            var author = selection.author;
            return __assign(__assign({}, selection), { subtitle: author && "by " + author });
        }
    }
});
