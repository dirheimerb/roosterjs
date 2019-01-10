/*
    VERSION: 7.0.1

    RoosterJS
    Copyright (c) Microsoft Corporation
    All rights reserved.

    MIT License

    Copyright (c) Microsoft Corporation. All rights reserved.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE

*/
define(function() { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/roosterjs/lib/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/roosterjs-editor-api/lib/format/changeFontSize.ts":
/*!********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/changeFontSize.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var applyInlineStyle_1 = __webpack_require__(/*! ../utils/applyInlineStyle */ "./packages/roosterjs-editor-api/lib/utils/applyInlineStyle.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * Default font size sequence, in pt. Suggest editor UI use this sequence as your font size list,
 * So that when increase/decrease font size, the font size can match the sequence of your font size picker
 */
exports.FONT_SIZES = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
var MIN_FONT_SIZE = 1;
var MAX_FONT_SIZE = 1000;
/**
 * Increase or decrease font size in selection
 * @param editor The editor instance
 * @param change Whether increase or decrease font size
 * @param fontSizes A sorted font size array, in pt. Default value is FONT_SIZES
 */
function changeFontSize(editor, change, fontSizes) {
    if (fontSizes === void 0) { fontSizes = exports.FONT_SIZES; }
    var changeBase = change == 0 /* Increase */ ? 1 : -1;
    applyInlineStyle_1.default(editor, function (element) {
        var pt = parseFloat(roosterjs_editor_dom_1.getComputedStyle(element, 'font-size'));
        element.style.fontSize = getNewFontSize(pt, changeBase, fontSizes) + 'pt';
        var lineHeight = roosterjs_editor_dom_1.getComputedStyle(element, 'line-height');
        if (lineHeight != 'normal') {
            element.style.lineHeight = 'normal';
        }
    });
}
exports.default = changeFontSize;
function getNewFontSize(pt, changeBase, fontSizes) {
    pt = changeBase == 1 ? Math.floor(pt) : Math.ceil(pt);
    var last = fontSizes[fontSizes.length - 1];
    if (pt <= fontSizes[0]) {
        pt = Math.max(pt + changeBase, MIN_FONT_SIZE);
    }
    else if (pt > last || (pt == last && changeBase == 1)) {
        pt = pt / 10;
        pt = changeBase == 1 ? Math.floor(pt) : Math.ceil(pt);
        pt = Math.min(Math.max((pt + changeBase) * 10, last), MAX_FONT_SIZE);
    }
    else if (changeBase == 1) {
        for (var i = 0; i < fontSizes.length; i++) {
            if (pt < fontSizes[i]) {
                pt = fontSizes[i];
                break;
            }
        }
    }
    else {
        for (var i = fontSizes.length - 1; i >= 0; i--) {
            if (pt > fontSizes[i]) {
                pt = fontSizes[i];
                break;
            }
        }
    }
    return pt;
}
exports.getNewFontSize = getNewFontSize;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/clearBlockFormat.ts":
/*!**********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/clearBlockFormat.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var collapseSelectedBlocks_1 = __webpack_require__(/*! ../utils/collapseSelectedBlocks */ "./packages/roosterjs-editor-api/lib/utils/collapseSelectedBlocks.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
exports.TAGS_TO_UNWRAP = 'B,I,U,STRONG,EM,SUB,SUP,STRIKE,FONT,CENTER,H1,H2,H3,H4,H5,H6,UL,OL,LI,SPAN,P,BLOCKQUOTE,CODE,S,PRE'.split(',');
exports.TAGS_TO_STOP_UNWRAP = ['TD', 'TH', 'TR', 'TABLE', 'TBODY', 'THEAD'];
exports.ATTRIBUTES_TO_PRESERVE = ['href'];
/**
 * Clear all formats of selected blocks.
 * When selection is collapsed, only clear format of current block.
 * @param editor The editor instance
 * @param tagsToUnwrap Optional. A string array contains HTML tags in upper case which we will unwrap when clear format
 * @param tagsToStopUnwrap Optional. A string array contains HTML tags in upper case which we will stop unwrap if these tags are hit
 */
function clearBlockFormat(editor, tagsToUnwrap, tagsToStopUnwrap, attributesToPreserve) {
    if (tagsToUnwrap === void 0) { tagsToUnwrap = exports.TAGS_TO_UNWRAP; }
    if (tagsToStopUnwrap === void 0) { tagsToStopUnwrap = exports.TAGS_TO_STOP_UNWRAP; }
    if (attributesToPreserve === void 0) { attributesToPreserve = exports.ATTRIBUTES_TO_PRESERVE; }
    editor.focus();
    editor.addUndoSnapshot(function (start, end) {
        var groups = [{}];
        var stopUnwrapSelector = tagsToStopUnwrap.join(',');
        // 1. Collapse the selected blocks and get first and last element
        collapseSelectedBlocks_1.default(editor, function (element) {
            var group = groups[groups.length - 1];
            var td = editor.getElementAtCursor(stopUnwrapSelector, element);
            if (td != group.td && group.first) {
                groups.push((group = {}));
            }
            group.td = td;
            group.first = group.first || element;
            group.last = element;
        });
        groups
            .filter(function (group) { return group.first; })
            .forEach(function (group) {
            // 2. Collapse with first and last element to make them under same parent
            var nodes = editor.collapseNodes(group.first, group.last, true /*canSplitParent*/);
            // 3. Continue collapse until we can't collapse any more (hit root node, or a table)
            if (canCollapse(tagsToStopUnwrap, nodes[0])) {
                while (editor.contains(nodes[0].parentNode) &&
                    canCollapse(tagsToStopUnwrap, nodes[0].parentNode)) {
                    nodes = [roosterjs_editor_dom_1.splitBalancedNodeRange(nodes)];
                }
            }
            // 4. Clear formats of the nodes
            nodes.forEach(function (node) {
                return clearNodeFormat(node, tagsToUnwrap, tagsToStopUnwrap, attributesToPreserve);
            });
            // 5. Clear CSS of container TD if exist
            if (group.td) {
                var styles = group.td.getAttribute('style') || '';
                var styleArray = styles.split(';');
                styleArray = styleArray.filter(function (style) {
                    return style
                        .trim()
                        .toLowerCase()
                        .indexOf('border') == 0;
                });
                styles = styleArray.join(';');
                if (styles) {
                    group.td.setAttribute('style', styles);
                }
                else {
                    group.td.removeAttribute('style');
                }
            }
        });
        editor.select(start, end);
    }, "Format" /* Format */);
}
exports.default = clearBlockFormat;
function clearNodeFormat(node, tagsToUnwrap, tagsToStopUnwrap, attributesToPreserve) {
    if (node.nodeType != 1 /* Element */ || roosterjs_editor_dom_1.getTagOfNode(node) == 'BR') {
        return false;
    }
    // 1. Recursively clear format of all its child nodes
    var allChildrenAreBlock = [].slice.call(node.childNodes)
        .map(function (n) { return clearNodeFormat(n, tagsToUnwrap, tagsToStopUnwrap, attributesToPreserve); })
        .reduce(function (previousValue, value) { return previousValue && value; }, true);
    if (!canCollapse(tagsToStopUnwrap, node)) {
        return false;
    }
    var returnBlockElement = roosterjs_editor_dom_1.isBlockElement(node);
    // 2. If we should unwrap this tag, put it into an array and unwrap it later
    if (tagsToUnwrap.indexOf(roosterjs_editor_dom_1.getTagOfNode(node)) >= 0 || allChildrenAreBlock) {
        if (returnBlockElement && !allChildrenAreBlock) {
            roosterjs_editor_dom_1.wrap(node);
        }
        roosterjs_editor_dom_1.unwrap(node);
    }
    else {
        // 3. Otherwise, remove all attributes
        clearAttribute(node, attributesToPreserve);
    }
    return returnBlockElement;
}
function clearAttribute(element, attributesToPreserve) {
    for (var _i = 0, _a = [].slice.call(element.attributes); _i < _a.length; _i++) {
        var attr = _a[_i];
        if (attributesToPreserve.indexOf(attr.name.toLowerCase()) < 0) {
            element.removeAttribute(attr.name);
        }
    }
}
function canCollapse(tagsToStopUnwrap, node) {
    return tagsToStopUnwrap.indexOf(roosterjs_editor_dom_1.getTagOfNode(node)) < 0;
}


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/clearFormat.ts":
/*!*****************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/clearFormat.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var execCommand_1 = __webpack_require__(/*! ../utils/execCommand */ "./packages/roosterjs-editor-api/lib/utils/execCommand.ts");
var setBackgroundColor_1 = __webpack_require__(/*! ./setBackgroundColor */ "./packages/roosterjs-editor-api/lib/format/setBackgroundColor.ts");
var setFontName_1 = __webpack_require__(/*! ./setFontName */ "./packages/roosterjs-editor-api/lib/format/setFontName.ts");
var setFontSize_1 = __webpack_require__(/*! ./setFontSize */ "./packages/roosterjs-editor-api/lib/format/setFontSize.ts");
var setTextColor_1 = __webpack_require__(/*! ./setTextColor */ "./packages/roosterjs-editor-api/lib/format/setTextColor.ts");
var toggleBold_1 = __webpack_require__(/*! ./toggleBold */ "./packages/roosterjs-editor-api/lib/format/toggleBold.ts");
var toggleItalic_1 = __webpack_require__(/*! ./toggleItalic */ "./packages/roosterjs-editor-api/lib/format/toggleItalic.ts");
var toggleUnderline_1 = __webpack_require__(/*! ./toggleUnderline */ "./packages/roosterjs-editor-api/lib/format/toggleUnderline.ts");
var STYLES_TO_REMOVE = ['font', 'text-decoration', 'color', 'background'];
/**
 * Clear the format in current selection, after cleaning, the format will be
 * changed to default format. The format that get cleaned include B/I/U/font name/
 * font size/text color/background color/align left/align right/align center/superscript/subscript
 * @param editor The editor instance
 */
function clearFormat(editor) {
    editor.focus();
    editor.addUndoSnapshot(function () {
        execCommand_1.default(editor, "removeFormat" /* RemoveFormat */);
        editor.queryElements('[class]', 1 /* OnSelection */, function (node) {
            return node.removeAttribute('class');
        });
        var defaultFormat = editor.getDefaultFormat();
        var isDefaultFormatEmpty = Object.keys(defaultFormat).length === 0;
        editor.queryElements('[style]', 2 /* InSelection */, function (node) {
            STYLES_TO_REMOVE.forEach(function (style) { return node.style.removeProperty(style); });
            // when default format is empty, keep the HTML minimum by removing style attribute if there's no style
            // (note: because default format is empty, we're not adding style back in)
            if (isDefaultFormatEmpty && node.getAttribute('style') === '') {
                node.removeAttribute('style');
            }
        });
        if (!isDefaultFormatEmpty) {
            if (defaultFormat.fontFamily) {
                setFontName_1.default(editor, defaultFormat.fontFamily);
            }
            if (defaultFormat.fontSize) {
                setFontSize_1.default(editor, defaultFormat.fontSize);
            }
            if (defaultFormat.textColor) {
                setTextColor_1.default(editor, defaultFormat.textColor);
            }
            if (defaultFormat.backgroundColor) {
                setBackgroundColor_1.default(editor, defaultFormat.backgroundColor);
            }
            if (defaultFormat.bold) {
                toggleBold_1.default(editor);
            }
            if (defaultFormat.italic) {
                toggleItalic_1.default(editor);
            }
            if (defaultFormat.underline) {
                toggleUnderline_1.default(editor);
            }
        }
    }, "Format" /* Format */);
}
exports.default = clearFormat;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/createLink.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/createLink.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
// Regex matching Uri scheme
var URI_REGEX = /^[a-zA-Z]+:/i;
// Regex matching begin of email address
var MAILTO_REGEX = /^[\w.%+-]+@/i;
// Regex matching begin of ftp, i.e. ftp.microsoft.com
var FTP_REGEX = /^ftp\./i;
var TEMP_TITLE = 'istemptitle';
function applyLinkPrefix(url) {
    if (!url) {
        return url;
    }
    // Add link prefix per rule:
    // (a) if the url always starts with a URI scheme, leave it as it is
    // (b) if the url is an email address, xxx@... add mailto: prefix
    // (c) if the url starts with ftp., add ftp:// prefix
    // (d) rest, add http:// prefix
    var prefix = '';
    if (url.search(URI_REGEX) < 0) {
        if (url.search(MAILTO_REGEX) == 0) {
            prefix = 'mailto:';
        }
        else if (url.search(FTP_REGEX) == 0) {
            prefix = 'ftp://';
        }
        else {
            // fallback to http://
            prefix = 'http://';
        }
    }
    return prefix + url;
}
/**
 * Insert a hyperlink at cursor.
 * When there is a selection, hyperlink will be applied to the selection,
 * otherwise a hyperlink will be inserted to the cursor position.
 * @param editor Editor object
 * @param link Link address, can be http(s), mailto, notes, file, unc, ftp, news, telnet, gopher, wais.
 * When protocol is not specified, a best matched protocol will be predicted.
 * @param altText Optional alt text of the link, will be shown when hover on the link
 * @param displayText Optional display text for the link.
 * If specified, the display text of link will be replaced with this text.
 * If not specified and there wasn't a link, the link url will be used as display text.
 */
function createLink(editor, link, altText, displayText) {
    editor.focus();
    var url = link ? link.trim() : '';
    if (url) {
        var linkData = roosterjs_editor_dom_1.matchLink(url);
        // matchLink can match most links, but not all, i.e. if you pass link a link as "abc", it won't match
        // we know in that case, users will want to insert a link like http://abc
        // so we have separate logic in applyLinkPrefix to add link prefix depending on the format of the link
        // i.e. if the link starts with something like abc@xxx, we will add mailto: prefix
        // if the link starts with ftp.xxx, we will add ftp:// link. For more, see applyLinkPrefix
        var normalizedUrl_1 = linkData ? linkData.normalizedUrl : applyLinkPrefix(url);
        var originalUrl_1 = linkData ? linkData.originalUrl : url;
        editor.addUndoSnapshot(function () {
            var range = editor.getSelectionRange();
            var anchor = null;
            if (range && range.collapsed) {
                anchor = getAnchorNodeAtCursor(editor);
                // If there is already a link, just change its href
                if (anchor) {
                    anchor.href = normalizedUrl_1;
                    // Change text content if it is specified
                    updateAnchorDisplayText(anchor, displayText);
                }
                else {
                    anchor = editor.getDocument().createElement('A');
                    anchor.textContent = displayText || originalUrl_1;
                    anchor.href = normalizedUrl_1;
                    editor.insertNode(anchor);
                }
            }
            else {
                // the selection is not collapsed, use browser execCommand
                editor.getDocument().execCommand("createLink" /* CreateLink */, false, normalizedUrl_1);
                anchor = getAnchorNodeAtCursor(editor);
                updateAnchorDisplayText(anchor, displayText);
            }
            if (altText && anchor) {
                // Hack: Ideally this should be done by HyperLink plugin.
                // We make a hack here since we don't have an event to notify HyperLink plugin
                // before we apply the link.
                anchor.removeAttribute(TEMP_TITLE);
                anchor.title = altText;
            }
            return anchor;
        }, "CreateLink" /* CreateLink */);
    }
}
exports.default = createLink;
function getAnchorNodeAtCursor(editor) {
    return editor.queryElements('a[href]', 1 /* OnSelection */)[0];
}
function updateAnchorDisplayText(anchor, displayText) {
    if (displayText && anchor.textContent != displayText) {
        anchor.textContent = displayText;
    }
}


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/getFormatState.ts":
/*!********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/getFormatState.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_core_1 = __webpack_require__(/*! roosterjs-editor-core */ "./packages/roosterjs-editor-core/lib/index.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * Get format state at cursor
 * A format state is a collection of all format related states, e.g.,
 * bold, italic, underline, font name, font size, etc.
 * @param editor The editor
 * @param (Optional) The plugin event, it stores the event cached data for looking up.
 * In this function the event cache is used to get list state and header level. If not passed,
 * it will query the node within selection to get the info
 * @returns The format state at cursor
 */
function getFormatState(editor, event) {
    var range = editor.getSelectionRange();
    var node = range && roosterjs_editor_dom_1.Position.getStart(range).normalize().node;
    var styles = node ? roosterjs_editor_dom_1.getComputedStyles(node) : [];
    var listTag = roosterjs_editor_dom_1.getTagOfNode(roosterjs_editor_core_1.cacheGetElementAtCursor(editor, event, 'OL,UL'));
    var headerTag = roosterjs_editor_dom_1.getTagOfNode(roosterjs_editor_core_1.cacheGetElementAtCursor(editor, event, 'H1,H2,H3,H4,H5,H6'));
    var document = editor.getDocument();
    return {
        fontName: styles[0],
        fontSize: styles[1],
        textColor: styles[2],
        backgroundColor: styles[3],
        isBold: document.queryCommandState("bold" /* Bold */),
        isItalic: document.queryCommandState("italic" /* Italic */),
        isUnderline: document.queryCommandState("underline" /* Underline */),
        isStrikeThrough: document.queryCommandState("strikeThrough" /* StrikeThrough */),
        isSubscript: document.queryCommandState("subscript" /* Subscript */),
        isSuperscript: document.queryCommandState("superscript" /* Superscript */),
        isBullet: listTag == 'UL',
        isNumbering: listTag == 'OL',
        headerLevel: (headerTag && parseInt(headerTag[1])) || 0,
        canUnlink: !!editor.queryElements('a[href]', 1 /* OnSelection */)[0],
        canAddImageAltText: !!editor.queryElements('img', 1 /* OnSelection */)[0],
        isBlockQuote: !!editor.queryElements('blockquote', 1 /* OnSelection */)[0],
        canUndo: editor.canUndo(),
        canRedo: editor.canRedo(),
    };
}
exports.default = getFormatState;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/insertImage.ts":
/*!*****************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/insertImage.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Insert an image to editor at current selection
 * @param editor The editor instance
 * @param imageFile The image file. There are at least 3 ways to obtain the file object:
 * From local file, from clipboard data, from drag-and-drop
 */
function insertImage(editor, imageFile) {
    var reader = new FileReader();
    reader.onload = function (event) {
        if (!editor.isDisposed()) {
            editor.addUndoSnapshot(function () {
                var image = editor.getDocument().createElement('img');
                image.src = event.target.result;
                image.style.maxWidth = '100%';
                editor.insertNode(image);
            }, "Format" /* Format */);
        }
    };
    reader.readAsDataURL(imageFile);
}
exports.default = insertImage;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/removeLink.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/removeLink.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * Remove link at selection. If no links at selection, do nothing.
 * If selection contains multiple links, all of the link styles will be removed.
 * If only part of a link is selected, the whole link style will be removed.
 * @param editor The editor instance
 */
function removeLink(editor) {
    editor.focus();
    editor.addUndoSnapshot(function (start, end) {
        editor.queryElements('a[href]', 1 /* OnSelection */, roosterjs_editor_dom_1.unwrap);
        editor.select(start, end);
    }, "Format" /* Format */);
}
exports.default = removeLink;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/replaceWithNode.ts":
/*!*********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/replaceWithNode.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function replaceWithNode(editor, textOrRange, node, exactMatch, searcher) {
    // Make sure the text and node is valid
    if (!textOrRange || !node) {
        return false;
    }
    var range;
    if (typeof textOrRange == 'string') {
        searcher = searcher || editor.getContentSearcherOfCursor();
        range = searcher && searcher.getRangeFromText(textOrRange, exactMatch);
    }
    else {
        range = textOrRange;
    }
    if (range) {
        var backupRange = editor.getSelectionRange();
        range.deleteContents();
        range.insertNode(node);
        if (exactMatch) {
            editor.select(node, -3 /* After */);
        }
        else {
            editor.select(backupRange);
        }
        return true;
    }
    return false;
}
exports.default = replaceWithNode;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/setAlignment.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/setAlignment.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var execCommand_1 = __webpack_require__(/*! ../utils/execCommand */ "./packages/roosterjs-editor-api/lib/utils/execCommand.ts");
/**
 * Set content alignment
 * @param editor The editor instance
 * @param alignment The alignment option:
 * Alignment.Center, Alignment.Left, Alignment.Right
 */
function setAlignment(editor, alignment) {
    var command = "justifyLeft" /* JustifyLeft */;
    var align = 'left';
    if (alignment == 1 /* Center */) {
        command = "justifyCenter" /* JustifyCenter */;
        align = 'center';
    }
    else if (alignment == 2 /* Right */) {
        command = "justifyRight" /* JustifyRight */;
        align = 'right';
    }
    editor.addUndoSnapshot(function () {
        execCommand_1.default(editor, command);
        editor.queryElements('[align]', 1 /* OnSelection */, function (node) { return (node.style.textAlign = align); });
    }, "Format" /* Format */);
}
exports.default = setAlignment;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/setBackgroundColor.ts":
/*!************************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/setBackgroundColor.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var applyInlineStyle_1 = __webpack_require__(/*! ../utils/applyInlineStyle */ "./packages/roosterjs-editor-api/lib/utils/applyInlineStyle.ts");
/**
 * Set background color at current selection
 * @param editor The editor instance
 * @param color The color string, can be any of the predefined color names (e.g, 'red')
 * or hexadecimal color string (e.g, '#FF0000') or rgb value (e.g, 'rgb(255, 0, 0)') supported by browser.
 * Currently there's no validation to the string, if the passed string is invalid, it won't take affect
 */
function setBackgroundColor(editor, color) {
    color = color.trim();
    applyInlineStyle_1.default(editor, function (element) { return (element.style.backgroundColor = color); });
}
exports.default = setBackgroundColor;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/setDirection.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/setDirection.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var collapseSelectedBlocks_1 = __webpack_require__(/*! ../utils/collapseSelectedBlocks */ "./packages/roosterjs-editor-api/lib/utils/collapseSelectedBlocks.ts");
/**
 * Change direction for the blocks/paragraph at selection
 * @param editor The editor instance
 * @param direction The direction option:
 * Direction.LeftToRight refers to 'ltr', Direction.RightToLeft refers to 'rtl'
 */
function setDirection(editor, direction) {
    editor.focus();
    editor.addUndoSnapshot(function (start, end) {
        collapseSelectedBlocks_1.default(editor, function (element) {
            element.setAttribute('dir', direction == 0 /* LeftToRight */ ? 'ltr' : 'rtl');
            element.style.textAlign = direction == 0 /* LeftToRight */ ? 'left' : 'right';
        });
        editor.select(start, end);
    }, "Format" /* Format */);
}
exports.default = setDirection;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/setFontName.ts":
/*!*****************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/setFontName.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var applyInlineStyle_1 = __webpack_require__(/*! ../utils/applyInlineStyle */ "./packages/roosterjs-editor-api/lib/utils/applyInlineStyle.ts");
/**
 * Set font name at selection
 * @param editor The editor instance
 * @param fontName The fontName string, should be a valid CSS font-family style.
 * Currently there's no validation to the string, if the passed string is invalid, it won't take affect
 */
function setFontName(editor, fontName) {
    fontName = fontName.trim();
    // The browser provided execCommand creates a HTML <font> tag with face attribute. <font> is not HTML5 standard
    // (http://www.w3schools.com/tags/tag_font.asp). Use applyInlineStyle which gives flexibility on applying inline style
    // for here, we use CSS font-family style
    applyInlineStyle_1.default(editor, function (element) { return (element.style.fontFamily = fontName); });
}
exports.default = setFontName;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/setFontSize.ts":
/*!*****************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/setFontSize.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var applyInlineStyle_1 = __webpack_require__(/*! ../utils/applyInlineStyle */ "./packages/roosterjs-editor-api/lib/utils/applyInlineStyle.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * Set font size at selection
 * @param editor The editor instance
 * @param fontSize The fontSize string, should be a valid CSS font-size style.
 * Currently there's no validation to the string, if the passed string is invalid, it won't take affect
 */
function setFontSize(editor, fontSize) {
    fontSize = fontSize.trim();
    // The browser provided execCommand only accepts 1-7 point value. In addition, it uses HTML <font> tag with size attribute.
    // <font> is not HTML5 standard (http://www.w3schools.com/tags/tag_font.asp). Use applyInlineStyle which gives flexibility on applying inline style
    // for here, we use CSS font-size style
    applyInlineStyle_1.default(editor, function (element) {
        element.style.fontSize = fontSize;
        var lineHeight = roosterjs_editor_dom_1.getComputedStyle(element, 'line-height');
        if (lineHeight != 'normal') {
            element.style.lineHeight = 'normal';
        }
    });
}
exports.default = setFontSize;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/setImageAltText.ts":
/*!*********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/setImageAltText.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Set image alt text for all selected images at selection. If no images is contained
 * in selection, do nothing.
 * The alt attribute provides alternative information for an image if a user for some reason
 * cannot view it (because of slow connection, an error in the src attribute, or if the user
 * uses a screen reader). See https://www.w3schools.com/tags/att_img_alt.asp
 * @param editor The editor instance
 * @param altText The image alt text
 */
function setImageAltText(editor, altText) {
    editor.focus();
    editor.addUndoSnapshot(function () {
        editor.queryElements('img', 1 /* OnSelection */, function (node) {
            return node.setAttribute('alt', altText);
        });
    }, "Format" /* Format */);
}
exports.default = setImageAltText;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/setIndentation.ts":
/*!********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/setIndentation.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var processList_1 = __webpack_require__(/*! ../utils/processList */ "./packages/roosterjs-editor-api/lib/utils/processList.ts");
/**
 * Set indentation at selection
 * If selection contains bullet/numbering list, increase/decrease indentation will
 * increase/decrease the list level by one.
 * @param editor The editor instance
 * @param indentation The indentation option:
 * Indentation.Increase to increase indentation or Indentation.Decrease to decrease indentation
 */
function setIndentation(editor, indentation) {
    var command = indentation == 0 /* Increase */ ? "indent" /* Indent */ : "outdent" /* Outdent */;
    editor.addUndoSnapshot(function () {
        editor.focus();
        var listNode = editor.getElementAtCursor('OL,UL');
        var newNode;
        if (listNode) {
            // There is already list node, setIndentation() will increase/decrease the list level,
            // so we need to process the list when change indentation
            newNode = processList_1.default(editor, command);
        }
        else {
            // No existing list node, browser will create <Blockquote> node for indentation.
            // We need to set top and bottom margin to 0 to avoid unnecessary spaces
            editor.getDocument().execCommand(command, false, null);
            editor.queryElements('BLOCKQUOTE', 1 /* OnSelection */, function (node) {
                newNode = newNode || node;
                node.style.marginTop = '0px';
                node.style.marginBottom = '0px';
            });
        }
        return newNode;
    }, "Format" /* Format */);
}
exports.default = setIndentation;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/setTextColor.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/setTextColor.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var applyInlineStyle_1 = __webpack_require__(/*! ../utils/applyInlineStyle */ "./packages/roosterjs-editor-api/lib/utils/applyInlineStyle.ts");
/**
 * Set text color at selection
 * @param editor The editor instance
 * @param color The color string, can be any of the predefined color names (e.g, 'red')
 * or hexadecimal color string (e.g, '#FF0000') or rgb value (e.g, 'rgb(255, 0, 0)') supported by browser.
 * Currently there's no validation to the string, if the passed string is invalid, it won't take affect
 */
function setTextColor(editor, color) {
    color = color.trim();
    applyInlineStyle_1.default(editor, function (element) { return (element.style.color = color); });
}
exports.default = setTextColor;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/toggleBlockQuote.ts":
/*!**********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/toggleBlockQuote.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var toggleTagCore_1 = __webpack_require__(/*! ../utils/toggleTagCore */ "./packages/roosterjs-editor-api/lib/utils/toggleTagCore.ts");
var BLOCKQUOTE_TAG = 'blockquote';
var DEFAULT_STYLER = function (element) {
    element.style.borderLeft = '3px solid';
    element.style.borderColor = '#C8C8C8';
    element.style.paddingLeft = '10px';
    element.style.color = '#666666';
};
/**
 * Toggle blockquote at selection, if selection already contains any blockquoted elements,
 * the blockquoted elements will be unblockquoted and other elements will take no affect
 * @param editor The editor instance
 * @param styler (Optional) The custom styler for setting the style for the blockquote element
 */
function toggleBlockQuote(editor, styler) {
    toggleTagCore_1.default(editor, BLOCKQUOTE_TAG, styler || DEFAULT_STYLER);
}
exports.default = toggleBlockQuote;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/toggleBold.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/toggleBold.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var execCommand_1 = __webpack_require__(/*! ../utils/execCommand */ "./packages/roosterjs-editor-api/lib/utils/execCommand.ts");
/**
 * Toggle bold at selection
 * If selection is collapsed, it will only affect the following input after caret
 * If selection contains only bold text, the bold style will be removed
 * If selection contains only normal text, bold style will be added to the whole selected text
 * If selection contains both bold and normal text, bold stle will be added to the whole selected text
 * @param editor The editor instance
 */
function toggleBold(editor) {
    execCommand_1.default(editor, "bold" /* Bold */);
}
exports.default = toggleBold;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/toggleBullet.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/toggleBullet.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var processList_1 = __webpack_require__(/*! ../utils/processList */ "./packages/roosterjs-editor-api/lib/utils/processList.ts");
/**
 * Toggle bullet at selection
 * If selection contains bullet in deep level, toggle bullet will decrease the bullet level by one
 * If selection contains number list, toggle bullet will convert the number list into bullet list
 * If selection contains both bullet/numbering and normal text, the behavior is decided by corresponding
 * browser execCommand API
 * @param editor The editor instance
 */
function toggleBullet(editor) {
    editor.focus();
    editor.addUndoSnapshot(function () { return processList_1.default(editor, "insertUnorderedList" /* InsertUnorderedList */); }, "Format" /* Format */);
}
exports.default = toggleBullet;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/toggleCodeBlock.ts":
/*!*********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/toggleCodeBlock.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var toggleTagCore_1 = __webpack_require__(/*! ../utils/toggleTagCore */ "./packages/roosterjs-editor-api/lib/utils/toggleTagCore.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var PRE_TAG = 'pre';
var CODE_TAG = 'code';
var CODE_NODE_TAG = 'CODE';
/**
 * Toggle code block at selection, if selection already contains any code blocked elements,
 * the code block elements will be no longer be code blocked and other elements will take no affect
 * @param editor The editor instance
 * @param styler (Optional) The custom styler for setting the style for the code block element
 */
function toggleCodeBlock(editor, styler) {
    toggleTagCore_1.default(editor, PRE_TAG, styler, wrapFunction, unwrapFunction);
}
exports.default = toggleCodeBlock;
function wrapFunction(nodes) {
    var codeBlock = roosterjs_editor_dom_1.wrap(nodes, CODE_TAG);
    return roosterjs_editor_dom_1.wrap(codeBlock, PRE_TAG);
}
function unwrapFunction(node) {
    if (!node) {
        return null;
    }
    var firstChild = node.childNodes[0];
    if (node.childNodes.length == 1 && roosterjs_editor_dom_1.getTagOfNode(firstChild) == CODE_NODE_TAG) {
        roosterjs_editor_dom_1.unwrap(firstChild);
    }
    return roosterjs_editor_dom_1.unwrap(node);
}


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/toggleHeader.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/toggleHeader.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * Toggle header at selection
 * @param editor The editor instance
 * @param level The header level, can be a number from 0 to 6, in which 1 ~ 6 refers to
 * the HTML header element <H1> to <H6>, 0 means no header
 * if passed in param is outside the range, will be rounded to nearest number in the range
 */
function toggleHeader(editor, level) {
    level = Math.min(Math.max(Math.round(level), 0), 6);
    editor.addUndoSnapshot(function () {
        editor.focus();
        var wrapped = false;
        editor.queryElements('H1,H2,H3,H4,H5,H6', 1 /* OnSelection */, function (header) {
            if (!wrapped) {
                editor.getDocument().execCommand("formatBlock" /* FormatBlock */, false, '<DIV>');
                wrapped = true;
            }
            var div = editor.getDocument().createElement('div');
            while (header.firstChild) {
                div.appendChild(header.firstChild);
            }
            editor.replaceNode(header, div);
        });
        if (level > 0) {
            var traverser = editor.getSelectionTraverser();
            var inlineElement = traverser ? traverser.currentInlineElement : null;
            while (inlineElement) {
                var element = roosterjs_editor_dom_1.findClosestElementAncestor(inlineElement.getContainerNode());
                if (element) {
                    element.style.fontSize = '';
                }
                inlineElement = traverser.getNextInlineElement();
            }
            editor.getDocument().execCommand("formatBlock" /* FormatBlock */, false, "<H" + level + ">");
        }
    }, "Format" /* Format */);
}
exports.default = toggleHeader;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/toggleItalic.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/toggleItalic.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var execCommand_1 = __webpack_require__(/*! ../utils/execCommand */ "./packages/roosterjs-editor-api/lib/utils/execCommand.ts");
/**
 * Toggle italic at selection
 * If selection is collapsed, it will only affect the input after caret
 * If selection contains only italic text, the italic style will be removed
 * If selection contains only normal text, italic style will be added to the whole selected text
 * If selection contains both italic and normal text, italic stlye will be added to the whole selected text
 * @param editor The editor instance
 */
function toggleItalic(editor) {
    execCommand_1.default(editor, "italic" /* Italic */);
}
exports.default = toggleItalic;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/toggleNumbering.ts":
/*!*********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/toggleNumbering.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var processList_1 = __webpack_require__(/*! ../utils/processList */ "./packages/roosterjs-editor-api/lib/utils/processList.ts");
/**
 * Toggle numbering at selection
 * If selection contains numbering in deep level, toggle numbering will decrease the numbering level by one
 * If selection contains bullet list, toggle numbering will convert the bullet list into number list
 * If selection contains both bullet/numbering and normal text, the behavior is decided by corresponding
 * realization of browser execCommand API
 * @param editor The editor instance
 */
function toggleNumbering(editor) {
    editor.focus();
    editor.addUndoSnapshot(function () { return processList_1.default(editor, "insertOrderedList" /* InsertOrderedList */); }, "Format" /* Format */);
}
exports.default = toggleNumbering;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/toggleStrikethrough.ts":
/*!*************************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/toggleStrikethrough.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var execCommand_1 = __webpack_require__(/*! ../utils/execCommand */ "./packages/roosterjs-editor-api/lib/utils/execCommand.ts");
/**
 * Toggle strikethrough at selection
 * If selection is collapsed, it will only affect the input after caret
 * If selection contains only strikethrough text, the strikethrough style will be removed
 * If selection contains only normal text, strikethrough style will be added to the whole selected text
 * If selection contains both strikethrough and normal text, strikethrough stlye will be added to the whole selected text
 * @param editor The editor instance
 */
function toggleStrikethrough(editor) {
    execCommand_1.default(editor, "strikeThrough" /* StrikeThrough */);
}
exports.default = toggleStrikethrough;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/toggleSubscript.ts":
/*!*********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/toggleSubscript.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var execCommand_1 = __webpack_require__(/*! ../utils/execCommand */ "./packages/roosterjs-editor-api/lib/utils/execCommand.ts");
/**
 * Toggle subscript at selection
 * If selection is collapsed, it will only affect the input after caret
 * If selection contains only subscript text, the subscript style will be removed
 * If selection contains only normal text, subscript style will be added to the whole selected text
 * If selection contains both subscript and normal text, the subscript style will be removed from whole selected text
 * If selection contains any superscript text, the behavior is determined by corresponding realization of browser
 * execCommand API
 * @param editor The editor instance
 */
function toggleSubscript(editor) {
    execCommand_1.default(editor, "subscript" /* Subscript */);
}
exports.default = toggleSubscript;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/toggleSuperscript.ts":
/*!***********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/toggleSuperscript.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var execCommand_1 = __webpack_require__(/*! ../utils/execCommand */ "./packages/roosterjs-editor-api/lib/utils/execCommand.ts");
/**
 * Toggle superscript at selection
 * If selection is collapsed, it will only affect the input after caret
 * If selection contains only superscript text, the superscript style will be removed
 * If selection contains only normal text, superscript style will be added to the whole selected text
 * If selection contains both superscript and normal text, the superscript style will be removed from whole selected text
 * If selection contains any subscript text, the behavior is determined by corresponding realization of browser
 * execCommand API
 * @param editor The editor instance
 */
function toggleSuperscript(editor) {
    execCommand_1.default(editor, "superscript" /* Superscript */);
}
exports.default = toggleSuperscript;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/format/toggleUnderline.ts":
/*!*********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/format/toggleUnderline.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var execCommand_1 = __webpack_require__(/*! ../utils/execCommand */ "./packages/roosterjs-editor-api/lib/utils/execCommand.ts");
/**
 * Toggle underline at selection
 * If selection is collapsed, it will only affect the input after caret
 * If selection contains only underlined text, the underline style will be removed
 * If selection contains only normal text, underline style will be added to the whole selected text
 * If selection contains both underlined and normal text, the underline style will be added to the whole selected text
 * @param editor The editor instance
 */
function toggleUnderline(editor) {
    execCommand_1.default(editor, "underline" /* Underline */);
}
exports.default = toggleUnderline;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/index.ts":
/*!****************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var changeFontSize_1 = __webpack_require__(/*! ./format/changeFontSize */ "./packages/roosterjs-editor-api/lib/format/changeFontSize.ts");
exports.changeFontSize = changeFontSize_1.default;
exports.FONT_SIZES = changeFontSize_1.FONT_SIZES;
var clearBlockFormat_1 = __webpack_require__(/*! ./format/clearBlockFormat */ "./packages/roosterjs-editor-api/lib/format/clearBlockFormat.ts");
exports.clearBlockFormat = clearBlockFormat_1.default;
exports.TAGS_TO_UNWRAP = clearBlockFormat_1.TAGS_TO_UNWRAP;
exports.TAGS_TO_STOP_UNWRAP = clearBlockFormat_1.TAGS_TO_STOP_UNWRAP;
exports.ATTRIBUTES_TO_PRESERVE = clearBlockFormat_1.ATTRIBUTES_TO_PRESERVE;
var clearFormat_1 = __webpack_require__(/*! ./format/clearFormat */ "./packages/roosterjs-editor-api/lib/format/clearFormat.ts");
exports.clearFormat = clearFormat_1.default;
var createLink_1 = __webpack_require__(/*! ./format/createLink */ "./packages/roosterjs-editor-api/lib/format/createLink.ts");
exports.createLink = createLink_1.default;
var getFormatState_1 = __webpack_require__(/*! ./format/getFormatState */ "./packages/roosterjs-editor-api/lib/format/getFormatState.ts");
exports.getFormatState = getFormatState_1.default;
var insertImage_1 = __webpack_require__(/*! ./format/insertImage */ "./packages/roosterjs-editor-api/lib/format/insertImage.ts");
exports.insertImage = insertImage_1.default;
var insertTable_1 = __webpack_require__(/*! ./table/insertTable */ "./packages/roosterjs-editor-api/lib/table/insertTable.ts");
exports.insertTable = insertTable_1.default;
var editTable_1 = __webpack_require__(/*! ./table/editTable */ "./packages/roosterjs-editor-api/lib/table/editTable.ts");
exports.editTable = editTable_1.default;
var formatTable_1 = __webpack_require__(/*! ./table/formatTable */ "./packages/roosterjs-editor-api/lib/table/formatTable.ts");
exports.formatTable = formatTable_1.default;
var removeLink_1 = __webpack_require__(/*! ./format/removeLink */ "./packages/roosterjs-editor-api/lib/format/removeLink.ts");
exports.removeLink = removeLink_1.default;
var replaceWithNode_1 = __webpack_require__(/*! ./format/replaceWithNode */ "./packages/roosterjs-editor-api/lib/format/replaceWithNode.ts");
exports.replaceWithNode = replaceWithNode_1.default;
var setAlignment_1 = __webpack_require__(/*! ./format/setAlignment */ "./packages/roosterjs-editor-api/lib/format/setAlignment.ts");
exports.setAlignment = setAlignment_1.default;
var setBackgroundColor_1 = __webpack_require__(/*! ./format/setBackgroundColor */ "./packages/roosterjs-editor-api/lib/format/setBackgroundColor.ts");
exports.setBackgroundColor = setBackgroundColor_1.default;
var setTextColor_1 = __webpack_require__(/*! ./format/setTextColor */ "./packages/roosterjs-editor-api/lib/format/setTextColor.ts");
exports.setTextColor = setTextColor_1.default;
var setDirection_1 = __webpack_require__(/*! ./format/setDirection */ "./packages/roosterjs-editor-api/lib/format/setDirection.ts");
exports.setDirection = setDirection_1.default;
var setFontName_1 = __webpack_require__(/*! ./format/setFontName */ "./packages/roosterjs-editor-api/lib/format/setFontName.ts");
exports.setFontName = setFontName_1.default;
var setFontSize_1 = __webpack_require__(/*! ./format/setFontSize */ "./packages/roosterjs-editor-api/lib/format/setFontSize.ts");
exports.setFontSize = setFontSize_1.default;
var setImageAltText_1 = __webpack_require__(/*! ./format/setImageAltText */ "./packages/roosterjs-editor-api/lib/format/setImageAltText.ts");
exports.setImageAltText = setImageAltText_1.default;
var setIndentation_1 = __webpack_require__(/*! ./format/setIndentation */ "./packages/roosterjs-editor-api/lib/format/setIndentation.ts");
exports.setIndentation = setIndentation_1.default;
var toggleBold_1 = __webpack_require__(/*! ./format/toggleBold */ "./packages/roosterjs-editor-api/lib/format/toggleBold.ts");
exports.toggleBold = toggleBold_1.default;
var toggleBullet_1 = __webpack_require__(/*! ./format/toggleBullet */ "./packages/roosterjs-editor-api/lib/format/toggleBullet.ts");
exports.toggleBullet = toggleBullet_1.default;
var toggleItalic_1 = __webpack_require__(/*! ./format/toggleItalic */ "./packages/roosterjs-editor-api/lib/format/toggleItalic.ts");
exports.toggleItalic = toggleItalic_1.default;
var toggleNumbering_1 = __webpack_require__(/*! ./format/toggleNumbering */ "./packages/roosterjs-editor-api/lib/format/toggleNumbering.ts");
exports.toggleNumbering = toggleNumbering_1.default;
var toggleBlockQuote_1 = __webpack_require__(/*! ./format/toggleBlockQuote */ "./packages/roosterjs-editor-api/lib/format/toggleBlockQuote.ts");
exports.toggleBlockQuote = toggleBlockQuote_1.default;
var toggleCodeBlock_1 = __webpack_require__(/*! ./format/toggleCodeBlock */ "./packages/roosterjs-editor-api/lib/format/toggleCodeBlock.ts");
exports.toggleCodeBlock = toggleCodeBlock_1.default;
var toggleStrikethrough_1 = __webpack_require__(/*! ./format/toggleStrikethrough */ "./packages/roosterjs-editor-api/lib/format/toggleStrikethrough.ts");
exports.toggleStrikethrough = toggleStrikethrough_1.default;
var toggleSubscript_1 = __webpack_require__(/*! ./format/toggleSubscript */ "./packages/roosterjs-editor-api/lib/format/toggleSubscript.ts");
exports.toggleSubscript = toggleSubscript_1.default;
var toggleSuperscript_1 = __webpack_require__(/*! ./format/toggleSuperscript */ "./packages/roosterjs-editor-api/lib/format/toggleSuperscript.ts");
exports.toggleSuperscript = toggleSuperscript_1.default;
var toggleUnderline_1 = __webpack_require__(/*! ./format/toggleUnderline */ "./packages/roosterjs-editor-api/lib/format/toggleUnderline.ts");
exports.toggleUnderline = toggleUnderline_1.default;
var toggleHeader_1 = __webpack_require__(/*! ./format/toggleHeader */ "./packages/roosterjs-editor-api/lib/format/toggleHeader.ts");
exports.toggleHeader = toggleHeader_1.default;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/table/editTable.ts":
/*!**************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/table/editTable.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * Edit table with given operation. If there is no table at cursor then no op.
 * @param editor The editor instance
 * @param operation Table operation
 */
function editTable(editor, operation) {
    var td = editor.getElementAtCursor('TD,TH');
    if (td) {
        editor.addUndoSnapshot(function (start, end) {
            var vtable = new roosterjs_editor_dom_1.VTable(td);
            vtable.edit(operation);
            vtable.writeBack();
            editor.focus();
            if (!editor.select(start, end)) {
                editor.select(editor.contains(td) ? td : vtable.getCurrentTd());
            }
        }, "Format" /* Format */);
    }
}
exports.default = editTable;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/table/formatTable.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/table/formatTable.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * Format table
 * @param editor The editor which contains the table to format
 * @param format A TableFormat object contains format information we want to apply to the table
 * @param table The table to format. This is optional. When not passed, the current table (if any) will be formatted
 */
function formatTable(editor, format, table) {
    table = table || editor.getElementAtCursor('TABLE');
    if (table) {
        editor.addUndoSnapshot(function (start, end) {
            var vtable = new roosterjs_editor_dom_1.VTable(table);
            vtable.applyFormat(format);
            vtable.writeBack();
            editor.focus();
            editor.select(start, end);
        }, "Format" /* Format */);
    }
}
exports.default = formatTable;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/table/insertTable.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/table/insertTable.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var formatTable_1 = __webpack_require__(/*! ./formatTable */ "./packages/roosterjs-editor-api/lib/table/formatTable.ts");
/**
 * Insert table into editor at current selection
 * @param editor The editor instance
 * @param columns Number of columns in table, it also controls the default table cell width:
 * if columns <= 4, width = 120px; if columns <= 6, width = 100px; else width = 70px
 * @param rows Number of rows in table
 * @param format (Optional) The table format. If not passed, the default format will be applied:
 * background color: #FFF; border color: #ABABAB
 */
function insertTable(editor, columns, rows, format) {
    var document = editor.getDocument();
    var fragment = document.createDocumentFragment();
    var table = document.createElement('table');
    fragment.appendChild(table);
    table.cellSpacing = '0';
    table.cellPadding = '1';
    for (var i = 0; i < rows; i++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (var j = 0; j < columns; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
            td.appendChild(document.createElement('br'));
            td.style.width = getTableCellWidth(columns);
        }
    }
    editor.focus();
    editor.addUndoSnapshot(function () {
        editor.insertNode(fragment);
        formatTable_1.default(editor, format || {
            bgColorEven: '#FFF',
            bgColorOdd: '#FFF',
            topBorderColor: '#ABABAB',
            bottomBorderColor: '#ABABAB',
            verticalBorderColor: '#ABABAB',
        }, table);
        editor.runAsync(function () { return editor.select(table, -3 /* After */); });
    }, "Format" /* Format */);
}
exports.default = insertTable;
function getTableCellWidth(columns) {
    if (columns <= 4) {
        return '120px';
    }
    else if (columns <= 6) {
        return '100px';
    }
    else {
        return '70px';
    }
}


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/utils/applyInlineStyle.ts":
/*!*********************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/utils/applyInlineStyle.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var ZERO_WIDTH_SPACE = '\u200B';
/**
 * Apply inline style to current selection
 * @param editor The editor instance
 * @param callback The callback function to apply style
 */
function applyInlineStyle(editor, callback) {
    editor.focus();
    var range = editor.getSelectionRange();
    if (range && range.collapsed) {
        var node = range.startContainer;
        var isEmptySpan = roosterjs_editor_dom_1.getTagOfNode(node) == 'SPAN' &&
            (!node.firstChild ||
                (roosterjs_editor_dom_1.getTagOfNode(node.firstChild) == 'BR' && !node.firstChild.nextSibling));
        if (isEmptySpan) {
            editor.addUndoSnapshot();
            callback(node);
        }
        else {
            var isZWSNode = node &&
                node.nodeType == 3 /* Text */ &&
                node.nodeValue == ZERO_WIDTH_SPACE &&
                roosterjs_editor_dom_1.getTagOfNode(node.parentNode) == 'SPAN';
            if (!isZWSNode) {
                editor.addUndoSnapshot();
                // Create a new text node to hold the selection.
                // Some content is needed to position selection into the span
                // for here, we inject ZWS - zero width space
                node = editor.getDocument().createTextNode(ZERO_WIDTH_SPACE);
                range.insertNode(node);
            }
            roosterjs_editor_dom_1.applyTextStyle(node, callback);
            editor.select(node, -1 /* End */);
        }
    }
    else {
        // This is start and end node that get the style. The start and end needs to be recorded so that selection
        // can be re-applied post-applying style
        editor.addUndoSnapshot(function () {
            var firstNode;
            var lastNode;
            var contentTraverser = editor.getSelectionTraverser();
            var inlineElement = contentTraverser && contentTraverser.currentInlineElement;
            while (inlineElement) {
                var nextInlineElement = contentTraverser.getNextInlineElement();
                inlineElement.applyStyle(function (element) {
                    callback(element);
                    firstNode = firstNode || element;
                    lastNode = element;
                });
                inlineElement = nextInlineElement;
            }
            if (firstNode && lastNode) {
                editor.select(firstNode, -2 /* Before */, lastNode, -3 /* After */);
            }
        }, "Format" /* Format */);
    }
}
exports.default = applyInlineStyle;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/utils/collapseSelectedBlocks.ts":
/*!***************************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/utils/collapseSelectedBlocks.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * Collapse all selected blocks, return single HTML elements for each block
 * @param editor The editor instance
 * @param forEachCallback A callback function to invoke for each of the collapsed element
 */
function collapseSelectedBlocked(editor, forEachCallback) {
    var traverser = editor.getSelectionTraverser();
    var block = traverser && traverser.currentBlockElement;
    var blocks = [];
    while (block) {
        if (!isEmptyBlockUnderTR(block)) {
            blocks.push(block);
        }
        block = traverser.getNextBlockElement();
    }
    blocks.forEach(function (block) {
        var element = block.collapseToSingleElement();
        forEachCallback(element);
    });
}
exports.default = collapseSelectedBlocked;
function isEmptyBlockUnderTR(block) {
    var startNode = block.getStartNode();
    return (block instanceof roosterjs_editor_dom_1.StartEndBlockElement &&
        startNode == block.getEndNode() &&
        startNode.nodeType == 3 /* Text */ &&
        ['TR', 'TABLE'].indexOf(roosterjs_editor_dom_1.getTagOfNode(startNode.parentNode)) >= 0);
}


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/utils/execCommand.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/utils/execCommand.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Execute a document command
 * @param editor The editor instance
 * @param command The command to execute
 * @param addUndoSnapshotWhenCollapsed Optional, set to true to always add undo snapshot even current selection is collapsed.
 * Default value is false.
 * @param doWorkaroundForList Optional, set to true to do workaround for list in order to keep current format.
 * Default value is false.
 */
function execCommand(editor, command) {
    editor.focus();
    var formatter = function () { return editor.getDocument().execCommand(command, false, null); };
    var range = editor.getSelectionRange();
    if (range && range.collapsed) {
        editor.addUndoSnapshot();
        formatter();
    }
    else {
        editor.addUndoSnapshot(formatter, "Format" /* Format */);
    }
}
exports.default = execCommand;


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/utils/processList.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/utils/processList.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var TEMP_NODE_CLASS = 'ROOSTERJS_TEMP_NODE_FOR_LIST';
var TEMP_NODE_HTML = "<img class=\"" + TEMP_NODE_CLASS + "\">";
/**
 * Browsers don't handle bullet/numbering list well, especially the formats when switching list statue
 * So we workaround it by always adding format to list element
 */
function processList(editor, command) {
    if (roosterjs_editor_dom_1.Browser.isChrome) {
        workaroundForChrome(editor);
    }
    var currentNode = editor.getElementAtCursor();
    var currentFormat = roosterjs_editor_dom_1.getComputedStyles(currentNode);
    var existingList = editor.getElementAtCursor('OL,UL');
    editor.getDocument().execCommand(command, false, null);
    editor.queryElements('.' + TEMP_NODE_CLASS, function (node) { return editor.deleteNode(node); });
    var newList = editor.getElementAtCursor('OL,UL');
    if (newList == existingList) {
        newList = null;
    }
    // If this is in a new number list, need to adjust the format of numbers according to its content
    if (newList && roosterjs_editor_dom_1.getTagOfNode(newList) == 'OL') {
        var LIs = [].slice.call(newList.childNodes).filter(function (node) { return roosterjs_editor_dom_1.getTagOfNode(node) == 'LI'; });
        if (LIs.length == 1 && roosterjs_editor_dom_1.isNodeEmpty(LIs[0], true /*trim*/)) {
            // When there's only one LI child element which has empty content, it means this LI is just created.
            // We just format it with current format
            applyListFormat(LIs[0], currentFormat);
        }
        else {
            // Otherwise, apply the format of first child non-empty element (if any) to LI node
            for (var _i = 0, LIs_1 = LIs; _i < LIs_1.length; _i++) {
                var li = LIs_1[_i];
                var formatNode = roosterjs_editor_dom_1.getFirstLeafNode(li);
                if (formatNode) {
                    applyListFormat(li, roosterjs_editor_dom_1.getComputedStyles(formatNode));
                }
            }
        }
    }
    return newList;
}
exports.default = processList;
function applyListFormat(node, formats) {
    roosterjs_editor_dom_1.applyFormat(node, {
        fontFamily: formats[0],
        fontSize: formats[1],
        textColor: formats[2],
        backgroundColor: formats[3],
    });
}
function workaroundForChrome(editor) {
    var traverser = editor.getSelectionTraverser();
    var block = traverser && traverser.currentBlockElement;
    while (block) {
        var container = block.getStartNode();
        if (container && !roosterjs_editor_dom_1.isNodeEmpty(container)) {
            // Add a temp <IMG> tag before all other nodes in the block to avoid Chrome remove existing format when toggle list
            var tempNode = roosterjs_editor_dom_1.fromHtml(TEMP_NODE_HTML, editor.getDocument())[0];
            if (roosterjs_editor_dom_1.isVoidHtmlElement(container) || !roosterjs_editor_dom_1.isBlockElement(container)) {
                container.parentNode.insertBefore(tempNode, container);
            }
            else {
                container.insertBefore(tempNode, container.firstChild);
            }
        }
        block = traverser.getNextBlockElement();
    }
}


/***/ }),

/***/ "./packages/roosterjs-editor-api/lib/utils/toggleTagCore.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-editor-api/lib/utils/toggleTagCore.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var ZERO_WIDTH_SPACE = '&#8203;';
var UNWRAPPABLE_NODES = 'LI,THEAD,TBODY,TR,TD,TH'.split(',');
var DEFAULT_STYLER = function (_) { };
/**
 * Toggle a tag at selection, if selection already contains elements of such tag,
 * the elements will be untagge and other elements will take no affect
 * @param editor The editor instance
 * @param tag The tag name
 * @param styler (Optional) The styler for setting the style for the blockquote element
 * @param wrapFunction (Optional) The wrap function
 * @param unwrapFunction (Optional) The unwrap function
 */
function toggleTagCore(editor, tag, styler, wrapFunction, unwrapFunction) {
    if (wrapFunction === void 0) { wrapFunction = function (nodes) { return roosterjs_editor_dom_1.wrap(nodes, tag); }; }
    if (unwrapFunction === void 0) { unwrapFunction = roosterjs_editor_dom_1.unwrap; }
    editor.focus();
    editor.addUndoSnapshot(function (start, end) {
        var result;
        var range = editor.getSelectionRange();
        if (range &&
            editor.queryElements(tag, 1 /* OnSelection */, unwrapFunction).length == 0) {
            var startNode = roosterjs_editor_dom_1.Position.getStart(range).normalize().node;
            var startBlock = editor.getBlockElementAtNode(startNode);
            var endNode = roosterjs_editor_dom_1.Position.getEnd(range).normalize().node;
            var endBlock = editor.getBlockElementAtNode(endNode);
            var nodes = startBlock && endBlock
                ? editor.collapseNodes(startBlock.getStartNode(), endBlock.getEndNode(), true /*canSplitParent*/)
                : [];
            if (nodes.length == 0) {
                // Selection is collapsed and blockElement is null, we need to create an empty div.
                // In case of IE and Edge, we insert ZWS to put cursor in the div, otherwise insert BR node.
                nodes = roosterjs_editor_dom_1.fromHtml("<DIV>" + (roosterjs_editor_dom_1.Browser.isIEOrEdge ? ZERO_WIDTH_SPACE : '<BR>') + "</DIV>", editor.getDocument());
                editor.insertNode(nodes[0]);
                editor.select(nodes[0], 0 /* Begin */);
            }
            else if (nodes.length == 1) {
                var tag_1 = roosterjs_editor_dom_1.getTagOfNode(nodes[0]);
                if (tag_1 == 'BR') {
                    nodes = [roosterjs_editor_dom_1.wrap(nodes[0])];
                }
                else if (tag_1 == 'LI' || tag_1 == 'TD') {
                    nodes = [].slice.call(nodes[0].childNodes);
                }
            }
            else {
                while (nodes[0] &&
                    editor.contains(nodes[0].parentNode) &&
                    nodes.some(function (node) { return UNWRAPPABLE_NODES.indexOf(roosterjs_editor_dom_1.getTagOfNode(node)) >= 0; })) {
                    nodes = [roosterjs_editor_dom_1.splitBalancedNodeRange(nodes)];
                }
            }
            result = wrapFunction(nodes);
            (styler || DEFAULT_STYLER)(result);
        }
        if (!editor.select(start, end) && result) {
            editor.select(result);
        }
        return result;
    }, "Format" /* Format */);
}
exports.default = toggleTagCore;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/coreAPI/attachDomEvent.ts":
/*!**********************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/coreAPI/attachDomEvent.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var attachDomEvent = function (core, eventName, pluginEventType, beforeDispatch) {
    var onEvent = function (event) {
        if (beforeDispatch) {
            beforeDispatch(event);
        }
        if (pluginEventType != null) {
            core.api.triggerEvent(core, {
                eventType: pluginEventType,
                rawEvent: event,
            }, false /*broadcast*/);
        }
    };
    core.contentDiv.addEventListener(eventName, onEvent);
    return function () {
        core.contentDiv.removeEventListener(eventName, onEvent);
    };
};
exports.default = attachDomEvent;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/coreAPI/editWithUndo.ts":
/*!********************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/coreAPI/editWithUndo.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var editWithUndo = function (core, callback, changeSource) {
    var isNested = core.currentUndoSnapshot !== null;
    var data;
    if (!isNested) {
        core.currentUndoSnapshot = core.corePlugins.undo.addUndoSnapshot();
    }
    try {
        if (callback) {
            var range = core.api.getSelectionRange(core, true /*tryGetFromCache*/);
            data = callback(range && roosterjs_editor_dom_1.Position.getStart(range).normalize(), range && roosterjs_editor_dom_1.Position.getEnd(range).normalize(), core.currentUndoSnapshot);
            if (!isNested) {
                core.corePlugins.undo.addUndoSnapshot();
            }
        }
    }
    finally {
        if (!isNested) {
            core.currentUndoSnapshot = null;
        }
    }
    if (callback && changeSource) {
        var event_1 = {
            eventType: 6 /* ContentChanged */,
            source: changeSource,
            data: data,
        };
        core.api.triggerEvent(core, event_1, true /*broadcast*/);
    }
};
exports.default = editWithUndo;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/coreAPI/focus.ts":
/*!*************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/coreAPI/focus.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var focus = function (core) {
    if (!core.api.hasFocus(core) || !core.api.getSelectionRange(core, false /*tryGetFromCache*/)) {
        // Focus (document.activeElement indicates) and selection are mostly in sync, but could be out of sync in some extreme cases.
        // i.e. if you programmatically change window selection to point to a non-focusable DOM element (i.e. tabindex=-1 etc.).
        // On Chrome/Firefox, it does not change document.activeElement. On Edge/IE, it change document.activeElement to be body
        // Although on Chrome/Firefox, document.activeElement points to editor, you cannot really type which we don't want (no cursor).
        // So here we always do a live selection pull on DOM and make it point in Editor. The pitfall is, the cursor could be reset
        // to very begin to of editor since we don't really have last saved selection (created on blur which does not fire in this case).
        // It should be better than the case you cannot type
        if (!core.cachedSelectionRange || !core.api.select(core, core.cachedSelectionRange)) {
            var node = roosterjs_editor_dom_1.getFirstLeafNode(core.contentDiv) || core.contentDiv;
            core.api.select(core, node, 0 /* Begin */);
        }
    }
    // remember to clear cachedSelectionRange
    core.cachedSelectionRange = null;
    // This is more a fallback to ensure editor gets focus if it didn't manage to move focus to editor
    if (!core.api.hasFocus(core)) {
        core.contentDiv.focus();
    }
};
exports.default = focus;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/coreAPI/getCustomData.ts":
/*!*********************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/coreAPI/getCustomData.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getCustomData = function (core, key, getter, disposer) {
    return (core.customData[key] = core.customData[key] || {
        value: getter(),
        disposer: disposer,
    }).value;
};
exports.default = getCustomData;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/coreAPI/getSelectionRange.ts":
/*!*************************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/coreAPI/getSelectionRange.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var getSelectionRange = function (core, tryGetFromCache) {
    var result = null;
    if (!tryGetFromCache || core.api.hasFocus(core)) {
        var selection = core.document.defaultView.getSelection();
        if (selection && selection.rangeCount > 0) {
            var range = selection.getRangeAt(0);
            if (roosterjs_editor_dom_1.contains(core.contentDiv, range)) {
                result = range;
            }
        }
    }
    if (!result && tryGetFromCache) {
        result = core.cachedSelectionRange;
    }
    return result;
};
exports.default = getSelectionRange;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/coreAPI/hasFocus.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/coreAPI/hasFocus.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var hasFocus = function (core) {
    var activeElement = core.document.activeElement;
    return (activeElement && roosterjs_editor_dom_1.contains(core.contentDiv, activeElement, true /*treatSameNodeAsContain*/));
};
exports.default = hasFocus;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/coreAPI/insertNode.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/coreAPI/insertNode.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var insertNode = function (core, node, option) {
    var position = option ? option.position : 2 /* SelectionStart */;
    var updateCursor = option ? option.updateCursor : true;
    var replaceSelection = option ? option.replaceSelection : true;
    var insertOnNewLine = option ? option.insertOnNewLine : false;
    var contentDiv = core.contentDiv;
    if (updateCursor) {
        core.api.focus(core);
    }
    switch (position) {
        case 0 /* Begin */:
        case 1 /* End */:
            var isBegin = position == 0 /* Begin */;
            var block = roosterjs_editor_dom_1.getFirstLastBlockElement(contentDiv, isBegin);
            var insertedNode = void 0;
            if (block) {
                var refNode = isBegin ? block.getStartNode() : block.getEndNode();
                if (insertOnNewLine ||
                    refNode.nodeType == 3 /* Text */ ||
                    roosterjs_editor_dom_1.isVoidHtmlElement(refNode)) {
                    // For insert on new line, or refNode is text or void html element (HR, BR etc.)
                    // which cannot have children, i.e. <div>hello<br>world</div>. 'hello', 'world' are the
                    // first and last node. Insert before 'hello' or after 'world', but still inside DIV
                    insertedNode = refNode.parentNode.insertBefore(node, isBegin ? refNode : refNode.nextSibling);
                }
                else {
                    // if the refNode can have child, use appendChild (which is like to insert as first/last child)
                    // i.e. <div>hello</div>, the content will be inserted before/after hello
                    insertedNode = refNode.insertBefore(node, isBegin ? refNode.firstChild : null);
                }
            }
            else {
                // No first block, this can happen when editor is empty. Use appendChild to insert the content in contentDiv
                insertedNode = contentDiv.appendChild(node);
            }
            // Final check to see if the inserted node is a block. If not block and the ask is to insert on new line,
            // add a DIV wrapping
            if (insertedNode && insertOnNewLine && !roosterjs_editor_dom_1.isBlockElement(insertedNode)) {
                roosterjs_editor_dom_1.wrap(insertedNode);
            }
            break;
        case 2 /* SelectionStart */:
            var range = core.api.getSelectionRange(core, true /*tryGetFromCache*/);
            if (range) {
                // if to replace the selection and the selection is not collapsed, remove the the content at selection first
                if (replaceSelection && !range.collapsed) {
                    range.deleteContents();
                }
                // Create a clone (backup) for the selection first as we may need to restore to it later
                var clonedRange = range.cloneRange();
                var position_1 = roosterjs_editor_dom_1.Position.getStart(range).normalize();
                var blockElement = roosterjs_editor_dom_1.getBlockElementAtNode(contentDiv, position_1.node);
                if (blockElement) {
                    var endNode = blockElement.getEndNode();
                    if (insertOnNewLine) {
                        // Adjust the insertion point
                        // option.insertOnNewLine means to insert on a block after the selection, not really right at the selection
                        // This is commonly used when users want to insert signature. They could place cursor somewhere mid of a line
                        // and insert signature, they actually want signature to be inserted the line after the selection
                        range.setEndAfter(endNode);
                        range.collapse(false /*toStart*/);
                    }
                    else {
                        range = preprocessNode(core, range, node, endNode);
                    }
                }
                var nodeForCursor = node.nodeType == 11 /* DocumentFragment */ ? node.lastChild : node;
                range.insertNode(node);
                if (updateCursor && nodeForCursor) {
                    core.api.select(core, new roosterjs_editor_dom_1.Position(nodeForCursor, -3 /* After */).normalize());
                }
                else {
                    core.api.select(core, clonedRange);
                }
            }
            break;
        case 3 /* Outside */:
            core.contentDiv.parentNode.insertBefore(node, contentDiv.nextSibling);
            break;
    }
    return true;
};
exports.default = insertNode;
function preprocessNode(core, range, nodeToInsert, currentNode) {
    var rootNodeToInsert = nodeToInsert;
    if (rootNodeToInsert.nodeType == 11 /* DocumentFragment */) {
        var rootNodes = [].slice.call(rootNodeToInsert.childNodes).filter(function (n) { return roosterjs_editor_dom_1.getTagOfNode(n) != 'BR'; });
        rootNodeToInsert = rootNodes.length == 1 ? rootNodes[0] : null;
    }
    var tag = roosterjs_editor_dom_1.getTagOfNode(rootNodeToInsert);
    if ((tag == 'OL' || tag == 'UL') && roosterjs_editor_dom_1.getTagOfNode(rootNodeToInsert.firstChild) == 'LI') {
        var shouldInsertListAsText = !rootNodeToInsert.firstChild.nextSibling &&
            roosterjs_editor_dom_1.getTagOfNode(rootNodeToInsert.nextSibling) != 'BR';
        if (roosterjs_editor_dom_1.getTagOfNode(rootNodeToInsert.nextSibling) == 'BR' && rootNodeToInsert.parentNode) {
            rootNodeToInsert.parentNode.removeChild(rootNodeToInsert.nextSibling);
        }
        if (shouldInsertListAsText) {
            roosterjs_editor_dom_1.unwrap(rootNodeToInsert.firstChild);
            roosterjs_editor_dom_1.unwrap(rootNodeToInsert);
        }
        else {
            var listNode = currentNode;
            while (roosterjs_editor_dom_1.getTagOfNode(listNode.parentNode) != tag &&
                roosterjs_editor_dom_1.contains(core.contentDiv, listNode)) {
                listNode = listNode.parentNode;
            }
            if (roosterjs_editor_dom_1.getTagOfNode(listNode.parentNode) == tag) {
                if (roosterjs_editor_dom_1.isNodeEmpty(listNode) ||
                    roosterjs_editor_dom_1.isPositionAtBeginningOf(roosterjs_editor_dom_1.Position.getStart(range), listNode)) {
                    range.setEndBefore(listNode);
                }
                else {
                    range.setEndAfter(listNode);
                }
                range.collapse(false /*toStart*/);
                roosterjs_editor_dom_1.unwrap(rootNodeToInsert);
            }
        }
    }
    if (roosterjs_editor_dom_1.getTagOfNode(currentNode) == 'P') {
        // Insert into a P tag may cause issues when the inserted content contains any block element.
        // Change P tag to DIV to make sure it works well
        var start = roosterjs_editor_dom_1.Position.getStart(range).normalize();
        var end = roosterjs_editor_dom_1.Position.getEnd(range).normalize();
        var div = roosterjs_editor_dom_1.changeElementTag(currentNode, 'div');
        var newRange = roosterjs_editor_dom_1.createRange(start, end);
        if (start.node != div && end.node != div && roosterjs_editor_dom_1.contains(core.contentDiv, newRange)) {
            range = newRange;
        }
    }
    if (roosterjs_editor_dom_1.isVoidHtmlElement(range.endContainer)) {
        range.setEndBefore(range.endContainer);
    }
    return range;
}


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/coreAPI/select.ts":
/*!**************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/coreAPI/select.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hasFocus_1 = __webpack_require__(/*! ./hasFocus */ "./packages/roosterjs-editor-core/lib/coreAPI/hasFocus.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var select = function (core, arg1, arg2, arg3, arg4) {
    var range;
    if (!arg1) {
        return false;
    }
    else if (arg1 instanceof Range) {
        range = arg1;
    }
    else {
        if (arg1.node) {
            range = roosterjs_editor_dom_1.createRange(new roosterjs_editor_dom_1.Position(arg1), arg2 && arg2.node ? new roosterjs_editor_dom_1.Position(arg2) : null);
        }
        else if (arg1 instanceof Node) {
            var start = void 0;
            var end = void 0;
            if (arg2 == undefined) {
                start = new roosterjs_editor_dom_1.Position(arg1, -2 /* Before */);
                end = new roosterjs_editor_dom_1.Position(arg1, -3 /* After */);
            }
            else {
                start = new roosterjs_editor_dom_1.Position(arg1, arg2);
                end =
                    arg3 instanceof Node
                        ? new roosterjs_editor_dom_1.Position(arg3, arg4)
                        : null;
            }
            range = roosterjs_editor_dom_1.createRange(start, end);
        }
    }
    if (roosterjs_editor_dom_1.contains(core.contentDiv, range)) {
        var selection = core.document.defaultView.getSelection();
        if (selection) {
            var needAddRange = true;
            if (selection.rangeCount > 0) {
                // Workaround IE exception 800a025e
                try {
                    // Do not remove/add range if current selection is the same with target range
                    // Without this check, execCommand() may fail in Edge since we changed the selection
                    var currentRange = roosterjs_editor_dom_1.Browser.isEdge && selection.rangeCount == 1
                        ? selection.getRangeAt(0)
                        : null;
                    if (currentRange &&
                        currentRange.startContainer == range.startContainer &&
                        currentRange.startOffset == range.startOffset &&
                        currentRange.endContainer == range.endContainer &&
                        currentRange.endOffset == range.endOffset) {
                        needAddRange = false;
                    }
                    else {
                        selection.removeAllRanges();
                    }
                }
                catch (e) { }
            }
            if (needAddRange) {
                selection.addRange(range);
            }
            if (!hasFocus_1.default(core)) {
                core.cachedSelectionRange = range;
            }
            return true;
        }
    }
    return false;
};
exports.default = select;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/coreAPI/triggerEvent.ts":
/*!********************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/coreAPI/triggerEvent.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var triggerEvent = function (core, pluginEvent, broadcast) {
    if (broadcast ||
        !core.eventHandlerPlugins.some(function (plugin) { return handledExclusively(pluginEvent, plugin); })) {
        core.eventHandlerPlugins.forEach(function (plugin) {
            if (plugin.onPluginEvent) {
                plugin.onPluginEvent(pluginEvent);
            }
        });
    }
};
function handledExclusively(event, plugin) {
    if (plugin.onPluginEvent &&
        plugin.willHandleEventExclusively &&
        plugin.willHandleEventExclusively(event)) {
        plugin.onPluginEvent(event);
        return true;
    }
    return false;
}
exports.default = triggerEvent;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/corePlugins/DOMEventPlugin.ts":
/*!**************************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/corePlugins/DOMEventPlugin.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * DOMEventPlugin handles customized DOM events, including:
 * 1. IME state management
 * 2. Selection management
 * 3. Cut and Drop management
 */
var DOMEventPlugin = /** @class */ (function () {
    function DOMEventPlugin(disableRestoreSelectionOnFocus) {
        var _this = this;
        this.disableRestoreSelectionOnFocus = disableRestoreSelectionOnFocus;
        this.inIme = false;
        this.onNativeEvent = function (e) {
            _this.editor.runAsync(function () {
                _this.editor.addUndoSnapshot(function () { }, e.type == 'cut' ? "Cut" /* Cut */ : "Drop" /* Drop */);
            });
        };
    }
    DOMEventPlugin.prototype.getName = function () {
        return 'DOMEvent';
    };
    DOMEventPlugin.prototype.initialize = function (editor) {
        var _this = this;
        var _a;
        this.editor = editor;
        this.disposer = editor.addDomEventHandler((_a = {
                // 1. IME state management
                compositionstart: function () { return (_this.inIme = true); },
                compositionend: function (e) {
                    _this.inIme = false;
                    editor.triggerEvent({
                        eventType: 3 /* CompositionEnd */,
                        rawEvent: e,
                    });
                }
            },
            // 2. Selection mangement
            _a[roosterjs_editor_dom_1.Browser.isIEOrEdge ? 'beforedeactivate' : 'blur'] = function () { return editor.saveSelectionRange(); },
            _a.focus = !this.disableRestoreSelectionOnFocus && (function () { return editor.restoreSavedRange(); }),
            // 3. Cut and drop management
            _a.drop = this.onNativeEvent,
            _a.cut = this.onNativeEvent,
            _a));
    };
    DOMEventPlugin.prototype.dispose = function () {
        this.disposer();
        this.disposer = null;
        this.editor = null;
    };
    /**
     * Check if editor is in IME input sequence
     * @returns True if editor is in IME input sequence, otherwise false
     */
    DOMEventPlugin.prototype.isInIME = function () {
        return this.inIme;
    };
    return DOMEventPlugin;
}());
exports.default = DOMEventPlugin;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/corePlugins/EditPlugin.ts":
/*!**********************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/corePlugins/EditPlugin.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Edit Component helps handle Content edit features
 */
var EditPlugin = /** @class */ (function () {
    function EditPlugin() {
        this.currentFeature = null;
        this.featureMap = {};
        this.autoCompleteSnapshot = null;
        this.autoCompleteChangeSource = null;
    }
    EditPlugin.prototype.getName = function () {
        return 'Edit';
    };
    EditPlugin.prototype.initialize = function (editor) {
        var _this = this;
        this.editor = editor;
        this.addFeature({
            keys: [8 /* BACKSPACE */],
            shouldHandleEvent: function () { return _this.autoCompleteSnapshot !== null; },
            handleEvent: function (event, editor) {
                event.rawEvent.preventDefault();
                editor.setContent(_this.autoCompleteSnapshot, false /*triggerContentChangedEvent*/);
            },
        });
    };
    EditPlugin.prototype.dispose = function () {
        this.editor = null;
    };
    /**
     * Handle events triggered from editor
     * @param event PluginEvent object
     */
    EditPlugin.prototype.onPluginEvent = function (event) {
        var contentChanged = false;
        switch (event.eventType) {
            case 6 /* ContentChanged */:
                if (this.autoCompleteChangeSource != event.source) {
                    contentChanged = true;
                }
                if (!this.currentFeature) {
                    this.findFeature(event);
                }
                break;
            case 4 /* MouseDown */:
                contentChanged = true;
                break;
            case 0 /* KeyDown */:
                contentChanged = true;
                break;
        }
        if (this.currentFeature) {
            var feature = this.currentFeature;
            this.currentFeature = null;
            feature.handleEvent(event, this.editor);
        }
        if (contentChanged) {
            this.autoCompleteSnapshot = null;
            this.autoCompleteChangeSource = null;
        }
    };
    /**
     * Check if the plugin should handle the given event exclusively.
     * Handle an event exclusively means other plugin will not receive this event in
     * onPluginEvent method.
     * If two plugins will return true in willHandleEventExclusively() for the same event,
     * the final result depends on the order of the plugins are added into editor
     * @param event The event to check
     */
    EditPlugin.prototype.willHandleEventExclusively = function (event) {
        this.findFeature(event);
        return !!this.currentFeature;
    };
    /**
     * Add a Content Edit feature
     * @param feature The feature to add
     */
    EditPlugin.prototype.addFeature = function (feature) {
        var _this = this;
        if (feature.initialize) {
            feature.initialize(this.editor);
        }
        feature.keys.forEach(function (key) {
            var array = _this.featureMap[key] || [];
            array.push(feature);
            _this.featureMap[key] = array;
        });
    };
    /**
     * Perform an auto complete action in the callback, save a snapsnot of content before the action,
     * and trigger ContentChangedEvent with the change source if specified
     * @param callback The auto complete callback, return value will be used as data field of ContentChangedEvent
     * @param changeSource Chagne source of ContentChangedEvent. If not passed, no ContentChangedEvent will be  triggered
     */
    EditPlugin.prototype.performAutoComplete = function (callback, changeSource) {
        var _this = this;
        this.editor.addUndoSnapshot(function (start, end, snapshot) {
            var data = callback();
            _this.autoCompleteSnapshot = snapshot;
            _this.autoCompleteChangeSource = changeSource;
            return data;
        }, changeSource);
    };
    EditPlugin.prototype.findFeature = function (event) {
        var _this = this;
        var hasFunctionKey = false;
        var features;
        if (event.eventType == 0 /* KeyDown */) {
            var rawEvent = event.rawEvent;
            hasFunctionKey = rawEvent.ctrlKey || rawEvent.altKey || rawEvent.metaKey;
            features = this.featureMap[rawEvent.which];
        }
        else if (event.eventType == 6 /* ContentChanged */) {
            features = this.featureMap[2048 /* CONTENTCHANGED */];
        }
        this.currentFeature =
            features &&
                features.filter(function (feature) {
                    return (feature.allowFunctionKeys || !hasFunctionKey) &&
                        feature.shouldHandleEvent(event, _this.editor);
                })[0];
    };
    return EditPlugin;
}());
exports.default = EditPlugin;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/corePlugins/MouseUpPlugin.ts":
/*!*************************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/corePlugins/MouseUpPlugin.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * MouseUp Component helps handle mouse up event
 * this can trigger mouse up event after mousedown happens in editor
 * even mouse up is happening outside editor
 */
var MouseUpPlugin = /** @class */ (function () {
    function MouseUpPlugin() {
        var _this = this;
        this.onMouseUp = function (e) {
            if (_this.editor) {
                _this.removeMouseUpEventListener();
                _this.editor.triggerEvent({
                    eventType: 5 /* MouseUp */,
                    rawEvent: e,
                });
            }
        };
    }
    MouseUpPlugin.prototype.getName = function () {
        return 'MouseUp';
    };
    MouseUpPlugin.prototype.initialize = function (editor) {
        this.editor = editor;
    };
    MouseUpPlugin.prototype.dispose = function () {
        this.removeMouseUpEventListener();
        this.editor = null;
    };
    /**
     * Handle events triggered from editor
     * @param event PluginEvent object
     */
    MouseUpPlugin.prototype.onPluginEvent = function (event) {
        if (event.eventType == 4 /* MouseDown */ && !this.mouseUpEventListerAdded) {
            this.editor
                .getDocument()
                .addEventListener('mouseup', this.onMouseUp, true /*setCapture*/);
            this.mouseUpEventListerAdded = true;
        }
    };
    MouseUpPlugin.prototype.removeMouseUpEventListener = function () {
        if (this.mouseUpEventListerAdded) {
            this.mouseUpEventListerAdded = false;
            this.editor.getDocument().removeEventListener('mouseup', this.onMouseUp, true);
        }
    };
    return MouseUpPlugin;
}());
exports.default = MouseUpPlugin;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/corePlugins/TypeInContainerPlugin.ts":
/*!*********************************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/corePlugins/TypeInContainerPlugin.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * Typing Component helps to ensure typing is always happening under a DOM container
 */
var TypeInContainerPlugin = /** @class */ (function () {
    function TypeInContainerPlugin() {
    }
    TypeInContainerPlugin.prototype.getName = function () {
        return 'TypeInContainer';
    };
    TypeInContainerPlugin.prototype.initialize = function (editor) {
        this.editor = editor;
    };
    TypeInContainerPlugin.prototype.dispose = function () {
        this.editor = null;
    };
    /**
     * Handle events triggered from editor
     * @param event PluginEvent object
     */
    TypeInContainerPlugin.prototype.onPluginEvent = function (event) {
        if (event.eventType == 1 /* KeyPress */) {
            this.onKeyPress(event);
        }
    };
    /**
     * Ensure we are typing in an HTML Element inside editor, and apply default format if current block is empty
     * @param node Current node
     * @param event (optional) The keyboard event that we are ensuring is typing in an element.
     * @returns A new position to select
     */
    TypeInContainerPlugin.prototype.ensureTypeInElement = function (position, event) {
        var result = position.normalize();
        var block = this.editor.getBlockElementAtNode(result.node);
        var formatNode;
        if (block) {
            formatNode = block.collapseToSingleElement();
            // if the block is empty, apply default format
            // Otherwise, leave it as it is as we don't want to change the style for existing data
            // unless the block was just created by the keyboard event (e.g. ctrl+a & start typing)
            var shouldSetNodeStyles = roosterjs_editor_dom_1.isNodeEmpty(formatNode) ||
                (event && this.wasNodeJustCreatedByKeyboardEvent(event, formatNode));
            formatNode = formatNode && shouldSetNodeStyles ? formatNode : null;
        }
        else {
            // Only reason we don't get the selection block is that we have an empty content div
            // which can happen when users removes everything (i.e. select all and DEL, or backspace from very end to begin)
            // The fix is to add a DIV wrapping, apply default format and move cursor over
            formatNode = roosterjs_editor_dom_1.fromHtml(roosterjs_editor_dom_1.Browser.isEdge ? '<div><span><br></span></div>' : '<div><br></div>', this.editor.getDocument())[0];
            this.editor.insertNode(formatNode, {
                position: 1 /* End */,
                updateCursor: false,
                replaceSelection: false,
                insertOnNewLine: false,
            });
            // element points to a wrapping node we added "<div><br></div>". We should move the selection left to <br>
            result = new roosterjs_editor_dom_1.Position(formatNode.firstChild, 0 /* Begin */);
        }
        if (formatNode) {
            roosterjs_editor_dom_1.applyFormat(formatNode, this.editor.getDefaultFormat());
        }
        return result;
    };
    TypeInContainerPlugin.prototype.onKeyPress = function (event) {
        var _this = this;
        // If normalization was not possible before the keypress,
        // check again after the keyboard event has been processed by browser native behaviour.
        //
        // This handles the case where the keyboard event that first inserts content happens when
        // there is already content under the selection (e.g. Ctrl+a -> type new content).
        //
        // Only scheudle when the range is not collapsed to catch this edge case.
        var range = this.editor.getSelectionRange();
        var shouldNormalizeTypingNow = range &&
            range.collapsed &&
            !this.editor.contains(roosterjs_editor_dom_1.findClosestElementAncestor(range.startContainer));
        if (shouldNormalizeTypingNow) {
            this.tryNormalizeTyping(event, range);
        }
        else if (!range.collapsed) {
            this.editor.runAsync(function () {
                _this.tryNormalizeTyping(event);
            });
        }
    };
    /**
     * When typing goes directly under content div, many things can go wrong
     * We fix it by wrapping it with a div and reposition cursor within the div
     */
    TypeInContainerPlugin.prototype.tryNormalizeTyping = function (event, range) {
        var position = this.ensureTypeInElement(roosterjs_editor_dom_1.Position.getStart(range || this.editor.getSelectionRange()), event);
        this.editor.select(position);
    };
    TypeInContainerPlugin.prototype.wasNodeJustCreatedByKeyboardEvent = function (event, formatNode) {
        return (event.rawEvent.target instanceof Node &&
            event.rawEvent.target.contains(formatNode) &&
            event.rawEvent.key === formatNode.innerText);
    };
    return TypeInContainerPlugin;
}());
exports.default = TypeInContainerPlugin;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/editor/Editor.ts":
/*!*************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/editor/Editor.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createEditorCore_1 = __webpack_require__(/*! ./createEditorCore */ "./packages/roosterjs-editor-core/lib/editor/createEditorCore.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var roosterjs_editor_dom_2 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * RoosterJs core editor class
 */
var Editor = /** @class */ (function () {
    //#region Lifecycle
    /**
     * Creates an instance of Editor
     * @param contentDiv The DIV HTML element which will be the container element of editor
     * @param options An optional options object to customize the editor
     */
    function Editor(contentDiv, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        // 1. Make sure all parameters are valid
        if (roosterjs_editor_dom_2.getTagOfNode(contentDiv) != 'DIV') {
            throw new Error('contentDiv must be an HTML DIV element');
        }
        // 2. Store options values to local variables
        this.core = createEditorCore_1.default(contentDiv, options);
        // 3. Initialize plugins
        this.core.plugins.forEach(function (plugin) { return plugin.initialize(_this); });
        // 4. Ensure initial content and its format
        this.setContent(options.initialContent || contentDiv.innerHTML || '');
        // 5. Create event handler to bind DOM events
        this.eventDisposers = [
            this.core.api.attachDomEvent(this.core, 'keypress', 1 /* KeyPress */),
            this.core.api.attachDomEvent(this.core, 'keydown', 0 /* KeyDown */),
            this.core.api.attachDomEvent(this.core, 'keyup', 2 /* KeyUp */),
            this.core.api.attachDomEvent(this.core, 'mousedown', 4 /* MouseDown */),
        ];
        // 6. Add additional content edit features to the editor if specified
        if (options.additionalEditFeatures) {
            options.additionalEditFeatures.forEach(function (feature) { return _this.addContentEditFeature(feature); });
        }
        // 7. Make the container editable and set its selection styles
        if (!options.omitContentEditableAttributeChanges && !contentDiv.isContentEditable) {
            contentDiv.setAttribute('contenteditable', 'true');
            var styles = contentDiv.style;
            styles.userSelect = styles.msUserSelect = styles.webkitUserSelect = 'text';
            this.contenteditableChanged = true;
        }
        // 8. Disable these operations for firefox since its behavior is usually wrong
        // Catch any possible exception since this should not block the initialization of editor
        try {
            this.core.document.execCommand("enableObjectResizing" /* EnableObjectResizing */, false, (false));
            this.core.document.execCommand("enableInlineTableEditing" /* EnableInlineTableEditing */, false, false);
        }
        catch (e) { }
        // 9. Let plugins know that we are ready
        this.triggerEvent({
            eventType: 9 /* EditorReady */,
        }, true /*broadcast*/);
        // 10. Before give editor to user, make sure there is at least one DIV element to accept typing
        this.core.corePlugins.typeInContainer.ensureTypeInElement(new roosterjs_editor_dom_2.Position(contentDiv, 0 /* Begin */));
    }
    /**
     * Dispose this editor, dispose all plugins and custom data
     */
    Editor.prototype.dispose = function () {
        this.triggerEvent({
            eventType: 10 /* BeforeDispose */,
        }, true /*broadcast*/);
        this.core.plugins.forEach(function (plugin) { return plugin.dispose(); });
        this.eventDisposers.forEach(function (disposer) { return disposer(); });
        this.eventDisposers = null;
        for (var _i = 0, _a = Object.keys(this.core.customData); _i < _a.length; _i++) {
            var key = _a[_i];
            var data = this.core.customData[key];
            if (data && data.disposer) {
                data.disposer(data.value);
            }
            delete this.core.customData[key];
        }
        if (this.contenteditableChanged) {
            var styles = this.core.contentDiv.style;
            styles.userSelect = styles.msUserSelect = styles.webkitUserSelect = '';
            this.core.contentDiv.removeAttribute('contenteditable');
        }
        this.core = null;
    };
    /**
     * Get whether this editor is disposed
     * @returns True if editor is disposed, otherwise false
     */
    Editor.prototype.isDisposed = function () {
        return !this.core;
    };
    //#endregion
    //#region Node API
    /**
     * Insert node into editor
     * @param node The node to insert
     * @param option Insert options. Default value is:
     *  position: ContentPosition.SelectionStart
     *  updateCursor: true
     *  replaceSelection: true
     *  insertOnNewLine: false
     * @returns true if node is inserted. Otherwise false
     */
    Editor.prototype.insertNode = function (node, option) {
        return node ? this.core.api.insertNode(this.core, node, option) : false;
    };
    /**
     * Delete a node from editor content
     * @param node The node to delete
     * @returns true if node is deleted. Otherwise false
     */
    Editor.prototype.deleteNode = function (node) {
        // Only remove the node when it falls within editor
        if (node && this.contains(node)) {
            node.parentNode.removeChild(node);
            return true;
        }
        return false;
    };
    /**
     * Replace a node in editor content with another node
     * @param existingNode The existing node to be replaced
     * @param new node to replace to
     * @returns true if node is replaced. Otherwise false
     */
    Editor.prototype.replaceNode = function (existingNode, toNode) {
        // Only replace the node when it falls within editor
        if (existingNode && toNode && this.contains(existingNode)) {
            existingNode.parentNode.replaceChild(toNode, existingNode);
            return true;
        }
        return false;
    };
    /**
     * Get InlineElement at given node
     * @param node The node to create InlineElement
     * @returns The InlineElement result
     */
    Editor.prototype.getInlineElementAtNode = function (node) {
        return roosterjs_editor_dom_2.getInlineElementAtNode(this.core.contentDiv, node);
    };
    /**
     * Get BlockElement at given node
     * @param node The node to create InlineElement
     * @returns The BlockElement result
     */
    Editor.prototype.getBlockElementAtNode = function (node) {
        return roosterjs_editor_dom_2.getBlockElementAtNode(this.core.contentDiv, node);
    };
    Editor.prototype.contains = function (arg) {
        return roosterjs_editor_dom_2.contains(this.core.contentDiv, arg);
    };
    Editor.prototype.queryElements = function (selector, scopeOrCallback, callback) {
        if (scopeOrCallback === void 0) { scopeOrCallback = 0 /* Body */; }
        var scope = scopeOrCallback instanceof Function ? 0 /* Body */ : scopeOrCallback;
        callback = scopeOrCallback instanceof Function ? scopeOrCallback : callback;
        var range = scope == 0 /* Body */ ? null : this.getSelectionRange();
        return roosterjs_editor_dom_2.queryElements(this.core.contentDiv, selector, callback, scope, range);
    };
    /**
     * Collapse nodes within the given start and end nodes to their common ascenstor node,
     * split parent nodes if necessary
     * @param start The start node
     * @param end The end node
     * @param canSplitParent True to allow split parent node there are nodes before start or after end under the same parent
     * and the returned nodes will be all nodes from start trhough end after splitting
     * False to disallow split parent
     * @returns When cansplitParent is true, returns all node from start through end after splitting,
     * otherwise just return start and end
     */
    Editor.prototype.collapseNodes = function (start, end, canSplitParent) {
        return roosterjs_editor_dom_2.collapseNodes(this.core.contentDiv, start, end, canSplitParent);
    };
    //#endregion
    //#region Content API
    /**
     * Check whether the editor contains any visible content
     * @param trim Whether trime the content string before check. Default is false
     * @returns True if there's no visible content, otherwise false
     */
    Editor.prototype.isEmpty = function (trim) {
        return roosterjs_editor_dom_2.isNodeEmpty(this.core.contentDiv, trim);
    };
    /**
     * Get current editor content as HTML string
     * @param triggerExtractContentEvent Whether trigger ExtractContent event to all plugins
     * before return. Use this parameter to remove any temporary content added by plugins.
     * @param includeSelectionMarker Set to true if need include selection marker inside the content.
     * When restore this content, editor will set the selection to the position marked by these markers
     * @returns HTML string representing current editor content
     */
    Editor.prototype.getContent = function (triggerExtractContentEvent, includeSelectionMarker) {
        if (triggerExtractContentEvent === void 0) { triggerExtractContentEvent = true; }
        if (includeSelectionMarker === void 0) { includeSelectionMarker = false; }
        var contentDiv = this.core.contentDiv;
        var content = contentDiv.innerHTML;
        var selectionPath;
        if (includeSelectionMarker &&
            (selectionPath = roosterjs_editor_dom_1.getSelectionPath(contentDiv, this.getSelectionRange()))) {
            content += "<!--" + JSON.stringify(selectionPath) + "-->";
        }
        if (triggerExtractContentEvent) {
            var extractContentEvent = {
                eventType: 7 /* ExtractContent */,
                content: content,
            };
            this.triggerEvent(extractContentEvent, true /*broadcast*/);
            content = extractContentEvent.content;
        }
        return content;
    };
    /**
     * Get plain text content inside editor
     * @returns The text content inside editor
     */
    Editor.prototype.getTextContent = function () {
        return this.core.contentDiv.innerText;
    };
    /**
     * Set HTML content to this editor. All existing content will be replaced. A ContentChanged event will be triggered
     * @param content HTML content to set in
     * @param triggerContentChangedEvent True to trigger a ContentChanged event. Default value is true
     */
    Editor.prototype.setContent = function (content, triggerContentChangedEvent) {
        if (triggerContentChangedEvent === void 0) { triggerContentChangedEvent = true; }
        var contentDiv = this.core.contentDiv;
        if (contentDiv.innerHTML != content) {
            contentDiv.innerHTML = content || '';
            var pathComment = contentDiv.lastChild;
            if (pathComment && pathComment.nodeType == 8 /* Comment */) {
                try {
                    var path = JSON.parse(pathComment.nodeValue);
                    this.deleteNode(pathComment);
                    var range = roosterjs_editor_dom_1.getRangeFromSelectionPath(contentDiv, path);
                    this.select(range);
                }
                catch (_a) { }
            }
            if (triggerContentChangedEvent) {
                this.triggerContentChangedEvent();
            }
        }
    };
    /**
     * Insert HTML content into editor
     * @param HTML content to insert
     * @param option Insert options. Default value is:
     *  position: ContentPosition.SelectionStart
     *  updateCursor: true
     *  replaceSelection: true
     *  insertOnNewLine: false
     */
    Editor.prototype.insertContent = function (content, option) {
        if (content) {
            var allNodes = roosterjs_editor_dom_2.fromHtml(content, this.core.document);
            // If it is to insert on new line, and there are more than one node in the collection, wrap all nodes with
            // a parent DIV before calling insertNode on each top level sub node. Otherwise, every sub node may get wrapped
            // separately to show up on its own line
            if (option && option.insertOnNewLine && allNodes.length > 0) {
                allNodes = [roosterjs_editor_dom_2.wrap(allNodes)];
            }
            for (var i = 0; i < allNodes.length; i++) {
                this.insertNode(allNodes[i], option);
            }
        }
    };
    //#endregion
    //#region Focus and Selection
    /**
     * Get current selection range from Editor.
     * It does a live pull on the selection, if nothing retrieved, return whatever we have in cache.
     * @returns current selection range, or null if editor never got focus before
     */
    Editor.prototype.getSelectionRange = function () {
        return this.core.api.getSelectionRange(this.core, true /*tryGetFromCache*/);
    };
    /**
     * Check if focus is in editor now
     * @returns true if focus is in editor, otherwise false
     */
    Editor.prototype.hasFocus = function () {
        return this.core.api.hasFocus(this.core);
    };
    /**
     * Focus to this editor, the selection was restored to where it was before, no unexpected scroll.
     */
    Editor.prototype.focus = function () {
        this.core.api.focus(this.core);
    };
    Editor.prototype.select = function (arg1, arg2, arg3, arg4) {
        return this.core.api.select(this.core, arg1, arg2, arg3, arg4);
    };
    /**
     * Get current selection
     * @return current selection object
     */
    Editor.prototype.getSelection = function () {
        return this.core.document.defaultView.getSelection();
    };
    /**
     * Save the current selection in editor so that when focus again, the selection can be restored
     */
    Editor.prototype.saveSelectionRange = function () {
        this.core.cachedSelectionRange = this.core.api.getSelectionRange(this.core, false /*tryGetFromCache*/);
    };
    /**
     * Restore the saved selection range and clear it
     */
    Editor.prototype.restoreSavedRange = function () {
        this.select(this.core.cachedSelectionRange);
        this.core.cachedSelectionRange = null;
    };
    /**
     * Get current focused position. Return null if editor doesn't have focus at this time.
     */
    Editor.prototype.getFocusedPosition = function () {
        var sel = this.getSelection();
        if (this.contains(sel && sel.focusNode)) {
            return new roosterjs_editor_dom_2.Position(sel.focusNode, sel.focusOffset);
        }
        var range = this.getSelectionRange();
        if (range) {
            return roosterjs_editor_dom_2.Position.getStart(range);
        }
        return null;
    };
    /**
     * Get a rect representing the location of the cursor.
     * @returns a Rect object representing cursor location
     */
    Editor.prototype.getCursorRect = function () {
        var position = this.getFocusedPosition();
        return position && roosterjs_editor_dom_2.getPositionRect(position);
    };
    /**
     * Get an HTML element from current cursor position.
     * When expectedTags is not specified, return value is the current node (if it is HTML element)
     * or its parent node (if current node is a Text node).
     * When expectedTags is specified, return value is the first anscestor of current node which has
     * one of the expected tags.
     * If no element found within editor by the given tag, return null.
     * @param selector Optional, an HTML selector to find HTML element with.
     * @param startFrom Start search from this node. If not specified, start from current focused position
     */
    Editor.prototype.getElementAtCursor = function (selector, startFrom) {
        if (!startFrom) {
            var position = this.getFocusedPosition();
            startFrom = position && position.node;
        }
        return startFrom && roosterjs_editor_dom_2.findClosestElementAncestor(startFrom, this.core.contentDiv, selector);
    };
    Editor.prototype.addDomEventHandler = function (nameOrMap, handler) {
        var _this = this;
        if (nameOrMap instanceof Object) {
            var handlers_1 = Object.keys(nameOrMap)
                .map(function (eventName) {
                return nameOrMap[eventName] &&
                    _this.core.api.attachDomEvent(_this.core, eventName, null /*pluginEventType*/, nameOrMap[eventName]);
            })
                .filter(function (x) { return x; });
            return function () { return handlers_1.forEach(function (handler) { return handler(); }); };
        }
        else {
            return this.core.api.attachDomEvent(this.core, nameOrMap, null /*pluginEventType*/, handler);
        }
    };
    /**
     * Trigger an event to be dispatched to all plugins
     * @param pluginEvent The event object to trigger
     * @param broadcast indicates if the event needs to be dispatched to all plugins
     * True means to all, false means to allow exclusive handling from one plugin unless no one wants that
     */
    Editor.prototype.triggerEvent = function (pluginEvent, broadcast) {
        if (broadcast === void 0) { broadcast = true; }
        this.core.api.triggerEvent(this.core, pluginEvent, broadcast);
    };
    /**
     * Trigger a ContentChangedEvent
     * @param source Source of this event, by default is 'SetContent'
     * @param data additional data for this event
     */
    Editor.prototype.triggerContentChangedEvent = function (source, data) {
        if (source === void 0) { source = "SetContent" /* SetContent */; }
        this.triggerEvent({
            eventType: 6 /* ContentChanged */,
            source: source,
            data: data,
        });
    };
    //#endregion
    //#region Undo API
    /**
     * Undo last edit operation
     */
    Editor.prototype.undo = function () {
        this.focus();
        this.core.corePlugins.undo.undo();
    };
    /**
     * Redo next edit operation
     */
    Editor.prototype.redo = function () {
        this.focus();
        this.core.corePlugins.undo.redo();
    };
    /**
     * Add undo snapshot, and execute a format callback function, then add another undo snapshot, then trigger
     * ContentChangedEvent with given change source.
     * If this function is called nested, undo snapshot will only be added in the outside one
     * @param callback The callback function to perform formatting, returns a data object which will be used as
     * the data field in ContentChangedEvent if changeSource is not null.
     * @param changeSource The change source to use when fire ContentChangedEvent. When the value is not null,
     * a ContentChangedEvent will be fired with change source equal to this value
     */
    Editor.prototype.addUndoSnapshot = function (callback, changeSource) {
        this.core.api.editWithUndo(this.core, callback, changeSource);
    };
    /**
     * Perform an auto complete action in the callback, save a snapsnot of content before the action,
     * and trigger ContentChangedEvent with the change source if specified
     * @param callback The auto complete callback, return value will be used as data field of ContentChangedEvent
     * @param changeSource Chagne source of ContentChangedEvent. If not passed, no ContentChangedEvent will be  triggered
     */
    Editor.prototype.performAutoComplete = function (callback, changeSource) {
        this.core.corePlugins.edit.performAutoComplete(callback, changeSource);
    };
    /**
     * Whether there is an available undo snapshot
     */
    Editor.prototype.canUndo = function () {
        return this.core.corePlugins.undo.canUndo();
    };
    /**
     * Whether there is an available redo snapshot
     */
    Editor.prototype.canRedo = function () {
        return this.core.corePlugins.undo.canRedo();
    };
    //#endregion
    //#region Misc
    /**
     * Get document which contains this editor
     * @returns The HTML document which contains this editor
     */
    Editor.prototype.getDocument = function () {
        return this.core.document;
    };
    /**
     * Get custom data related to this editor
     * @param key Key of the custom data
     * @param getter Getter function. If custom data for the given key doesn't exist,
     * call this function to get one and store it.
     * @param disposer An optional disposer function to dispose this custom data when
     * dispose editor.
     */
    Editor.prototype.getCustomData = function (key, getter, disposer) {
        return this.core.api.getCustomData(this.core, key, getter, disposer);
    };
    /**
     * Check if editor is in IME input sequence
     * @returns True if editor is in IME input sequence, otherwise false
     */
    Editor.prototype.isInIME = function () {
        return this.core.corePlugins.domEvent.isInIME();
    };
    /**
     * Get default format of this editor
     * @returns Default format object of this editor
     */
    Editor.prototype.getDefaultFormat = function () {
        return this.core.defaultFormat;
    };
    /**
     * Get a content traverser for the whole editor
     */
    Editor.prototype.getBodyTraverser = function () {
        return roosterjs_editor_dom_2.ContentTraverser.createBodyTraverser(this.core.contentDiv);
    };
    /**
     * Get a content traverser for current selection
     */
    Editor.prototype.getSelectionTraverser = function () {
        var range = this.getSelectionRange();
        return (range &&
            roosterjs_editor_dom_2.ContentTraverser.createSelectionTraverser(this.core.contentDiv, this.getSelectionRange()));
    };
    /**
     * Get a content traverser for current block element start from specified position
     * @param startFrom Start position of the traverser. Default value is ContentPosition.SelectionStart
     */
    Editor.prototype.getBlockTraverser = function (startFrom) {
        if (startFrom === void 0) { startFrom = 2 /* SelectionStart */; }
        var range = this.getSelectionRange();
        return (range && roosterjs_editor_dom_2.ContentTraverser.createBlockTraverser(this.core.contentDiv, range, startFrom));
    };
    /**
     * Get a text traverser of current selection
     */
    Editor.prototype.getContentSearcherOfCursor = function () {
        var range = this.getSelectionRange();
        return range && new roosterjs_editor_dom_2.PositionContentSearcher(this.core.contentDiv, roosterjs_editor_dom_2.Position.getStart(range));
    };
    /**
     * Run a callback function asynchronously
     * @param callback The callback function to run
     */
    Editor.prototype.runAsync = function (callback) {
        var _this = this;
        var win = this.core.contentDiv.ownerDocument.defaultView || window;
        win.requestAnimationFrame(function () {
            if (!_this.isDisposed() && callback) {
                callback();
            }
        });
    };
    /**
     * Set DOM attribute of editor content DIV
     * @param name Name of the attribute
     * @param value Value of the attribute
     */
    Editor.prototype.setEditorDomAttribute = function (name, value) {
        if (value === null) {
            this.core.contentDiv.removeAttribute(name);
        }
        else {
            this.core.contentDiv.setAttribute(name, value);
        }
    };
    /**
     * Add a Content Edit feature. This is mostly called from ContentEdit plugin
     * @param feature The feature to add
     */
    Editor.prototype.addContentEditFeature = function (feature) {
        this.core.corePlugins.edit.addFeature(feature);
    };
    return Editor;
}());
exports.default = Editor;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/editor/createEditorCore.ts":
/*!***********************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/editor/createEditorCore.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var attachDomEvent_1 = __webpack_require__(/*! ../coreAPI/attachDomEvent */ "./packages/roosterjs-editor-core/lib/coreAPI/attachDomEvent.ts");
var DOMEventPlugin_1 = __webpack_require__(/*! ../corePlugins/DOMEventPlugin */ "./packages/roosterjs-editor-core/lib/corePlugins/DOMEventPlugin.ts");
var EditPlugin_1 = __webpack_require__(/*! ../corePlugins/EditPlugin */ "./packages/roosterjs-editor-core/lib/corePlugins/EditPlugin.ts");
var editWithUndo_1 = __webpack_require__(/*! ../coreAPI/editWithUndo */ "./packages/roosterjs-editor-core/lib/coreAPI/editWithUndo.ts");
var focus_1 = __webpack_require__(/*! ../coreAPI/focus */ "./packages/roosterjs-editor-core/lib/coreAPI/focus.ts");
var getCustomData_1 = __webpack_require__(/*! ../coreAPI/getCustomData */ "./packages/roosterjs-editor-core/lib/coreAPI/getCustomData.ts");
var getSelectionRange_1 = __webpack_require__(/*! ../coreAPI/getSelectionRange */ "./packages/roosterjs-editor-core/lib/coreAPI/getSelectionRange.ts");
var hasFocus_1 = __webpack_require__(/*! ../coreAPI/hasFocus */ "./packages/roosterjs-editor-core/lib/coreAPI/hasFocus.ts");
var insertNode_1 = __webpack_require__(/*! ../coreAPI/insertNode */ "./packages/roosterjs-editor-core/lib/coreAPI/insertNode.ts");
var MouseUpPlugin_1 = __webpack_require__(/*! ../corePlugins/MouseUpPlugin */ "./packages/roosterjs-editor-core/lib/corePlugins/MouseUpPlugin.ts");
var select_1 = __webpack_require__(/*! ../coreAPI/select */ "./packages/roosterjs-editor-core/lib/coreAPI/select.ts");
var triggerEvent_1 = __webpack_require__(/*! ../coreAPI/triggerEvent */ "./packages/roosterjs-editor-core/lib/coreAPI/triggerEvent.ts");
var TypeInContainerPlugin_1 = __webpack_require__(/*! ../corePlugins/TypeInContainerPlugin */ "./packages/roosterjs-editor-core/lib/corePlugins/TypeInContainerPlugin.ts");
var Undo_1 = __webpack_require__(/*! ../undo/Undo */ "./packages/roosterjs-editor-core/lib/undo/Undo.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
function createEditorCore(contentDiv, options) {
    var corePlugins = {
        undo: options.undo || new Undo_1.default(),
        edit: new EditPlugin_1.default(),
        typeInContainer: new TypeInContainerPlugin_1.default(),
        mouseUp: new MouseUpPlugin_1.default(),
        domEvent: new DOMEventPlugin_1.default(options.disableRestoreSelectionOnFocus),
    };
    var allPlugins = [
        corePlugins.typeInContainer,
        corePlugins.edit,
        corePlugins.mouseUp
    ].concat((options.plugins || []), [
        corePlugins.undo,
        corePlugins.domEvent,
    ]).filter(function (plugin) { return !!plugin; });
    var eventHandlerPlugins = allPlugins.filter(function (plugin) { return plugin.onPluginEvent || plugin.willHandleEventExclusively; });
    return {
        contentDiv: contentDiv,
        document: contentDiv.ownerDocument,
        defaultFormat: calcDefaultFormat(contentDiv, options.defaultFormat),
        corePlugins: corePlugins,
        currentUndoSnapshot: null,
        customData: {},
        cachedSelectionRange: null,
        plugins: allPlugins,
        eventHandlerPlugins: eventHandlerPlugins,
        api: createCoreApiMap(options.coreApiOverride),
        defaultApi: createCoreApiMap(),
    };
}
exports.default = createEditorCore;
function calcDefaultFormat(node, baseFormat) {
    if (baseFormat && Object.keys(baseFormat).length === 0) {
        return {};
    }
    baseFormat = baseFormat || {};
    var styles = roosterjs_editor_dom_1.getComputedStyles(node);
    return {
        fontFamily: baseFormat.fontFamily || styles[0],
        fontSize: baseFormat.fontSize || styles[1],
        textColor: baseFormat.textColor || styles[2],
        backgroundColor: baseFormat.backgroundColor || '',
        bold: baseFormat.bold,
        italic: baseFormat.italic,
        underline: baseFormat.underline,
    };
}
function createCoreApiMap(map) {
    map = map || {};
    return {
        attachDomEvent: map.attachDomEvent || attachDomEvent_1.default,
        editWithUndo: map.editWithUndo || editWithUndo_1.default,
        focus: map.focus || focus_1.default,
        getCustomData: map.getCustomData || getCustomData_1.default,
        getSelectionRange: map.getSelectionRange || getSelectionRange_1.default,
        hasFocus: map.hasFocus || hasFocus_1.default,
        insertNode: map.insertNode || insertNode_1.default,
        select: map.select || select_1.default,
        triggerEvent: map.triggerEvent || triggerEvent_1.default,
    };
}


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/eventApi/cacheGetContentSearcher.ts":
/*!********************************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/eventApi/cacheGetContentSearcher.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cacheGetEventData_1 = __webpack_require__(/*! ./cacheGetEventData */ "./packages/roosterjs-editor-core/lib/eventApi/cacheGetEventData.ts");
var clearEventDataCache_1 = __webpack_require__(/*! ./clearEventDataCache */ "./packages/roosterjs-editor-core/lib/eventApi/clearEventDataCache.ts");
var CONTENTSEARCHER_KEY = 'CONTENTSEARCHER';
/**
 * Try get existing PositionContentSearcher from an event. If there isn't one, create a new one from editor.
 * @param event The plugin event, it stores the event cached data for looking up.
 * If passed as null, we will create a new PositionContentSearcher
 * @param editor The editor instance
 * @returns The PositionContentSearcher object
 */
function cacheGetContentSearcher(event, editor) {
    return cacheGetEventData_1.default(event, CONTENTSEARCHER_KEY, function () { return editor.getContentSearcherOfCursor(); });
}
exports.cacheGetContentSearcher = cacheGetContentSearcher;
/**
 * Clear the PositionContentSearcher in a plugin event.
 * This is called when the content is changed
 * @param event The plugin event
 */
function clearContentSearcherCache(event) {
    clearEventDataCache_1.default(event, CONTENTSEARCHER_KEY);
}
exports.clearContentSearcherCache = clearContentSearcherCache;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/eventApi/cacheGetElementAtCursor.ts":
/*!********************************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/eventApi/cacheGetElementAtCursor.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cacheGetEventData_1 = __webpack_require__(/*! ./cacheGetEventData */ "./packages/roosterjs-editor-core/lib/eventApi/cacheGetEventData.ts");
var CACHE_KEY_PREFIX = 'GET_ELEMENT_AT_CURSOR_';
/**
 * Get an HTML element at cursor from event cache if it exists.
 * If an selector is specified, return the nearest ancestor of current node
 * which matches the selector, or null if no match found in editor.
 * @param editor The editor instance
 * @param event Event object to get cached object from
 * @param selector The expected selector. If null, return the element at cursor
 * @returns The element at cursor or the nearest ancestor with the tag name is specified
 */
function cacheGetElementAtCursor(editor, event, selector) {
    return cacheGetEventData_1.default(event, CACHE_KEY_PREFIX + selector, function () {
        return editor.getElementAtCursor(selector);
    });
}
exports.default = cacheGetElementAtCursor;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/eventApi/cacheGetEventData.ts":
/*!**************************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/eventApi/cacheGetEventData.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets the cached event data by cache key from event object if there is already one.
 * Otherwise, call getter function to create one, and cache it.
 * @param event The event object
 * @param key Cache key string, need to be unique
 * @param getter Getter function to get the object when it is not in cache yet
 */
function cacheGetEventData(event, key, getter) {
    var result = event && event.eventDataCache && event.eventDataCache.hasOwnProperty(key)
        ? event.eventDataCache[key]
        : getter();
    if (event) {
        event.eventDataCache = event.eventDataCache || {};
        event.eventDataCache[key] = result;
    }
    return result;
}
exports.default = cacheGetEventData;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/eventApi/clearEventDataCache.ts":
/*!****************************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/eventApi/clearEventDataCache.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Clear a cached object by its key from an event object
 * @param event The event object
 * @param key The cache key
 */
function clearEventDataCache(event, key) {
    if (event && event.eventDataCache && event.eventDataCache.hasOwnProperty(key)) {
        delete event.eventDataCache[key];
    }
}
exports.default = clearEventDataCache;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/index.ts":
/*!*****************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Classes
var Editor_1 = __webpack_require__(/*! ./editor/Editor */ "./packages/roosterjs-editor-core/lib/editor/Editor.ts");
exports.Editor = Editor_1.default;
var Undo_1 = __webpack_require__(/*! ./undo/Undo */ "./packages/roosterjs-editor-core/lib/undo/Undo.ts");
exports.Undo = Undo_1.default;
// Core Plugins
var EditPlugin_1 = __webpack_require__(/*! ./corePlugins/EditPlugin */ "./packages/roosterjs-editor-core/lib/corePlugins/EditPlugin.ts");
exports.EditPlugin = EditPlugin_1.default;
var MouseUpPlugin_1 = __webpack_require__(/*! ./corePlugins/MouseUpPlugin */ "./packages/roosterjs-editor-core/lib/corePlugins/MouseUpPlugin.ts");
exports.MouseUpPlugin = MouseUpPlugin_1.default;
var DOMEventPlugin_1 = __webpack_require__(/*! ./corePlugins/DOMEventPlugin */ "./packages/roosterjs-editor-core/lib/corePlugins/DOMEventPlugin.ts");
exports.DOMEventPlugin = DOMEventPlugin_1.default;
var TypeInContainerPlugin_1 = __webpack_require__(/*! ./corePlugins/TypeInContainerPlugin */ "./packages/roosterjs-editor-core/lib/corePlugins/TypeInContainerPlugin.ts");
exports.TypeInContainerPlugin = TypeInContainerPlugin_1.default;
// Event APIs
var cacheGetEventData_1 = __webpack_require__(/*! ./eventApi/cacheGetEventData */ "./packages/roosterjs-editor-core/lib/eventApi/cacheGetEventData.ts");
exports.cacheGetEventData = cacheGetEventData_1.default;
var clearEventDataCache_1 = __webpack_require__(/*! ./eventApi/clearEventDataCache */ "./packages/roosterjs-editor-core/lib/eventApi/clearEventDataCache.ts");
exports.clearEventDataCache = clearEventDataCache_1.default;
var cacheGetContentSearcher_1 = __webpack_require__(/*! ./eventApi/cacheGetContentSearcher */ "./packages/roosterjs-editor-core/lib/eventApi/cacheGetContentSearcher.ts");
exports.cacheGetContentSearcher = cacheGetContentSearcher_1.cacheGetContentSearcher;
exports.clearContentSearcherCache = cacheGetContentSearcher_1.clearContentSearcherCache;
var cacheGetElementAtCursor_1 = __webpack_require__(/*! ./eventApi/cacheGetElementAtCursor */ "./packages/roosterjs-editor-core/lib/eventApi/cacheGetElementAtCursor.ts");
exports.cacheGetElementAtCursor = cacheGetElementAtCursor_1.default;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/undo/Undo.ts":
/*!*********************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/undo/Undo.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UndoSnapshots_1 = __webpack_require__(/*! ./UndoSnapshots */ "./packages/roosterjs-editor-core/lib/undo/UndoSnapshots.ts");
var KEY_BACKSPACE = 8;
var KEY_DELETE = 46;
var KEY_SPACE = 32;
var KEY_ENTER = 13;
var KEY_PAGEUP = 33;
var KEY_DOWN = 40;
/**
 * Provides snapshot based undo service for Editor
 */
var Undo = /** @class */ (function () {
    /**
     * Create an instance of Undo
     * @param preserveSnapshots True to preserve the snapshots after dispose, this allows
     * this object to be reused when editor is disposed and created again
     * @param maxBufferSize The max buffer size for snapshots. Default value is 10MB
     */
    function Undo(preserveSnapshots, maxBufferSize) {
        if (maxBufferSize === void 0) { maxBufferSize = 1e7; }
        this.preserveSnapshots = preserveSnapshots;
        this.maxBufferSize = maxBufferSize;
    }
    /**
     * Get a friendly name of  this plugin
     */
    Undo.prototype.getName = function () {
        return 'Undo';
    };
    /**
     * Initialize this plugin. This should only be called from Editor
     * @param editor Editor instance
     */
    Undo.prototype.initialize = function (editor) {
        this.editor = editor;
    };
    /**
     * Dispose this plugin
     */
    Undo.prototype.dispose = function () {
        this.editor = null;
        if (!this.preserveSnapshots) {
            this.clear();
        }
    };
    /**
     * Handle events triggered from editor
     * @param event PluginEvent object
     */
    Undo.prototype.onPluginEvent = function (event) {
        // if editor is in IME, don't do anything
        if (this.editor.isInIME()) {
            return;
        }
        switch (event.eventType) {
            case 9 /* EditorReady */:
                this.addUndoSnapshot();
                break;
            case 0 /* KeyDown */:
                this.onKeyDown(event.rawEvent);
                break;
            case 1 /* KeyPress */:
                this.onKeyPress(event.rawEvent);
                break;
            case 3 /* CompositionEnd */:
                this.clearRedoForInput();
                this.addUndoSnapshot();
                break;
            case 6 /* ContentChanged */:
                if (!this.isRestoring) {
                    this.clearRedoForInput();
                }
                break;
        }
    };
    /**
     * Clear all existing undo snapshots
     */
    Undo.prototype.clear = function () {
        this.undoSnapshots = null;
        this.hasNewContent = false;
    };
    /**
     * Restore an undo snapshot to editor
     */
    Undo.prototype.undo = function () {
        if (this.hasNewContent) {
            this.addUndoSnapshot();
        }
        this.restoreSnapshot(-1 /*previousSnapshot*/);
    };
    /**
     * Restore a redo snapshot to editor
     */
    Undo.prototype.redo = function () {
        this.restoreSnapshot(1 /*nextSnapshot*/);
    };
    /**
     * Whether there is a snapshot for undo
     */
    Undo.prototype.canUndo = function () {
        return this.hasNewContent || this.getSnapshotsManager().canMove(-1 /*previousSnapshot*/);
    };
    /**
     * Whether there is a snapshot for redo
     */
    Undo.prototype.canRedo = function () {
        return this.getSnapshotsManager().canMove(1 /*nextSnapshot*/);
    };
    /**
     * Add an undo snapshot
     */
    Undo.prototype.addUndoSnapshot = function () {
        var snapshot = this.editor.getContent(false /*triggerExtractContentEvent*/, true /*markSelection*/);
        this.getSnapshotsManager().addSnapshot(snapshot);
        this.hasNewContent = false;
        return snapshot;
    };
    Undo.prototype.getSnapshotsManager = function () {
        if (!this.undoSnapshots) {
            this.undoSnapshots = new UndoSnapshots_1.default(this.maxBufferSize);
        }
        return this.undoSnapshots;
    };
    Undo.prototype.restoreSnapshot = function (delta) {
        var snapshot = this.getSnapshotsManager().move(delta);
        if (snapshot != null) {
            try {
                this.isRestoring = true;
                this.editor.setContent(snapshot);
            }
            finally {
                this.isRestoring = false;
            }
        }
    };
    Undo.prototype.onKeyDown = function (evt) {
        // Handle backspace/delete when there is a selection to take a snapshot
        // since we want the state prior to deletion restorable
        if (evt.which == KEY_BACKSPACE || evt.which == KEY_DELETE) {
            var selectionRange = this.editor.getSelectionRange();
            // Add snapshot when
            // 1. Something has been selected (not collapsed), or
            // 2. It has a different key code from the last keyDown event (to prevent adding too many snapshot when keeping press the same key), or
            // 3. Ctrl/Meta key is pressed so that a whole word will be deleted
            if (selectionRange &&
                (!selectionRange.collapsed ||
                    this.lastKeyPress != evt.which ||
                    evt.ctrlKey ||
                    evt.metaKey)) {
                this.addUndoSnapshot();
            }
            // Since some content is deleted, always set hasNewContent to true so that we will take undo snapshot next time
            this.hasNewContent = true;
            this.lastKeyPress = evt.which;
        }
        else if (evt.which >= KEY_PAGEUP && evt.which <= KEY_DOWN) {
            // PageUp, PageDown, Home, End, Left, Right, Up, Down
            if (this.hasNewContent) {
                this.addUndoSnapshot();
            }
            this.lastKeyPress = 0;
        }
    };
    Undo.prototype.onKeyPress = function (evt) {
        if (evt.metaKey) {
            // if metaKey is pressed, simply return since no actual effect will be taken on the editor.
            // this is to prevent changing hasNewContent to true when meta + v to paste on Safari.
            return;
        }
        var range = this.editor.getSelectionRange();
        if ((range && !range.collapsed) ||
            (evt.which == KEY_SPACE && this.lastKeyPress != KEY_SPACE) ||
            evt.which == KEY_ENTER) {
            this.addUndoSnapshot();
            if (evt.which == KEY_ENTER) {
                // Treat ENTER as new content so if there is no input after ENTER and undo,
                // we restore the snapshot before ENTER
                this.hasNewContent = true;
            }
        }
        else {
            this.clearRedoForInput();
        }
        this.lastKeyPress = evt.which;
    };
    Undo.prototype.clearRedoForInput = function () {
        this.getSnapshotsManager().clearRedo();
        this.lastKeyPress = 0;
        this.hasNewContent = true;
    };
    return Undo;
}());
exports.default = Undo;


/***/ }),

/***/ "./packages/roosterjs-editor-core/lib/undo/UndoSnapshots.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-editor-core/lib/undo/UndoSnapshots.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Max stack size that cannot be exceeded. When exceeded, old undo history will be dropped
// to keep size under limit. This is kept at 10MB
var MAXSIZELIMIT = 1e7;
var UndoSnapshots = /** @class */ (function () {
    function UndoSnapshots(maxSize) {
        if (maxSize === void 0) { maxSize = MAXSIZELIMIT; }
        this.maxSize = maxSize;
        this.snapshots = [];
        this.totalSize = 0;
        this.currentIndex = -1;
    }
    /**
     * Check whether can move current undo snapshot with the given step
     * @param step The step to check, can be positive, negative or 0
     * @returns True if can move current snapshot with the given step, otherwise false
     */
    UndoSnapshots.prototype.canMove = function (delta) {
        var newIndex = this.currentIndex + delta;
        return newIndex >= 0 && newIndex < this.snapshots.length;
    };
    /**
     * Move current snapshot with the given step if can move this step. Otherwise no action and return null
     * @param step The step to move
     * @returns If can move with the given step, returns the snapshot after move, otherwise null
     */
    UndoSnapshots.prototype.move = function (delta) {
        if (this.canMove(delta)) {
            this.currentIndex += delta;
            return this.snapshots[this.currentIndex];
        }
        else {
            return null;
        }
    };
    /**
     * Add a new undo snapshot
     * @param snapshot The snapshot to add
     */
    UndoSnapshots.prototype.addSnapshot = function (snapshot) {
        if (this.currentIndex < 0 || snapshot != this.snapshots[this.currentIndex]) {
            this.clearRedo();
            this.snapshots.push(snapshot);
            this.currentIndex++;
            this.totalSize += snapshot.length;
            var removeCount = 0;
            while (removeCount < this.snapshots.length && this.totalSize > this.maxSize) {
                this.totalSize -= this.snapshots[removeCount].length;
                removeCount++;
            }
            if (removeCount > 0) {
                this.snapshots.splice(0, removeCount);
                this.currentIndex -= removeCount;
            }
        }
    };
    /**
     * Clear all undo snapshots after the current one
     */
    UndoSnapshots.prototype.clearRedo = function () {
        if (this.canMove(1)) {
            var removedSize = 0;
            for (var i = this.currentIndex + 1; i < this.snapshots.length; i++) {
                removedSize += this.snapshots[i].length;
            }
            this.snapshots.splice(this.currentIndex + 1);
            this.totalSize -= removedSize;
        }
    };
    return UndoSnapshots;
}());
exports.default = UndoSnapshots;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/blockElements/NodeBlockElement.ts":
/*!*****************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/blockElements/NodeBlockElement.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contains_1 = __webpack_require__(/*! ../utils/contains */ "./packages/roosterjs-editor-dom/lib/utils/contains.ts");
var isNodeAfter_1 = __webpack_require__(/*! ../utils/isNodeAfter */ "./packages/roosterjs-editor-dom/lib/utils/isNodeAfter.ts");
/**
 * This presents a content block that can be reprented by a single html block type element.
 * In most cases, it corresponds to an HTML block level element, i.e. P, DIV, LI, TD etc.
 */
var NodeBlockElement = /** @class */ (function () {
    function NodeBlockElement(element) {
        this.element = element;
    }
    /**
     * Collapse this element to a single DOM element.
     * If the content nodes are separated in different root nodes, wrap them to a single node
     * If the content nodes are included in root node with other nodes, split root node
     */
    NodeBlockElement.prototype.collapseToSingleElement = function () {
        return this.element;
    };
    /**
     * Get the start node of the block
     * For NodeBlockElement, start and end essentially refers to same node
     */
    NodeBlockElement.prototype.getStartNode = function () {
        return this.element;
    };
    /**
     * Get the end node of the block
     * For NodeBlockElement, start and end essentially refers to same node
     */
    NodeBlockElement.prototype.getEndNode = function () {
        return this.element;
    };
    /**
     * Checks if it refers to same block
     */
    NodeBlockElement.prototype.equals = function (blockElement) {
        // Ideally there is only one unique way to generate a block so we only need to compare the startNode
        return this.element == blockElement.getStartNode();
    };
    /**
     * Checks if a block is after the current block
     */
    NodeBlockElement.prototype.isAfter = function (blockElement) {
        // if the block's startNode is after current node endEnd, we say it is after
        return isNodeAfter_1.default(this.element, blockElement.getEndNode());
    };
    /**
     * Checks if a certain html node is within the block
     */
    NodeBlockElement.prototype.contains = function (node) {
        return contains_1.default(this.element, node, true /*treatSameNodeAsContain*/);
    };
    return NodeBlockElement;
}());
exports.default = NodeBlockElement;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/blockElements/StartEndBlockElement.ts":
/*!*********************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/blockElements/StartEndBlockElement.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var collapseNodes_1 = __webpack_require__(/*! ../utils/collapseNodes */ "./packages/roosterjs-editor-dom/lib/utils/collapseNodes.ts");
var contains_1 = __webpack_require__(/*! ../utils/contains */ "./packages/roosterjs-editor-dom/lib/utils/contains.ts");
var getTagOfNode_1 = __webpack_require__(/*! ../utils/getTagOfNode */ "./packages/roosterjs-editor-dom/lib/utils/getTagOfNode.ts");
var isBlockElement_1 = __webpack_require__(/*! ../utils/isBlockElement */ "./packages/roosterjs-editor-dom/lib/utils/isBlockElement.ts");
var isNodeAfter_1 = __webpack_require__(/*! ../utils/isNodeAfter */ "./packages/roosterjs-editor-dom/lib/utils/isNodeAfter.ts");
var wrap_1 = __webpack_require__(/*! ../utils/wrap */ "./packages/roosterjs-editor-dom/lib/utils/wrap.ts");
var splitParentNode_1 = __webpack_require__(/*! ../utils/splitParentNode */ "./packages/roosterjs-editor-dom/lib/utils/splitParentNode.ts");
var STRUCTURE_NODE_TAGS = ['TD', 'TH', 'LI', 'BLOCKQUOTE'];
/**
 * This reprents a block that is identified by a start and end node
 * This is for cases like <root>Hello<BR>World</root>
 * in that case, Hello<BR> is a block, World is another block
 * Such block cannot be represented by a NodeBlockElement since they don't chained up
 * to a single parent node, instead they have a start and end
 * This start and end must be in same sibling level and have same parent in DOM tree
 */
var StartEndBlockElement = /** @class */ (function () {
    function StartEndBlockElement(rootNode, startNode, endNode) {
        this.rootNode = rootNode;
        this.startNode = startNode;
        this.endNode = endNode;
    }
    StartEndBlockElement.getBlockContext = function (node) {
        while (node && !isBlockElement_1.default(node)) {
            node = node.parentNode;
        }
        return node;
    };
    /**
     * Collapse this element to a single DOM element.
     * If the content nodes are separated in different root nodes, wrap them to a single node
     * If the content nodes are included in root node with other nodes, split root node
     */
    StartEndBlockElement.prototype.collapseToSingleElement = function () {
        var nodes = collapseNodes_1.default(StartEndBlockElement.getBlockContext(this.startNode), this.startNode, this.endNode, true /*canSplitParent*/);
        var blockContext = StartEndBlockElement.getBlockContext(this.startNode);
        while (nodes[0] &&
            nodes[0] != blockContext &&
            nodes[0].parentNode != this.rootNode &&
            STRUCTURE_NODE_TAGS.indexOf(getTagOfNode_1.default(nodes[0].parentNode)) < 0) {
            nodes = [splitParentNode_1.splitBalancedNodeRange(nodes)];
        }
        return nodes.length == 1 && isBlockElement_1.default(nodes[0])
            ? nodes[0]
            : wrap_1.default(nodes);
    };
    /**
     * Gets the start node
     */
    StartEndBlockElement.prototype.getStartNode = function () {
        return this.startNode;
    };
    /**
     * Gets the end node
     */
    StartEndBlockElement.prototype.getEndNode = function () {
        return this.endNode;
    };
    /**
     * Checks equals of two blocks
     */
    StartEndBlockElement.prototype.equals = function (blockElement) {
        return (this.startNode == blockElement.getStartNode() &&
            this.endNode == blockElement.getEndNode());
    };
    /**
     * Checks if another block is after this current
     */
    StartEndBlockElement.prototype.isAfter = function (blockElement) {
        return isNodeAfter_1.default(this.getStartNode(), blockElement.getEndNode());
    };
    /**
     * Checks if an Html node is contained within the block
     */
    StartEndBlockElement.prototype.contains = function (node) {
        return (contains_1.default(this.startNode, node, true /*treatSameNodeAsContain*/) ||
            contains_1.default(this.endNode, node, true /*treatSameNodeAsContain*/) ||
            (isNodeAfter_1.default(node, this.startNode) && isNodeAfter_1.default(this.endNode, node)));
    };
    return StartEndBlockElement;
}());
exports.default = StartEndBlockElement;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/blockElements/getBlockElementAtNode.ts":
/*!**********************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/blockElements/getBlockElementAtNode.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var collapseNodes_1 = __webpack_require__(/*! ../utils/collapseNodes */ "./packages/roosterjs-editor-dom/lib/utils/collapseNodes.ts");
var contains_1 = __webpack_require__(/*! ../utils/contains */ "./packages/roosterjs-editor-dom/lib/utils/contains.ts");
var getTagOfNode_1 = __webpack_require__(/*! ../utils/getTagOfNode */ "./packages/roosterjs-editor-dom/lib/utils/getTagOfNode.ts");
var isBlockElement_1 = __webpack_require__(/*! ../utils/isBlockElement */ "./packages/roosterjs-editor-dom/lib/utils/isBlockElement.ts");
var NodeBlockElement_1 = __webpack_require__(/*! ./NodeBlockElement */ "./packages/roosterjs-editor-dom/lib/blockElements/NodeBlockElement.ts");
var StartEndBlockElement_1 = __webpack_require__(/*! ./StartEndBlockElement */ "./packages/roosterjs-editor-dom/lib/blockElements/StartEndBlockElement.ts");
/**
 * This produces a block element from a a node
 * It needs to account for various HTML structure. Examples:
 * 1) <root><div>abc</div></root>
 *   This is most common the case, user passes in a node pointing to abc, and get back a block representing <div>abc</div>
 * 2) <root><p><br></p></root>
 *   Common content for empty block, user passes node pointing to <br>, and get back a block representing <p><br></p>
 * 3) <root>abc</root>
 *   Not common, but does happen. It is still a block in user's view. User passes in abc, and get back a start-end block representing abc
 *   NOTE: abc could be just one node. However, since it is not a html block, it is more appropriate to use start-end block although they point to same node
 * 4) <root><div>abc<br>123</div></root>
 *   A bit tricky, but can happen when user use Ctrl+Enter which simply inserts a <BR> to create a link break. There're two blocks:
 *   block1: 1) abc<br> block2: 123
 * 5) <root><div>abc<div>123</div></div></root>
 *   Nesting div and there is text node in same level as a DIV. Two blocks: 1) abc 2) <div>123</div>
 * 6) <root><div>abc<span>123<br>456</span></div></root>
 *   This is really tricky. Essentially there is a <BR> in middle of a span breaking the span into two blocks;
 *   block1: abc<span>123<br> block2: 456
 * In summary, given any arbitary node (leaf), to identify the head and tail of the block, following rules need to be followed:
 * 1) to identify the head, it needs to crawl DOM tre left/up till a block node or BR is encountered
 * 2) same for identifying tail
 * 3) should also apply a block ceiling, meaning as it crawls up, it should stop at a block node
 * @param rootNode Root node of the scope, the block element will be inside of this node
 * @param node The node to get BlockElement start from
 */
function getBlockElementAtNode(rootNode, node) {
    if (!contains_1.default(rootNode, node)) {
        return null;
    }
    // Identify the containing block. This serves as ceiling for traversing down below
    // NOTE: this container block could be just the rootNode,
    // which cannot be used to create block element. We will special case handle it later on
    var containerBlockNode = StartEndBlockElement_1.default.getBlockContext(node);
    if (containerBlockNode == node) {
        return new NodeBlockElement_1.default(containerBlockNode);
    }
    // Find the head and leaf node in the block
    var headNode = findHeadTailLeafNode(node, containerBlockNode, false /*isTail*/);
    var tailNode = findHeadTailLeafNode(node, containerBlockNode, true /*isTail*/);
    // At this point, we have the head and tail of a block, here are some examples and where head and tail point to
    // 1) <root><div>hello<br></div></root>, head: hello, tail: <br>
    // 2) <root><div>hello<span style="font-family: Arial">world</span></div></root>, head: hello, tail: world
    // Both are actually completely and exclusively wrapped in a parent div, and can be represented with a Node block
    // So we shall try to collapse as much as we can to the nearest common ancester
    var nodes = collapseNodes_1.default(rootNode, headNode, tailNode, false /*canSplitParent*/);
    headNode = nodes[0];
    tailNode = nodes[nodes.length - 1];
    if (headNode.parentNode != tailNode.parentNode) {
        // Un-Balanced start and end, create a start-end block
        return new StartEndBlockElement_1.default(rootNode, headNode, tailNode);
    }
    else {
        // Balanced start and end (point to same parent), need to see if further collapsing can be done
        while (!headNode.previousSibling && !tailNode.nextSibling) {
            var parentNode = headNode.parentNode;
            if (parentNode == containerBlockNode) {
                // Has reached the container block
                if (containerBlockNode != rootNode) {
                    // If the container block is not the root, use the container block
                    headNode = tailNode = parentNode;
                }
                break;
            }
            else {
                // Continue collapsing to parent
                headNode = tailNode = parentNode;
            }
        }
        // If head and tail are same and it is a block element, create NodeBlock, otherwise start-end block
        return headNode == tailNode && isBlockElement_1.default(headNode)
            ? new NodeBlockElement_1.default(headNode)
            : new StartEndBlockElement_1.default(rootNode, headNode, tailNode);
    }
}
exports.default = getBlockElementAtNode;
/**
 * Given a node and container block, identify the first/last leaf node
 * A leaf node is defined as deepest first/last node in a block
 * i.e. <div><span style="font-family: Arial">abc</span></div>, abc is the head leaf of the block
 * Often <br> or a child <div> is used to create a block. In that case, the leaf after the sibling div or br should be the head leaf
 * i.e. <div>123<br>abc</div>, abc is the head of a block because of a previous sibling <br>
 * i.e. <div><div>123</div>abc</div>, abc is also the head of a block because of a previous sibling <div>
 */
function findHeadTailLeafNode(node, containerBlockNode, isTail) {
    var result = node;
    if (getTagOfNode_1.default(result) == 'BR' && isTail) {
        return result;
    }
    while (result) {
        var sibling = node;
        while (!(sibling = isTail ? node.nextSibling : node.previousSibling)) {
            node = node.parentNode;
            if (node == containerBlockNode) {
                return result;
            }
        }
        while (sibling) {
            if (isBlockElement_1.default(sibling)) {
                return result;
            }
            else if (getTagOfNode_1.default(sibling) == 'BR') {
                return isTail ? sibling : result;
            }
            node = sibling;
            sibling = isTail ? node.firstChild : node.lastChild;
        }
        result = node;
    }
    return result;
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/blockElements/getFirstLastBlockElement.ts":
/*!*************************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/blockElements/getFirstLastBlockElement.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getBlockElementAtNode_1 = __webpack_require__(/*! ./getBlockElementAtNode */ "./packages/roosterjs-editor-dom/lib/blockElements/getBlockElementAtNode.ts");
/**
 * Get the first/last BlockElement of under the root node.
 * If no suitable BlockElement found, returns null
 * @param rootNode The root node to get BlockElement from
 * @param isFirst True to get first BlockElement, false to get last BlockElement
 */
function getFirstLastBlockElement(rootNode, isFirst) {
    var node = rootNode;
    do {
        node = node && (isFirst ? node.firstChild : node.lastChild);
    } while (node && node.firstChild);
    return node && getBlockElementAtNode_1.default(rootNode, node);
}
exports.default = getFirstLastBlockElement;
/**
 * Get the first BlockElement of under the root node.
 * If no suitable BlockElement found, returns null
 * @param rootNode The root node to get BlockElement from
 */
function getFirstBlockElement(rootNode) {
    return getFirstLastBlockElement(rootNode, true /*isFirst*/);
}
exports.getFirstBlockElement = getFirstBlockElement;
/**
 * Get the last BlockElement of under the root node.
 * If no suitable BlockElement found, returns null
 * @param rootNode The root node to get BlockElement from
 */
function getLastBlockElement(rootNode) {
    return getFirstLastBlockElement(rootNode, false /*isFirst*/);
}
exports.getLastBlockElement = getLastBlockElement;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/contentTraverser/BodyScoper.ts":
/*!**************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/contentTraverser/BodyScoper.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contains_1 = __webpack_require__(/*! ../utils/contains */ "./packages/roosterjs-editor-dom/lib/utils/contains.ts");
var getFirstLastBlockElement_1 = __webpack_require__(/*! ../blockElements/getFirstLastBlockElement */ "./packages/roosterjs-editor-dom/lib/blockElements/getFirstLastBlockElement.ts");
var getFirstLastInlineElement_1 = __webpack_require__(/*! ../inlineElements/getFirstLastInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/getFirstLastInlineElement.ts");
/**
 * provides scoper for traversing the entire editor body starting from the beginning
 */
var BodyScoper = /** @class */ (function () {
    /**
     * Construct a new instance of BodyScoper class
     * @param rootNode Root node of the body
     */
    function BodyScoper(rootNode) {
        this.rootNode = rootNode;
    }
    /**
     * Get the start block element
     */
    BodyScoper.prototype.getStartBlockElement = function () {
        return getFirstLastBlockElement_1.getFirstBlockElement(this.rootNode);
    };
    /**
     * Get the start inline element
     */
    BodyScoper.prototype.getStartInlineElement = function () {
        return getFirstLastInlineElement_1.getFirstInlineElement(this.rootNode);
    };
    /**
     * Since the scope is global, all blocks under the root node are in scope
     */
    BodyScoper.prototype.isBlockInScope = function (blockElement) {
        return contains_1.default(this.rootNode, blockElement.getStartNode());
    };
    /**
     * Since we're at body scope, inline elements never need to be trimmed
     */
    BodyScoper.prototype.trimInlineElement = function (inlineElement) {
        return inlineElement;
    };
    return BodyScoper;
}());
exports.default = BodyScoper;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/contentTraverser/ContentTraverser.ts":
/*!********************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/contentTraverser/ContentTraverser.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BodyScoper_1 = __webpack_require__(/*! ./BodyScoper */ "./packages/roosterjs-editor-dom/lib/contentTraverser/BodyScoper.ts");
var EmptyInlineElement_1 = __webpack_require__(/*! ../inlineElements/EmptyInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/EmptyInlineElement.ts");
var getBlockElementAtNode_1 = __webpack_require__(/*! ../blockElements/getBlockElementAtNode */ "./packages/roosterjs-editor-dom/lib/blockElements/getBlockElementAtNode.ts");
var getInlineElementAtNode_1 = __webpack_require__(/*! ../inlineElements/getInlineElementAtNode */ "./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementAtNode.ts");
var PartialInlineElement_1 = __webpack_require__(/*! ../inlineElements/PartialInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/PartialInlineElement.ts");
var SelectionBlockScoper_1 = __webpack_require__(/*! ./SelectionBlockScoper */ "./packages/roosterjs-editor-dom/lib/contentTraverser/SelectionBlockScoper.ts");
var SelectionScoper_1 = __webpack_require__(/*! ./SelectionScoper */ "./packages/roosterjs-editor-dom/lib/contentTraverser/SelectionScoper.ts");
var getInlineElementBeforeAfter_1 = __webpack_require__(/*! ../inlineElements/getInlineElementBeforeAfter */ "./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementBeforeAfter.ts");
var getLeafSibling_1 = __webpack_require__(/*! ../utils/getLeafSibling */ "./packages/roosterjs-editor-dom/lib/utils/getLeafSibling.ts");
/**
 * The provides traversing of content inside editor.
 * There are two ways to traverse, block by block, or inline element by inline element
 * Block and inline traversing is independent from each other, meanning if you traverse block by block, it does not change
 * the current inline element position
 */
var ContentTraverser = /** @class */ (function () {
    /**
     * Create a content traverser for the whole body of given root node
     * @param scoper Traversing scoper object to help scope the traversing
     */
    function ContentTraverser(scoper) {
        this.scoper = scoper;
    }
    /**
     * Create a content traverser for the whole body of given root node
     * @param rootNode The root node to traverse in
     */
    ContentTraverser.createBodyTraverser = function (rootNode) {
        return new ContentTraverser(new BodyScoper_1.default(rootNode));
    };
    /**
     * Create a content traverser for the given selection
     * @param rootNode The root node to traverse in
     * @param range The selection range to scope the traversing
     */
    ContentTraverser.createSelectionTraverser = function (rootNode, range) {
        return new ContentTraverser(new SelectionScoper_1.default(rootNode, range));
    };
    /**
     * Create a content traverser for a block element which contains the given position
     * @param rootNode The root node to traverse in
     * @param position A position inside a block, traversing will be scoped within this block.
     * If passing a range, the start position of this range will be used
     * @param startFrom Start position of traversing. The value can be Begin, End, SelectionStart
     */
    ContentTraverser.createBlockTraverser = function (rootNode, position, start) {
        if (start === void 0) { start = 2 /* SelectionStart */; }
        return new ContentTraverser(new SelectionBlockScoper_1.default(rootNode, position, start));
    };
    Object.defineProperty(ContentTraverser.prototype, "currentBlockElement", {
        /**
         * Get current block
         */
        get: function () {
            // Prepare currentBlock from the scoper
            if (!this.currentBlock) {
                this.currentBlock = this.scoper.getStartBlockElement();
            }
            return this.currentBlock;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get next block element
     */
    ContentTraverser.prototype.getNextBlockElement = function () {
        return this.getPreviousNextBlockElement(true /*isNext*/);
    };
    /**
     * Get previous block element
     */
    ContentTraverser.prototype.getPreviousBlockElement = function () {
        return this.getPreviousNextBlockElement(false /*isNext*/);
    };
    ContentTraverser.prototype.getPreviousNextBlockElement = function (isNext) {
        var current = this.currentBlockElement;
        var leaf = getLeafSibling_1.getLeafSibling(this.scoper.rootNode, isNext ? current.getEndNode() : current.getStartNode(), isNext);
        var newBlock = leaf ? getBlockElementAtNode_1.default(this.scoper.rootNode, leaf) : null;
        // Make sure this is right block:
        // 1) the block is in scope per scoper
        // 2) the block is after (for next) or before (for previous) the current block
        // Then:
        // 1) Re-position current block to newly found block
        if (newBlock &&
            this.scoper.isBlockInScope(newBlock) &&
            ((isNext && newBlock.isAfter(current)) || (!isNext && current.isAfter(newBlock)))) {
            this.currentBlock = newBlock;
            return this.currentBlock;
        }
        return null;
    };
    Object.defineProperty(ContentTraverser.prototype, "currentInlineElement", {
        /**
         * Current inline element getter
         */
        get: function () {
            // Retrieve a start inline from scoper
            if (!this.currentInline) {
                this.currentInline = this.scoper.getStartInlineElement();
            }
            return this.currentInline instanceof EmptyInlineElement_1.default ? null : this.currentInline;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get next inline element
     */
    ContentTraverser.prototype.getNextInlineElement = function () {
        return this.getPreviousNextInlineElement(true /*isNext*/);
    };
    /**
     * Get previous inline element
     */
    ContentTraverser.prototype.getPreviousInlineElement = function () {
        return this.getPreviousNextInlineElement(false /*isNext*/);
    };
    ContentTraverser.prototype.getPreviousNextInlineElement = function (isNext) {
        var current = this.currentInlineElement || this.currentInline;
        var newInline;
        if (current instanceof EmptyInlineElement_1.default) {
            newInline = getInlineElementBeforeAfter_1.getInlineElementBeforeAfter(this.scoper.rootNode, current.getStartPosition(), isNext);
            if (newInline && !current.getParentBlock().contains(newInline.getContainerNode())) {
                newInline = null;
            }
        }
        else {
            newInline = getNextPreviousInlineElement(this.scoper.rootNode, current, isNext);
            newInline =
                newInline &&
                    current &&
                    ((isNext && newInline.isAfter(current)) || (!isNext && current.isAfter(newInline)))
                    ? newInline
                    : null;
        }
        // For inline, we need to make sure:
        // 1) it is really next/previous to current
        // 2) pass on the new inline to this.scoper to do the triming and we still get back an inline
        // Then
        // 1) re-position current inline
        if (newInline && (newInline = this.scoper.trimInlineElement(newInline))) {
            this.currentInline = newInline;
            return this.currentInline;
        }
        return null;
    };
    return ContentTraverser;
}());
exports.default = ContentTraverser;
function getNextPreviousInlineElement(rootNode, current, isNext) {
    if (!current) {
        return null;
    }
    if (current instanceof PartialInlineElement_1.default) {
        // if current is partial, get the the othe half of the inline unless it is no more
        var result = isNext ? current.nextInlineElement : current.previousInlineElement;
        if (result) {
            return result;
        }
    }
    // Get a leaf node after startNode and use that base to find next inline
    var startNode = current.getContainerNode();
    startNode = getLeafSibling_1.getLeafSibling(rootNode, startNode, isNext);
    return getInlineElementAtNode_1.default(rootNode, startNode);
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/contentTraverser/PositionContentSearcher.ts":
/*!***************************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/contentTraverser/PositionContentSearcher.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentTraverser_1 = __webpack_require__(/*! ./ContentTraverser */ "./packages/roosterjs-editor-dom/lib/contentTraverser/ContentTraverser.ts");
var createRange_1 = __webpack_require__(/*! ../selection/createRange */ "./packages/roosterjs-editor-dom/lib/selection/createRange.ts");
// White space matching regex. It matches following chars:
// \s: white space
// \u00A0: no-breaking white space
// \u200B: zero width space
// \u3000: full width space (which can come from JPN IME)
var WHITESPACE_REGEX = /[\s\u00A0\u200B\u3000]+([^\s\u00A0\u200B\u3000]*)$/i;
/**
 * The class that helps search content around a position
 */
var PositionContentSearcher = /** @class */ (function () {
    /**
     * Create a new CursorData instance
     * @param rootNode Root node of the whole scope
     * @param position Start position
     */
    function PositionContentSearcher(rootNode, position) {
        this.rootNode = rootNode;
        this.position = position;
        // The cached text before position that has been read so far
        this.text = '';
        // All inline elements before position that have been read so far
        this.inlineElements = [];
    }
    /**
     * Get the word before position. The word is determined by scanning backwards till the first white space, the portion
     * between position and the white space is the word before position
     * @returns The word before position
     */
    PositionContentSearcher.prototype.getWordBefore = function () {
        var _this = this;
        if (!this.word) {
            this.traverse(function () { return _this.word; });
        }
        return this.word;
    };
    /**
     * Get the inline element before position
     * @returns The inlineElement before position
     */
    PositionContentSearcher.prototype.getInlineElementBefore = function () {
        if (!this.inlineBefore) {
            this.traverse(null);
        }
        return this.inlineBefore;
    };
    /**
     * Get the inline element after position
     * @returns The inline element after position
     */
    PositionContentSearcher.prototype.getInlineElementAfter = function () {
        if (!this.inlineAfter) {
            this.inlineAfter = ContentTraverser_1.default.createBlockTraverser(this.rootNode, this.position).currentInlineElement;
        }
        return this.inlineAfter;
    };
    /**
     * Get X number of chars before position
     * The actual returned chars may be less than what is requested.
     * @param length The length of string user want to get, the string always ends at the position,
     * so this length determins the start position of the string
     * @returns The actual string we get as a sub string, or the whole string before position when
     * there is not enough chars in the string
     */
    PositionContentSearcher.prototype.getSubStringBefore = function (length) {
        var _this = this;
        if (this.text.length < length) {
            this.traverse(function () { return _this.text.length >= length; });
        }
        return this.text.substr(Math.max(0, this.text.length - length));
    };
    /**
     * Try to get a range matches the given text before the position
     * @param text The text to match against
     * @param exactMatch Whether it is an exact match
     * @returns The range for the matched text, null if unable to find a match
     */
    PositionContentSearcher.prototype.getRangeFromText = function (text, exactMatch) {
        if (!text) {
            return null;
        }
        var startPosition;
        var endPosition;
        var textIndex = text.length - 1;
        this.forEachTextInlineElement(function (textInline) {
            var nodeContent = textInline.getTextContent() || '';
            var nodeIndex = nodeContent.length - 1;
            for (; nodeIndex >= 0 && textIndex >= 0; nodeIndex--) {
                if (text.charCodeAt(textIndex) == nodeContent.charCodeAt(nodeIndex)) {
                    textIndex--;
                    // on first time when end is matched, set the end of range
                    if (!endPosition) {
                        endPosition = textInline.getStartPosition().move(nodeIndex + 1);
                    }
                }
                else if (exactMatch || endPosition) {
                    // Mismatch found when exact match or end already match, so return since matching failed
                    return true;
                }
            }
            // when textIndex == -1, we have a successful complete match
            if (textIndex == -1) {
                startPosition = textInline.getStartPosition().move(nodeIndex + 1);
                return true;
            }
            return false;
        });
        return startPosition && endPosition && createRange_1.default(startPosition, endPosition);
    };
    /**
     * Get text section before position till stop condition is met.
     * This offers consumers to retrieve text section by section
     * The section essentially is just an inline element which has Container element
     * so that the consumer can remember it for anchoring popup or verification purpose
     * when position moves out of context etc.
     * @param stopFunc The callback stop function
     */
    PositionContentSearcher.prototype.forEachTextInlineElement = function (callback) {
        // We cache all text sections read so far
        // Every time when you ask for textSection, we start with the cached first
        // and resort to further reading once we exhausted with the cache
        if (!this.inlineElements.some(callback)) {
            this.traverse(callback);
        }
    };
    /**
     * Get first non textual inline element before position
     * @returns First non textutal inline element before position or null if no such element exists
     */
    PositionContentSearcher.prototype.getNearestNonTextInlineElement = function () {
        var _this = this;
        if (!this.nearestNonTextInlineElement) {
            this.traverse(function () { return _this.nearestNonTextInlineElement; });
        }
        return this.nearestNonTextInlineElement;
    };
    /**
     * Continue traversing backward till stop condition is met or begin of block is reached
     */
    PositionContentSearcher.prototype.traverse = function (callback) {
        this.traverser =
            this.traverser || ContentTraverser_1.default.createBlockTraverser(this.rootNode, this.position);
        if (!this.traverser || this.traversingComplete) {
            return;
        }
        var previousInline = this.traverser.getPreviousInlineElement();
        while (!this.traversingComplete) {
            this.inlineBefore = this.inlineBefore || previousInline;
            if (previousInline && previousInline.isTextualInlineElement()) {
                var textContent = previousInline.getTextContent();
                // build the word before position if it is not built yet
                if (!this.word) {
                    // Match on the white space, the portion after space is on the index of 1 of the matched result
                    // (index at 0 is whole match result, index at 1 is the word)
                    var matches = WHITESPACE_REGEX.exec(textContent);
                    if (matches && matches.length == 2) {
                        this.word = matches[1] + this.text;
                    }
                }
                this.text = textContent + this.text;
                this.inlineElements.push(previousInline);
                // Check if stop condition is met
                if (callback && callback(previousInline)) {
                    break;
                }
            }
            else {
                this.nearestNonTextInlineElement = previousInline;
                this.traversingComplete = true;
                if (!this.word) {
                    // if parsing is done, whatever we get so far in this.cachedText should also be in this.cachedWordBeforeCursor
                    this.word = this.text;
                }
                // When a non-textual inline element, or null is seen, we consider parsing complete
                // TODO: we may need to change this if there is a future need to parse beyond text, i.e.
                // we have aaa @someone bbb<position>, and we want to read the text before @someone
                break;
            }
            previousInline = this.traverser.getPreviousInlineElement();
        }
    };
    return PositionContentSearcher;
}());
exports.default = PositionContentSearcher;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/contentTraverser/SelectionBlockScoper.ts":
/*!************************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/contentTraverser/SelectionBlockScoper.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmptyInlineElement_1 = __webpack_require__(/*! ../inlineElements/EmptyInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/EmptyInlineElement.ts");
var getBlockElementAtNode_1 = __webpack_require__(/*! ../blockElements/getBlockElementAtNode */ "./packages/roosterjs-editor-dom/lib/blockElements/getBlockElementAtNode.ts");
var getInlineElementAtNode_1 = __webpack_require__(/*! ../inlineElements/getInlineElementAtNode */ "./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementAtNode.ts");
var NodeBlockElement_1 = __webpack_require__(/*! ../blockElements/NodeBlockElement */ "./packages/roosterjs-editor-dom/lib/blockElements/NodeBlockElement.ts");
var Position_1 = __webpack_require__(/*! ../selection/Position */ "./packages/roosterjs-editor-dom/lib/selection/Position.ts");
var getInlineElementBeforeAfter_1 = __webpack_require__(/*! ../inlineElements/getInlineElementBeforeAfter */ "./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementBeforeAfter.ts");
var getFirstLastInlineElement_1 = __webpack_require__(/*! ../inlineElements/getFirstLastInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/getFirstLastInlineElement.ts");
/**
 * This provides traversing content in a selection start block
 * This is commonly used for those cursor context sensitive plugin,
 * they want to know text being typed at cursor
 * This provides a scope for parsing from cursor position up to begin of the selection block
 */
var SelectionBlockScoper = /** @class */ (function () {
    /**
     * Create a new instance of SelectionBlockScoper class
     * @param rootNode The root node of the whole scope
     * @param position Position of the selection start
     * @param startFrom Where to start, can be Begin, End, SelectionStart
     */
    function SelectionBlockScoper(rootNode, position, startFrom) {
        this.rootNode = rootNode;
        this.startFrom = startFrom;
        position = position instanceof Range ? Position_1.default.getStart(position) : position;
        this.position = position.normalize();
        this.block = getBlockElementAtNode_1.default(this.rootNode, this.position.node);
    }
    /**
     * Get the start block element
     */
    SelectionBlockScoper.prototype.getStartBlockElement = function () {
        return this.block;
    };
    /**
     * Get the start inline element
     * The start inline refers to inline before the selection start
     *  The reason why we choose the one before rather after is, when cursor is at the end of a paragragh,
     * the one after likely will point to inline in next paragragh which may be null if the cursor is at bottom of editor
     */
    SelectionBlockScoper.prototype.getStartInlineElement = function () {
        if (this.block) {
            switch (this.startFrom) {
                case 0 /* Begin */:
                case 1 /* End */:
                    return getFirstLastInlineElementFromBlockElement(this.block, this.startFrom == 0 /* Begin */);
                case 2 /* SelectionStart */:
                    // Get the inline before selection start point, and ensure it falls in the selection block
                    var startInline = getInlineElementBeforeAfter_1.getInlineElementAfter(this.rootNode, this.position);
                    return startInline && this.block.contains(startInline.getContainerNode())
                        ? startInline
                        : new EmptyInlineElement_1.default(this.position, this.block);
            }
        }
        return null;
    };
    /**
     * Check if the given block element is in current scope
     * @param blockElement The block element to check
     */
    SelectionBlockScoper.prototype.isBlockInScope = function (blockElement) {
        return this.block && blockElement ? this.block.equals(blockElement) : false;
    };
    /**
     * Trim the incoming inline element, and return an inline element
     * This just tests and return the inline element if it is in block
     * This is a block scoper, which is not like selection scoper where it may cut an inline element in half
     * A block scoper does not cut an inline in half
     */
    SelectionBlockScoper.prototype.trimInlineElement = function (inlineElement) {
        return this.block && inlineElement && this.block.contains(inlineElement.getContainerNode())
            ? inlineElement
            : null;
    };
    return SelectionBlockScoper;
}());
exports.default = SelectionBlockScoper;
/**
 * Get first/last InlineElement of the given BlockElement
 * @param block The BlockElement to get InlineElement from
 * @param isFirst True to get first InlineElement, false to get last InlineElement
 */
function getFirstLastInlineElementFromBlockElement(block, isFirst) {
    if (block instanceof NodeBlockElement_1.default) {
        var blockNode = block.getStartNode();
        return isFirst ? getFirstLastInlineElement_1.getFirstInlineElement(blockNode) : getFirstLastInlineElement_1.getLastInlineElement(blockNode);
    }
    else {
        return getInlineElementAtNode_1.default(block, isFirst ? block.getStartNode() : block.getEndNode());
    }
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/contentTraverser/SelectionScoper.ts":
/*!*******************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/contentTraverser/SelectionScoper.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getBlockElementAtNode_1 = __webpack_require__(/*! ../blockElements/getBlockElementAtNode */ "./packages/roosterjs-editor-dom/lib/blockElements/getBlockElementAtNode.ts");
var PartialInlineElement_1 = __webpack_require__(/*! ../inlineElements/PartialInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/PartialInlineElement.ts");
var Position_1 = __webpack_require__(/*! ../selection/Position */ "./packages/roosterjs-editor-dom/lib/selection/Position.ts");
var getInlineElementBeforeAfter_1 = __webpack_require__(/*! ../inlineElements/getInlineElementBeforeAfter */ "./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementBeforeAfter.ts");
/**
 * This is selection scoper that provide a start inline as the start of the selection
 * and checks if a block falls in the selection (isBlockInScope)
 * last trimInlineElement to trim any inline element to return a partial that falls in the selection
 */
var SelectionScoper = /** @class */ (function () {
    /**
     * Create a new instance of SelectionScoper class
     * @param rootNode The root node of the content
     * @param range The selection range to scope to
     */
    function SelectionScoper(rootNode, range) {
        this.rootNode = rootNode;
        this.start = Position_1.default.getStart(range).normalize();
        this.end = Position_1.default.getEnd(range).normalize();
    }
    /**
     * Provide a start block as the first block after the cursor
     */
    SelectionScoper.prototype.getStartBlockElement = function () {
        if (!this.startBlock) {
            this.startBlock = getBlockElementAtNode_1.default(this.rootNode, this.start.node);
        }
        return this.startBlock;
    };
    /**
     * Provide a start inline as the first inline after the cursor
     */
    SelectionScoper.prototype.getStartInlineElement = function () {
        if (!this.startInline) {
            this.startInline = this.trimInlineElement(getInlineElementBeforeAfter_1.getInlineElementAfter(this.rootNode, this.start));
        }
        return this.startInline;
    };
    /**
     * Checks if a block completely falls in the selection
     * @param block The BlockElement to check
     */
    SelectionScoper.prototype.isBlockInScope = function (block) {
        if (!block) {
            return false;
        }
        var inScope = false;
        var selStartBlock = this.getStartBlockElement();
        if (this.start.equalTo(this.end)) {
            inScope = selStartBlock && selStartBlock.equals(block);
        }
        else {
            var selEndBlock = getBlockElementAtNode_1.default(this.rootNode, this.end.node);
            // There are three cases that are considered as "block in scope"
            // 1) The start of selection falls on the block
            // 2) The end of selection falls on the block
            // 3) the block falls in-between selection start and end
            inScope =
                selStartBlock &&
                    selEndBlock &&
                    (block.equals(selStartBlock) ||
                        block.equals(selEndBlock) ||
                        (block.isAfter(selStartBlock) && selEndBlock.isAfter(block)));
        }
        return inScope;
    };
    /**
     * Trim an incoming inline. If it falls completely outside selection, return null
     * otherwise return a partial that represents the portion that falls in the selection
     * @param inline The InlineElement to check
     */
    SelectionScoper.prototype.trimInlineElement = function (inline) {
        if (!inline || this.start.equalTo(this.end)) {
            return null;
        }
        // Temp code. Will be changed to using InlineElement.getStart/EndPosition() soon
        var start = inline.getStartPosition();
        var end = inline.getEndPosition();
        if (start.isAfter(this.end) || this.start.isAfter(end)) {
            return null;
        }
        var startPartial = false;
        var endPartial = false;
        if (this.start.isAfter(start)) {
            start = this.start;
            startPartial = true;
        }
        if (end.isAfter(this.end)) {
            end = this.end;
            endPartial = true;
        }
        return start.isAfter(end) || start.equalTo(end)
            ? null
            : startPartial || endPartial
                ? new PartialInlineElement_1.default(inline, startPartial && start, endPartial && end)
                : inline;
    };
    return SelectionScoper;
}());
exports.default = SelectionScoper;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/index.ts":
/*!****************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NodeBlockElement_1 = __webpack_require__(/*! ./blockElements/NodeBlockElement */ "./packages/roosterjs-editor-dom/lib/blockElements/NodeBlockElement.ts");
exports.NodeBlockElement = NodeBlockElement_1.default;
var getBlockElementAtNode_1 = __webpack_require__(/*! ./blockElements/getBlockElementAtNode */ "./packages/roosterjs-editor-dom/lib/blockElements/getBlockElementAtNode.ts");
exports.getBlockElementAtNode = getBlockElementAtNode_1.default;
var getFirstLastBlockElement_1 = __webpack_require__(/*! ./blockElements/getFirstLastBlockElement */ "./packages/roosterjs-editor-dom/lib/blockElements/getFirstLastBlockElement.ts");
exports.getFirstLastBlockElement = getFirstLastBlockElement_1.default;
var StartEndBlockElement_1 = __webpack_require__(/*! ./blockElements/StartEndBlockElement */ "./packages/roosterjs-editor-dom/lib/blockElements/StartEndBlockElement.ts");
exports.StartEndBlockElement = StartEndBlockElement_1.default;
var ContentTraverser_1 = __webpack_require__(/*! ./contentTraverser/ContentTraverser */ "./packages/roosterjs-editor-dom/lib/contentTraverser/ContentTraverser.ts");
exports.ContentTraverser = ContentTraverser_1.default;
var PositionContentSearcher_1 = __webpack_require__(/*! ./contentTraverser/PositionContentSearcher */ "./packages/roosterjs-editor-dom/lib/contentTraverser/PositionContentSearcher.ts");
exports.PositionContentSearcher = PositionContentSearcher_1.default;
var getInlineElementAtNode_1 = __webpack_require__(/*! ./inlineElements/getInlineElementAtNode */ "./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementAtNode.ts");
exports.getInlineElementAtNode = getInlineElementAtNode_1.default;
var ImageInlineElement_1 = __webpack_require__(/*! ./inlineElements/ImageInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/ImageInlineElement.ts");
exports.ImageInlineElement = ImageInlineElement_1.default;
var LinkInlineElement_1 = __webpack_require__(/*! ./inlineElements/LinkInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/LinkInlineElement.ts");
exports.LinkInlineElement = LinkInlineElement_1.default;
var NodeInlineElement_1 = __webpack_require__(/*! ./inlineElements/NodeInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/NodeInlineElement.ts");
exports.NodeInlineElement = NodeInlineElement_1.default;
var PartialInlineElement_1 = __webpack_require__(/*! ./inlineElements/PartialInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/PartialInlineElement.ts");
exports.PartialInlineElement = PartialInlineElement_1.default;
var applyTextStyle_1 = __webpack_require__(/*! ./utils/applyTextStyle */ "./packages/roosterjs-editor-dom/lib/utils/applyTextStyle.ts");
exports.applyTextStyle = applyTextStyle_1.default;
var Browser_1 = __webpack_require__(/*! ./utils/Browser */ "./packages/roosterjs-editor-dom/lib/utils/Browser.ts");
exports.Browser = Browser_1.default;
exports.getBrowserInfo = Browser_1.getBrowserInfo;
var applyFormat_1 = __webpack_require__(/*! ./utils/applyFormat */ "./packages/roosterjs-editor-dom/lib/utils/applyFormat.ts");
exports.applyFormat = applyFormat_1.default;
var changeElementTag_1 = __webpack_require__(/*! ./utils/changeElementTag */ "./packages/roosterjs-editor-dom/lib/utils/changeElementTag.ts");
exports.changeElementTag = changeElementTag_1.default;
var collapseNodes_1 = __webpack_require__(/*! ./utils/collapseNodes */ "./packages/roosterjs-editor-dom/lib/utils/collapseNodes.ts");
exports.collapseNodes = collapseNodes_1.default;
var contains_1 = __webpack_require__(/*! ./utils/contains */ "./packages/roosterjs-editor-dom/lib/utils/contains.ts");
exports.contains = contains_1.default;
var extractClipboardEvent_1 = __webpack_require__(/*! ./utils/extractClipboardEvent */ "./packages/roosterjs-editor-dom/lib/utils/extractClipboardEvent.ts");
exports.extractClipboardEvent = extractClipboardEvent_1.default;
var findClosestElementAncestor_1 = __webpack_require__(/*! ./utils/findClosestElementAncestor */ "./packages/roosterjs-editor-dom/lib/utils/findClosestElementAncestor.ts");
exports.findClosestElementAncestor = findClosestElementAncestor_1.default;
var fromHtml_1 = __webpack_require__(/*! ./utils/fromHtml */ "./packages/roosterjs-editor-dom/lib/utils/fromHtml.ts");
exports.fromHtml = fromHtml_1.default;
var getComputedStyles_1 = __webpack_require__(/*! ./utils/getComputedStyles */ "./packages/roosterjs-editor-dom/lib/utils/getComputedStyles.ts");
exports.getComputedStyles = getComputedStyles_1.default;
exports.getComputedStyle = getComputedStyles_1.getComputedStyle;
var getTagOfNode_1 = __webpack_require__(/*! ./utils/getTagOfNode */ "./packages/roosterjs-editor-dom/lib/utils/getTagOfNode.ts");
exports.getTagOfNode = getTagOfNode_1.default;
var isBlockElement_1 = __webpack_require__(/*! ./utils/isBlockElement */ "./packages/roosterjs-editor-dom/lib/utils/isBlockElement.ts");
exports.isBlockElement = isBlockElement_1.default;
var isNodeEmpty_1 = __webpack_require__(/*! ./utils/isNodeEmpty */ "./packages/roosterjs-editor-dom/lib/utils/isNodeEmpty.ts");
exports.isNodeEmpty = isNodeEmpty_1.default;
var isVoidHtmlElement_1 = __webpack_require__(/*! ./utils/isVoidHtmlElement */ "./packages/roosterjs-editor-dom/lib/utils/isVoidHtmlElement.ts");
exports.isVoidHtmlElement = isVoidHtmlElement_1.default;
var matchLink_1 = __webpack_require__(/*! ./utils/matchLink */ "./packages/roosterjs-editor-dom/lib/utils/matchLink.ts");
exports.matchLink = matchLink_1.default;
var queryElements_1 = __webpack_require__(/*! ./utils/queryElements */ "./packages/roosterjs-editor-dom/lib/utils/queryElements.ts");
exports.queryElements = queryElements_1.default;
var splitParentNode_1 = __webpack_require__(/*! ./utils/splitParentNode */ "./packages/roosterjs-editor-dom/lib/utils/splitParentNode.ts");
exports.splitParentNode = splitParentNode_1.default;
exports.splitBalancedNodeRange = splitParentNode_1.splitBalancedNodeRange;
var unwrap_1 = __webpack_require__(/*! ./utils/unwrap */ "./packages/roosterjs-editor-dom/lib/utils/unwrap.ts");
exports.unwrap = unwrap_1.default;
var wrap_1 = __webpack_require__(/*! ./utils/wrap */ "./packages/roosterjs-editor-dom/lib/utils/wrap.ts");
exports.wrap = wrap_1.default;
var getLeafSibling_1 = __webpack_require__(/*! ./utils/getLeafSibling */ "./packages/roosterjs-editor-dom/lib/utils/getLeafSibling.ts");
exports.getNextLeafSibling = getLeafSibling_1.getNextLeafSibling;
exports.getPreviousLeafSibling = getLeafSibling_1.getPreviousLeafSibling;
var getLeafNode_1 = __webpack_require__(/*! ./utils/getLeafNode */ "./packages/roosterjs-editor-dom/lib/utils/getLeafNode.ts");
exports.getFirstLeafNode = getLeafNode_1.getFirstLeafNode;
exports.getLastLeafNode = getLeafNode_1.getLastLeafNode;
var VTable_1 = __webpack_require__(/*! ./table/VTable */ "./packages/roosterjs-editor-dom/lib/table/VTable.ts");
exports.VTable = VTable_1.default;
var Position_1 = __webpack_require__(/*! ./selection/Position */ "./packages/roosterjs-editor-dom/lib/selection/Position.ts");
exports.Position = Position_1.default;
var createRange_1 = __webpack_require__(/*! ./selection/createRange */ "./packages/roosterjs-editor-dom/lib/selection/createRange.ts");
exports.createRange = createRange_1.default;
var getPositionRect_1 = __webpack_require__(/*! ./selection/getPositionRect */ "./packages/roosterjs-editor-dom/lib/selection/getPositionRect.ts");
exports.getPositionRect = getPositionRect_1.default;
var isPositionAtBeginningOf_1 = __webpack_require__(/*! ./selection/isPositionAtBeginningOf */ "./packages/roosterjs-editor-dom/lib/selection/isPositionAtBeginningOf.ts");
exports.isPositionAtBeginningOf = isPositionAtBeginningOf_1.default;
var getSelectionPath_1 = __webpack_require__(/*! ./selection/getSelectionPath */ "./packages/roosterjs-editor-dom/lib/selection/getSelectionPath.ts");
exports.getSelectionPath = getSelectionPath_1.default;
exports.getRangeFromSelectionPath = getSelectionPath_1.getRangeFromSelectionPath;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/inlineElements/EmptyInlineElement.ts":
/*!********************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/inlineElements/EmptyInlineElement.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents an empty InlineElement.
 * This is used for ContentTraverser internally only.
 * An empty InlineElement means current position is at the end of a tag so nothing is included inside this element
 */
var EmptyInlineElement = /** @class */ (function () {
    function EmptyInlineElement(position, parentBlock) {
        this.position = position;
        this.parentBlock = parentBlock;
    }
    /**
     * Get the text content of this inline element
     */
    EmptyInlineElement.prototype.getTextContent = function () {
        return '';
    };
    /**
     * Get the container node of this inline element
     */
    EmptyInlineElement.prototype.getContainerNode = function () {
        return this.position.node;
    };
    /**
     * Get the parent block element of this inline element
     */
    EmptyInlineElement.prototype.getParentBlock = function () {
        return this.parentBlock;
    };
    /**
     * Get the start position of this inline element
     */
    EmptyInlineElement.prototype.getStartPosition = function () {
        return this.position;
    };
    /**
     * Get the end position of this inline element
     */
    EmptyInlineElement.prototype.getEndPosition = function () {
        return this.position;
    };
    /**
     * Checks if the given inline element is after this inline element
     */
    EmptyInlineElement.prototype.isAfter = function (inlineElement) {
        return inlineElement && this.position.isAfter(inlineElement.getEndPosition());
    };
    /**
     * Checks if this inline element is a textual inline element
     */
    EmptyInlineElement.prototype.isTextualInlineElement = function () {
        return false;
    };
    /**
     * Checks if the given editor position is contained in this inline element
     */
    EmptyInlineElement.prototype.contains = function (position) {
        return false;
    };
    /**
     * Apply inline style to a region of an inline element.
     */
    EmptyInlineElement.prototype.applyStyle = function (styler) { };
    return EmptyInlineElement;
}());
exports.default = EmptyInlineElement;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/inlineElements/ImageInlineElement.ts":
/*!********************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/inlineElements/ImageInlineElement.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NodeInlineElement_1 = __webpack_require__(/*! ./NodeInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/NodeInlineElement.ts");
/**
 * This is an inline element representing an Html image
 */
var ImageInlineElement = /** @class */ (function (_super) {
    __extends(ImageInlineElement, _super);
    function ImageInlineElement(containerNode, parentBlock) {
        return _super.call(this, containerNode, parentBlock) || this;
    }
    return ImageInlineElement;
}(NodeInlineElement_1.default));
exports.default = ImageInlineElement;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/inlineElements/LinkInlineElement.ts":
/*!*******************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/inlineElements/LinkInlineElement.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var NodeInlineElement_1 = __webpack_require__(/*! ./NodeInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/NodeInlineElement.ts");
/**
 * This is inline element presenting an html hyperlink
 */
var LinkInlineElement = /** @class */ (function (_super) {
    __extends(LinkInlineElement, _super);
    function LinkInlineElement(containerNode, parentBlock) {
        return _super.call(this, containerNode, parentBlock) || this;
    }
    return LinkInlineElement;
}(NodeInlineElement_1.default));
exports.default = LinkInlineElement;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/inlineElements/NodeInlineElement.ts":
/*!*******************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/inlineElements/NodeInlineElement.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var applyTextStyle_1 = __webpack_require__(/*! ../utils/applyTextStyle */ "./packages/roosterjs-editor-dom/lib/utils/applyTextStyle.ts");
var isNodeAfter_1 = __webpack_require__(/*! ../utils/isNodeAfter */ "./packages/roosterjs-editor-dom/lib/utils/isNodeAfter.ts");
var Position_1 = __webpack_require__(/*! ../selection/Position */ "./packages/roosterjs-editor-dom/lib/selection/Position.ts");
/**
 * This presents an inline element that can be reprented by a single html node.
 * This serves as base for most inline element as it contains most implentation
 * of all operations that can happen on an inline element. Other sub inline elements mostly
 * just identify themself for a certain type
 */
var NodeInlineElement = /** @class */ (function () {
    function NodeInlineElement(containerNode, parentBlock) {
        this.containerNode = containerNode;
        this.parentBlock = parentBlock;
    }
    /**
     * The text content for this inline element
     */
    NodeInlineElement.prototype.getTextContent = function () {
        // nodeValue is better way to retrieve content for a text. Others, just use textContent
        return this.containerNode.nodeType == 3 /* Text */
            ? this.containerNode.nodeValue
            : this.containerNode.textContent;
    };
    /**
     * Get the container node
     */
    NodeInlineElement.prototype.getContainerNode = function () {
        return this.containerNode;
    };
    // Get the parent block
    NodeInlineElement.prototype.getParentBlock = function () {
        return this.parentBlock;
    };
    /**
     * Get the start position of the inline element
     */
    NodeInlineElement.prototype.getStartPosition = function () {
        // For a position, we always want it to point to a leaf node
        // We should try to go get the lowest first child node from the container
        return new Position_1.default(this.containerNode, 0).normalize();
    };
    /**
     * Get the end position of the inline element
     */
    NodeInlineElement.prototype.getEndPosition = function () {
        // For a position, we always want it to point to a leaf node
        // We should try to go get the lowest last child node from the container
        return new Position_1.default(this.containerNode, -1 /* End */).normalize();
    };
    /**
     * Checks if this inline element is a textual inline element
     */
    NodeInlineElement.prototype.isTextualInlineElement = function () {
        return this.containerNode && this.containerNode.nodeType == 3 /* Text */;
    };
    /**
     * Checks if an inline element is after the current inline element
     */
    NodeInlineElement.prototype.isAfter = function (inlineElement) {
        return inlineElement && isNodeAfter_1.default(this.containerNode, inlineElement.getContainerNode());
    };
    /**
     * Checks if the given position is contained in the inline element
     */
    NodeInlineElement.prototype.contains = function (pos) {
        var start = this.getStartPosition();
        var end = this.getEndPosition();
        return pos && pos.isAfter(start) && end.isAfter(pos);
    };
    /**
     * Apply inline style to an inline element
     */
    NodeInlineElement.prototype.applyStyle = function (styler) {
        applyTextStyle_1.default(this.containerNode, styler);
    };
    return NodeInlineElement;
}());
exports.default = NodeInlineElement;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/inlineElements/PartialInlineElement.ts":
/*!**********************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/inlineElements/PartialInlineElement.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var applyTextStyle_1 = __webpack_require__(/*! ../utils/applyTextStyle */ "./packages/roosterjs-editor-dom/lib/utils/applyTextStyle.ts");
var createRange_1 = __webpack_require__(/*! ../selection/createRange */ "./packages/roosterjs-editor-dom/lib/selection/createRange.ts");
var Position_1 = __webpack_require__(/*! ../selection/Position */ "./packages/roosterjs-editor-dom/lib/selection/Position.ts");
var getLeafSibling_1 = __webpack_require__(/*! ../utils/getLeafSibling */ "./packages/roosterjs-editor-dom/lib/utils/getLeafSibling.ts");
/**
 * This is a special version of inline element that identifies a section of an inline element
 * We often have the need to cut an inline element in half and perform some operation only on half of an inline element
 * i.e. users select only some text of a text node and apply format, in that case, format has to happen on partial of an inline element
 * PartialInlineElement is implemented in a way that decorate another full inline element with its own override on methods like isAfter
 * It also offers some special methods that others don't have, i.e. nextInlineElement etc.
 */
var PartialInlineElement = /** @class */ (function () {
    function PartialInlineElement(inlineElement, start, end) {
        this.inlineElement = inlineElement;
        this.start = start;
        this.end = end;
    }
    /**
     * Get the full inline element that this partial inline decorates
     */
    PartialInlineElement.prototype.getDecoratedInline = function () {
        return this.inlineElement;
    };
    /**
     * Gets the container node
     */
    PartialInlineElement.prototype.getContainerNode = function () {
        return this.inlineElement.getContainerNode();
    };
    /**
     * Gets the parent block
     */
    PartialInlineElement.prototype.getParentBlock = function () {
        return this.inlineElement.getParentBlock();
    };
    /**
     * Gets the text content
     */
    PartialInlineElement.prototype.getTextContent = function () {
        var range = createRange_1.default(this.getStartPosition(), this.getEndPosition());
        return range.toString();
    };
    /**
     * Get start position of this inline element.
     */
    PartialInlineElement.prototype.getStartPosition = function () {
        return this.start || this.inlineElement.getStartPosition();
    };
    /**
     * Get end position of this inline element.
     */
    PartialInlineElement.prototype.getEndPosition = function () {
        return this.end || this.inlineElement.getEndPosition();
    };
    Object.defineProperty(PartialInlineElement.prototype, "nextInlineElement", {
        /**
         * Get next partial inline element if it is not at the end boundary yet
         */
        get: function () {
            return this.end && new PartialInlineElement(this.inlineElement, this.end, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PartialInlineElement.prototype, "previousInlineElement", {
        /**
         * Get previous partial inline element if it is not at the begin boundary yet
         */
        get: function () {
            return this.start && new PartialInlineElement(this.inlineElement, null, this.start);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Checks if it contains a position
     */
    PartialInlineElement.prototype.contains = function (pos) {
        return pos && pos.isAfter(this.getStartPosition()) && this.getEndPosition().isAfter(pos);
    };
    /**
     * Checks if this inline element is a textual inline element
     */
    PartialInlineElement.prototype.isTextualInlineElement = function () {
        return this.inlineElement && this.inlineElement.isTextualInlineElement();
    };
    /**
     * Check if this inline element is after the other inline element
     */
    PartialInlineElement.prototype.isAfter = function (inlineElement) {
        var thisStart = this.getStartPosition();
        var otherEnd = inlineElement && inlineElement.getEndPosition();
        return otherEnd && (thisStart.isAfter(otherEnd) || thisStart.equalTo(otherEnd));
    };
    /**
     * apply style
     */
    PartialInlineElement.prototype.applyStyle = function (styler) {
        var from = this.getStartPosition().normalize();
        var to = this.getEndPosition().normalize();
        var container = this.getContainerNode();
        if (from.isAtEnd) {
            var nextNode = getLeafSibling_1.getNextLeafSibling(container, from.node);
            from = nextNode ? new Position_1.default(nextNode, 0 /* Begin */) : null;
        }
        if (to.offset == 0) {
            var previousNode = getLeafSibling_1.getPreviousLeafSibling(container, to.node);
            to = previousNode ? new Position_1.default(previousNode, -1 /* End */) : null;
        }
        applyTextStyle_1.default(container, styler, from, to);
    };
    return PartialInlineElement;
}());
exports.default = PartialInlineElement;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/inlineElements/getFirstLastInlineElement.ts":
/*!***************************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/inlineElements/getFirstLastInlineElement.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getInlineElementAtNode_1 = __webpack_require__(/*! ./getInlineElementAtNode */ "./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementAtNode.ts");
var getLeafNode_1 = __webpack_require__(/*! ../utils/getLeafNode */ "./packages/roosterjs-editor-dom/lib/utils/getLeafNode.ts");
/**
 * Get the first inline element inside the given node
 */
function getFirstInlineElement(rootNode) {
    // getFirstLeafNode can return null for empty container
    // do check null before passing on to get inline from the node
    var node = getLeafNode_1.getFirstLeafNode(rootNode);
    return node ? getInlineElementAtNode_1.default(rootNode, node) : null;
}
exports.getFirstInlineElement = getFirstInlineElement;
/**
 * Get the last inline element inside the given node
 */
function getLastInlineElement(rootNode) {
    // getLastLeafNode can return null for empty container
    // do check null before passing on to get inline from the node
    var node = getLeafNode_1.getLastLeafNode(rootNode);
    return node ? getInlineElementAtNode_1.default(rootNode, node) : null;
}
exports.getLastInlineElement = getLastInlineElement;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementAtNode.ts":
/*!************************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementAtNode.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getBlockElementAtNode_1 = __webpack_require__(/*! ../blockElements/getBlockElementAtNode */ "./packages/roosterjs-editor-dom/lib/blockElements/getBlockElementAtNode.ts");
var getTagOfNode_1 = __webpack_require__(/*! ../utils/getTagOfNode */ "./packages/roosterjs-editor-dom/lib/utils/getTagOfNode.ts");
var ImageInlineElement_1 = __webpack_require__(/*! ./ImageInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/ImageInlineElement.ts");
var LinkInlineElement_1 = __webpack_require__(/*! ./LinkInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/LinkInlineElement.ts");
var NodeInlineElement_1 = __webpack_require__(/*! ./NodeInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/NodeInlineElement.ts");
function getInlineElementAtNode(parent, node) {
    // An inline element has to be in a block element, get the block first and then resolve through the factory
    var parentBlock = parent instanceof Node ? getBlockElementAtNode_1.default(parent, node) : parent;
    return node && parentBlock && resolveInlineElement(node, parentBlock);
}
exports.default = getInlineElementAtNode;
/**
 * Resolve an inline element by a leaf node
 * @param node The node to resolve from
 * @param parentBlock The parent block element
 */
function resolveInlineElement(node, parentBlock) {
    var nodeChain = [node];
    for (var parent_1 = node.parentNode; parent_1 && parentBlock.contains(parent_1); parent_1 = parent_1.parentNode) {
        nodeChain.push(parent_1);
    }
    var inlineElement;
    for (var i = nodeChain.length - 1; i >= 0 && !inlineElement; i--) {
        var currentNode = nodeChain[i];
        var tag = getTagOfNode_1.default(currentNode);
        if (tag == 'A') {
            inlineElement = new LinkInlineElement_1.default(currentNode, parentBlock);
        }
        else if (tag == 'IMG') {
            inlineElement = new ImageInlineElement_1.default(currentNode, parentBlock);
        }
    }
    return inlineElement || new NodeInlineElement_1.default(node, parentBlock);
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementBeforeAfter.ts":
/*!*****************************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementBeforeAfter.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getInlineElementAtNode_1 = __webpack_require__(/*! ./getInlineElementAtNode */ "./packages/roosterjs-editor-dom/lib/inlineElements/getInlineElementAtNode.ts");
var PartialInlineElement_1 = __webpack_require__(/*! ./PartialInlineElement */ "./packages/roosterjs-editor-dom/lib/inlineElements/PartialInlineElement.ts");
var shouldSkipNode_1 = __webpack_require__(/*! ../utils/shouldSkipNode */ "./packages/roosterjs-editor-dom/lib/utils/shouldSkipNode.ts");
var getLeafSibling_1 = __webpack_require__(/*! ../utils/getLeafSibling */ "./packages/roosterjs-editor-dom/lib/utils/getLeafSibling.ts");
/**
 * Get inline element before a position
 * This is mostly used when we want to get the inline element before selection/cursor
 * There is a possible that the cursor is in middle of an inline element (i.e. mid of a text node)
 * in this case, we only want to return what is before cursor (a partial of an inline) to indicate
 * that we're in middle.
 * @param root Root node of current scope, use for create InlineElement
 * @param position The position to get InlineElement before
 */
function getInlineElementBefore(root, position) {
    return getInlineElementBeforeAfter(root, position, false /*isAfter*/);
}
exports.getInlineElementBefore = getInlineElementBefore;
/**
 * Get inline element after a position
 * This is mostly used when we want to get the inline element after selection/cursor
 * There is a possible that the cursor is in middle of an inline element (i.e. mid of a text node)
 * in this case, we only want to return what is before cursor (a partial of an inline) to indicate
 * that we're in middle.
 * @param root Root node of current scope, use for create InlineElement
 * @param position The position to get InlineElement after
 */
function getInlineElementAfter(root, position) {
    return getInlineElementBeforeAfter(root, position, true /*isAfter*/);
}
exports.getInlineElementAfter = getInlineElementAfter;
function getInlineElementBeforeAfter(root, position, isAfter) {
    if (!root || !position || !position.node) {
        return null;
    }
    position = position.normalize();
    var node = position.node, offset = position.offset, isAtEnd = position.isAtEnd;
    var isPartial = false;
    if ((!isAfter && offset == 0 && !isAtEnd) || (isAfter && isAtEnd)) {
        node = getLeafSibling_1.getLeafSibling(root, node, isAfter);
    }
    else if (node.nodeType == 3 /* Text */ &&
        ((!isAfter && !isAtEnd) || (isAfter && offset > 0))) {
        isPartial = true;
    }
    if (node && shouldSkipNode_1.default(node)) {
        node = getLeafSibling_1.getLeafSibling(root, node, isAfter);
    }
    var inlineElement = getInlineElementAtNode_1.default(root, node);
    if (inlineElement && (isPartial || inlineElement.contains(position))) {
        inlineElement = isAfter
            ? new PartialInlineElement_1.default(inlineElement, position, null)
            : new PartialInlineElement_1.default(inlineElement, null, position);
    }
    return inlineElement;
}
exports.getInlineElementBeforeAfter = getInlineElementBeforeAfter;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/selection/Position.ts":
/*!*****************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/selection/Position.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var findClosestElementAncestor_1 = __webpack_require__(/*! ../utils/findClosestElementAncestor */ "./packages/roosterjs-editor-dom/lib/utils/findClosestElementAncestor.ts");
var isNodeAfter_1 = __webpack_require__(/*! ../utils/isNodeAfter */ "./packages/roosterjs-editor-dom/lib/utils/isNodeAfter.ts");
/**
 * Represent a position in DOM tree by the node and its offset index
 */
var Position = /** @class */ (function () {
    function Position(nodeOrPosition, offsetOrPosType) {
        if (nodeOrPosition.node) {
            this.node = nodeOrPosition.node;
            offsetOrPosType = nodeOrPosition.offset;
        }
        else {
            this.node = nodeOrPosition;
        }
        switch (offsetOrPosType) {
            case -2 /* Before */:
                this.offset = getIndexOfNode(this.node);
                this.node = this.node.parentNode;
                this.isAtEnd = false;
                break;
            case -3 /* After */:
                this.offset = getIndexOfNode(this.node) + 1;
                this.isAtEnd = !this.node.nextSibling;
                this.node = this.node.parentNode;
                break;
            case -1 /* End */:
                this.offset = getEndOffset(this.node);
                this.isAtEnd = true;
                break;
            default:
                var endOffset = getEndOffset(this.node);
                this.offset = Math.max(0, Math.min(offsetOrPosType, endOffset));
                this.isAtEnd = offsetOrPosType > 0 && offsetOrPosType >= endOffset;
                break;
        }
        this.element = findClosestElementAncestor_1.default(this.node);
    }
    /**
     * Normalize this position to the leaf node, return the normalize result.
     * If current position is already using leaf node, return this position object itself
     */
    Position.prototype.normalize = function () {
        if (this.node.nodeType == 3 /* Text */ || !this.node.firstChild) {
            return this;
        }
        var node = this.node;
        var newOffset = this.isAtEnd
            ? -1 /* End */
            : this.offset;
        while (node.nodeType == 1 /* Element */ && node.firstChild) {
            node =
                newOffset == 0 /* Begin */
                    ? node.firstChild
                    : newOffset == -1 /* End */
                        ? node.lastChild
                        : node.childNodes[newOffset];
            newOffset = this.isAtEnd ? -1 /* End */ : 0 /* Begin */;
        }
        return new Position(node, newOffset);
    };
    /**
     * Check if this position is equal to the given position
     * @param position The position to check
     */
    Position.prototype.equalTo = function (position) {
        return (position &&
            (this == position ||
                (this.node == position.node &&
                    this.offset == position.offset &&
                    this.isAtEnd == position.isAtEnd)));
    };
    /**
     * Checks if this position is after the given position
     */
    Position.prototype.isAfter = function (position) {
        return this.node == position.node
            ? (this.isAtEnd && !position.isAtEnd) || this.offset > position.offset
            : isNodeAfter_1.default(this.node, position.node);
    };
    /**
     * Move this position with offset, returns a new position with a valid offset in the same node
     * @param offset Offset to move with
     */
    Position.prototype.move = function (offset) {
        return new Position(this.node, Math.max(this.offset + offset, 0));
    };
    /**
     * Get start position of the given Range
     * @param range The range to get position from
     */
    Position.getStart = function (range) {
        return new Position(range.startContainer, range.startOffset);
    };
    /**
     * Get end position of the given Range
     * @param range The range to get position from
     */
    Position.getEnd = function (range) {
        return new Position(range.endContainer, range.endOffset);
    };
    return Position;
}());
exports.default = Position;
function getIndexOfNode(node) {
    var i = 0;
    while ((node = node.previousSibling)) {
        i++;
    }
    return i;
}
function getEndOffset(node) {
    if (node.nodeType == 3 /* Text */) {
        return node.nodeValue.length;
    }
    else if (node.nodeType == 1 /* Element */) {
        return node.childNodes.length;
    }
    else {
        return 1;
    }
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/selection/createRange.ts":
/*!********************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/selection/createRange.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isVoidHtmlElement_1 = __webpack_require__(/*! ../utils/isVoidHtmlElement */ "./packages/roosterjs-editor-dom/lib/utils/isVoidHtmlElement.ts");
var Position_1 = __webpack_require__(/*! ./Position */ "./packages/roosterjs-editor-dom/lib/selection/Position.ts");
function createRange(start, end) {
    if (!start) {
        return null;
    }
    else if (start instanceof Node) {
        end = new Position_1.default(end || start, -3 /* After */);
        start = new Position_1.default(start, -2 /* Before */);
    }
    else {
        end = end || start;
    }
    var range = start.node.ownerDocument.createRange();
    start = getFocusablePosition(start);
    end = getFocusablePosition(end);
    range.setStart(start.node, start.offset);
    range.setEnd(end.node, end.offset);
    return range;
}
exports.default = createRange;
/**
 * Convert to focusable position
 * If current node is a void element, we need to move up one level to put cursor outside void element
 */
function getFocusablePosition(position) {
    return position.node.nodeType == 1 /* Element */ && isVoidHtmlElement_1.default(position.node)
        ? new Position_1.default(position.node, position.isAtEnd ? -3 /* After */ : -2 /* Before */)
        : position;
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/selection/getPositionRect.ts":
/*!************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/selection/getPositionRect.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createRange_1 = __webpack_require__(/*! ./createRange */ "./packages/roosterjs-editor-dom/lib/selection/createRange.ts");
/**
 * Get bounding rect of this position
 * @param position The positioin to get rect from
 */
function getPositionRect(position) {
    if (!position) {
        return null;
    }
    var range = createRange_1.default(position);
    // 1) try to get rect using range.getBoundingClientRect()
    var rect = range.getBoundingClientRect && normalizeRect(range.getBoundingClientRect());
    if (rect) {
        return rect;
    }
    // 2) try to get rect using range.getClientRects
    position = position.normalize();
    var rects = range.getClientRects && range.getClientRects();
    rect = rects && rects.length == 1 && normalizeRect(rects[0]);
    if (rect) {
        return rect;
    }
    // 3) if node is text node, try inserting a SPAN and get the rect of SPAN for others
    if (position.node.nodeType == 3 /* Text */) {
        var span = document.createElement('SPAN');
        span.innerHTML = '\u200b';
        range = createRange_1.default(position);
        range.insertNode(span);
        rect = span.getBoundingClientRect && normalizeRect(span.getBoundingClientRect());
        span.parentNode.removeChild(span);
        if (rect) {
            return rect;
        }
    }
    // 4) try getBoundingClientRect on element
    var element = position.element;
    if (element && element.getBoundingClientRect) {
        rect = normalizeRect(element.getBoundingClientRect());
        if (rect) {
            return rect;
        }
    }
    return null;
}
exports.default = getPositionRect;
function normalizeRect(clientRect) {
    // A ClientRect of all 0 is possible. i.e. chrome returns a ClientRect of 0 when the cursor is on an empty p
    // We validate that and only return a rect when the passed in ClientRect is valid
    var _a = clientRect || {}, left = _a.left, right = _a.right, top = _a.top, bottom = _a.bottom;
    return left + right + top + bottom > 0
        ? {
            left: Math.round(left),
            right: Math.round(right),
            top: Math.round(top),
            bottom: Math.round(bottom),
        }
        : null;
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/selection/getSelectionPath.ts":
/*!*************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/selection/getSelectionPath.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contains_1 = __webpack_require__(/*! ../utils/contains */ "./packages/roosterjs-editor-dom/lib/utils/contains.ts");
var createRange_1 = __webpack_require__(/*! ./createRange */ "./packages/roosterjs-editor-dom/lib/selection/createRange.ts");
var Position_1 = __webpack_require__(/*! ./Position */ "./packages/roosterjs-editor-dom/lib/selection/Position.ts");
/**
 * Get path of the given selection range related to the given rootNode
 * @param rootNode The root node where the path start from
 * @param range The range of selection
 */
function getSelectionPath(rootNode, range) {
    if (!range) {
        return null;
    }
    var selectionPath = {
        start: getPositionPath(Position_1.default.getStart(range), rootNode),
        end: getPositionPath(Position_1.default.getEnd(range), rootNode),
    };
    return selectionPath;
}
exports.default = getSelectionPath;
/**
 * Get range from the given selection path
 * @param rootNode Root node of the selection path
 * @param path The selection path which contains start and end position path
 */
function getRangeFromSelectionPath(rootNode, path) {
    var start = getPositionFromPath(rootNode, path.start);
    var end = getPositionFromPath(rootNode, path.end);
    return createRange_1.default(start, end);
}
exports.getRangeFromSelectionPath = getRangeFromSelectionPath;
function getPositionFromPath(node, path) {
    if (!node || !path) {
        return null;
    }
    // Iterate with a for loop to avoid mutating the passed in element path stack
    // or needing to copy it.
    var offset;
    for (var i = 0; i < path.length; i++) {
        offset = path[i];
        if (i < path.length - 1 &&
            node &&
            node.nodeType == 1 /* Element */ &&
            node.childNodes.length > offset) {
            node = node.childNodes[offset];
        }
        else {
            break;
        }
    }
    return new Position_1.default(node, offset);
}
/**
 * Get the path of the node relative to rootNode.
 * The path of the node is an array of integer indecies into the childNodes of the given node.
 *
 * The node path will be what the node path will be on a _normalized_ dom
 * (e.g. empty text nodes will be ignored and adjacent text nodes will be concatenated)
 *
 * @param rootNode the node the path will be relative to
 * @param position the position to get indexes from. Follows the same semantics
 * as selectionRange (if node is of type Text, it is an offset into the text of that node.
 * If node is of type Element, it is the index of a child in that Element node.)
 */
function getPositionPath(position, rootNode) {
    if (!position || !rootNode) {
        return [];
    }
    var node = position.node, offset = position.offset;
    var result = [];
    var parent;
    if (!contains_1.default(rootNode, node, true)) {
        return [];
    }
    if (node.nodeType == 3 /* Text */) {
        parent = node.parentNode;
        while (node.previousSibling && node.previousSibling.nodeType == 3 /* Text */) {
            offset += node.previousSibling.nodeValue.length;
            node = node.previousSibling;
        }
        result.unshift(offset);
    }
    else {
        parent = node;
        node = node.childNodes[offset];
    }
    do {
        offset = 0;
        var isPreviousText = false;
        for (var c = parent.firstChild; c && c != node; c = c.nextSibling) {
            if (c.nodeType == 3 /* Text */) {
                if (c.nodeValue.length == 0 || isPreviousText) {
                    continue;
                }
                isPreviousText = true;
            }
            else {
                isPreviousText = false;
            }
            offset++;
        }
        result.unshift(offset);
        node = parent;
        parent = parent.parentNode;
    } while (node && node != rootNode);
    return result;
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/selection/isPositionAtBeginningOf.ts":
/*!********************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/selection/isPositionAtBeginningOf.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contains_1 = __webpack_require__(/*! ../utils/contains */ "./packages/roosterjs-editor-dom/lib/utils/contains.ts");
var isNodeEmpty_1 = __webpack_require__(/*! ../utils/isNodeEmpty */ "./packages/roosterjs-editor-dom/lib/utils/isNodeEmpty.ts");
/**
 * Check if this position is at beginning of the given node.
 * This will return true if all nodes between the beginning of target node and the position are empty.
 * @param position The position to check
 * @param targetNode The node to check
 * @returns True if position is at beginning of the node, otherwise false
 */
function isPositionAtBeginningOf(position, targetNode) {
    if (position) {
        var _a = position.normalize(), node = _a.node, offset = _a.offset;
        if (offset == 0) {
            while (contains_1.default(targetNode, node) && areAllPrevousNodesEmpty(node)) {
                node = node.parentNode;
            }
            return node == targetNode;
        }
    }
    return false;
}
exports.default = isPositionAtBeginningOf;
function areAllPrevousNodesEmpty(node) {
    while (node.previousSibling) {
        node = node.previousSibling;
        if (!isNodeEmpty_1.default(node)) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/table/VTable.ts":
/*!***********************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/table/VTable.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A virtual table class, represent an HTML table, by expand all merged cells to each separated cells
 */
var VTable = /** @class */ (function () {
    /**
     * Create a new instance of VTable object using HTML TABLE or TD node
     * @param node The HTML Table or TD node
     */
    function VTable(node) {
        var _this = this;
        this.trs = [];
        this.table = node instanceof HTMLTableElement ? node : getTableFromTd(node);
        if (this.table) {
            var currentTd_1 = node instanceof HTMLTableElement ? null : node;
            var trs = [].slice.call(this.table.rows);
            this.cells = trs.map(function (row) { return []; });
            trs.forEach(function (tr, rowIndex) {
                _this.trs[rowIndex % 2] = tr;
                for (var sourceCol = 0, targetCol = 0; sourceCol < tr.cells.length; sourceCol++) {
                    // Skip the cells which already initialized
                    for (; _this.cells[rowIndex][targetCol]; targetCol++) { }
                    var td = tr.cells[sourceCol];
                    if (td == currentTd_1) {
                        _this.col = targetCol;
                        _this.row = rowIndex;
                    }
                    for (var colSpan = 0; colSpan < td.colSpan; colSpan++, targetCol++) {
                        for (var rowSpan = 0; rowSpan < td.rowSpan; rowSpan++) {
                            _this.cells[rowIndex + rowSpan][targetCol] = {
                                td: colSpan + rowSpan == 0 ? td : null,
                                spanLeft: colSpan > 0,
                                spanAbove: rowSpan > 0,
                            };
                        }
                    }
                }
            });
        }
    }
    /**
     * Write the virtual table back to DOM tree to represent the change of VTable
     */
    VTable.prototype.writeBack = function () {
        var _this = this;
        if (this.cells) {
            moveChildren(this.table);
            this.cells.forEach(function (row, r) {
                var tr = cloneNode(_this.trs[r % 2] || _this.trs[0]);
                _this.table.appendChild(tr);
                row.forEach(function (cell, c) {
                    if (cell.td) {
                        _this.recalcSpans(r, c);
                        tr.appendChild(cell.td);
                    }
                });
            });
        }
        else if (this.table) {
            this.table.parentNode.removeChild(this.table);
        }
    };
    /**
     * Apply the given table format to this virtual table
     * @param format Table format to apply
     */
    VTable.prototype.applyFormat = function (format) {
        if (!format || !this.table) {
            return;
        }
        this.table.style.borderCollapse = 'collapse';
        this.trs[0].style.backgroundColor = format.bgColorOdd || 'transparent';
        if (this.trs[1]) {
            this.trs[1].style.backgroundColor = format.bgColorEven || 'transparent';
        }
        this.cells.forEach(function (row) {
            return row
                .filter(function (cell) { return cell.td; })
                .forEach(function (cell) {
                cell.td.style.borderTop = getBorderStyle(format.topBorderColor);
                cell.td.style.borderBottom = getBorderStyle(format.bottomBorderColor);
                cell.td.style.borderLeft = getBorderStyle(format.verticalBorderColor);
                cell.td.style.borderRight = getBorderStyle(format.verticalBorderColor);
            });
        });
    };
    /**
     * Edit table with given operation.
     * @param operation Table operation
     */
    VTable.prototype.edit = function (operation) {
        var _this = this;
        if (!this.table) {
            return;
        }
        var currentRow = this.cells[this.row];
        var currentCell = currentRow[this.col];
        switch (operation) {
            case 0 /* InsertAbove */:
                this.cells.splice(this.row, 0, currentRow.map(cloneCell));
                break;
            case 1 /* InsertBelow */:
                var newRow_1 = this.row + this.countSpanAbove(this.row, this.col);
                this.cells.splice(newRow_1, 0, this.cells[newRow_1 - 1].map(function (cell, colIndex) {
                    var nextCell = _this.getCell(newRow_1, colIndex);
                    if (nextCell.spanAbove) {
                        return cloneCell(nextCell);
                    }
                    else if (cell.spanLeft) {
                        var newCell = cloneCell(cell);
                        newCell.spanAbove = false;
                        return newCell;
                    }
                    else {
                        return {
                            td: cloneNode(_this.getTd(_this.row, colIndex)),
                        };
                    }
                }));
                break;
            case 2 /* InsertLeft */:
                this.forEachCellOfCurrentColumn(function (cell, row) {
                    row.splice(_this.col, 0, cloneCell(cell));
                });
                break;
            case 3 /* InsertRight */:
                var newCol_1 = this.col + this.countSpanLeft(this.row, this.col);
                this.forEachCellOfColumn(newCol_1 - 1, function (cell, row, i) {
                    var nextCell = _this.getCell(i, newCol_1);
                    var newCell;
                    if (nextCell.spanLeft) {
                        newCell = cloneCell(nextCell);
                    }
                    else if (cell.spanAbove) {
                        newCell = cloneCell(cell);
                        newCell.spanLeft = false;
                    }
                    else {
                        newCell = {
                            td: cloneNode(_this.getTd(i, _this.col)),
                        };
                    }
                    row.splice(newCol_1, 0, newCell);
                });
                break;
            case 6 /* DeleteRow */:
                this.forEachCellOfCurrentRow(function (cell, i) {
                    var nextCell = _this.getCell(_this.row + 1, i);
                    if (cell.td && cell.td.rowSpan > 1 && nextCell.spanAbove) {
                        nextCell.td = cell.td;
                    }
                });
                this.cells.splice(this.row, 1);
                break;
            case 5 /* DeleteColumn */:
                this.forEachCellOfCurrentColumn(function (cell, row, i) {
                    var nextCell = _this.getCell(i, _this.col + 1);
                    if (cell.td && cell.td.colSpan > 1 && nextCell.spanLeft) {
                        nextCell.td = cell.td;
                    }
                    row.splice(_this.col, 1);
                });
                break;
            case 7 /* MergeAbove */:
            case 8 /* MergeBelow */:
                var rowStep = operation == 7 /* MergeAbove */ ? -1 : 1;
                for (var rowIndex = this.row + rowStep; rowIndex >= 0 && rowIndex < this.cells.length; rowIndex += rowStep) {
                    var cell = this.getCell(rowIndex, this.col);
                    if (cell.td && !cell.spanAbove) {
                        var aboveCell = rowIndex < this.row ? cell : currentCell;
                        var belowCell = rowIndex < this.row ? currentCell : cell;
                        if (aboveCell.td.colSpan == belowCell.td.colSpan) {
                            moveChildren(belowCell.td, aboveCell.td);
                            belowCell.td = null;
                            belowCell.spanAbove = true;
                        }
                        break;
                    }
                }
                break;
            case 9 /* MergeLeft */:
            case 10 /* MergeRight */:
                var colStep = operation == 9 /* MergeLeft */ ? -1 : 1;
                for (var colIndex = this.col + colStep; colIndex >= 0 && colIndex < this.cells[this.row].length; colIndex += colStep) {
                    var cell = this.getCell(this.row, colIndex);
                    if (cell.td && !cell.spanLeft) {
                        var leftCell = colIndex < this.col ? cell : currentCell;
                        var rightCell = colIndex < this.col ? currentCell : cell;
                        if (leftCell.td.rowSpan == rightCell.td.rowSpan) {
                            moveChildren(rightCell.td, leftCell.td);
                            rightCell.td = null;
                            rightCell.spanLeft = true;
                        }
                        break;
                    }
                }
                break;
            case 4 /* DeleteTable */:
                this.cells = null;
                break;
            case 12 /* SplitVertically */:
                if (currentCell.td.rowSpan > 1) {
                    this.getCell(this.row + 1, this.col).td = cloneNode(currentCell.td);
                }
                else {
                    var splitRow = currentRow.map(function (cell) {
                        return {
                            td: cell == currentCell ? cloneNode(cell.td) : null,
                            spanAbove: cell != currentCell,
                            spanLeft: cell.spanLeft,
                        };
                    });
                    this.cells.splice(this.row + 1, 0, splitRow);
                }
                break;
            case 11 /* SplitHorizontally */:
                if (currentCell.td.colSpan > 1) {
                    this.getCell(this.row, this.col + 1).td = cloneNode(currentCell.td);
                }
                else {
                    this.forEachCellOfCurrentColumn(function (cell, row) {
                        row.splice(_this.col + 1, 0, {
                            td: row == currentRow ? cloneNode(cell.td) : null,
                            spanAbove: cell.spanAbove,
                            spanLeft: row != currentRow,
                        });
                    });
                }
                break;
        }
    };
    /**
     * Loop each cell of current column and invoke a callback function
     * @param callback The callback function to invoke
     */
    VTable.prototype.forEachCellOfCurrentColumn = function (callback) {
        this.forEachCellOfColumn(this.col, callback);
    };
    /**
     * Loop each cell of current row and invoke a callback function
     * @param callback The callback function to invoke
     */
    VTable.prototype.forEachCellOfCurrentRow = function (callback) {
        this.forEachCellOfRow(this.row, callback);
    };
    /**
     * Get a table cell using its row and column index. This function will always return an object
     * even if the given indexes don't exist in table.
     * @param row The row index
     * @param col The column index
     */
    VTable.prototype.getCell = function (row, col) {
        return (this.cells && this.cells[row] && this.cells[row][col]) || {};
    };
    /**
     * Get current HTML table cell object. If the current table cell is a virtual expanded cell, return its root cell
     */
    VTable.prototype.getCurrentTd = function () {
        return this.getTd(this.row, this.col);
    };
    VTable.prototype.getTd = function (row, col) {
        if (this.cells) {
            row = Math.min(this.cells.length - 1, row);
            col = Math.min(this.cells[row].length - 1, col);
            while (row >= 0 && col >= 0) {
                var cell = this.getCell(row, col);
                if (cell.td) {
                    return cell.td;
                }
                else if (cell.spanLeft) {
                    col--;
                }
                else if (cell.spanAbove) {
                    row--;
                }
                else {
                    break;
                }
            }
        }
        return null;
    };
    VTable.prototype.forEachCellOfColumn = function (col, callback) {
        for (var i = 0; i < this.cells.length; i++) {
            callback(this.getCell(i, col), this.cells[i], i);
        }
    };
    VTable.prototype.forEachCellOfRow = function (row, callback) {
        for (var i = 0; i < this.cells[row].length; i++) {
            callback(this.getCell(row, i), i);
        }
    };
    VTable.prototype.recalcSpans = function (row, col) {
        var td = this.getCell(row, col).td;
        if (td) {
            td.colSpan = this.countSpanLeft(row, col);
            td.rowSpan = this.countSpanAbove(row, col);
            if (td.colSpan == 1) {
                td.removeAttribute('colSpan');
            }
            if (td.rowSpan == 1) {
                td.removeAttribute('rowSpan');
            }
        }
    };
    VTable.prototype.countSpanLeft = function (row, col) {
        var result = 1;
        for (var i = col + 1; i < this.cells[row].length; i++) {
            var cell = this.getCell(row, i);
            if (cell.td || !cell.spanLeft) {
                break;
            }
            result++;
        }
        return result;
    };
    VTable.prototype.countSpanAbove = function (row, col) {
        var result = 1;
        for (var i = row + 1; i < this.cells.length; i++) {
            var cell = this.getCell(i, col);
            if (cell.td || !cell.spanAbove) {
                break;
            }
            result++;
        }
        return result;
    };
    return VTable;
}());
exports.default = VTable;
function getTableFromTd(td) {
    var result = td;
    for (; result && result.tagName != 'TABLE'; result = result.parentElement) { }
    return result;
}
function getBorderStyle(style) {
    return 'solid 1px ' + (style || 'transparent');
}
/**
 * Clone a table cell
 * @param cell The cell to clone
 */
function cloneCell(cell) {
    return {
        td: cloneNode(cell.td),
        spanAbove: cell.spanAbove,
        spanLeft: cell.spanLeft,
    };
}
/**
 * Clone a node without its children.
 * @param node The node to clone
 */
function cloneNode(node) {
    var newNode = node ? node.cloneNode(false /*deep*/) : null;
    if (newNode && newNode instanceof HTMLTableCellElement) {
        newNode.removeAttribute('id');
        if (!newNode.firstChild) {
            newNode.appendChild(node.ownerDocument.createElement('br'));
        }
    }
    return newNode;
}
/**
 * Move all children from one node to another
 * @param fromNode The source node to move children from
 * @param toNode Target node. If not passed, children nodes of source node will be removed
 */
function moveChildren(fromNode, toNode) {
    while (fromNode.firstChild) {
        if (toNode) {
            toNode.appendChild(fromNode.firstChild);
        }
        else {
            fromNode.removeChild(fromNode.firstChild);
        }
    }
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/Browser.ts":
/*!************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/Browser.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get current browser information from user agent string
 * @param userAgent The userAgent string of a browser
 * @param appVersion The appVersion string of a browser
 * @returns The BrowserInfo object calculated from the given userAgent and appVersion
 */
function getBrowserInfo(userAgent, appVersion) {
    // checks whether the browser is running in IE
    // IE11 will use rv in UA instead of MSIE. Unfortunately Firefox also uses this. We should also look for "Trident" to confirm this.
    // There have been cases where companies using older version of IE and custom UserAgents have broken this logic (e.g. IE 10 and KellyServices)
    // therefore we should check that the Trident/rv combo is not just from an older IE browser
    var isIE11OrGreater = userAgent.indexOf('rv:') != -1 && userAgent.indexOf('Trident') != -1;
    var isIE = userAgent.indexOf('MSIE') != -1 || isIE11OrGreater;
    // IE11+ may also have 'Chrome', 'Firefox' and 'Safari' in user agent. But it will have 'trident' as well
    var isChrome = false;
    var isFirefox = false;
    var isSafari = false;
    var isEdge = false;
    var isWebKit = userAgent.indexOf('WebKit') != -1;
    if (!isIE) {
        isChrome = userAgent.indexOf('Chrome') != -1;
        isFirefox = userAgent.indexOf('Firefox') != -1;
        if (userAgent.indexOf('Safari') != -1) {
            // Android and Chrome have Safari in the user string
            isSafari = userAgent.indexOf('Chrome') == -1 && userAgent.indexOf('Android') == -1;
        }
        // Sample Edge UA: Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10121
        isEdge = userAgent.indexOf('Edge') != -1;
        // When it is edge, it should not be chrome or firefox. and it is also not webkit
        if (isEdge) {
            isWebKit = isChrome = isFirefox = false;
        }
    }
    var isMac = appVersion.indexOf('Mac') != -1;
    var isWin = appVersion.indexOf('Win') != -1 || appVersion.indexOf('NT') != -1;
    return {
        isMac: isMac,
        isWin: isWin,
        isWebKit: isWebKit,
        isIE: isIE,
        isIE11OrGreater: isIE11OrGreater,
        isSafari: isSafari,
        isChrome: isChrome,
        isFirefox: isFirefox,
        isEdge: isEdge,
        isIEOrEdge: isIE || isEdge,
    };
}
exports.getBrowserInfo = getBrowserInfo;
var Browser = window
    ? getBrowserInfo(window.navigator.userAgent, window.navigator.appVersion)
    : {};
exports.default = Browser;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/applyFormat.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/applyFormat.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Apply format to an HTML element
 * @param element The HTML element to apply format to
 * @param format The format to apply
 */
function applyFormat(element, format) {
    if (format) {
        var elementStyle = element.style;
        var fontFamily = format.fontFamily, fontSize = format.fontSize, textColor = format.textColor, backgroundColor = format.backgroundColor, bold = format.bold, italic = format.italic, underline = format.underline;
        if (fontFamily) {
            elementStyle.fontFamily = fontFamily;
        }
        if (fontSize) {
            elementStyle.fontSize = fontSize;
        }
        if (textColor) {
            elementStyle.color = textColor;
        }
        if (backgroundColor) {
            elementStyle.backgroundColor = backgroundColor;
        }
        if (bold) {
            elementStyle.fontWeight = 'bold';
        }
        if (italic) {
            elementStyle.fontStyle = 'italic';
        }
        if (underline) {
            elementStyle.textDecoration = 'underline';
        }
    }
}
exports.default = applyFormat;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/applyTextStyle.ts":
/*!*******************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/applyTextStyle.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getTagOfNode_1 = __webpack_require__(/*! ./getTagOfNode */ "./packages/roosterjs-editor-dom/lib/utils/getTagOfNode.ts");
var Position_1 = __webpack_require__(/*! ../selection/Position */ "./packages/roosterjs-editor-dom/lib/selection/Position.ts");
var wrap_1 = __webpack_require__(/*! ./wrap */ "./packages/roosterjs-editor-dom/lib/utils/wrap.ts");
var getLeafSibling_1 = __webpack_require__(/*! ./getLeafSibling */ "./packages/roosterjs-editor-dom/lib/utils/getLeafSibling.ts");
var splitParentNode_1 = __webpack_require__(/*! ./splitParentNode */ "./packages/roosterjs-editor-dom/lib/utils/splitParentNode.ts");
var STYLETAGS = 'SPAN,B,I,U,EM,STRONG,STRIKE,S,SMALL'.split(',');
function applyTextStyle(container, styler, from, to) {
    if (from === void 0) { from = new Position_1.default(container, 0 /* Begin */).normalize(); }
    if (to === void 0) { to = new Position_1.default(container, -1 /* End */).normalize(); }
    var formatNodes = [];
    while (from && to && to.isAfter(from)) {
        var formatNode = from.node;
        var parentTag = getTagOfNode_1.default(formatNode.parentNode);
        // The code below modifies DOM. Need to get the next sibling first otherwise you won't be able to reliably get a good next sibling node
        var nextNode = getLeafSibling_1.getNextLeafSibling(container, formatNode);
        if (formatNode.nodeType == 3 /* Text */ && ['TR', 'TABLE'].indexOf(parentTag) < 0) {
            if (formatNode == to.node && !to.isAtEnd) {
                formatNode = splitTextNode(formatNode, to.offset, true /*returnFirstPart*/);
            }
            if (from.offset > 0) {
                formatNode = splitTextNode(formatNode, from.offset, false /*returnFirstPart*/);
            }
            formatNodes.push(formatNode);
        }
        from = nextNode && new Position_1.default(nextNode, 0 /* Begin */);
    }
    if (formatNodes.length > 0) {
        if (formatNodes.every(function (node) { return node.parentNode == formatNodes[0].parentNode; })) {
            var newNode_1 = formatNodes.shift();
            formatNodes.forEach(function (node) {
                newNode_1.nodeValue += node.nodeValue;
                node.parentNode.removeChild(node);
            });
            formatNodes = [newNode_1];
        }
        formatNodes.forEach(function (node) {
            // When apply style within style tags like B/I/U/..., we split the tag and apply outside them
            // So that the inner style tag such as U, STRIKE can inherit the style we added
            while (STYLETAGS.indexOf(getTagOfNode_1.default(node.parentNode)) >= 0) {
                node = splitParentNode_1.splitBalancedNodeRange(node);
            }
            styler(getTagOfNode_1.default(node) == 'SPAN' ? node : wrap_1.default(node, 'span'));
        });
    }
}
exports.default = applyTextStyle;
function splitTextNode(textNode, offset, returnFirstPart) {
    var firstPart = textNode.nodeValue.substr(0, offset);
    var secondPart = textNode.nodeValue.substr(offset);
    var newNode = textNode.ownerDocument.createTextNode(returnFirstPart ? firstPart : secondPart);
    textNode.nodeValue = returnFirstPart ? secondPart : firstPart;
    textNode.parentNode.insertBefore(newNode, returnFirstPart ? textNode : textNode.nextSibling);
    return newNode;
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/changeElementTag.ts":
/*!*********************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/changeElementTag.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getComputedStyles_1 = __webpack_require__(/*! ./getComputedStyles */ "./packages/roosterjs-editor-dom/lib/utils/getComputedStyles.ts");
var getTagOfNode_1 = __webpack_require__(/*! ./getTagOfNode */ "./packages/roosterjs-editor-dom/lib/utils/getTagOfNode.ts");
function changeElementTag(element, newTag) {
    var _a;
    if (!element || !newTag) {
        return null;
    }
    var newElement = element.ownerDocument.createElement(newTag);
    for (var i = 0; i < element.attributes.length; i++) {
        var attr = element.attributes[i];
        newElement.setAttribute(attr.name, attr.value);
    }
    while (element.firstChild) {
        newElement.appendChild(element.firstChild);
    }
    if (getTagOfNode_1.default(element) == 'P' || getTagOfNode_1.default(newElement) == 'P') {
        _a = getComputedStyles_1.default(element, [
            'margin-top',
            'margin-bottom',
        ]), newElement.style.marginTop = _a[0], newElement.style.marginBottom = _a[1];
    }
    if (element.parentNode) {
        element.parentNode.replaceChild(newElement, element);
    }
    return newElement;
}
exports.default = changeElementTag;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/collapseNodes.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/collapseNodes.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contains_1 = __webpack_require__(/*! ./contains */ "./packages/roosterjs-editor-dom/lib/utils/contains.ts");
var splitParentNode_1 = __webpack_require__(/*! ./splitParentNode */ "./packages/roosterjs-editor-dom/lib/utils/splitParentNode.ts");
/**
 * Collapse nodes within the given start and end nodes to their common ascenstor node,
 * split parent nodes if necessary
 * @param root The root node of the scope
 * @param start The start node
 * @param end The end node
 * @param canSplitParent True to allow split parent node there are nodes before start or after end under the same parent
 * and the returned nodes will be all nodes from start trhough end after splitting
 * False to disallow split parent
 * @returns When cansplitParent is true, returns all node from start through end after splitting,
 * otherwise just return start and end
 */
function collapseNodes(root, start, end, canSplitParent) {
    if (!contains_1.default(root, start) || !contains_1.default(root, end)) {
        return [];
    }
    start = collapse(root, start, end, true /*isStart*/, canSplitParent);
    end = collapse(root, end, start, false /*isStart*/, canSplitParent);
    if (contains_1.default(start, end, true /*treateSameNodeAsContain*/)) {
        return [start];
    }
    else if (contains_1.default(end, start)) {
        return [end];
    }
    else if (start.parentNode == end.parentNode) {
        var nodes = [].slice.call(start.parentNode.childNodes);
        var startIndex = nodes.indexOf(start);
        var endIndex = nodes.indexOf(end);
        return nodes.slice(startIndex, endIndex + 1);
    }
    else {
        return [start, end];
    }
}
exports.default = collapseNodes;
function collapse(root, node, ref, isStart, canSplitParent) {
    while (node.parentNode != root && !contains_1.default(node.parentNode, ref)) {
        if ((isStart && node.previousSibling) || (!isStart && node.nextSibling)) {
            if (!canSplitParent) {
                break;
            }
            splitParentNode_1.default(node, isStart);
        }
        node = node.parentNode;
    }
    return node;
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/contains.ts":
/*!*************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/contains.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function contains(container, contained, treatSameNodeAsContain) {
    if (!container || !contained) {
        return false;
    }
    if (treatSameNodeAsContain && container == contained) {
        return true;
    }
    if (!(contained instanceof Node)) {
        contained = contained && contained.commonAncestorContainer;
        treatSameNodeAsContain = true;
    }
    if (contained && contained.nodeType == 3 /* Text */) {
        contained = contained.parentNode;
        treatSameNodeAsContain = true;
    }
    if (container.nodeType != 1 /* Element */) {
        return !!treatSameNodeAsContain && container == contained;
    }
    return !!(treatSameNodeAsContain || container != contained) && container.contains(contained);
}
exports.default = contains;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/extractClipboardEvent.ts":
/*!**************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/extractClipboardEvent.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Browser_1 = __webpack_require__(/*! ./Browser */ "./packages/roosterjs-editor-dom/lib/utils/Browser.ts");
// HTML header to indicate where is the HTML content started from.
// Sample header:
// Version:0.9
// StartHTML:71
// EndHTML:170
// StartFragment:140
// EndFragment:160
// StartSelection:140
// EndSelection:160
var CLIPBOARD_HTML_HEADER_REGEX = /^Version:[0-9\.]+\s+StartHTML:\s*([0-9]+)\s+EndHTML:\s*([0-9]+)\s+/i;
/**
 * Extract a Clipboard event
 * @param event The paste event
 * @param callback Callback function when data is ready
 * @param fallbackHtmlRetriever If direct HTML retriving is not support (e.g. Internet Explorer), as a fallback,
 * using this helper function to retrieve HTML content
 * @returns An object with the following properties:
 *  types: Available types from the clipboard event
 *  text: Plain text from the clipboard event
 *  image: Image file from the clipboard event
 *  html: Html string from the clipboard event. When set to null, it means there's no HTML found from the event.
 *   When set to undefined, it means can't retrieve HTML string, there may be HTML string but direct retrieving is
 *   not supported by browser.
 */
function extractClipboardEvent(event, callback) {
    var dataTransfer = event.clipboardData ||
        event.srcElement.ownerDocument.defaultView.clipboardData;
    var result = {
        types: dataTransfer.types ? [].slice.call(dataTransfer.types) : [],
        text: dataTransfer.getData('text'),
        image: getImage(dataTransfer),
        html: undefined,
    };
    if (event.clipboardData && event.clipboardData.items) {
        event.preventDefault();
        var items = event.clipboardData.items;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.type && item.type.indexOf('text/html') == 0) {
                item.getAsString(function (html) {
                    result.html = Browser_1.default.isEdge ? workaroundForEdge(html) : html;
                    callback(result);
                });
                return;
            }
        }
        // No HTML content found, set html to null
        result.html = null;
    }
    callback(result);
}
exports.default = extractClipboardEvent;
function getImage(dataTransfer) {
    // Chrome, Firefox, Edge support dataTransfer.items
    var fileCount = dataTransfer.items ? dataTransfer.items.length : 0;
    for (var i = 0; i < fileCount; i++) {
        var item = dataTransfer.items[i];
        if (item.type && item.type.indexOf('image/') == 0) {
            return item.getAsFile();
        }
    }
    // IE, Safari support dataTransfer.files
    fileCount = dataTransfer.files ? dataTransfer.files.length : 0;
    for (var i = 0; i < fileCount; i++) {
        var file = dataTransfer.files.item(i);
        if (file.type && file.type.indexOf('image/') == 0) {
            return file;
        }
    }
    return null;
}
/**
 * Edge sometimes doesn't remove the headers, which cause we paste more things then expected.
 * So we need to remove it in our code
 * @param html The HTML string got from clipboard
 */
function workaroundForEdge(html) {
    var headerValues = CLIPBOARD_HTML_HEADER_REGEX.exec(html);
    if (headerValues && headerValues.length == 3) {
        var start = parseInt(headerValues[1]);
        var end = parseInt(headerValues[2]);
        if (start > 0 && end > start) {
            html = html.substring(start, end);
        }
    }
    return html;
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/findClosestElementAncestor.ts":
/*!*******************************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/findClosestElementAncestor.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contains_1 = __webpack_require__(/*! ./contains */ "./packages/roosterjs-editor-dom/lib/utils/contains.ts");
/**
 * Find closest element ancestor start from the given node which matches the given selector
 * @param node Find ancestor start from this node
 * @param root Root node where the search should stop at. The return value can never be this node
 * @param selector The expected selector. If null, return the first HTML Element found from start node
 * @returns An HTML element which matches the given selector. If the given start node matches the selector,
 * returns the given node
 */
function findClosestElementAncestor(node, root, selector) {
    node = !node ? null : node.nodeType == 1 /* Element */ ? node : node.parentNode;
    var element = node && node.nodeType == 1 /* Element */ ? node : null;
    if (element && selector) {
        if (element.closest) {
            element = element.closest(selector);
        }
        else {
            while (element &&
                element != root &&
                !(element.matches || element.msMatchesSelector).call(element, selector)) {
                element = element.parentElement;
            }
        }
    }
    return !root || contains_1.default(root, element) ? element : null;
}
exports.default = findClosestElementAncestor;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/fromHtml.ts":
/*!*************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/fromHtml.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates an HTML node array from html
 * @param html the html string to create HTML elements from
 * @param ownerDocument Owner document of the result HTML elements
 * @returns An HTML node array to represent the given html string
 */
function fromHtml(html, ownerDocument) {
    var element = ownerDocument.createElement('DIV');
    element.innerHTML = html;
    return [].slice.call(element.childNodes);
}
exports.default = fromHtml;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/getComputedStyles.ts":
/*!**********************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/getComputedStyles.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var findClosestElementAncestor_1 = __webpack_require__(/*! ./findClosestElementAncestor */ "./packages/roosterjs-editor-dom/lib/utils/findClosestElementAncestor.ts");
/**
 * Get computed styles of a node
 * @param node The node to get computed styles from
 * @param styleNames Names of style to get, can be a single name or an array.
 * Default value is font-family, font-size, color, background-color
 * @returns An array of the computed styles
 */
function getComputedStyles(node, styleNames) {
    if (styleNames === void 0) { styleNames = ['font-family', 'font-size', 'color', 'background-color']; }
    var element = findClosestElementAncestor_1.default(node);
    var result = [];
    styleNames = styleNames instanceof Array ? styleNames : [styleNames];
    if (element) {
        var win = element.ownerDocument.defaultView || window;
        var styles = win.getComputedStyle(element);
        if (styles) {
            for (var _i = 0, styleNames_1 = styleNames; _i < styleNames_1.length; _i++) {
                var style = styleNames_1[_i];
                var value = (styles.getPropertyValue(style) || '').toLowerCase();
                value = style == 'font-size' ? px2Pt(value) : value;
                result.push(value);
            }
        }
    }
    return result;
}
exports.default = getComputedStyles;
/**
 * A shortcut for getComputedStyles() when only one style is to be retrieved
 * @param node The node to get style from
 * @param styleName The style name
 * @returns The style value
 */
function getComputedStyle(node, styleName) {
    return getComputedStyles(node, styleName)[0] || '';
}
exports.getComputedStyle = getComputedStyle;
function px2Pt(px) {
    if (px && px.indexOf('px') == px.length - 2) {
        // Edge may not handle the floating computing well which causes the calculated value is a little less than actual value
        // So add 0.05 to fix it
        return Math.round(parseFloat(px) * 75 + 0.05) / 100 + 'pt';
    }
    return px;
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/getLeafNode.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/getLeafNode.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var shouldSkipNode_1 = __webpack_require__(/*! ./shouldSkipNode */ "./packages/roosterjs-editor-dom/lib/utils/shouldSkipNode.ts");
var getLeafSibling_1 = __webpack_require__(/*! ./getLeafSibling */ "./packages/roosterjs-editor-dom/lib/utils/getLeafSibling.ts");
/**
 * Get first/last leaf node of the given root node.
 * @param rootNode Root node to get leaf node from
 * @param isFirst True to get first leaf node, false to get last leaf node
 */
function getLeafNode(rootNode, isFirst) {
    var getChild = function (node) { return (isFirst ? node.firstChild : node.lastChild); };
    var result = getChild(rootNode);
    while (result && getChild(result)) {
        result = getChild(result);
    }
    if (result && shouldSkipNode_1.default(result)) {
        result = getLeafSibling_1.getLeafSibling(rootNode, result, isFirst);
    }
    return result;
}
/**
 * Get the first meaningful leaf node
 * @param rootNode Root node to get leaf node from
 */
function getFirstLeafNode(rootNode) {
    return getLeafNode(rootNode, true /*isFirst*/);
}
exports.getFirstLeafNode = getFirstLeafNode;
/**
 * Get the last meaningful leaf node
 * @param rootNode Root node to get leaf node from
 */
function getLastLeafNode(rootNode) {
    return getLeafNode(rootNode, false /*isFirst*/);
}
exports.getLastLeafNode = getLastLeafNode;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/getLeafSibling.ts":
/*!*******************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/getLeafSibling.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contains_1 = __webpack_require__(/*! ./contains */ "./packages/roosterjs-editor-dom/lib/utils/contains.ts");
var shouldSkipNode_1 = __webpack_require__(/*! ./shouldSkipNode */ "./packages/roosterjs-editor-dom/lib/utils/shouldSkipNode.ts");
/**
 * This walks forwards/backwards DOM tree to get next meaningful node
 * @param rootNode Root node to scope the leaf sibling node
 * @param startNode current node to get sibling node from
 * @param isNext True to get next leaf sibling node, false to get previous leaf sibling node
 */
function getLeafSibling(rootNode, startNode, isNext) {
    var result = null;
    var getSibling = isNext
        ? function (node) { return node.nextSibling; }
        : function (node) { return node.previousSibling; };
    var getChild = isNext ? function (node) { return node.firstChild; } : function (node) { return node.lastChild; };
    if (contains_1.default(rootNode, startNode)) {
        var curNode = startNode;
        var shouldContinue = true;
        while (shouldContinue) {
            // Find next/previous node, starting from next/previous sibling, then one level up to find next/previous sibling from parent
            // till a non-null nextSibling/previousSibling is found or the ceiling is encountered (rootNode)
            var parentNode = curNode.parentNode;
            curNode = getSibling(curNode);
            while (!curNode && parentNode != rootNode) {
                curNode = getSibling(parentNode);
                parentNode = parentNode.parentNode;
            }
            // Now traverse down to get first/last child
            while (curNode && getChild(curNode)) {
                curNode = getChild(curNode);
            }
            // Check special nodes (i.e. node that has a display:none etc.) and continue looping if so
            shouldContinue = curNode && shouldSkipNode_1.default(curNode);
            if (!shouldContinue) {
                // Found a good leaf node, assign and exit
                result = curNode;
                break;
            }
        }
    }
    return result;
}
exports.getLeafSibling = getLeafSibling;
/**
 * This walks forwards DOM tree to get next meaningful node
 * @param rootNode Root node to scope the leaf sibling node
 * @param startNode current node to get sibling node from
 */
function getNextLeafSibling(rootNode, startNode) {
    return getLeafSibling(rootNode, startNode, true /*isNext*/);
}
exports.getNextLeafSibling = getNextLeafSibling;
/**
 * This walks backwards DOM tree to get next meaningful node
 * @param rootNode Root node to scope the leaf sibling node
 * @param startNode current node to get sibling node from
 */
function getPreviousLeafSibling(rootNode, startNode) {
    return getLeafSibling(rootNode, startNode, false /*isNext*/);
}
exports.getPreviousLeafSibling = getPreviousLeafSibling;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/getTagOfNode.ts":
/*!*****************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/getTagOfNode.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the html tag of a node, or empty if it is not an element
 * @param node The node to get tag of
 * @returns Tag name in upper case if the given node is an Element, or empty string otherwise
 */
function getTagOfNode(node) {
    return node && node.nodeType == 1 /* Element */ ? node.tagName.toUpperCase() : '';
}
exports.default = getTagOfNode;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/isBlockElement.ts":
/*!*******************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/isBlockElement.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getTagOfNode_1 = __webpack_require__(/*! ./getTagOfNode */ "./packages/roosterjs-editor-dom/lib/utils/getTagOfNode.ts");
var BLOCK_ELEMENT_TAGS = 'ADDRESS,ARTICLE,ASIDE,BLOCKQUOTE,CANVAS,DD,DIV,DL,DT,FIELDSET,FIGCAPTION,FIGURE,FOOTER,FORM,H1,H2,H3,H4,H5,H6,HEADER,HR,LI,MAIN,NAV,NOSCRIPT,OL,OUTPUT,P,PRE,SECTION,TABLE,TD,TH,TFOOT,UL,VIDEO'.split(',');
var BLOCK_DISPLAY_STYLES = ['block', 'list-item', 'table-cell'];
/**
 * Checks if the node is a block like element. Block like element are usually those P, DIV, LI, TD etc.
 * @param node The node to check
 * @returns True if the node is a block element, otherwise false
 */
function isBlockElement(node) {
    var tag = getTagOfNode_1.default(node);
    return !!(tag &&
        (BLOCK_DISPLAY_STYLES.indexOf(node.style.display) >= 0 ||
            BLOCK_ELEMENT_TAGS.indexOf(tag) >= 0));
}
exports.default = isBlockElement;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/isNodeAfter.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/isNodeAfter.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if node1 is after node2
 * @param node1 The node to check if it is after another node
 * @param node2 The node to check if another node is after this one
 * @returns True if node1 is after node2, otherwise false
 */
function isNodeAfter(node1, node2) {
    return !!(node1 &&
        node2 &&
        (node2.compareDocumentPosition(node1) & 4 /* Following */) ==
            4 /* Following */);
}
exports.default = isNodeAfter;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/isNodeEmpty.ts":
/*!****************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/isNodeEmpty.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getTagOfNode_1 = __webpack_require__(/*! ./getTagOfNode */ "./packages/roosterjs-editor-dom/lib/utils/getTagOfNode.ts");
var VISIBLE_ELEMENT_TAGS = ['IMG'];
var VISIBLE_CHILD_ELEMENT_SELECTOR = ['TABLE', 'IMG', 'LI'].join(',');
var ZERO_WIDTH_SPACE = /\u200b/g;
/**
 * Check if a given node has no visible content
 * @param node The node to check
 * @param trimContent Whether trim the text content so that spaces will be treated as empty.
 * Default value is false
 * @returns True if there isn't any visible element inside node, otherwise false
 */
function isNodeEmpty(node, trimContent) {
    if (!node) {
        return false;
    }
    else if (node.nodeType == 3 /* Text */) {
        return trim(node.nodeValue, trimContent) == '';
    }
    else if (node.nodeType == 1 /* Element */) {
        var element = node;
        var textContent = trim(element.textContent, trimContent);
        if (textContent != '' ||
            VISIBLE_ELEMENT_TAGS.indexOf(getTagOfNode_1.default(element)) >= 0 ||
            element.querySelectorAll(VISIBLE_CHILD_ELEMENT_SELECTOR)[0]) {
            return false;
        }
    }
    return true;
}
exports.default = isNodeEmpty;
function trim(s, trim) {
    s = s.replace(ZERO_WIDTH_SPACE, '');
    return trim ? s.trim() : s;
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/isVoidHtmlElement.ts":
/*!**********************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/isVoidHtmlElement.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getTagOfNode_1 = __webpack_require__(/*! ./getTagOfNode */ "./packages/roosterjs-editor-dom/lib/utils/getTagOfNode.ts");
/**
 * HTML void elements
 * Per https://www.w3.org/TR/html/syntax.html#syntax-elements, cannot have child nodes
 * This regex is used when we move focus to very begin of editor. We should avoid putting focus inside
 * void elements so users don't accidently create child nodes in them
 */
var HTML_VOID_ELEMENTS = 'AREA,BASE,BR,COL,COMMAND,EMBED,HR,IMG,INPUT,KEYGEN,LINK,META,PARAM,SOURCE,TRACK,WBR'.split(',');
/**
 * Check if the given node is html void element. Void element cannot have childen
 * @param node The node to check
 */
function isVoidHtmlElement(node) {
    return !!node && HTML_VOID_ELEMENTS.indexOf(getTagOfNode_1.default(node)) >= 0;
}
exports.default = isVoidHtmlElement;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/matchLink.ts":
/*!**************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/matchLink.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// http exclude matching regex
// invalid URL example (in paricular on IE and Edge):
// - http://www.bing.com%00, %00 before ? (question mark) is considered invalid. IE/Edge throws invalid argument exception
// - http://www.bing.com%1, %1 is invalid
// - http://www.bing.com%g, %g is invalid (IE and Edge expects a two hex value after a %)
// - http://www.bing.com%, % as ending is invalid (IE and Edge expects a two hex value after a %)
// All above % cases if they're after ? (question mark) is then considered valid again
// Similar for @, it needs to be after / (forward slash), or ? (question mark). Otherwise IE/Edge will throw security exception
// - http://www.bing.com@name, @name before ? (question mark) is considered invalid
// - http://www.bing.com/@name, is valid sine it is after / (forward slash)
// - http://www.bing.com?@name, is also valid sinve it is after ? (question mark)
// The regex below is essentially a break down of:
// ^[^?]+%[^0-9a-f]+ => to exclude URL like www.bing.com%%
// ^[^?]+%[0-9a-f][^0-9a-f]+ => to exclude URL like www.bing.com%1
// ^[^?]+%00 => to exclude URL like www.bing.com%00
// ^[^?]+%$ => to exclude URL like www.bing.com%
// ^https?:\/\/[^?\/]+@ => to exclude URL like http://www.bing.com@name
// ^www\.[^?\/]+@ => to exclude URL like www.bing.com@name
// , => to exclude url like www.bing,,com
var httpExcludeRegEx = /^[^?]+%[^0-9a-f]+|^[^?]+%[0-9a-f][^0-9a-f]+|^[^?]+%00|^[^?]+%$|^https?:\/\/[^?\/]+@|^www\.[^?\/]+@/i;
// via https://tools.ietf.org/html/rfc1035 Page 7
var labelRegEx = '[a-z0-9](?:[a-z0-9-]*[a-z0-9])?'; // We're using case insensitive regexes below so don't bother including A-Z
var domainNameRegEx = "(?:" + labelRegEx + "\\.)*" + labelRegEx;
var domainPortRegEx = domainNameRegEx + "(?:\\:[0-9]+)?";
var domainPortWithUrlRegEx = domainPortRegEx + "(?:[\\/\\?]\\S*)?";
var linkMatchRules = {
    http: {
        match: new RegExp("^(?:microsoft-edge:)?http:\\/\\/" + domainPortWithUrlRegEx + "|www\\." + domainPortWithUrlRegEx, 'i'),
        except: httpExcludeRegEx,
        normalizeUrl: function (url) {
            return new RegExp('^(?:microsoft-edge:)?http:\\/\\/', 'i').test(url) ? url : 'http://' + url;
        },
    },
    https: {
        match: new RegExp("^(?:microsoft-edge:)?https:\\/\\/" + domainPortWithUrlRegEx, 'i'),
        except: httpExcludeRegEx,
    },
    mailto: { match: new RegExp('^mailto:\\S+@\\S+\\.\\S+', 'i') },
    notes: { match: new RegExp('^notes:\\/\\/\\S+', 'i') },
    file: { match: new RegExp('^file:\\/\\/\\/?\\S+', 'i') },
    unc: { match: new RegExp('^\\\\\\\\\\S+', 'i') },
    ftp: {
        match: new RegExp("^ftp:\\/\\/" + domainPortWithUrlRegEx + "|ftp\\." + domainPortWithUrlRegEx, 'i'),
        normalizeUrl: function (url) { return (new RegExp('^ftp:\\/\\/', 'i').test(url) ? url : 'ftp://' + url); },
    },
    news: { match: new RegExp("^news:(\\/\\/)?" + domainPortWithUrlRegEx, 'i') },
    telnet: { match: new RegExp("^telnet:(\\/\\/)?" + domainPortWithUrlRegEx, 'i') },
    gopher: { match: new RegExp("^gopher:\\/\\/" + domainPortWithUrlRegEx, 'i') },
    wais: { match: new RegExp("^wais:(\\/\\/)?" + domainPortWithUrlRegEx, 'i') },
};
/**
 * Try to match a given string with link match rules, return matched link
 * @param url Input url to match
 * @param option Link match option, exact or partial. If it is exact match, we need
 * to check the length of matched link and url
 * @param rules Optional link match rules, if not passed, only the default link match
 * rules will be applied
 * @returns The matched link data, or null if no match found.
 * The link data includes an original url and a normalized url
 */
function matchLink(url) {
    if (url) {
        for (var _i = 0, _a = Object.keys(linkMatchRules); _i < _a.length; _i++) {
            var schema = _a[_i];
            var rule = linkMatchRules[schema];
            var matches = url.match(rule.match);
            if (matches && matches[0] == url && (!rule.except || !rule.except.test(url))) {
                return {
                    scheme: schema,
                    originalUrl: url,
                    normalizedUrl: rule.normalizeUrl ? rule.normalizeUrl(url) : url,
                };
            }
        }
    }
    return null;
}
exports.default = matchLink;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/queryElements.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/queryElements.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Query HTML elements in the container by a selector string
 * @param container Container element to query from
 * @param selector Selector string to query
 * @param forEachCallback An optional callback to be invoked on each node in query result
 * @param scope The scope of the query, default value is QueryScope.Body
 * @param range The selection range to query with. This is required when scope is not Body
 * @returns HTML Element array of the query result
 */
function queryElements(container, selector, forEachCallback, scope, range) {
    if (scope === void 0) { scope = 0 /* Body */; }
    if (!container || !selector) {
        return [];
    }
    var elements = [].slice.call(container.querySelectorAll(selector));
    if (scope != 0 /* Body */ && range) {
        elements = elements.filter(function (element) {
            return isIntersectWithNodeRange(element, range, scope == 2 /* InSelection */);
        });
    }
    if (forEachCallback) {
        elements.forEach(forEachCallback);
    }
    return elements;
}
exports.default = queryElements;
function isIntersectWithNodeRange(node, range, nodeContainedByRangeOnly) {
    var startPosition = node.compareDocumentPosition(range.startContainer);
    var endPosition = node.compareDocumentPosition(range.endContainer);
    var targetPositions = [0 /* Same */, 8 /* Contains */];
    if (!nodeContainedByRangeOnly) {
        targetPositions.push(16 /* ContainedBy */);
    }
    return (checkPosition(startPosition, targetPositions) || // intersectStart
        checkPosition(endPosition, targetPositions) || // intersectEnd
        (checkPosition(startPosition, [2 /* Preceding */]) && // Contains
            checkPosition(endPosition, [4 /* Following */]) &&
            !checkPosition(endPosition, [16 /* ContainedBy */])));
}
function checkPosition(position, targets) {
    return targets.some(function (target) {
        return target == 0 /* Same */
            ? position == 0 /* Same */
            : (position & target) == target;
    });
}


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/shouldSkipNode.ts":
/*!*******************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/shouldSkipNode.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getComputedStyles_1 = __webpack_require__(/*! ./getComputedStyles */ "./packages/roosterjs-editor-dom/lib/utils/getComputedStyles.ts");
var CRLF = /^[\r\n]+$/gm;
/**
 * Skip a node when any of following conditions are true
 * - it is neither Element nor Text
 * - it is a text node but is empty
 * - it is a text node but contains just CRLF (noisy text node that often comes in-between elements)
 * - has a display:none
 */
function shouldSkipNode(node) {
    if (node.nodeType == 3 /* Text */) {
        return !node.nodeValue || node.textContent == '' || CRLF.test(node.nodeValue);
    }
    else if (node.nodeType == 1 /* Element */) {
        return getComputedStyles_1.getComputedStyle(node, 'display') == 'none';
    }
    else {
        return true;
    }
}
exports.default = shouldSkipNode;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/splitParentNode.ts":
/*!********************************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/splitParentNode.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isNodeAfter_1 = __webpack_require__(/*! ./isNodeAfter */ "./packages/roosterjs-editor-dom/lib/utils/isNodeAfter.ts");
/**
 * Split parent node of the given node before/after the given node.
 * When a parent node contains [A,B,C] and pass B as the given node,
 * If split before, the new nodes will be [A][B,C] and returns [A];
 * otherwise, it will be [A,B][C] and returns [C].
 * @param node The node to split before/after
 * @param splitBefore Whether split before or after
 * @param removeEmptyNewNode If the new node is empty (even then only child is space or ZER_WIDTH_SPACE),
 * we remove it. @default false
 * @returns The new parent node
 */
function splitParentNode(node, splitBefore) {
    if (!node || !node.parentNode) {
        return null;
    }
    var parentNode = node.parentNode;
    var newParent = parentNode.cloneNode(false /*deep*/);
    newParent.removeAttribute('id');
    if (splitBefore) {
        while (parentNode.firstChild && parentNode.firstChild != node) {
            newParent.appendChild(parentNode.firstChild);
        }
    }
    else {
        while (node.nextSibling) {
            newParent.appendChild(node.nextSibling);
        }
    }
    // When the only child of new parent is ZERO_WIDTH_SPACE, we can still prevent keeping it by set removeEmptyNewNode to true
    if (newParent.firstChild && newParent.innerHTML != '') {
        parentNode.parentNode.insertBefore(newParent, splitBefore ? parentNode : parentNode.nextSibling);
    }
    else {
        newParent = null;
    }
    return newParent;
}
exports.default = splitParentNode;
/**
 * Split parent node by a balanced node range
 * @param nodes The nodes to split from. If only one node is passed, split it from all its siblings.
 * If two or nodes are passed, will split before the first one and after the last one, all other nodes will be ignored
 * @returns The parent node of the given node range if the given nodes are balanced, otherwise null
 */
function splitBalancedNodeRange(nodes) {
    var start = nodes instanceof Array ? nodes[0] : nodes;
    var end = nodes instanceof Array ? nodes[nodes.length - 1] : nodes;
    var parentNode = start && end && start.parentNode == end.parentNode ? start.parentNode : null;
    if (parentNode) {
        if (isNodeAfter_1.default(start, end)) {
            var temp = end;
            end = start;
            start = temp;
        }
        splitParentNode(start, true /*splitBefore*/);
        splitParentNode(end, false /*splitBefore*/);
    }
    return parentNode;
}
exports.splitBalancedNodeRange = splitBalancedNodeRange;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/unwrap.ts":
/*!***********************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/unwrap.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Removes the node and keep all children in place, return the parentNode where the children are attached
 * @param node the node to remove
 */
function unwrap(node) {
    // Unwrap requires a parentNode
    var parentNode = node ? node.parentNode : null;
    if (!parentNode) {
        return null;
    }
    while (node.firstChild) {
        parentNode.insertBefore(node.firstChild, node);
    }
    parentNode.removeChild(node);
    return parentNode;
}
exports.default = unwrap;


/***/ }),

/***/ "./packages/roosterjs-editor-dom/lib/utils/wrap.ts":
/*!*********************************************************!*\
  !*** ./packages/roosterjs-editor-dom/lib/utils/wrap.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fromHtml_1 = __webpack_require__(/*! ./fromHtml */ "./packages/roosterjs-editor-dom/lib/utils/fromHtml.ts");
function wrap(nodes, wrapper) {
    nodes = !nodes ? [] : nodes instanceof Node ? [nodes] : nodes;
    if (nodes.length == 0 || !nodes[0]) {
        return null;
    }
    if (!(wrapper instanceof Element)) {
        var document_1 = nodes[0].ownerDocument;
        wrapper = wrapper || 'div';
        wrapper = /^\w+$/.test(wrapper)
            ? document_1.createElement(wrapper)
            : fromHtml_1.default(wrapper, document_1)[0];
    }
    var parentNode = nodes[0].parentNode;
    if (parentNode) {
        parentNode.insertBefore(wrapper, nodes[0]);
    }
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var node = nodes_1[_i];
        wrapper.appendChild(node);
    }
    return wrapper;
}
exports.default = wrap;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/ContentEdit/ContentEdit.ts":
/*!**************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/ContentEdit/ContentEdit.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContentEditFeatures_1 = __webpack_require__(/*! ./ContentEditFeatures */ "./packages/roosterjs-editor-plugins/lib/ContentEdit/ContentEditFeatures.ts");
var autoLinkFeatures_1 = __webpack_require__(/*! ./features/autoLinkFeatures */ "./packages/roosterjs-editor-plugins/lib/ContentEdit/features/autoLinkFeatures.ts");
var shortcutFeatures_1 = __webpack_require__(/*! ./features/shortcutFeatures */ "./packages/roosterjs-editor-plugins/lib/ContentEdit/features/shortcutFeatures.ts");
var tableFeatures_1 = __webpack_require__(/*! ./features/tableFeatures */ "./packages/roosterjs-editor-plugins/lib/ContentEdit/features/tableFeatures.ts");
var listFeatures_1 = __webpack_require__(/*! ./features/listFeatures */ "./packages/roosterjs-editor-plugins/lib/ContentEdit/features/listFeatures.ts");
var quoteFeatures_1 = __webpack_require__(/*! ./features/quoteFeatures */ "./packages/roosterjs-editor-plugins/lib/ContentEdit/features/quoteFeatures.ts");
/**
 * An editor plugin to handle content edit event.
 * The following cases are included:
 * 1. Auto increase/decrease indentation on Tab, Shift+tab
 * 2. Enter, Backspace on empty list item
 * 3. Enter, Backspace on empty blockquote line
 * 4. Auto bullet/numbering
 * 5. Auto link
 * 6. Tab in table
 * 7. Up/Down in table
 * 8. Manage list style
 */
var ContentEdit = /** @class */ (function () {
    /**
     * Create instance of ContentEdit plugin
     * @param features An optional feature set to determine which features the plugin should provide
     */
    function ContentEdit(featureSet) {
        this.featureSet = featureSet;
    }
    /**
     * Get a friendly name of  this plugin
     */
    ContentEdit.prototype.getName = function () {
        return 'ContentEdit';
    };
    /**
     * Initialize this plugin
     * @param editor The editor instance
     */
    ContentEdit.prototype.initialize = function (editor) {
        var _this = this;
        this.editor = editor;
        this.getFilteredFeatures().forEach(function (feature) { return _this.editor.addContentEditFeature(feature); });
    };
    /**
     * Dispose this plugin
     */
    ContentEdit.prototype.dispose = function () {
        this.editor = null;
    };
    ContentEdit.prototype.getFilteredFeatures = function () {
        var featureSet = this.featureSet || ContentEditFeatures_1.getDefaultContentEditFeatures();
        var allFeatures = {
            indentWhenTab: listFeatures_1.IndentWhenTab,
            outdentWhenShiftTab: listFeatures_1.OutdentWhenShiftTab,
            outdentWhenBackspaceOnEmptyFirstLine: listFeatures_1.OutdentWhenBackOn1stEmptyLine,
            outdentWhenEnterOnEmptyLine: listFeatures_1.OutdentWhenEnterOnEmptyLine,
            mergeInNewLineWhenBackspaceOnFirstChar: listFeatures_1.MergeInNewLine,
            unquoteWhenBackspaceOnEmptyFirstLine: quoteFeatures_1.UnquoteWhenBackOnEmpty1stLine,
            unquoteWhenEnterOnEmptyLine: quoteFeatures_1.UnquoteWhenEnterOnEmptyLine,
            tabInTable: tableFeatures_1.TabInTable,
            upDownInTable: tableFeatures_1.UpDownInTable,
            autoBullet: listFeatures_1.AutoBullet,
            autoLink: autoLinkFeatures_1.AutoLink,
            unlinkWhenBackspaceAfterLink: autoLinkFeatures_1.UnlinkWhenBackspaceAfterLink,
            defaultShortcut: shortcutFeatures_1.DefaultShortcut,
            smartOrderedList: listFeatures_1.getSmartOrderedList(featureSet.smartOrderedListStyles),
        };
        var keys = Object.keys(allFeatures);
        return keys.filter(function (key) { return featureSet[key]; }).map(function (key) { return allFeatures[key]; });
    };
    return ContentEdit;
}());
exports.default = ContentEdit;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/ContentEdit/ContentEditFeatures.ts":
/*!**********************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/ContentEdit/ContentEditFeatures.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get default feature set of ContentEdit plugin
 */
function getDefaultContentEditFeatures() {
    return {
        autoLink: true,
        indentWhenTab: true,
        outdentWhenShiftTab: true,
        outdentWhenBackspaceOnEmptyFirstLine: true,
        outdentWhenEnterOnEmptyLine: true,
        mergeInNewLineWhenBackspaceOnFirstChar: false,
        unquoteWhenBackspaceOnEmptyFirstLine: true,
        unquoteWhenEnterOnEmptyLine: true,
        autoBullet: true,
        tabInTable: true,
        upDownInTable: true,
        defaultShortcut: true,
        unlinkWhenBackspaceAfterLink: false,
        smartOrderedList: false,
        smartOrderedListStyles: ['lower-alpha', 'lower-roman', 'decimal'],
    };
}
exports.getDefaultContentEditFeatures = getDefaultContentEditFeatures;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/ContentEdit/features/autoLinkFeatures.ts":
/*!****************************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/ContentEdit/features/autoLinkFeatures.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var roosterjs_editor_api_1 = __webpack_require__(/*! roosterjs-editor-api */ "./packages/roosterjs-editor-api/lib/index.ts");
var roosterjs_editor_core_1 = __webpack_require__(/*! roosterjs-editor-core */ "./packages/roosterjs-editor-core/lib/index.ts");
// When user type, they may end a link with a puncatuation, i.e. www.bing.com;
// we need to trim off the trailing puncatuation before turning it to link match
var TRAILING_PUNCTUATION_REGEX = /[.+=\s:;"',>]+$/i;
var MINIMUM_LENGTH = 5;
exports.AutoLink = {
    keys: [13 /* ENTER */, 32 /* SPACE */, 2048 /* CONTENTCHANGED */],
    initialize: function (editor) {
        return roosterjs_editor_dom_1.Browser.isIE &&
            editor.getDocument().execCommand('AutoUrlDetect', false, false);
    },
    shouldHandleEvent: cacheGetLinkData,
    handleEvent: autoLink,
};
exports.UnlinkWhenBackspaceAfterLink = {
    keys: [8 /* BACKSPACE */],
    shouldHandleEvent: hasLinkBeforeCursor,
    handleEvent: function (event, editor) {
        event.rawEvent.preventDefault();
        roosterjs_editor_api_1.removeLink(editor);
    },
};
function cacheGetLinkData(event, editor) {
    return event.eventType == 0 /* KeyDown */ ||
        (event.eventType == 6 /* ContentChanged */ && event.source == "Paste" /* Paste */)
        ? roosterjs_editor_core_1.cacheGetEventData(event, 'LINK_DATA', function () {
            var searcher = roosterjs_editor_core_1.cacheGetContentSearcher(event, editor);
            var word = searcher && searcher.getWordBefore();
            if (word && word.length > MINIMUM_LENGTH) {
                // Check for trailing punctuation
                var trailingPunctuations = word.match(TRAILING_PUNCTUATION_REGEX);
                var trailingPunctuation = (trailingPunctuations || [])[0] || '';
                var candidate_1 = word.substring(0, word.length - trailingPunctuation.length);
                // Do special handling for ')', '}', ']'
                ['()', '{}', '[]'].forEach(function (str) {
                    if (candidate_1[candidate_1.length - 1] == str[1] &&
                        candidate_1.indexOf(str[0]) < 0) {
                        candidate_1 = candidate_1.substr(0, candidate_1.length - 1);
                    }
                });
                // Match and replace in editor
                return roosterjs_editor_dom_1.matchLink(candidate_1);
            }
            return null;
        })
        : null;
}
function hasLinkBeforeCursor(event, editor) {
    var contentSearcher = roosterjs_editor_core_1.cacheGetContentSearcher(event, editor);
    var inline = contentSearcher.getInlineElementBefore();
    return inline instanceof roosterjs_editor_dom_1.LinkInlineElement;
}
function autoLink(event, editor) {
    var searcher = roosterjs_editor_core_1.cacheGetContentSearcher(event, editor);
    var anchor = editor.getDocument().createElement('a');
    var linkData = cacheGetLinkData(event, editor);
    anchor.textContent = linkData.originalUrl;
    anchor.href = linkData.normalizedUrl;
    editor.runAsync(function () {
        editor.performAutoComplete(function () {
            roosterjs_editor_api_1.replaceWithNode(editor, linkData.originalUrl, anchor, false /* exactMatch */, searcher);
            // The content at cursor has changed. Should also clear the cursor data cache
            roosterjs_editor_core_1.clearContentSearcherCache(event);
            return anchor;
        }, "AutoLink" /* AutoLink */);
    });
}


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/ContentEdit/features/listFeatures.ts":
/*!************************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/ContentEdit/features/listFeatures.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_api_1 = __webpack_require__(/*! roosterjs-editor-api */ "./packages/roosterjs-editor-api/lib/index.ts");
var roosterjs_editor_core_1 = __webpack_require__(/*! roosterjs-editor-core */ "./packages/roosterjs-editor-core/lib/index.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
exports.IndentWhenTab = {
    keys: [9 /* TAB */],
    shouldHandleEvent: function (event, editor) {
        return !event.rawEvent.shiftKey && cacheGetListElement(event, editor);
    },
    handleEvent: function (event, editor) {
        roosterjs_editor_api_1.setIndentation(editor, 0 /* Increase */);
        event.rawEvent.preventDefault();
    },
};
exports.OutdentWhenShiftTab = {
    keys: [9 /* TAB */],
    shouldHandleEvent: function (event, editor) {
        return event.rawEvent.shiftKey && cacheGetListElement(event, editor);
    },
    handleEvent: function (event, editor) {
        roosterjs_editor_api_1.setIndentation(editor, 1 /* Decrease */);
        event.rawEvent.preventDefault();
    },
};
exports.MergeInNewLine = {
    keys: [8 /* BACKSPACE */],
    shouldHandleEvent: function (event, editor) {
        var li = roosterjs_editor_core_1.cacheGetElementAtCursor(editor, event, 'LI');
        var range = editor.getSelectionRange();
        return li && range && roosterjs_editor_dom_1.isPositionAtBeginningOf(roosterjs_editor_dom_1.Position.getStart(range), li);
    },
    handleEvent: function (event, editor) {
        var li = roosterjs_editor_core_1.cacheGetElementAtCursor(editor, event, 'LI');
        if (li.previousSibling) {
            editor.runAsync(function () {
                var br = editor.getDocument().createElement('BR');
                editor.insertNode(br);
                editor.select(br, -3 /* After */);
            });
        }
        else {
            toggleListAndPreventDefault(event, editor);
        }
    },
};
exports.OutdentWhenBackOn1stEmptyLine = {
    keys: [8 /* BACKSPACE */],
    shouldHandleEvent: function (event, editor) {
        var li = roosterjs_editor_core_1.cacheGetElementAtCursor(editor, event, 'LI');
        return li && roosterjs_editor_dom_1.isNodeEmpty(li) && !li.previousSibling;
    },
    handleEvent: toggleListAndPreventDefault,
};
exports.OutdentWhenEnterOnEmptyLine = {
    keys: [13 /* ENTER */],
    shouldHandleEvent: function (event, editor) {
        var li = roosterjs_editor_core_1.cacheGetElementAtCursor(editor, event, 'LI');
        return !event.rawEvent.shiftKey && li && roosterjs_editor_dom_1.isNodeEmpty(li);
    },
    handleEvent: function (event, editor) {
        editor.performAutoComplete(function () { return toggleListAndPreventDefault(event, editor); });
    },
};
exports.AutoBullet = {
    keys: [32 /* SPACE */],
    shouldHandleEvent: function (event, editor) {
        if (!cacheGetListElement(event, editor)) {
            var searcher = roosterjs_editor_core_1.cacheGetContentSearcher(event, editor);
            var textBeforeCursor = searcher.getSubStringBefore(3);
            // Auto list is triggered if:
            // 1. Text before cursor exactly mathces '*', '-' or '1.'
            // 2. There's no non-text inline entities before cursor
            return (['*', '-', '1.'].indexOf(textBeforeCursor) >= 0 &&
                !searcher.getNearestNonTextInlineElement());
        }
        return false;
    },
    handleEvent: function (event, editor) {
        editor.runAsync(function () {
            editor.performAutoComplete(function () {
                var searcher = editor.getContentSearcherOfCursor();
                var textBeforeCursor = searcher.getSubStringBefore(3);
                var rangeToDelete = searcher.getRangeFromText(textBeforeCursor, true /*exactMatch*/);
                if (rangeToDelete) {
                    rangeToDelete.deleteContents();
                }
                // If not explicitly insert br, Chrome/Safari/IE will operate on the previous line
                var tempBr = editor.getDocument().createElement('BR');
                if (roosterjs_editor_dom_1.Browser.isChrome || roosterjs_editor_dom_1.Browser.isSafari || roosterjs_editor_dom_1.Browser.isIE11OrGreater) {
                    editor.insertNode(tempBr);
                }
                if (textBeforeCursor.indexOf('1.') == 0) {
                    roosterjs_editor_api_1.toggleNumbering(editor);
                }
                else {
                    roosterjs_editor_api_1.toggleBullet(editor);
                }
                editor.deleteNode(tempBr);
            });
        });
    },
};
function getSmartOrderedList(styleList) {
    return {
        keys: [2048 /* CONTENTCHANGED */],
        shouldHandleEvent: function (event, editor) { return event.data instanceof HTMLOListElement; },
        handleEvent: function (event, editor) {
            var ol = event.data;
            var parentOl = editor.getElementAtCursor('OL', ol.parentNode);
            if (parentOl) {
                // The style list must has at least one value. If no value is passed in, fallback to decimal
                var styles = styleList && styleList.length > 0 ? styleList : ['decimal'];
                ol.style.listStyle =
                    styles[(styles.indexOf(parentOl.style.listStyle) + 1) % styles.length];
            }
        },
    };
}
exports.getSmartOrderedList = getSmartOrderedList;
function toggleListAndPreventDefault(event, editor) {
    var listInfo = cacheGetListElement(event, editor);
    if (listInfo) {
        var listElement = listInfo[0];
        var tag = roosterjs_editor_dom_1.getTagOfNode(listElement);
        if (tag == 'UL') {
            roosterjs_editor_api_1.toggleBullet(editor);
        }
        else if (tag == 'OL') {
            roosterjs_editor_api_1.toggleNumbering(editor);
        }
        editor.focus();
        event.rawEvent.preventDefault();
    }
}
function cacheGetListElement(event, editor) {
    var li = roosterjs_editor_core_1.cacheGetElementAtCursor(editor, event, 'LI,TABLE');
    var listElement = li && roosterjs_editor_dom_1.getTagOfNode(li) == 'LI' && editor.getElementAtCursor('UL,OL', li);
    return listElement ? [listElement, li] : null;
}


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/ContentEdit/features/quoteFeatures.ts":
/*!*************************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/ContentEdit/features/quoteFeatures.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_core_1 = __webpack_require__(/*! roosterjs-editor-core */ "./packages/roosterjs-editor-core/lib/index.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var QUOTE_TAG = 'BLOCKQUOTE';
var STRUCTURED_TAGS = [QUOTE_TAG, 'LI', 'TD', 'TH'].join(',');
exports.UnquoteWhenBackOnEmpty1stLine = {
    keys: [8 /* BACKSPACE */],
    shouldHandleEvent: function (event, editor) {
        var childOfQuote = cacheGetQuoteChild(event, editor);
        return childOfQuote && roosterjs_editor_dom_1.isNodeEmpty(childOfQuote) && !childOfQuote.previousSibling;
    },
    handleEvent: splitQuote,
};
exports.UnquoteWhenEnterOnEmptyLine = {
    keys: [13 /* ENTER */],
    shouldHandleEvent: function (event, editor) {
        var childOfQuote = cacheGetQuoteChild(event, editor);
        var shift = event.rawEvent.shiftKey;
        return !shift && childOfQuote && roosterjs_editor_dom_1.isNodeEmpty(childOfQuote);
    },
    handleEvent: function (event, editor) { return editor.performAutoComplete(function () { return splitQuote(event, editor); }); },
};
function cacheGetQuoteChild(event, editor) {
    return roosterjs_editor_core_1.cacheGetEventData(event, 'QUOTE_CHILD', function () {
        var quote = editor.getElementAtCursor(STRUCTURED_TAGS);
        if (quote && roosterjs_editor_dom_1.getTagOfNode(quote) == QUOTE_TAG) {
            var pos = editor.getFocusedPosition();
            var block = pos && editor.getBlockElementAtNode(pos.normalize().node);
            if (block) {
                var node = block.getStartNode() == quote
                    ? block.getStartNode()
                    : block.collapseToSingleElement();
                return roosterjs_editor_dom_1.isNodeEmpty(node) ? node : null;
            }
        }
        return null;
    });
}
function splitQuote(event, editor) {
    editor.addUndoSnapshot(function () {
        var childOfQuote = cacheGetQuoteChild(event, editor);
        var parent;
        if (roosterjs_editor_dom_1.getTagOfNode(childOfQuote) == QUOTE_TAG) {
            childOfQuote = roosterjs_editor_dom_1.wrap([].slice.call(childOfQuote.childNodes));
        }
        parent = roosterjs_editor_dom_1.splitBalancedNodeRange(childOfQuote);
        roosterjs_editor_dom_1.unwrap(parent);
        editor.select(childOfQuote, 0 /* Begin */);
    });
    event.rawEvent.preventDefault();
}


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/ContentEdit/features/shortcutFeatures.ts":
/*!****************************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/ContentEdit/features/shortcutFeatures.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var roosterjs_editor_core_1 = __webpack_require__(/*! roosterjs-editor-core */ "./packages/roosterjs-editor-core/lib/index.ts");
var roosterjs_editor_api_1 = __webpack_require__(/*! roosterjs-editor-api */ "./packages/roosterjs-editor-api/lib/index.ts");
function createCommand(winKey, macKey, action) {
    return {
        winKey: winKey,
        macKey: macKey,
        action: action,
    };
}
var commands = [
    createCommand(256 /* Ctrl */ | 66 /* B */, 512 /* Meta */ | 66 /* B */, roosterjs_editor_api_1.toggleBold),
    createCommand(256 /* Ctrl */ | 73 /* I */, 512 /* Meta */ | 73 /* I */, roosterjs_editor_api_1.toggleItalic),
    createCommand(256 /* Ctrl */ | 85 /* U */, 512 /* Meta */ | 85 /* U */, roosterjs_editor_api_1.toggleUnderline),
    createCommand(256 /* Ctrl */ | 90 /* Z */, 512 /* Meta */ | 90 /* Z */, function (editor) { return editor.undo(); }),
    createCommand(256 /* Ctrl */ | 89 /* Y */, 512 /* Meta */ | 1024 /* Shift */ | 90 /* Z */, function (editor) { return editor.redo(); }),
    createCommand(256 /* Ctrl */ | 190 /* PERIOD */, 512 /* Meta */ | 190 /* PERIOD */, roosterjs_editor_api_1.toggleBullet),
    createCommand(256 /* Ctrl */ | 191 /* FORWARDSLASH */, 512 /* Meta */ | 191 /* FORWARDSLASH */, roosterjs_editor_api_1.toggleNumbering),
    createCommand(256 /* Ctrl */ | 1024 /* Shift */ | 190 /* PERIOD */, 512 /* Meta */ | 1024 /* Shift */ | 190 /* PERIOD */, function (editor) { return roosterjs_editor_api_1.changeFontSize(editor, 0 /* Increase */); }),
    createCommand(256 /* Ctrl */ | 1024 /* Shift */ | 188 /* COMMA */, 512 /* Meta */ | 1024 /* Shift */ | 188 /* COMMA */, function (editor) { return roosterjs_editor_api_1.changeFontSize(editor, 1 /* Decrease */); }),
];
exports.DefaultShortcut = {
    allowFunctionKeys: true,
    keys: [66 /* B */, 73 /* I */, 85 /* U */, 89 /* Y */, 90 /* Z */, 188 /* COMMA */, 190 /* PERIOD */, 191 /* FORWARDSLASH */],
    shouldHandleEvent: cacheGetCommand,
    handleEvent: function (event, editor) {
        var command = cacheGetCommand(event);
        if (command) {
            command.action(editor);
            event.rawEvent.preventDefault();
            event.rawEvent.stopPropagation();
        }
    },
};
function cacheGetCommand(event) {
    return roosterjs_editor_core_1.cacheGetEventData(event, 'DEFAULT_SHORT_COMMAND', function () {
        var e = event.rawEvent;
        var key = 
        // Need to check ALT key to be false since in some language (e.g. Polski) uses AltGr to input some special charactors
        // In that case, ctrlKey and altKey are both true in Edge, but we should not trigger any shortcut function here
        event.eventType == 0 /* KeyDown */ && !e.altKey
            ? e.which |
                (e.metaKey && 512 /* Meta */) |
                (e.shiftKey && 1024 /* Shift */) |
                (e.ctrlKey && 256 /* Ctrl */)
            : 0;
        return key && commands.filter(function (cmd) { return (roosterjs_editor_dom_1.Browser.isMac ? cmd.macKey : cmd.winKey) == key; })[0];
    });
}


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/ContentEdit/features/tableFeatures.ts":
/*!*************************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/ContentEdit/features/tableFeatures.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_core_1 = __webpack_require__(/*! roosterjs-editor-core */ "./packages/roosterjs-editor-core/lib/index.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
exports.TabInTable = {
    keys: [9 /* TAB */],
    shouldHandleEvent: cacheGetTableCell,
    handleEvent: function (event, editor) {
        var shift = event.rawEvent.shiftKey;
        var td = cacheGetTableCell(event, editor);
        for (var vtable = new roosterjs_editor_dom_1.VTable(td), step = shift ? -1 : 1, row = vtable.row, col = vtable.col + step;; col += step) {
            if (col < 0 || col >= vtable.cells[row].length) {
                row += step;
                if (row < 0 || row >= vtable.cells.length) {
                    editor.select(vtable.table, shift ? -2 /* Before */ : -3 /* After */);
                    break;
                }
                col = shift ? vtable.cells[row].length - 1 : 0;
            }
            var cell = vtable.getCell(row, col);
            if (cell.td) {
                editor.select(cell.td, 0 /* Begin */);
                break;
            }
        }
        event.rawEvent.preventDefault();
    },
};
exports.UpDownInTable = {
    keys: [38 /* UP */, 40 /* DOWN */],
    shouldHandleEvent: cacheGetTableCell,
    handleEvent: function (event, editor) {
        var td = cacheGetTableCell(event, editor);
        var vtable = new roosterjs_editor_dom_1.VTable(td);
        var isUp = event.rawEvent.which == 38 /* UP */;
        var step = isUp ? -1 : 1;
        var targetTd = null;
        for (var row = vtable.row; row >= 0 && row < vtable.cells.length; row += step) {
            var cell = vtable.getCell(row, vtable.col);
            if (cell.td && cell.td != td) {
                targetTd = cell.td;
                break;
            }
        }
        editor.runAsync(function () {
            var newContainer = editor.getElementAtCursor();
            if (roosterjs_editor_dom_1.contains(vtable.table, newContainer) &&
                !roosterjs_editor_dom_1.contains(td, newContainer, true /*treatSameNodeAsContain*/)) {
                if (targetTd) {
                    editor.select(targetTd, 0 /* Begin */);
                }
                else {
                    editor.select(vtable.table, isUp ? -2 /* Before */ : -3 /* After */);
                }
            }
        });
    },
};
function cacheGetTableCell(event, editor) {
    var firstTd = roosterjs_editor_core_1.cacheGetElementAtCursor(editor, event, 'TD,TH,LI');
    return roosterjs_editor_dom_1.getTagOfNode(firstTd) == 'LI' ? null : firstTd;
}


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/HyperLink/HyperLink.ts":
/*!**********************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/HyperLink/HyperLink.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * An editor plugin that show a tooltip for existing link
 */
var HyperLink = /** @class */ (function () {
    /**
     * Create a new instance of HyperLink class
     * @param getTooltipCallback A callback function to get tooltip text for an existing hyperlink.
     * Default value is to return the href itself. If null, there will be no tooltip text.
     * @param target (Optional) Target window name for hyperlink. If null, will use "_blank"
     * @param onLinkClick (Optional) Open link callback
     */
    function HyperLink(getTooltipCallback, target, onLinkClick) {
        if (getTooltipCallback === void 0) { getTooltipCallback = function (href) { return href; }; }
        var _this = this;
        this.getTooltipCallback = getTooltipCallback;
        this.target = target;
        this.onLinkClick = onLinkClick;
        this.onMouse = function (e) {
            var a = _this.editor.getElementAtCursor('a[href]', e.srcElement);
            var href = _this.tryGetHref(a);
            if (href) {
                _this.editor.setEditorDomAttribute('title', e.type == 'mouseover' ? _this.getTooltipCallback(href, a) : null);
            }
        };
    }
    /**
     * Get a friendly name of  this plugin
     */
    HyperLink.prototype.getName = function () {
        return 'Hyperlink';
    };
    /**
     * Initialize this plugin
     * @param editor The editor instance
     */
    HyperLink.prototype.initialize = function (editor) {
        this.editor = editor;
        this.disposer =
            this.getTooltipCallback &&
                editor.addDomEventHandler({ mouseover: this.onMouse, mouseout: this.onMouse });
    };
    /**
     * Dispose this plugin
     */
    HyperLink.prototype.dispose = function () {
        this.disposer();
        this.disposer = null;
        this.editor = null;
    };
    /**
     * Handle events triggered from editor
     * @param event PluginEvent object
     */
    HyperLink.prototype.onPluginEvent = function (event) {
        if (event.eventType == 5 /* MouseUp */) {
            var anchor = this.editor.getElementAtCursor('A', event.rawEvent.srcElement);
            if (anchor) {
                if (this.onLinkClick) {
                    this.onLinkClick(anchor, event.rawEvent);
                    return;
                }
                var href = void 0;
                if (!roosterjs_editor_dom_1.Browser.isFirefox &&
                    (href = this.tryGetHref(anchor)) &&
                    (roosterjs_editor_dom_1.Browser.isMac ? event.rawEvent.metaKey : event.rawEvent.ctrlKey)) {
                    try {
                        var target = this.target || '_blank';
                        var window_1 = this.editor.getDocument().defaultView;
                        window_1.open(href, target);
                    }
                    catch (_a) { }
                }
            }
        }
    };
    /**
     * Try get href from an anchor element
     * The reason this is put in a try-catch is that
     * it has been seen that accessing href may throw an exception, in particular on IE/Edge
     */
    HyperLink.prototype.tryGetHref = function (anchor) {
        try {
            return anchor ? anchor.href : null;
        }
        catch (_a) { }
    };
    return HyperLink;
}());
exports.default = HyperLink;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Paste/Paste.ts":
/*!**************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Paste/Paste.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buildClipboardData_1 = __webpack_require__(/*! ./buildClipboardData */ "./packages/roosterjs-editor-plugins/lib/Paste/buildClipboardData.ts");
var fragmentHandler_1 = __webpack_require__(/*! ./fragmentHandler */ "./packages/roosterjs-editor-plugins/lib/Paste/fragmentHandler.ts");
var textToHtml_1 = __webpack_require__(/*! ./textToHtml */ "./packages/roosterjs-editor-plugins/lib/Paste/textToHtml.ts");
var roosterjs_editor_api_1 = __webpack_require__(/*! roosterjs-editor-api */ "./packages/roosterjs-editor-api/lib/index.ts");
var roosterjs_editor_api_2 = __webpack_require__(/*! roosterjs-editor-api */ "./packages/roosterjs-editor-api/lib/index.ts");
var roosterjs_html_sanitizer_1 = __webpack_require__(/*! roosterjs-html-sanitizer */ "./packages/roosterjs-html-sanitizer/lib/index.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/**
 * Paste plugin, handles onPaste event and paste content into editor
 */
var Paste = /** @class */ (function () {
    /**
     * Create an instance of Paste
     * @param preserved Not used. Preserved parameter only used for compatibility with old code
     * @param attributeCallbacks A set of callbacks to help handle html attribute during sanitization
     */
    function Paste(preserved, attributeCallbacks) {
        var _this = this;
        this.onPaste = function (event) {
            buildClipboardData_1.default(event, _this.editor, function (items) {
                _this.pasteOriginal({
                    snapshotBeforePaste: null,
                    originalFormat: _this.getCurrentFormat(),
                    types: items.types,
                    image: items.image,
                    text: items.text,
                    rawHtml: items.html,
                    html: items.html ? _this.sanitizeHtml(items.html) : textToHtml_1.default(items.text),
                });
            });
        };
        this.sanitizer = new roosterjs_html_sanitizer_1.HtmlSanitizer({
            attributeCallbacks: attributeCallbacks,
        });
    }
    /**
     * Get a friendly name of  this plugin
     */
    Paste.prototype.getName = function () {
        return 'Paste';
    };
    /**
     * Initialize this plugin. This should only be called from Editor
     * @param editor Editor instance
     */
    Paste.prototype.initialize = function (editor) {
        this.editor = editor;
        this.pasteDisposer = editor.addDomEventHandler('paste', this.onPaste);
    };
    /**
     * Dispose this plugin
     */
    Paste.prototype.dispose = function () {
        this.pasteDisposer();
        this.pasteDisposer = null;
        this.editor = null;
    };
    /**
     * Paste into editor using passed in clipboardData with original format
     * @param clipboardData The clipboardData to paste
     */
    Paste.prototype.pasteOriginal = function (clipboardData) {
        this.paste(clipboardData, this.detectPasteOption(clipboardData));
    };
    /**
     * Paste plain text into editor using passed in clipboardData
     * @param clipboardData The clipboardData to paste
     */
    Paste.prototype.pasteText = function (clipboardData) {
        this.paste(clipboardData, 1 /* PasteText */);
    };
    /**
     * Paste into editor using passed in clipboardData with curent format
     * @param clipboardData The clipboardData to paste
     */
    Paste.prototype.pasteAndMergeFormat = function (clipboardData) {
        this.paste(clipboardData, this.detectPasteOption(clipboardData), true /*mergeFormat*/);
    };
    Paste.prototype.detectPasteOption = function (clipboardData) {
        return clipboardData.text || !clipboardData.image
            ? 0 /* PasteHtml */
            : 2 /* PasteImage */;
    };
    Paste.prototype.paste = function (clipboardData, pasteOption, mergeCurrentFormat) {
        var document = this.editor.getDocument();
        var fragment = document.createDocumentFragment();
        if (pasteOption == 0 /* PasteHtml */) {
            var html = clipboardData.html;
            var nodes = roosterjs_editor_dom_1.fromHtml(html, document);
            for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                var node = nodes_1[_i];
                if (mergeCurrentFormat) {
                    this.applyTextFormat(node, clipboardData.originalFormat);
                }
                fragment.appendChild(node);
            }
        }
        var event = {
            eventType: 8 /* BeforePaste */,
            clipboardData: clipboardData,
            fragment: fragment,
            pasteOption: pasteOption,
        };
        this.editor.triggerEvent(event, true /*broadcast*/);
        this.internalPaste(event);
    };
    Paste.prototype.internalPaste = function (event) {
        var _this = this;
        var clipboardData = event.clipboardData, fragment = event.fragment, pasteOption = event.pasteOption;
        this.editor.focus();
        this.editor.addUndoSnapshot(function () {
            if (clipboardData.snapshotBeforePaste == null) {
                clipboardData.snapshotBeforePaste = _this.editor.getContent(false /*triggerExtractContentEvent*/, true /*markSelection*/);
            }
            else {
                _this.editor.setContent(clipboardData.snapshotBeforePaste);
            }
            switch (pasteOption) {
                case 0 /* PasteHtml */:
                    _this.editor.insertNode(fragment);
                    break;
                case 1 /* PasteText */:
                    var html = textToHtml_1.default(clipboardData.text);
                    _this.editor.insertContent(html);
                    break;
                case 2 /* PasteImage */:
                    roosterjs_editor_api_2.insertImage(_this.editor, clipboardData.image);
                    break;
            }
            return clipboardData;
        }, "Paste" /* Paste */);
    };
    Paste.prototype.applyTextFormat = function (node, format) {
        var leaf = roosterjs_editor_dom_1.getFirstLeafNode(node);
        var parents = [];
        while (leaf) {
            if (leaf.nodeType == 3 /* Text */ &&
                leaf.parentNode &&
                parents.indexOf(leaf.parentNode) < 0) {
                parents.push(leaf.parentNode);
            }
            leaf = roosterjs_editor_dom_1.getNextLeafSibling(node, leaf);
        }
        for (var _i = 0, parents_1 = parents; _i < parents_1.length; _i++) {
            var parent_1 = parents_1[_i];
            roosterjs_editor_dom_1.applyFormat(parent_1, format);
        }
    };
    Paste.prototype.getCurrentFormat = function () {
        var format = roosterjs_editor_api_1.getFormatState(this.editor);
        return format
            ? {
                fontFamily: format.fontName,
                fontSize: format.fontSize,
                textColor: format.textColor,
                backgroundColor: format.backgroundColor,
                bold: format.isBold,
                italic: format.isItalic,
                underline: format.isUnderline,
            }
            : {};
    };
    Paste.prototype.sanitizeHtml = function (html) {
        var doc = roosterjs_html_sanitizer_1.htmlToDom(html, true /*preserveFragmentOnly*/, fragmentHandler_1.default);
        if (doc && doc.body) {
            this.sanitizer.convertGlobalCssToInlineCss(doc);
            var range = this.editor.getSelectionRange();
            var element = range && roosterjs_editor_dom_1.Position.getStart(range).normalize().element;
            var currentStyles = roosterjs_html_sanitizer_1.getInheritableStyles(element);
            this.sanitizer.sanitize(doc.body, currentStyles);
            return doc.body.innerHTML;
        }
        return '';
    };
    return Paste;
}());
exports.default = Paste;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Paste/buildClipboardData.ts":
/*!***************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Paste/buildClipboardData.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var CONTAINER_HTML = '<div contenteditable style="width: 1px; height: 1px; overflow: hidden; position: fixed; top: 0; left; 0; -webkit-user-select: text"></div>';
/**
 * Build ClipboardData from a paste event
 * @param event The paste event
 * @param editor The editor
 * @param callback Callback function when data is ready
 */
function buildClipboardData(event, editor, callback) {
    roosterjs_editor_dom_1.extractClipboardEvent(event, function (items) {
        if (items.html === undefined) {
            retrieveHtmlViaTempDiv(editor, function (html) {
                items.html = html;
                callback(items);
            });
        }
        else {
            callback(items);
        }
    });
}
exports.default = buildClipboardData;
function retrieveHtmlViaTempDiv(editor, callback) {
    // cache original selection range in editor
    var originalSelectionRange = editor.getSelectionRange();
    var tempDiv = getTempDivForPaste(editor);
    tempDiv.focus();
    editor.runAsync(function () {
        // restore original selection range in editor
        editor.select(originalSelectionRange);
        callback(tempDiv.innerHTML);
        tempDiv.style.display = 'none';
        tempDiv.innerHTML = '';
    });
}
function getTempDivForPaste(editor) {
    var tempDiv = editor.getCustomData('PasteDiv', function () {
        var pasteDiv = roosterjs_editor_dom_1.fromHtml(CONTAINER_HTML, editor.getDocument())[0];
        editor.insertNode(pasteDiv, {
            position: 3 /* Outside */,
            updateCursor: false,
            replaceSelection: false,
            insertOnNewLine: false,
        });
        return pasteDiv;
    }, function (pasteDiv) {
        pasteDiv.parentNode.removeChild(pasteDiv);
    });
    tempDiv.style.display = '';
    return tempDiv;
}


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Paste/excelConverter/convertPastedContentFromExcel.ts":
/*!*****************************************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Paste/excelConverter/convertPastedContentFromExcel.ts ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_html_sanitizer_1 = __webpack_require__(/*! roosterjs-html-sanitizer */ "./packages/roosterjs-html-sanitizer/lib/index.ts");
function convertPastedContentFromExcel(doc) {
    var sanitizer = new roosterjs_html_sanitizer_1.HtmlSanitizer({
        styleCallbacks: {
            border: function (value, element) { return value != 'none' || element.style.border != 'none'; },
        },
        additionalAllowAttributes: ['class'],
    });
    sanitizer.sanitize(doc.body);
    var styleNode = doc.createElement('style');
    doc.body.appendChild(styleNode);
    styleNode.innerHTML = 'td {border: solid 1px #d4d4d4}';
    sanitizer.convertGlobalCssToInlineCss(doc);
}
exports.default = convertPastedContentFromExcel;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Paste/fragmentHandler.ts":
/*!************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Paste/fragmentHandler.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var convertPastedContentFromExcel_1 = __webpack_require__(/*! ./excelConverter/convertPastedContentFromExcel */ "./packages/roosterjs-editor-plugins/lib/Paste/excelConverter/convertPastedContentFromExcel.ts");
var convertPastedContentFromWord_1 = __webpack_require__(/*! ./wordConverter/convertPastedContentFromWord */ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/convertPastedContentFromWord.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var roosterjs_html_sanitizer_1 = __webpack_require__(/*! roosterjs-html-sanitizer */ "./packages/roosterjs-html-sanitizer/lib/index.ts");
var WORD_ATTRIBUTE_NAME = 'xmlns:w';
var WORD_ATTRIBUTE_VALUE = 'urn:schemas-microsoft-com:office:word';
var EXCEL_ATTRIBUTE_NAME = 'xmlns:x';
var EXCEL_ATTRIBUTE_VALUE = 'urn:schemas-microsoft-com:office:excel';
var LAST_TD_END_REGEX = /<\/\s*td\s*>((?!<\/\s*tr\s*>)[\s\S])*$/i;
var LAST_TR_END_REGEX = /<\/\s*tr\s*>((?!<\/\s*table\s*>)[\s\S])*$/i;
var LAST_TR_REGEX = /<tr[^>]*>[^<]*/i;
var LAST_TABLE_REGEX = /<table[^>]*>[^<]*/i;
function fragmentHandler(doc, source) {
    var _a = roosterjs_html_sanitizer_1.splitWithFragment(source), html = _a[0], before = _a[1];
    var firstNode = doc && doc.body && doc.querySelector('html');
    if (roosterjs_editor_dom_1.getTagOfNode(firstNode) == 'HTML') {
        if (firstNode.getAttribute(WORD_ATTRIBUTE_NAME) == WORD_ATTRIBUTE_VALUE) {
            // Handle HTML copied from MS Word
            doc.body.innerHTML = html;
            convertPastedContentFromWord_1.default(doc);
        }
        else if (firstNode.getAttribute(EXCEL_ATTRIBUTE_NAME) == EXCEL_ATTRIBUTE_VALUE) {
            // Handle HTML copied from MS Excel
            if (html.match(LAST_TD_END_REGEX)) {
                var trMatch = before.match(LAST_TR_REGEX);
                var tr = trMatch ? trMatch[0] : '<TR>';
                html = tr + html + '</TR>';
            }
            if (html.match(LAST_TR_END_REGEX)) {
                var tableMatch = before.match(LAST_TABLE_REGEX);
                var table = tableMatch ? tableMatch[0] : '<TABLE>';
                html = table + html + '</TABLE>';
            }
            doc.body.innerHTML = html;
            convertPastedContentFromExcel_1.default(doc);
        }
        else {
            // Handle HTML copied from other places
            doc.body.innerHTML = html;
        }
    }
}
exports.default = fragmentHandler;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Paste/textToHtml.ts":
/*!*******************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Paste/textToHtml.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var ZERO_WIDTH_SPACE = '&#8203;';
/**
 * Convert plain to HTML
 * @param text The plain text to convert
 * @returns HTML string to present the input text
 */
function textToHtml(text) {
    text = (text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&quot;')
        .replace(/^ /gm, '&nbsp;')
        .replace(/\r/g, '');
    var lines = text.split('\n');
    if (lines.length == 2) {
        text = "<span>" + lines[0] + "<br></span><span>" + lines[1] + "</span>";
    }
    else if (lines.length > 2) {
        text = '';
        var lineEnd_1 = roosterjs_editor_dom_1.Browser.isIEOrEdge ? ZERO_WIDTH_SPACE : '<br>';
        lines.forEach(function (line, i) {
            if (i == 0) {
                text += "<span>" + line + "<br></span>";
            }
            else if (i == lines.length - 1) {
                text += "<span>" + line + "</span>";
            }
            else {
                text += "<div>" + line + lineEnd_1 + "</div>";
            }
        });
    }
    text = text.replace(/\s\s/g, ' &nbsp;');
    return text;
}
exports.default = textToHtml;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/CustomData.ts":
/*!*********************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/CustomData.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** NodeId attribute */
var NODE_ID_ATTRIBUTE_NAME = 'NodeId';
/** create an empty CustomData */
function createCustomData() {
    return {
        dict: {},
        nextNodeId: 1,
    };
}
exports.createCustomData = createCustomData;
/**
 * Sets the specified object data
 */
function setObject(customData, element, key, value) {
    // Get the id for the element
    if (element.nodeType == 1 /* Element */) {
        var id = getAndSetNodeId(customData, element);
        if (id != '') {
            // Get the values for the element
            if (!customData.dict[id]) {
                // First time dictionary creation
                customData.dict[id] = {};
            }
            customData.dict[id][key] = value;
        }
    }
}
exports.setObject = setObject;
/**
 * Reads the specified object data
 */
function getObject(customData, element, key) {
    if (element.nodeType == 1 /* Element */) {
        var id = getAndSetNodeId(customData, element);
        if (id != '') {
            return customData.dict[id] && customData.dict[id][key];
        }
    }
    return null;
}
exports.getObject = getObject;
/** Get the unique id for the specified node... */
function getAndSetNodeId(customData, element) {
    var id = element.getAttribute(NODE_ID_ATTRIBUTE_NAME);
    if (!id) {
        id = customData.nextNodeId.toString();
        customData.nextNodeId++;
        element.setAttribute(NODE_ID_ATTRIBUTE_NAME, id);
    }
    return id;
}


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/LevelLists.ts":
/*!*********************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/LevelLists.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** create an empty LevelLists */
function createLevelLists() {
    return {
        listsMetadata: {},
        currentUniqueListId: -1,
    };
}
exports.createLevelLists = createLevelLists;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/WordConverterArguments.ts":
/*!*********************************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/WordConverterArguments.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LevelLists_1 = __webpack_require__(/*! ./LevelLists */ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/LevelLists.ts");
/** create an empty WordConverterArguments */
function createWordConverterArguments(nodes) {
    return {
        nodes: nodes,
        currentIndex: 0,
        lists: {},
        listItems: [],
        currentListIdsByLevels: [LevelLists_1.createLevelLists()],
        lastProcessedItem: null,
    };
}
exports.createWordConverterArguments = createWordConverterArguments;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/convertPastedContentFromWord.ts":
/*!***************************************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/convertPastedContentFromWord.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wordConverter_1 = __webpack_require__(/*! ./wordConverter */ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/wordConverter.ts");
var WordConverterArguments_1 = __webpack_require__(/*! ./WordConverterArguments */ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/WordConverterArguments.ts");
var roosterjs_html_sanitizer_1 = __webpack_require__(/*! roosterjs-html-sanitizer */ "./packages/roosterjs-html-sanitizer/lib/index.ts");
var converterUtils_1 = __webpack_require__(/*! ./converterUtils */ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/converterUtils.ts");
/** Converts all the Word generated list items in the specified node into standard HTML UL and OL tags */
function convertPastedContentFromWord(doc) {
    var _a;
    var sanitizer = new roosterjs_html_sanitizer_1.HtmlSanitizer({
        elementCallbacks: (_a = {},
            _a['O:P'] = function () { return false; },
            _a),
        additionalAllowAttributes: ['class'],
    });
    sanitizer.sanitize(doc.body);
    var wordConverter = wordConverter_1.createWordConverter();
    // First find all the nodes that we need to check for list item information
    // This call will return all the p and header elements under the root node.. These are the elements that
    // Word uses a list items, so we'll only process them and avoid walking the whole tree.
    var elements = doc.querySelectorAll('p');
    if (elements.length > 0) {
        wordConverter.wordConverterArgs = WordConverterArguments_1.createWordConverterArguments(elements);
        if (converterUtils_1.processNodesDiscovery(wordConverter)) {
            converterUtils_1.processNodeConvert(wordConverter);
        }
    }
}
exports.default = convertPastedContentFromWord;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/converterUtils.ts":
/*!*************************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/converterUtils.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LevelLists_1 = __webpack_require__(/*! ./LevelLists */ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/LevelLists.ts");
var CustomData_1 = __webpack_require__(/*! ./CustomData */ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/CustomData.ts");
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
/** Word list metadata style name */
var LOOKUP_DEPTH = 5;
/** Name for the word list id property in the custom data */
var UNIQUE_LIST_ID_CUSTOM_DATA = 'UniqueListId';
/** Word list metadata style name */
var MSO_LIST_STYLE_NAME = 'mso-list';
/** Regular expression to match line breaks */
var LINE_BREAKS = /[\n|\r]/gi;
/**
 * Handles the pass 1: Discovery
 * During discovery, we'll parse the metadata out of the elements and store it in the list items dictionary.
 * We'll detect cases where the list items for a particular ordered list are not next to each other. Word does these
 * for numbered headers, and we don't want to convert those, because the numbering would be completely wrong.
 */
function processNodesDiscovery(wordConverter) {
    var args = wordConverter.wordConverterArgs;
    while (args.currentIndex < args.nodes.length) {
        var node = args.nodes.item(args.currentIndex);
        // Try to get the list metadata for the specified node
        var itemMetadata = getListItemMetadata(node);
        if (itemMetadata) {
            var levelInfo = args.currentListIdsByLevels[itemMetadata.level - 1] || LevelLists_1.createLevelLists();
            args.currentListIdsByLevels[itemMetadata.level - 1] = levelInfo;
            // We need to drop some list information if this is not an item next to another
            if (args.lastProcessedItem && getRealPreviousSibling(node) != args.lastProcessedItem) {
                // This list item is not next to the previous one. This means that there is some content in between them
                // so we need to reset our list of list ids per level
                resetCurrentLists(args);
            }
            // Get the list metadata for the list that will hold this item
            var listMetadata = levelInfo.listsMetadata[itemMetadata.wordListId];
            if (!listMetadata) {
                // Get the first item fake bullet.. This will be used later to check what is the right type of list
                var firstFakeBullet = getFakeBulletText(node, LOOKUP_DEPTH);
                // This is a the first item of a list.. We'll create the list metadata using the information
                // we already have from this first item
                listMetadata = {
                    numberOfItems: 0,
                    uniqueListId: wordConverter.nextUniqueId++,
                    firstFakeBullet: firstFakeBullet,
                    // If the bullet we got is emtpy or not found, we ignore the list out.. this means
                    // that this is not an item we need to convert of that the format doesn't match what
                    // we are expecting
                    ignore: !firstFakeBullet || firstFakeBullet.length == 0,
                    // We'll use the first fake bullet to try to figure out which type of list we create. If this list has a second
                    // item, we'll perform a better comparasion, but for one item lists, this will be check that will determine the list type
                    tagName: getFakeBulletTagName(firstFakeBullet),
                };
                levelInfo.listsMetadata[itemMetadata.wordListId] = listMetadata;
                args.lists[listMetadata.uniqueListId.toString()] = listMetadata;
            }
            else if (!listMetadata.ignore && listMetadata.numberOfItems == 1) {
                // This is the second item we've seen for this list.. we'll compare the 2 fake bullet
                // items we have an decide if we create ordered or unordered lists based on this.
                // This is the best way we can do this since we cannot read the metadata that Word
                // puts in the head of the HTML...
                var secondFakeBullet = getFakeBulletText(node, LOOKUP_DEPTH);
                listMetadata.tagName =
                    listMetadata.firstFakeBullet == secondFakeBullet ? 'UL' : 'OL';
            }
            // Set the unique id to the list
            itemMetadata.uniqueListId = listMetadata.uniqueListId;
            // Check if we need to ignore this list... we'll either know already that we need to ignore
            // it, or we'll know it because the previous list items are not next to this one
            if (listMetadata.ignore ||
                (listMetadata.tagName == 'OL' &&
                    listMetadata.numberOfItems > 0 &&
                    levelInfo.currentUniqueListId != itemMetadata.uniqueListId)) {
                // We need to ignore this item... and we also need to forget about the lists that
                // are not at the root level
                listMetadata.ignore = true;
                args.currentListIdsByLevels[0].currentUniqueListId = -1;
                args.currentListIdsByLevels = args.currentListIdsByLevels.slice(0, 1);
            }
            else {
                // This is an item we don't need to ignore... If added lists deep under this one before
                // we'll drop their ids from the list of ids per level.. this is because this list item
                // breaks the deeper lists.
                if (args.currentListIdsByLevels.length > itemMetadata.level) {
                    args.currentListIdsByLevels = args.currentListIdsByLevels.slice(0, itemMetadata.level);
                }
                levelInfo.currentUniqueListId = itemMetadata.uniqueListId;
                // Add the list item into the list of items to be processed
                args.listItems.push(itemMetadata);
                listMetadata.numberOfItems++;
            }
            args.lastProcessedItem = node;
        }
        else {
            // Here, we know that this is not a list item, but we'll want to check if it is one "no bullet" list items...
            // these can be created by creating a bullet and hitting delete on it it... The content will continue to be indented, but there will
            // be no bullet and the list will continue correctly after that. Visually, it looks like the previous item has multiple lines, but
            // the HTML generated has multiple paragraphs with the same class. We'll merge these when we find them, so the logic doesn't skips
            // the list conversion thinking that the list items are not together...
            var last = args.lastProcessedItem;
            if (last &&
                getRealPreviousSibling(node) == last &&
                node.tagName == last.tagName &&
                node.className == last.className) {
                // Add 2 line breaks and move all the nodes to the last item
                last.appendChild(last.ownerDocument.createElement('br'));
                last.appendChild(last.ownerDocument.createElement('br'));
                while (node.firstChild != null) {
                    last.appendChild(node.firstChild);
                }
                // Remove the item that we don't need anymore
                node.parentNode.removeChild(node);
            }
        }
        // Move to the next element are return true if more elements need to be processed
        args.currentIndex++;
    }
    return args.listItems.length > 0;
}
exports.processNodesDiscovery = processNodesDiscovery;
/**
 * Handles the pass 2: Conversion
 * During conversion, we'll go over the elements that belong to a list that we've marked as a list to convert, and we'll perform the
 * conversion needed
 */
function processNodeConvert(wordConverter) {
    var args = wordConverter.wordConverterArgs;
    args.currentIndex = 0;
    while (args.currentIndex < args.listItems.length) {
        var metadata = args.listItems[args.currentIndex];
        var node = metadata.originalNode;
        var listMetadata = args.lists[metadata.uniqueListId.toString()];
        if (!listMetadata.ignore) {
            // We have a list item that we need to convert, get or create the list
            // that hold this item out
            var list = getOrCreateListForNode(wordConverter, node, metadata, listMetadata);
            if (list) {
                // Clean the element out.. this call gets rid of the fake bullet and unneeded nodes
                cleanupListIgnore(node, LOOKUP_DEPTH);
                // Create a new list item and transfer the children
                var li = node.ownerDocument.createElement('LI');
                while (node.firstChild) {
                    li.appendChild(node.firstChild);
                }
                // Append the list item into the list
                list.appendChild(li);
                // Remove the node we just converted
                node.parentNode.removeChild(node);
                if (listMetadata.tagName == 'UL') {
                    wordConverter.numBulletsConverted++;
                }
                else {
                    wordConverter.numNumberedConverted++;
                }
            }
        }
        args.currentIndex++;
    }
    return wordConverter.numBulletsConverted > 0 || wordConverter.numNumberedConverted > 0;
}
exports.processNodeConvert = processNodeConvert;
/**
 * Gets or creates the list (UL or OL) that holds this item out based on the
 * items content and the specified metadata
 */
function getOrCreateListForNode(wordConverter, node, metadata, listMetadata) {
    // First get the last list next to this node under the specified level. This code
    // path will return the list or will create lists if needed
    var list = recurringGetOrCreateListAtNode(node, metadata.level, listMetadata);
    // Here use the unique list ID to detect if we have the right list...
    // it is possible to have 2 different lists next to each other with different formats, so
    // we want to detect this an create separate lists for those cases
    var listId = CustomData_1.getObject(wordConverter.customData, list, UNIQUE_LIST_ID_CUSTOM_DATA);
    // If we have a list with and ID, but the ID is different than the ID for this list item, this
    // is a completely new list, so we'll append a new list for that
    if ((listId && listId != metadata.uniqueListId) || (!listId && list.firstChild)) {
        var newList = node.ownerDocument.createElement(listMetadata.tagName);
        list.parentNode.insertBefore(newList, list.nextSibling);
        list = newList;
    }
    // Set the list id into the custom data
    CustomData_1.setObject(wordConverter.customData, list, UNIQUE_LIST_ID_CUSTOM_DATA, metadata.uniqueListId);
    // This call will convert the list if needed to the right type of list required. This can happen
    // on the cases where the first list item for this list is located after a deeper list. for that
    // case, we will have created a UL for it, and we may need to convert it
    return convertListIfNeeded(wordConverter, list, listMetadata);
}
/**
 * Converts the list between UL and OL if needed, by using the fake bullet and
 * information already stored in the list itself
 */
function convertListIfNeeded(wordConverter, list, listMetadata) {
    // Check if we need to convert the list out
    if (listMetadata.tagName != roosterjs_editor_dom_1.getTagOfNode(list)) {
        // We have the wrong list type.. convert it, set the id again and tranfer all the childs
        var newList = list.ownerDocument.createElement(listMetadata.tagName);
        CustomData_1.setObject(wordConverter.customData, newList, UNIQUE_LIST_ID_CUSTOM_DATA, CustomData_1.getObject(wordConverter.customData, list, UNIQUE_LIST_ID_CUSTOM_DATA));
        while (list.firstChild) {
            newList.appendChild(list.firstChild);
        }
        list.parentNode.insertBefore(newList, list);
        list.parentNode.removeChild(list);
        list = newList;
    }
    return list;
}
/**
 * Gets or creates the specified list
 */
function recurringGetOrCreateListAtNode(node, level, listMetadata) {
    var parent = null;
    var possibleList;
    if (level == 1) {
        // Root case, we'll check if the list is the previous sibling of the node
        possibleList = getRealPreviousSibling(node);
    }
    else {
        // If we get here, we are looking for level 2 or deeper... get the upper list
        // and check if the last element is a list
        parent = recurringGetOrCreateListAtNode(node, level - 1, null);
        possibleList = parent.lastChild;
    }
    // Check the element that we got and verify that it is a list
    if (possibleList && possibleList.nodeType == 1 /* Element */) {
        var tag = roosterjs_editor_dom_1.getTagOfNode(possibleList);
        if (tag == 'UL' || tag == 'OL') {
            // We have a list.. use it
            return possibleList;
        }
    }
    // If we get here, it means we don't have a list and we need to create one
    // this code path will always create new lists as UL lists
    var newList = node.ownerDocument.createElement(listMetadata ? listMetadata.tagName : 'UL');
    if (level == 1) {
        // For level 1, we'll insert the list beofre the node
        node.parentNode.insertBefore(newList, node);
    }
    else {
        // Any level 2 or above, we insert the list as the last
        // child of the upper level list
        parent.appendChild(newList);
    }
    return newList;
}
/**
 * Cleans up the node children by removing the childs marked as mso-list: Ignore.
 * This nodes hold the fake bullet information that Word puts in and when
 * conversion is happening, we want to get rid of these elements
 */
function cleanupListIgnore(node, levels) {
    var nodesToRemove = [];
    for (var child = node.firstChild; child; child = child.nextSibling) {
        // Clean up the item internally first if we need to based on the number of levels
        if (child.nodeType == 1 /* Element */ && levels > 1) {
            cleanupListIgnore(child, levels - 1);
        }
        // Try to convert word comments into ignore elements if we haven't done so for this element
        child = fixWordListComments(child, true /*removeComments*/);
        // Check if we can remove this item out
        if (isEmptySpan(child) || isIgnoreNode(child)) {
            nodesToRemove.push(child);
        }
    }
    nodesToRemove.forEach(function (child) { return node.removeChild(child); });
}
/**
 * Reads the word list metadada out of the specified node. If the node
 * is not a Word list item, it returns null.
 */
function getListItemMetadata(node) {
    if (node.nodeType == 1 /* Element */) {
        var listatt = getStyleValue(node, MSO_LIST_STYLE_NAME);
        if (listatt && listatt.length > 0) {
            try {
                // Word mso-list property holds 3 space separated values in the following format: lst1 level1 lfo0
                // Where:
                // (0) List identified for the metadata in the <head> of the document. We cannot read the <head> metada
                // (1) Level of the list. This also maps to the <head> metadata that we cannot read, but
                // for almost all cases, it maps to the list identation (or level). We'll use it as the
                // list indentation value
                // (2) Contains a specific list identifier.
                // Example value: "l0 level1 lfo1"
                var listprops = listatt.split(' ');
                if (listprops.length == 3) {
                    return {
                        level: parseInt(listprops[1].substr('level'.length)),
                        wordListId: listatt,
                        originalNode: node,
                        uniqueListId: 0,
                    };
                }
            }
            catch (e) { }
        }
    }
    return null;
}
function isFakeBullet(fakeBullet) {
    return ['o', '·', '§', '-'].indexOf(fakeBullet) >= 0;
}
/** Given a fake bullet text, returns the type of list that should be used for it */
function getFakeBulletTagName(fakeBullet) {
    return isFakeBullet(fakeBullet) ? 'UL' : 'OL';
}
/**
 * Finds the fake bullet text out of the specified node and returns it. For images, it will return
 * a bullet string. If not found, it returns null...
 */
function getFakeBulletText(node, levels) {
    // Word uses the following format for their bullets:
    // <p style="mso-list:l1 level1 lfo2">
    // <span style="...">
    // <span style="mso-list:Ignore">1.<span style="...">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
    // </span>
    // Content here...
    // </p>
    //
    // Basically, we need to locate the mso-list:Ignore SPAN, which holds either one text or image node. That
    // text or image node will be the fake bullet we are looking for
    var result = null;
    var child = node.firstChild;
    while (!result && child) {
        // First, check if we need to convert the Word list comments into real elements
        child = fixWordListComments(child, true /*removeComments*/);
        // Check if this is the node that holds the fake bullets (mso-list: Ignore)
        if (isIgnoreNode(child)) {
            // Yes... this is the node that holds either the text or image data
            result = child.textContent.trim();
            // This is the case for image case
            if (result.length == 0) {
                result = 'o';
            }
        }
        else if (child.nodeType == 1 /* Element */ && levels > 1) {
            // If this is an element and we are not in the last level, try to get the fake bullet
            // out of the child
            result = getFakeBulletText(child, levels - 1);
        }
        child = child.nextSibling;
    }
    return result;
}
/**
 * If the specified element is a Word List comments, this code verifies and fixes
 * the markup when needed to ensure that Chrome bullet conversions work as expected
 * -----
 * We'll convert <!--[if !supportLists]--> and <!--[endif]--> comments into
 * <span style="mso-list:Ignore"></span>... Chrome has a bug where it drops the
 * styles of the span, but we'll use these comments to recreate them out
 */
function fixWordListComments(child, removeComments) {
    if (child.nodeType == 8 /* Comment */) {
        var value = child.data;
        if (value && value.trim().toLowerCase() == '[if !supportlists]') {
            // We have a list ignore start, find the end.. We know is not more than
            // 3 nodes away, so we'll optimize our checks
            var nextElement = child;
            var endComment = null;
            for (var j = 0; j < 4; j++) {
                nextElement = getRealNextSibling(nextElement);
                if (!nextElement) {
                    break;
                }
                if (nextElement.nodeType == 8 /* Comment */) {
                    value = nextElement.data;
                    if (value && value.trim().toLowerCase() == '[endif]') {
                        endComment = nextElement;
                        break;
                    }
                }
            }
            // if we found the end node, wrap everything out
            if (endComment) {
                var newSpan = child.ownerDocument.createElement('span');
                newSpan.setAttribute('style', 'mso-list: ignore');
                nextElement = getRealNextSibling(child);
                while (nextElement != endComment) {
                    nextElement = nextElement.nextSibling;
                    newSpan.appendChild(nextElement.previousSibling);
                }
                // Insert the element out and use that one as the current child
                endComment.parentNode.insertBefore(newSpan, endComment);
                // Remove the comments out if the call specified it out
                if (removeComments) {
                    child.parentNode.removeChild(child);
                    endComment.parentNode.removeChild(endComment);
                }
                // Last, make sure we return the new element out instead of the comment
                child = newSpan;
            }
        }
    }
    return child;
}
/** Finds the real previous sibling, ignoring emtpy text nodes */
function getRealPreviousSibling(node) {
    var prevSibling = node;
    do {
        prevSibling = prevSibling.previousSibling;
    } while (prevSibling && isEmptyTextNode(prevSibling));
    return prevSibling;
}
/** Finds the real next sibling, ignoring empty text nodes */
function getRealNextSibling(node) {
    var nextSibling = node;
    do {
        nextSibling = nextSibling.nextSibling;
    } while (nextSibling && isEmptyTextNode(nextSibling));
    return nextSibling;
}
/**
 * Checks if the specified node is marked as a mso-list: Ignore. These
 * nodes need to be ignored when a list item is converted into standard
 * HTML lists
 */
function isIgnoreNode(node) {
    if (node.nodeType == 1 /* Element */) {
        var listatt = getStyleValue(node, MSO_LIST_STYLE_NAME);
        if (listatt && listatt.length > 0 && listatt.trim().toLowerCase() == 'ignore') {
            return true;
        }
    }
    return false;
}
/** Checks if the specified node is an empty span. */
function isEmptySpan(node) {
    return roosterjs_editor_dom_1.getTagOfNode(node) == 'SPAN' && !node.firstChild;
}
/** Reads the specified style value from the node */
function getStyleValue(node, styleName) {
    // Word uses non-standard names for the metadata that puts in the style of the element...
    // Most browsers will not provide the information for those unstandard values throug the node.style
    // property, so the only reliable way to read them is to get the attribute directly and do
    // the required parsing..
    var textStyle = node.getAttribute('style');
    if (textStyle && textStyle.length > 0 && textStyle.indexOf(styleName) >= 0) {
        // Split all the CSS name: value pairs
        var inStyles = textStyle.split(';');
        for (var i = 0; i < inStyles.length; i++) {
            // Split the name and value
            var nvpair = inStyles[i].split(':');
            if (nvpair.length == 2 && nvpair[0].trim() == styleName) {
                return nvpair[1].trim();
            }
        }
    }
    // As a backup mechanism, we'll still try to get the value from the style object
    // Dictionary styles = (Dictionary)(object)node.Style;
    // return (string)styles[styleName];
    return null;
}
/** Checks if the node is an empty text node that can be ignored */
function isEmptyTextNode(node) {
    // No node is empty
    if (!node) {
        return true;
    }
    // Empty text node is empty
    if (node.nodeType == 3 /* Text */) {
        var value = node.nodeValue;
        value = value.replace(LINE_BREAKS, '');
        return value.trim().length == 0;
    }
    // Span or Font with an empty child node is empty
    var tagName = roosterjs_editor_dom_1.getTagOfNode(node);
    if (node.firstChild == node.lastChild && (tagName == 'SPAN' || tagName == 'FONT')) {
        return isEmptyTextNode(node.firstChild);
    }
    // If not found, then this is not empty
    return false;
}
/** Resets the list */
function resetCurrentLists(args) {
    for (var i = 0; i < args.currentListIdsByLevels.length; i++) {
        var ll = args.currentListIdsByLevels[i];
        if (ll) {
            ll.currentUniqueListId = -1;
        }
    }
}


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/wordConverter.ts":
/*!************************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/wordConverter.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CustomData_1 = __webpack_require__(/*! ./CustomData */ "./packages/roosterjs-editor-plugins/lib/Paste/wordConverter/CustomData.ts");
/** create an empty WordConverter */
function createWordConverter() {
    return {
        nextUniqueId: 1,
        numBulletsConverted: 0,
        numNumberedConverted: 0,
        wordConverterArgs: null,
        customData: CustomData_1.createCustomData(),
    };
}
exports.createWordConverter = createWordConverter;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/TableResize/TableResize.ts":
/*!**************************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/TableResize/TableResize.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var TABLE_RESIZE_HANDLE_KEY = 'TABLE_RESIZE_HANDLE';
var HANDLE_WIDTH = 6;
var CONTAINER_HTML = "<div style=\"position: fixed; cursor: col-resize; width: " + HANDLE_WIDTH + "px; border: solid 0 #C6C6C6;\"></div>";
var TableResize = /** @class */ (function () {
    function TableResize() {
        var _this = this;
        this.pageX = -1;
        this.onMouseOver = function (e) {
            var node = (e.srcElement || e.target);
            if (_this.pageX < 0 &&
                node &&
                (node.tagName == 'TD' || node.tagName == 'TH') &&
                node != _this.td) {
                _this.td = node;
                _this.calcAndShowHandle();
            }
        };
        this.onMouseDown = function (e) {
            if (!_this.editor || _this.editor.isDisposed()) {
                return;
            }
            _this.pageX = e.pageX;
            _this.initialPageX = e.pageX;
            _this.attachMouseEvents();
            var handle = _this.getResizeHandle();
            handle.style.borderWidth = '0 1px';
            _this.cancelEvent(e);
        };
        this.onMouseMove = function (e) {
            _this.adjustHandle(e.pageX);
            _this.cancelEvent(e);
        };
        this.onMouseUp = function (e) {
            _this.detachMouseEvents();
            var handle = _this.getResizeHandle();
            handle.style.borderWidth = '0';
            var table = _this.editor.getElementAtCursor('TABLE', _this.td);
            var cellPadding = parseInt(table.cellPadding);
            cellPadding = isNaN(cellPadding) ? 0 : cellPadding;
            if (e.pageX != _this.initialPageX) {
                var newWidth_1 = _this.td.clientWidth -
                    cellPadding * 2 +
                    (e.pageX - _this.initialPageX) * (_this.isRtl(table) ? -1 : 1);
                _this.editor.addUndoSnapshot(function (start, end) {
                    _this.setTableColumnWidth(newWidth_1 + 'px');
                    _this.editor.select(start, end);
                }, "Format" /* Format */);
            }
            _this.pageX = -1;
            _this.calcAndShowHandle();
            _this.editor.focus();
            _this.cancelEvent(e);
        };
    }
    /**
     * Initialize this plugin. This should only be called from Editor
     * @param editor Editor instance
     */
    TableResize.prototype.initialize = function (editor) {
        this.editor = editor;
        this.onMouseOverDisposer = this.editor.addDomEventHandler('mouseover', this.onMouseOver);
    };
    /**
     * Get a friendly name of  this plugin
     */
    TableResize.prototype.getName = function () {
        return 'TableResize';
    };
    /**
     * Dispose this plugin
     */
    TableResize.prototype.dispose = function () {
        this.detachMouseEvents();
        this.editor = null;
        this.onMouseOverDisposer();
    };
    /**
     * Handle events triggered from editor
     * @param event PluginEvent object
     */
    TableResize.prototype.onPluginEvent = function (event) {
        if (this.td &&
            (event.eventType == 0 /* KeyDown */ ||
                event.eventType == 6 /* ContentChanged */ ||
                (event.eventType == 4 /* MouseDown */ && !this.clickIntoCurrentTd(event)))) {
            this.td = null;
            this.calcAndShowHandle();
        }
    };
    TableResize.prototype.clickIntoCurrentTd = function (event) {
        var mouseEvent = event.rawEvent;
        var target = mouseEvent.target;
        return (target instanceof Node &&
            roosterjs_editor_dom_1.contains(this.td, target, true /*treatSameNodeAsContain*/));
    };
    TableResize.prototype.calcAndShowHandle = function () {
        if (this.td) {
            var tr = this.editor.getElementAtCursor('TR', this.td);
            var table = this.editor.getElementAtCursor('TABLE', tr);
            if (tr && table) {
                var _a = this.getPosition(table), left = _a[0], top_1 = _a[1];
                var handle = this.getResizeHandle();
                left +=
                    this.td.offsetLeft +
                        (this.isRtl(table) ? 0 : this.td.offsetWidth - HANDLE_WIDTH);
                handle.style.display = '';
                handle.style.top = top_1 + 'px';
                handle.style.height = table.offsetHeight + 'px';
                handle.style.left = left + 'px';
            }
        }
        else {
            this.getResizeHandle().style.display = 'none';
        }
    };
    TableResize.prototype.adjustHandle = function (pageX) {
        var handle = this.getResizeHandle();
        handle.style.left = handle.offsetLeft + pageX - this.pageX + 'px';
        this.pageX = pageX;
    };
    TableResize.prototype.getPosition = function (e) {
        var parent = e.offsetParent;
        var _a = parent ? this.getPosition(parent) : [0, 0], left = _a[0], top = _a[1];
        return [left + e.offsetLeft - e.scrollLeft, top + e.offsetTop - e.scrollTop];
    };
    TableResize.prototype.getResizeHandle = function () {
        var _this = this;
        return this.editor.getCustomData(TABLE_RESIZE_HANDLE_KEY, function () {
            var document = _this.editor.getDocument();
            var handle = roosterjs_editor_dom_1.fromHtml(CONTAINER_HTML, document)[0];
            _this.editor.insertNode(handle, {
                position: 3 /* Outside */,
                updateCursor: false,
                replaceSelection: false,
                insertOnNewLine: false,
            });
            handle.addEventListener('mousedown', _this.onMouseDown);
            return handle;
        }, function (handle) {
            handle.removeEventListener('mousedown', _this.onMouseDown);
            handle.parentNode.removeChild(handle);
        });
    };
    TableResize.prototype.cancelEvent = function (e) {
        e.stopPropagation();
        e.preventDefault();
    };
    TableResize.prototype.attachMouseEvents = function () {
        if (this.editor && !this.editor.isDisposed()) {
            var document_1 = this.editor.getDocument();
            document_1.addEventListener('mousemove', this.onMouseMove, true);
            document_1.addEventListener('mouseup', this.onMouseUp, true);
        }
    };
    TableResize.prototype.detachMouseEvents = function () {
        if (this.editor && !this.editor.isDisposed()) {
            var document_2 = this.editor.getDocument();
            document_2.removeEventListener('mousemove', this.onMouseMove, true);
            document_2.removeEventListener('mouseup', this.onMouseUp, true);
        }
    };
    TableResize.prototype.setTableColumnWidth = function (width) {
        var _this = this;
        var vtable = new roosterjs_editor_dom_1.VTable(this.td);
        vtable.table.style.width = '';
        vtable.table.width = '';
        vtable.forEachCellOfCurrentColumn(function (cell) {
            if (cell.td) {
                cell.td.style.width = cell.td == _this.td ? width : '';
            }
        });
        vtable.writeBack();
        return this.editor.contains(this.td) ? this.td : vtable.getCurrentTd();
    };
    TableResize.prototype.isRtl = function (element) {
        return roosterjs_editor_dom_1.getComputedStyle(element, 'direction') == 'rtl';
    };
    return TableResize;
}());
exports.default = TableResize;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/Watermark/Watermark.ts":
/*!**********************************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/Watermark/Watermark.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var WATERMARK_SPAN_ID = '_rooster_watermarkSpan';
var WATERMARK_REGEX = new RegExp("<span[^>]*id=['\"]?" + WATERMARK_SPAN_ID + "['\"]?[^>]*>[^<]*</span>", 'ig');
/**
 * A watermark plugin to manage watermark string for roosterjs
 */
var Watermark = /** @class */ (function () {
    /**
     * Create an instance of Watermark plugin
     * @param watermark The watermark string
     */
    function Watermark(watermark, format) {
        var _this = this;
        this.watermark = watermark;
        this.format = format;
        this.handleWatermark = function () {
            _this.showHideWatermark(false /*ignoreCachedState*/);
        };
        this.format = this.format || {
            fontSize: '14px',
            textColor: '#aaa',
        };
    }
    /**
     * Get a friendly name of  this plugin
     */
    Watermark.prototype.getName = function () {
        return 'Watermark';
    };
    /**
     * Initialize this plugin. This should only be called from Editor
     * @param editor Editor instance
     */
    Watermark.prototype.initialize = function (editor) {
        this.editor = editor;
        this.showHideWatermark(false /*ignoreCachedState*/);
        this.disposer = this.editor.addDomEventHandler({
            focus: this.handleWatermark,
            blur: this.handleWatermark,
        });
    };
    /**
     * Dispose this plugin
     */
    Watermark.prototype.dispose = function () {
        this.disposer();
        this.disposer = null;
        this.hideWatermark();
        this.editor = null;
    };
    /**
     * Handle events triggered from editor
     * @param event PluginEvent object
     */
    Watermark.prototype.onPluginEvent = function (event) {
        if (event.eventType == 6 /* ContentChanged */) {
            // When content is changed from setContent() API, current cached state
            // may not be accurate, so we ignore it
            this.showHideWatermark(event.source == "SetContent" /* SetContent */);
        }
        else if (event.eventType == 7 /* ExtractContent */ && this.isWatermarkShowing) {
            this.removeWartermarkFromHtml(event);
        }
    };
    Watermark.prototype.showHideWatermark = function (ignoreCachedState) {
        if (this.editor.hasFocus() && (ignoreCachedState || this.isWatermarkShowing)) {
            this.hideWatermark();
            this.editor.focus();
        }
        else if (!this.editor.hasFocus() &&
            (ignoreCachedState || !this.isWatermarkShowing) &&
            this.editor.isEmpty(true /*trim*/)) {
            this.showWatermark();
        }
    };
    Watermark.prototype.showWatermark = function () {
        var document = this.editor.getDocument();
        var watermarkNode = roosterjs_editor_dom_1.wrap(document.createTextNode(this.watermark), "<span id=\"" + WATERMARK_SPAN_ID + "\"></span>");
        roosterjs_editor_dom_1.applyFormat(watermarkNode, this.format);
        this.editor.insertNode(watermarkNode, {
            position: 0 /* Begin */,
            updateCursor: false,
            replaceSelection: false,
            insertOnNewLine: false,
        });
        this.isWatermarkShowing = true;
    };
    Watermark.prototype.hideWatermark = function () {
        var _this = this;
        this.editor.queryElements("span[id=\"" + WATERMARK_SPAN_ID + "\"]", function (span) {
            return _this.editor.deleteNode(span);
        });
        this.isWatermarkShowing = false;
    };
    Watermark.prototype.removeWartermarkFromHtml = function (event) {
        var content = event.content;
        content = content.replace(WATERMARK_REGEX, '');
        event.content = content;
    };
    return Watermark;
}());
exports.default = Watermark;


/***/ }),

/***/ "./packages/roosterjs-editor-plugins/lib/index.ts":
/*!********************************************************!*\
  !*** ./packages/roosterjs-editor-plugins/lib/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HyperLink_1 = __webpack_require__(/*! ./HyperLink/HyperLink */ "./packages/roosterjs-editor-plugins/lib/HyperLink/HyperLink.ts");
exports.HyperLink = HyperLink_1.default;
var ContentEdit_1 = __webpack_require__(/*! ./ContentEdit/ContentEdit */ "./packages/roosterjs-editor-plugins/lib/ContentEdit/ContentEdit.ts");
exports.ContentEdit = ContentEdit_1.default;
var Paste_1 = __webpack_require__(/*! ./Paste/Paste */ "./packages/roosterjs-editor-plugins/lib/Paste/Paste.ts");
exports.Paste = Paste_1.default;
var ContentEditFeatures_1 = __webpack_require__(/*! ./ContentEdit/ContentEditFeatures */ "./packages/roosterjs-editor-plugins/lib/ContentEdit/ContentEditFeatures.ts");
exports.getDefaultContentEditFeatures = ContentEditFeatures_1.getDefaultContentEditFeatures;
var Watermark_1 = __webpack_require__(/*! ./Watermark/Watermark */ "./packages/roosterjs-editor-plugins/lib/Watermark/Watermark.ts");
exports.Watermark = Watermark_1.default;
var TableResize_1 = __webpack_require__(/*! ./TableResize/TableResize */ "./packages/roosterjs-editor-plugins/lib/TableResize/TableResize.ts");
exports.TableResize = TableResize_1.default;


/***/ }),

/***/ "./packages/roosterjs-editor-types/lib/index.ts":
/*!******************************************************!*\
  !*** ./packages/roosterjs-editor-types/lib/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./packages/roosterjs-html-sanitizer/lib/index.ts":
/*!********************************************************!*\
  !*** ./packages/roosterjs-html-sanitizer/lib/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HtmlSanitizer_1 = __webpack_require__(/*! ./sanitizer/HtmlSanitizer */ "./packages/roosterjs-html-sanitizer/lib/sanitizer/HtmlSanitizer.ts");
exports.HtmlSanitizer = HtmlSanitizer_1.default;
var htmlToDom_1 = __webpack_require__(/*! ./utils/htmlToDom */ "./packages/roosterjs-html-sanitizer/lib/utils/htmlToDom.ts");
exports.htmlToDom = htmlToDom_1.default;
exports.splitWithFragment = htmlToDom_1.splitWithFragment;
var getInheritableStyles_1 = __webpack_require__(/*! ./utils/getInheritableStyles */ "./packages/roosterjs-html-sanitizer/lib/utils/getInheritableStyles.ts");
exports.getInheritableStyles = getInheritableStyles_1.default;


/***/ }),

/***/ "./packages/roosterjs-html-sanitizer/lib/sanitizer/HtmlSanitizer.ts":
/*!**************************************************************************!*\
  !*** ./packages/roosterjs-html-sanitizer/lib/sanitizer/HtmlSanitizer.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cloneObject_1 = __webpack_require__(/*! ../utils/cloneObject */ "./packages/roosterjs-html-sanitizer/lib/utils/cloneObject.ts");
var getInheritableStyles_1 = __webpack_require__(/*! ../utils/getInheritableStyles */ "./packages/roosterjs-html-sanitizer/lib/utils/getInheritableStyles.ts");
var htmlToDom_1 = __webpack_require__(/*! ../utils/htmlToDom */ "./packages/roosterjs-html-sanitizer/lib/utils/htmlToDom.ts");
var getAllowedValues_1 = __webpack_require__(/*! ../utils/getAllowedValues */ "./packages/roosterjs-html-sanitizer/lib/utils/getAllowedValues.ts");
var HtmlSanitizer = /** @class */ (function () {
    function HtmlSanitizer(options) {
        options = options || {};
        this.elementCallbacks = cloneObject_1.default(options.elementCallbacks);
        this.styleCallbacks = getAllowedValues_1.getStyleCallbacks(options.styleCallbacks);
        this.attributeCallbacks = cloneObject_1.default(options.attributeCallbacks);
        this.allowedTags = getAllowedValues_1.getAllowedTags(options.additionalAllowedTags);
        this.allowedAttributes = getAllowedValues_1.getAllowedAttributes(options.additionalAllowAttributes);
        this.defaultStyleValues = getAllowedValues_1.getDefaultStyleValues(options.additionalDefaultStyleValues);
        this.additionalGlobalStyleNodes = options.additionalGlobalStyleNodes || [];
        this.allowPreserveWhiteSpace = options.allowPreserveWhiteSpace;
    }
    /**
     * Convert global CSS to inline CSS if any
     * @param html HTML source
     * @param additionalStyleNodes (Optional) additional HTML STYLE elements used as global CSS
     */
    HtmlSanitizer.convertInlineCss = function (html, additionalStyleNodes) {
        var sanitizer = new HtmlSanitizer({
            additionalGlobalStyleNodes: additionalStyleNodes,
        });
        return sanitizer.exec(html, true /*convertCssOnly*/);
    };
    /**
     * Sanitize HTML string, remove any unuseful HTML node/attribute/CSS.
     * @param html HTML source string
     * @param options Options used for this sanitizing process
     */
    HtmlSanitizer.sanitizeHtml = function (html, options) {
        options = options || {};
        var sanitizer = new HtmlSanitizer(options);
        var currentStyles = options.currentElementOrStyle instanceof HTMLElement
            ? getInheritableStyles_1.default(options.currentElementOrStyle)
            : options.currentElementOrStyle;
        return sanitizer.exec(html, options.convertCssOnly, options.preserveFragmentOnly, currentStyles);
    };
    /**
     * Sanitize HTML string
     * This function will do the following work:
     * 1. Convert global CSS into inline CSS
     * 2. Remove dangerous HTML tags and attributes
     * 3. Remove useless CSS properties
     * @param html The input HTML
     * @param convertInlineCssOnly Whether only convert inline css and skip html content sanitizing
     * @param preserveFragmentOnly If set to true, only preserve the html content between <!--StartFragment--> and <!--Endfragment-->
     * @param currentStyles Current inheritable CSS styles
     */
    HtmlSanitizer.prototype.exec = function (html, convertCssOnly, preserveFragmentOnly, currentStyles) {
        var doc = htmlToDom_1.default(html, preserveFragmentOnly);
        if (doc) {
            this.convertGlobalCssToInlineCss(doc);
            if (!convertCssOnly) {
                this.sanitize(doc.body, currentStyles);
            }
        }
        return (doc && doc.body && doc.body.innerHTML) || '';
    };
    HtmlSanitizer.prototype.sanitize = function (rootNode, currentStyles) {
        if (!rootNode) {
            return '';
        }
        currentStyles = cloneObject_1.default(currentStyles, getInheritableStyles_1.default(null));
        this.processNode(rootNode, currentStyles, {});
    };
    HtmlSanitizer.prototype.convertGlobalCssToInlineCss = function (rootNode) {
        var styleNodes = toArray(rootNode.querySelectorAll('style'));
        var styleSheets = this.additionalGlobalStyleNodes
            .reverse()
            .map(function (node) { return node.sheet; })
            .concat(styleNodes.map(function (node) { return node.sheet; }).reverse());
        for (var _i = 0, styleSheets_1 = styleSheets; _i < styleSheets_1.length; _i++) {
            var styleSheet = styleSheets_1[_i];
            var _loop_1 = function (j) {
                // Skip any none-style rule, i.e. @page
                var styleRule = styleSheet.cssRules[j];
                var text = styleRule && styleRule.style ? styleRule.style.cssText : null;
                if (styleRule.type != CSSRule.STYLE_RULE || !text || !styleRule.selectorText) {
                    return "continue";
                }
                // Make sure the selector is not empty
                for (var _i = 0, _a = styleRule.selectorText.split(','); _i < _a.length; _i++) {
                    var selector = _a[_i];
                    if (!selector || !selector.trim() || selector.indexOf(':') >= 0) {
                        continue;
                    }
                    var nodes = toArray(rootNode.querySelectorAll(selector));
                    // Always put existing styles after so that they have higher priority
                    // Which means if both global style and inline style apply to the same element,
                    // inline style will have higher priority
                    nodes.forEach(function (node) {
                        return node.setAttribute('style', text + (node.getAttribute('style') || ''));
                    });
                }
            };
            for (var j = styleSheet.cssRules.length - 1; j >= 0; j--) {
                _loop_1(j);
            }
        }
        styleNodes.forEach(function (node) {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        });
    };
    HtmlSanitizer.prototype.processNode = function (node, currentStyle, context) {
        var nodeType = node.nodeType;
        var isElement = nodeType == Node.ELEMENT_NODE;
        var isText = nodeType == Node.TEXT_NODE;
        var element = node;
        var tag = isElement ? element.tagName.toUpperCase() : '';
        if ((isElement && !this.allowElement(element, tag, context)) ||
            (isText && /^[\r\n]*$/g.test(node.nodeValue) && !currentStyle.insidePRE) ||
            (!isElement && !isText)) {
            node.parentNode.removeChild(node);
        }
        else if (isText &&
            !this.allowPreserveWhiteSpace &&
            currentStyle['white-space'] == 'pre') {
            node.nodeValue = node.nodeValue.replace(/^ /gm, '\u00A0').replace(/ {2}/g, ' \u00A0');
        }
        else if (isElement) {
            var thisStyle = cloneObject_1.default(currentStyle);
            this.processAttributes(element, context);
            this.processCss(element, tag, thisStyle, context);
            // Special handling for PRE tag, need to preserve \r\n inside PRE
            if (tag == 'PRE') {
                thisStyle.insidePRE = 'true';
            }
            var child = element.firstChild;
            var next = void 0;
            for (; child; child = next) {
                next = child.nextSibling;
                this.processNode(child, thisStyle, context);
            }
        }
    };
    HtmlSanitizer.prototype.processCss = function (element, tag, thisStyle, context) {
        var _this = this;
        var styleNode = element.getAttributeNode('style');
        if (!styleNode) {
            return;
        }
        var source = styleNode.value.split(';');
        var result = source.filter(function (style) {
            var pair;
            if (!style || style.trim() == '' || (pair = style.split(':')).length != 2) {
                return false;
            }
            var name = pair[0].trim().toLowerCase();
            var value = pair[1].trim().toLowerCase();
            var callback = _this.styleCallbacks[name];
            var isInheritable = thisStyle[name] != undefined;
            var keep = (!callback || callback(value, element, context)) &&
                value != 'inherit' &&
                value.indexOf('expression') < 0 &&
                name.substr(0, 1) != '-' &&
                _this.defaultStyleValues[name] != value &&
                ((isInheritable && value != thisStyle[name]) ||
                    (!isInheritable && value != 'initial' && value != 'normal'));
            if (keep && isInheritable) {
                thisStyle[name] = value;
            }
            return keep && (_this.allowPreserveWhiteSpace || name != 'white-space');
        });
        if (source.length != result.length) {
            if (result.length > 0) {
                element.setAttribute('style', result.map(function (s) { return s.trim(); }).join('; '));
            }
            else {
                element.removeAttribute('style');
            }
        }
    };
    HtmlSanitizer.prototype.processAttributes = function (element, context) {
        for (var i = element.attributes.length - 1; i >= 0; i--) {
            var attribute = element.attributes[i];
            var name_1 = attribute.name.toLowerCase().trim();
            var value = attribute.value;
            var callback = this.attributeCallbacks[name_1];
            if (callback) {
                value = callback(value, element, context);
            }
            else if (this.allowedAttributes.indexOf(name_1) < 0) {
                value = null;
            }
            if (value === null ||
                value === undefined ||
                value.toLowerCase().indexOf('script:') >= 0) {
                element.removeAttribute(name_1);
            }
            else {
                attribute.value = value;
            }
        }
    };
    HtmlSanitizer.prototype.allowElement = function (element, tag, context) {
        var callback = this.elementCallbacks[tag];
        return callback
            ? callback(element, context)
            : this.allowedTags.indexOf(tag) >= 0 || tag.indexOf(':') > 0;
    };
    return HtmlSanitizer;
}());
exports.default = HtmlSanitizer;
function toArray(list) {
    return [].slice.call(list);
}


/***/ }),

/***/ "./packages/roosterjs-html-sanitizer/lib/utils/cloneObject.ts":
/*!********************************************************************!*\
  !*** ./packages/roosterjs-html-sanitizer/lib/utils/cloneObject.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function nativeClone(source, existingObj) {
    return Object.assign(existingObj || {}, source);
}
function customClone(source, existingObj) {
    var result = existingObj || {};
    if (source) {
        for (var _i = 0, _a = Object.keys(source); _i < _a.length; _i++) {
            var key = _a[_i];
            result[key] = source[key];
        }
    }
    return result;
}
var cloneObject = Object.assign ? nativeClone : customClone;
exports.default = cloneObject;


/***/ }),

/***/ "./packages/roosterjs-html-sanitizer/lib/utils/getAllowedValues.ts":
/*!*************************************************************************!*\
  !*** ./packages/roosterjs-html-sanitizer/lib/utils/getAllowedValues.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cloneObject_1 = __webpack_require__(/*! ./cloneObject */ "./packages/roosterjs-html-sanitizer/lib/utils/cloneObject.ts");
var ALLOWED_HTML_TAGS = ('BODY,H1,H2,H3,H4,H5,H6,FORM,P,BR,NOBR,HR,ACRONYM,ABBR,ADDRESS,B,' +
    'BDI,BDO,BIG,BLOCKQUOTE,CENTER,CITE,CODE,DEL,DFN,EM,FONT,I,INS,KBD,MARK,METER,PRE,PROGRESS,' +
    'Q,RP,RT,RUBY,S,SAMP,SMALL,STRIKE,STRONG,SUB,SUP,TEMPLATE,TIME,TT,U,VAR,WBR,XMP,INPUT,TEXTAREA,' +
    'BUTTON,SELECT,OPTGROUP,OPTION,LABEL,FIELDSET,LEGEND,DATALIST,OUTPUT,IMG,MAP,AREA,CANVAS,FIGCAPTION,' +
    'FIGURE,PICTURE,A,NAV,UL,OL,LI,DIR,UL,DL,DT,DD,MENU,MENUITEM,TABLE,CAPTION,TH,TR,TD,THEAD,TBODY,' +
    'TFOOT,COL,COLGROUP,DIV,SPAN,HEADER,FOOTER,MAIN,SECTION,ARTICLE,ASIDE,DETAILS,DIALOG,SUMMARY,DATA').split(',');
var ALLOWED_HTML_ATTRIBUTES = ('accept,align,alt,checked,cite,color,cols,colspan,contextmenu,' +
    'coords,datetime,default,dir,dirname,disabled,download,face,headers,height,hidden,high,href,' +
    'hreflang,ismap,kind,label,lang,list,low,max,maxlength,media,min,multiple,open,optimum,pattern,' +
    'placeholder,readonly,rel,required,reversed,rows,rowspan,scope,selected,shape,size,sizes,span,' +
    'spellcheck,src,srclang,srcset,start,step,style,tabindex,target,title,translate,type,usemap,value,' +
    'width,wrap').split(',');
var DEFAULT_STYLE_VALUES = {
    'background-color': 'transparent',
    'border-bottom-color': 'rgb(0, 0, 0)',
    'border-bottom-style': 'none',
    'border-bottom-width': '0px',
    'border-image-outset': '0',
    'border-image-repeat': 'stretch',
    'border-image-slice': '100%',
    'border-image-source': 'none',
    'border-image-width': '1',
    'border-left-color': 'rgb(0, 0, 0)',
    'border-left-style': 'none',
    'border-left-width': '0px',
    'border-right-color': 'rgb(0, 0, 0)',
    'border-right-style': 'none',
    'border-right-width': '0px',
    'border-top-color': 'rgb(0, 0, 0)',
    'border-top-style': 'none',
    'border-top-width': '0px',
    'outline-color': 'transparent',
    'outline-style': 'none',
    'outline-width': '0px',
    overflow: 'visible',
    'text-decoration': 'none',
    '-webkit-text-stroke-width': '0px',
    'word-wrap': 'break-word',
    'margin-left': '0px',
    'margin-right': '0px',
    padding: '0px',
    'padding-top': '0px',
    'padding-left': '0px',
    'padding-right': '0px',
    'padding-bottom': '0px',
    border: '0px',
    'border-top': '0px',
    'border-left': '0px',
    'border-right': '0px',
    'border-bottom': '0px',
    'vertical-align': 'baseline',
    float: 'none',
};
function getAllowedTags(additionalTags) {
    return unique(ALLOWED_HTML_TAGS.concat(additionalTags || [])).map(function (tag) { return tag.toUpperCase(); });
}
exports.getAllowedTags = getAllowedTags;
function getAllowedAttributes(additionalAttributes) {
    return unique(ALLOWED_HTML_ATTRIBUTES.concat(additionalAttributes || [])).map(function (attr) {
        return attr.toLocaleLowerCase();
    });
}
exports.getAllowedAttributes = getAllowedAttributes;
function getDefaultStyleValues(additionalDefaultStyles) {
    var result = cloneObject_1.default(DEFAULT_STYLE_VALUES);
    if (additionalDefaultStyles) {
        Object.keys(additionalDefaultStyles).forEach(function (name) {
            var value = additionalDefaultStyles[name];
            if (value !== null && value !== undefined) {
                result[name] = value;
            }
            else {
                delete result[name];
            }
        });
    }
    return result;
}
exports.getDefaultStyleValues = getDefaultStyleValues;
function getStyleCallbacks(callbacks) {
    var result = cloneObject_1.default(callbacks);
    result.position = result.position || removeValue;
    result.width = result.width || removeWidthForLiAndDiv;
    return result;
}
exports.getStyleCallbacks = getStyleCallbacks;
function removeValue() {
    return null;
}
function removeWidthForLiAndDiv(value, element) {
    var tag = element.tagName;
    return !(tag == 'LI' || tag == 'DIV');
}
function unique(array) {
    return array.filter(function (value, index, self) { return self.indexOf(value) == index; });
}


/***/ }),

/***/ "./packages/roosterjs-html-sanitizer/lib/utils/getInheritableStyles.ts":
/*!*****************************************************************************!*\
  !*** ./packages/roosterjs-html-sanitizer/lib/utils/getInheritableStyles.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Inheritable CSS properties
// Ref: https://www.w3.org/TR/CSS21/propidx.html
var INHERITABLE_PROPERTIES = ('border-spacing,caption-side,color,' +
    'cursor,direction,empty-cells,font-family,font-size,font-style,font-variant,font-weight,' +
    'font,letter-spacing,line-height,list-style-image,list-style-position,list-style-type,' +
    'list-style,orphans,quotes,text-align,text-indent,text-transform,visibility,white-space,' +
    'widows,word-spacing').split(',');
/**
 * Get inheritable CSS style values from the given element
 * @param element The element to get style from
 */
function getInheritableStyles(element) {
    var win = element && element.ownerDocument && element.ownerDocument.defaultView;
    var styles = win && win.getComputedStyle(element);
    var result = {};
    INHERITABLE_PROPERTIES.forEach(function (name) { return (result[name] = (styles && styles.getPropertyValue(name)) || ''); });
    return result;
}
exports.default = getInheritableStyles;


/***/ }),

/***/ "./packages/roosterjs-html-sanitizer/lib/utils/htmlToDom.ts":
/*!******************************************************************!*\
  !*** ./packages/roosterjs-html-sanitizer/lib/utils/htmlToDom.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var START_FRAGMENT = '<!--StartFragment-->';
var END_FRAGMENT = '<!--EndFragment-->';
/**
 * Build DOM tree from the given HTML string
 * @param html Source HTML string
 * @param preserveFragmentOnly If there is fragment markup (<!--StartFragment--> and <!--EndFragment-->),
 * only preserve content between these markups
 * @param fragmentHandler An optional callback to do customized fragment handling
 */
function htmlToDom(html, preserveFragmentOnly, fragmentHandler) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html || '', 'text/html');
    if (doc && doc.body && doc.body.firstChild) {
        // 1. Filter out html code outside of Fragment tags if need
        if (preserveFragmentOnly) {
            (fragmentHandler || defaultFragmentTrimmer)(doc, html);
        }
        return doc;
    }
    else {
        return null;
    }
}
exports.default = htmlToDom;
function defaultFragmentTrimmer(doc, sourceHtml) {
    var html = splitWithFragment(sourceHtml)[0];
    doc.body.innerHTML = html;
}
/**
 * Split the HTML string using its fragment info
 * @param html Source html string
 * @returns [String within fragment, String before fragment, String after fragment]
 */
function splitWithFragment(html) {
    var startIndex = html.indexOf(START_FRAGMENT);
    var endIndex = html.lastIndexOf(END_FRAGMENT);
    if (startIndex >= 0 && endIndex >= 0 && endIndex >= startIndex + START_FRAGMENT.length) {
        var before = html.substr(0, startIndex);
        var after = html.substr(endIndex + END_FRAGMENT.length);
        html = html.substring(startIndex + START_FRAGMENT.length, endIndex);
        return [html, before, after];
    }
    else {
        return [html, null, null];
    }
}
exports.splitWithFragment = splitWithFragment;


/***/ }),

/***/ "./packages/roosterjs-plugin-image-resize/lib/ImageResize.ts":
/*!*******************************************************************!*\
  !*** ./packages/roosterjs-plugin-image-resize/lib/ImageResize.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_dom_1 = __webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts");
var BEGIN_TAG = 'RoosterJsImageResizingBegin';
var END_TAG = 'RoosterJsImageResizingEnd';
var EXTRACT_HTML_REGEX = new RegExp("<!--" + BEGIN_TAG + "-->[\\s\\S]*(<img\\s[^>]+>)[\\s\\S]*<!--" + END_TAG + "-->", 'gim');
var DELETE_KEYCODE = 46;
var BACKSPACE_KEYCODE = 8;
var SHIFT_KEYCODE = 16;
var CTRL_KEYCODE = 17;
var ALT_KEYCODE = 18;
var ImageResize = /** @class */ (function () {
    /**
     * Create a new instance of ImageResize
     * @param minWidth Minimum width of image when resize in pixel, default value is 10
     * @param minHeight Minimum height of image when resize in pixel, default value is 10
     * @param selectionBorderColor Color of resize border and handles, default value is #DB626C
     * @param forcePreserveRatio Whether always preserve width/height ratio when resize, default value is false
     * @param resizableImageSelector Selector for picking which image is resizable (e.g. for all images not placeholders), note
     * that the tag must be IMG regardless what the selector is
     */
    function ImageResize(minWidth, minHeight, selectionBorderColor, forcePreserveRatio, resizableImageSelector) {
        if (minWidth === void 0) { minWidth = 10; }
        if (minHeight === void 0) { minHeight = 10; }
        if (selectionBorderColor === void 0) { selectionBorderColor = '#DB626C'; }
        if (forcePreserveRatio === void 0) { forcePreserveRatio = false; }
        if (resizableImageSelector === void 0) { resizableImageSelector = 'img'; }
        var _this = this;
        this.minWidth = minWidth;
        this.minHeight = minHeight;
        this.selectionBorderColor = selectionBorderColor;
        this.forcePreserveRatio = forcePreserveRatio;
        this.resizableImageSelector = resizableImageSelector;
        this.startResize = function (e) {
            var img = _this.getSelectedImage();
            if (_this.editor && img) {
                _this.startPageX = e.pageX;
                _this.startPageY = e.pageY;
                _this.startWidth = img.clientWidth;
                _this.startHeight = img.clientHeight;
                _this.editor.addUndoSnapshot();
                var document_1 = _this.editor.getDocument();
                document_1.addEventListener('mousemove', _this.doResize, true /*useCapture*/);
                document_1.addEventListener('mouseup', _this.finishResize, true /*useCapture*/);
                _this.direction = (e.srcElement || e.target).style.cursor;
            }
            _this.stopEvent(e);
        };
        this.doResize = function (e) {
            var img = _this.getSelectedImage();
            if (_this.editor && img) {
                var widthChange = e.pageX - _this.startPageX;
                var heightChange = e.pageY - _this.startPageY;
                var newWidth = Math.max(_this.startWidth + (_this.isWest(_this.direction) ? -widthChange : widthChange), _this.minWidth);
                var newHeight = Math.max(_this.startHeight + (_this.isNorth(_this.direction) ? -heightChange : heightChange), _this.minHeight);
                if (_this.forcePreserveRatio || e.shiftKey) {
                    var ratio = _this.startWidth > 0 && _this.startHeight > 0
                        ? (_this.startWidth * 1.0) / _this.startHeight
                        : 0;
                    if (ratio > 0) {
                        if (newWidth < newHeight * ratio) {
                            newWidth = newHeight * ratio;
                        }
                        else {
                            newHeight = newWidth / ratio;
                        }
                    }
                }
                img.style.width = newWidth + 'px';
                img.style.height = newHeight + 'px';
            }
            _this.stopEvent(e);
        };
        this.finishResize = function (e) {
            var img = _this.getSelectedImage();
            if (_this.editor && img) {
                var document_2 = _this.editor.getDocument();
                document_2.removeEventListener('mousemove', _this.doResize, true /*useCapture*/);
                document_2.removeEventListener('mouseup', _this.finishResize, true /*useCapture*/);
                var width = img.clientWidth;
                var height = img.clientHeight;
                img.style.width = width + 'px';
                img.style.height = height + 'px';
                img.width = width;
                img.height = height;
                _this.resizeDiv.style.width = '';
                _this.resizeDiv.style.height = '';
            }
            _this.direction = null;
            _this.editor.addUndoSnapshot();
            _this.editor.triggerContentChangedEvent("ImageResize" /* ImageResize */);
            _this.stopEvent(e);
        };
        this.stopEvent = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };
        this.removeResizeDivIfAny = function (img) {
            var div = img && img.parentNode;
            var previous = div && div.previousSibling;
            var next = div && div.nextSibling;
            if (previous &&
                previous.nodeType == 8 /* Comment */ &&
                previous.nodeValue == BEGIN_TAG &&
                next &&
                next.nodeType == 8 /* Comment */ &&
                next.nodeValue == END_TAG) {
                div.parentNode.insertBefore(img, div);
                _this.removeResizeDiv(div);
            }
        };
        this.onBlur = function (e) {
            _this.hideResizeHandle();
        };
        this.onDragStart = function (e) {
            if ((e.srcElement || e.target) == _this.getSelectedImage()) {
                _this.hideResizeHandle(true);
            }
        };
    }
    /**
     * Get a friendly name of  this plugin
     */
    ImageResize.prototype.getName = function () {
        return 'ImageResize';
    };
    /**
     * Initialize this plugin. This should only be called from Editor
     * @param editor Editor instance
     */
    ImageResize.prototype.initialize = function (editor) {
        this.editor = editor;
        this.disposer = editor.addDomEventHandler({
            dragstart: this.onDragStart,
            blur: this.onBlur,
        });
    };
    /**
     * Dispose this plugin
     */
    ImageResize.prototype.dispose = function () {
        if (this.resizeDiv) {
            this.hideResizeHandle();
        }
        this.disposer();
        this.disposer = null;
        this.editor = null;
    };
    /**
     * Handle events triggered from editor
     * @param event PluginEvent object
     */
    ImageResize.prototype.onPluginEvent = function (e) {
        var _this = this;
        if (e.eventType == 4 /* MouseDown */) {
            var event_1 = e.rawEvent;
            var target = (event_1.srcElement || event_1.target);
            if (roosterjs_editor_dom_1.getTagOfNode(target) == 'IMG') {
                var parent_1 = target.parentNode;
                var elements = parent_1
                    ? [].slice.call(parent_1.querySelectorAll(this.resizableImageSelector))
                    : [];
                if (elements.indexOf(target) < 0) {
                    return;
                }
                target.contentEditable = 'false';
                var currentImg = this.getSelectedImage();
                if (currentImg && currentImg != target) {
                    this.hideResizeHandle();
                }
                if (!this.resizeDiv) {
                    this.showResizeHandle(target);
                }
            }
            else if (this.resizeDiv && !roosterjs_editor_dom_1.contains(this.resizeDiv, target)) {
                this.hideResizeHandle();
            }
        }
        else if (e.eventType == 0 /* KeyDown */ && this.resizeDiv) {
            var event_2 = e.rawEvent;
            if (event_2.which == DELETE_KEYCODE || event_2.which == BACKSPACE_KEYCODE) {
                this.editor.addUndoSnapshot(function () {
                    _this.removeResizeDiv(_this.resizeDiv);
                });
                this.resizeDiv = null;
                event_2.preventDefault();
                this.resizeDiv = null;
            }
            else if (event_2.which != SHIFT_KEYCODE &&
                event_2.which != CTRL_KEYCODE &&
                event_2.which != ALT_KEYCODE) {
                this.hideResizeHandle(true /*selectImage*/);
            }
        }
        else if (e.eventType == 6 /* ContentChanged */ &&
            e.source != "ImageResize" /* ImageResize */) {
            this.editor.queryElements('img', this.removeResizeDivIfAny);
            this.resizeDiv = null;
        }
        else if (e.eventType == 7 /* ExtractContent */) {
            var event_3 = e;
            event_3.content = this.extractHtml(event_3.content);
        }
    };
    /**
     * Select a given IMG element, show the resize handle
     * @param img The IMG element to select
     */
    ImageResize.prototype.showResizeHandle = function (img) {
        this.resizeDiv = this.createResizeDiv(img);
        img.contentEditable = 'false';
        this.editor.select(this.resizeDiv, -3 /* After */);
    };
    /**
     * Hide resize handle of current selected image
     * @param selectImageAfterUnSelect Optional, when set to true, select the image element after hide the resize handle
     */
    ImageResize.prototype.hideResizeHandle = function (selectImageAfterUnSelect) {
        var img = this.getSelectedImage();
        var parent = this.resizeDiv && this.resizeDiv.parentNode;
        if (parent) {
            if (img) {
                img.removeAttribute('contentEditable');
                var referenceNode = this.resizeDiv.previousSibling &&
                    this.resizeDiv.previousSibling.nodeType == 8 /* Comment */
                    ? this.resizeDiv.previousSibling
                    : this.resizeDiv;
                parent.insertBefore(img, referenceNode);
                if (selectImageAfterUnSelect) {
                    this.editor.select(img);
                }
                else {
                    this.editor.select(img, -3 /* After */);
                }
            }
            this.removeResizeDiv(this.resizeDiv);
            this.resizeDiv = null;
        }
    };
    ImageResize.prototype.createResizeDiv = function (target) {
        var _this = this;
        var document = this.editor.getDocument();
        var resizeDiv = document.createElement('DIV');
        var parent = target.parentNode;
        parent.insertBefore(resizeDiv, target);
        parent.insertBefore(document.createComment(BEGIN_TAG), resizeDiv);
        parent.insertBefore(document.createComment(END_TAG), resizeDiv.nextSibling);
        resizeDiv.style.position = 'relative';
        resizeDiv.style.display = 'inline-flex';
        resizeDiv.contentEditable = 'false';
        resizeDiv.addEventListener('click', this.stopEvent);
        resizeDiv.appendChild(target);
        ['nw', 'ne', 'sw', 'se'].forEach(function (pos) {
            var div = document.createElement('DIV');
            resizeDiv.appendChild(div);
            div.style.position = 'absolute';
            div.style.width = '7px';
            div.style.height = '7px';
            div.style.backgroundColor = _this.selectionBorderColor;
            div.style.cursor = pos + '-resize';
            if (_this.isNorth(pos)) {
                div.style.top = '-3px';
            }
            else {
                div.style.bottom = '-3px';
            }
            if (_this.isWest(pos)) {
                div.style.left = '-3px';
            }
            else {
                div.style.right = '-3px';
            }
            div.addEventListener('mousedown', _this.startResize);
        });
        var div = document.createElement('DIV');
        resizeDiv.appendChild(div);
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        div.style.right = '0';
        div.style.bottom = '0';
        div.style.border = 'solid 1px ' + this.selectionBorderColor;
        div.style.pointerEvents = 'none';
        return resizeDiv;
    };
    ImageResize.prototype.removeResizeDiv = function (resizeDiv) {
        var _this = this;
        if (this.editor && this.editor.contains(resizeDiv)) {
            [resizeDiv.previousSibling, resizeDiv.nextSibling].forEach(function (comment) {
                if (comment && comment.nodeType == 8 /* Comment */) {
                    _this.editor.deleteNode(comment);
                }
            });
            this.editor.deleteNode(resizeDiv);
        }
    };
    ImageResize.prototype.extractHtml = function (html) {
        return html.replace(EXTRACT_HTML_REGEX, function () {
            var groups = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                groups[_i] = arguments[_i];
            }
            return groups[1].replace(/(\s*contenteditable="false"(\/?>)|contenteditable="false"\s*)/im, '$2');
        });
    };
    ImageResize.prototype.getSelectedImage = function () {
        return this.resizeDiv ? this.resizeDiv.getElementsByTagName('IMG')[0] : null;
    };
    ImageResize.prototype.isNorth = function (direction) {
        return direction && direction.substr(0, 1) == 'n';
    };
    ImageResize.prototype.isWest = function (direction) {
        return direction && direction.substr(1, 1) == 'w';
    };
    return ImageResize;
}());
exports.default = ImageResize;


/***/ }),

/***/ "./packages/roosterjs-plugin-image-resize/lib/index.ts":
/*!*************************************************************!*\
  !*** ./packages/roosterjs-plugin-image-resize/lib/index.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ImageResize_1 = __webpack_require__(/*! ./ImageResize */ "./packages/roosterjs-plugin-image-resize/lib/ImageResize.ts");
exports.ImageResize = ImageResize_1.default;


/***/ }),

/***/ "./packages/roosterjs/lib/createEditor.ts":
/*!************************************************!*\
  !*** ./packages/roosterjs/lib/createEditor.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var roosterjs_editor_plugins_1 = __webpack_require__(/*! roosterjs-editor-plugins */ "./packages/roosterjs-editor-plugins/lib/index.ts");
var roosterjs_editor_core_1 = __webpack_require__(/*! roosterjs-editor-core */ "./packages/roosterjs-editor-core/lib/index.ts");
/**
 * Create an editor instance with most common options
 * @param contentDiv The html div element needed for creating the editor
 * @param additionalPlugins The additional user defined plugins. Currently the default plugins that are already included are
 * DefalutShortcut, HyperLink, Paste, and ContentEdit, user don't need to add those.
 * @param initialContent The initial content to show in editor. It can't be removed by undo, user need to manually remove it if needed.
 * @returns The editor instance
 */
function createEditor(contentDiv, additionalPlugins, initialContent) {
    var plugins = [new roosterjs_editor_plugins_1.HyperLink(), new roosterjs_editor_plugins_1.Paste(), new roosterjs_editor_plugins_1.ContentEdit()];
    if (additionalPlugins) {
        plugins = plugins.concat(additionalPlugins);
    }
    var options = {
        plugins: plugins,
        initialContent: initialContent,
        defaultFormat: {
            fontFamily: 'Calibri,Arial,Helvetica,sans-serif',
            fontSize: '11pt',
            textColor: '#000000',
        },
    };
    return new roosterjs_editor_core_1.Editor(contentDiv, options);
}
exports.default = createEditor;


/***/ }),

/***/ "./packages/roosterjs/lib/index.ts":
/*!*****************************************!*\
  !*** ./packages/roosterjs/lib/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var createEditor_1 = __webpack_require__(/*! ./createEditor */ "./packages/roosterjs/lib/createEditor.ts");
exports.createEditor = createEditor_1.default;
__export(__webpack_require__(/*! roosterjs-editor-types */ "./packages/roosterjs-editor-types/lib/index.ts"));
__export(__webpack_require__(/*! roosterjs-editor-dom */ "./packages/roosterjs-editor-dom/lib/index.ts"));
__export(__webpack_require__(/*! roosterjs-editor-core */ "./packages/roosterjs-editor-core/lib/index.ts"));
__export(__webpack_require__(/*! roosterjs-editor-api */ "./packages/roosterjs-editor-api/lib/index.ts"));
__export(__webpack_require__(/*! roosterjs-editor-plugins */ "./packages/roosterjs-editor-plugins/lib/index.ts"));
__export(__webpack_require__(/*! roosterjs-plugin-image-resize */ "./packages/roosterjs-plugin-image-resize/lib/index.ts"));
__export(__webpack_require__(/*! roosterjs-html-sanitizer */ "./packages/roosterjs-html-sanitizer/lib/index.ts"));


/***/ })

/******/ })});;
//# sourceMappingURL=rooster-amd.js.map