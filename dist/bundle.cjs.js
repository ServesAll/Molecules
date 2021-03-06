'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative$1 = require('react-native');
var Animated = require('react-native-reanimated');
var Animated__default = _interopDefault(Animated);
var reactNativeGestureHandler = require('react-native-gesture-handler');
var reactNativeStatusBarHeight = require('react-native-status-bar-height');
var MapView = require('react-native-maps');
var MapView__default = _interopDefault(MapView);
var LottieView = _interopDefault(require('lottie-react-native'));
var ImagePicker = _interopDefault(require('react-native-image-crop-picker'));
var atoms = require('@servesall/atoms');

function Background(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose;
  var opacity = Animated.useSharedValue(0);
  var animatedStyle = Animated.useAnimatedStyle(function () {
    const _f = function () {
      return {
        opacity: Animated.withTiming(opacity.value, {
          duration: 450,
          easing: Animated.Easing.bezier(0.19, 1.0, 0.22, 1.0)
        })
      };
    };

    _f._closure = {
      withTiming: Animated.withTiming,
      opacity,
      Easing: {
        bezier: Animated.Easing.bezier
      }
    };
    _f.asString = "function _f(){const{withTiming,opacity,Easing}=jsThis._closure;{return{opacity:withTiming(opacity.value,{duration:450,easing:Easing.bezier(0.19,1.0,0.22,1.0)})};}}";
    _f.__workletHash = 10498767669633;
    _f.__location = "/Users/tom/Desktop/GitHub/Molecules/src/Modal/Background/index.js (13:41)";

    global.__reanimatedWorkletInit(_f);

    return _f;
  }());
  React.useEffect(function () {
    opacity.value = 1;
  }, []);
  return /*#__PURE__*/React__default.createElement(Animated__default.View, {
    style: [{
      height: '100%',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      flex: 1,
      position: 'absolute',
      zIndex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }, animatedStyle]
  }, /*#__PURE__*/React__default.createElement(reactNative$1.Pressable, {
    style: {
      flex: 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      position: 'absolute',
      height: '100%'
    },
    onPress: function onPress() {
      return onClose();
    }
  }), children);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var global$1 = (typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  typeof window !== "undefined" ? window : {});

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var browser$1 = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var openParentheses = "(".charCodeAt(0);
var closeParentheses = ")".charCodeAt(0);
var singleQuote = "'".charCodeAt(0);
var doubleQuote = '"'.charCodeAt(0);
var backslash = "\\".charCodeAt(0);
var slash = "/".charCodeAt(0);
var comma = ",".charCodeAt(0);
var colon = ":".charCodeAt(0);
var star = "*".charCodeAt(0);
var uLower = "u".charCodeAt(0);
var uUpper = "U".charCodeAt(0);
var plus = "+".charCodeAt(0);
var isUnicodeRange = /^[a-f0-9?-]+$/i;

var parse = function(input) {
  var tokens = [];
  var value = input;

  var next,
    quote,
    prev,
    token,
    escape,
    escapePos,
    whitespacePos,
    parenthesesOpenPos;
  var pos = 0;
  var code = value.charCodeAt(pos);
  var max = value.length;
  var stack = [{ nodes: tokens }];
  var balanced = 0;
  var parent;

  var name = "";
  var before = "";
  var after = "";

  while (pos < max) {
    // Whitespaces
    if (code <= 32) {
      next = pos;
      do {
        next += 1;
        code = value.charCodeAt(next);
      } while (code <= 32);
      token = value.slice(pos, next);

      prev = tokens[tokens.length - 1];
      if (code === closeParentheses && balanced) {
        after = token;
      } else if (prev && prev.type === "div") {
        prev.after = token;
      } else if (
        code === comma ||
        code === colon ||
        (code === slash &&
          value.charCodeAt(next + 1) !== star &&
          (!parent ||
            (parent && parent.type === "function" && parent.value !== "calc")))
      ) {
        before = token;
      } else {
        tokens.push({
          type: "space",
          sourceIndex: pos,
          value: token
        });
      }

      pos = next;

      // Quotes
    } else if (code === singleQuote || code === doubleQuote) {
      next = pos;
      quote = code === singleQuote ? "'" : '"';
      token = {
        type: "string",
        sourceIndex: pos,
        quote: quote
      };
      do {
        escape = false;
        next = value.indexOf(quote, next + 1);
        if (~next) {
          escapePos = next;
          while (value.charCodeAt(escapePos - 1) === backslash) {
            escapePos -= 1;
            escape = !escape;
          }
        } else {
          value += quote;
          next = value.length - 1;
          token.unclosed = true;
        }
      } while (escape);
      token.value = value.slice(pos + 1, next);

      tokens.push(token);
      pos = next + 1;
      code = value.charCodeAt(pos);

      // Comments
    } else if (code === slash && value.charCodeAt(pos + 1) === star) {
      token = {
        type: "comment",
        sourceIndex: pos
      };

      next = value.indexOf("*/", pos);
      if (next === -1) {
        token.unclosed = true;
        next = value.length;
      }

      token.value = value.slice(pos + 2, next);
      tokens.push(token);

      pos = next + 2;
      code = value.charCodeAt(pos);

      // Operation within calc
    } else if (
      (code === slash || code === star) &&
      parent &&
      parent.type === "function" &&
      parent.value === "calc"
    ) {
      token = value[pos];
      tokens.push({
        type: "word",
        sourceIndex: pos - before.length,
        value: token
      });
      pos += 1;
      code = value.charCodeAt(pos);

      // Dividers
    } else if (code === slash || code === comma || code === colon) {
      token = value[pos];

      tokens.push({
        type: "div",
        sourceIndex: pos - before.length,
        value: token,
        before: before,
        after: ""
      });
      before = "";

      pos += 1;
      code = value.charCodeAt(pos);

      // Open parentheses
    } else if (openParentheses === code) {
      // Whitespaces after open parentheses
      next = pos;
      do {
        next += 1;
        code = value.charCodeAt(next);
      } while (code <= 32);
      parenthesesOpenPos = pos;
      token = {
        type: "function",
        sourceIndex: pos - name.length,
        value: name,
        before: value.slice(parenthesesOpenPos + 1, next)
      };
      pos = next;

      if (name === "url" && code !== singleQuote && code !== doubleQuote) {
        next -= 1;
        do {
          escape = false;
          next = value.indexOf(")", next + 1);
          if (~next) {
            escapePos = next;
            while (value.charCodeAt(escapePos - 1) === backslash) {
              escapePos -= 1;
              escape = !escape;
            }
          } else {
            value += ")";
            next = value.length - 1;
            token.unclosed = true;
          }
        } while (escape);
        // Whitespaces before closed
        whitespacePos = next;
        do {
          whitespacePos -= 1;
          code = value.charCodeAt(whitespacePos);
        } while (code <= 32);
        if (parenthesesOpenPos < whitespacePos) {
          if (pos !== whitespacePos + 1) {
            token.nodes = [
              {
                type: "word",
                sourceIndex: pos,
                value: value.slice(pos, whitespacePos + 1)
              }
            ];
          } else {
            token.nodes = [];
          }
          if (token.unclosed && whitespacePos + 1 !== next) {
            token.after = "";
            token.nodes.push({
              type: "space",
              sourceIndex: whitespacePos + 1,
              value: value.slice(whitespacePos + 1, next)
            });
          } else {
            token.after = value.slice(whitespacePos + 1, next);
          }
        } else {
          token.after = "";
          token.nodes = [];
        }
        pos = next + 1;
        code = value.charCodeAt(pos);
        tokens.push(token);
      } else {
        balanced += 1;
        token.after = "";
        tokens.push(token);
        stack.push(token);
        tokens = token.nodes = [];
        parent = token;
      }
      name = "";

      // Close parentheses
    } else if (closeParentheses === code && balanced) {
      pos += 1;
      code = value.charCodeAt(pos);

      parent.after = after;
      after = "";
      balanced -= 1;
      stack.pop();
      parent = stack[balanced];
      tokens = parent.nodes;

      // Words
    } else {
      next = pos;
      do {
        if (code === backslash) {
          next += 1;
        }
        next += 1;
        code = value.charCodeAt(next);
      } while (
        next < max &&
        !(
          code <= 32 ||
          code === singleQuote ||
          code === doubleQuote ||
          code === comma ||
          code === colon ||
          code === slash ||
          code === openParentheses ||
          (code === star &&
            parent &&
            parent.type === "function" &&
            parent.value === "calc") ||
          (code === slash &&
            parent.type === "function" &&
            parent.value === "calc") ||
          (code === closeParentheses && balanced)
        )
      );
      token = value.slice(pos, next);

      if (openParentheses === code) {
        name = token;
      } else if (
        (uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) &&
        plus === token.charCodeAt(1) &&
        isUnicodeRange.test(token.slice(2))
      ) {
        tokens.push({
          type: "unicode-range",
          sourceIndex: pos,
          value: token
        });
      } else {
        tokens.push({
          type: "word",
          sourceIndex: pos,
          value: token
        });
      }

      pos = next;
    }
  }

  for (pos = stack.length - 1; pos; pos -= 1) {
    stack[pos].unclosed = true;
  }

  return stack[0].nodes;
};

var walk = function walk(nodes, cb, bubble) {
  var i, max, node, result;

  for (i = 0, max = nodes.length; i < max; i += 1) {
    node = nodes[i];
    if (!bubble) {
      result = cb(node, i, nodes);
    }

    if (
      result !== false &&
      node.type === "function" &&
      Array.isArray(node.nodes)
    ) {
      walk(node.nodes, cb, bubble);
    }

    if (bubble) {
      cb(node, i, nodes);
    }
  }
};

function stringifyNode(node, custom) {
  var type = node.type;
  var value = node.value;
  var buf;
  var customResult;

  if (custom && (customResult = custom(node)) !== undefined) {
    return customResult;
  } else if (type === "word" || type === "space") {
    return value;
  } else if (type === "string") {
    buf = node.quote || "";
    return buf + value + (node.unclosed ? "" : buf);
  } else if (type === "comment") {
    return "/*" + value + (node.unclosed ? "" : "*/");
  } else if (type === "div") {
    return (node.before || "") + value + (node.after || "");
  } else if (Array.isArray(node.nodes)) {
    buf = stringify(node.nodes, custom);
    if (type !== "function") {
      return buf;
    }
    return (
      value +
      "(" +
      (node.before || "") +
      buf +
      (node.after || "") +
      (node.unclosed ? "" : ")")
    );
  }
  return value;
}

function stringify(nodes, custom) {
  var result, i;

  if (Array.isArray(nodes)) {
    result = "";
    for (i = nodes.length - 1; ~i; i -= 1) {
      result = stringifyNode(nodes[i], custom) + result;
    }
    return result;
  }
  return stringifyNode(nodes, custom);
}

var stringify_1 = stringify;

var minus = "-".charCodeAt(0);
var plus$1 = "+".charCodeAt(0);
var dot = ".".charCodeAt(0);
var exp = "e".charCodeAt(0);
var EXP = "E".charCodeAt(0);

// Check if three code points would start a number
// https://www.w3.org/TR/css-syntax-3/#starts-with-a-number
function likeNumber(value) {
  var code = value.charCodeAt(0);
  var nextCode;

  if (code === plus$1 || code === minus) {
    nextCode = value.charCodeAt(1);

    if (nextCode >= 48 && nextCode <= 57) {
      return true;
    }

    var nextNextCode = value.charCodeAt(2);

    if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) {
      return true;
    }

    return false;
  }

  if (code === dot) {
    nextCode = value.charCodeAt(1);

    if (nextCode >= 48 && nextCode <= 57) {
      return true;
    }

    return false;
  }

  if (code >= 48 && code <= 57) {
    return true;
  }

  return false;
}

// Consume a number
// https://www.w3.org/TR/css-syntax-3/#consume-number
var unit = function(value) {
  var pos = 0;
  var length = value.length;
  var code;
  var nextCode;
  var nextNextCode;

  if (length === 0 || !likeNumber(value)) {
    return false;
  }

  code = value.charCodeAt(pos);

  if (code === plus$1 || code === minus) {
    pos++;
  }

  while (pos < length) {
    code = value.charCodeAt(pos);

    if (code < 48 || code > 57) {
      break;
    }

    pos += 1;
  }

  code = value.charCodeAt(pos);
  nextCode = value.charCodeAt(pos + 1);

  if (code === dot && nextCode >= 48 && nextCode <= 57) {
    pos += 2;

    while (pos < length) {
      code = value.charCodeAt(pos);

      if (code < 48 || code > 57) {
        break;
      }

      pos += 1;
    }
  }

  code = value.charCodeAt(pos);
  nextCode = value.charCodeAt(pos + 1);
  nextNextCode = value.charCodeAt(pos + 2);

  if (
    (code === exp || code === EXP) &&
    ((nextCode >= 48 && nextCode <= 57) ||
      ((nextCode === plus$1 || nextCode === minus) &&
        nextNextCode >= 48 &&
        nextNextCode <= 57))
  ) {
    pos += nextCode === plus$1 || nextCode === minus ? 3 : 2;

    while (pos < length) {
      code = value.charCodeAt(pos);

      if (code < 48 || code > 57) {
        break;
      }

      pos += 1;
    }
  }

  return {
    number: value.slice(0, pos),
    unit: value.slice(pos)
  };
};

function ValueParser(value) {
  if (this instanceof ValueParser) {
    this.nodes = parse(value);
    return this;
  }
  return new ValueParser(value);
}

ValueParser.prototype.toString = function() {
  return Array.isArray(this.nodes) ? stringify_1(this.nodes) : "";
};

ValueParser.prototype.walk = function(cb, bubble) {
  walk(this.nodes, cb, bubble);
  return this;
};

ValueParser.unit = unit;

ValueParser.walk = walk;

ValueParser.stringify = stringify_1;

var lib = ValueParser;

var camelize = function(obj) {
    if (typeof obj === 'string') return camelCase(obj);
    return walk$1(obj);
};

function walk$1 (obj) {
    if (!obj || typeof obj !== 'object') return obj;
    if (isDate(obj) || isRegex(obj)) return obj;
    if (isArray(obj)) return map(obj, walk$1);
    return reduce(objectKeys(obj), function (acc, key) {
        var camel = camelCase(key);
        acc[camel] = walk$1(obj[key]);
        return acc;
    }, {});
}

function camelCase(str) {
    return str.replace(/[_.-](\w|$)/g, function (_,x) {
        return x.toUpperCase();
    });
}

var isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
};

var isDate = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
};

var isRegex = function (obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var has = Object.prototype.hasOwnProperty;
var objectKeys = Object.keys || function (obj) {
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};

function map (xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        res.push(f(xs[i], i));
    }
    return res;
}

function reduce (xs, f, acc) {
    if (xs.reduce) return xs.reduce(f, acc);
    for (var i = 0; i < xs.length; i++) {
        acc = f(acc, xs[i], i);
    }
    return acc;
}

var black = "#000000";
var silver = "#c0c0c0";
var gray = "#808080";
var white = "#ffffff";
var maroon = "#800000";
var red = "#ff0000";
var purple = "#800080";
var fuchsia = "#ff00ff";
var green = "#008000";
var lime = "#00ff00";
var olive = "#808000";
var yellow = "#ffff00";
var navy = "#000080";
var blue = "#0000ff";
var teal = "#008080";
var aqua = "#00ffff";
var orange = "#ffa500";
var aliceblue = "#f0f8ff";
var antiquewhite = "#faebd7";
var aquamarine = "#7fffd4";
var azure = "#f0ffff";
var beige = "#f5f5dc";
var bisque = "#ffe4c4";
var blanchedalmond = "#ffebcd";
var blueviolet = "#8a2be2";
var brown = "#a52a2a";
var burlywood = "#deb887";
var cadetblue = "#5f9ea0";
var chartreuse = "#7fff00";
var chocolate = "#d2691e";
var coral = "#ff7f50";
var cornflowerblue = "#6495ed";
var cornsilk = "#fff8dc";
var crimson = "#dc143c";
var darkblue = "#00008b";
var darkcyan = "#008b8b";
var darkgoldenrod = "#b8860b";
var darkgray = "#a9a9a9";
var darkgreen = "#006400";
var darkgrey = "#a9a9a9";
var darkkhaki = "#bdb76b";
var darkmagenta = "#8b008b";
var darkolivegreen = "#556b2f";
var darkorange = "#ff8c00";
var darkorchid = "#9932cc";
var darkred = "#8b0000";
var darksalmon = "#e9967a";
var darkseagreen = "#8fbc8f";
var darkslateblue = "#483d8b";
var darkslategray = "#2f4f4f";
var darkslategrey = "#2f4f4f";
var darkturquoise = "#00ced1";
var darkviolet = "#9400d3";
var deeppink = "#ff1493";
var deepskyblue = "#00bfff";
var dimgray = "#696969";
var dimgrey = "#696969";
var dodgerblue = "#1e90ff";
var firebrick = "#b22222";
var floralwhite = "#fffaf0";
var forestgreen = "#228b22";
var gainsboro = "#dcdcdc";
var ghostwhite = "#f8f8ff";
var gold = "#ffd700";
var goldenrod = "#daa520";
var greenyellow = "#adff2f";
var grey = "#808080";
var honeydew = "#f0fff0";
var hotpink = "#ff69b4";
var indianred = "#cd5c5c";
var indigo = "#4b0082";
var ivory = "#fffff0";
var khaki = "#f0e68c";
var lavender = "#e6e6fa";
var lavenderblush = "#fff0f5";
var lawngreen = "#7cfc00";
var lemonchiffon = "#fffacd";
var lightblue = "#add8e6";
var lightcoral = "#f08080";
var lightcyan = "#e0ffff";
var lightgoldenrodyellow = "#fafad2";
var lightgray = "#d3d3d3";
var lightgreen = "#90ee90";
var lightgrey = "#d3d3d3";
var lightpink = "#ffb6c1";
var lightsalmon = "#ffa07a";
var lightseagreen = "#20b2aa";
var lightskyblue = "#87cefa";
var lightslategray = "#778899";
var lightslategrey = "#778899";
var lightsteelblue = "#b0c4de";
var lightyellow = "#ffffe0";
var limegreen = "#32cd32";
var linen = "#faf0e6";
var mediumaquamarine = "#66cdaa";
var mediumblue = "#0000cd";
var mediumorchid = "#ba55d3";
var mediumpurple = "#9370db";
var mediumseagreen = "#3cb371";
var mediumslateblue = "#7b68ee";
var mediumspringgreen = "#00fa9a";
var mediumturquoise = "#48d1cc";
var mediumvioletred = "#c71585";
var midnightblue = "#191970";
var mintcream = "#f5fffa";
var mistyrose = "#ffe4e1";
var moccasin = "#ffe4b5";
var navajowhite = "#ffdead";
var oldlace = "#fdf5e6";
var olivedrab = "#6b8e23";
var orangered = "#ff4500";
var orchid = "#da70d6";
var palegoldenrod = "#eee8aa";
var palegreen = "#98fb98";
var paleturquoise = "#afeeee";
var palevioletred = "#db7093";
var papayawhip = "#ffefd5";
var peachpuff = "#ffdab9";
var peru = "#cd853f";
var pink = "#ffc0cb";
var plum = "#dda0dd";
var powderblue = "#b0e0e6";
var rosybrown = "#bc8f8f";
var royalblue = "#4169e1";
var saddlebrown = "#8b4513";
var salmon = "#fa8072";
var sandybrown = "#f4a460";
var seagreen = "#2e8b57";
var seashell = "#fff5ee";
var sienna = "#a0522d";
var skyblue = "#87ceeb";
var slateblue = "#6a5acd";
var slategray = "#708090";
var slategrey = "#708090";
var snow = "#fffafa";
var springgreen = "#00ff7f";
var steelblue = "#4682b4";
var tan = "#d2b48c";
var thistle = "#d8bfd8";
var tomato = "#ff6347";
var turquoise = "#40e0d0";
var violet = "#ee82ee";
var wheat = "#f5deb3";
var whitesmoke = "#f5f5f5";
var yellowgreen = "#9acd32";
var rebeccapurple = "#663399";
var colors = {
	black: black,
	silver: silver,
	gray: gray,
	white: white,
	maroon: maroon,
	red: red,
	purple: purple,
	fuchsia: fuchsia,
	green: green,
	lime: lime,
	olive: olive,
	yellow: yellow,
	navy: navy,
	blue: blue,
	teal: teal,
	aqua: aqua,
	orange: orange,
	aliceblue: aliceblue,
	antiquewhite: antiquewhite,
	aquamarine: aquamarine,
	azure: azure,
	beige: beige,
	bisque: bisque,
	blanchedalmond: blanchedalmond,
	blueviolet: blueviolet,
	brown: brown,
	burlywood: burlywood,
	cadetblue: cadetblue,
	chartreuse: chartreuse,
	chocolate: chocolate,
	coral: coral,
	cornflowerblue: cornflowerblue,
	cornsilk: cornsilk,
	crimson: crimson,
	darkblue: darkblue,
	darkcyan: darkcyan,
	darkgoldenrod: darkgoldenrod,
	darkgray: darkgray,
	darkgreen: darkgreen,
	darkgrey: darkgrey,
	darkkhaki: darkkhaki,
	darkmagenta: darkmagenta,
	darkolivegreen: darkolivegreen,
	darkorange: darkorange,
	darkorchid: darkorchid,
	darkred: darkred,
	darksalmon: darksalmon,
	darkseagreen: darkseagreen,
	darkslateblue: darkslateblue,
	darkslategray: darkslategray,
	darkslategrey: darkslategrey,
	darkturquoise: darkturquoise,
	darkviolet: darkviolet,
	deeppink: deeppink,
	deepskyblue: deepskyblue,
	dimgray: dimgray,
	dimgrey: dimgrey,
	dodgerblue: dodgerblue,
	firebrick: firebrick,
	floralwhite: floralwhite,
	forestgreen: forestgreen,
	gainsboro: gainsboro,
	ghostwhite: ghostwhite,
	gold: gold,
	goldenrod: goldenrod,
	greenyellow: greenyellow,
	grey: grey,
	honeydew: honeydew,
	hotpink: hotpink,
	indianred: indianred,
	indigo: indigo,
	ivory: ivory,
	khaki: khaki,
	lavender: lavender,
	lavenderblush: lavenderblush,
	lawngreen: lawngreen,
	lemonchiffon: lemonchiffon,
	lightblue: lightblue,
	lightcoral: lightcoral,
	lightcyan: lightcyan,
	lightgoldenrodyellow: lightgoldenrodyellow,
	lightgray: lightgray,
	lightgreen: lightgreen,
	lightgrey: lightgrey,
	lightpink: lightpink,
	lightsalmon: lightsalmon,
	lightseagreen: lightseagreen,
	lightskyblue: lightskyblue,
	lightslategray: lightslategray,
	lightslategrey: lightslategrey,
	lightsteelblue: lightsteelblue,
	lightyellow: lightyellow,
	limegreen: limegreen,
	linen: linen,
	mediumaquamarine: mediumaquamarine,
	mediumblue: mediumblue,
	mediumorchid: mediumorchid,
	mediumpurple: mediumpurple,
	mediumseagreen: mediumseagreen,
	mediumslateblue: mediumslateblue,
	mediumspringgreen: mediumspringgreen,
	mediumturquoise: mediumturquoise,
	mediumvioletred: mediumvioletred,
	midnightblue: midnightblue,
	mintcream: mintcream,
	mistyrose: mistyrose,
	moccasin: moccasin,
	navajowhite: navajowhite,
	oldlace: oldlace,
	olivedrab: olivedrab,
	orangered: orangered,
	orchid: orchid,
	palegoldenrod: palegoldenrod,
	palegreen: palegreen,
	paleturquoise: paleturquoise,
	palevioletred: palevioletred,
	papayawhip: papayawhip,
	peachpuff: peachpuff,
	peru: peru,
	pink: pink,
	plum: plum,
	powderblue: powderblue,
	rosybrown: rosybrown,
	royalblue: royalblue,
	saddlebrown: saddlebrown,
	salmon: salmon,
	sandybrown: sandybrown,
	seagreen: seagreen,
	seashell: seashell,
	sienna: sienna,
	skyblue: skyblue,
	slateblue: slateblue,
	slategray: slategray,
	slategrey: slategrey,
	snow: snow,
	springgreen: springgreen,
	steelblue: steelblue,
	tan: tan,
	thistle: thistle,
	tomato: tomato,
	turquoise: turquoise,
	violet: violet,
	wheat: wheat,
	whitesmoke: whitesmoke,
	yellowgreen: yellowgreen,
	rebeccapurple: rebeccapurple
};

var colors$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  black: black,
  silver: silver,
  gray: gray,
  white: white,
  maroon: maroon,
  red: red,
  purple: purple,
  fuchsia: fuchsia,
  green: green,
  lime: lime,
  olive: olive,
  yellow: yellow,
  navy: navy,
  blue: blue,
  teal: teal,
  aqua: aqua,
  orange: orange,
  aliceblue: aliceblue,
  antiquewhite: antiquewhite,
  aquamarine: aquamarine,
  azure: azure,
  beige: beige,
  bisque: bisque,
  blanchedalmond: blanchedalmond,
  blueviolet: blueviolet,
  brown: brown,
  burlywood: burlywood,
  cadetblue: cadetblue,
  chartreuse: chartreuse,
  chocolate: chocolate,
  coral: coral,
  cornflowerblue: cornflowerblue,
  cornsilk: cornsilk,
  crimson: crimson,
  darkblue: darkblue,
  darkcyan: darkcyan,
  darkgoldenrod: darkgoldenrod,
  darkgray: darkgray,
  darkgreen: darkgreen,
  darkgrey: darkgrey,
  darkkhaki: darkkhaki,
  darkmagenta: darkmagenta,
  darkolivegreen: darkolivegreen,
  darkorange: darkorange,
  darkorchid: darkorchid,
  darkred: darkred,
  darksalmon: darksalmon,
  darkseagreen: darkseagreen,
  darkslateblue: darkslateblue,
  darkslategray: darkslategray,
  darkslategrey: darkslategrey,
  darkturquoise: darkturquoise,
  darkviolet: darkviolet,
  deeppink: deeppink,
  deepskyblue: deepskyblue,
  dimgray: dimgray,
  dimgrey: dimgrey,
  dodgerblue: dodgerblue,
  firebrick: firebrick,
  floralwhite: floralwhite,
  forestgreen: forestgreen,
  gainsboro: gainsboro,
  ghostwhite: ghostwhite,
  gold: gold,
  goldenrod: goldenrod,
  greenyellow: greenyellow,
  grey: grey,
  honeydew: honeydew,
  hotpink: hotpink,
  indianred: indianred,
  indigo: indigo,
  ivory: ivory,
  khaki: khaki,
  lavender: lavender,
  lavenderblush: lavenderblush,
  lawngreen: lawngreen,
  lemonchiffon: lemonchiffon,
  lightblue: lightblue,
  lightcoral: lightcoral,
  lightcyan: lightcyan,
  lightgoldenrodyellow: lightgoldenrodyellow,
  lightgray: lightgray,
  lightgreen: lightgreen,
  lightgrey: lightgrey,
  lightpink: lightpink,
  lightsalmon: lightsalmon,
  lightseagreen: lightseagreen,
  lightskyblue: lightskyblue,
  lightslategray: lightslategray,
  lightslategrey: lightslategrey,
  lightsteelblue: lightsteelblue,
  lightyellow: lightyellow,
  limegreen: limegreen,
  linen: linen,
  mediumaquamarine: mediumaquamarine,
  mediumblue: mediumblue,
  mediumorchid: mediumorchid,
  mediumpurple: mediumpurple,
  mediumseagreen: mediumseagreen,
  mediumslateblue: mediumslateblue,
  mediumspringgreen: mediumspringgreen,
  mediumturquoise: mediumturquoise,
  mediumvioletred: mediumvioletred,
  midnightblue: midnightblue,
  mintcream: mintcream,
  mistyrose: mistyrose,
  moccasin: moccasin,
  navajowhite: navajowhite,
  oldlace: oldlace,
  olivedrab: olivedrab,
  orangered: orangered,
  orchid: orchid,
  palegoldenrod: palegoldenrod,
  palegreen: palegreen,
  paleturquoise: paleturquoise,
  palevioletred: palevioletred,
  papayawhip: papayawhip,
  peachpuff: peachpuff,
  peru: peru,
  pink: pink,
  plum: plum,
  powderblue: powderblue,
  rosybrown: rosybrown,
  royalblue: royalblue,
  saddlebrown: saddlebrown,
  salmon: salmon,
  sandybrown: sandybrown,
  seagreen: seagreen,
  seashell: seashell,
  sienna: sienna,
  skyblue: skyblue,
  slateblue: slateblue,
  slategray: slategray,
  slategrey: slategrey,
  snow: snow,
  springgreen: springgreen,
  steelblue: steelblue,
  tan: tan,
  thistle: thistle,
  tomato: tomato,
  turquoise: turquoise,
  violet: violet,
  wheat: wheat,
  whitesmoke: whitesmoke,
  yellowgreen: yellowgreen,
  rebeccapurple: rebeccapurple,
  'default': colors
});

var require$$0 = getCjsExportFromNamespace(colors$1);

var cssColorKeywords = require$$0;

var cssToReactNative = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}



var parse__default = _interopDefault(lib);

var camelizeStyleName = _interopDefault(camelize);

var cssColorKeywords$1 = _interopDefault(cssColorKeywords);

var matchString = function matchString(node) {
  if (node.type !== 'string') return null;
  return node.value.replace(/\\([0-9a-f]{1,6})(?:\s|$)/gi, function (match, charCode) {
    return String.fromCharCode(parseInt(charCode, 16));
  }).replace(/\\/g, '');
};

var hexColorRe = /^(#(?:[0-9a-f]{3,4}){1,2})$/i;
var cssFunctionNameRe = /^(rgba?|hsla?|hwb|lab|lch|gray|color)$/;

var matchColor = function matchColor(node) {
  if (node.type === 'word' && (hexColorRe.test(node.value) || node.value in cssColorKeywords$1 || node.value === 'transparent')) {
    return node.value;
  } else if (node.type === 'function' && cssFunctionNameRe.test(node.value)) {
    return lib.stringify(node);
  }

  return null;
};

var noneRe = /^(none)$/i;
var autoRe = /^(auto)$/i;
var identRe = /(^-?[_a-z][_a-z0-9-]*$)/i; // Note if these are wrong, you'll need to change index.js too

var numberRe = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?)$/i; // Note lengthRe is sneaky: you can omit units for 0

var lengthRe = /^(0$|(?:[+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?)(?=px$))/i;
var unsupportedUnitRe = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?(ch|em|ex|rem|vh|vw|vmin|vmax|cm|mm|in|pc|pt))$/i;
var angleRe = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?(?:deg|rad))$/i;
var percentRe = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?%)$/i;

var noopToken = function noopToken(predicate) {
  return function (node) {
    return predicate(node) ? '<token>' : null;
  };
};

var valueForTypeToken = function valueForTypeToken(type) {
  return function (node) {
    return node.type === type ? node.value : null;
  };
};

var regExpToken = function regExpToken(regExp, transform) {
  if (transform === void 0) {
    transform = String;
  }

  return function (node) {
    if (node.type !== 'word') return null;
    var match = node.value.match(regExp);
    if (match === null) return null;
    var value = transform(match[1]);
    return value;
  };
};

