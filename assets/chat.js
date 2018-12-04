<<<<<<< HEAD
import Chat from './chat/js/chat';
import emotes from './emotes.json';

let cdnData = ($("#chat-include").data());

fetch(cdnData.cdn+'/emotes/emotes.json?_='+cdnData.cacheKey)
  .then(function(response) {
    return response.json();
  })
  .then(function(emotesJSON) {
	$.each(emotesJSON, function(i){emotes['destiny'].push(emotesJSON[i].prefix);});
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', cdnData.cdn+'/emotes/bbdgg.css') )
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', cdnData.cdn+'/emotes/emotes.css?_='+cdnData.cacheKey) )
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', cdnData.cdn+'/flairs/flairs.css?_='+cdnData.cacheKey) )
	$.when(
	    new Promise(res => $.getJSON('/api/chat/me').done(res).fail(() => res(null))),
	    new Promise(res => $.getJSON('/api/chat/history').done(res).fail(() => res(null)))
	).then((userAndSettings, history) =>
	    new Chat()
		.withUserAndSettings(userAndSettings)
		.withEmotes(emotes)
		.withGui()
		.withHistory(history)
		.withWhispers()
		.connect(WEBSOCKET_URI)
	)
});
=======
import {fetch} from 'whatwg-fetch'
import Chat from './chat/js/chat'
import $ from 'jquery'

const script = document.getElementById('chat-include')
const chat = new Chat({
    url: `ws${location.protocol === 'https:' ? 's' : ''}://${location.host}/ws`,
    api: {base: `${location.protocol}//${location.host}`},
    cdn: {base: script.getAttribute('data-cdn')},
    cacheKey: script.getAttribute('data-cache-key')
});

$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdn.destiny.gg/emotes/bbdgg.css') )

chat.withGui(require('./views/embed.html'))
    .then(() => chat.loadUserAndSettings())
    .then(() => chat.loadEmotesAndFlairs())
    .then(() => chat.loadHistory())
    .then(() => chat.loadWhispers())
    .then(() => chat.connect())

// Keep the website session alive.
setInterval(() => fetch(`${chat.config.api.base}/ping`).catch(console.warn), 10*60*1000)
>>>>>>> December-Fixes
