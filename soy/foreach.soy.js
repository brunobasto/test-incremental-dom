// This file was automatically generated from foreach.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace foreach.
 * @public
 */

goog.module('foreach.incrementaldom');

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
function $hello(opt_data, opt_ignored, opt_ijData) {
  var items__soy6 = ['ice', 'cream'];
  var itemList9 = items__soy6;
  var itemListLen9 = itemList9.length;
  for (var itemIndex9 = 0; itemIndex9 < itemListLen9; itemIndex9++) {
    var itemData9 = itemList9[itemIndex9];
    itext((goog.asserts.assert((itemData9) != null), itemData9));
    itext(' ');
  }
}
exports.hello = $hello;
if (goog.DEBUG) {
  $hello.soyTemplateName = 'foreach.hello';
}
