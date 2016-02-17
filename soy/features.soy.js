// This file was automatically generated from features.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace soy.examples.features.
 * @public
 */

goog.module('soy.examples.features.incrementaldom');

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
var $import1 = goog.require('soy.examples.simple.incrementaldom');
var $templateAlias1 = $import1.helloWorld;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoComments(opt_data, opt_ignored, opt_ijData) {
  itext('blah blah');
  ie_open('br');
  ie_close('br');
  itext('http://www.google.com');
  ie_open('br');
  ie_close('br');
}
exports.demoComments = $demoComments;
if (goog.DEBUG) {
  $demoComments.soyTemplateName = 'soy.examples.features.demoComments';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoLineJoining(opt_data, opt_ignored, opt_ijData) {
  itext('First second.');
  ie_open('br');
  ie_close('br');
  ie_open('i');
    itext('First');
  ie_close('i');
  itext('second.');
  ie_open('br');
  ie_close('br');
  itext('Firstsecond.');
  ie_open('br');
  ie_close('br');
  ie_open('i');
    itext('First');
  ie_close('i');
  itext(' second.');
  ie_open('br');
  ie_close('br');
  itext('Firstsecond.');
  ie_open('br');
  ie_close('br');
}
exports.demoLineJoining = $demoLineJoining;
if (goog.DEBUG) {
  $demoLineJoining.soyTemplateName = 'soy.examples.features.demoLineJoining';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {string}
 * @suppress {checkTypes}
 */
function $demoRawTextCommands(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  output += '<pre>Space       : AA BB<br>Empty string: AABB<br>New line    : AA\nBB<br>Carriage ret: AA\rBB<br>Tab         : AA\tBB<br>Left brace  : AA{BB<br>Right brace : AA}BB<br>Literal     : AA\tBB { CC\n  DD } EE {sp}{\\n}{rb} FF</pre>';
  return output;
}
exports.demoRawTextCommands = $demoRawTextCommands;
if (goog.DEBUG) {
  $demoRawTextCommands.soyTemplateName = 'soy.examples.features.demoRawTextCommands';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoPrint(opt_data, opt_ignored, opt_ijData) {
  itext('Boo!');
  ie_open('br');
  ie_close('br');
  itext('Boo!');
  ie_open('br');
  ie_close('br');
  itext('3');
  ie_open('br');
  ie_close('br');
  itext((goog.asserts.assert((opt_data.boo) != null), opt_data.boo));
  ie_open('br');
  ie_close('br');
  itext((goog.asserts.assert((1 + opt_data.two) != null), 1 + opt_data.two));
  ie_open('br');
  ie_close('br');
  itext('1, true.');
  ie_open('br');
  ie_close('br');
}
exports.demoPrint = $demoPrint;
if (goog.DEBUG) {
  $demoPrint.soyTemplateName = 'soy.examples.features.demoPrint';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoAutoescapeTrue(opt_data, opt_ignored, opt_ijData) {
  itext((goog.asserts.assert((opt_data.italicHtml) != null), opt_data.italicHtml));
  ie_open('br');
  ie_close('br');
}
exports.demoAutoescapeTrue = $demoAutoescapeTrue;
if (goog.DEBUG) {
  $demoAutoescapeTrue.soyTemplateName = 'soy.examples.features.demoAutoescapeTrue';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoIf(opt_data, opt_ignored, opt_ijData) {
  if (Math.round(opt_data.pi * 100) / 100 == 3.14) {
    itext((goog.asserts.assert((opt_data.pi) != null), opt_data.pi));
    itext(' is a good approximation of pi.');
  } else if (Math.round(opt_data.pi) == 3) {
    itext((goog.asserts.assert((opt_data.pi) != null), opt_data.pi));
    itext(' is a bad approximation of pi.');
  } else {
    itext((goog.asserts.assert((opt_data.pi) != null), opt_data.pi));
    itext(' is nowhere near the value of pi.');
  }
  ie_open('br');
  ie_close('br');
}
exports.demoIf = $demoIf;
if (goog.DEBUG) {
  $demoIf.soyTemplateName = 'soy.examples.features.demoIf';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoSwitch(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  itext('Dear ');
  itext((goog.asserts.assert((opt_data.name) != null), opt_data.name));
  itext(', &nbsp;');
  switch ((goog.isObject($$temp = opt_data.name)) ? $$temp.toString() : $$temp) {
    case 'Go':
      itext('You\'ve been bad this year.');
      break;
    case 'Fay':
    case 'Ivy':
      itext('You\'ve been good this year.');
      break;
    default:
      itext('You don\'t really believe in me, do you?');
  }
  itext('&nbsp; --Santa');
  ie_open('br');
  ie_close('br');
}
exports.demoSwitch = $demoSwitch;
if (goog.DEBUG) {
  $demoSwitch.soyTemplateName = 'soy.examples.features.demoSwitch';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoForeach(opt_data, opt_ignored, opt_ijData) {
  var personList89 = opt_data.persons;
  var personListLen89 = personList89.length;
  if (personListLen89 > 0) {
    for (var personIndex89 = 0; personIndex89 < personListLen89; personIndex89++) {
      var personData89 = personList89[personIndex89];
      if (personIndex89 == 0) {
        itext('First,');
      } else if (personIndex89 == personListLen89 - 1) {
        itext('Finally,');
      } else {
        itext('Then');
      }
      itext(' ');
      if (personData89.numWaffles == 1) {
        itext((goog.asserts.assert((personData89.name) != null), personData89.name));
        itext(' ate 1 waffle.');
      } else {
        itext((goog.asserts.assert((personData89.name) != null), personData89.name));
        itext(' ate ');
        itext((goog.asserts.assert((personData89.numWaffles) != null), personData89.numWaffles));
        itext(' waffles.');
      }
      ie_open('br');
      ie_close('br');
    }
  } else {
    itext('Nobody here ate any waffles.');
    ie_open('br');
    ie_close('br');
  }
}
exports.demoForeach = $demoForeach;
if (goog.DEBUG) {
  $demoForeach.soyTemplateName = 'soy.examples.features.demoForeach';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoFor(opt_data, opt_ignored, opt_ijData) {
  var iLimit93 = opt_data.numLines;
  for (var i93 = 0; i93 < iLimit93; i93++) {
    itext('Line ');
    itext((goog.asserts.assert((i93 + 1) != null), i93 + 1));
    itext(' of ');
    itext((goog.asserts.assert((opt_data.numLines) != null), opt_data.numLines));
    itext('.');
    ie_open('br');
    ie_close('br');
  }
  for (var i99 = 2; i99 < 10; i99 += 2) {
    itext((goog.asserts.assert((i99) != null), i99));
    itext('... ');
  }
  itext('Who do we appreciate?');
  ie_open('br');
  ie_close('br');
}
exports.demoFor = $demoFor;
if (goog.DEBUG) {
  $demoFor.soyTemplateName = 'soy.examples.features.demoFor';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoCallWithoutParam(opt_data, opt_ignored, opt_ijData) {
  itext((goog.asserts.assert(($tripReport_(null, null, opt_ijData)) != null), $tripReport_(null, null, opt_ijData)));
  ie_open('br');
  ie_close('br');
  itext((goog.asserts.assert(($tripReport_(opt_data, null, opt_ijData)) != null), $tripReport_(opt_data, null, opt_ijData)));
  ie_open('br');
  ie_close('br');
  itext((goog.asserts.assert(($tripReport_(opt_data.tripInfo, null, opt_ijData)) != null), $tripReport_(opt_data.tripInfo, null, opt_ijData)));
  ie_open('br');
  ie_close('br');
}
exports.demoCallWithoutParam = $demoCallWithoutParam;
if (goog.DEBUG) {
  $demoCallWithoutParam.soyTemplateName = 'soy.examples.features.demoCallWithoutParam';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoCallOtherFile(opt_data, opt_ignored, opt_ijData) {
  $templateAlias1(null, null, opt_ijData);
  ie_open('br');
  ie_close('br');
}
exports.demoCallOtherFile = $demoCallOtherFile;
if (goog.DEBUG) {
  $demoCallOtherFile.soyTemplateName = 'soy.examples.features.demoCallOtherFile';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoCallWithParam(opt_data, opt_ignored, opt_ijData) {
  var destinationList123 = opt_data.destinations;
  var destinationListLen123 = destinationList123.length;
  for (var destinationIndex123 = 0; destinationIndex123 < destinationListLen123; destinationIndex123++) {
    var destinationData123 = destinationList123[destinationIndex123];
    itext((goog.asserts.assert(($tripReport_(soy.$$augmentMap(opt_data, {destination: destinationData123}), null, opt_ijData)) != null), $tripReport_(soy.$$augmentMap(opt_data, {destination: destinationData123}), null, opt_ijData)));
    ie_open('br');
    ie_close('br');
    if (destinationIndex123 % 2 == 0) {
      itext((goog.asserts.assert(($tripReport_({name: opt_data.companionName, destination: destinationData123}, null, opt_ijData)) != null), $tripReport_({name: opt_data.companionName, destination: destinationData123}, null, opt_ijData)));
      ie_open('br');
      ie_close('br');
    }
  }
}
exports.demoCallWithParam = $demoCallWithParam;
if (goog.DEBUG) {
  $demoCallWithParam.soyTemplateName = 'soy.examples.features.demoCallWithParam';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoCallWithParamBlock(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  var param127 = '';
  switch ((goog.isObject($$temp = Math.floor(Math.random() * 3))) ? $$temp.toString() : $$temp) {
    case 0:
      param127 += 'Boston';
      break;
    case 1:
      param127 += 'Singapore';
      break;
    case 2:
      param127 += 'Zurich';
      break;
  }
  itext((goog.asserts.assert(($tripReport_({name: opt_data.name, destination: param127}, null, opt_ijData)) != null), $tripReport_({name: opt_data.name, destination: param127}, null, opt_ijData)));
  ie_open('br');
  ie_close('br');
}
exports.demoCallWithParamBlock = $demoCallWithParamBlock;
if (goog.DEBUG) {
  $demoCallWithParamBlock.soyTemplateName = 'soy.examples.features.demoCallWithParamBlock';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {string}
 * @suppress {checkTypes}
 */
function $tripReport_(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var output = '';
  output += (! opt_data.name) ? 'A trip was taken.' : (! opt_data.destination) ? opt_data.name + ' took a trip.' : opt_data.name + ' took a trip to ' + opt_data.destination + '.';
  return output;
}
exports.tripReport_ = $tripReport_;
if (goog.DEBUG) {
  $tripReport_.soyTemplateName = 'soy.examples.features.tripReport_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoParamWithKindAttribute(opt_data, opt_ignored, opt_ijData) {
  ie_open('div');
    var param151 = function() {
      ie_open('b');
        itext((goog.asserts.assert((opt_data.message) != null), opt_data.message));
      ie_close('b');
    };
    var param155 = function() {
      var iList159 = opt_data.list;
      var iListLen159 = iList159.length;
      for (var iIndex159 = 0; iIndex159 < iListLen159; iIndex159++) {
        var iData159 = iList159[iIndex159];
        ie_open('li');
          itext((goog.asserts.assert((iData159) != null), iData159));
        ie_close('li');
      }
    };
    $demoParamWithKindAttributeCallee_({message: param151, listItems: param155}, null, opt_ijData);
  ie_close('div');
}
exports.demoParamWithKindAttribute = $demoParamWithKindAttribute;
if (goog.DEBUG) {
  $demoParamWithKindAttribute.soyTemplateName = 'soy.examples.features.demoParamWithKindAttribute';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoParamWithKindAttributeCallee_(opt_data, opt_ignored, opt_ijData) {
  ie_open('div');
    itext((goog.asserts.assert((opt_data.message) != null), opt_data.message));
  ie_close('div');
  ie_open('ol');
    itext((goog.asserts.assert((opt_data.listItems) != null), opt_data.listItems));
  ie_close('ol');
}
exports.demoParamWithKindAttributeCallee_ = $demoParamWithKindAttributeCallee_;
if (goog.DEBUG) {
  $demoParamWithKindAttributeCallee_.soyTemplateName = 'soy.examples.features.demoParamWithKindAttributeCallee_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoExpressions(opt_data, opt_ignored, opt_ijData) {
  itext('First student\'s major: ');
  itext((goog.asserts.assert((opt_data.students[0].major) != null), opt_data.students[0].major));
  ie_open('br');
  ie_close('br');
  itext('Last student\'s year: ');
  itext((goog.asserts.assert((opt_data.students[opt_data.students.length - 1].year) != null), opt_data.students[opt_data.students.length - 1].year));
  ie_open('br');
  ie_close('br');
  itext('Random student\'s major: ');
  itext((goog.asserts.assert((opt_data.students[Math.floor(Math.random() * opt_data.students.length)].major) != null), opt_data.students[Math.floor(Math.random() * opt_data.students.length)].major));
  ie_open('br');
  ie_close('br');
  var studentList207 = opt_data.students;
  var studentListLen207 = studentList207.length;
  for (var studentIndex207 = 0; studentIndex207 < studentListLen207; studentIndex207++) {
    var studentData207 = studentList207[studentIndex207];
    itext((goog.asserts.assert((studentData207.name) != null), studentData207.name));
    itext(':');
    if (studentIndex207 == 0) {
      itext(' First.');
    } else if (studentIndex207 == studentListLen207 - 1) {
      itext(' Last.');
    } else if (studentIndex207 == Math.ceil(opt_data.students.length / 2) - 1) {
      itext(' Middle.');
    }
    if (studentIndex207 % 2 == 1) {
      itext(' Even.');
    }
    itext(' ');
    itext((goog.asserts.assert((studentData207.major) != null), studentData207.major));
    itext('.');
    if (studentData207.major == 'Physics' || studentData207.major == 'Biology') {
      itext(' Scientist.');
    }
    if (opt_data.currentYear - studentData207.year < 10) {
      itext(' Young.');
    }
    itext(' ');
    itext((goog.asserts.assert((studentData207.year < 2000 ? Math.round((studentData207.year - 1905) / 10) * 10 + 's' : '00s') != null), studentData207.year < 2000 ? Math.round((studentData207.year - 1905) / 10) * 10 + 's' : '00s'));
    itext('. ');
    if (studentData207.year < 2000) {
      itext((goog.asserts.assert((Math.round((studentData207.year - 1905) / 10) * 10) != null), Math.round((studentData207.year - 1905) / 10) * 10));
    } else {
      itext('00');
    }
    itext('s.');
    ie_open('br');
    ie_close('br');
  }
}
exports.demoExpressions = $demoExpressions;
if (goog.DEBUG) {
  $demoExpressions.soyTemplateName = 'soy.examples.features.demoExpressions';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {string}
 * @suppress {checkTypes}
 */
function $demoDoubleBraces(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  output += 'The set of ';
  output += opt_data.setName;
  output += ' is {';
  output += $buildCommaSeparatedList_({items: opt_data.setMembers}, null, opt_ijData);
  output += ', ...}.';
  return output;
}
exports.demoDoubleBraces = $demoDoubleBraces;
if (goog.DEBUG) {
  $demoDoubleBraces.soyTemplateName = 'soy.examples.features.demoDoubleBraces';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {string}
 * @suppress {checkTypes}
 */
function $buildCommaSeparatedList_(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var itemList221 = opt_data.items;
  var itemListLen221 = itemList221.length;
  for (var itemIndex221 = 0; itemIndex221 < itemListLen221; itemIndex221++) {
    var itemData221 = itemList221[itemIndex221];
    output += (! (itemIndex221 == 0)) ? ', ' : '';
    output += itemData221;
  }
  return output;
}
exports.buildCommaSeparatedList_ = $buildCommaSeparatedList_;
if (goog.DEBUG) {
  $buildCommaSeparatedList_.soyTemplateName = 'soy.examples.features.buildCommaSeparatedList_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $demoBidiSupport(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', 'title1',
      'style', 'font-variant:small-caps');
    itext((goog.asserts.assert((opt_data.title) != null), opt_data.title));
  ie_close('div');
  ie_open('div', null, null,
      'id', 'title2',
      'style', 'font-variant:small-caps');
    itext((goog.asserts.assert((soy.$$bidiSpanWrap(soy.$$IS_LOCALE_RTL?-1:1, opt_data.title)) != null), soy.$$bidiSpanWrap(soy.$$IS_LOCALE_RTL?-1:1, opt_data.title)));
  ie_close('div');
  itext('by ');
  itext((goog.asserts.assert((soy.$$bidiSpanWrap(soy.$$IS_LOCALE_RTL?-1:1, opt_data.author)) != null), soy.$$bidiSpanWrap(soy.$$IS_LOCALE_RTL?-1:1, opt_data.author)));
  itext(' (');
  itext((goog.asserts.assert((opt_data.year) != null), opt_data.year));
  itext(')');
  ie_open('div', null, null,
      'id', 'choose_a_keyword');
    itext('Your favorite keyword: ');
    ie_open('select');
      var keywordList241 = opt_data.keywords;
      var keywordListLen241 = keywordList241.length;
      for (var keywordIndex241 = 0; keywordIndex241 < keywordListLen241; keywordIndex241++) {
        var keywordData241 = keywordList241[keywordIndex241];
        ie_open('option', null, null,
            'value', keywordData241);
          itext((goog.asserts.assert((soy.$$bidiUnicodeWrap(soy.$$IS_LOCALE_RTL?-1:1, keywordData241)) != null), soy.$$bidiUnicodeWrap(soy.$$IS_LOCALE_RTL?-1:1, keywordData241)));
        ie_close('option');
      }
    ie_close('select');
  ie_close('div');
  ie_open('a', null, null,
      'href', '#',
      'style', 'float:' + ((soy.$$IS_LOCALE_RTL?-1:1) < 0 ? 'left' : 'right'));
    itext('Help');
  ie_close('a');
  ie_open('br');
  ie_close('br');
}
exports.demoBidiSupport = $demoBidiSupport;
if (goog.DEBUG) {
  $demoBidiSupport.soyTemplateName = 'soy.examples.features.demoBidiSupport';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {string}
 * @suppress {checkTypes}
 */
function $bidiGlobalDir(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  output += soy.$$IS_LOCALE_RTL?-1:1;
  return output;
}
exports.bidiGlobalDir = $bidiGlobalDir;
if (goog.DEBUG) {
  $bidiGlobalDir.soyTemplateName = 'soy.examples.features.bidiGlobalDir';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $exampleHeader(opt_data, opt_ignored, opt_ijData) {
  ie_open('hr');
  ie_close('hr');
  ie_open('b');
    itext((goog.asserts.assert((opt_data.exampleNum) != null), opt_data.exampleNum));
    itext('. ');
    itext((goog.asserts.assert((opt_data.exampleName) != null), opt_data.exampleName));
  ie_close('b');
  ie_open('br');
  ie_close('br');
}
exports.exampleHeader = $exampleHeader;
if (goog.DEBUG) {
  $exampleHeader.soyTemplateName = 'soy.examples.features.exampleHeader';
}
