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
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
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
  $template({content: param256}, null, opt_ijData);
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
function $template(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'template');
    itext((goog.asserts.assert((opt_data.content) != null), opt_data.content));
  ie_close('div');
}
exports.template = $template;
if (goog.DEBUG) {
  $template.soyTemplateName = 'soy.examples.htmlParam.template';
}
