#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Continuous Integration test reporter


## Install

```sh
$ npm install --save jobot-ci
```


## Usage
Jobot-ci uses restAPI from TeamCity or Hudson and send to chatroom the result of builds. 
Users can assign failing tests to other developers.
See [ci-test-manager](/scripts/ci-test-manager.coffee) for full documentation

##Known Issue
Jobot-ci doesn't work with Hubot 2.13 and higher

## License

MIT © [8D Technologies](http://www.8d.com)


[npm-image]: https://badge.fury.io/js/jobot-ci.svg
[npm-url]: https://npmjs.org/package/jobot-ci
[travis-image]: https://travis-ci.org/scboucher/jobot-ci.svg?branch=master
[travis-url]: https://travis-ci.org/scboucher/jobot-ci
[daviddm-image]: https://david-dm.org/scboucher/jobot-ci.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/scboucher/jobot-ci
