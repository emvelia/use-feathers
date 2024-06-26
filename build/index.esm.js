import React, { useContext, useState, useReducer, useEffect } from 'react';

/*! *****************************************************************************
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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
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
reactIs_development.AsyncMode;
reactIs_development.ConcurrentMode;
reactIs_development.ContextConsumer;
reactIs_development.ContextProvider;
reactIs_development.Element;
reactIs_development.ForwardRef;
reactIs_development.Fragment;
reactIs_development.Lazy;
reactIs_development.Memo;
reactIs_development.Portal;
reactIs_development.Profiler;
reactIs_development.StrictMode;
reactIs_development.Suspense;
reactIs_development.isAsyncMode;
reactIs_development.isConcurrentMode;
reactIs_development.isContextConsumer;
reactIs_development.isContextProvider;
reactIs_development.isElement;
reactIs_development.isForwardRef;
reactIs_development.isFragment;
reactIs_development.isLazy;
reactIs_development.isMemo;
reactIs_development.isPortal;
reactIs_development.isProfiler;
reactIs_development.isStrictMode;
reactIs_development.isSuspense;
reactIs_development.isValidElementType;
reactIs_development.typeOf;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$2;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;

var has$1 = has$2;

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret$1;
  var loggedTypeFailures = {};
  var has = has$1;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

var checkPropTypes = checkPropTypes_1;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has$1(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has$1(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret$1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var require$$1 = factoryWithTypeCheckers;

var require$$2 = factoryWithThrowingShims;

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require$$1(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require$$2();
}
});

var PropTypes = propTypes;

// ensure the keys being passed is an array of key paths
// example: 'a.b' becomes ['a', 'b'] unless it was already ['a', 'b']
var keys = function (ks) { return (Array.isArray(ks) ? ks : ks.split('.')); };
// traverse the set of keys left to right,
// returning the current value in each iteration.
// if at any point the value for the current key does not exist,
// return the default value
var deepGet = function (o, kp, d) {
    return keys(kp).reduce(function (o, k) { return (o && o[k]) || d; }, o);
};
// traverse the set of keys right to left,
// returning a new object containing both properties from the object
// we were originally passed and our new property.
//
// Example:
// If o = { a: { b: { c: 1 } } }
//
// deepSet(o, ['a', 'b', 'c'], 2) will progress thus:
// 1. c = Object.assign({}, {c: 1}, { c: 2 })
// 2. b = Object.assign({}, { b: { c: 1 } }, { b: c })
// 3. returned = Object.assign({}, { a: { b: { c: 1 } } }, { a: b })
var deepSet = function (o, kp, v) {
    return keys(kp).reduceRight(
    // eslint-disable-next-line no-shadow
    function (v, k, i, ks) {
        var _a;
        return (__assign(__assign({}, deepGet(o, ks.slice(0, i))), (_a = {}, _a[k] = v, _a)));
    }, v);
};
var multiDeepSet = function (stateParam, params) {
    if (params === void 0) { params = []; }
    var state = stateParam;
    // eslint-disable-next-line no-restricted-syntax
    for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
        var _a = params_1[_i], path = _a[0], value = _a[1];
        state = deepSet(state, path, value);
    }
    return state;
};

var actionTypes = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
    RESET: 'RESET',
    INITIAL_SERVICES: 'INITIAL_SERVICES',
    UPDATED: 'UPDATED',
    REMOVED: 'REMOVED',
    PATCHED: 'PATCHED',
    CREATED: 'CREATED',
};
var serviceMethods = {
    FIND: 'FIND',
    GET: 'GET',
    UPDATE: 'UPDATE',
    REMOVE: 'REMOVE',
    PATCH: 'PATCH',
    CREATE: 'CREATE',
};
var serviceEvents = {
    UPDATED: 'UPDATED',
    REMOVED: 'REMOVED',
    PATCHED: 'PATCHED',
    CREATED: 'CREATED',
};

var reducer = function (idFieldName) { return function (state, action) {
    switch (action.type) {
        case actionTypes.PENDING:
            return multiDeepSet(state, [
                [['serviceState', action.service, action.method, 'isPending'], true],
                [['serviceState', action.service, action.method, 'error'], null],
                [['serviceState', action.service, action.method, 'isLoaded'], false],
            ]);
        case actionTypes.FULFILLED:
            return multiDeepSet(state, [
                [
                    ['serviceState', action.service, action.method, 'data'],
                    action.result,
                ],
                [['serviceState', action.service, action.method, 'isLoaded'], true],
                [['serviceState', action.service, action.method, 'isPending'], false],
                [['serviceState', action.service, action.method, 'error'], null],
            ]);
        case actionTypes.REJECTED:
            return multiDeepSet(state, [
                [
                    ['serviceState', action.service, action.method, 'error'],
                    action.error,
                ],
                [['serviceState', action.service, action.method, 'isLoaded'], true],
                [['serviceState', action.service, action.method, 'isPending'], false],
            ]);
        case actionTypes.RESET:
            return multiDeepSet(state, [
                [['serviceState', action.service, action.method, 'error'], null],
                [['serviceState', action.service, action.method, 'isLoaded'], false],
                [['serviceState', action.service, action.method, 'isPending'], false],
                [
                    ['serviceState', action.service, action.method, 'data'],
                    action.method === 'FIND'
                        ?
                            {
                                total: 0,
                                limit: 10,
                                skip: 0,
                                data: [],
                            }
                        :
                            null
                ],
            ]);
        case actionTypes.INITIAL_SERVICES:
            return __assign(__assign({}, state), { serviceState: action.initialServiceState });
        case actionTypes.CREATED:
            return multiDeepSet(state, [
                [
                    ['serviceState', action.service, serviceMethods.FIND, 'data', 'data'],
                    __spreadArrays(deepGet(state, [
                        'serviceState',
                        action.service,
                        serviceMethods.FIND,
                        'data',
                        'data',
                    ]), [
                        action.data,
                    ]),
                ],
                [
                    [
                        'serviceState',
                        action.service,
                        serviceMethods.FIND,
                        'data',
                        'total',
                    ],
                    (deepGet(state, [
                        'serviceState',
                        action.service,
                        serviceMethods.FIND,
                        'data',
                        'total',
                    ]) || 0) + 1,
                ],
            ]);
        case actionTypes.REMOVED:
            return multiDeepSet(state, [
                [
                    ['serviceState', action.service, serviceMethods.FIND, 'data', 'data'],
                    __spreadArrays(deepGet(state, [
                        'serviceState',
                        action.service,
                        serviceMethods.FIND,
                        'data',
                        'data',
                    ]).filter(function (item) { return item[idFieldName] !== action.data[idFieldName]; })),
                ],
                [
                    [
                        'serviceState',
                        action.service,
                        serviceMethods.FIND,
                        'data',
                        'total',
                    ],
                    deepGet(state, [
                        'serviceState',
                        action.service,
                        serviceMethods.FIND,
                        'data',
                        'total',
                    ]) - 1,
                ],
            ]);
        case actionTypes.UPDATED:
        case actionTypes.PATCHED:
            return multiDeepSet(state, [
                [
                    ['serviceState', action.service, serviceMethods.FIND, 'data', 'data'],
                    __spreadArrays(deepGet(state, [
                        'serviceState',
                        action.service,
                        serviceMethods.FIND,
                        'data',
                        'data',
                    ]).map(function (item) {
                        if (item[idFieldName] === action.data[idFieldName]) {
                            return action.data;
                        }
                        return item;
                    })),
                ],
            ]);
        default:
            throw new Error();
    }
}; };

var useCreate = function (_a) {
    var dispatch = _a.dispatch, resetState = _a.resetState, feathersClient = _a.feathersClient, state = _a.state;
    return function (service) { return ({
        // inject reducer state
        state: deepGet(state, ['serviceState', service, serviceMethods.CREATE]),
        resetCreateState: function () { return resetState(service, serviceMethods.CREATE); },
        createAction: function (data, params) {
            dispatch({
                type: actionTypes.PENDING,
                method: serviceMethods.CREATE,
                service: service,
            });
            return feathersClient
                .service(service)
                .create(data, params)
                .then(function (result) {
                dispatch({
                    type: actionTypes.FULFILLED,
                    method: serviceMethods.CREATE,
                    service: service,
                    result: result,
                });
            })
                .catch(function (error) {
                dispatch({
                    type: actionTypes.REJECTED,
                    method: serviceMethods.CREATE,
                    service: service,
                    error: error,
                });
            });
        },
    }); };
};

var useFind = function (_a) {
    var dispatch = _a.dispatch, resetState = _a.resetState, feathersClient = _a.feathersClient, state = _a.state;
    return function (service) { return ({
        // inject reducer state
        state: deepGet(state, ['serviceState', service, serviceMethods.FIND]),
        resetFindState: function () { return resetState(service, serviceMethods.FIND); },
        findAction: function (query) {
            if (query === void 0) { query = {}; }
            dispatch({
                type: actionTypes.PENDING,
                method: serviceMethods.FIND,
                service: service,
            });
            feathersClient
                .service(service)
                .find({
                query: query,
            })
                .then(function (result) {
                dispatch({
                    type: actionTypes.FULFILLED,
                    method: serviceMethods.FIND,
                    service: service,
                    result: result,
                });
            })
                .catch(function (error) {
                dispatch({
                    type: actionTypes.REJECTED,
                    method: serviceMethods.FIND,
                    service: service,
                    error: error,
                });
            });
        },
    }); };
};

var useGet = function (_a) {
    var dispatch = _a.dispatch, resetState = _a.resetState, feathersClient = _a.feathersClient, state = _a.state;
    return function (service) { return ({
        // inject reducer state
        state: deepGet(state, ['serviceState', service, serviceMethods.GET]),
        resetGetState: function () { return resetState(service, serviceMethods.GET); },
        getAction: function (id) {
            dispatch({
                type: actionTypes.PENDING,
                method: serviceMethods.GET,
                service: service,
            });
            feathersClient
                .service(service)
                .get(id)
                .then(function (result) {
                dispatch({
                    type: actionTypes.FULFILLED,
                    method: serviceMethods.GET,
                    service: service,
                    result: result,
                });
            })
                .catch(function (error) {
                dispatch({
                    type: actionTypes.REJECTED,
                    method: serviceMethods.GET,
                    service: service,
                    error: error,
                });
            });
        },
    }); };
};

var useRemove = function (_a) {
    var dispatch = _a.dispatch, resetState = _a.resetState, feathersClient = _a.feathersClient, state = _a.state;
    return function (service) { return ({
        // inject reducer state
        state: deepGet(state, ['serviceState', service, serviceMethods.REMOVE]),
        resetRemoveState: function () { return resetState(service, serviceMethods.REMOVE); },
        removeAction: function (id, query) {
            if (query === void 0) { query = {}; }
            dispatch({
                type: actionTypes.PENDING,
                method: serviceMethods.REMOVE,
                service: service,
            });
            return feathersClient
                .service(service)
                .remove(id, { query: query })
                .then(function (result) {
                dispatch({
                    type: actionTypes.FULFILLED,
                    method: serviceMethods.REMOVE,
                    service: service,
                    result: result,
                });
            })
                .catch(function (error) {
                dispatch({
                    type: actionTypes.REJECTED,
                    method: serviceMethods.REMOVE,
                    service: service,
                    error: error,
                });
            });
        },
    }); };
};

var useUpdate = function (_a) {
    var dispatch = _a.dispatch, resetState = _a.resetState, feathersClient = _a.feathersClient, state = _a.state;
    return function (service) { return ({
        // inject reducer state
        state: deepGet(state, ['serviceState', service, serviceMethods.UPDATE]),
        resetUpdateState: function () { return resetState(service, serviceMethods.UPDATE); },
        updateAction: function (id, params, query) {
            if (params === void 0) { params = {}; }
            if (query === void 0) { query = {}; }
            dispatch({
                type: actionTypes.PENDING,
                method: serviceMethods.UPDATE,
                service: service,
            });
            return feathersClient
                .service(service)
                .update(id, params, { query: query })
                .then(function (result) {
                dispatch({
                    type: actionTypes.FULFILLED,
                    method: serviceMethods.UPDATE,
                    service: service,
                    result: result,
                });
            })
                .catch(function (error) {
                dispatch({
                    type: actionTypes.REJECTED,
                    method: serviceMethods.UPDATE,
                    service: service,
                    error: error,
                });
            });
        },
    }); };
};

var usePatch = function (_a) {
    var dispatch = _a.dispatch, resetState = _a.resetState, feathersClient = _a.feathersClient, state = _a.state;
    return function (service) { return ({
        // inject reducer state
        state: deepGet(state, ['serviceState', service, serviceMethods.PATCH]),
        resetPatchState: function () { return resetState(service, serviceMethods.PATCH); },
        patchAction: function (id, data, params) {
            if (data === void 0) { data = {}; }
            if (params === void 0) { params = {}; }
            dispatch({
                type: actionTypes.PENDING,
                method: serviceMethods.PATCH,
                service: service,
            });
            return feathersClient
                .service(service)
                .patch(id, data, params)
                .then(function (result) {
                dispatch({
                    type: actionTypes.FULFILLED,
                    method: serviceMethods.PATCH,
                    service: service,
                    result: result,
                });
            })
                .catch(function (error) {
                dispatch({
                    type: actionTypes.REJECTED,
                    method: serviceMethods.PATCH,
                    service: service,
                    error: error,
                });
            });
        },
    }); };
};

var mainHooks = function (_a) {
    var dispatch = _a.dispatch, resetState = _a.resetState, feathersClient = _a.feathersClient, state = _a.state;
    var mainParams = {
        dispatch: dispatch,
        resetState: resetState,
        feathersClient: feathersClient,
        state: state,
    };
    return {
        useCreate: useCreate(mainParams),
        useFind: useFind(mainParams),
        useGet: useGet(mainParams),
        useRemove: useRemove(mainParams),
        useUpdate: useUpdate(mainParams),
        usePatch: usePatch(mainParams),
    };
};

var FeathersContext = React.createContext(null);
var useFeathers = function () { return useContext(FeathersContext); };
var initialState = {};
var FeathersProvider = function (_a) {
    var children = _a.children, feathersClient = _a.client, _b = _a.initialServices, initialServices = _b === void 0 ? [] : _b, realtime = _a.realtime, idFieldName = _a.idFieldName;
    var _c = useState(false), isLoggedIn = _c[0], setIsLoggedIn = _c[1];
    var _d = useState(null), userInfo = _d[0], setUserInfo = _d[1];
    var _e = useReducer(reducer(idFieldName), initialState), state = _e[0], dispatch = _e[1];
    var useServiceEvents = function (service, handler) {
        feathersClient
            .service(service)
            .on('created', function (data) { return handler('created', data); })
            .on('updated', function (data) { return handler('updated', data); })
            .on('patched', function (data) { return handler('patched', data); })
            .on('removed', function (data) { return handler('removed', data); });
    };
    useEffect(function () {
        var _a;
        var initialServiceState = {};
        var serviceState = (_a = {},
            _a[serviceMethods.FIND] = {
                isPending: false,
                isLoaded: false,
                error: null,
                data: {
                    total: 0,
                    limit: 10,
                    skip: 0,
                    data: [],
                },
            },
            _a[serviceMethods.GET] = {
                isPending: false,
                isLoaded: false,
                error: null,
                data: null,
            },
            _a[serviceMethods.CREATE] = {
                isPending: false,
                isLoaded: false,
                error: null,
                data: null,
            },
            _a[serviceMethods.UPDATE] = {
                isPending: false,
                isLoaded: false,
                error: null,
                data: null,
            },
            _a[serviceMethods.PATCH] = {
                isPending: false,
                isLoaded: false,
                error: null,
                data: null,
            },
            _a[serviceMethods.REMOVE] = {
                isPending: false,
                isLoaded: false,
                error: null,
                data: null,
            },
            _a);
        var _loop_1 = function (service) {
            initialServiceState[service] = serviceState;
            if (realtime) {
                useServiceEvents(service, function (event, data) {
                    var EVENT = event.toUpperCase();
                    if (serviceEvents[EVENT]) {
                        dispatch({
                            type: event.toUpperCase(),
                            data: data,
                            service: service,
                        });
                    }
                });
            }
        };
        // eslint-disable-next-line no-restricted-syntax
        for (var _i = 0, initialServices_1 = initialServices; _i < initialServices_1.length; _i++) {
            var service = initialServices_1[_i];
            _loop_1(service);
        }
        dispatch({ type: actionTypes.INITIAL_SERVICES, initialServiceState: initialServiceState });
    }, []);
    /*
     * @param data
     * @param data.user
     * @param data.accessToken
     * @return {Object}
     */
    var successfulLogin = function (data) {
        var user = data.user;
        setIsLoggedIn(true);
        setUserInfo(user);
        return data;
    };
    /*
     * @return {Promise}
     */
    var checkAuth = function () {
        return feathersClient.get('authentication').then(successfulLogin);
    };
    /*
     * @param loginInfo
     * @param loginInfo.email    user email
     * @param loginInfo.password user password
     * @return {Promise}
     */
    var login = function (_a) {
        var _b = _a.email, email = _b === void 0 ? '' : _b, _c = _a.password, password = _c === void 0 ? '' : _c;
        return (feathersClient
            .authenticate({
            strategy: 'local',
            email: email,
            password: password,
        })
            .then(successfulLogin));
    };
    /*
     * @param registerInfo
     * @param registerInfo.email    user email
     * @param registerInfo.password user password
     * @return {Promise}
     */
    var register = function (_a) {
        var _b = _a.email, email = _b === void 0 ? '' : _b, _c = _a.password, password = _c === void 0 ? '' : _c, otherFields = __rest(_a, ["email", "password"]);
        return (feathersClient.service('users').create(__assign({ email: email,
            password: password }, otherFields)));
    };
    /*
     * @return {Promise}
     */
    var reAuth = function () { return feathersClient.reAuthenticate().then(function () { return checkAuth(); }); };
    /*
     * @return {Promise}
     */
    var logout = function () { return feathersClient.logout().then(function () {
        setIsLoggedIn(false);
        setUserInfo(null);
    }); };
    var resetState = function (service, method) { return (dispatch({
        type: actionTypes.RESET,
        method: method,
        service: service,
    })); };
    var _f = mainHooks({
        dispatch: dispatch, resetState: resetState, feathersClient: feathersClient, state: state
    }), useFind = _f.useFind, useGet = _f.useGet, useCreate = _f.useCreate, useUpdate = _f.useUpdate, usePatch = _f.usePatch, useRemove = _f.useRemove;
    var value = {
        checkAuth: checkAuth,
        login: login,
        register: register,
        reAuth: reAuth,
        logout: logout,
        isLoggedIn: isLoggedIn,
        userInfo: userInfo,
        mainState: state,
        useFind: useFind,
        useGet: useGet,
        useCreate: useCreate,
        useUpdate: useUpdate,
        usePatch: usePatch,
        useRemove: useRemove,
        useServiceEvents: useServiceEvents,
    };
    return (React.createElement(FeathersContext.Provider, { value: value }, children));
};
FeathersProvider.propTypes = {
    children: PropTypes.element.isRequired,
    client: PropTypes.object.isRequired,
    realtime: PropTypes.bool,
    initialServices: PropTypes.arrayOf(PropTypes.string),
};
FeathersProvider.defaultProps = {
    initialServices: [],
    realtime: false,
    idFieldName: '_id',
};

export { FeathersProvider, useFeathers };
