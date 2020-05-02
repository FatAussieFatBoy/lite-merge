/**
 * Merge objects together, even their sub objects
 * @param {Object|Array<Object>} object - The object(s) to merge into the target
 * @param {Object} target - The target having all of its variables changed
 * @returns {Object}
 */

function merge(...o) {
    let t = o.pop();
    for (let e of o) {
        let keys = Object.keys(e);
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];

            if (getType(e[k]) === 'undefined' || getType(e[k]) === 'null') continue;

            switch (getType(e[k])) {
                case 'object':
                    if (getType(t[k]) !== 'object') t[k] = !t[k] ? {} : Object.assign({}, t[k]);
                    merge(e[k], t[k]);
                    break;

                case 'array':
                    if (getType(t[k]) !== 'array') t[k] = !t[k] ? [] : [t[k]];
                    for (let j in e[k]) t[k].push(e[k][j]);
                    break;

                default: t && t[k] ? t[k] = e[k] : t = e;
            }
        }
    }
    return t;
}

/**
 * Get the proper type of a JavaScript construct
 * @param {*} x - The js constructor to get the type of
 * @returns {string}
 */

function getType(x) {
    if (typeof x === 'string' || x instanceof String) return 'string';
    if (typeof x === 'number' && isFinite(x)) return 'number';
    if (x && typeof x === 'object' && x.constructor === Array) return 'array';
    if (typeof x === 'function') return 'function';
    if (x && typeof x === 'object' && x.constructor === Object) return 'object';
    if (x instanceof Map) return 'map';
    if (x === null) return 'null';
    if (typeof x === 'undefined') return 'undefined';
    if (typeof x === 'boolean') return 'boolean';
    if (x && typeof x === 'object' && x.constructor === RegExp) return 'regexp';
    if (x instanceof Date) return 'date';
    if (typeof x === 'symbol') return 'symbol';
    return typeof x;
}

module.exports = merge;