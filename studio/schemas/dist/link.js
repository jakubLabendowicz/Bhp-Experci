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
    name: 'link',
    title: 'Link',
    type: 'document',
    icon: icons_1.LinkIcon,
    fields: [
        sanity_1.defineField({
            name: 'icon',
            title: 'Icon',
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
            name: 'label',
            title: 'Label',
            type: 'string'
        }),
        sanity_1.defineField({
            name: 'url',
            title: 'Url',
            type: 'string'
        }),
    ],
    preview: {
        select: {
            title: 'name',
            author: 'author.name',
            media: 'icon'
        },
        prepare: function (selection) {
            var author = selection.author;
            return __assign(__assign({}, selection), { subtitle: author && "by " + author });
        }
    }
});
