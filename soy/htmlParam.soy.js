// This file was automatically generated from htmlParam.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace soy.examples.htmlParam.
 * @public
 */

goog.module('soy.examples.htmlParam.incrementaldom');

goog.require('soy');
goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $main(opt_data, opt_ignored, opt_ijData) {
  var param256 = function() {
    ie_open('div', null, null,
        'class', 'content');
      itext((goog.asserts.assert((opt_data.foo) != null), opt_data.foo));
    ie_close('div');
  };
  $templateWithDocParam({content: param256}, null, opt_ijData);
  var param261 = function() {
    ie_open('div', null, null,
        'class', 'content');
      itext((goog.asserts.assert((opt_data.foo) != null), opt_data.foo));
    ie_close('div');
  };
  $templateWithCommandParam({content: param261}, null, opt_ijData);
  $templateWithCommandParam({content: opt_data.foo}, null, opt_ijData);
}
exports.main = $main;
if (goog.DEBUG) {
  $main.soyTemplateName = 'soy.examples.htmlParam.main';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $templateWithDocParam(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'template');
    itext((goog.asserts.assert((opt_data.content) != null), opt_data.content));
  ie_close('div');
}
exports.templateWithDocParam = $templateWithDocParam;
if (goog.DEBUG) {
  $templateWithDocParam.soyTemplateName = 'soy.examples.htmlParam.templateWithDocParam';
}


/**
 * @param {{
 *    content: (!soydata.SanitizedHtml|string)
 * }} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $templateWithCommandParam(opt_data, opt_ignored, opt_ijData) {
  soy.asserts.assertType((opt_data.content instanceof Function) || (opt_data.content instanceof soydata.UnsanitizedText) || goog.isString(opt_data.content), 'content', opt_data.content, 'Function');
  var content = /** @type {Function} */ (opt_data.content);
  ie_open('div', null, null,
      'class', 'template');
    content();
  ie_close('div');
}
exports.templateWithCommandParam = $templateWithCommandParam;
if (goog.DEBUG) {
  $templateWithCommandParam.soyTemplateName = 'soy.examples.htmlParam.templateWithCommandParam';
}