var SPACE = noopToken(function (node) {
  return node.type === 'space';
});
var SLASH = noopToken(function (node) {
  return node.type === 'div' && node.value === '/';
});
var COMMA = noopToken(function (node) {
  return node.type === 'div' && node.value === ',';
});
var WORD = valueForTypeToken('word');
var NONE = regExpToken(noneRe);
var AUTO = regExpToken(autoRe);
var NUMBER = regExpToken(numberRe, Number);
var LENGTH = regExpToken(lengthRe, Number);
var UNSUPPORTED_LENGTH_UNIT = regExpToken(unsupportedUnitRe);
var ANGLE = regExpToken(angleRe, function (angle) {
  return angle.toLowerCase();
});
var PERCENT = regExpToken(percentRe);
var IDENT = regExpToken(identRe);
var STRING = matchString;
var COLOR = matchColor;
var LINE = regExpToken(/^(none|underline|line-through)$/i);
var BORDER_STYLE = regExpToken(/^(solid|dashed|dotted)$/);
var defaultBorderWidth = 1;
var defaultBorderColor = 'black';
var defaultBorderStyle = 'solid';

var border = function border(tokenStream) {
  var borderWidth;
  var borderColor;
  var borderStyle;

  if (tokenStream.matches(NONE)) {
    tokenStream.expectEmpty();
    return {
      borderWidth: 0,
      borderColor: 'black',
      borderStyle: 'solid'
    };
  }

  var partsParsed = 0;

  while (partsParsed < 3 && tokenStream.hasTokens()) {
    if (partsParsed !== 0) tokenStream.expect(SPACE);

    if (borderWidth === undefined && tokenStream.matches(LENGTH, UNSUPPORTED_LENGTH_UNIT)) {
      borderWidth = tokenStream.lastValue;
    } else if (borderColor === undefined && tokenStream.matches(COLOR)) {
      borderColor = tokenStream.lastValue;
    } else if (borderStyle === undefined && tokenStream.matches(BORDER_STYLE)) {
      borderStyle = tokenStream.lastValue;
    } else {
      tokenStream["throw"]();
    }

    partsParsed += 1;
  }

  tokenStream.expectEmpty();
  if (borderWidth === undefined) borderWidth = defaultBorderWidth;
  if (borderColor === undefined) borderColor = defaultBorderColor;
  if (borderStyle === undefined) borderStyle = defaultBorderStyle;
  return {
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderStyle: borderStyle
  };
};

var directionFactory = function directionFactory(_ref) {
  var _ref$types = _ref.types,
      types = _ref$types === void 0 ? [LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT] : _ref$types,
      _ref$directions = _ref.directions,
      directions = _ref$directions === void 0 ? ['Top', 'Right', 'Bottom', 'Left'] : _ref$directions,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '' : _ref$prefix,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? '' : _ref$suffix;
  return function (tokenStream) {
    var _ref2;

    var values = []; // borderWidth doesn't currently allow a percent value, but may do in the future

    values.push(tokenStream.expect.apply(tokenStream, types));

    while (values.length < 4 && tokenStream.hasTokens()) {
      tokenStream.expect(SPACE);
      values.push(tokenStream.expect.apply(tokenStream, types));
    }

    tokenStream.expectEmpty();
    var top = values[0],
        _values$ = values[1],
        right = _values$ === void 0 ? top : _values$,
        _values$2 = values[2],
        bottom = _values$2 === void 0 ? top : _values$2,
        _values$3 = values[3],
        left = _values$3 === void 0 ? right : _values$3;

    var keyFor = function keyFor(n) {
      return "" + prefix + directions[n] + suffix;
    };

    return _ref2 = {}, _ref2[keyFor(0)] = top, _ref2[keyFor(1)] = right, _ref2[keyFor(2)] = bottom, _ref2[keyFor(3)] = left, _ref2;
  };
};

var parseShadowOffset = function parseShadowOffset(tokenStream) {
  var width = tokenStream.expect(LENGTH);
  var height = tokenStream.matches(SPACE) ? tokenStream.expect(LENGTH) : width;
  tokenStream.expectEmpty();
  return {
    width: width,
    height: height
  };
};

var parseShadow = function parseShadow(tokenStream) {
  var offsetX;
  var offsetY;
  var radius;
  var color;

  if (tokenStream.matches(NONE)) {
    tokenStream.expectEmpty();
    return {
      offset: {
        width: 0,
        height: 0
      },
      radius: 0,
      color: 'black'
    };
  }

  var didParseFirst = false;

  while (tokenStream.hasTokens()) {
    if (didParseFirst) tokenStream.expect(SPACE);

    if (offsetX === undefined && tokenStream.matches(LENGTH, UNSUPPORTED_LENGTH_UNIT)) {
      offsetX = tokenStream.lastValue;
      tokenStream.expect(SPACE);
      offsetY = tokenStream.expect(LENGTH, UNSUPPORTED_LENGTH_UNIT);
      tokenStream.saveRewindPoint();

      if (tokenStream.matches(SPACE) && tokenStream.matches(LENGTH, UNSUPPORTED_LENGTH_UNIT)) {
        radius = tokenStream.lastValue;
      } else {
        tokenStream.rewind();
      }
    } else if (color === undefined && tokenStream.matches(COLOR)) {
      color = tokenStream.lastValue;
    } else {
      tokenStream["throw"]();
    }

    didParseFirst = true;
  }

  if (offsetX === undefined) tokenStream["throw"]();
  return {
    offset: {
      width: offsetX,
      height: offsetY
    },
    radius: radius !== undefined ? radius : 0,
    color: color !== undefined ? color : 'black'
  };
};

var boxShadow = function boxShadow(tokenStream) {
  var _parseShadow = parseShadow(tokenStream),
      offset = _parseShadow.offset,
      radius = _parseShadow.radius,
      color = _parseShadow.color;

  return {
    shadowOffset: offset,
    shadowRadius: radius,
    shadowColor: color,
    shadowOpacity: 1
  };
};

var defaultFlexGrow = 1;
var defaultFlexShrink = 1;
var defaultFlexBasis = 0;

var flex = function flex(tokenStream) {
  var flexGrow;
  var flexShrink;
  var flexBasis;

  if (tokenStream.matches(NONE)) {
    tokenStream.expectEmpty();
    return {
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: 'auto'
    };
  }

  tokenStream.saveRewindPoint();

  if (tokenStream.matches(AUTO) && !tokenStream.hasTokens()) {
    return {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto'
    };
  }

  tokenStream.rewind();
  var partsParsed = 0;

  while (partsParsed < 2 && tokenStream.hasTokens()) {
    if (partsParsed !== 0) tokenStream.expect(SPACE);

    if (flexGrow === undefined && tokenStream.matches(NUMBER)) {
      flexGrow = tokenStream.lastValue;
      tokenStream.saveRewindPoint();

      if (tokenStream.matches(SPACE) && tokenStream.matches(NUMBER)) {
        flexShrink = tokenStream.lastValue;
      } else {
        tokenStream.rewind();
      }
    } else if (flexBasis === undefined && tokenStream.matches(LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT)) {
      flexBasis = tokenStream.lastValue;
    } else if (flexBasis === undefined && tokenStream.matches(AUTO)) {
      flexBasis = 'auto';
    } else {
      tokenStream["throw"]();
    }

    partsParsed += 1;
  }

  tokenStream.expectEmpty();
  if (flexGrow === undefined) flexGrow = defaultFlexGrow;
  if (flexShrink === undefined) flexShrink = defaultFlexShrink;
  if (flexBasis === undefined) flexBasis = defaultFlexBasis;
  return {
    flexGrow: flexGrow,
    flexShrink: flexShrink,
    flexBasis: flexBasis
  };
};

var FLEX_WRAP = regExpToken(/(nowrap|wrap|wrap-reverse)/);
var FLEX_DIRECTION = regExpToken(/(row|row-reverse|column|column-reverse)/);
var defaultFlexWrap = 'nowrap';
var defaultFlexDirection = 'row';

var flexFlow = function flexFlow(tokenStream) {
  var flexWrap;
  var flexDirection;
  var partsParsed = 0;

  while (partsParsed < 2 && tokenStream.hasTokens()) {
    if (partsParsed !== 0) tokenStream.expect(SPACE);

    if (flexWrap === undefined && tokenStream.matches(FLEX_WRAP)) {
      flexWrap = tokenStream.lastValue;
    } else if (flexDirection === undefined && tokenStream.matches(FLEX_DIRECTION)) {
      flexDirection = tokenStream.lastValue;
    } else {
      tokenStream["throw"]();
    }

    partsParsed += 1;
  }

  tokenStream.expectEmpty();
  if (flexWrap === undefined) flexWrap = defaultFlexWrap;
  if (flexDirection === undefined) flexDirection = defaultFlexDirection;
  return {
    flexWrap: flexWrap,
    flexDirection: flexDirection
  };
};

var fontFamily = function fontFamily(tokenStream) {
  var fontFamily;

  if (tokenStream.matches(STRING)) {
    fontFamily = tokenStream.lastValue;
  } else {
    fontFamily = tokenStream.expect(IDENT);

    while (tokenStream.hasTokens()) {
      tokenStream.expect(SPACE);
      var nextIdent = tokenStream.expect(IDENT);
      fontFamily += " " + nextIdent;
    }
  }

  tokenStream.expectEmpty();
  return {
    fontFamily: fontFamily
  };
};

var NORMAL = regExpToken(/^(normal)$/);
var STYLE = regExpToken(/^(italic)$/);
var WEIGHT = regExpToken(/^([1-9]00|bold)$/);
var VARIANT = regExpToken(/^(small-caps)$/);
var defaultFontStyle = 'normal';
var defaultFontWeight = 'normal';
var defaultFontVariant = [];

var font = function font(tokenStream) {
  var fontStyle;
  var fontWeight;
  var fontVariant; // let fontSize;

  var lineHeight; // let fontFamily;

  var numStyleWeightVariantMatched = 0;

  while (numStyleWeightVariantMatched < 3 && tokenStream.hasTokens()) {
    if (tokenStream.matches(NORMAL)) ;else if (fontStyle === undefined && tokenStream.matches(STYLE)) {
      fontStyle = tokenStream.lastValue;
    } else if (fontWeight === undefined && tokenStream.matches(WEIGHT)) {
      fontWeight = tokenStream.lastValue;
    } else if (fontVariant === undefined && tokenStream.matches(VARIANT)) {
      fontVariant = [tokenStream.lastValue];
    } else {
      break;
    }
    tokenStream.expect(SPACE);
    numStyleWeightVariantMatched += 1;
  }

  var fontSize = tokenStream.expect(LENGTH, UNSUPPORTED_LENGTH_UNIT);

  if (tokenStream.matches(SLASH)) {
    lineHeight = tokenStream.expect(LENGTH, UNSUPPORTED_LENGTH_UNIT);
  }

  tokenStream.expect(SPACE);

  var _fontFamily = fontFamily(tokenStream),
      fontFamily$1 = _fontFamily.fontFamily;

  if (fontStyle === undefined) fontStyle = defaultFontStyle;
  if (fontWeight === undefined) fontWeight = defaultFontWeight;
  if (fontVariant === undefined) fontVariant = defaultFontVariant;
  var out = {
    fontStyle: fontStyle,
    fontWeight: fontWeight,
    fontVariant: fontVariant,
    fontSize: fontSize,
    fontFamily: fontFamily$1
  };
  if (lineHeight !== undefined) out.lineHeight = lineHeight;
  return out;
};

var ALIGN_CONTENT = regExpToken(/(flex-(?:start|end)|center|stretch|space-(?:between|around))/);
var JUSTIFY_CONTENT = regExpToken(/(flex-(?:start|end)|center|space-(?:between|around|evenly))/);

var placeContent = function placeContent(tokenStream) {
  var alignContent = tokenStream.expect(ALIGN_CONTENT);
  var justifyContent;

  if (tokenStream.hasTokens()) {
    tokenStream.expect(SPACE);
    justifyContent = tokenStream.expect(JUSTIFY_CONTENT);
  } else {
    justifyContent = 'stretch';
  }

  tokenStream.expectEmpty();
  return {
    alignContent: alignContent,
    justifyContent: justifyContent
  };
};

var STYLE$1 = regExpToken(/^(solid|double|dotted|dashed)$/);
var defaultTextDecorationLine = 'none';
var defaultTextDecorationStyle = 'solid';
var defaultTextDecorationColor = 'black';

var textDecoration = function textDecoration(tokenStream) {
  var line;
  var style;
  var color;
  var didParseFirst = false;

  while (tokenStream.hasTokens()) {
    if (didParseFirst) tokenStream.expect(SPACE);

    if (line === undefined && tokenStream.matches(LINE)) {
      var lines = [tokenStream.lastValue.toLowerCase()];
      tokenStream.saveRewindPoint();

      if (lines[0] !== 'none' && tokenStream.matches(SPACE) && tokenStream.matches(LINE)) {
        lines.push(tokenStream.lastValue.toLowerCase()); // Underline comes before line-through

        lines.sort().reverse();
      } else {
        tokenStream.rewind();
      }

      line = lines.join(' ');
    } else if (style === undefined && tokenStream.matches(STYLE$1)) {
      style = tokenStream.lastValue;
    } else if (color === undefined && tokenStream.matches(COLOR)) {
      color = tokenStream.lastValue;
    } else {
      tokenStream["throw"]();
    }

    didParseFirst = true;
  }

  return {
    textDecorationLine: line !== undefined ? line : defaultTextDecorationLine,
    textDecorationColor: color !== undefined ? color : defaultTextDecorationColor,
    textDecorationStyle: style !== undefined ? style : defaultTextDecorationStyle
  };
};

var textDecorationLine = function textDecorationLine(tokenStream) {
  var lines = [];
  var didParseFirst = false;

  while (tokenStream.hasTokens()) {
    if (didParseFirst) tokenStream.expect(SPACE);
    lines.push(tokenStream.expect(LINE).toLowerCase());
    didParseFirst = true;
  }

  lines.sort().reverse();
  return {
    textDecorationLine: lines.join(' ')
  };
};

var textShadow = function textShadow(tokenStream) {
  var _parseShadow2 = parseShadow(tokenStream),
      offset = _parseShadow2.offset,
      radius = _parseShadow2.radius,
      color = _parseShadow2.color;

  return {
    textShadowOffset: offset,
    textShadowRadius: radius,
    textShadowColor: color
  };
};

var oneOfType = function oneOfType(tokenType) {
  return function (functionStream) {
    var value = functionStream.expect(tokenType);
    functionStream.expectEmpty();
    return value;
  };
};

var singleNumber = oneOfType(NUMBER);
var singleLength = oneOfType(LENGTH);
var singleAngle = oneOfType(ANGLE);

var xyTransformFactory = function xyTransformFactory(tokenType) {
  return function (key, valueIfOmitted) {
    return function (functionStream) {
      var _ref3, _ref4;

      var x = functionStream.expect(tokenType);
      var y;

      if (functionStream.hasTokens()) {
        functionStream.expect(COMMA);
        y = functionStream.expect(tokenType);
      } else if (valueIfOmitted !== undefined) {
        y = valueIfOmitted;
      } else {
        // Assumption, if x === y, then we can omit XY
        // I.e. scale(5) => [{ scale: 5 }] rather than [{ scaleX: 5 }, { scaleY: 5 }]
        return x;
      }

      functionStream.expectEmpty();
      return [(_ref3 = {}, _ref3[key + "Y"] = y, _ref3), (_ref4 = {}, _ref4[key + "X"] = x, _ref4)];
    };
  };
};

var xyNumber = xyTransformFactory(NUMBER);
var xyLength = xyTransformFactory(LENGTH);
var xyAngle = xyTransformFactory(ANGLE);
var partTransforms = {
  perspective: singleNumber,
  scale: xyNumber('scale'),
  scaleX: singleNumber,
  scaleY: singleNumber,
  translate: xyLength('translate', 0),
  translateX: singleLength,
  translateY: singleLength,
  rotate: singleAngle,
  rotateX: singleAngle,
  rotateY: singleAngle,
  rotateZ: singleAngle,
  skewX: singleAngle,
  skewY: singleAngle,
  skew: xyAngle('skew', '0deg')
};

var transform = function transform(tokenStream) {
  var transforms = [];
  var didParseFirst = false;

  while (tokenStream.hasTokens()) {
    if (didParseFirst) tokenStream.expect(SPACE);
    var functionStream = tokenStream.expectFunction();
    var functionName = functionStream.functionName;
    var transformedValues = partTransforms[functionName](functionStream);

    if (!Array.isArray(transformedValues)) {
      var _ref5;

      transformedValues = [(_ref5 = {}, _ref5[functionName] = transformedValues, _ref5)];
    }

    transforms = transformedValues.concat(transforms);
    didParseFirst = true;
  }

  return {
    transform: transforms
  };
};

var background = function background(tokenStream) {
  return {
    backgroundColor: tokenStream.expect(COLOR)
  };
};

var borderColor = directionFactory({
  types: [COLOR],
  prefix: 'border',
  suffix: 'Color'
});
var borderRadius = directionFactory({
  directions: ['TopLeft', 'TopRight', 'BottomRight', 'BottomLeft'],
  prefix: 'border',
  suffix: 'Radius'
});
var borderWidth = directionFactory({
  prefix: 'border',
  suffix: 'Width'
});
var margin = directionFactory({
  types: [LENGTH, UNSUPPORTED_LENGTH_UNIT, PERCENT, AUTO],
  prefix: 'margin'
});
var padding = directionFactory({
  prefix: 'padding'
});

var fontVariant = function fontVariant(tokenStream) {
  return {
    fontVariant: [tokenStream.expect(IDENT)]
  };
};

var fontWeight = function fontWeight(tokenStream) {
  return {
    fontWeight: tokenStream.expect(WORD) // Also match numbers as strings

  };
};

var shadowOffset = function shadowOffset(tokenStream) {
  return {
    shadowOffset: parseShadowOffset(tokenStream)
  };
};

var textShadowOffset = function textShadowOffset(tokenStream) {
  return {
    textShadowOffset: parseShadowOffset(tokenStream)
  };
};

var transforms = {
  background: background,
  border: border,
  borderColor: borderColor,
  borderRadius: borderRadius,
  borderWidth: borderWidth,
  boxShadow: boxShadow,
  flex: flex,
  flexFlow: flexFlow,
  font: font,
  fontFamily: fontFamily,
  fontVariant: fontVariant,
  fontWeight: fontWeight,
  margin: margin,
  padding: padding,
  placeContent: placeContent,
  shadowOffset: shadowOffset,
  textShadow: textShadow,
  textShadowOffset: textShadowOffset,
  textDecoration: textDecoration,
  textDecorationLine: textDecorationLine,
  transform: transform
};
var propertiesWithoutUnits;

{
  propertiesWithoutUnits = ['aspectRatio', 'elevation', 'flexGrow', 'flexShrink', 'opacity', 'shadowOpacity', 'zIndex'];
}

var devPropertiesWithUnitsRegExp = propertiesWithoutUnits != null ? new RegExp(propertiesWithoutUnits.join('|')) : null;
var SYMBOL_MATCH = 'SYMBOL_MATCH';

var TokenStream =
/*#__PURE__*/
function () {
  function TokenStream(nodes, parent) {
    this.index = 0;
    this.nodes = nodes;
    this.functionName = parent != null ? parent.value : null;
    this.lastValue = null;
    this.rewindIndex = -1;
  }

  var _proto = TokenStream.prototype;

  _proto.hasTokens = function hasTokens() {
    return this.index <= this.nodes.length - 1;
  };

  _proto[SYMBOL_MATCH] = function () {
    if (!this.hasTokens()) return null;
    var node = this.nodes[this.index];

    for (var i = 0; i < arguments.length; i += 1) {
      var tokenDescriptor = i < 0 || arguments.length <= i ? undefined : arguments[i];
      var value = tokenDescriptor(node);

      if (value !== null) {
        this.index += 1;
        this.lastValue = value;
        return value;
      }
    }

    return null;
  };

  _proto.matches = function matches() {
    return this[SYMBOL_MATCH].apply(this, arguments) !== null;
  };

  _proto.expect = function expect() {
    var value = this[SYMBOL_MATCH].apply(this, arguments);
    return value !== null ? value : this["throw"]();
  };

  _proto.matchesFunction = function matchesFunction() {
    var node = this.nodes[this.index];
    if (node.type !== 'function') return null;
    var value = new TokenStream(node.nodes, node);
    this.index += 1;
    this.lastValue = null;
    return value;
  };

  _proto.expectFunction = function expectFunction() {
    var value = this.matchesFunction();
    return value !== null ? value : this["throw"]();
  };

  _proto.expectEmpty = function expectEmpty() {
    if (this.hasTokens()) this["throw"]();
  };

  _proto["throw"] = function _throw() {
    throw new Error("Unexpected token type: " + this.nodes[this.index].type);
  };

  _proto.saveRewindPoint = function saveRewindPoint() {
    this.rewindIndex = this.index;
  };

  _proto.rewind = function rewind() {
    if (this.rewindIndex === -1) throw new Error('Internal error');
    this.index = this.rewindIndex;
    this.lastValue = null;
  };

  return TokenStream;
}();
/* eslint-disable no-param-reassign */
// Note if this is wrong, you'll need to change tokenTypes.js too


var numberOrLengthRe = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?)(?:px)?$/i;
var numberOnlyRe = /^[+-]?(?:\d*\.\d*|[1-9]\d*)(?:e[+-]?\d+)?$/i;
var boolRe = /^true|false$/i;
var nullRe = /^null$/i;
var undefinedRe = /^undefined$/i; // Undocumented export

var transformRawValue = function transformRawValue(propName, value) {
  {
    var needsUnit = !devPropertiesWithUnitsRegExp.test(propName);
    var isNumberWithoutUnit = numberOnlyRe.test(value);

    if (needsUnit && isNumberWithoutUnit) {
      // eslint-disable-next-line no-console
      console.warn("Expected style \"" + propName + ": " + value + "\" to contain units");
    }

    if (!needsUnit && value !== '0' && !isNumberWithoutUnit) {
      // eslint-disable-next-line no-console
      console.warn("Expected style \"" + propName + ": " + value + "\" to be unitless");
    }
  }

  var numberMatch = value.match(numberOrLengthRe);
  if (numberMatch !== null) return Number(numberMatch[1]);
  var boolMatch = value.match(boolRe);
  if (boolMatch !== null) return boolMatch[0].toLowerCase() === 'true';
  var nullMatch = value.match(nullRe);
  if (nullMatch !== null) return null;
  var undefinedMatch = value.match(undefinedRe);
  if (undefinedMatch !== null) return undefined;
  return value;
};

var baseTransformShorthandValue = function baseTransformShorthandValue(propName, value) {
  var ast = parse__default(value);
  var tokenStream = new TokenStream(ast.nodes);
  return transforms[propName](tokenStream);
};

var transformShorthandValue =  function (propName, value) {
  try {
    return baseTransformShorthandValue(propName, value);
  } catch (e) {
    throw new Error("Failed to parse declaration \"" + propName + ": " + value + "\"");
  }
};

var getStylesForProperty = function getStylesForProperty(propName, inputValue, allowShorthand) {
  var _ref6;

  var isRawValue = allowShorthand === false || !(propName in transforms);
  var value = inputValue.trim();
  var propValues = isRawValue ? (_ref6 = {}, _ref6[propName] = transformRawValue(propName, value), _ref6) : transformShorthandValue(propName, value);
  return propValues;
};

var getPropertyName = function getPropertyName(propName) {
  var isCustomProp = /^--\w+/.test(propName);

  if (isCustomProp) {
    return propName;
  }

  return camelizeStyleName(propName);
};

var index = function index(rules, shorthandBlacklist) {
  if (shorthandBlacklist === void 0) {
    shorthandBlacklist = [];
  }

  return rules.reduce(function (accum, rule) {
    var propertyName = getPropertyName(rule[0]);
    var value = rule[1];
    var allowShorthand = shorthandBlacklist.indexOf(propertyName) === -1;
    return Object.assign(accum, getStylesForProperty(propertyName, value, allowShorthand));
  }, {});
};

exports["default"] = index;
exports.getPropertyName = getPropertyName;
exports.getStylesForProperty = getStylesForProperty;
exports.transformRawValue = transformRawValue;
});

var transformDeclPairs = unwrapExports(cssToReactNative);
var cssToReactNative_1 = cssToReactNative.getPropertyName;
var cssToReactNative_2 = cssToReactNative.getStylesForProperty;
var cssToReactNative_3 = cssToReactNative.transformRawValue;

var reactIs_development = createCommonjsModule(function (module, exports) {



{
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_development;
}
});
var reactIs_1 = reactIs.AsyncMode;
var reactIs_2 = reactIs.ConcurrentMode;
var reactIs_3 = reactIs.ContextConsumer;
var reactIs_4 = reactIs.ContextProvider;
var reactIs_5 = reactIs.Element;
var reactIs_6 = reactIs.ForwardRef;
var reactIs_7 = reactIs.Fragment;
var reactIs_8 = reactIs.Lazy;
var reactIs_9 = reactIs.Memo;
var reactIs_10 = reactIs.Portal;
var reactIs_11 = reactIs.Profiler;
var reactIs_12 = reactIs.StrictMode;
var reactIs_13 = reactIs.Suspense;
var reactIs_14 = reactIs.isAsyncMode;
var reactIs_15 = reactIs.isConcurrentMode;
var reactIs_16 = reactIs.isContextConsumer;
var reactIs_17 = reactIs.isContextProvider;
var reactIs_18 = reactIs.isElement;
var reactIs_19 = reactIs.isForwardRef;
var reactIs_20 = reactIs.isFragment;
var reactIs_21 = reactIs.isLazy;
var reactIs_22 = reactIs.isMemo;
var reactIs_23 = reactIs.isPortal;
var reactIs_24 = reactIs.isProfiler;
var reactIs_25 = reactIs.isStrictMode;
var reactIs_26 = reactIs.isSuspense;
var reactIs_27 = reactIs.isValidElementType;
var reactIs_28 = reactIs.typeOf;

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var hasFlag = (flag, argv) => {
	argv = argv || browser$1.argv;
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const pos = argv.indexOf(prefix + flag);
	const terminatorPos = argv.indexOf('--');
	return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};

const env$1 = browser$1.env;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false')) {
	forceColor = false;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = true;
}
if ('FORCE_COLOR' in env$1) {
	forceColor = env$1.FORCE_COLOR.length === 0 || parseInt(env$1.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(stream) {
	if (forceColor === false) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (stream && !stream.isTTY && forceColor !== true) {
		return 0;
	}

	const min = forceColor ? 1 : 0;

	if ('CI' in env$1) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env$1) || env$1.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env$1) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env$1.TEAMCITY_VERSION) ? 1 : 0;
	}

	if ('TERM_PROGRAM' in env$1) {
		const version = parseInt(( '').split('.')[0], 10);

		switch (env$1.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env$1.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env$1.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env$1) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: getSupportLevel(browser$1.stdout),
	stderr: getSupportLevel(browser$1.stderr)
};

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

// 
function getComponentName(target) {
  return ( typeof target === 'string' && target ) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !reactIs_28(x);
});

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var SC_ATTR = typeof browser$1 !== 'undefined' && ( browser$1.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.2.1";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = Boolean(typeof SC_DISABLE_SPEEDY === 'boolean' ? SC_DISABLE_SPEEDY : typeof browser$1 !== 'undefined' && typeof browser$1.env.REACT_APP_SC_DISABLE_SPEEDY !== 'undefined' && browser$1.env.REACT_APP_SC_DISABLE_SPEEDY !== '' ?  browser$1.env.REACT_APP_SC_DISABLE_SPEEDY : typeof browser$1 !== 'undefined' && typeof browser$1.env.SC_DISABLE_SPEEDY !== 'undefined' && browser$1.env.SC_DISABLE_SPEEDY !== '' ?  browser$1.env.SC_DISABLE_SPEEDY : browser$1.env.NODE_ENV !== 'production'); // Shared empty execution context when generating static styles

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS =  errorMap ;
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  while (reverseRegister.has(nextFreeGroup)) {
    nextFreeGroup++;
  }

  var group = nextFreeGroup++;

  if ( ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
};

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = EMPTY_OBJECT;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options, withNames) {
    if (withNames === void 0) {
      withNames = true;
    }

    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, withNames && this.names || undefined);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
var COMPLEX_SELECTOR_PREFIX = [':', '[', '.', '#'];
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new stylis_min(options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var _consecutiveSelfRefRegExp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // do not replace the first occurrence if it is complex (has a modifier)
    (offset === 0 ? !COMPLEX_SELECTOR_PREFIX.includes(string[_selector.length]) : true) && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    !string.match(_consecutiveSelfRefRegExp)) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js/tree/v3.5.4#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single-threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    _consecutiveSelfRefRegExp = new RegExp("(\\" + _selector + "\\b){2,}");
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = React__default.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = React__default.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, rules) {
    var _this = this;

    this.inject = function (styleSheet, stylisInstance) {
      if (stylisInstance === void 0) {
        stylisInstance = masterStylis;
      }

      var resolvedName = _this.name + stylisInstance.hash;

      if (!styleSheet.hasNameForId(_this.id, resolvedName)) {
        styleSheet.insertRules(_this.id, resolvedName, stylisInstance(_this.rules, resolvedName, '@keyframes'));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.rules = rules;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName(stylisInstance) {
    if (stylisInstance === void 0) {
      stylisInstance = masterStylis;
    }

    return this.name + stylisInstance.hash;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercaseCheck = /([A-Z])/;
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

var prefixAndLowerCase = function prefixAndLowerCase(_char) {
  return "-" + _char.toLowerCase();
};
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */


function hyphenateStyleName(string) {
  return uppercaseCheck.test(string) ? string.replace(uppercasePattern, prefixAndLowerCase).replace(msPattern, '-ms-') : string;
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in unitlessKeys)) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];

  for (var key in obj) {
    if (!obj.hasOwnProperty(key) || isFalsish(obj[key])) continue;

    if (isPlainObject(obj[key])) {
      rules.push.apply(rules, objToCssArray(obj[key], key));
    } else if (isFunction(obj[key])) {
      rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
    } else {
      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }
  }

  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet, stylisInstance) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet, stylisInstance);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( reactIs_18(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet, stylisInstance);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet, stylisInstance);
      return chunk.getName(stylisInstance);
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
var printed = {};
function warnOnce(message) {
  if (printed[message]) return;
  printed[message] = true;
  if (typeof console !== 'undefined' && console.warn) console.warn(message);
}

