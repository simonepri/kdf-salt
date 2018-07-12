<h1 align="center">
  <b>kdf-salt</b>
</h1>
<p align="center">
  <!-- CI - TravisCI -->
  <a href="https://travis-ci.com/simonepri/kdf-salt">
    <img src="https://img.shields.io/travis/com/simonepri/kdf-salt/master.svg?label=MacOS%20%26%20Linux" alt="Mac/Linux Build Status" />
  </a>
  <!-- CI - AppVeyor -->
  <a href="https://ci.appveyor.com/project/simonepri/kdf-salt">
    <img src="https://img.shields.io/appveyor/ci/simonepri/kdf-salt/master.svg?label=Windows" alt="Windows Build status" />
  </a>
  <!-- Coverage - Codecov -->
  <a href="https://codecov.io/gh/simonepri/kdf-salt">
    <img src="https://img.shields.io/codecov/c/github/simonepri/kdf-salt/master.svg" alt="Codecov Coverage report" />
  </a>
  <!-- DM - Snyk -->
  <a href="https://snyk.io/test/github/simonepri/kdf-salt?targetFile=package.json">
    <img src="https://snyk.io/test/github/simonepri/kdf-salt/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" />
  </a>
  <!-- DM - David -->
  <a href="https://david-dm.org/simonepri/kdf-salt">
    <img src="https://david-dm.org/simonepri/kdf-salt/status.svg" alt="Dependency Status" />
  </a>

  <br/>

  <!-- Code Style - XO-Prettier -->
  <a href="https://github.com/xojs/xo">
    <img src="https://img.shields.io/badge/code_style-XO+Prettier-5ed9c7.svg" alt="XO Code Style used" />
  </a>
  <!-- Test Runner - AVA -->
  <a href="https://github.com/avajs/ava">
    <img src="https://img.shields.io/badge/test_runner-AVA-fb3170.svg" alt="AVA Test Runner used" />
  </a>
  <!-- Test Coverage - Istanbul -->
  <a href="https://github.com/istanbuljs/nyc">
    <img src="https://img.shields.io/badge/test_coverage-NYC-fec606.svg" alt="Istanbul Test Coverage used" />
  </a>
  <!-- Init - ni -->
  <a href="https://github.com/simonepri/ni">
    <img src="https://img.shields.io/badge/initialized_with-ni-e74c3c.svg" alt="NI Scaffolding System used" />
  </a>
  <!-- Release - np -->
  <a href="https://github.com/sindresorhus/np">
    <img src="https://img.shields.io/badge/released_with-np-6c8784.svg" alt="NP Release System used" />
  </a>

  <br/>

  <!-- Version - npm -->
  <a href="https://www.npmjs.com/package/@kdf/salt">
    <img src="https://img.shields.io/npm/v/@kdf/salt.svg" alt="Latest version on npm" />
  </a>
  <!-- License - MIT -->
  <a href="https://github.com/simonepri/kdf-salt/tree/master/license">
    <img src="https://img.shields.io/github/license/simonepri/kdf-salt.svg" alt="Project license" />
  </a>
</p>
<p align="center">
  🎲 Crypto secure salt generator

  <br/>

  <sub>
    Coded with ❤️ by <a href="#authors">Simone Primarosa</a>.
  </sub>
</p>

## Install

```bash
npm install --save @kdf/salt
```

## Usage

```js
const gensalt = require('@kdf/salt');

gensalt(16).then(salt => {
  console.log(salt);
  // => <Buffer 70 2c 6e 1c c1 07 2e 26 dc 82 52 4e 1b cf 1d 23>
  console.log(salt.toString('base64'));
  // => cCxuHMEHLibcglJOG88dIw==
  console.log(salt.toString('hex'));
  // => 702c6e1cc1072e26dc82524e1bcf1d23
})
```

## API

<a name="gensalt"></a>

### gensalt(length) ⇒ <code>Promise.&lt;Buffer&gt;</code>
Generates a cryptographically secure random string to be used as a password salt
, using Node's built-in crypto.randomBytes() function.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - The salt as a Buffer.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>number</code> | The length of the salt to be generated. Must be an integer within the range (`0` <= `length` <= `2^31-1`). |

## Contributing
Contributions are REALLY welcome and if you find a security flaw in this code, PLEASE [report it][new issue].

## Authors
- **Simone Primarosa** - *Github* ([@simonepri][github:simonepri]) • *Twitter* ([@simoneprimarosa][twitter:simoneprimarosa])

See also the list of [contributors][contributors] who participated in this project.

## License
This project is licensed under the MIT License - see the [license][license] file for details.


<!-- Links -->
[new issue]: https://github.com/simonepri/kdf-salt/issues/new
[contributors]: https://github.com/simonepri/kdf-salt/contributors

[license]: https://github.com/simonepri/kdf-salt/tree/master/license

[github:simonepri]: https://github.com/simonepri
[twitter:simoneprimarosa]: http://twitter.com/intent/user?screen_name=simoneprimarosa
