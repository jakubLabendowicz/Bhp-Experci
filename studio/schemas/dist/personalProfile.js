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
exports["default"] = sanity_1.defineType({
    name: 'personalProfile',
    title: 'Personal profile',
    type: 'document',
    fields: [
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