// 
var SINGLE_QUOTE = "'".charCodeAt(0);
var DOUBLE_QUOTE = '"'.charCodeAt(0);
var BACKSLASH = '\\'.charCodeAt(0);
var SLASH = '/'.charCodeAt(0);
var NEWLINE = '\n'.charCodeAt(0);
var SPACE = ' '.charCodeAt(0);
var FEED = '\f'.charCodeAt(0);
var TAB = '\t'.charCodeAt(0);
var CR = '\r'.charCodeAt(0);
var OPEN_SQUARE = '['.charCodeAt(0);
var CLOSE_SQUARE = ']'.charCodeAt(0);
var OPEN_PARENTHESES = '('.charCodeAt(0);
var CLOSE_PARENTHESES = ')'.charCodeAt(0);
var OPEN_CURLY = '{'.charCodeAt(0);
var CLOSE_CURLY = '}'.charCodeAt(0);
var SEMICOLON = ';'.charCodeAt(0);
var ASTERISK = '*'.charCodeAt(0);
var COLON = ':'.charCodeAt(0);
var AT = '@'.charCodeAt(0);
var RE_AT_END = /[ \n\t\r\f\{\(\)'"\\;/\[\]#]/g;
var RE_WORD_END = /[ \n\t\r\f\(\)\{\}:;@!'"\\\]\[#]|\/(?=\*)/g;
var RE_BAD_BRACKET = /.[\\\/\("'\n]/;
function tokenize(input, options) {
  if (options === void 0) {
    options = {};
  }

  var tokens = [];
  var css = input.css.valueOf();
  var ignore = options.ignoreErrors;
  var code, next, quote, lines, last, content, escape, nextLine, nextOffset, escaped, escapePos, prev, n;
  var length = css.length;
  var offset = -1;
  var line = 1;
  var pos = 0;

  function unclosed(what) {
    throw input.error("Unclosed " + what, line, pos - offset);
  }

  while (pos < length) {
    code = css.charCodeAt(pos);

    if (code === NEWLINE || code === FEED || code === CR && css.charCodeAt(pos + 1) !== NEWLINE) {
      offset = pos;
      line += 1;
    }

    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED:
        next = pos;

        do {
          next += 1;
          code = css.charCodeAt(next);

          if (code === NEWLINE) {
            offset = next;
            line += 1;
          }
        } while (code === SPACE || code === NEWLINE || code === TAB || code === CR || code === FEED);

        tokens.push(['space', css.slice(pos, next)]);
        pos = next - 1;
        break;

      case OPEN_SQUARE:
        tokens.push(['[', '[', line, pos - offset]);
        break;

      case CLOSE_SQUARE:
        tokens.push([']', ']', line, pos - offset]);
        break;

      case OPEN_CURLY:
        tokens.push(['{', '{', line, pos - offset]);
        break;

      case CLOSE_CURLY:
        tokens.push(['}', '}', line, pos - offset]);
        break;

      case COLON:
        tokens.push([':', ':', line, pos - offset]);
        break;

      case SEMICOLON:
        tokens.push([';', ';', line, pos - offset]);
        break;

      case OPEN_PARENTHESES:
        prev = tokens.length ? tokens[tokens.length - 1][1] : '';
        n = css.charCodeAt(pos + 1);

        if (prev === 'url' && n !== SINGLE_QUOTE && n !== DOUBLE_QUOTE && n !== SPACE && n !== NEWLINE && n !== TAB && n !== FEED && n !== CR) {
          next = pos;

          do {
            escaped = false;
            next = css.indexOf(')', next + 1);

            if (next === -1) {
              if (ignore) {
                next = pos;
                break;
              } else {
                unclosed('bracket');
              }
            }

            escapePos = next;

            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1;
              escaped = !escaped;
            }
          } while (escaped);

          tokens.push(['brackets', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
          pos = next;
        } else {
          next = css.indexOf(')', pos + 1);
          content = css.slice(pos, next + 1);

          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            tokens.push(['(', '(', line, pos - offset]);
          } else {
            tokens.push(['brackets', content, line, pos - offset, line, next - offset]);
            pos = next;
          }
        }

        break;

      case CLOSE_PARENTHESES:
        tokens.push([')', ')', line, pos - offset]);
        break;

      case SINGLE_QUOTE:
      case DOUBLE_QUOTE:
        quote = code === SINGLE_QUOTE ? "'" : '"';
        next = pos;

        do {
          escaped = false;
          next = css.indexOf(quote, next + 1);

          if (next === -1) {
            if (ignore) {
              next = pos + 1;
              break;
            } else {
              unclosed('quote');
            }
          }

          escapePos = next;

          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1;
            escaped = !escaped;
          }
        } while (escaped);

        content = css.slice(pos, next + 1);
        lines = content.split('\n');
        last = lines.length - 1;

        if (last > 0) {
          nextLine = line + last;
          nextOffset = next - lines[last].length;
        } else {
          nextLine = line;
          nextOffset = offset;
        }

        tokens.push(['string', css.slice(pos, next + 1), line, pos - offset, nextLine, next - nextOffset]);
        offset = nextOffset;
        line = nextLine;
        pos = next;
        break;

      case AT:
        RE_AT_END.lastIndex = pos + 1;
        RE_AT_END.test(css);

        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1;
        } else {
          next = RE_AT_END.lastIndex - 2;
        }

        tokens.push(['at-word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
        pos = next;
        break;

      case BACKSLASH:
        next = pos;
        escape = true;

        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1;
          escape = !escape;
        }

        code = css.charCodeAt(next + 1);

        if (escape && code !== SLASH && code !== SPACE && code !== NEWLINE && code !== TAB && code !== CR && code !== FEED) {
          next += 1;
        }

        tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
        pos = next;
        break;

      default:
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf('*/', pos + 2) + 1;

          if (next === 0) {
            if (ignore) {
              next = css.length;
            } else {
              unclosed('comment');
            }
          }

          content = css.slice(pos, next + 1);
          lines = content.split('\n');
          last = lines.length - 1;

          if (last > 0) {
            nextLine = line + last;
            nextOffset = next - lines[last].length;
          } else {
            nextLine = line;
            nextOffset = offset;
          }

          tokens.push(['comment', content, line, pos - offset, nextLine, next - nextOffset]);
          offset = nextOffset;
          line = nextLine;
          pos = next;
        } else {
          RE_WORD_END.lastIndex = pos + 1;
          RE_WORD_END.test(css);

          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1;
          } else {
            next = RE_WORD_END.lastIndex - 2;
          }

          tokens.push(['word', css.slice(pos, next + 1), line, pos - offset, line, next - offset]);
          pos = next;
        }

        break;
    }

    pos++;
  }

  return tokens;
}

// 
var HIGHLIGHT_THEME = {
  brackets: [36, 39],
  // cyan
  string: [31, 39],
  // red
  'at-word': [31, 39],
  // red
  comment: [90, 39],
  // gray
  '{': [32, 39],
  // green
  '}': [32, 39],
  // green
  ':': [1, 22],
  // bold
  ';': [1, 22],
  // bold
  '(': [1, 22],
  // bold
  ')': [1, 22] // bold

};

function code(color) {
  return "\x1B[" + color + "m";
}

function terminalHighlight(css) {
  var tokens = tokenize(new Input(css), {
    ignoreErrors: true
  });
  var result = [];
  tokens.forEach(function (token) {
    var color = HIGHLIGHT_THEME[token[0]];

    if (color) {
      result.push(token[1].split(/\r?\n/).map(function (i) {
        return code(color[0]) + i + code(color[1]);
      }).join('\n'));
    } else {
      result.push(token[1]);
    }
  });
  return result.join('');
}

/**
 * The CSS parser throws this error for broken CSS.
 *
 * Custom parsers can throw this error for broken custom syntax using
 * the {@link Node#error} method.
 *
 * PostCSS will use the input source map to detect the original error location.
 * If you wrote a Sass file, compiled it to CSS and then parsed it with PostCSS,
 * PostCSS will show the original position in the Sass file.
 *
 * If you need the position in the PostCSS input
 * (e.g., to debug the previous compiler), use `error.input.file`.
 *
 * @example
 * // Catching and checking syntax error
 * try {
 *   postcss.parse('a{')
 * } catch (error) {
 *   if ( error.name === 'CssSyntaxError' ) {
 *     error //=> CssSyntaxError
 *   }
 * }
 *
 * @example
 * // Raising error from plugin
 * throw node.error('Unknown variable', { plugin: 'postcss-vars' });
 */

var CssSyntaxError = /*#__PURE__*/function () {
  /**
   * @param {string} message  - error message
   * @param {number} [line]   - source line of the error
   * @param {number} [column] - source column of the error
   * @param {string} [source] - source code of the broken file
   * @param {string} [file]   - absolute path to the broken file
   * @param {string} [plugin] - PostCSS plugin name, if error came from plugin
   */
  function CssSyntaxError(message, line, column, source, file, plugin) {
    /**
     * @member {string} - Always equal to `'CssSyntaxError'`. You should
     *                    always check error type
     *                    by `error.name === 'CssSyntaxError'` instead of
     *                    `error instanceof CssSyntaxError`, because
     *                    npm could have several PostCSS versions.
     *
     * @example
     * if ( error.name === 'CssSyntaxError' ) {
     *   error //=> CssSyntaxError
     * }
     */
    this.name = 'CssSyntaxError';
    /**
     * @member {string} - Error message.
     *
     * @example
     * error.message //=> 'Unclosed block'
     */

    this.reason = message;

    if (file) {
      /**
       * @member {string} - Absolute path to the broken file.
       *
       * @example
       * error.file       //=> 'a.sass'
       * error.input.file //=> 'a.css'
       */
      this.file = file;
    }

    if (source) {
      /**
       * @member {string} - Source code of the broken file.
       *
       * @example
       * error.source       //=> 'a { b {} }'
       * error.input.column //=> 'a b { }'
       */
      this.source = source;
    }

    if (plugin) {
      /**
       * @member {string} - Plugin name, if error came from plugin.
       *
       * @example
       * error.plugin //=> 'postcss-vars'
       */
      this.plugin = plugin;
    }

    if (typeof line !== 'undefined' && typeof column !== 'undefined') {
      /**
       * @member {number} - Source line of the error.
       *
       * @example
       * error.line       //=> 2
       * error.input.line //=> 4
       */
      this.line = line;
      /**
       * @member {number} - Source column of the error.
       *
       * @example
       * error.column       //=> 1
       * error.input.column //=> 4
       */

      this.column = column;
    }

    this.setMessage();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError);
    }
  }

  var _proto = CssSyntaxError.prototype;

  _proto.setMessage = function setMessage() {
    /**
     * @member {string} - Full error text in the GNU error format
     *                    with plugin, file, line and column.
     *
     * @example
     * error.message //=> 'a.css:1:1: Unclosed block'
     */
    this.message = this.plugin ? this.plugin + ": " : '';
    this.message += this.file ? this.file : '<css input>';

    if (typeof this.line !== 'undefined') {
      this.message += ":" + this.line + ":" + this.column;
    }

    this.message += ": " + this.reason;
  }
  /**
   * Returns a few lines of CSS source that caused the error.
   *
   * If the CSS has an input source map without `sourceContent`,
   * this method will return an empty string.
   *
   * @param {boolean} [color] whether arrow will be colored red by terminal
   *                          color codes. By default, PostCSS will detect
   *                          color support by `process.stdout.isTTY`
   *                          and `process.env.NODE_DISABLE_COLORS`.
   *
   * @example
   * error.showSourceCode() //=> "  4 | }
   *                        //      5 | a {
   *                        //    > 6 |   bad
   *                        //        |   ^
   *                        //      7 | }
   *                        //      8 | b {"
   *
   * @return {string} few lines of CSS source that caused the error
   */
  ;

  _proto.showSourceCode = function showSourceCode(color) {
    var _this = this;

    if (!this.source) return '';
    var css = this.source;
    if (typeof color === 'undefined') color = supportsColor_1;
    if (color) css = terminalHighlight(css);
    var lines = css.split(/\r?\n/);
    var start = Math.max(this.line - 3, 0);
    var end = Math.min(this.line + 2, lines.length);
    var maxWidth = String(end).length;
    return lines.slice(start, end).map(function (line, index) {
      var number = start + 1 + index;
      var padded = (" " + number).slice(-maxWidth);
      var gutter = " " + padded + " | ";

      if (number === _this.line) {
        var spacing = gutter.replace(/\d/g, ' ') + line.slice(0, _this.column - 1).replace(/[^\t]/g, ' ');
        return ">" + gutter + line + "\n " + spacing + "^";
      } else {
        return " " + gutter + line;
      }
    }).join('\n');
  }
  /**
   * Returns error position, message and source code of the broken part.
   *
   * @example
   * error.toString() //=> "CssSyntaxError: app.css:1:1: Unclosed block
   *                  //    > 1 | a {
   *                  //        | ^"
   *
   * @return {string} error position, message and source code
   */
  ;

  _proto.toString = function toString() {
    var code = this.showSourceCode();

    if (code) {
      code = "\n\n" + code + "\n";
    }

    return this.name + ": " + this.message + code;
  };

  _createClass(CssSyntaxError, [{
    key: "generated",
    get: function get() {
      warnOnce('CssSyntaxError#generated is deprecated. Use input instead.');
      return this.input;
    }
    /**
     * @memberof CssSyntaxError#
     * @member {Input} input - Input object with PostCSS internal information
     *                         about input file. If input has source map
     *                         from previous tool, PostCSS will use origin
     *                         (for example, Sass) source. You can use this
     *                         object to get PostCSS input source.
     *
     * @example
     * error.input.file //=> 'a.css'
     * error.file       //=> 'a.sass'
     */

  }]);

  return CssSyntaxError;
}();

// 

/* eslint-disable valid-jsdoc */
var defaultRaw = {
  colon: ': ',
  indent: '    ',
  beforeDecl: '\n',
  beforeRule: '\n',
  beforeOpen: ' ',
  beforeClose: '\n',
  beforeComment: '\n',
  after: '\n',
  emptyBody: '',
  commentLeft: ' ',
  commentRight: ' '
};

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

var Stringifier = /*#__PURE__*/function () {
  function Stringifier(builder) {
    this.builder = builder;
  }

  var _proto = Stringifier.prototype;

  _proto.stringify = function stringify(node, semicolon) {
    this[node.type](node, semicolon);
  };

  _proto.root = function root(node) {
    this.body(node);
    if (node.raws.after) this.builder(node.raws.after);
  };

  _proto.comment = function comment(node) {
    var left = this.raw(node, 'left', 'commentLeft');
    var right = this.raw(node, 'right', 'commentRight');
    this.builder("/*" + left + node.text + right + "*/", node);
  };

  _proto.decl = function decl(node, semicolon) {
    var between = this.raw(node, 'between', 'colon');
    var string = node.prop + between + this.rawValue(node, 'value');

    if (node.important) {
      string += node.raws.important || ' !important';
    }

    if (semicolon) string += ';';
    this.builder(string, node);
  };

  _proto.rule = function rule(node) {
    this.block(node, this.rawValue(node, 'selector'));
  };

  _proto.atrule = function atrule(node, semicolon) {
    var name = "@" + node.name;
    var params = node.params ? this.rawValue(node, 'params') : '';

    if (typeof node.raws.afterName !== 'undefined') {
      name += node.raws.afterName;
    } else if (params) {
      name += ' ';
    }

    if (node.nodes) {
      this.block(node, name + params);
    } else {
      var end = (node.raws.between || '') + (semicolon ? ';' : '');
      this.builder(name + params + end, node);
    }
  };

  _proto.body = function body(node) {
    var last = node.nodes.length - 1;

    while (last > 0) {
      if (node.nodes[last].type !== 'comment') break;
      last -= 1;
    }

    var semicolon = this.raw(node, 'semicolon');

    for (var i = 0; i < node.nodes.length; i++) {
      var child = node.nodes[i];
      var before = this.raw(child, 'before');
      if (before) this.builder(before);
      this.stringify(child, last !== i || semicolon);
    }
  };

  _proto.block = function block(node, start) {
    var between = this.raw(node, 'between', 'beforeOpen');
    this.builder(start + between + "{", node, 'start');
    var after;

    if (node.nodes && node.nodes.length) {
      this.body(node);
      after = this.raw(node, 'after');
    } else {
      after = this.raw(node, 'after', 'emptyBody');
    }

    if (after) this.builder(after);
    this.builder('}', node, 'end');
  };

  _proto.raw = function raw(node, own, detect) {
    var value;
    if (!detect) detect = own; // Already had

    if (own) {
      value = node.raws[own];
      if (typeof value !== 'undefined') return value;
    }

    var parent = node.parent; // Hack for first rule in CSS

    if (detect === 'before') {
      if (!parent || parent.type === 'root' && parent.first === node) {
        return '';
      }
    } // Floating child without parent


    if (!parent) return defaultRaw[detect]; // Detect style by other nodes

    var root = node.root();
    if (!root.rawCache) root.rawCache = {};

    if (typeof root.rawCache[detect] !== 'undefined') {
      return root.rawCache[detect];
    }

    if (detect === 'before' || detect === 'after') {
      return this.beforeAfter(node, detect);
    } else {
      var method = "raw" + capitalize(detect);

      if (this[method]) {
        value = this[method](root, node);
      } else {
        root.walk(function (i) {
          value = i.raws[own];
          if (typeof value !== 'undefined') return false;
        });
      }
    }

    if (typeof value === 'undefined') value = defaultRaw[detect];
    root.rawCache[detect] = value;
    return value;
  };

  _proto.rawSemicolon = function rawSemicolon(root) {
    var value;
    root.walk(function (i) {
      if (i.nodes && i.nodes.length && i.last.type === 'decl') {
        value = i.raws.semicolon;
        if (typeof value !== 'undefined') return false;
      }
    });
    return value;
  };

  _proto.rawEmptyBody = function rawEmptyBody(root) {
    var value;
    root.walk(function (i) {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after;
        if (typeof value !== 'undefined') return false;
      }
    });
    return value;
  };

  _proto.rawIndent = function rawIndent(root) {
    if (root.raws.indent) return root.raws.indent;
    var value;
    root.walk(function (i) {
      var p = i.parent;

      if (p && p !== root && p.parent && p.parent === root) {
        if (typeof i.raws.before !== 'undefined') {
          var parts = i.raws.before.split('\n');
          value = parts[parts.length - 1];
          value = value.replace(/[^\s]/g, '');
          return false;
        }
      }
    });
    return value;
  };

  _proto.rawBeforeComment = function rawBeforeComment(root, node) {
    var value;
    root.walkComments(function (i) {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before;

        if (value.indexOf('\n') !== -1) {
          value = value.replace(/[^\n]+$/, '');
        }

        return false;
      }
    });

    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeDecl');
    }

    return value;
  };

  _proto.rawBeforeDecl = function rawBeforeDecl(root, node) {
    var value;
    root.walkDecls(function (i) {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before;

        if (value.indexOf('\n') !== -1) {
          value = value.replace(/[^\n]+$/, '');
        }

        return false;
      }
    });

    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeRule');
    }

    return value;
  };

  _proto.rawBeforeRule = function rawBeforeRule(root) {
    var value;
    root.walk(function (i) {
      if (i.nodes && (i.parent !== root || root.first !== i)) {
        if (typeof i.raws.before !== 'undefined') {
          value = i.raws.before;

          if (value.indexOf('\n') !== -1) {
            value = value.replace(/[^\n]+$/, '');
          }

          return false;
        }
      }
    });
    return value;
  };

  _proto.rawBeforeClose = function rawBeforeClose(root) {
    var value;
    root.walk(function (i) {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== 'undefined') {
          value = i.raws.after;

          if (value.indexOf('\n') !== -1) {
            value = value.replace(/[^\n]+$/, '');
          }

          return false;
        }
      }
    });
    return value;
  };

  _proto.rawBeforeOpen = function rawBeforeOpen(root) {
    var value;
    root.walk(function (i) {
      if (i.type !== 'decl') {
        value = i.raws.between;
        if (typeof value !== 'undefined') return false;
      }
    });
    return value;
  };

  _proto.rawColon = function rawColon(root) {
    var value;
    root.walkDecls(function (i) {
      if (typeof i.raws.between !== 'undefined') {
        value = i.raws.between.replace(/[^\s:]/g, '');
        return false;
      }
    });
    return value;
  };

  _proto.beforeAfter = function beforeAfter(node, detect) {
    var value;

    if (node.type === 'decl') {
      value = this.raw(node, null, 'beforeDecl');
    } else if (node.type === 'comment') {
      value = this.raw(node, null, 'beforeComment');
    } else if (detect === 'before') {
      value = this.raw(node, null, 'beforeRule');
    } else {
      value = this.raw(node, null, 'beforeClose');
    }

    var buf = node.parent;
    var depth = 0;

    while (buf && buf.type !== 'root') {
      depth += 1;
      buf = buf.parent;
    }

    if (value.indexOf('\n') !== -1) {
      var indent = this.raw(node, null, 'indent');

      if (indent.length) {
        for (var step = 0; step < depth; step++) {
          value += indent;
        }
      }
    }

    return value;
  };

  _proto.rawValue = function rawValue(node, prop) {
    var value = node[prop];
    var raw = node.raws[prop];

    if (raw && raw.value === value) {
      return raw.raw;
    } else {
      return value;
    }
  };

  return Stringifier;
}();

// 
function stringify$1(node, builder) {
  var str = new Stringifier(builder);
  str.stringify(node);
}

/**
 * @typedef {object} position
 * @property {number} line   - source line in file
 * @property {number} column - source column in file
 */

/**
 * @typedef {object} source
 * @property {Input} input    - {@link Input} with input file
 * @property {position} start - The starting position of the node’s source
 * @property {position} end   - The ending position of the node’s source
 */

var cloneNode = function cloneNode(obj, parent) {
  var cloned = new obj.constructor();

  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    var value = obj[i];
    var type = typeof value;

    if (i === 'parent' && type === 'object') {
      if (parent) cloned[i] = parent;
    } else if (i === 'source') {
      cloned[i] = value;
    } else if (value instanceof Array) {
      cloned[i] = value.map(function (j) {
        return cloneNode(j, cloned);
      });
    } else if (i !== 'before' && i !== 'after' && i !== 'between' && i !== 'semicolon') {
      if (type === 'object' && value !== null) value = cloneNode(value);
      cloned[i] = value;
    }
  }

  return cloned;
};
/**
 * All node classes inherit the following common methods.
 *
 * @abstract
 */


var Node = /*#__PURE__*/function () {
  /**
   * @param {object} [defaults] - value for node properties
   */
  function Node(defaults) {
    if (defaults === void 0) {
      defaults = {};
    }

    this.raws = {};

    for (var name in defaults) {
      this[name] = defaults[name];
    }
  }
  /**
   * Returns a CssSyntaxError instance containing the original position
   * of the node in the source, showing line and column numbers and also
   * a small excerpt to facilitate debugging.
   *
   * If present, an input source map will be used to get the original position
   * of the source, even from a previous compilation step
   * (e.g., from Sass compilation).
   *
   * This method produces very useful error messages.
   *
   * @param {string} message     - error description
   * @param {object} [opts]      - options
   * @param {string} opts.plugin - plugin name that created this error.
   *                               PostCSS will set it automatically.
   * @param {string} opts.word   - a word inside a node’s string that should
   *                               be highlighted as the source of the error
   * @param {number} opts.index  - an index inside a node’s string that should
   *                               be highlighted as the source of the error
   *
   * @return {CssSyntaxError} error object to throw it
   *
   * @example
   * if ( !variables[name] ) {
   *   throw decl.error('Unknown variable ' + name, { word: name });
   *   // CssSyntaxError: postcss-vars:a.sass:4:3: Unknown variable $black
   *   //   color: $black
   *   // a
   *   //          ^
   *   //   background: white
   * }
   */


  var _proto = Node.prototype;

  _proto.error = function error(message, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (this.source) {
      var pos = this.positionBy(opts);
      return this.source.input.error(message, pos.line, pos.column, opts);
    } else {
      return new CssSyntaxError(message);
    }
  }
  /**
   * This method is provided as a convenience wrapper for {@link Result#warn}.
   *
   * @param {Result} result      - the {@link Result} instance
   *                               that will receive the warning
   * @param {string} text        - warning message
   * @param {object} [opts]      - options
   * @param {string} opts.plugin - plugin name that created this warning.
   *                               PostCSS will set it automatically.
   * @param {string} opts.word   - a word inside a node’s string that should
   *                               be highlighted as the source of the warning
   * @param {number} opts.index  - an index inside a node’s string that should
   *                               be highlighted as the source of the warning
   *
   * @return {Warning} created warning object
   *
   * @example
   * const plugin = postcss.plugin('postcss-deprecated', () => {
   *   return (root, result) => {
   *     root.walkDecls('bad', decl => {
   *       decl.warn(result, 'Deprecated property bad');
   *     });
   *   };
   * });
   */
  ;

  _proto.warn = function warn(result, text, opts) {
    var data = {
      node: this
    };

    for (var i in opts) {
      data[i] = opts[i];
    }

    return result.warn(text, data);
  }
  /**
   * Removes the node from its parent and cleans the parent properties
   * from the node and its children.
   *
   * @example
   * if ( decl.prop.match(/^-webkit-/) ) {
   *   decl.remove();
   * }
   *
   * @return {Node} node to make calls chain
   */
  ;

  _proto.remove = function remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }

    this.parent = undefined;
    return this;
  }
  /**
   * Returns a CSS string representing the node.
   *
   * @param {stringifier|syntax} [stringifier] - a syntax to use
   *                                             in string generation
   *
   * @return {string} CSS string of this node
   *
   * @example
   * postcss.rule({ selector: 'a' }).toString() //=> "a {}"
   */
  ;

  _proto.toString = function toString(stringifier) {
    if (stringifier === void 0) {
      stringifier = stringify$1;
    }

    if (stringifier.stringify) stringifier = stringifier.stringify;
    var result = '';
    stringifier(this, function (i) {
      result += i;
    });
    return result;
  }
  /**
   * Returns a clone of the node.
   *
   * The resulting cloned node and its (cloned) children will have
   * a clean parent and code style properties.
   *
   * @param {object} [overrides] - new properties to override in the clone.
   *
   * @example
   * const cloned = decl.clone({ prop: '-moz-' + decl.prop });
   * cloned.raws.before  //=> undefined
   * cloned.parent       //=> undefined
   * cloned.toString()   //=> -moz-transform: scale(0)
   *
   * @return {Node} clone of the node
   */
  ;

  _proto.clone = function clone(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }

    var cloned = cloneNode(this);

    for (var name in overrides) {
      cloned[name] = overrides[name];
    }

    return cloned;
  }
  /**
   * Shortcut to clone the node and insert the resulting cloned node
   * before the current node.
   *
   * @param {object} [overrides] - new properties to override in the clone.
   *
   * @example
   * decl.cloneBefore({ prop: '-moz-' + decl.prop });
   *
   * @return {Node} - new node
   */
  ;

  _proto.cloneBefore = function cloneBefore(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }

    var cloned = this.clone(overrides);
    this.parent.insertBefore(this, cloned);
    return cloned;
  }
  /**
   * Shortcut to clone the node and insert the resulting cloned node
   * after the current node.
   *
   * @param {object} [overrides] - new properties to override in the clone.
   *
   * @return {Node} - new node
   */
  ;

  _proto.cloneAfter = function cloneAfter(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }

    var cloned = this.clone(overrides);
    this.parent.insertAfter(this, cloned);
    return cloned;
  }
  /**
   * Inserts node(s) before the current node and removes the current node.
   *
   * @param {...Node} nodes - node(s) to replace current one
   *
   * @example
   * if ( atrule.name == 'mixin' ) {
   *   atrule.replaceWith(mixinRules[atrule.params]);
   * }
   *
   * @return {Node} current node to methods chain
   */
  ;

  _proto.replaceWith = function replaceWith() {
    var _this = this;

    if (this.parent) {
      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }

      nodes.forEach(function (node) {
        _this.parent.insertBefore(_this, node);
      });
      this.remove();
    }

    return this;
  }
  /**
   * Removes the node from its current parent and inserts it
   * at the end of `newParent`.
   *
   * This will clean the `before` and `after` code {@link Node#raws} data
   * from the node and replace them with the indentation style of `newParent`.
   * It will also clean the `between` property
   * if `newParent` is in another {@link Root}.
   *
   * @param {Container} newParent - container node where the current node
   *                                will be moved
   *
   * @example
   * atrule.moveTo(atrule.root());
   *
   * @return {Node} current node to methods chain
   */
  ;

  _proto.moveTo = function moveTo(newParent) {
    this.cleanRaws(this.root() === newParent.root());
    this.remove();
    newParent.append(this);
    return this;
  }
  /**
   * Removes the node from its current parent and inserts it into
   * a new parent before `otherNode`.
   *
   * This will also clean the node’s code style properties just as it would
   * in {@link Node#moveTo}.
   *
   * @param {Node} otherNode - node that will be before current node
   *
   * @return {Node} current node to methods chain
   */
  ;

  _proto.moveBefore = function moveBefore(otherNode) {
    this.cleanRaws(this.root() === otherNode.root());
    this.remove();
    otherNode.parent.insertBefore(otherNode, this);
    return this;
  }
  /**
   * Removes the node from its current parent and inserts it into
   * a new parent after `otherNode`.
   *
   * This will also clean the node’s code style properties just as it would
   * in {@link Node#moveTo}.
   *
   * @param {Node} otherNode - node that will be after current node
   *
   * @return {Node} current node to methods chain
   */
  ;

  _proto.moveAfter = function moveAfter(otherNode) {
    this.cleanRaws(this.root() === otherNode.root());
    this.remove();
    otherNode.parent.insertAfter(otherNode, this);
    return this;
  }
  /**
   * Returns the next child of the node’s parent.
   * Returns `undefined` if the current node is the last child.
   *
   * @return {Node|undefined} next node
   *
   * @example
   * if ( comment.text === 'delete next' ) {
   *   const next = comment.next();
   *   if ( next ) {
   *     next.remove();
   *   }
   * }
   */
  ;

  _proto.next = function next() {
    var index = this.parent.index(this);
    return this.parent.nodes[index + 1];
  }
  /**
   * Returns the previous child of the node’s parent.
   * Returns `undefined` if the current node is the first child.
   *
   * @return {Node|undefined} previous node
   *
   * @example
   * const annotation = decl.prev();
   * if ( annotation.type == 'comment' ) {
   *  readAnnotation(annotation.text);
   * }
   */
  ;

  _proto.prev = function prev() {
    var index = this.parent.index(this);
    return this.parent.nodes[index - 1];
  };

  _proto.toJSON = function toJSON() {
    var fixed = {};

    for (var name in this) {
      if (!this.hasOwnProperty(name)) continue;
      if (name === 'parent') continue;
      var value = this[name];

      if (value instanceof Array) {
        fixed[name] = value.map(function (i) {
          if (typeof i === 'object' && i.toJSON) {
            return i.toJSON();
          } else {
            return i;
          }
        });
      } else if (typeof value === 'object' && value.toJSON) {
        fixed[name] = value.toJSON();
      } else {
        fixed[name] = value;
      }
    }

    return fixed;
  }
  /**
   * Returns a {@link Node#raws} value. If the node is missing
   * the code style property (because the node was manually built or cloned),
   * PostCSS will try to autodetect the code style property by looking
   * at other nodes in the tree.
   *
   * @param {string} prop          - name of code style property
   * @param {string} [defaultType] - name of default value, it can be missed
   *                                 if the value is the same as prop
   *
   * @example
   * const root = postcss.parse('a { background: white }');
   * root.nodes[0].append({ prop: 'color', value: 'black' });
   * root.nodes[0].nodes[1].raws.before   //=> undefined
   * root.nodes[0].nodes[1].raw('before') //=> ' '
   *
   * @return {string} code style value
   */
  ;

  _proto.raw = function raw(prop, defaultType) {
    var str = new Stringifier();
    return str.raw(this, prop, defaultType);
  }
  /**
   * Finds the Root instance of the node’s tree.
   *
   * @example
   * root.nodes[0].nodes[0].root() === root
   *
   * @return {Root} root parent
   */
  ;

  _proto.root = function root() {
    var result = this;

    while (result.parent) {
      result = result.parent;
    }

    return result;
  };

  _proto.cleanRaws = function cleanRaws(keepBetween) {
    delete this.raws.before;
    delete this.raws.after;
    if (!keepBetween) delete this.raws.between;
  };

  _proto.positionInside = function positionInside(index) {
    var string = this.toString();
    var column = this.source.start.column;
    var line = this.source.start.line;

    for (var i = 0; i < index; i++) {
      if (string[i] === '\n') {
        column = 1;
        line += 1;
      } else {
        column += 1;
      }
    }

    return {
      line: line,
      column: column
    };
  };

  _proto.positionBy = function positionBy(opts) {
    var pos = this.source.start;

    if (opts.index) {
      pos = this.positionInside(opts.index);
    } else if (opts.word) {
      var index = this.toString().indexOf(opts.word);
      if (index !== -1) pos = this.positionInside(index);
    }

    return pos;
  };

  _proto.removeSelf = function removeSelf() {
    warnOnce('Node#removeSelf is deprecated. Use Node#remove.');
    return this.remove();
  };

  _proto.replace = function replace(nodes) {
    warnOnce('Node#replace is deprecated. Use Node#replaceWith');
    return this.replaceWith(nodes);
  };

  _proto.style = function style(own, detect) {
    warnOnce('Node#style() is deprecated. Use Node#raw()');
    return this.raw(own, detect);
  };

  _proto.cleanStyles = function cleanStyles(keepBetween) {
    warnOnce('Node#cleanStyles() is deprecated. Use Node#cleanRaws()');
    return this.cleanRaws(keepBetween);
  };

  _createClass(Node, [{
    key: "before",
    get: function get() {
      warnOnce('Node#before is deprecated. Use Node#raws.before');
      return this.raws.before;
    },
    set: function set(val) {
      warnOnce('Node#before is deprecated. Use Node#raws.before');
      this.raws.before = val;
    }
  }, {
    key: "between",
    get: function get() {
      warnOnce('Node#between is deprecated. Use Node#raws.between');
      return this.raws.between;
    },
    set: function set(val) {
      warnOnce('Node#between is deprecated. Use Node#raws.between');
      this.raws.between = val;
    }
    /**
     * @memberof Node#
     * @member {string} type - String representing the node’s type.
     *                         Possible values are `root`, `atrule`, `rule`,
     *                         `decl`, or `comment`.
     *
     * @example
     * postcss.decl({ prop: 'color', value: 'black' }).type //=> 'decl'
     */

    /**
     * @memberof Node#
     * @member {Container} parent - the node’s parent node.
     *
     * @example
     * root.nodes[0].parent == root;
     */

    /**
     * @memberof Node#
     * @member {source} source - the input source of the node
     *
     * The property is used in source map generation.
     *
     * If you create a node manually (e.g., with `postcss.decl()`),
     * that node will not have a `source` property and will be absent
     * from the source map. For this reason, the plugin developer should
     * consider cloning nodes to create new ones (in which case the new node’s
     * source will reference the original, cloned node) or setting
     * the `source` property manually.
     *
     * ```js
     * // Bad
     * const prefixed = postcss.decl({
     *   prop: '-moz-' + decl.prop,
     *   value: decl.value
     * });
     *
     * // Good
     * const prefixed = decl.clone({ prop: '-moz-' + decl.prop });
     * ```
     *
     * ```js
     * if ( atrule.name == 'add-link' ) {
     *   const rule = postcss.rule({ selector: 'a', source: atrule.source });
     *   atrule.parent.insertBefore(atrule, rule);
     * }
     * ```
     *
     * @example
     * decl.source.input.from //=> '/home/ai/a.sass'
     * decl.source.start      //=> { line: 10, column: 2 }
     * decl.source.end        //=> { line: 10, column: 12 }
     */

    /**
     * @memberof Node#
     * @member {object} raws - Information to generate byte-to-byte equal
     *                         node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node. It also stores `*`
     *   and `_` symbols before the declaration (IE hack).
     * * `after`: the space symbols after the last child of the node
     *   to the end of the node.
     * * `between`: the symbols between the property and value
     *   for declarations, selector and `{` for rules, or last parameter
     *   and `{` for at-rules.
     * * `semicolon`: contains true if the last child has
     *   an (optional) semicolon.
     * * `afterName`: the space between the at-rule name and its parameters.
     * * `left`: the space symbols between `/*` and the comment’s text.
     * * `right`: the space symbols between the comment’s text
     *   and <code>*&#47;</code>.
     * * `important`: the content of the important statement,
     *   if it is not just `!important`.
     *
     * PostCSS cleans selectors, declaration values and at-rule parameters
     * from comments and extra spaces, but it stores origin content in raws
     * properties. As such, if you don’t change a declaration’s value,
     * PostCSS will use the raw value with comments.
     *
     * @example
     * const root = postcss.parse('a {\n  color:black\n}')
     * root.first.first.raws //=> { before: '\n  ', between: ':' }
     */

  }]);

  return Node;
}();

