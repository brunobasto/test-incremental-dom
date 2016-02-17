// This file was automatically generated from delegates2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace soy.examples.delegates.beta.
 * @modName {beta}
 * @hassoydeltemplate {delegateBoo}
 * @public
 */

goog.module('soy.examples.delegates.beta.incrementaldom');

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
 * @return {string}
 * @suppress {checkTypes}
 */
function __deltemplate_s16_6ffb7359(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  output += 'delegateBoo from delegate package beta.';
  return output;
}
exports.__deltemplate_s16_6ffb7359 = __deltemplate_s16_6ffb7359;
if (goog.DEBUG) {
  __deltemplate_s16_6ffb7359.soyTemplateName = 'soy.examples.delegates.beta.__deltemplate_s16_6ffb7359';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('delegateBoo'), '', 1, __deltemplate_s16_6ffb7359);
