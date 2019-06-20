# cardscript-extract-graphs

[![Tymly Cardscript](https://img.shields.io/badge/tymly-cardscript-blue.svg)](https://tymly.io/)
[![Build Status](https://travis-ci.com/wmfs/cardscript-extract-graphs.svg?branch=master)](https://travis-ci.com/wmfs/cardscript-extract-graphs)
[![npm (scoped)](https://img.shields.io/npm/v/@wmfs/cardscript-extract-graphs.svg)](https://www.npmjs.com/package/@wmfs/cardscript-extract-graphs) 
[![codecov](https://codecov.io/gh/wmfs/cardscript-extract-graphs/branch/master/graph/badge.svg)](https://codecov.io/gh/wmfs/cardscript-extract-graphs) 
[![CodeFactor](https://www.codefactor.io/repository/github/wmfs/cardscript-extract-graphs/badge)](https://www.codefactor.io/repository/github/wmfs/cardscript-extract-graphs) 
[![Dependabot badge](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com/) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) 
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/wmfs/tymly/blob/master/packages/concrete-paths/LICENSE)

> Extracts graph components from Cardscript.

## <a name="install"></a>Install
```bash
$ npm install cardscript-extract-graphs --save
```

## <a name="usage"></a>Usage

```javascript
const extractGraphs = require('@wmfs/cardscript-extract-graphs')

const graphs = extractGraphs(
  {
    "type": "AdaptiveCard",
    "body": [
      {
        "type": "Graph",
        "stats": {
          "mean": "{{data.mean}}",
          "stdev": "{{data.stdev}}",
          "min": "{{data.min}}",
          "max": "{{data.max}}"
        }
      }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.0"
  }
)

```

## <a name="test"></a>Testing

```bash
$ npm test
```

## <a name="license"></a>License
[MIT](https://github.com/wmfs/cardscript/blob/master/LICENSE)