/**
 * Represents a CSS declaration.
 *
 * @extends Node
 *
 * @example
 * const root = postcss.parse('a { color: black }');
 * const decl = root.first.first;
 * decl.type       //=> 'decl'
 * decl.toString() //=> ' color: black'
 */

var Declaration = /*#__PURE__*/function (_Node) {
  _inheritsLoose(Declaration, _Node);

  function Declaration(defaults) {
    var _this;

    _this = _Node.call(this, defaults) || this;
    _this.type = 'decl';
    return _this;
  }

  _createClass(Declaration, [{
    key: "_value",
    get: function get() {
      warnOnce('Node#_value was deprecated. Use Node#raws.value');
      return this.raws.value;
    },
    set: function set(val) {
      warnOnce('Node#_value was deprecated. Use Node#raws.value');
      this.raws.value = val;
    }
  }, {
    key: "_important",
    get: function get() {
      warnOnce('Node#_important was deprecated. Use Node#raws.important');
      return this.raws.important;
    },
    set: function set(val) {
      warnOnce('Node#_important was deprecated. Use Node#raws.important');
      this.raws.important = val;
    }
    /**
     * @memberof Declaration#
     * @member {string} prop - the declaration’s property name
     *
     * @example
     * const root = postcss.parse('a { color: black }');
     * const decl = root.first.first;
     * decl.prop //=> 'color'
     */

    /**
     * @memberof Declaration#
     * @member {string} value - the declaration’s value
     *
     * @example
     * const root = postcss.parse('a { color: black }');
     * const decl = root.first.first;
     * decl.value //=> 'black'
     */

    /**
     * @memberof Declaration#
     * @member {boolean} important - `true` if the declaration
     *                               has an !important annotation.
     *
     * @example
     * const root = postcss.parse('a { color: black !important; color: red }');
     * root.first.first.important //=> true
     * root.first.last.important  //=> undefined
     */

    /**
     * @memberof Declaration#
     * @member {object} raws - Information to generate byte-to-byte equal
     *                         node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node. It also stores `*`
     *   and `_` symbols before the declaration (IE hack).
     * * `between`: the symbols between the property and value
     *   for declarations, selector and `{` for rules, or last parameter
     *   and `{` for at-rules.
     * * `important`: the content of the important statement,
     *   if it is not just `!important`.
     *
     * PostCSS cleans declaration from comments and extra spaces,
     * but it stores origin content in raws properties.
     * As such, if you don’t change a declaration’s value,
     * PostCSS will use the raw value with comments.
     *
     * @example
     * const root = postcss.parse('a {\n  color:black\n}')
     * root.first.first.raws //=> { before: '\n  ', between: ':' }
     */

  }]);

  return Declaration;
}(Node);

/**
 * Represents a comment between declarations or statements (rule and at-rules).
 *
 * Comments inside selectors, at-rule parameters, or declaration values
 * will be stored in the `raws` properties explained above.
 *
 * @extends Node
 */

var Comment = /*#__PURE__*/function (_Node) {
  _inheritsLoose(Comment, _Node);

  function Comment(defaults) {
    var _this;

    _this = _Node.call(this, defaults) || this;
    _this.type = 'comment';
    return _this;
  }

  _createClass(Comment, [{
    key: "left",
    get: function get() {
      warnOnce('Comment#left was deprecated. Use Comment#raws.left');
      return this.raws.left;
    },
    set: function set(val) {
      warnOnce('Comment#left was deprecated. Use Comment#raws.left');
      this.raws.left = val;
    }
  }, {
    key: "right",
    get: function get() {
      warnOnce('Comment#right was deprecated. Use Comment#raws.right');
      return this.raws.right;
    },
    set: function set(val) {
      warnOnce('Comment#right was deprecated. Use Comment#raws.right');
      this.raws.right = val;
    }
    /**
     * @memberof Comment#
     * @member {string} text - the comment’s text
     */

    /**
     * @memberof Comment#
     * @member {object} raws - Information to generate byte-to-byte equal
     *                         node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node.
     * * `left`: the space symbols between `/*` and the comment’s text.
     * * `right`: the space symbols between the comment’s text.
     */

  }]);

  return Comment;
}(Node);

// 

var Parser = /*#__PURE__*/function () {
  function Parser(input) {
    this.input = input;
    this.pos = 0;
    this.root = new Root();
    this.current = this.root;
    this.spaces = '';
    this.semicolon = false;
    this.root.source = {
      input: input,
      start: {
        line: 1,
        column: 1
      }
    };
  }

  var _proto = Parser.prototype;

  _proto.tokenize = function tokenize$1() {
    this.tokens = tokenize(this.input);
  };

  _proto.loop = function loop() {
    var token;

    while (this.pos < this.tokens.length) {
      token = this.tokens[this.pos];

      switch (token[0]) {
        case 'space':
        case ';':
          this.spaces += token[1];
          break;

        case '}':
          this.end(token);
          break;

        case 'comment':
          this.comment(token);
          break;

        case 'at-word':
          this.atrule(token);
          break;

        case '{':
          this.emptyRule(token);
          break;

        default:
          this.other();
          break;
      }

      this.pos += 1;
    }

    this.endFile();
  };

  _proto.comment = function comment(token) {
    var node = new Comment();
    this.init(node, token[2], token[3]);
    node.source.end = {
      line: token[4],
      column: token[5]
    };
    var text = token[1].slice(2, -2);

    if (/^\s*$/.test(text)) {
      node.text = '';
      node.raws.left = text;
      node.raws.right = '';
    } else {
      var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
      node.text = match[2];
      node.raws.left = match[1];
      node.raws.right = match[3];
    }
  };

  _proto.emptyRule = function emptyRule(token) {
    var node = new Rule();
    this.init(node, token[2], token[3]);
    node.selector = '';
    node.raws.between = '';
    this.current = node;
  };

  _proto.other = function other() {
    var token;
    var end = false;
    var type = null;
    var colon = false;
    var bracket = null;
    var brackets = [];
    var start = this.pos;

    while (this.pos < this.tokens.length) {
      token = this.tokens[this.pos];
      type = token[0];

      if (type === '(' || type === '[') {
        if (!bracket) bracket = token;
        brackets.push(type === '(' ? ')' : ']');
      } else if (brackets.length === 0) {
        if (type === ';') {
          if (colon) {
            this.decl(this.tokens.slice(start, this.pos + 1));
            return;
          } else {
            break;
          }
        } else if (type === '{') {
          this.rule(this.tokens.slice(start, this.pos + 1));
          return;
        } else if (type === '}') {
          this.pos -= 1;
          end = true;
          break;
        } else if (type === ':') {
          colon = true;
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop();
        if (brackets.length === 0) bracket = null;
      }

      this.pos += 1;
    }

    if (this.pos === this.tokens.length) {
      this.pos -= 1;
      end = true;
    }

    if (brackets.length > 0) this.unclosedBracket(bracket);

    if (end && colon) {
      while (this.pos > start) {
        token = this.tokens[this.pos][0];
        if (token !== 'space' && token !== 'comment') break;
        this.pos -= 1;
      }

      this.decl(this.tokens.slice(start, this.pos + 1));
      return;
    }

    this.unknownWord(start);
  };

  _proto.rule = function rule(tokens) {
    tokens.pop();
    var node = new Rule();
    this.init(node, tokens[0][2], tokens[0][3]);
    node.raws.between = this.spacesFromEnd(tokens);
    this.raw(node, 'selector', tokens);
    this.current = node;
  };

  _proto.decl = function decl(tokens) {
    var node = new Declaration();
    this.init(node);
    var last = tokens[tokens.length - 1];

    if (last[0] === ';') {
      this.semicolon = true;
      tokens.pop();
    }

    if (last[4]) {
      node.source.end = {
        line: last[4],
        column: last[5]
      };
    } else {
      node.source.end = {
        line: last[2],
        column: last[3]
      };
    }

    while (tokens[0][0] !== 'word') {
      node.raws.before += tokens.shift()[1];
    }

    node.source.start = {
      line: tokens[0][2],
      column: tokens[0][3]
    };
    node.prop = '';

    while (tokens.length) {
      var type = tokens[0][0];

      if (type === ':' || type === 'space' || type === 'comment') {
        break;
      }

      node.prop += tokens.shift()[1];
    }

    node.raws.between = '';
    var token;

    while (tokens.length) {
      token = tokens.shift();

      if (token[0] === ':') {
        node.raws.between += token[1];
        break;
      } else {
        node.raws.between += token[1];
      }
    }

    if (node.prop[0] === '_' || node.prop[0] === '*') {
      node.raws.before += node.prop[0];
      node.prop = node.prop.slice(1);
    }

    node.raws.between += this.spacesFromStart(tokens);
    this.precheckMissedSemicolon(tokens);

    for (var i = tokens.length - 1; i > 0; i--) {
      token = tokens[i];

      if (token[1] === '!important') {
        node.important = true;
        var string = this.stringFrom(tokens, i);
        string = this.spacesFromEnd(tokens) + string;
        if (string !== ' !important') node.raws.important = string;
        break;
      } else if (token[1] === 'important') {
        var cache = tokens.slice(0);
        var str = '';

        for (var j = i; j > 0; j--) {
          var _type = cache[j][0];

          if (str.trim().indexOf('!') === 0 && _type !== 'space') {
            break;
          }

          str = cache.pop()[1] + str;
        }

        if (str.trim().indexOf('!') === 0) {
          node.important = true;
          node.raws.important = str;
          tokens = cache;
        }
      }

      if (token[0] !== 'space' && token[0] !== 'comment') {
        break;
      }
    }

    this.raw(node, 'value', tokens);
    if (node.value.indexOf(':') !== -1) this.checkMissedSemicolon(tokens);
  };

  _proto.atrule = function atrule(token) {
    var node = new AtRule();
    node.name = token[1].slice(1);

    if (node.name === '') {
      this.unnamedAtrule(node, token);
    }

    this.init(node, token[2], token[3]);
    var last = false;
    var open = false;
    var params = [];
    this.pos += 1;

    while (this.pos < this.tokens.length) {
      token = this.tokens[this.pos];

      if (token[0] === ';') {
        node.source.end = {
          line: token[2],
          column: token[3]
        };
        this.semicolon = true;
        break;
      } else if (token[0] === '{') {
        open = true;
        break;
      } else if (token[0] === '}') {
        this.end(token);
        break;
      } else {
        params.push(token);
      }

      this.pos += 1;
    }

    if (this.pos === this.tokens.length) {
      last = true;
    }

    node.raws.between = this.spacesFromEnd(params);

    if (params.length) {
      node.raws.afterName = this.spacesFromStart(params);
      this.raw(node, 'params', params);

      if (last) {
        token = params[params.length - 1];
        node.source.end = {
          line: token[4],
          column: token[5]
        };
        this.spaces = node.raws.between;
        node.raws.between = '';
      }
    } else {
      node.raws.afterName = '';
      node.params = '';
    }

    if (open) {
      node.nodes = [];
      this.current = node;
    }
  };

  _proto.end = function end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }

    this.semicolon = false;
    this.current.raws.after = (this.current.raws.after || '') + this.spaces;
    this.spaces = '';

    if (this.current.parent) {
      this.current.source.end = {
        line: token[2],
        column: token[3]
      };
      this.current = this.current.parent;
    } else {
      this.unexpectedClose(token);
    }
  };

  _proto.endFile = function endFile() {
    if (this.current.parent) this.unclosedBlock();

    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }

    this.current.raws.after = (this.current.raws.after || '') + this.spaces;
  } // Helpers
  ;

  _proto.init = function init(node, line, column) {
    this.current.push(node);
    node.source = {
      start: {
        line: line,
        column: column
      },
      input: this.input
    };
    node.raws.before = this.spaces;
    this.spaces = '';
    if (node.type !== 'comment') this.semicolon = false;
  };

  _proto.raw = function raw(node, prop, tokens) {
    var token, type;
    var length = tokens.length;
    var value = '';
    var clean = true;

    for (var i = 0; i < length; i += 1) {
      token = tokens[i];
      type = token[0];

      if (type === 'comment' || type === 'space' && i === length - 1) {
        clean = false;
      } else {
        value += token[1];
      }
    }

    if (!clean) {
      var raw = tokens.reduce(function (all, i) {
        return all + i[1];
      }, '');
      node.raws[prop] = {
        value: value,
        raw: raw
      };
    }

    node[prop] = value;
  };

  _proto.spacesFromEnd = function spacesFromEnd(tokens) {
    var lastTokenType;
    var spaces = '';

    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0];
      if (lastTokenType !== 'space' && lastTokenType !== 'comment') break;
      spaces = tokens.pop()[1] + spaces;
    }

    return spaces;
  };

  _proto.spacesFromStart = function spacesFromStart(tokens) {
    var next;
    var spaces = '';

    while (tokens.length) {
      next = tokens[0][0];
      if (next !== 'space' && next !== 'comment') break;
      spaces += tokens.shift()[1];
    }

    return spaces;
  };

  _proto.stringFrom = function stringFrom(tokens, from) {
    var result = '';

    for (var i = from; i < tokens.length; i++) {
      result += tokens[i][1];
    }

    tokens.splice(from, tokens.length - from);
    return result;
  };

  _proto.colon = function colon(tokens) {
    var brackets = 0;
    var token, type, prev;

    for (var i = 0; i < tokens.length; i++) {
      token = tokens[i];
      type = token[0];

      if (type === '(') {
        brackets += 1;
      } else if (type === ')') {
        brackets -= 1;
      } else if (brackets === 0 && type === ':') {
        if (!prev) {
          this.doubleColon(token);
        } else if (prev[0] === 'word' && prev[1] === 'progid') {
          continue;
        } else {
          return i;
        }
      }

      prev = token;
    }

    return false;
  } // Errors
  ;

  _proto.unclosedBracket = function unclosedBracket(bracket) {
    throw this.input.error('Unclosed bracket', bracket[2], bracket[3]);
  };

  _proto.unknownWord = function unknownWord(start) {
    var token = this.tokens[start];
    throw this.input.error('Unknown word', token[2], token[3]);
  };

  _proto.unexpectedClose = function unexpectedClose(token) {
    throw this.input.error('Unexpected }', token[2], token[3]);
  };

  _proto.unclosedBlock = function unclosedBlock() {
    var pos = this.current.source.start;
    throw this.input.error('Unclosed block', pos.line, pos.column);
  };

  _proto.doubleColon = function doubleColon(token) {
    throw this.input.error('Double colon', token[2], token[3]);
  };

  _proto.unnamedAtrule = function unnamedAtrule(node, token) {
    throw this.input.error('At-rule without name', token[2], token[3]);
  };

  _proto.precheckMissedSemicolon = function precheckMissedSemicolon(tokens) {
  };

  _proto.checkMissedSemicolon = function checkMissedSemicolon(tokens) {
    var colon = this.colon(tokens);
    if (colon === false) return;
    var founded = 0;
    var token;

    for (var j = colon - 1; j >= 0; j--) {
      token = tokens[j];

      if (token[0] !== 'space') {
        founded += 1;
        if (founded === 2) break;
      }
    }

    throw this.input.error('Missed semicolon', token[2], token[3]);
  };

  return Parser;
}();

// 
function parse$1(css, opts) {
  if (opts && opts.safe) {
    throw new Error('Option safe was removed. ' + 'Use parser: require("postcss-safe-parser")');
  }

  var input = new Input(css, opts);
  var parser = new Parser(input);

  try {
    parser.tokenize();
    parser.loop();
  } catch (e) {
    if (e.name === 'CssSyntaxError' && opts && opts.from) {
      if (/\.scss$/i.test(opts.from)) {
        e.message += '\nYou tried to parse SCSS with ' + 'the standard CSS parser; ' + 'try again with the postcss-scss parser';
      } else if (/\.less$/i.test(opts.from)) {
        e.message += '\nYou tried to parse Less with ' + 'the standard CSS parser; ' + 'try again with the postcss-less parser';
      }
    }

    throw e;
  }

  return parser.root;
}

function cleanSource(nodes) {
  return nodes.map(function (i) {
    if (i.nodes) i.nodes = cleanSource(i.nodes);
    delete i.source;
    return i;
  });
}
/**
 * @callback childCondition
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @param {Node[]} nodes - all container children
 * @return {boolean}
 */

/**
 * @callback childIterator
 * @param {Node} node    - container child
 * @param {number} index - child index
 * @return {false|undefined} returning `false` will break iteration
 */

/**
 * The {@link Root}, {@link AtRule}, and {@link Rule} container nodes
 * inherit some common methods to help work with their children.
 *
 * Note that all containers can store any content. If you write a rule inside
 * a rule, PostCSS will parse it.
 *
 * @extends Node
 * @abstract
 */


var Container = /*#__PURE__*/function (_Node) {
  _inheritsLoose(Container, _Node);

  function Container() {
    return _Node.apply(this, arguments) || this;
  }

  var _proto = Container.prototype;

  _proto.push = function push(child) {
    child.parent = this;
    this.nodes.push(child);
    return this;
  }
  /**
   * Iterates through the container’s immediate children,
   * calling `callback` for each child.
   *
   * Returning `false` in the callback will break iteration.
   *
   * This method only iterates through the container’s immediate children.
   * If you need to recursively iterate through all the container’s descendant
   * nodes, use {@link Container#walk}.
   *
   * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
   * if you are mutating the array of child nodes during iteration.
   * PostCSS will adjust the current index to match the mutations.
   *
   * @param {childIterator} callback - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * const root = postcss.parse('a { color: black; z-index: 1 }');
   * const rule = root.first;
   *
   * for ( let decl of rule.nodes ) {
   *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
   *     // Cycle will be infinite, because cloneBefore moves the current node
   *     // to the next index
   * }
   *
   * rule.each(decl => {
   *     decl.cloneBefore({ prop: '-webkit-' + decl.prop });
   *     // Will be executed only for color and z-index
   * });
   */
  ;

  _proto.each = function each(callback) {
    if (!this.lastEach) this.lastEach = 0;
    if (!this.indexes) this.indexes = {};
    this.lastEach += 1;
    var id = this.lastEach;
    this.indexes[id] = 0;
    if (!this.nodes) return undefined;
    var index, result;

    while (this.indexes[id] < this.nodes.length) {
      index = this.indexes[id];
      result = callback(this.nodes[index], index);
      if (result === false) break;
      this.indexes[id] += 1;
    }

    delete this.indexes[id];
    return result;
  }
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each node.
   *
   * Like container.each(), this method is safe to use
   * if you are mutating arrays during iteration.
   *
   * If you only need to iterate through the container’s immediate children,
   * use {@link Container#each}.
   *
   * @param {childIterator} callback - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * root.walk(node => {
   *   // Traverses all descendant nodes.
   * });
   */
  ;

  _proto.walk = function walk(callback) {
    return this.each(function (child, i) {
      var result = callback(child, i);

      if (result !== false && child.walk) {
        result = child.walk(callback);
      }

      return result;
    });
  }
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each declaration node.
   *
   * If you pass a filter, iteration will only happen over declarations
   * with matching properties.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [prop]   - string or regular expression
   *                                   to filter declarations by property name
   * @param {childIterator} callback - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * root.walkDecls(decl => {
   *   checkPropertySupport(decl.prop);
   * });
   *
   * root.walkDecls('border-radius', decl => {
   *   decl.remove();
   * });
   *
   * root.walkDecls(/^background/, decl => {
   *   decl.value = takeFirstColorFromGradient(decl.value);
   * });
   */
  ;

  _proto.walkDecls = function walkDecls(prop, callback) {
    if (!callback) {
      callback = prop;
      return this.walk(function (child, i) {
        if (child.type === 'decl') {
          return callback(child, i);
        }
      });
    } else if (prop instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'decl' && prop.test(child.prop)) {
          return callback(child, i);
        }
      });
    } else {
      return this.walk(function (child, i) {
        if (child.type === 'decl' && child.prop === prop) {
          return callback(child, i);
        }
      });
    }
  }
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each rule node.
   *
   * If you pass a filter, iteration will only happen over rules
   * with matching selectors.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [selector] - string or regular expression
   *                                     to filter rules by selector
   * @param {childIterator} callback   - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * const selectors = [];
   * root.walkRules(rule => {
   *   selectors.push(rule.selector);
   * });
   * console.log(`Your CSS uses ${selectors.length} selectors`);
   */
  ;

  _proto.walkRules = function walkRules(selector, callback) {
    if (!callback) {
      callback = selector;
      return this.walk(function (child, i) {
        if (child.type === 'rule') {
          return callback(child, i);
        }
      });
    } else if (selector instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'rule' && selector.test(child.selector)) {
          return callback(child, i);
        }
      });
    } else {
      return this.walk(function (child, i) {
        if (child.type === 'rule' && child.selector === selector) {
          return callback(child, i);
        }
      });
    }
  }
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each at-rule node.
   *
   * If you pass a filter, iteration will only happen over at-rules
   * that have matching names.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {string|RegExp} [name]   - string or regular expression
   *                                   to filter at-rules by name
   * @param {childIterator} callback - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * root.walkAtRules(rule => {
   *   if ( isOld(rule.name) ) rule.remove();
   * });
   *
   * let first = false;
   * root.walkAtRules('charset', rule => {
   *   if ( !first ) {
   *     first = true;
   *   } else {
   *     rule.remove();
   *   }
   * });
   */
  ;

  _proto.walkAtRules = function walkAtRules(name, callback) {
    if (!callback) {
      callback = name;
      return this.walk(function (child, i) {
        if (child.type === 'atrule') {
          return callback(child, i);
        }
      });
    } else if (name instanceof RegExp) {
      return this.walk(function (child, i) {
        if (child.type === 'atrule' && name.test(child.name)) {
          return callback(child, i);
        }
      });
    } else {
      return this.walk(function (child, i) {
        if (child.type === 'atrule' && child.name === name) {
          return callback(child, i);
        }
      });
    }
  }
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each comment node.
   *
   * Like {@link Container#each}, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param {childIterator} callback - iterator receives each node and index
   *
   * @return {false|undefined} returns `false` if iteration was broke
   *
   * @example
   * root.walkComments(comment => {
   *   comment.remove();
   * });
   */
  ;

  _proto.walkComments = function walkComments(callback) {
    return this.walk(function (child, i) {
      if (child.type === 'comment') {
        return callback(child, i);
      }
    });
  }
  /**
   * Inserts new nodes to the start of the container.
   *
   * @param {...(Node|object|string|Node[])} children - new nodes
   *
   * @return {Node} this node for methods chain
   *
   * @example
   * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
   * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
   * rule.append(decl1, decl2);
   *
   * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
   * root.append({ selector: 'a' });                       // rule
   * rule.append({ prop: 'color', value: 'black' });       // declaration
   * rule.append({ text: 'Comment' })                      // comment
   *
   * root.append('a {}');
   * root.first.append('color: black; z-index: 1');
   */
  ;

  _proto.append = function append() {
    var _this = this;

    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    children.forEach(function (child) {
      var nodes = _this.normalize(child, _this.last);

      nodes.forEach(function (node) {
        return _this.nodes.push(node);
      });
    });
    return this;
  }
  /**
   * Inserts new nodes to the end of the container.
   *
   * @param {...(Node|object|string|Node[])} children - new nodes
   *
   * @return {Node} this node for methods chain
   *
   * @example
   * const decl1 = postcss.decl({ prop: 'color', value: 'black' });
   * const decl2 = postcss.decl({ prop: 'background-color', value: 'white' });
   * rule.prepend(decl1, decl2);
   *
   * root.append({ name: 'charset', params: '"UTF-8"' });  // at-rule
   * root.append({ selector: 'a' });                       // rule
   * rule.append({ prop: 'color', value: 'black' });       // declaration
   * rule.append({ text: 'Comment' })                      // comment
   *
   * root.append('a {}');
   * root.first.append('color: black; z-index: 1');
   */
  ;

  _proto.prepend = function prepend() {
    var _this2 = this;

    for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    children = children.reverse();
    children.forEach(function (child) {
      var nodes = _this2.normalize(child, _this2.first, 'prepend').reverse();

      nodes.forEach(function (node) {
        return _this2.nodes.unshift(node);
      });

      for (var id in _this2.indexes) {
        _this2.indexes[id] = _this2.indexes[id] + nodes.length;
      }
    });
    return this;
  };

  _proto.cleanRaws = function cleanRaws(keepBetween) {
    _Node.prototype.cleanRaws.call(this, keepBetween);

    if (this.nodes) {
      this.nodes.forEach(function (node) {
        return node.cleanRaws(keepBetween);
      });
    }
  }
  /**
   * Insert new node before old node within the container.
   *
   * @param {Node|number} exist             - child or child’s index.
   * @param {Node|object|string|Node[]} add - new node
   *
   * @return {Node} this node for methods chain
   *
   * @example
   * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }));
   */
  ;

  _proto.insertBefore = function insertBefore(exist, add) {
    var _this3 = this;

    exist = this.index(exist);
    var type = exist === 0 ? 'prepend' : false;
    var nodes = this.normalize(add, this.nodes[exist], type).reverse();
    nodes.forEach(function (node) {
      return _this3.nodes.splice(exist, 0, node);
    });
    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (exist <= index) {
        this.indexes[id] = index + nodes.length;
      }
    }

    return this;
  }
  /**
   * Insert new node after old node within the container.
   *
   * @param {Node|number} exist             - child or child’s index
   * @param {Node|object|string|Node[]} add - new node
   *
   * @return {Node} this node for methods chain
   */
  ;

  _proto.insertAfter = function insertAfter(exist, add) {
    var _this4 = this;

    exist = this.index(exist);
    var nodes = this.normalize(add, this.nodes[exist]).reverse();
    nodes.forEach(function (node) {
      return _this4.nodes.splice(exist + 1, 0, node);
    });
    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (exist < index) {
        this.indexes[id] = index + nodes.length;
      }
    }

    return this;
  };

  _proto.remove = function remove(child) {
    if (typeof child !== 'undefined') {
      warnOnce('Container#remove is deprecated. ' + 'Use Container#removeChild');
      this.removeChild(child);
    } else {
      _Node.prototype.remove.call(this);
    }

    return this;
  }
  /**
   * Removes node from the container and cleans the parent properties
   * from the node and its children.
   *
   * @param {Node|number} child - child or child’s index
   *
   * @return {Node} this node for methods chain
   *
   * @example
   * rule.nodes.length  //=> 5
   * rule.removeChild(decl);
   * rule.nodes.length  //=> 4
   * decl.parent        //=> undefined
   */
  ;

  _proto.removeChild = function removeChild(child) {
    child = this.index(child);
    this.nodes[child].parent = undefined;
    this.nodes.splice(child, 1);
    var index;

    for (var id in this.indexes) {
      index = this.indexes[id];

      if (index >= child) {
        this.indexes[id] = index - 1;
      }
    }

    return this;
  }
  /**
   * Removes all children from the container
   * and cleans their parent properties.
   *
   * @return {Node} this node for methods chain
   *
   * @example
   * rule.removeAll();
   * rule.nodes.length //=> 0
   */
  ;

  _proto.removeAll = function removeAll() {
    this.nodes.forEach(function (node) {
      return node.parent = undefined;
    });
    this.nodes = [];
    return this;
  }
  /**
     * Passes all declaration values within the container that match pattern
     * through callback, replacing those values with the returned result
     * of callback.
     *
     * This method is useful if you are using a custom unit or function
     * and need to iterate through all values.
     *
     * @param {string|RegExp} pattern      - replace pattern
     * @param {object} opts                - options to speed up the search
     * @param {string|string[]} opts.props - an array of property names
     * @param {string} opts.fast           - string that’s used
     *                                       to narrow down values and speed up
                                             the regexp search
     * @param {function|string} callback   - string to replace pattern
     *                                       or callback that returns a new
     *                                       value.
     *                                       The callback will receive
     *                                       the same arguments as those
     *                                       passed to a function parameter
     *                                       of `String#replace`.
     *
     * @return {Node} this node for methods chain
     *
     * @example
     * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
     *   return 15 * parseInt(string) + 'px';
     * });
     */
  ;

  _proto.replaceValues = function replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts;
      opts = {};
    }

    this.walkDecls(function (decl) {
      if (opts.props && opts.props.indexOf(decl.prop) === -1) return;
      if (opts.fast && decl.value.indexOf(opts.fast) === -1) return;
      decl.value = decl.value.replace(pattern, callback);
    });
    return this;
  }
  /**
   * Returns `true` if callback returns `true`
   * for all of the container’s children.
   *
   * @param {childCondition} condition - iterator returns true or false.
   *
   * @return {boolean} is every child pass condition
   *
   * @example
   * const noPrefixes = rule.every(i => i.prop[0] !== '-');
   */
  ;

  _proto.every = function every(condition) {
    return this.nodes.every(condition);
  }
  /**
   * Returns `true` if callback returns `true` for (at least) one
   * of the container’s children.
   *
   * @param {childCondition} condition - iterator returns true or false.
   *
   * @return {boolean} is some child pass condition
   *
   * @example
   * const hasPrefix = rule.some(i => i.prop[0] === '-');
   */
  ;

  _proto.some = function some(condition) {
    return this.nodes.some(condition);
  }
  /**
   * Returns a `child`’s index within the {@link Container#nodes} array.
   *
   * @param {Node} child - child of the current container.
   *
   * @return {number} child index
   *
   * @example
   * rule.index( rule.nodes[2] ) //=> 2
   */
  ;

  _proto.index = function index(child) {
    if (typeof child === 'number') {
      return child;
    } else {
      return this.nodes.indexOf(child);
    }
  }
  /**
   * The container’s first child.
   *
   * @type {Node}
   *
   * @example
   * rule.first == rules.nodes[0];
   */
  ;

  _proto.normalize = function normalize(nodes, sample) {
    var _this5 = this;

    if (typeof nodes === 'string') {
      nodes = cleanSource(parse$1(nodes).nodes);
    } else if (!Array.isArray(nodes)) {
      if (nodes.type === 'root') {
        nodes = nodes.nodes;
      } else if (nodes.type) {
        nodes = [nodes];
      } else if (nodes.prop) {
        if (typeof nodes.value === 'undefined') {
          throw new Error('Value field is missed in node creation');
        } else if (typeof nodes.value !== 'string') {
          nodes.value = String(nodes.value);
        }

        nodes = [new Declaration(nodes)];
      } else if (nodes.selector) {
        nodes = [new Rule(nodes)];
      } else if (nodes.name) {
        nodes = [new AtRule(nodes)];
      } else if (nodes.text) {
        nodes = [new Comment(nodes)];
      } else {
        throw new Error('Unknown node type in node creation');
      }
    }

    var processed = nodes.map(function (i) {
      if (typeof i.raws === 'undefined') i = _this5.rebuild(i);
      if (i.parent) i = i.clone();

      if (typeof i.raws.before === 'undefined') {
        if (sample && typeof sample.raws.before !== 'undefined') {
          i.raws.before = sample.raws.before.replace(/[^\s]/g, '');
        }
      }

      i.parent = _this5;
      return i;
    });
    return processed;
  };

  _proto.rebuild = function rebuild(node, parent) {
    var _this6 = this;

    var fix;

    if (node.type === 'root') {
      fix = new Root();
    } else if (node.type === 'atrule') {
      fix = new AtRule();
    } else if (node.type === 'rule') {
      fix = new Rule();
    } else if (node.type === 'decl') {
      fix = new Declaration();
    } else if (node.type === 'comment') {
      fix = new Comment();
    }

    for (var i in node) {
      if (i === 'nodes') {
        fix.nodes = node.nodes.map(function (j) {
          return _this6.rebuild(j, fix);
        });
      } else if (i === 'parent' && parent) {
        fix.parent = parent;
      } else if (node.hasOwnProperty(i)) {
        fix[i] = node[i];
      }
    }

    return fix;
  };

  _proto.eachInside = function eachInside(callback) {
    warnOnce('Container#eachInside is deprecated. ' + 'Use Container#walk instead.');
    return this.walk(callback);
  };

  _proto.eachDecl = function eachDecl(prop, callback) {
    warnOnce('Container#eachDecl is deprecated. ' + 'Use Container#walkDecls instead.');
    return this.walkDecls(prop, callback);
  };

  _proto.eachRule = function eachRule(selector, callback) {
    warnOnce('Container#eachRule is deprecated. ' + 'Use Container#walkRules instead.');
    return this.walkRules(selector, callback);
  };

  _proto.eachAtRule = function eachAtRule(name, callback) {
    warnOnce('Container#eachAtRule is deprecated. ' + 'Use Container#walkAtRules instead.');
    return this.walkAtRules(name, callback);
  };

  _proto.eachComment = function eachComment(callback) {
    warnOnce('Container#eachComment is deprecated. ' + 'Use Container#walkComments instead.');
    return this.walkComments(callback);
  };

  _createClass(Container, [{
    key: "first",
    get: function get() {
      if (!this.nodes) return undefined;
      return this.nodes[0];
    }
    /**
     * The container’s last child.
     *
     * @type {Node}
     *
     * @example
     * rule.last == rule.nodes[rule.nodes.length - 1];
     */

  }, {
    key: "last",
    get: function get() {
      if (!this.nodes) return undefined;
      return this.nodes[this.nodes.length - 1];
    }
  }, {
    key: "semicolon",
    get: function get() {
      warnOnce('Node#semicolon is deprecated. Use Node#raws.semicolon');
      return this.raws.semicolon;
    },
    set: function set(val) {
      warnOnce('Node#semicolon is deprecated. Use Node#raws.semicolon');
      this.raws.semicolon = val;
    }
  }, {
    key: "after",
    get: function get() {
      warnOnce('Node#after is deprecated. Use Node#raws.after');
      return this.raws.after;
    },
    set: function set(val) {
      warnOnce('Node#after is deprecated. Use Node#raws.after');
      this.raws.after = val;
    }
    /**
     * @memberof Container#
     * @member {Node[]} nodes - an array containing the container’s children
     *
     * @example
     * const root = postcss.parse('a { color: black }');
     * root.nodes.length           //=> 1
     * root.nodes[0].selector      //=> 'a'
     * root.nodes[0].nodes[0].prop //=> 'color'
     */

  }]);

  return Container;
}(Node);

