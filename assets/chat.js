import Chat from './chat/js/chat';
import emotes from './emotes.json';

fetch('https://cdn.destiny.gg/0.0.0/emotes/emotes.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	$.each(myJson, function(i, item){
		emotes['destiny'].push(myJson[i].prefix);});
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdn.destiny.gg/0.0.0/emotes/emotes.css') )
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdn.destiny.gg/0.0.0/flairs/flairs.css') )
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://cdn.destiny.gg/0.0.0/emotes/bbdgg.css') )

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
