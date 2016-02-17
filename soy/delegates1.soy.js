// This file was automatically generated from delegates1.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace soy.examples.delegates.alpha.
 * @modName {alpha}
 * @hassoydeltemplate {delegateBoo}
 * @hassoydeltemplate {myDelegates.foo}
 * @public
 */

goog.module('soy.examples.delegates.alpha.incrementaldom');

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
function __deltemplate_s9_1da607fe(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  output += 'delegateBoo from delegate package alpha.';
  return output;
}
exports.__deltemplate_s9_1da607fe = __deltemplate_s9_1da607fe;
if (goog.DEBUG) {
  __deltemplate_s9_1da607fe.soyTemplateName = 'soy.examples.delegates.alpha.__deltemplate_s9_1da607fe';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('delegateBoo'), '', 1, __deltemplate_s9_1da607fe);


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {string}
 * @suppress {checkTypes}
 */
function __deltemplate_s11_7b476dab(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  output += 'myDelegates.foo from delegate package alpha (moo = ';
  output += opt_data.moo;
  output += ').';
  return output;
}
exports.__deltemplate_s11_7b476dab = __deltemplate_s11_7b476dab;
if (goog.DEBUG) {
  __deltemplate_s11_7b476dab.soyTemplateName = 'soy.examples.delegates.alpha.__deltemplate_s11_7b476dab';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('myDelegates.foo'), '', 1, __deltemplate_s11_7b476dab);