/**
 * Represents an at-rule.
 *
 * If it’s followed in the CSS by a {} block, this node will have
 * a nodes property representing its children.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('@charset "UTF-8"; @media print {}');
 *
 * const charset = root.first;
 * charset.type  //=> 'atrule'
 * charset.nodes //=> undefined
 *
 * const media = root.last;
 * media.nodes   //=> []
 */

var AtRule = /*#__PURE__*/function (_Container) {
  _inheritsLoose(AtRule, _Container);

  function AtRule(defaults) {
    var _this;

    _this = _Container.call(this, defaults) || this;
    _this.type = 'atrule';
    return _this;
  }

  var _proto = AtRule.prototype;

  _proto.append = function append() {
    var _Container$prototype$;

    if (!this.nodes) this.nodes = [];

    for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
      children[_key] = arguments[_key];
    }

    return (_Container$prototype$ = _Container.prototype.append).call.apply(_Container$prototype$, [this].concat(children));
  };

  _proto.prepend = function prepend() {
    var _Container$prototype$2;

    if (!this.nodes) this.nodes = [];

    for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      children[_key2] = arguments[_key2];
    }

    return (_Container$prototype$2 = _Container.prototype.prepend).call.apply(_Container$prototype$2, [this].concat(children));
  };

  _createClass(AtRule, [{
    key: "afterName",
    get: function get() {
      warnOnce('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
      return this.raws.afterName;
    },
    set: function set(val) {
      warnOnce('AtRule#afterName was deprecated. Use AtRule#raws.afterName');
      this.raws.afterName = val;
    }
  }, {
    key: "_params",
    get: function get() {
      warnOnce('AtRule#_params was deprecated. Use AtRule#raws.params');
      return this.raws.params;
    },
    set: function set(val) {
      warnOnce('AtRule#_params was deprecated. Use AtRule#raws.params');
      this.raws.params = val;
    }
    /**
     * @memberof AtRule#
     * @member {string} name - the at-rule’s name immediately follows the `@`
     *
     * @example
     * const root  = postcss.parse('@media print {}');
     * media.name //=> 'media'
     * const media = root.first;
     */

    /**
     * @memberof AtRule#
     * @member {string} params - the at-rule’s parameters, the values
     *                           that follow the at-rule’s name but precede
     *                           any {} block
     *
     * @example
     * const root  = postcss.parse('@media print, screen {}');
     * const media = root.first;
     * media.params //=> 'print, screen'
     */

    /**
     * @memberof AtRule#
     * @member {object} raws - Information to generate byte-to-byte equal
     *                         node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node. It also stores `*`
     *   and `_` symbols before the declaration (IE hack).
     * * `after`: the space symbols after the last child of the node
     *   to the end of the node.
     * * `between`: the symbols between the property and value
     *   for declarations, selector and `{` for rules, or last parameter
     *   and `{` for at-rules.
     * * `semicolon`: contains true if the last child has
     *   an (optional) semicolon.
     * * `afterName`: the space between the at-rule name and its parameters.
     *
     * PostCSS cleans at-rule parameters from comments and extra spaces,
     * but it stores origin content in raws properties.
     * As such, if you don’t change a declaration’s value,
     * PostCSS will use the raw value with comments.
     *
     * @example
     * const root = postcss.parse('  @media\nprint {\n}')
     * root.first.first.raws //=> { before: '  ',
     *                       //     between: ' ',
     *                       //     afterName: '\n',
     *                       //     after: '\n' }
     */

  }]);

  return AtRule;
}(Container);

// 

/**
 * Contains helpers for safely splitting lists of CSS values,
 * preserving parentheses and quotes.
 *
 * @example
 * const list = postcss.list;
 *
 * @namespace list
 */
var list = {
  split: function split(string, separators, last) {
    var array = [];
    var current = '';
    var split = false;
    var func = 0;
    var quote = false;
    var escape = false;

    for (var i = 0; i < string.length; i++) {
      var letter = string[i];

      if (quote) {
        if (escape) {
          escape = false;
        } else if (letter === '\\') {
          escape = true;
        } else if (letter === quote) {
          quote = false;
        }
      } else if (letter === '"' || letter === "'") {
        quote = letter;
      } else if (letter === '(') {
        func += 1;
      } else if (letter === ')') {
        if (func > 0) func -= 1;
      } else if (func === 0) {
        if (separators.indexOf(letter) !== -1) split = true;
      }

      if (split) {
        if (current !== '') array.push(current.trim());
        current = '';
        split = false;
      } else {
        current += letter;
      }
    }

    if (last || current !== '') array.push(current.trim());
    return array;
  },

  /**
   * Safely splits space-separated values (such as those for `background`,
   * `border-radius`, and other shorthand properties).
   *
   * @param {string} string - space-separated values
   *
   * @return {string[]} splitted values
   *
   * @example
   * postcss.list.space('1px calc(10% + 1px)') //=> ['1px', 'calc(10% + 1px)']
   */
  space: function space(string) {
    var spaces = [' ', '\n', '\t'];
    return list.split(string, spaces);
  },

  /**
   * Safely splits comma-separated values (such as those for `transition-*`
   * and `background` properties).
   *
   * @param {string} string - comma-separated values
   *
   * @return {string[]} splitted values
   *
   * @example
   * postcss.list.comma('black, linear-gradient(white, black)')
   * //=> ['black', 'linear-gradient(white, black)']
   */
  comma: function comma(string) {
    var comma = ',';
    return list.split(string, [comma], true);
  }
};

/**
 * Represents a CSS rule: a selector followed by a declaration block.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{}');
 * const rule = root.first;
 * rule.type       //=> 'rule'
 * rule.toString() //=> 'a{}'
 */

var Rule = /*#__PURE__*/function (_Container) {
  _inheritsLoose(Rule, _Container);

  function Rule(defaults) {
    var _this;

    _this = _Container.call(this, defaults) || this;
    _this.type = 'rule';
    if (!_this.nodes) _this.nodes = [];
    return _this;
  }
  /**
   * An array containing the rule’s individual selectors.
   * Groups of selectors are split at commas.
   *
   * @type {string[]}
   *
   * @example
   * const root = postcss.parse('a, b { }');
   * const rule = root.first;
   *
   * rule.selector  //=> 'a, b'
   * rule.selectors //=> ['a', 'b']
   *
   * rule.selectors = ['a', 'strong'];
   * rule.selector //=> 'a, strong'
   */


  _createClass(Rule, [{
    key: "selectors",
    get: function get() {
      return list.comma(this.selector);
    },
    set: function set(values) {
      var match = this.selector ? this.selector.match(/,\s*/) : null;
      var sep = match ? match[0] : "," + this.raw('between', 'beforeOpen');
      this.selector = values.join(sep);
    }
  }, {
    key: "_selector",
    get: function get() {
      warnOnce('Rule#_selector is deprecated. Use Rule#raws.selector');
      return this.raws.selector;
    },
    set: function set(val) {
      warnOnce('Rule#_selector is deprecated. Use Rule#raws.selector');
      this.raws.selector = val;
    }
    /**
     * @memberof Rule#
     * @member {string} selector - the rule’s full selector represented
     *                             as a string
     *
     * @example
     * const root = postcss.parse('a, b { }');
     * const rule = root.first;
     * rule.selector //=> 'a, b'
     */

    /**
     * @memberof Rule#
     * @member {object} raws - Information to generate byte-to-byte equal
     *                         node string as it was in the origin input.
     *
     * Every parser saves its own properties,
     * but the default CSS parser uses:
     *
     * * `before`: the space symbols before the node. It also stores `*`
     *   and `_` symbols before the declaration (IE hack).
     * * `after`: the space symbols after the last child of the node
     *   to the end of the node.
     * * `between`: the symbols between the property and value
     *   for declarations, selector and `{` for rules, or last parameter
     *   and `{` for at-rules.
     * * `semicolon`: contains true if the last child has
     *   an (optional) semicolon.
     *
     * PostCSS cleans selectors from comments and extra spaces,
     * but it stores origin content in raws properties.
     * As such, if you don’t change a declaration’s value,
     * PostCSS will use the raw value with comments.
     *
     * @example
     * const root = postcss.parse('a {\n  color:black\n}')
     * root.first.first.raws //=> { before: '', between: ' ', after: '\n' }
     */

  }]);

  return Rule;
}(Container);

// 

/**
 * Represents a plugin’s warning. It can be created using {@link Node#warn}.
 *
 * @example
 * if ( decl.important ) {
 *     decl.warn(result, 'Avoid !important', { word: '!important' });
 * }
 */
var Warning = /*#__PURE__*/function () {
  /**
   * @param {string} text        - warning message
   * @param {Object} [opts]      - warning options
   * @param {Node}   opts.node   - CSS node that caused the warning
   * @param {string} opts.word   - word in CSS source that caused the warning
   * @param {number} opts.index  - index in CSS node string that caused
   *                               the warning
   * @param {string} opts.plugin - name of the plugin that created
   *                               this warning. {@link Result#warn} fills
   *                               this property automatically.
   */
  function Warning(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    /**
     * @member {string} - Type to filter warnings from
     *                    {@link Result#messages}. Always equal
     *                    to `"warning"`.
     *
     * @example
     * const nonWarning = result.messages.filter(i => i.type !== 'warning')
     */
    this.type = 'warning';
    /**
     * @member {string} - The warning message.
     *
     * @example
     * warning.text //=> 'Try to avoid !important'
     */

    this.text = text;

    if (opts.node && opts.node.source) {
      var pos = opts.node.positionBy(opts);
      /**
       * @member {number} - Line in the input file
       *                    with this warning’s source
       *
       * @example
       * warning.line //=> 5
       */

      this.line = pos.line;
      /**
       * @member {number} - Column in the input file
       *                    with this warning’s source.
       *
       * @example
       * warning.column //=> 6
       */

      this.column = pos.column;
    }

    for (var opt in opts) {
      this[opt] = opts[opt];
    }
  }
  /**
   * Returns a warning position and message.
   *
   * @example
   * warning.toString() //=> 'postcss-lint:a.css:10:14: Avoid !important'
   *
   * @return {string} warning position and message
   */


  var _proto = Warning.prototype;

  _proto.toString = function toString() {
    if (this.node) {
      return this.node.error(this.text, {
        plugin: this.plugin,
        index: this.index,
        word: this.word
      }).message;
    } else if (this.plugin) {
      return this.plugin + ": " + this.text;
    } else {
      return this.text;
    }
  }
  /**
   * @memberof Warning#
   * @member {string} plugin - The name of the plugin that created
   *                           it will fill this property automatically.
   *                           this warning. When you call {@link Node#warn}
   *
   * @example
   * warning.plugin //=> 'postcss-important'
   */

  /**
   * @memberof Warning#
   * @member {Node} node - Contains the CSS node that caused the warning.
   *
   * @example
   * warning.node.toString() //=> 'color: white !important'
   */
  ;

  return Warning;
}();

/**
 * @typedef  {object} Message
 * @property {string} type   - message type
 * @property {string} plugin - source PostCSS plugin name
 */

/**
 * Provides the result of the PostCSS transformations.
 *
 * A Result instance is returned by {@link LazyResult#then}
 * or {@link Root#toResult} methods.
 *
 * @example
 * postcss([cssnext]).process(css).then(function (result) {
 *    console.log(result.css);
 * });
 *
 * @example
 * var result2 = postcss.parse(css).toResult();
 */

var Result = /*#__PURE__*/function () {
  /**
   * @param {Processor} processor - processor used for this transformation.
   * @param {Root}      root      - Root node after all transformations.
   * @param {processOptions} opts - options from the {@link Processor#process}
   *                                or {@link Root#toResult}
   */
  function Result(processor, root, opts) {
    /**
     * @member {Processor} - The Processor instance used
     *                       for this transformation.
     *
     * @example
     * for ( let plugin of result.processor.plugins) {
     *   if ( plugin.postcssPlugin === 'postcss-bad' ) {
     *     throw 'postcss-good is incompatible with postcss-bad';
     *   }
     * });
     */
    this.processor = processor;
    /**
     * @member {Message[]} - Contains messages from plugins
     *                       (e.g., warnings or custom messages).
     *                       Each message should have type
     *                       and plugin properties.
     *
     * @example
     * postcss.plugin('postcss-min-browser', () => {
     *   return (root, result) => {
     *     var browsers = detectMinBrowsersByCanIUse(root);
     *     result.messages.push({
     *       type:    'min-browser',
     *       plugin:  'postcss-min-browser',
     *       browsers: browsers
     *     });
     *   };
     * });
     */

    this.messages = [];
    /**
     * @member {Root} - Root node after all transformations.
     *
     * @example
     * root.toResult().root == root;
     */

    this.root = root;
    /**
     * @member {processOptions} - Options from the {@link Processor#process}
     *                            or {@link Root#toResult} call
     *                            that produced this Result instance.
     *
     * @example
     * root.toResult(opts).opts == opts;
     */

    this.opts = opts;
    /**
     * @member {string} - A CSS string representing of {@link Result#root}.
     *
     * @example
     * postcss.parse('a{}').toResult().css //=> "a{}"
     */

    this.css = undefined;
    /**
     * @member {SourceMapGenerator} - An instance of `SourceMapGenerator`
     *                                class from the `source-map` library,
     *                                representing changes
     *                                to the {@link Result#root} instance.
     *
     * @example
     * result.map.toJSON() //=> { version: 3, file: 'a.css', … }
     *
     * @example
     * if ( result.map ) {
     *   fs.writeFileSync(result.opts.to + '.map', result.map.toString());
     * }
     */

    this.map = undefined;
  }
  /**
   * Returns for @{link Result#css} content.
   *
   * @example
   * result + '' === result.css
   *
   * @return {string} string representing of {@link Result#root}
   */


  var _proto = Result.prototype;

  _proto.toString = function toString() {
    return this.css;
  }
  /**
   * Creates an instance of {@link Warning} and adds it
   * to {@link Result#messages}.
   *
   * @param {string} text        - warning message
   * @param {Object} [opts]      - warning options
   * @param {Node}   opts.node   - CSS node that caused the warning
   * @param {string} opts.word   - word in CSS source that caused the warning
   * @param {number} opts.index  - index in CSS node string that caused
   *                               the warning
   * @param {string} opts.plugin - name of the plugin that created
   *                               this warning. {@link Result#warn} fills
   *                               this property automatically.
   *
   * @return {Warning} created warning
   */
  ;

  _proto.warn = function warn(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin;
      }
    }

    var warning = new Warning(text, opts);
    this.messages.push(warning);
    return warning;
  }
  /**
   * Returns warnings from plugins. Filters {@link Warning} instances
   * from {@link Result#messages}.
   *
   * @example
   * result.warnings().forEach(warn => {
   *   console.warn(warn.toString());
   * });
   *
   * @return {Warning[]} warnings from plugins
   */
  ;

  _proto.warnings = function warnings() {
    return this.messages.filter(function (i) {
      return i.type === 'warning';
    });
  }
  /**
   * An alias for the {@link Result#css} property.
   * Use it with syntaxes that generate non-CSS output.
   * @type {string}
   *
   * @example
   * result.css === result.content;
   */
  ;

  _createClass(Result, [{
    key: "content",
    get: function get() {
      return this.css;
    }
  }]);

  return Result;
}();

function isPromise(obj) {
  return typeof obj === 'object' && typeof obj.then === 'function';
}
/**
 * @callback onFulfilled
 * @param {Result} result
 */

/**
 * @callback onRejected
 * @param {Error} error
 */

/**
 * A Promise proxy for the result of PostCSS transformations.
 *
 * A `LazyResult` instance is returned by {@link Processor#process}.
 *
 * @example
 * const lazy = postcss([cssnext]).process(css);
 */


var LazyResult = /*#__PURE__*/function () {
  function LazyResult(processor, css, opts) {
    this.stringified = false;
    this.processed = false;
    var root;

    if (typeof css === 'object' && css.type === 'root') {
      root = css;
    } else if (css instanceof LazyResult || css instanceof Result) {
      root = css.root;

      if (css.map) {
        if (typeof opts.map === 'undefined') opts.map = {};
        if (!opts.map.inline) opts.map.inline = false;
        opts.map.prev = css.map;
      }
    } else {
      var parser = parse$1;
      if (opts.syntax) parser = opts.syntax.parse;
      if (opts.parser) parser = opts.parser;
      if (parser.parse) parser = parser.parse;

      try {
        root = parser(css, opts);
      } catch (error) {
        this.error = error;
      }
    }

    this.result = new Result(processor, root, opts);
  }
  /**
   * Returns a {@link Processor} instance, which will be used
   * for CSS transformations.
   * @type {Processor}
   */


  var _proto = LazyResult.prototype;

  /**
   * Processes input CSS through synchronous plugins
   * and calls {@link Result#warnings()}.
   *
   * @return {Warning[]} warnings from plugins
   */
  _proto.warnings = function warnings() {
    return this.sync().warnings();
  }
  /**
   * Alias for the {@link LazyResult#css} property.
   *
   * @example
   * lazy + '' === lazy.css;
   *
   * @return {string} output CSS
   */
  ;

  _proto.toString = function toString() {
    return this.css;
  }
  /**
   * Processes input CSS through synchronous and asynchronous plugins
   * and calls `onFulfilled` with a Result instance. If a plugin throws
   * an error, the `onRejected` callback will be executed.
   *
   * It implements standard Promise API.
   *
   * @param {onFulfilled} onFulfilled - callback will be executed
   *                                    when all plugins will finish work
   * @param {onRejected}  onRejected  - callback will be execited on any error
   *
   * @return {Promise} Promise API to make queue
   *
   * @example
   * postcss([cssnext]).process(css).then(result => {
   *   console.log(result.css);
   * });
   */
  ;

  _proto.then = function then(onFulfilled, onRejected) {
    return this.async().then(onFulfilled, onRejected);
  }
  /**
   * Processes input CSS through synchronous and asynchronous plugins
   * and calls onRejected for each error thrown in any plugin.
   *
   * It implements standard Promise API.
   *
   * @param {onRejected} onRejected - callback will be execited on any error
   *
   * @return {Promise} Promise API to make queue
   *
   * @example
   * postcss([cssnext]).process(css).then(result => {
   *   console.log(result.css);
   * }).catch(error => {
   *   console.error(error);
   * });
   */
  ;

  _proto["catch"] = function _catch(onRejected) {
    return this.async()["catch"](onRejected);
  };

  _proto.handleError = function handleError(error, plugin) {
    try {
      this.error = error;

      if (error.name === 'CssSyntaxError' && !error.plugin) {
        error.plugin = plugin.postcssPlugin;
        error.setMessage();
      } else if (plugin.postcssVersion) {
        var pluginName = plugin.postcssPlugin;
        var pluginVer = plugin.postcssVersion;
        var runtimeVer = this.result.processor.version;
        var a = pluginVer.split('.');
        var b = runtimeVer.split('.');

        if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
          warnOnce("" + ('Your current PostCSS version ' + 'is ') + runtimeVer + ", but " + pluginName + " " + ("uses " + pluginVer + ". Perhaps this is ") + "the source of the error below.");
        }
      }
    } catch (err) {
      if (console && console.error) console.error(err);
    }
  };

  _proto.asyncTick = function asyncTick(resolve, reject) {
    var _this = this;

    if (this.plugin >= this.processor.plugins.length) {
      this.processed = true;
      return resolve();
    }

    try {
      var plugin = this.processor.plugins[this.plugin];
      var promise = this.run(plugin);
      this.plugin += 1;

      if (isPromise(promise)) {
        promise.then(function () {
          _this.asyncTick(resolve, reject);
        })["catch"](function (error) {
          _this.handleError(error, plugin);

          _this.processed = true;
          reject(error);
        });
      } else {
        this.asyncTick(resolve, reject);
      }
    } catch (error) {
      this.processed = true;
      reject(error);
    }
  };

  _proto.async = function async() {
    var _this2 = this;

    if (this.processed) {
      return new Promise(function (resolve, reject) {
        if (_this2.error) {
          reject(_this2.error);
        } else {
          resolve(_this2.stringify());
        }
      });
    }

    if (this.processing) {
      return this.processing;
    }

    this.processing = new Promise(function (resolve, reject) {
      if (_this2.error) return reject(_this2.error);
      _this2.plugin = 0;

      _this2.asyncTick(resolve, reject);
    }).then(function () {
      _this2.processed = true;
      return _this2.stringify();
    });
    return this.processing;
  };

  _proto.sync = function sync() {
    var _this3 = this;

    if (this.processed) return this.result;
    this.processed = true;

    if (this.processing) {
      throw new Error('Use process(css).then(cb) to work with async plugins');
    }

    if (this.error) throw this.error;
    this.result.processor.plugins.forEach(function (plugin) {
      var promise = _this3.run(plugin);

      if (isPromise(promise)) {
        throw new Error('Use process(css).then(cb) to work with async plugins');
      }
    });
    return this.result;
  };

  _proto.run = function run(plugin) {
    this.result.lastPlugin = plugin;

    try {
      return plugin(this.result.root, this.result);
    } catch (error) {
      this.handleError(error, plugin);
      throw error;
    }
  };

  _proto.stringify = function stringify$1$1() {
    if (this.stringified) return this.result;
    this.stringified = true;
    this.sync();
    var opts = this.result.opts;
    var str = stringify$1;
    if (opts.syntax) str = opts.syntax.stringify;
    if (opts.stringifier) str = opts.stringifier;
    if (str.stringify) str = str.stringify;
    var result = '';
    str(this.root, function (i) {
      result += i;
    });
    this.result.css = result;
    return this.result;
  };

  _createClass(LazyResult, [{
    key: "processor",
    get: function get() {
      return this.result.processor;
    }
    /**
     * Options from the {@link Processor#process} call.
     * @type {processOptions}
     */

  }, {
    key: "opts",
    get: function get() {
      return this.result.opts;
    }
    /**
     * Processes input CSS through synchronous plugins, converts `Root`
     * to a CSS string and returns {@link Result#css}.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {string}
     * @see Result#css
     */

  }, {
    key: "css",
    get: function get() {
      return this.stringify().css;
    }
    /**
     * An alias for the `css` property. Use it with syntaxes
     * that generate non-CSS output.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {string}
     * @see Result#content
     */

  }, {
    key: "content",
    get: function get() {
      return this.stringify().content;
    }
    /**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#map}.
     *
     * This property will only work with synchronous plugins.
     * If the processor contains any asynchronous plugins
     * it will throw an error. This is why this method is only
     * for debug purpose, you should always use {@link LazyResult#then}.
     *
     * @type {SourceMapGenerator}
     * @see Result#map
     */

  }, {
    key: "map",
    get: function get() {
      return this.stringify().map;
    }
    /**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#root}.
     *
     * This property will only work with synchronous plugins. If the processor
     * contains any asynchronous plugins it will throw an error.
     *
     * This is why this method is only for debug purpose,
     * you should always use {@link LazyResult#then}.
     *
     * @type {Root}
     * @see Result#root
     */

  }, {
    key: "root",
    get: function get() {
      return this.sync().root;
    }
    /**
     * Processes input CSS through synchronous plugins
     * and returns {@link Result#messages}.
     *
     * This property will only work with synchronous plugins. If the processor
     * contains any asynchronous plugins it will throw an error.
     *
     * This is why this method is only for debug purpose,
     * you should always use {@link LazyResult#then}.
     *
     * @type {Message[]}
     * @see Result#messages
     */

  }, {
    key: "messages",
    get: function get() {
      return this.sync().messages;
    }
  }]);

  return LazyResult;
}();

