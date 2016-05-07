import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { en } from '../i18n/en.js';
import { es } from '../i18n/es.js';
import App from './imports/components/App.jsx';

Meteor.subscribe('events');
Meteor.subscribe('users');
Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
  
    var localeFromBrowser = window.navigator.userLanguage || window.navigator.language;
    var locale = 'en';
    var supportedLanguages = [ { language: 'en', regex: /en/i }, { language: 'es', regex: /es/i }];
    for(var i = 0; i < supportedLanguages.length; i++) {
      var languageObj = supportedLanguages[i];
      if (localeFromBrowser.match(languageObj.regex)) {
            locale = languageObj.language;
        break;
      }	
    }

    i18n.setLanguage(locale);
});
