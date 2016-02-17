// This file was automatically generated from delegates0.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace soy.examples.delegates.
 * @hassoydeltemplate {myDelegates.foo}
 * @hassoydelcall {delegateBoo}
 * @hassoydelcall {myDelegates.foo}
 * @public
 */

goog.module('soy.examples.delegates.incrementaldom');

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
  itext((goog.asserts.assert((soy.$$getDelegateFn(soy.$$getDelTemplateId('delegateBoo'), '', true)(null, null, opt_ijData)) != null), soy.$$getDelegateFn(soy.$$getDelTemplateId('delegateBoo'), '', true)(null, null, opt_ijData)));
  itext('\n');
  itext((goog.asserts.assert((soy.$$getDelegateFn(soy.$$getDelTemplateId('myDelegates.foo'), '', false)(opt_data, null, opt_ijData)) != null), soy.$$getDelegateFn(soy.$$getDelTemplateId('myDelegates.foo'), '', false)(opt_data, null, opt_ijData)));
}
exports.main = $main;
if (goog.DEBUG) {
  $main.soyTemplateName = 'soy.examples.delegates.main';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {string}
 * @suppress {checkTypes}
 */
function __deltemplate_s6_724002cf(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  output += 'myDelegates.foo default.';
  return output;
}
exports.__deltemplate_s6_724002cf = __deltemplate_s6_724002cf;
if (goog.DEBUG) {
  __deltemplate_s6_724002cf.soyTemplateName = 'soy.examples.delegates.__deltemplate_s6_724002cf';
}
soy.$$registerDelegateFn(soy.$$getDelTemplateId('myDelegates.foo'), '', 0, __deltemplate_s6_724002cf);