// 
/**
 * @callback builder
 * @param {string} part          - part of generated CSS connected to this node
 * @param {Node}   node          - AST node
 * @param {"start"|"end"} [type] - node’s part type
 */

/**
 * @callback parser
 *
 * @param {string|toString} css   - string with input CSS or any object
 *                                  with toString() method, like a Buffer
 * @param {processOptions} [opts] - options with only `from` and `map` keys
 *
 * @return {Root} PostCSS AST
 */

/**
 * @callback stringifier
 *
 * @param {Node} node       - start node for stringifing. Usually {@link Root}.
 * @param {builder} builder - function to concatenate CSS from node’s parts
 *                            or generate string and source map
 *
 * @return {void}
 */

/**
 * @typedef {object} syntax
 * @property {parser} parse          - function to generate AST by string
 * @property {stringifier} stringify - function to generate string by AST
 */

/**
 * @typedef {object} toString
 * @property {function} toString
 */

/**
 * @callback pluginFunction
 * @param {Root} root     - parsed input CSS
 * @param {Result} result - result to set warnings or check other plugins
 */

/**
 * @typedef {object} Plugin
 * @property {function} postcss - PostCSS plugin function
 */

/**
 * @typedef {object} processOptions
 * @property {string} from             - the path of the CSS source file.
 *                                       You should always set `from`,
 *                                       because it is used in source map
 *                                       generation and syntax error messages.
 * @property {string} to               - the path where you’ll put the output
 *                                       CSS file. You should always set `to`
 *                                       to generate correct source maps.
 * @property {parser} parser           - function to generate AST by string
 * @property {stringifier} stringifier - class to generate string by AST
 * @property {syntax} syntax           - object with `parse` and `stringify`
 * @property {object} map              - source map options
 * @property {boolean} map.inline                    - does source map should
 *                                                     be embedded in the output
 *                                                     CSS as a base64-encoded
 *                                                     comment
 * @property {string|object|false|function} map.prev - source map content
 *                                                     from a previous
 *                                                     processing step
 *                                                     (for example, Sass).
 *                                                     PostCSS will try to find
 *                                                     previous map
 *                                                     automatically, so you
 *                                                     could disable it by
 *                                                     `false` value.
 * @property {boolean} map.sourcesContent            - does PostCSS should set
 *                                                     the origin content to map
 * @property {string|false} map.annotation           - does PostCSS should set
 *                                                     annotation comment to map
 * @property {string} map.from                       - override `from` in map’s
 *                                                     `sources`
 */

/**
 * Contains plugins to process CSS. Create one `Processor` instance,
 * initialize its plugins, and then use that instance on numerous CSS files.
 *
 * @example
 * const processor = postcss([autoprefixer, precss]);
 * processor.process(css1).then(result => console.log(result.css));
 * processor.process(css2).then(result => console.log(result.css));
 */

var Processor = /*#__PURE__*/function () {
  /**
   * @param {Array.<Plugin|pluginFunction>|Processor} plugins - PostCSS
   *        plugins. See {@link Processor#use} for plugin format.
   */
  function Processor(plugins) {
    if (plugins === void 0) {
      plugins = [];
    }

    /**
     * @member {string} - Current PostCSS version.
     *
     * @example
     * if ( result.processor.version.split('.')[0] !== '5' ) {
     *   throw new Error('This plugin works only with PostCSS 5');
     * }
     */
    this.version = '5.2.0';
    /**
     * @member {pluginFunction[]} - Plugins added to this processor.
     *
     * @example
     * const processor = postcss([autoprefixer, precss]);
     * processor.plugins.length //=> 2
     */

    this.plugins = this.normalize(plugins);
  }
  /**
   * Adds a plugin to be used as a CSS processor.
   *
   * PostCSS plugin can be in 4 formats:
   * * A plugin created by {@link postcss.plugin} method.
   * * A function. PostCSS will pass the function a @{link Root}
   *   as the first argument and current {@link Result} instance
   *   as the second.
   * * An object with a `postcss` method. PostCSS will use that method
   *   as described in #2.
   * * Another {@link Processor} instance. PostCSS will copy plugins
   *   from that instance into this one.
   *
   * Plugins can also be added by passing them as arguments when creating
   * a `postcss` instance (see [`postcss(plugins)`]).
   *
   * Asynchronous plugins should return a `Promise` instance.
   *
   * @param {Plugin|pluginFunction|Processor} plugin - PostCSS plugin
   *                                                   or {@link Processor}
   *                                                   with plugins
   *
   * @example
   * const processor = postcss()
   *   .use(autoprefixer)
   *   .use(precss);
   *
   * @return {Processes} current processor to make methods chain
   */


  var _proto = Processor.prototype;

  _proto.use = function use(plugin) {
    this.plugins = this.plugins.concat(this.normalize([plugin]));
    return this;
  }
  /**
   * Parses source CSS and returns a {@link LazyResult} Promise proxy.
   * Because some plugins can be asynchronous it doesn’t make
   * any transformations. Transformations will be applied
   * in the {@link LazyResult} methods.
   *
   * @param {string|toString|Result} css - String with input CSS or
   *                                       any object with a `toString()`
   *                                       method, like a Buffer.
   *                                       Optionally, send a {@link Result}
   *                                       instance and the processor will
   *                                       take the {@link Root} from it.
   * @param {processOptions} [opts]      - options
   *
   * @return {LazyResult} Promise proxy
   *
   * @example
   * processor.process(css, { from: 'a.css', to: 'a.out.css' })
   *   .then(result => {
   *      console.log(result.css);
   *   });
   */
  ;

  _proto.process = function process(css, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return new LazyResult(this, css, opts);
  };

  _proto.normalize = function normalize(plugins) {
    var normalized = [];
    plugins.forEach(function (i) {
      if (i.postcss) i = i.postcss;

      if (typeof i === 'object' && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins);
      } else if (typeof i === 'function') {
        normalized.push(i);
      } else {
        throw new Error(i + " is not a PostCSS plugin");
      }
    });
    return normalized;
  };

  return Processor;
}();

/**
 * Represents a CSS file and contains all its parsed nodes.
 *
 * @extends Container
 *
 * @example
 * const root = postcss.parse('a{color:black} b{z-index:2}');
 * root.type         //=> 'root'
 * root.nodes.length //=> 2
 */

var Root = /*#__PURE__*/function (_Container) {
  _inheritsLoose(Root, _Container);

  function Root(defaults) {
    var _this;

    _this = _Container.call(this, defaults) || this;
    _this.type = 'root';
    if (!_this.nodes) _this.nodes = [];
    return _this;
  }

  var _proto = Root.prototype;

  _proto.removeChild = function removeChild(child) {
    child = this.index(child);

    if (child === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[child].raws.before;
    }

    return _Container.prototype.removeChild.call(this, child);
  };

  _proto.normalize = function normalize(child, sample, type) {
    var nodes = _Container.prototype.normalize.call(this, child);

    if (sample) {
      if (type === 'prepend') {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before;
        } else {
          delete sample.raws.before;
        }
      } else if (this.first !== sample) {
        nodes.forEach(function (node) {
          node.raws.before = sample.raws.before;
        });
      }
    }

    return nodes;
  }
  /**
   * Returns a {@link Result} instance representing the root’s CSS.
   *
   * @param {processOptions} [opts] - options with only `to` and `map` keys
   *
   * @return {Result} result with current root’s CSS
   *
   * @example
   * const root1 = postcss.parse(css1, { from: 'a.css' });
   * const root2 = postcss.parse(css2, { from: 'b.css' });
   * root1.append(root2);
   * const result = root1.toResult({ to: 'all.css', map: true });
   */
  ;

  _proto.toResult = function toResult(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var lazy = new LazyResult(new Processor(), this, opts);
    return lazy.stringify();
  };

  _proto.remove = function remove(child) {
    warnOnce('Root#remove is deprecated. Use Root#removeChild');
    this.removeChild(child);
  };

  _proto.prevMap = function prevMap() {
    warnOnce('Root#prevMap is deprecated. Use Root#source.input.map');
    return this.source.input.map;
  }
  /**
   * @memberof Root#
   * @member {object} raws - Information to generate byte-to-byte equal
   *                         node string as it was in the origin input.
   *
   * Every parser saves its own properties,
   * but the default CSS parser uses:
   *
   * * `after`: the space symbols after the last child to the end of file.
   * * `semicolon`: is the last child has an (optional) semicolon.
   *
   * @example
   * postcss.parse('a {}\n').raws //=> { after: '\n' }
   * postcss.parse('a {}').raws   //=> { after: '' }
   */
  ;

  return Root;
}(Container);

var sequence = 0;
/**
 * @typedef  {object} filePosition
 * @property {string} file   - path to file
 * @property {number} line   - source line in file
 * @property {number} column - source column in file
 */

/**
 * Represents the source CSS.
 *
 * @example
 * const root  = postcss.parse(css, { from: file });
 * const input = root.source.input;
 */

var Input = /*#__PURE__*/function () {
  /**
   * @param {string} css    - input CSS source
   * @param {object} [opts] - {@link Processor#process} options
   */
  function Input(css, opts) {
    if (opts === void 0) {
      opts = {};
    }

    /**
     * @member {string} - input CSS source
     *
     * @example
     * const input = postcss.parse('a{}', { from: file }).input;
     * input.css //=> "a{}";
     */
    this.css = css.toString();

    if (this.css[0] === "\uFEFF" || this.css[0] === "\uFFFE") {
      this.css = this.css.slice(1);
    }

    if (opts.from) {
      if (/^\w+:\/\//.test(opts.from)) {
        /**
         * @member {string} - The absolute path to the CSS source file
         *                    defined with the `from` option.
         *
         * @example
         * const root = postcss.parse(css, { from: 'a.css' });
         * root.source.input.file //=> '/home/ai/a.css'
         */
        this.file = opts.from;
      } else {
        this.file = path.resolve(opts.from);
      }
    }
    /*
        let map = new PreviousMap(this.css, opts);
        if ( map.text ) {
            /!**
             * @member {PreviousMap} - The input source map passed from
             *                         a compilation step before PostCSS
             *                         (for example, from Sass compiler).
             *
             * @example
             * root.source.input.map.consumer().sources //=> ['a.sass']
             *!/
            this.map = map;
            let file = map.consumer().file;
            if ( !this.file && file ) this.file = this.mapResolve(file);
        }
    */


    if (!this.file) {
      sequence += 1;
      /**
       * @member {string} - The unique ID of the CSS source. It will be
       *                    created if `from` option is not provided
       *                    (because PostCSS does not know the file path).
       *
       * @example
       * const root = postcss.parse(css);
       * root.source.input.file //=> undefined
       * root.source.input.id   //=> "<input css 1>"
       */

      this.id = "<input css " + sequence + ">";
    }

    if (this.map) this.map.file = this.from;
  }

  var _proto = Input.prototype;

  _proto.error = function error(message, line, column, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var result;
    var origin = this.origin(line, column);

    if (origin) {
      result = new CssSyntaxError(message, origin.line, origin.column, origin.source, origin.file, opts.plugin);
    } else {
      result = new CssSyntaxError(message, line, column, this.css, this.file, opts.plugin);
    }

    result.input = {
      line: line,
      column: column,
      source: this.css
    };
    if (this.file) result.input.file = this.file;
    return result;
  }
  /**
   * Reads the input source map and returns a symbol position
   * in the input source (e.g., in a Sass file that was compiled
   * to CSS before being passed to PostCSS).
   *
   * @param {number} line   - line in input CSS
   * @param {number} column - column in input CSS
   *
   * @return {filePosition} position in input source
   *
   * @example
   * root.source.input.origin(1, 1) //=> { file: 'a.css', line: 3, column: 1 }
   */
  ;

  _proto.origin = function origin(line, column) {
    if (!this.map) return false;
    var consumer = this.map.consumer();
    var from = consumer.originalPositionFor({
      line: line,
      column: column
    });
    if (!from.source) return false;
    var result = {
      file: this.mapResolve(from.source),
      line: from.line,
      column: from.column
    };
    var source = consumer.sourceContentFor(from.source);
    if (source) result.source = source;
    return result;
  };

  _proto.mapResolve = function mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file;
    } else {
      return path.resolve(this.map.consumer().sourceRoot || '.', file);
    }
  }
  /**
   * The CSS source identifier. Contains {@link Input#file} if the user
   * set the `from` option, or {@link Input#id} if they did not.
   * @type {string}
   *
   * @example
   * const root = postcss.parse(css, { from: 'a.css' });
   * root.source.input.from //=> "/home/ai/a.css"
   *
   * const root = postcss.parse(css);
   * root.source.input.from //=> "<input css 1>"
   */
  ;

  _createClass(Input, [{
    key: "from",
    get: function get() {
      return this.file || this.id;
    }
  }]);

  return Input;
}();

var SafeParser = /*#__PURE__*/function (_Parser) {
  _inheritsLoose(SafeParser, _Parser);

  function SafeParser() {
    return _Parser.apply(this, arguments) || this;
  }

  var _proto = SafeParser.prototype;

  _proto.tokenize = function tokenize$1() {
    this.tokens = tokenize(this.input, {
      ignoreErrors: true
    });
  };

  _proto.comment = function comment(token) {
    var node = new Comment();
    this.init(node, token[2], token[3]);
    node.source.end = {
      line: token[4],
      column: token[5]
    };
    var text = token[1].slice(2);
    if (text.slice(-2) === '*/') text = text.slice(0, -2);

    if (/^\s*$/.test(text)) {
      node.text = '';
      node.raws.left = text;
      node.raws.right = '';
    } else {
      var match = text.match(/^(\s*)([^]*[^\s])(\s*)$/);
      node.text = match[2];
      node.raws.left = match[1];
      node.raws.right = match[3];
    }
  };

  _proto.unclosedBracket = function unclosedBracket() {};

  _proto.unknownWord = function unknownWord(start) {
    var buffer = this.tokens.slice(start, this.pos + 1);
    this.spaces += buffer.map(function (i) {
      return i[1];
    }).join('');
  };

  _proto.unexpectedClose = function unexpectedClose() {
    this.current.raws.after += '}';
  };

  _proto.doubleColon = function doubleColon() {};

  _proto.unnamedAtrule = function unnamedAtrule(node) {
    node.name = '';
  };

  _proto.precheckMissedSemicolon = function precheckMissedSemicolon(tokens) {
    var colon = this.colon(tokens);
    if (colon === false) return;
    var split;

    for (split = colon - 1; split >= 0; split--) {
      if (tokens[split][0] === 'word') break;
    }

    for (split -= 1; split >= 0; split--) {
      if (tokens[split][0] !== 'space') {
        split += 1;
        break;
      }
    }

    var other = tokens.splice(split, tokens.length - split);
    this.decl(other);
  };

  _proto.checkMissedSemicolon = function checkMissedSemicolon() {};

  _proto.endFile = function endFile() {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon;
    }

    this.current.raws.after = (this.current.raws.after || '') + this.spaces;

    while (this.current.parent) {
      this.current = this.current.parent;
      this.current.raws.after = '';
    }
  };

  return SafeParser;
}(Parser);

// 
function safeParse(css, opts) {
  var input = new Input(css, opts);
  var parser = new SafeParser(input);
  parser.tokenize();
  parser.loop();
  return parser.root;
}

// 
var generated = {};
/*
 InlineStyle takes arbitrary CSS and generates a flat object
 */

var _InlineStyle = (function (styleSheet) {
  var InlineStyle = /*#__PURE__*/function () {
    function InlineStyle(rules) {
      this.rules = rules;
    }

    var _proto = InlineStyle.prototype;

    _proto.generateStyleObject = function generateStyleObject(executionContext) {
      var flatCSS = flatten(this.rules, executionContext).join('');
      var hash = generateComponentId(flatCSS);

      if (!generated[hash]) {
        var root = safeParse(flatCSS);
        var declPairs = [];
        root.each(function (node) {
          if (node.type === 'decl') {
            declPairs.push([node.prop, node.value]);
          } else if ( node.type !== 'comment') {
            /* eslint-disable no-console */
            console.warn("Node of type " + node.type + " not supported as an inline style");
          }
        }); // RN currently does not support differing values for the corner radii of Image
        // components (but does for View). It is almost impossible to tell whether we'll have
        // support, so we'll just disable multiple values here.
        // https://github.com/styled-components/css-to-react-native/issues/11

        var styleObject = transformDeclPairs(declPairs, ['borderRadius', 'borderWidth', 'borderColor', 'borderStyle']);
        var styles = styleSheet.create({
          generated: styleObject
        });
        generated[hash] = styles.generated;
      }

      return generated[hash];
    };

    return InlineStyle;
  }();

  return InlineStyle;
});

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
function isTag(target) {
  return typeof target === 'string' && ( target.charAt(0) === target.charAt(0).toLowerCase() );
}

// 
function generateDisplayName(target) {
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

var ThemeContext = React__default.createContext();
var ThemeConsumer = ThemeContext.Consumer;

// if the user makes use of ThemeProvider or StyleSheetManager things will break.
// Validator defaults to true if not in HTML/DOM env

var validAttr = function validAttr() {
  return true;
};

var StyledNativeComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(StyledNativeComponent, _Component);

  function StyledNativeComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.attrs = {};
    return _this;
  }

  var _proto = StyledNativeComponent.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/React__default.createElement(ThemeConsumer, null, function (theme) {
      var _this2$props = _this2.props,
          transientAsProp = _this2$props.$as,
          renderAs = _this2$props.as,
          forwardedComponent = _this2$props.forwardedComponent,
          forwardedAs = _this2$props.forwardedAs,
          forwardedRef = _this2$props.forwardedRef,
          _this2$props$style = _this2$props.style,
          style = _this2$props$style === void 0 ? [] : _this2$props$style,
          props = _objectWithoutPropertiesLoose(_this2$props, ["$as", "as", "forwardedComponent", "forwardedAs", "forwardedRef", "style"]);

      var defaultProps = forwardedComponent.defaultProps,
          target = forwardedComponent.target,
          shouldForwardProp = forwardedComponent.shouldForwardProp;
      var elementToBeRendered = _this2.attrs.$as || _this2.attrs.as || transientAsProp || renderAs || target;

      var generatedStyles = _this2.generateAndInjectStyles(determineTheme(_this2.props, theme, defaultProps) || EMPTY_OBJECT, _this2.props);

      var isTargetTag = isTag(elementToBeRendered);
      var computedProps = _this2.attrs !== props ? _extends({}, props, {}, _this2.attrs) : props;
      var propFilterFn = shouldForwardProp || isTargetTag && validAttr;
      var propsForElement = {};
      var key;

      for (key in computedProps) {
        if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
          propsForElement.as = props[key];
        } else if (!propFilterFn || propFilterFn(key, validAttr)) {
          // Don't pass through filtered tags through to native elements
          propsForElement[key] = computedProps[key];
        }
      }

      propsForElement.style = [generatedStyles].concat(style);
      if (forwardedRef) propsForElement.ref = forwardedRef;
      if (forwardedAs) propsForElement.as = forwardedAs;
      return React.createElement(elementToBeRendered, propsForElement);
    });
  };

  _proto.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this3 = this;

    var context = _extends({}, props, {
      theme: theme
    });

    if (!attrs.length) return context;
    this.attrs = {};
    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attr;
      var key;

      if (isFunction(resolvedAttrDef)) {
        resolvedAttrDef = resolvedAttrDef(context);
      }
      /* eslint-disable guard-for-in */


      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];
        _this3.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */

    });
    return context;
  };

  _proto.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var inlineStyle = props.forwardedComponent.inlineStyle;
    var executionContext = this.buildExecutionContext(theme, props, props.forwardedComponent.attrs);
    return inlineStyle.generateStyleObject(executionContext);
  };

  _proto.setNativeProps = function setNativeProps(nativeProps) {
    if (this.root !== undefined) {
      // $FlowFixMe
      this.root.setNativeProps(nativeProps);
    } else {
      // eslint-disable-next-line no-console
      console.warn('setNativeProps was called on a Styled Component wrapping a stateless functional component.');
    }
  };

  return StyledNativeComponent;
}(React.Component);

var _StyledNativeComponent = (function (InlineStyle) {
  var createStyledNativeComponent = function createStyledNativeComponent(target, options, rules) {
    var _options$attrs = options.attrs,
        attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs,
        _options$displayName = options.displayName,
        displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent = _options$ParentCompon === void 0 ? StyledNativeComponent : _options$ParentCompon;
    var isClass = !isTag(target);
    var isTargetStyledComp = isStyledComponent(target); // $FlowFixMe

    var WrappedStyledNativeComponent = React__default.forwardRef(function (props, ref) {
      return /*#__PURE__*/React__default.createElement(ParentComponent, _extends({}, props, {
        forwardedComponent: WrappedStyledNativeComponent,
        forwardedRef: ref
      }));
    });
    var finalAttrs = // $FlowFixMe
    isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

    var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

    if (isTargetStyledComp && target.shouldForwardProp) {
      if (shouldForwardProp) {
        // compose nested shouldForwardProp calls
        shouldForwardProp = function shouldForwardProp(prop, filterFn) {
          return (// $FlowFixMe
            target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
          );
        };
      } else {
        // eslint-disable-next-line prefer-destructuring
        shouldForwardProp = target.shouldForwardProp;
      }
    }
    /**
     * forwardRef creates a new interim component, which we'll take advantage of
     * instead of extending ParentComponent to create _another_ interim class
     */
    // $FlowFixMe


    WrappedStyledNativeComponent.attrs = finalAttrs;
    WrappedStyledNativeComponent.displayName = displayName; // $FlowFixMe

    WrappedStyledNativeComponent.shouldForwardProp = shouldForwardProp; // $FlowFixMe

    WrappedStyledNativeComponent.inlineStyle = new InlineStyle( // $FlowFixMe
    isTargetStyledComp ? target.inlineStyle.rules.concat(rules) : rules); // $FlowFixMe

    WrappedStyledNativeComponent.styledComponentId = 'StyledNativeComponent'; // $FlowFixMe

    WrappedStyledNativeComponent.target = isTargetStyledComp ? // $FlowFixMe
    target.target : target; // $FlowFixMe

    WrappedStyledNativeComponent.withComponent = function withComponent(tag) {
      var _ = options.displayName,
          __ = options.componentId,
          optionsToCopy = _objectWithoutPropertiesLoose(options, ["displayName", "componentId"]);

      var newOptions = _extends({}, optionsToCopy, {
        attrs: finalAttrs,
        ParentComponent: ParentComponent
      });

      return createStyledNativeComponent(tag, newOptions, rules);
    }; // $FlowFixMe


    Object.defineProperty(WrappedStyledNativeComponent, 'defaultProps', {
      get: function get() {
        return this._foldedDefaultProps;
      },
      set: function set(obj) {
        // $FlowFixMe
        this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
      }
    });

    if (isClass) {
      hoistNonReactStatics_cjs(WrappedStyledNativeComponent, target, {
        // all SC-specific things should not be hoisted
        attrs: true,
        displayName: true,
        shouldForwardProp: true,
        inlineStyle: true,
        styledComponentId: true,
        target: true,
        withComponent: true
      });
    }

    return WrappedStyledNativeComponent;
  };

  return createStyledNativeComponent;
});

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!reactIs_27(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 

var reactNative = require('react-native');

var InlineStyle = _InlineStyle(reactNative.StyleSheet);

var StyledNativeComponent$1 = _StyledNativeComponent(InlineStyle);

var styled = function styled(tag) {
  return constructWithOptions(StyledNativeComponent$1, tag);
};
/* React native lazy-requires each of these modules for some reason, so let's
 *  assume it's for a good reason and not eagerly load them all */


var aliases = "ActivityIndicator ActivityIndicatorIOS ART Button DatePickerIOS DrawerLayoutAndroid\n Image ImageBackground ImageEditor ImageStore KeyboardAvoidingView ListView MapView Modal NavigatorIOS\n Picker PickerIOS ProgressBarAndroid ProgressViewIOS ScrollView SegmentedControlIOS Slider\n SliderIOS SnapshotViewIOS Switch RecyclerViewBackedScrollView RefreshControl SafeAreaView StatusBar\n SwipeableListView SwitchAndroid SwitchIOS TabBarIOS Text TextInput ToastAndroid ToolbarAndroid\n Touchable TouchableHighlight TouchableNativeFeedback TouchableOpacity TouchableWithoutFeedback\n View ViewPagerAndroid WebView FlatList SectionList VirtualizedList Pressable";
/* Define a getter for each alias which simply gets the reactNative component
 * and passes it to styled */

aliases.split(/\s+/m).forEach(function (alias) {
  return Object.defineProperty(styled, alias, {
    enumerable: true,
    configurable: false,
    get: function get() {
      return styled(reactNative[alias]);
    }
  });
});

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var Body = styled.View(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var PanBarWrap = styled.View(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 30px;\n  align-items: center;\n  justify-content: center;\n  z-index: 12;\n"])));
var PanBar = styled.View(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 180px;\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 6px;\n  border-radius: 3px;\n"])));
var BodyWrap = styled.View(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: ", "px;\n  padding-bottom: ", "px;\n"])), function (props) {
  return props.height;
}, function (props) {
  return props.pb;
});

function Body$1(_ref) {
  var children = _ref.children,
      _ref$offsetTop = _ref.offsetTop,
      offsetTop = _ref$offsetTop === void 0 ? 200 : _ref$offsetTop,
      onClose = _ref.onClose,
      _ref$background = _ref.background,
      background = _ref$background === void 0 ? '#FFFFFF' : _ref$background,
      _ref$variableHeight = _ref.variableHeight,
      variableHeight = _ref$variableHeight === void 0 ? true : _ref$variableHeight;
  var statusBarHeight = reactNativeStatusBarHeight.getStatusBarHeight();
  var offset = Animated.useSharedValue(2000);
  var x = Animated.useSharedValue(0);
  var animatedStyle = Animated.useAnimatedStyle(function () {
    const _f = function () {
      return {
        transform: [{
          translateY: Animated.withSpring(offset.value, {
            damping: 10,
            stiffness: 90,
            mass: 0.5
          })
        }]
      };
    };

    _f._closure = {
      withSpring: Animated.withSpring,
      offset
    };
    _f.asString = "function _f(){const{withSpring,offset}=jsThis._closure;{return{transform:[{translateY:withSpring(offset.value,{damping:10,stiffness:90,mass:0.5})}]};}}";
    _f.__workletHash = 14161509466377;
    _f.__location = "/Users/tom/Desktop/GitHub/Molecules/src/Modal/Body/index.js (19:41)";

    global.__reanimatedWorkletInit(_f);

    return _f;
  }());
  React.useEffect(function () {
    offset.value = offsetTop;
  }, []);

  var close = function close() {
    onClose();
  };

  var gestureHandler = Animated.useAnimatedGestureHandler({
    onStart: function () {
      const _f = function (event, ctx) {
        ctx.startY = x.value === 0 ? offset.value : x.value;
      };

      _f._closure = {
        x,
        offset
      };
      _f.asString = "function onStart(event,ctx){const{x,offset}=jsThis._closure;{ctx.startY=x.value===0?offset.value:x.value;}}";
      _f.__workletHash = 10748898788119;
      _f.__location = "/Users/tom/Desktop/GitHub/Molecules/src/Modal/Body/index.js (42:13)";

      global.__reanimatedWorkletInit(_f);

      return _f;
    }(),
    onActive: function () {
      const _f = function (event, ctx) {
        x.value = ctx.startY + event.translationY;
      };

      _f._closure = {
        x
      };
      _f.asString = "function onActive(event,ctx){const{x}=jsThis._closure;{x.value=ctx.startY+event.translationY;}}";
      _f.__workletHash = 3182690952060;
      _f.__location = "/Users/tom/Desktop/GitHub/Molecules/src/Modal/Body/index.js (45:14)";

      global.__reanimatedWorkletInit(_f);

      return _f;
    }(),
    onEnd: function () {
      const _f = function (_) {
        if (x.value < statusBarHeight && variableHeight) {
          x.value = Animated.withSpring(statusBarHeight);
        }

        if (!variableHeight) {
          x.value = Animated.withSpring(offsetTop);
        }

        if (_.translationY > 300 || x.value > 550) {
          Animated.runOnJS(close)();
        }
      };

      _f._closure = {
        x,
        statusBarHeight,
        variableHeight,
        withSpring: Animated.withSpring,
        offsetTop,
        runOnJS: Animated.runOnJS,
        close
      };
      _f.asString = "function onEnd(_){const{x,statusBarHeight,variableHeight,withSpring,offsetTop,runOnJS,close}=jsThis._closure;{if(x.value<statusBarHeight&&variableHeight){x.value=withSpring(statusBarHeight);}if(!variableHeight){x.value=withSpring(offsetTop);}if(_.translationY>300||x.value>550){runOnJS(close)();}}}";
      _f.__workletHash = 9421720351401;
      _f.__location = "/Users/tom/Desktop/GitHub/Molecules/src/Modal/Body/index.js (48:11)";

      global.__reanimatedWorkletInit(_f);

      return _f;
    }()
  });
  var animatedStylePan = Animated.useAnimatedStyle(function () {
    const _f = function () {
      return {
        transform: [{
          translateY: x.value
        }]
      };
    };

    _f._closure = {
      x
    };
    _f.asString = "function _f(){const{x}=jsThis._closure;{return{transform:[{translateY:x.value}]};}}";
    _f.__workletHash = 15133577060486;
    _f.__location = "/Users/tom/Desktop/GitHub/Molecules/src/Modal/Body/index.js (63:44)";

    global.__reanimatedWorkletInit(_f);

    return _f;
  }());
  return /*#__PURE__*/React__default.createElement(reactNative$1.SafeAreaView, null, /*#__PURE__*/React__default.createElement(reactNativeGestureHandler.GestureHandlerRootView, null, /*#__PURE__*/React__default.createElement(reactNativeGestureHandler.PanGestureHandler, {
    onGestureEvent: gestureHandler
  }, /*#__PURE__*/React__default.createElement(Animated__default.View, {
    style: [{
      height: reactNative$1.Dimensions.get('window').height - offsetTop - statusBarHeight,
      zIndex: 11,
      backgroundColor: background
    }, animatedStyle, animatedStylePan]
  }, /*#__PURE__*/React__default.createElement(BodyWrap, {
    pb: statusBarHeight,
    height: reactNative$1.Dimensions.get('window').height - offsetTop - statusBarHeight - 30
  }, /*#__PURE__*/React__default.createElement(PanBarWrap, null, /*#__PURE__*/React__default.createElement(PanBar, null)), children)))));
}

var Modal = function Modal(_ref) {
  var children = _ref.children,
      offsetTop = _ref.offsetTop,
      variableHeight = _ref.variableHeight,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;
  return /*#__PURE__*/React__default.createElement(Background, {
    onClose: onClose
  }, /*#__PURE__*/React__default.createElement(Body$1, {
    offsetTop: offsetTop,
    onClose: onClose,
    variableHeight: variableHeight
  }, children));
};

var _templateObject$1;
var Wrapper = styled.View(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n", ";\n"])), function (props) {
  return props.styles;
});

function Container$1(_ref) {
  var children = _ref.children,
      styles = _ref.styles;
  return /*#__PURE__*/React__default.createElement(Wrapper, {
    styles: styles
  }, children);
}

var _templateObject$2;
var Head = styled.View(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  ", ";\n"])), function (props) {
  return props.styles;
});

var AccordionContext = React__default.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "isActive":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isActive: action.data
      });

    case "isActiveHeight":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        isActiveHeight: action.data
      });

    case "setScroller":
      return _objectSpread2(_objectSpread2({}, state), {}, {
        scrollRef: action.data
      });

    default:
      return state;
  }
}

