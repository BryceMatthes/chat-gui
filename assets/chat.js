import Chat from './chat/js/chat';
import emotes from './emotes.json';

let cdnData = ($("#chat-include").data());

fetch(cdnData.cdn+'/emotes/emotes.json?_='+cdnData.cacheKey)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
	$.each(myJson, function(i, item){
		emotes['destiny'].push(myJson[i].prefix);});
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', cdnData.cdn+'/emotes/emotes.css?_='+cdnData.cacheKey) )
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', cdnData.cdn+'/flairs/flairs.css?_='+cdnData.cacheKey) )
	$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', cdnData.cdn+'/emotes/bbdgg.css') )
"1541178182461.7682"
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
