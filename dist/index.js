'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".glow-effect,.glow-effect-js{position:relative}";
styleInject(css_248z,{"insertAt":"top"});

var GlowEffect = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, style = _a.style, gradientColors = _a.gradientColors, _c = _a.animationDuration, animationDuration = _c === void 0 ? 3 : _c, _d = _a.as, Component = _d === void 0 ? "div" : _d;
    var _e = React.useState(0), angle = _e[0], setAngle = _e[1];
    React.useEffect(function () {
        var animateGradient = function () {
            setAngle(function (prevAngle) { return (prevAngle + 1) % 360; });
        };
        var interval = setInterval(animateGradient, (animationDuration * 1000) / 360);
        return function () { return clearInterval(interval); };
    }, [animationDuration]);
    // Create custom CSS variables for the gradient
    var customCSSVars = {};
    if (gradientColors && gradientColors.length > 0) {
        var colors = gradientColors.length === 1 ? __spreadArray(__spreadArray([], gradientColors, true), gradientColors, true) : __spreadArray([], gradientColors, true);
        // Ensure the gradients loop properly by adding the first color at the end if not already there
        if (colors[0] !== colors[colors.length - 1] && colors.length > 1) {
            colors.push(colors[0]);
        }
        customCSSVars["--gradient"] = "conic-gradient(from ".concat(angle, "deg, ").concat(colors.join(", "), ")");
    }
    else {
        // Default gradient if none provided
        customCSSVars["--gradient"] = "conic-gradient(from ".concat(angle, "deg, #ff4545, #00ff99)");
    }
    var glowStyles = __assign({ position: "relative" }, style);
    var pseudoElementBeforeStyles = {
        content: '""',
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: -1,
        padding: "3px",
        borderRadius: "inherit",
        filter: "blur(1.5rem)",
        opacity: 0.5,
        backgroundImage: customCSSVars["--gradient"],
    };
    var pseudoElementAfterStyles = {
        content: '""',
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: -1,
        padding: "3px",
        borderRadius: "inherit",
        backgroundImage: customCSSVars["--gradient"],
    };
    return (React.createElement(Component, { className: "glow-effect-js ".concat(className), style: glowStyles },
        React.createElement("div", { style: pseudoElementBeforeStyles }),
        React.createElement("div", { style: pseudoElementAfterStyles }),
        children));
};

exports.GlowEffect = GlowEffect;
exports.default = GlowEffect;
//# sourceMappingURL=index.js.map
