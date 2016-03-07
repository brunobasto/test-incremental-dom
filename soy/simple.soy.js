// This file was automatically generated from simple.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace soy.examples.simple.
 * @public
 */

goog.module('soy.examples.simple.incrementaldom');

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
function $helloWorld(opt_data, opt_ignored, opt_ijData) {
  itext('Hello world!');
}
exports.helloWorld = $helloWorld;
if (goog.DEBUG) {
  $helloWorld.soyTemplateName = 'soy.examples.simple.helloWorld';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $helloName(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  if (opt_data.name) {
    itext('Hello ');
    itext((goog.asserts.assert((opt_data.name) != null), opt_data.name));
    itext('!');
  } else {
    $helloWorld(null, null, opt_ijData);
  }
}
exports.helloName = $helloName;
if (goog.DEBUG) {
  $helloName.soyTemplateName = 'soy.examples.simple.helloName';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $helloNames(opt_data, opt_ignored, opt_ijData) {
  var nameList283 = opt_data.names;
  var nameListLen283 = nameList283.length;
  if (nameListLen283 > 0) {
    for (var nameIndex283 = 0; nameIndex283 < nameListLen283; nameIndex283++) {
      var nameData283 = nameList283[nameIndex283];
      $helloName({name: nameData283}, null, opt_ijData);
      if (! (nameIndex283 == nameListLen283 - 1)) {
        ie_open('br');
        ie_close('br');
      }
    }
  } else {
    $helloWorld(null, null, opt_ijData);
  }
}
exports.helloNames = $helloNames;
if (goog.DEBUG) {
  $helloNames.soyTemplateName = 'soy.examples.simple.helloNames';
}