var AccordionProvider = function AccordionProvider(_ref) {
  var children = _ref.children,
      value = _ref.value;

  var _useReducer = React.useReducer(reducer, {
    isActive: false,
    isActiveHeight: false,
    scrollRef: false
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      isActive = _useReducer2$.isActive,
      isActiveHeight = _useReducer2$.isActiveHeight,
      scrollRef = _useReducer2$.scrollRef,
      dispatch = _useReducer2[1];

  return /*#__PURE__*/React__default.createElement(AccordionContext.Provider, {
    value: _objectSpread2(_objectSpread2({}, value), {}, {
      isActive: isActive,
      isActiveHeight: isActiveHeight,
      scrollRef: scrollRef,
      dispatch: dispatch
    })
  }, children);
};

var useAccordionContext = function useAccordionContext() {
  return React__default.useContext(AccordionContext);
};

function HeadElement(_ref) {
  var children = _ref.children,
      toggleAccordionItem = _ref.toggleAccordionItem,
      eventKey = _ref.eventKey,
      isOpen = _ref.isOpen,
      style = _ref.style;

  var _ref2 = useAccordionContext() || {},
      isActive = _ref2.isActive,
      scrollRef = _ref2.scrollRef;

  var BodyRef = React.useRef();

  var scrollToItem = function scrollToItem() {
    requestAnimationFrame(function () {
      if (scrollRef && BodyRef) {
        var _BodyRef$current;

        (_BodyRef$current = BodyRef.current) === null || _BodyRef$current === void 0 ? void 0 : _BodyRef$current.measureLayout(reactNative$1.findNodeHandle(scrollRef.current), function (x, y) {
          var _scrollRef$current;

          (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.scrollTo({
            x: 0,
            y: y,
            animated: true
          });
        });
      }
    });
  };

  React.useEffect(function () {
    if (isOpen && BodyRef.current) {
      setTimeout(function () {
        scrollToItem();
      }, 350);
    }
  }, [isOpen]);
  return /*#__PURE__*/React__default.createElement(reactNative$1.Pressable, {
    style: {
      opacity: isActive != eventKey ? isActive ? 0.6 : 1 : 1
    },
    ref: BodyRef,
    onPress: function onPress() {
      return toggleAccordionItem(eventKey);
    }
  }, /*#__PURE__*/React__default.createElement(Head, {
    styles: style
  }, children));
}

var _templateObject$3;
var Body$2 = styled.View(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  width: 100%;\n  ", ";\n  z-index: ", ";\n"])), function (props) {
  return !props.isOpen && "position: absolute";
}, function (props) {
  return props.isOpen ? 1 : -1;
});

function BodyElement(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen;
  var height = Animated.useSharedValue(1);
  var transition = Animated.useDerivedValue(function () {
    const _f = function () {
      return isOpen ? Animated.withSpring(height.value, {
        damping: 10,
        stiffness: 90,
        mass: 0.5
      }) : Animated.withTiming(1, {
        duration: 250,
        easing: Animated.Easing.bezier(0.19, 1.0, 0.22, 1.0)
      });
    };

    _f._closure = {
      isOpen,
      withSpring: Animated.withSpring,
      height,
      withTiming: Animated.withTiming,
      Easing: {
        bezier: Animated.Easing.bezier
      }
    };
    _f.asString = "function _f(){const{isOpen,withSpring,height,withTiming,Easing}=jsThis._closure;{return isOpen?withSpring(height.value,{damping:10,stiffness:90,mass:0.5}):withTiming(1,{duration:250,easing:Easing.bezier(0.19,1.0,0.22,1.0)});}}";
    _f.__workletHash = 3852969352693;
    _f.__location = "/Users/tom/Desktop/GitHub/Molecules/src/Accordion/Views/Body/index.js (15:37)";

    global.__reanimatedWorkletInit(_f);

    return _f;
  }());
  var animatedStyle = Animated.useAnimatedStyle(function () {
    const _f = function () {
      return {
        height: transition.value
      };
    };

    _f._closure = {
      transition
    };
    _f.asString = "function _f(){const{transition}=jsThis._closure;{return{height:transition.value};}}";
    _f.__workletHash = 13081534320656;
    _f.__location = "/Users/tom/Desktop/GitHub/Molecules/src/Accordion/Views/Body/index.js (28:41)";

    global.__reanimatedWorkletInit(_f);

    return _f;
  }());
  return /*#__PURE__*/React__default.createElement(Animated__default.View, {
    style: [{
      height: 1,
      overflow: "hidden"
    }, animatedStyle]
  }, /*#__PURE__*/React__default.createElement(Body$2, {
    isOpen: isOpen,
    onLayout: function onLayout(e) {
      return height.value = e.nativeEvent.layout.height;
    }
  }, children));
}

function useAccordionHook() {
  var _ref = useAccordionContext() || {},
      isActive = _ref.isActive,
      dispatch = _ref.dispatch;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      eventKeyState = _useState4[0],
      setEventKeyState = _useState4[1];

  var toggleAccordionItem = function toggleAccordionItem(eventKey) {
    dispatch && dispatch({
      type: "isActive",
      data: false
    });
    setIsOpen(function (previousState) {
      return !previousState;
    });
    setEventKeyState(eventKey);
  };

  React.useEffect(function () {
    if (isOpen) {
      dispatch && dispatch({
        type: "isActive",
        data: eventKeyState
      });
    }
  }, [isOpen]);
  React.useEffect(function () {
    if (isActive) {
      setIsOpen(eventKeyState === isActive);
    }
  }, [isActive]);
  return {
    eventKeyState: eventKeyState,
    isOpen: isOpen,
    toggleAccordionItem: toggleAccordionItem
  };
}

var AccordionItem = function AccordionItem(_ref) {
  var children = _ref.children,
      _ref$defaultState = _ref.defaultState,
      defaultState = _ref$defaultState === void 0 ? false : _ref$defaultState,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$eventKey = _ref.eventKey,
      eventKey = _ref$eventKey === void 0 ? false : _ref$eventKey,
      style = _ref.style;

  var _useAccordionHook = useAccordionHook(),
      isOpen = _useAccordionHook.isOpen,
      toggleAccordionItem = _useAccordionHook.toggleAccordionItem;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasChanged = _useState2[0],
      setHasChanged = _useState2[1];

  React.useEffect(function () {
    setHasChanged(isOpen);
  }, [isOpen]);
  React.useEffect(function () {
    defaultState && toggleAccordionItem(defaultState);
  }, [defaultState]);
  React.useEffect(function () {
    if (isOpen !== hasChanged) {
      onChange(isOpen);
    }
  }, [isOpen, hasChanged]);
  return /*#__PURE__*/React__default.createElement(Container$1, {
    styles: style
  }, React__default.Children.map(children, function (child) {
    return React__default.cloneElement(child, {
      isOpen: isOpen,
      toggleAccordionItem: toggleAccordionItem,
      eventKey: eventKey
    });
  }));
};

AccordionItem.Head = function (props) {
  return /*#__PURE__*/React__default.createElement(HeadElement, props);
};

AccordionItem.Body = function (props) {
  return /*#__PURE__*/React__default.createElement(BodyElement, props);
};

var _templateObject$4;
var ScrollView = styled.ScrollView(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  flex: 1;\n  ", ";\n"])), function (props) {
  return props.styles;
});

function AccordionScroller(_ref) {
  var children = _ref.children,
      style = _ref.style;
  var scrollRef = React.useRef();
  return /*#__PURE__*/React__default.createElement(AccordionProvider, {
    value: {
      scrollRef: scrollRef
    }
  }, /*#__PURE__*/React__default.createElement(ScrollView, {
    ref: scrollRef,
    styles: style
  }, children));
}

function AccordionScroll(_ref) {
  var children = _ref.children,
      style = _ref.style;
  var scrollRef = React.useRef();

  var _useAccordionContext = useAccordionContext(),
      dispatch = _useAccordionContext.dispatch;

  React.useEffect(function () {
    dispatch({
      type: "setScroller",
      data: scrollRef
    });
  }, []);
  return /*#__PURE__*/React__default.createElement(ScrollView, {
    ref: scrollRef,
    styles: style
  }, children);
}

var _templateObject$5, _templateObject2$1;
var MapWrapper = styled.View(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  align-items: center;\n  justify-content: center;\n  height: 400px;\n  overflow: hidden;\n  border-radius: ", ";\n  margin: ", " 0;\n"])), function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return props.theme.padding;
});
var MarkerWrapper = styled.View(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 9;\n  width: 80px;\n  height: 120px;\n  align-items: center;\n    justify-content: center;\n"])));

/**
* MIT License
* 
* Copyright (c) 2019 Douglas Nassif Roma Junior
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE. 
*/

class LocationError extends Error {

    constructor(code, message) {
        super(message);
        this.name = 'LocationError';
        this.code = code;
        this.message = message;
    }

}

/**
* MIT License
* 
* Copyright (c) 2019 Douglas Nassif Roma Junior
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE. 
*/

const { OS } = reactNative$1.Platform;
const Version = parseInt(reactNative$1.Platform.Version);
const { ReactNativeGetLocation } = reactNative$1.NativeModules;

async function openUrlIfCan(url) {
    if (await reactNative$1.Linking.canOpenURL(url)) {
        await reactNative$1.Linking.openURL(url);
        return true;
    }
    return false;
}

async function openIOSSettings(root, path = '') {
    if (await openUrlIfCan(`App-Prefs:root=${root}${path ? `&path=${path}` : ''}`)) {
        return true;
    }
    if (await openUrlIfCan('App-Prefs:')) {
        return true;
    }
    return false;
}
async function requestAndroidPermission(enableHighAccuracy = false) {
    const { PERMISSIONS, RESULTS } = reactNative$1.PermissionsAndroid;
    const granted = await reactNative$1.PermissionsAndroid.request(enableHighAccuracy
        ? PERMISSIONS.ACCESS_FINE_LOCATION
        : PERMISSIONS.ACCESS_COARSE_LOCATION);
    if (granted !== RESULTS.GRANTED) {
        throw new LocationError('UNAUTHORIZED', 'Authorization denied');
    }
    return true;
}

var GetLocation = {
    async getCurrentPosition(options = {
        enableHighAccuracy: false,
        timeout: 0,
    }) {
        if (OS === 'android') {
            await requestAndroidPermission(options.enableHighAccuracy);
        }
        try {
            const location = await ReactNativeGetLocation.getCurrentPosition(options);
            return location;
        } catch (error) {
            const { code, message } = error;
            const locationError = new LocationError(code, message);
            locationError.stack = error.stack;
            throw locationError;
        }
    },

    // Extra functions

    openAppSettings() {
        return ReactNativeGetLocation.openAppSettings();
    },

    /**
     * Only for Android
     */
    async openWifiSettings() {
        if (OS === 'android') {
            return ReactNativeGetLocation.openWifiSettings();
        }

        if (await openIOSSettings('WIFI')) {
            return true;
        }

        return ReactNativeGetLocation.openAppSettings();
    },

    /**
     * Only for Android
     */
    async openCelularSettings() {
        if (OS === 'android') {
            return ReactNativeGetLocation.openCelularSettings();
        }

        if (await openIOSSettings('MOBILE_DATA_SETTINGS_ID')) {
            return true;
        }

        return ReactNativeGetLocation.openAppSettings();
    },

    /**
     * Only for Android
     */
    async openGpsSettings() {
        if (OS === 'android') {
            return ReactNativeGetLocation.openGpsSettings();
        }

        if (Version >= 10) {
            if (await openIOSSettings('Privacy', 'LOCATION')) {
                return true;
            }
        } else {
            if (await openIOSSettings('LOCATION_SERVICES')) {
                return true;
            }
        }

        return ReactNativeGetLocation.openAppSettings();
    },
};

var ip = 0;
var fr = 60;
var v = "5.1.20";
var assets = [
];
var layers = [
	{
		ty: 4,
		nm: "newMarkerShadow",
		ip: 0,
		st: 0,
		ind: 2,
		hix: 1,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			or: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			a: {
				a: 0,
				k: [
					59,
					20,
					0
				]
			},
			p: {
				s: true,
				x: {
					a: 0,
					k: 136.37100000000004
				},
				y: {
					a: 1,
					k: [
						{
							t: 0,
							s: [
								133.493
							],
							e: [
								168.493
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 21,
							s: [
								168.493
							],
							e: [
								133.493
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 32,
							s: [
								133.493
							],
							e: [
								150.493
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 38,
							s: [
								150.493
							],
							e: [
								133.493
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 42
						}
					]
				}
			},
			rx: {
				a: 0,
				k: 0
			},
			ry: {
				a: 0,
				k: 0
			},
			rz: {
				a: 0,
				k: 0
			},
			s: {
				a: 0,
				k: [
					72.5,
					100
				]
			}
		},
		shapes: [
			{
				ty: "gr",
				nm: "newMarkerShadow shape group",
				it: [
					{
						ty: "sh",
						ks: {
							a: 0,
							k: {
								c: true,
								v: [
									[
										98.526043,
										0.561727398
									],
									[
										106.684029,
										13.7078183
									],
									[
										37.9309756,
										26.8174752
									],
									[
										6,
										40
									],
									[
										0,
										40
									],
									[
										31.9304929,
										26.8174996
									],
									[
										26.6840287,
										13.7078183
									]
								],
								i: [
									[
										-22.091389899999996,
										0
									],
									[
										17.585859,
										-7.26038554
									],
									[
										21.911355800000003,
										-0.5042989999999996
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-16.782591009999997,
										6.9287534000000015
									]
								],
								o: [
									[
										22.091390000000004,
										0
									],
									[
										-16.782320799999994,
										6.9286417
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-19.4692231,
										-0.5041404000000007
									],
									[
										17.585858899999998,
										-7.26038554
									]
								]
							}
						}
					},
					{
						ty: "sh",
						ks: {
							a: 0,
							k: {
								c: true,
								v: [
									[
										82.6050359,
										7.13477283
									],
									[
										46.6840287,
										13.7078183
									],
									[
										50.7630215,
										20.2808637
									],
									[
										86.6840287,
										13.7078183
									]
								],
								i: [
									[
										11.045694999999995,
										0
									],
									[
										8.7929295,
										-3.6301927999999997
									],
									[
										-11.045695000000002,
										0
									],
									[
										-8.7929295,
										3.630192700000002
									]
								],
								o: [
									[
										-11.04569500000001,
										0
									],
									[
										-8.7929295,
										3.630192700000002
									],
									[
										11.045695000000002,
										0
									],
									[
										8.7929295,
										-3.6301927999999997
									]
								]
							}
						}
					},
					{
						ty: "st",
						o: {
							a: 0,
							k: 0
						},
						w: {
							a: 0,
							k: 0
						},
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								0
							]
						},
						lc: 3,
						lj: 1,
						ml: 1
					},
					{
						ty: "fl",
						o: {
							a: 0,
							k: 10
						},
						r: 2,
						c: {
							a: 0,
							k: [
								0.17647058823529413,
								0.20392156862745098,
								0.21176470588235294,
								1
							]
						}
					},
					{
						ty: "tr",
						o: {
							a: 0,
							k: 100
						},
						a: {
							a: 0,
							k: [
								0,
								0
							]
						},
						s: {
							a: 0,
							k: [
								100,
								100
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						r: {
							a: 0,
							k: 0
						}
					}
				]
			}
		],
		op: 46
	},
	{
		ty: 4,
		nm: "newMarker",
		ip: 0,
		st: 0,
		ind: 1,
		hix: 2,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			or: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			a: {
				a: 0,
				k: [
					40,
					60,
					0
				]
			},
			p: {
				s: true,
				x: {
					a: 0,
					k: 96.16399999999997
				},
				y: {
					a: 1,
					k: [
						{
							t: 0,
							s: [
								94
							],
							e: [
								62
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 21,
							s: [
								62
							],
							e: [
								99.82899824516296
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 32,
							s: [
								99.82899824516296
							],
							e: [
								81
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 38,
							s: [
								81
							],
							e: [
								93.956
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 42,
							s: [
								93.956
							],
							e: [
								97.956
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 44,
							s: [
								97.956
							],
							e: [
								94.208
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 46
						}
					]
				}
			},
			rx: {
				a: 0,
				k: 0
			},
			ry: {
				a: 0,
				k: 0
			},
			rz: {
				a: 0,
				k: 0
			},
			s: {
				a: 1,
				k: [
					{
						t: 0,
						s: [
							100,
							100
						],
						e: [
							100,
							100
						],
						i: {
							x: [
								1,
								1
							],
							y: [
								1,
								1
							]
						},
						o: {
							x: [
								0,
								0
							],
							y: [
								0,
								0
							]
						}
					},
					{
						t: 27,
						s: [
							100,
							100
						],
						e: [
							100,
							90.2
						],
						i: {
							x: [
								1,
								0.515
							],
							y: [
								1,
								0.955
							]
						},
						o: {
							x: [
								0,
								0.455
							],
							y: [
								0,
								0.03
							]
						}
					},
					{
						t: 32,
						s: [
							100,
							90.2
						],
						e: [
							100,
							100
						],
						i: {
							x: [
								1,
								0.515
							],
							y: [
								1,
								0.955
							]
						},
						o: {
							x: [
								0,
								0.455
							],
							y: [
								0,
								0.03
							]
						}
					},
					{
						t: 38,
						s: [
							100,
							100
						],
						e: [
							100,
							100
						],
						i: {
							x: [
								1,
								0.515
							],
							y: [
								1,
								0.955
							]
						},
						o: {
							x: [
								0,
								0.455
							],
							y: [
								0,
								0.03
							]
						}
					},
					{
						t: 42,
						s: [
							100,
							100
						],
						e: [
							100,
							93.4
						],
						i: {
							x: [
								1,
								0.515
							],
							y: [
								1,
								0.955
							]
						},
						o: {
							x: [
								0,
								0.455
							],
							y: [
								0,
								0.03
							]
						}
					},
					{
						t: 44,
						s: [
							100,
							93.4
						],
						e: [
							100,
							100
						],
						i: {
							x: [
								1,
								0.515
							],
							y: [
								1,
								0.955
							]
						},
						o: {
							x: [
								0,
								0.455
							],
							y: [
								0,
								0.03
							]
						}
					},
					{
						t: 46
					}
				]
			}
		},
		shapes: [
			{
				ty: "gr",
				nm: "newMarker shape group",
				it: [
					{
						ty: "sh",
						ks: {
							a: 0,
							k: {
								c: true,
								v: [
									[
										40,
										0
									],
									[
										80,
										40
									],
									[
										43.0007121,
										79.8891413
									],
									[
										43,
										120
									],
									[
										37,
										120
									],
									[
										37.0002885,
										79.8892155
									],
									[
										0,
										40
									]
								],
								i: [
									[
										-22.09139,
										0
									],
									[
										0,
										-22.09139
									],
									[
										20.689859999999996,
										-1.534445500000004
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										21.0823233
									]
								],
								o: [
									[
										22.091389999999997,
										0
									],
									[
										0,
										21.0819834
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-20.690334700000005,
										-1.5339628000000118
									],
									[
										0,
										-22.09139
									]
								]
							}
						}
					},
					{
						ty: "sh",
						ks: {
							a: 0,
							k: {
								c: true,
								v: [
									[
										40,
										20
									],
									[
										20,
										40
									],
									[
										40,
										60
									],
									[
										60,
										40
									]
								],
								i: [
									[
										11.045695000000002,
										0
									],
									[
										0,
										-11.045694999999998
									],
									[
										-11.045694999999998,
										0
									],
									[
										0,
										11.045695000000002
									]
								],
								o: [
									[
										-11.045694999999998,
										0
									],
									[
										0,
										11.045695000000002
									],
									[
										11.045695000000002,
										0
									],
									[
										0,
										-11.045694999999998
									]
								]
							}
						}
					},
					{
						ty: "st",
						o: {
							a: 0,
							k: 0
						},
						w: {
							a: 0,
							k: 0
						},
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								0
							]
						},
						lc: 3,
						lj: 1,
						ml: 1
					},
					{
						ty: "fl",
						o: {
							a: 0,
							k: 100
						},
						r: 2,
						c: {
							a: 0,
							k: [
								0.17647058823529413,
								0.20392156862745098,
								0.21176470588235294,
								1
							]
						}
					},
					{
						ty: "tr",
						o: {
							a: 0,
							k: 100
						},
						a: {
							a: 0,
							k: [
								0,
								0
							]
						},
						s: {
							a: 0,
							k: [
								100,
								100
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						r: {
							a: 0,
							k: 0
						}
					}
				]
			}
		],
		op: 46
	}
];
var op = 46;
var w = 193;
var h = 190;
var marker = {
	ip: ip,
	fr: fr,
	v: v,
	assets: assets,
	layers: layers,
	op: op,
	w: w,
	h: h
};

var MarkerAnimation = function MarkerAnimation(_ref) {
  var isMoving = _ref.isMoving;
  var markerRef = React.useRef();
  React.useEffect(function () {
    if (isMoving) {
      markerRef.current.play(0, 21);
    } else {
      markerRef.current.play(21, 46);
    }
  }, [isMoving]);
  return /*#__PURE__*/React__default.createElement(LottieView, {
    ref: markerRef,
    style: {
      height: 80,
      width: 80,
      zIndex: 23
    },
    loop: false,
    source: marker
  });
};

var DEFAULT_LOCATION = {
  longitude: -122.406417,
  latitude: 37.785834,
  latitudeDelta: 0.005,
  longitudeDelta: 0.01
};
function Map$1(_ref) {
  var longitude = _ref.longitude,
      latitude = _ref.latitude,
      theme = _ref.theme,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;

  var _useState = React.useState(DEFAULT_LOCATION),
      _useState2 = _slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isMoving = _useState4[0],
      setIsMoving = _useState4[1];

  React.useEffect(function () {
    if (longitude && latitude) {
      setLocation(Object.assign({
        longitude: longitude,
        latitude: latitude
      }, {
        latitudeDelta: 0.005,
        longitudeDelta: 0.01
      }));
    }
  }, [longitude, latitude]);
  React.useEffect(function () {
    if (!longitude) {
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000
      }).then(function (location) {
        setLocation(Object.assign(location, {
          latitudeDelta: 0.005,
          longitudeDelta: 0.01
        }));
      }).catch(function (error) {});
    }
  }, []);
  React.useEffect(function () {
    onChange(location);
  }, [location]);
  return /*#__PURE__*/React__default.createElement(MapWrapper, {
    theme: theme
  }, /*#__PURE__*/React__default.createElement(MapView__default, {
    loadingEnabled: true,
    region: location,
    style: {
      width: "100%",
      height: "100%"
    },
    onRegionChangeComplete: function onRegionChangeComplete(region) {
      if (isMoving) {
        setLocation(region);
        setIsMoving(false);
      }
    },
    onPanDrag: function onPanDrag(e) {
      setIsMoving(true);
    }
  }), /*#__PURE__*/React__default.createElement(MarkerWrapper, {
    theme: theme,
    pointerEvents: "none"
  }, /*#__PURE__*/React__default.createElement(MarkerAnimation, {
    isMoving: isMoving
  })));
}

var _templateObject$6, _templateObject2$2;
var UploadWrapper = styled.View(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  aspect-ratio: 1.5;\n  overflow: hidden;\n  background-color: ", ";\n  border-radius: ", ";\n"])), function (props) {
  return props.theme.color7;
}, function (props) {
  return props.theme.borderRadius;
});
var UploadIconWrapper = styled.View(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n"])));

var ip$1 = 0;
var fr$1 = 60;
var v$1 = "5.1.20";
var assets$1 = [
];
var layers$1 = [
	{
		ty: 4,
		nm: "cloud",
		ip: 0,
		st: 0,
		ind: 2,
		hix: 1,
		ks: {
			o: {
				a: 0,
				k: 100
			},
			or: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			a: {
				a: 0,
				k: [
					83.5,
					50,
					0
				]
			},
			p: {
				s: true,
				x: {
					a: 0,
					k: 99
				},
				y: {
					a: 0,
					k: 67
				}
			},
			rx: {
				a: 0,
				k: 0
			},
			ry: {
				a: 0,
				k: 0
			},
			rz: {
				a: 0,
				k: 0
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				]
			}
		},
		shapes: [
			{
				ty: "gr",
				nm: "cloud shape group",
				it: [
					{
						ty: "el",
						p: {
							a: 0,
							k: [
								33,
								66
							]
						},
						s: {
							a: 0,
							k: [
								67,
								67
							]
						}
					},
					{
						ty: "st",
						o: {
							a: 0,
							k: 0
						},
						w: {
							a: 0,
							k: 0
						},
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								0
							]
						},
						lc: 3,
						lj: 1,
						ml: 1
					},
					{
						ty: "fl",
						o: {
							a: 0,
							k: 100
						},
						r: 2,
						c: {
							a: 0,
							k: [
								1,
								1,
								1,
								1
							]
						}
					},
					{
						ty: "tr",
						o: {
							a: 0,
							k: 100
						},
						a: {
							a: 0,
							k: [
								0,
								0
							]
						},
						s: {
							a: 0,
							k: [
								100,
								100
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						r: {
							a: 0,
							k: 0
						}
					}
				]
			},
			{
				ty: "gr",
				nm: "cloud shape group",
				it: [
					{
						ty: "el",
						p: {
							a: 0,
							k: [
								133,
								66
							]
						},
						s: {
							a: 0,
							k: [
								67,
								67
							]
						}
					},
					{
						ty: "st",
						o: {
							a: 0,
							k: 0
						},
						w: {
							a: 0,
							k: 0
						},
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								0
							]
						},
						lc: 3,
						lj: 1,
						ml: 1
					},
					{
						ty: "fl",
						o: {
							a: 0,
							k: 100
						},
						r: 2,
						c: {
							a: 0,
							k: [
								1,
								1,
								1,
								1
							]
						}
					},
					{
						ty: "tr",
						o: {
							a: 0,
							k: 100
						},
						a: {
							a: 0,
							k: [
								0,
								0
							]
						},
						s: {
							a: 0,
							k: [
								100,
								100
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						r: {
							a: 0,
							k: 0
						}
					}
				]
			},
			{
				ty: "gr",
				nm: "cloud shape group",
				it: [
					{
						ty: "rc",
						s: {
							a: 0,
							k: [
								103,
								12
							]
						},
						r: {
							a: 0,
							k: 0
						},
						p: {
							a: 0,
							k: [
								84.5,
								94
							]
						}
					},
					{
						ty: "st",
						o: {
							a: 0,
							k: 0
						},
						w: {
							a: 0,
							k: 0
						},
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								0
							]
						},
						lc: 3,
						lj: 1,
						ml: 1
					},
					{
						ty: "fl",
						o: {
							a: 0,
							k: 100
						},
						r: 2,
						c: {
							a: 0,
							k: [
								1,
								1,
								1,
								1
							]
						}
					},
					{
						ty: "tr",
						o: {
							a: 0,
							k: 100
						},
						a: {
							a: 0,
							k: [
								0,
								0
							]
						},
						s: {
							a: 0,
							k: [
								100,
								100
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						r: {
							a: 0,
							k: 0
						}
					}
				]
			},
			{
				ty: "gr",
				nm: "cloud shape group",
				it: [
					{
						ty: "sh",
						ks: {
							a: 0,
							k: {
								c: true,
								v: [
									[
										83,
										0
									],
									[
										133,
										50
									],
									[
										83,
										100
									],
									[
										33,
										50
									]
								],
								i: [
									[
										-27.6142375,
										0
									],
									[
										0,
										-27.6142375
									],
									[
										27.614237000000003,
										0
									],
									[
										0,
										27.6142375
									]
								],
								o: [
									[
										27.614237000000003,
										0
									],
									[
										0,
										27.6142375
									],
									[
										-27.6142375,
										0
									],
									[
										0,
										-27.6142375
									]
								]
							}
						}
					},
					{
						ty: "sh",
						ks: {
							a: 0,
							k: {
								c: true,
								v: [
									[
										85.0715815,
										24.647587
									],
									[
										81.9284185,
										24.647587
									],
									[
										81.9284185,
										24.647587
									],
									[
										68.6474473,
										37.897449
									],
									[
										68.6474473,
										41.0199998
									],
									[
										71.7906105,
										41.0199998
									],
									[
										71.7906105,
										41.0199998
									],
									[
										81.2865048,
										31.5397235
									],
									[
										81.2865048,
										74.7916898
									],
									[
										83.5,
										77
									],
									[
										85.7134952,
										74.7916898
									],
									[
										85.7134952,
										74.7916898
									],
									[
										85.7134952,
										31.5397235
									],
									[
										95.2093895,
										41.0199998
									],
									[
										98.3525527,
										41.0199998
									],
									[
										98.3525527,
										37.897449
									],
									[
										98.3525527,
										37.897449
									]
								],
								i: [
									[
										0,
										0
									],
									[
										0.8632630999999975,
										-0.8634493000000028
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-0.8632630999999975,
										-0.8634494000000004
									],
									[
										-0.8632630999999975,
										0.8634494000000004
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-1.2174222999999955,
										0
									],
									[
										0,
										1.2189872000000008
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-0.8632632000000058,
										0.8634494000000004
									],
									[
										0.8632630999999975,
										0.8634492999999992
									],
									[
										0,
										0
									]
								],
								o: [
									[
										-0.8632630999999975,
										-0.8634493000000028
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										-0.8632630999999975,
										0.8634492999999992
									],
									[
										0.8632632000000058,
										0.8634494000000004
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										1.2189872000000008
									],
									[
										1.2174222999999955,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0,
										0
									],
									[
										0.8632630999999975,
										0.8634494000000004
									],
									[
										0.8632630999999975,
										-0.8634494000000004
									],
									[
										0,
										0
									],
									[
										0,
										0
									]
								]
							}
						}
					},
					{
						ty: "sh",
						ks: {
							a: 0,
							k: {
								c: true,
								v: [
									[
										85.0715815,
										24.647587
									]
								],
								i: [
									[
										0,
										0
									]
								],
								o: [
									[
										0,
										0
									]
								]
							}
						}
					},
					{
						ty: "st",
						o: {
							a: 0,
							k: 0
						},
						w: {
							a: 0,
							k: 0
						},
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								0
							]
						},
						lc: 3,
						lj: 1,
						ml: 1
					},
					{
						ty: "fl",
						o: {
							a: 0,
							k: 100
						},
						r: 2,
						c: {
							a: 0,
							k: [
								1,
								1,
								1,
								1
							]
						}
					},
					{
						ty: "tr",
						o: {
							a: 0,
							k: 100
						},
						a: {
							a: 0,
							k: [
								0,
								0
							]
						},
						s: {
							a: 0,
							k: [
								100,
								100
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						r: {
							a: 0,
							k: 0
						}
					}
				]
			}
		],
		op: 1
	}
];
var op$1 = 1;
var w$1 = 195;
var h$1 = 134;
var upload = {
	ip: ip$1,
	fr: fr$1,
	v: v$1,
	assets: assets$1,
	layers: layers$1,
	op: op$1,
	w: w$1,
	h: h$1
};

var UploadIcon = function UploadIcon() {
  var uploadRef = React.useRef();
  return /*#__PURE__*/React__default.createElement(LottieView, {
    ref: uploadRef,
    style: {
      height: 120,
      width: 120,
      zIndex: 23
    },
    loop: false,
    source: upload
  });
};

var _templateObject$7, _templateObject2$3, _templateObject3$1;
var ImageLoaderWrapper = styled.View(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  flex: 1;\n  align-items: stretch;\n  justify-content: center;\n  background-color: ", ";\n"])), function (props) {
  return props.background;
});
var ImagePreload = styled(LottieView)(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["\n  align-items: stretch;\n  justify-content: center;\n"])));
var ImageComponent = styled.Image(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n  flex: 1;\n  justify-content: center;\n  opacity: ", ";\n"])), function (props) {
  return props.showImage ? 1 : 0;
});

var ip$2 = 0;
var fr$2 = 60;
var v$2 = "5.1.20";
var assets$2 = [
];
var layers$2 = [
	{
		ty: 4,
		nm: "whiteCircle",
		ip: 0,
		st: 0,
		ind: 3,
		hix: 1,
		ks: {
			o: {
				a: 1,
				k: [
					{
						t: 0,
						s: [
							0
						],
						e: [
							100
						],
						i: {
							x: [
								0.515
							],
							y: [
								0.955
							]
						},
						o: {
							x: [
								0.455
							],
							y: [
								0.03
							]
						}
					},
					{
						t: 42
					}
				]
			},
			or: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			a: {
				a: 0,
				k: [
					180,
					180,
					0
				]
			},
			p: {
				s: true,
				x: {
					a: 1,
					k: [
						{
							t: 0,
							s: [
								274.5
							],
							e: [
								274.4999998180389
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 42
						}
					]
				},
				y: {
					a: 1,
					k: [
						{
							t: 0,
							s: [
								200.00000000000003
							],
							e: [
								199.92
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 42
						}
					]
				}
			},
			rx: {
				a: 0,
				k: 0
			},
			ry: {
				a: 0,
				k: 0
			},
			rz: {
				a: 0,
				k: 0
			},
			s: {
				a: 1,
				k: [
					{
						t: 0,
						s: [
							100,
							100
						],
						e: [
							10.6,
							10.6
						],
						i: {
							x: [
								0.515,
								0.515
							],
							y: [
								0.955,
								0.955
							]
						},
						o: {
							x: [
								0.455,
								0.455
							],
							y: [
								0.03,
								0.03
							]
						}
					},
					{
						t: 42
					}
				]
			}
		},
		shapes: [
			{
				ty: "gr",
				nm: "whiteCircle shape group",
				it: [
					{
						ty: "el",
						p: {
							a: 0,
							k: [
								180,
								180
							]
						},
						s: {
							a: 0,
							k: [
								360,
								360
							]
						}
					},
					{
						ty: "st",
						o: {
							a: 0,
							k: 0
						},
						w: {
							a: 0,
							k: 0
						},
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								0
							]
						},
						lc: 3,
						lj: 1,
						ml: 1
					},
					{
						ty: "fl",
						o: {
							a: 0,
							k: 100
						},
						r: 2,
						c: {
							a: 0,
							k: [
								1,
								1,
								1,
								1
							]
						}
					},
					{
						ty: "tr",
						o: {
							a: 0,
							k: 100
						},
						a: {
							a: 0,
							k: [
								0,
								0
							]
						},
						s: {
							a: 0,
							k: [
								100,
								100
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						r: {
							a: 0,
							k: 0
						}
					}
				]
			}
		],
		op: 42
	},
	{
		ty: 4,
		nm: "whiteCircle",
		ip: 0,
		st: 0,
		ind: 1,
		hix: 2,
		ks: {
			o: {
				a: 1,
				k: [
					{
						t: 0,
						s: [
							100
						],
						e: [
							0
						],
						i: {
							x: [
								0.515
							],
							y: [
								0.955
							]
						},
						o: {
							x: [
								0.455
							],
							y: [
								0.03
							]
						}
					},
					{
						t: 42
					}
				]
			},
			or: {
				a: 0,
				k: [
					0,
					0,
					0
				]
			},
			a: {
				a: 0,
				k: [
					180,
					180,
					0
				]
			},
			p: {
				s: true,
				x: {
					a: 1,
					k: [
						{
							t: 0,
							s: [
								275
							],
							e: [
								274.49999384422307
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 42
						}
					]
				},
				y: {
					a: 1,
					k: [
						{
							t: 0,
							s: [
								199.99999992515563
							],
							e: [
								199.99999384422307
							],
							i: {
								x: [
									0.515
								],
								y: [
									0.955
								]
							},
							o: {
								x: [
									0.455
								],
								y: [
									0.03
								]
							}
						},
						{
							t: 42
						}
					]
				}
			},
			rx: {
				a: 0,
				k: 0
			},
			ry: {
				a: 0,
				k: 0
			},
			rz: {
				a: 0,
				k: 0
			},
			s: {
				a: 1,
				k: [
					{
						t: 0,
						s: [
							10.9,
							10.9
						],
						e: [
							81.5,
							81.5
						],
						i: {
							x: [
								0.515,
								0.515
							],
							y: [
								0.955,
								0.955
							]
						},
						o: {
							x: [
								0.455,
								0.455
							],
							y: [
								0.03,
								0.03
							]
						}
					},
					{
						t: 42
					}
				]
			}
		},
		shapes: [
			{
				ty: "gr",
				nm: "whiteCircle shape group",
				it: [
					{
						ty: "el",
						p: {
							a: 0,
							k: [
								180,
								180
							]
						},
						s: {
							a: 0,
							k: [
								360,
								360
							]
						}
					},
					{
						ty: "st",
						o: {
							a: 0,
							k: 0
						},
						w: {
							a: 0,
							k: 0
						},
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								0
							]
						},
						lc: 3,
						lj: 1,
						ml: 1
					},
					{
						ty: "fl",
						o: {
							a: 0,
							k: 100
						},
						r: 2,
						c: {
							a: 0,
							k: [
								1,
								1,
								1,
								1
							]
						}
					},
					{
						ty: "tr",
						o: {
							a: 0,
							k: 100
						},
						a: {
							a: 0,
							k: [
								0,
								0
							]
						},
						s: {
							a: 0,
							k: [
								100,
								100
							]
						},
						p: {
							a: 0,
							k: [
								0,
								0
							]
						},
						r: {
							a: 0,
							k: 0
						}
					}
				]
			}
		],
		op: 42
	}
];
var op$2 = 42;
var w$2 = 550;
var h$2 = 400;
var loader = {
	ip: ip$2,
	fr: fr$2,
	v: v$2,
	assets: assets$2,
	layers: layers$2,
	op: op$2,
	w: w$2,
	h: h$2
};

var ImageLoader = function ImageLoader(_ref) {
  var background = _ref.background,
      imageUrl = _ref.imageUrl;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showImage = _useState2[0],
      setShowImage = _useState2[1];

  return /*#__PURE__*/React__default.createElement(ImageLoaderWrapper, {
    background: background
  }, !showImage && /*#__PURE__*/React__default.createElement(LottieView, {
    source: loader,
    autoPlay: true,
    loop: true
  }), /*#__PURE__*/React__default.createElement(ImageComponent, {
    source: {
      uri: imageUrl
    },
    showImage: showImage,
    onLoad: function onLoad() {
      return setShowImage(true);
    },
    resizeMode: "cover"
  }));
};

function ImageUpload(_ref) {
  var theme = _ref.theme,
      imageUri = _ref.imageUri,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  React.useEffect(function () {
    if (imageUri) {
      setImage(imageUri);
    }
  }, [imageUri]);
  React.useEffect(function () {
    if (image) {
      onChange(image);
    }
  }, [image]);

  var pickImage = function pickImage() {
    ImagePicker.openPicker({
      width: 400,
      height: 300,
      cropping: true
    }).then(function (image) {
      setImage(image.sourceURL || image.path);
    });
  };

  return /*#__PURE__*/React__default.createElement(reactNative$1.Pressable, {
    onPress: function onPress() {
      return pickImage();
    }
  }, /*#__PURE__*/React__default.createElement(UploadWrapper, {
    theme: theme
  }, image && /*#__PURE__*/React__default.createElement(ImageLoader, {
    background: theme.color1,
    imageUrl: image
  }), !image && /*#__PURE__*/React__default.createElement(UploadIconWrapper, null, /*#__PURE__*/React__default.createElement(UploadIcon, null))));
}

var _templateObject$8;
var Wrapper$1 = styled.View(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["\nflex: 1;\n  min-height: 100px;\n  background-color: ", ";\n  borderTopWidth: 1px;\n  borderColor: ", ";\n"])), function (props) {
  return props.theme.color1;
}, function (props) {
  return props.theme.color7;
});

var FooterActions = React__default.memo(function (_ref) {
  var _ref$leftElement = _ref.leftElement,
      leftElement = _ref$leftElement === void 0 ? false : _ref$leftElement,
      active = _ref.active,
      loading = _ref.loading,
      success = _ref.success,
      error = _ref.error,
      theme = _ref.theme,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;

  return /*#__PURE__*/React__default.createElement(Wrapper$1, {
    theme: theme
  }, /*#__PURE__*/React__default.createElement(atoms.Margin, {
    style: _objectSpread2({
      flex: 1
    }, (loading || success || error) && {
      margin: 0
    })
  }, /*#__PURE__*/React__default.createElement(atoms.Row, {
    style: {
      flex: 1,
      justifyContent: "space-between"
    }
  }, leftElement, /*#__PURE__*/React__default.createElement(atoms.AnimatedButton, {
    active: active,
    color: loading ? "transparent" : theme.color2,
    loading: loading,
    onClick: function onClick() {
      return _onClick();
    },
    success: success,
    error: error,
    successElement: /*#__PURE__*/React__default.createElement(atoms.Center, null, /*#__PURE__*/React__default.createElement(atoms.Success, null)),
    errorElement: /*#__PURE__*/React__default.createElement(atoms.Center, null, /*#__PURE__*/React__default.createElement(atoms.Error, null)),
    LoaderElement: /*#__PURE__*/React__default.createElement(atoms.Center, null, /*#__PURE__*/React__default.createElement(atoms.Loader, {
      color: theme.color2
    }))
  }, /*#__PURE__*/React__default.createElement(atoms.Center, null, /*#__PURE__*/React__default.createElement(atoms.Row, null, /*#__PURE__*/React__default.createElement(atoms.MarginHorizontal, null, /*#__PURE__*/React__default.createElement(atoms.H3, {
    color: theme.color1
  }, "Submit")), /*#__PURE__*/React__default.createElement(atoms.Icon, {
    icon: "next",
    autoplay: false,
    loop: false,
    color: theme.color1
  })))))));
});

var _templateObject$9, _templateObject2$4;
var MerchantCardWrapper = styled.View(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["\n  margin: ", ";\n"])), function (props) {
  return props.theme.margin;
});
var ImageWrapper = styled.View(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["\n  aspect-ratio: 1.7;\n  border-radius: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.theme.borderRadius;
});

