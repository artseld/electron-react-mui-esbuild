# electron-react-mui-esbuild

An [Electron](https://www.electronjs.org/) boilerplate with hot reloading for [React](https://reactjs.org/) + [MUI](https://mui.com) and [TypeScript](https://www.typescriptlang.org/). Forked from [sprout2000/electron-react-esbuild](https://github.com/sprout2000/electron-react-esbuild).

[![GitHub license](https://img.shields.io/github/license/artseld/electron-react-mui-esbuild)](https://github.com/artseld/electron-react-mui-esbuild/blob/main/LICENSE.md)
![jest](./coverage/badge.svg)
[![GitHub stars](https://img.shields.io/github/stars/artseld/electron-react-mui-esbuild)](https://github.com/artseld/electron-react-mui-esbuild/stargazers)

## Features

- Supports hot reloading in both the main and renderer processes.
- With sample scripts for [electron-builder](https://www.electron.build/).
- In addition, sample icons for macOS and Windows are included.

<img width="804" alt="Screenshot 2024-01-06 at 23 01 52" src="https://github.com/artseld/electron-react-mui-esbuild/assets/1220734/8329fd0d-0dfa-4a0e-bdfb-102b147da67b">

## Usage

```sh
$ git clone https://github.com/artseld/electron-react-mui-esbuild.git
$ cd electron-react-mui-esbuild
$ npm install

# on development
$ npm run dev

# on production
$ npm run build && npm run package
```

_NOTE: You will need to have [Node.js](https://nodejs.org/) and [Git](https://git-scm.com/) installed._

## Unit test

```sh
# run the unit test
$ npm test
```

## Copyright

Copyright (c) 2024 artseld, sprout2000
