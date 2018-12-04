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
