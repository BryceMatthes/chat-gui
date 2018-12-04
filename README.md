# Destiny.gg Chat GUI

Source code for the chat gui [www.destiny.gg](http://www.destiny.gg/)
This is a work in progress!

## License

See [LICENSE.md](LICENSE.md)

#### Install the node dependencies

```
npm install
```

#### Developing

```
<<<<<<< HEAD
or
```shell
npm run build:production
=======
npm run start
>>>>>>> December-Fixes
```

### Get params
`u`: socket url
default `ws://localhost:9000`

<<<<<<< HEAD
```shell
npm run watch
```
=======
`a`: api url
default `http://localhost:8181`
>>>>>>> December-Fixes

`s`: cdn url
default `http://localhost:8182`

`c`: cache key
default `empty`

<<<<<<< HEAD
You can then test it by going to something like this....
```
http://localhost:8282/index.htm?u=wss://www.destiny.gg/ws&a=http://localhost:8181
```
=======
`t`: template
[EMBED | STREAM] default `embed`

`f`: font scale
only works on STREAM. [1 ... 10] default `1`

e.g. Connect to destiny.gg, with defaults
`http://localhost:8282/index.htm?u=wss://www.destiny.gg/ws`

e.g. Connect to destiny.gg with the stream template
`http://localhost:8282/index.htm?u=wss://destiny.gg/ws&t=stream`
>>>>>>> December-Fixes
