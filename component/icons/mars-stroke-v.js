import React from 'react'

    export default function anonymous(params
/**/) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M896 644q217 24 364.5 187.5t147.5 384.5q0 167-87 306t-236 212-319 54q-133-15-245.5-88t-182-188-80.5-249q-12-155 52.5-292t186-224 271.5-103v-132h-160q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h160v-165l-92 92q-10 9-23 9t-22-9l-46-46q-9-9-9-22t9-23l202-201q19-19 45-19t45 19l202 201q9 10 9 23t-9 22l-46 46q-9 9-22 9t-23-9l-92-92v165h160q14 0 23 9t9 23v64q0 14-9 23t-23 9h-160v132zm-64 1020q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z' }));;
}