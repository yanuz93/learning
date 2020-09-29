"use strict";
exports.__esModule = true;
var Words = /** @class */ (function () {
    function Words() {
    }
    Words.prototype.count = function (sentence) {
        return sentence
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .trim()
            .split(' ')
            .reduce(function (map, word) {
            map.get(word)
                ? map.set(word, map.get(word) + 1)
                : map.set(word, 1);
            return map;
        }, new Map());
    };
    return Words;
}());
exports["default"] = Words;
