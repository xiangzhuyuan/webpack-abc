require('./style.css');

import 'babel-polyfill';
import data from './cats';
import $ from 'jquery';

$('<div id="cats"><h1>Cats</h1></div>').appendTo('body');
const ul1 = $('<ul></ul>').appendTo('#cats');
for (const cat of data['cats']) {
  $('<li></li>').text(cat).appendTo(ul1);
}

$('<div id="guys"><h1>Guys</h1></div>').appendTo('body');
const ul2 = $('<ul></ul>').appendTo('#guys');
for (const guy of data['guys']) {
  $('<li></li>').text(guy['name']['first'] + ', '+ guy['name']['last'] ).appendTo(ul2);
}