function MerchantCard(_ref) {
  var merchant = _ref.merchant,
      theme = _ref.theme;
  return /*#__PURE__*/React__default.createElement(MerchantCardWrapper, {
    theme: theme
  }, /*#__PURE__*/React__default.createElement(ImageWrapper, {
    theme: theme
  }, /*#__PURE__*/React__default.createElement(ImageLoader, {
    background: theme.color7,
    imageUrl: merchant.image_uri
  })), /*#__PURE__*/React__default.createElement(atoms.PaddingVertical, null, /*#__PURE__*/React__default.createElement(atoms.H2, null, merchant.name)));
}

var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var simpleSwizzle = createCommonjsModule(function (module) {



var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});

var colorString = createCommonjsModule(function (module) {
/* MIT license */



var reverseNames = {};

// create a list of reverse color names
for (var name in colorName) {
	if (colorName.hasOwnProperty(name)) {
		reverseNames[colorName[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha, 16) / 255;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorName[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});
var colorString_1 = colorString.to;
var colorString_2 = colorString.get;

var conversions = createCommonjsModule(function (module) {
/* MIT license */


// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});
var conversions_1 = conversions.rgb;
var conversions_2 = conversions.hsl;
var conversions_3 = conversions.hsv;
var conversions_4 = conversions.hwb;
var conversions_5 = conversions.cmyk;
var conversions_6 = conversions.xyz;
var conversions_7 = conversions.lab;
var conversions_8 = conversions.lch;
var conversions_9 = conversions.hex;
var conversions_10 = conversions.keyword;
var conversions_11 = conversions.ansi16;
var conversions_12 = conversions.ansi256;
var conversions_13 = conversions.hcg;
var conversions_14 = conversions.apple;
var conversions_15 = conversions.gray;

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

var colorConvert = convert;

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (obj == null) { // eslint-disable-line no-eq-null,eqeqeq
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorConvert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		if (!mixinColor || !mixinColor.rgb) {
			throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
		}
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = colorConvert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

var color = Color;

var _templateObject$a, _templateObject2$5, _templateObject3$2;
var Wrapper$2 = styled.View(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["\n  border-width: 1px;\n  border-color: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n"])), function (props) {
  return props.theme.color7;
}, function (props) {
  return props.theme.borderRadius;
}, function (props) {
  return color(props.color).lighten(0.5);
});
var AniWrapper = styled.View(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral([""])));
var PaxWrapper = styled.View(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: -7px;\n  right: -7px;\n  border-radius: 15px;\n  background-color: red;\n"])));

var v$3 = "5.6.10";
var fr$3 = 60;
var ip$3 = 0;
var op$3 = 128;
var w$3 = 1080;
var h$3 = 1080;
var nm = "Happy_MAIN";
var ddd = 0;
var assets$3 = [
	{
		id: "comp_0",
		layers: [
			{
				ddd: 0,
				ind: 1,
				ty: 4,
				nm: "Head_V1",
				sr: 1,
				ks: {
					o: {
						a: 0,
						k: 100,
						ix: 11
					},
					r: {
						a: 0,
						k: 0,
						ix: 10
					},
					p: {
						a: 0,
						k: [
							540,
							540,
							0
						],
						ix: 2
					},
					a: {
						a: 0,
						k: [
							0,
							0,
							0
						],
						ix: 1
					},
					s: {
						a: 0,
						k: [
							100,
							100,
							100
						],
						ix: 6
					}
				},
				ao: 0,
				shapes: [
					{
						ty: "gr",
						it: [
							{
								d: 1,
								ty: "el",
								s: {
									a: 0,
									k: [
										770,
										770
									],
									ix: 2
								},
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 3
								},
								nm: "Ellipse Path 1",
								mn: "ADBE Vector Shape - Ellipse",
								hd: false
							},
							{
								ty: "gf",
								o: {
									a: 0,
									k: 100,
									ix: 10
								},
								r: 1,
								bm: 0,
								g: {
									p: 5,
									k: {
										a: 0,
										k: [
											0,
											0.992,
											0.844,
											0.216,
											0.65,
											0.955,
											0.724,
											0.27,
											0.884,
											0.918,
											0.604,
											0.323,
											0.952,
											0.951,
											0.717,
											0.318,
											1,
											0.984,
											0.831,
											0.314
										],
										ix: 9
									}
								},
								s: {
									a: 0,
									k: [
										67.75,
										-74.477
									],
									ix: 5
								},
								e: {
									a: 0,
									k: [
										-291.227,
										250.305
									],
									ix: 6
								},
								t: 2,
								h: {
									a: 0,
									k: 0,
									ix: 7
								},
								a: {
									a: 0,
									k: 0,
									ix: 8
								},
								nm: "Gradient Fill 1",
								mn: "ADBE Vector Graphic - G-Fill",
								hd: false
							},
							{
								ty: "tr",
								p: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 2
								},
								a: {
									a: 0,
									k: [
										0,
										0
									],
									ix: 1
								},
								s: {
									a: 0,
									k: [
										100,
										100
									],
									ix: 3
								},
								r: {
									a: 0,
									k: 0,
									ix: 6
								},
								o: {
									a: 0,
									k: 100,
									ix: 7
								},
								sk: {
									a: 0,
									k: 0,
									ix: 4
								},
								sa: {
									a: 0,
									k: 0,
									ix: 5
								},
								nm: "Transform"
							}
						],
						nm: "Ellipse 1",
						np: 2,
						cix: 2,
						bm: 0,
						ix: 1,
						mn: "ADBE Vector Group",
						hd: false
					}
				],
				ip: 0,
				op: 3604,
				st: 0,
				bm: 0
			}
		]
	}
];
var layers$3 = [
	{
		ddd: 0,
		ind: 1,
		ty: 3,
		nm: "Face Null",
		parent: 7,
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 0,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				s: true,
				x: {
					a: 0,
					k: 540,
					ix: 3
				},
				y: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							t: 2,
							s: [
								540
							]
						},
						{
							i: {
								x: [
									0.025
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							t: 14,
							s: [
								638.4
							]
						},
						{
							i: {
								x: [
									0.552
								],
								y: [
									0.924
								]
							},
							o: {
								x: [
									0.846
								],
								y: [
									0
								]
							},
							t: 44,
							s: [
								505.6
							]
						},
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.359
								],
								y: [
									-0.123
								]
							},
							t: 68,
							s: [
								561.8
							]
						},
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.167
								],
								y: [
									0
								]
							},
							t: 89,
							s: [
								537.4
							]
						},
						{
							t: 111,
							s: [
								540
							]
						}
					],
					ix: 4
				}
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		ip: 0,
		op: 3604,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 2,
		ty: 4,
		nm: "R_Eye_Closed",
		parent: 1,
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					120.375,
					-107.75,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					-107.875,
					88.25,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					-100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[
										0,
										0
									],
									[
										0,
										0
									]
								],
								o: [
									[
										0,
										0
									],
									[
										0,
										0
									]
								],
								v: [
									[
										-145,
										88.476
									],
									[
										-70.75,
										88.024
									]
								],
								c: false
							},
							ix: 2
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								1
							],
							ix: 3
						},
						o: {
							a: 0,
							k: 100,
							ix: 4
						},
						w: {
							a: 0,
							k: 17,
							ix: 5
						},
						lc: 2,
						lj: 1,
						ml: 4,
						bm: 0,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Shape 1",
				np: 2,
				cix: 2,
				bm: 0,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false
			}
		],
		ip: 7,
		op: 14,
		st: 3,
		bm: 0
	},
	{
		ddd: 0,
		ind: 3,
		ty: 4,
		nm: "R_Eye",
		parent: 1,
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					121,
					-108,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.19,
								0.19,
								0.19
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								0.333,
								0.333,
								0.333
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 4,
						s: [
							-122,
							190,
							100
						]
					},
					{
						i: {
							x: [
								0.19,
								0.19,
								0.19
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								0.333,
								0.333,
								0.333
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 9,
						s: [
							-154.5,
							25.2,
							100
						]
					},
					{
						i: {
							x: [
								0.19,
								0.19,
								0.19
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								0.333,
								0.333,
								0.333
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 14,
						s: [
							-154.5,
							25.2,
							100
						]
					},
					{
						i: {
							x: [
								0.833,
								0.833,
								0.833
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								0.167,
								0.167,
								0.167
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 19,
						s: [
							-117.2,
							206.9,
							100
						]
					},
					{
						t: 24,
						s: [
							-122,
							190,
							100
						]
					}
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: {
							a: 0,
							k: [
								51,
								51
							],
							ix: 2
						},
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 3
						},
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse",
						hd: false
					},
					{
						ty: "fl",
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								1
							],
							ix: 4
						},
						o: {
							a: 0,
							k: 100,
							ix: 5
						},
						r: 1,
						bm: 0,
						nm: "Fill 1",
						mn: "ADBE Vector Graphic - Fill",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Ellipse 1",
				np: 2,
				cix: 2,
				bm: 0,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false
			}
		],
		ip: 0,
		op: 168,
		st: 3,
		bm: 0
	},
	{
		ddd: 0,
		ind: 4,
		ty: 4,
		nm: "L_Eye_Closed",
		parent: 1,
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					-120.375,
					-107.75,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					-107.875,
					88.25,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[
										0,
										0
									],
									[
										0,
										0
									]
								],
								o: [
									[
										0,
										0
									],
									[
										0,
										0
									]
								],
								v: [
									[
										-145,
										88.476
									],
									[
										-70.75,
										88.024
									]
								],
								c: false
							},
							ix: 2
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								1
							],
							ix: 3
						},
						o: {
							a: 0,
							k: 100,
							ix: 4
						},
						w: {
							a: 0,
							k: 17,
							ix: 5
						},
						lc: 2,
						lj: 1,
						ml: 4,
						bm: 0,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Shape 1",
				np: 2,
				cix: 2,
				bm: 0,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false
			}
		],
		ip: 7,
		op: 14,
		st: 3,
		bm: 0
	},
	{
		ddd: 0,
		ind: 5,
		ty: 4,
		nm: "L_Eye",
		parent: 1,
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				a: 0,
				k: [
					-121,
					-108,
					0
				],
				ix: 2
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 1,
				k: [
					{
						i: {
							x: [
								0.19,
								0.19,
								0.19
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								0.333,
								0.333,
								0.333
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 4,
						s: [
							122,
							190,
							100
						]
					},
					{
						i: {
							x: [
								0.19,
								0.19,
								0.19
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								0.333,
								0.333,
								0.333
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 9,
						s: [
							154.5,
							25.2,
							100
						]
					},
					{
						i: {
							x: [
								0.19,
								0.19,
								0.19
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								0.333,
								0.333,
								0.333
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 14,
						s: [
							154.5,
							25.2,
							100
						]
					},
					{
						i: {
							x: [
								0.833,
								0.833,
								0.833
							],
							y: [
								1,
								1,
								1
							]
						},
						o: {
							x: [
								0.167,
								0.167,
								0.167
							],
							y: [
								0,
								0,
								0
							]
						},
						t: 19,
						s: [
							117.2,
							206.9,
							100
						]
					},
					{
						t: 24,
						s: [
							122,
							190,
							100
						]
					}
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						d: 1,
						ty: "el",
						s: {
							a: 0,
							k: [
								51,
								51
							],
							ix: 2
						},
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 3
						},
						nm: "Ellipse Path 1",
						mn: "ADBE Vector Shape - Ellipse",
						hd: false
					},
					{
						ty: "fl",
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								1
							],
							ix: 4
						},
						o: {
							a: 0,
							k: 100,
							ix: 5
						},
						r: 1,
						bm: 0,
						nm: "Fill 1",
						mn: "ADBE Vector Graphic - Fill",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Ellipse 1",
				np: 2,
				cix: 2,
				bm: 0,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false
			}
		],
		ip: 0,
		op: 168,
		st: 3,
		bm: 0
	},
	{
		ddd: 0,
		ind: 6,
		ty: 4,
		nm: "Smile",
		parent: 7,
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				s: true,
				x: {
					a: 0,
					k: 540,
					ix: 3
				},
				y: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							t: 3,
							s: [
								553.989
							]
						},
						{
							i: {
								x: [
									0.025
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							t: 15,
							s: [
								615.689
							]
						},
						{
							i: {
								x: [
									0.552
								],
								y: [
									0.924
								]
							},
							o: {
								x: [
									0.846
								],
								y: [
									0
								]
							},
							t: 45,
							s: [
								509.489
							]
						},
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.359
								],
								y: [
									-0.145
								]
							},
							t: 69,
							s: [
								575.789
							]
						},
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.167
								],
								y: [
									0
								]
							},
							t: 90,
							s: [
								551.389
							]
						},
						{
							t: 112,
							s: [
								554
							]
						}
					],
					ix: 4
				}
			},
			a: {
				a: 0,
				k: [
					0,
					0,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		shapes: [
			{
				ty: "gr",
				it: [
					{
						ind: 0,
						ty: "sh",
						ix: 1,
						ks: {
							a: 0,
							k: {
								i: [
									[
										13.439,
										-69.684
									],
									[
										87.5,
										0
									],
									[
										19.5,
										71
									]
								],
								o: [
									[
										-13.5,
										70
									],
									[
										-89,
										0
									],
									[
										-18.795,
										-68.434
									]
								],
								v: [
									[
										191.5,
										0
									],
									[
										0,
										128.5
									],
									[
										-191.5,
										0
									]
								],
								c: false
							},
							ix: 2
						},
						nm: "Path 1",
						mn: "ADBE Vector Shape - Group",
						hd: false
					},
					{
						ty: "tm",
						s: {
							a: 1,
							k: [
								{
									i: {
										x: [
											0.667
										],
										y: [
											1
										]
									},
									o: {
										x: [
											0.167
										],
										y: [
											0
										]
									},
									t: 3,
									s: [
										9
									]
								},
								{
									i: {
										x: [
											0.209
										],
										y: [
											1
										]
									},
									o: {
										x: [
											0.333
										],
										y: [
											0
										]
									},
									t: 15,
									s: [
										11
									]
								},
								{
									i: {
										x: [
											0.742
										],
										y: [
											1
										]
									},
									o: {
										x: [
											0.846
										],
										y: [
											0
										]
									},
									t: 45,
									s: [
										0
									]
								},
								{
									t: 69,
									s: [
										9
									]
								}
							],
							ix: 1
						},
						e: {
							a: 1,
							k: [
								{
									i: {
										x: [
											0.667
										],
										y: [
											1
										]
									},
									o: {
										x: [
											0.167
										],
										y: [
											0
										]
									},
									t: 3,
									s: [
										91
									]
								},
								{
									i: {
										x: [
											0.209
										],
										y: [
											1
										]
									},
									o: {
										x: [
											0.333
										],
										y: [
											0
										]
									},
									t: 15,
									s: [
										89
									]
								},
								{
									i: {
										x: [
											0.742
										],
										y: [
											1
										]
									},
									o: {
										x: [
											0.846
										],
										y: [
											0
										]
									},
									t: 45,
									s: [
										100
									]
								},
								{
									t: 69,
									s: [
										91
									]
								}
							],
							ix: 2
						},
						o: {
							a: 0,
							k: 0,
							ix: 3
						},
						m: 1,
						ix: 2,
						nm: "Trim Paths 1",
						mn: "ADBE Vector Filter - Trim",
						hd: false
					},
					{
						ty: "st",
						c: {
							a: 0,
							k: [
								0,
								0,
								0,
								1
							],
							ix: 3
						},
						o: {
							a: 0,
							k: 100,
							ix: 4
						},
						w: {
							a: 0,
							k: 30,
							ix: 5
						},
						lc: 2,
						lj: 1,
						ml: 4,
						bm: 0,
						nm: "Stroke 1",
						mn: "ADBE Vector Graphic - Stroke",
						hd: false
					},
					{
						ty: "tr",
						p: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 2
						},
						a: {
							a: 0,
							k: [
								0,
								0
							],
							ix: 1
						},
						s: {
							a: 0,
							k: [
								100,
								100
							],
							ix: 3
						},
						r: {
							a: 0,
							k: 0,
							ix: 6
						},
						o: {
							a: 0,
							k: 100,
							ix: 7
						},
						sk: {
							a: 0,
							k: 0,
							ix: 4
						},
						sa: {
							a: 0,
							k: 0,
							ix: 5
						},
						nm: "Transform"
					}
				],
				nm: "Ellipse 1",
				np: 3,
				cix: 2,
				bm: 0,
				ix: 1,
				mn: "ADBE Vector Group",
				hd: false
			}
		],
		ip: 0,
		op: 3604,
		st: 0,
		bm: 0
	},
	{
		ddd: 0,
		ind: 7,
		ty: 0,
		nm: "HEAD",
		refId: "comp_0",
		sr: 1,
		ks: {
			o: {
				a: 0,
				k: 100,
				ix: 11
			},
			r: {
				a: 0,
				k: 0,
				ix: 10
			},
			p: {
				s: true,
				x: {
					a: 0,
					k: 540,
					ix: 3
				},
				y: {
					a: 1,
					k: [
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							t: 3,
							s: [
								540
							]
						},
						{
							i: {
								x: [
									0.025
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.333
								],
								y: [
									0
								]
							},
							t: 15,
							s: [
								603.3
							]
						},
						{
							i: {
								x: [
									0.552
								],
								y: [
									0.924
								]
							},
							o: {
								x: [
									0.846
								],
								y: [
									0
								]
							},
							t: 45,
							s: [
								505.6
							]
						},
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.359
								],
								y: [
									-0.132
								]
							},
							t: 69,
							s: [
								561.8
							]
						},
						{
							i: {
								x: [
									0.667
								],
								y: [
									1
								]
							},
							o: {
								x: [
									0.167
								],
								y: [
									0
								]
							},
							t: 90,
							s: [
								539.1
							]
						},
						{
							t: 112,
							s: [
								546.1
							]
						}
					],
					ix: 4
				}
			},
			a: {
				a: 0,
				k: [
					540,
					540,
					0
				],
				ix: 1
			},
			s: {
				a: 0,
				k: [
					100,
					100,
					100
				],
				ix: 6
			}
		},
		ao: 0,
		w: 1080,
		h: 1080,
		ip: 0,
		op: 3604,
		st: 0,
		bm: 0
	}
];
var markers = [
	{
		tm: 128,
		cm: "LOOP",
		dr: 0
	}
];
var Happy_Shaded = {
	v: v$3,
	fr: fr$3,
	ip: ip$3,
	op: op$3,
	w: w$3,
	h: h$3,
	nm: nm,
	ddd: ddd,
	assets: assets$3,
	layers: layers$3,
	markers: markers
};

var BookingMerchant = React__default.memo(function (_ref) {
  var name = _ref.name,
      status = _ref.status,
      pax = _ref.pax,
      theme = _ref.theme,
      _ref$onClick = _ref.onClick;
  var statusColors = {
    Pending: theme.color12
  };
  return /*#__PURE__*/React__default.createElement(Wrapper$2, {
    theme: theme,
    color: statusColors[status]
  }, /*#__PURE__*/React__default.createElement(atoms.Padding, null, /*#__PURE__*/React__default.createElement(atoms.Row, null, /*#__PURE__*/React__default.createElement(AniWrapper, null, /*#__PURE__*/React__default.createElement(LottieView, {
    style: {
      height: 50
    },
    autoPlay: true,
    loop: true,
    source: Happy_Shaded
  }), /*#__PURE__*/React__default.createElement(PaxWrapper, null, /*#__PURE__*/React__default.createElement(atoms.Center, null, /*#__PURE__*/React__default.createElement(atoms.H3, null, pax)))), /*#__PURE__*/React__default.createElement(atoms.Padding, null, /*#__PURE__*/React__default.createElement(atoms.H3, null, name), /*#__PURE__*/React__default.createElement(atoms.H4, null, status)))));
});

exports.AccordionItem = AccordionItem;
exports.AccordionProvider = AccordionProvider;
exports.AccordionScroll = AccordionScroll;
exports.AccordionScroller = AccordionScroller;
exports.BookingMerchant = BookingMerchant;
exports.FooterActions = FooterActions;
exports.ImageLoader = ImageLoader;
exports.ImageUpload = ImageUpload;
exports.Map = Map$1;
exports.MerchantCard = MerchantCard;
exports.Modal = Modal;
exports.useAccordionContext = useAccordionContext;
