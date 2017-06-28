'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AtomLanguageService;

function _load_AtomLanguageService() {
  return _AtomLanguageService = require('./AtomLanguageService');
}

Object.defineProperty(exports, 'AtomLanguageService', {
  enumerable: true,
  get: function () {
    return (_AtomLanguageService || _load_AtomLanguageService()).AtomLanguageService;
  }
});

var _HostServices;

function _load_HostServices() {
  return _HostServices = require('./HostServices');
}

Object.defineProperty(exports, 'getHostServices', {
  enumerable: true,
  get: function () {
    return (_HostServices || _load_HostServices()).getHostServices;
  }
});