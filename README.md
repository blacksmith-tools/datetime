<p align="center">
 <img src="./internals/images/logotype.png" width="200" style="border:0">
</p>

# Hammer

* (in development)

**important!** Always see the documentation

## Prerequisites

- [Node >= v6.9.2](https://nodejs.org/en/)
- NPM >= v3.10.8
- [Yarn >= v0.21.3](https://yarnpkg.com/en/docs/install#linux-tab) or `npm install -g yarn`

### Prerequisites for development

- **Editor Config**:
  - [Atom](https://github.com/sindresorhus/atom-editorconfig#readme)
  - [Sublime text](https://github.com/sindresorhus/editorconfig-sublime#readme)
  - [Brackets](https://github.com/kidwm/brackets-editorconfig/)
  - [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [Vim](https://github.com/editorconfig/editorconfig-vim#readme)
- **CSS Comb**:
  - [Atom](https://atom.io/packages/atom-csscomb)
  - [Sublime text](https://packagecontrol.io/packages/CSScomb)
  - [Brackets](https://github.com/i-akhmadullin/brackets-csscomb)
  - [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-csscomb)
  - [Vim](https://github.com/csscomb/vim-csscomb)
- **Sass Lint**:
  - [Atom](https://atom.io/packages/linter-sass-lint)
  - [Sublime Text](https://github.com/skovhus/SublimeLinter-contrib-sass-lint)
  - [Brackets](https://github.com/petetnt/brackets-sass-lint)
  - [IntelliJ IDEA, RubyMine, WebStorm, PhpStorm, PyCharm](https://github.com/idok/sass-lint-plugin)
  - [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=glen-84.sass-lint)
  - [Vim](https://github.com/gcorne/vim-sass-lint)
- **ESLint**:
  - [Atom](https://atom.io/packages/linter-eslint)
  - [Sublime text](https://github.com/roadhump/SublimeLinter-eslint)
  - [IntelliJ IDEA, RubyMine, WebStorm, PhpStorm, PyCharm](http://plugins.jetbrains.com/plugin/7494)
  - [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Vim](https://github.com/scrooloose/syntastic/tree/master/syntax_checkers/javascript)


## In the your project
```bash
npm install --save-dev hammer
```

```bash
// package.json
"devDependencies": {
  "hammer": "vX.X.X"
}
```

```bash
// import the CSS

// ex: layout.js
import '[node_modules path]/hammer/dist/blacksmith.min.css';

// component.js
import { Alert } from 'hammer';

// webpack
{
  test: /\.scss$/,
  loader: 'style!css?modules=1&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss!sass?sourceMap',
  include: path.resolve(__dirname, '../../source'),
  exclude: path.resolve(__dirname, "../../node_modules")
},
{
  test: /\.css/,
  loader: 'style!css',
  include: path.resolve(__dirname, "../../node_modules/hammer/dist/")
}
```


## Install

```bash
yarn // or yarn install
```

## Usage

## UI components (storybook)

```bash
yarn storybook
// http://localhost:9000
```

## Lint

```bash
yarn lint
//[Rules in ESLint](http://eslint.org/docs/rules/)
```

## Tests

```bash
yarn test
```

## Release

```bash
 npm install -g release-it
```
### Usage

Current release: v1.0.0-beta.4

Command:

```bash
release-it v1.0.0-beta.5
```

Questions and answers

**Release source repo**

```sh
- ? Show updated files? `Yes`
- M  package.json

- ? Commit (Release v1.0.0-beta.5)? `Yes`
- ? Tag (v1.0.0-beta.5)? `Yes`
- ? Push? `Yes`
- ? Publish "iron-fist" to npm? `No`
```

## CLI

### Creating file structure for the component

```bash
./helpers/component/create.sh component-name path
```
```sh
└── component-name
    ├── component-name/index.js
    ├── component-name/component-name-component.js
    ├── component-name/component-name.scss
    ├── component-name/component-name.story.js
    └── component-name/component-name.test.js
```

```bash
./helpers/component/create-with-redux.sh component-name path
```
```sh
└── component-name
    ├── component-name/index.js
    ├── component-name/component-name-actions.js
    ├── component-name/component-name-component.js
    ├── component-name/component-name-constants.js
    ├── component-name/component-name-container.js
    ├── component-name/component-name-reducer.js
    ├── component-name/component-name.scss
    ├── component-name/component-name.story.js
    └── component-name/component-name.test.js
```

## Manual

1. [Git Flow](./docs/manual/01-git-flow.md)
2. [Commits](./docs/manual/02-commits.md)
3. [Architecture](./docs/manual/03-architecture.md)
4. [Dependencies](./docs/manual/04-dependencies.md)
5. [Technologies](./docs/manual/05-technologies.md)
6. [Identation (code style)](./docs/manual/06-identation-code-style.md)
7. [CSS (code style)](./docs/manual/07-css-code-style.md)
8. [Javascript (code style)](./docs/manual/08-javascript-code-style.md)

**[⬆ back to the top](#prerequisites)**
