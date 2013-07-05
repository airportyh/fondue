fondue.config({
  "async": "node_modules/async/lib/async",
  "backbone": {
    "main": "node_modules/backbone/backbone.js",
    "deps": {
      "underscore": "node_modules/backbone/node_modules/underscore/underscore.js"
    }
  },
  "esprima": "node_modules/esprima/esprima.js",
  "module-deps": {
    "main": "node_modules/module-deps/index.js",
    "deps": {
      "JSONStream": {
        "main": "node_modules/module-deps/node_modules/JSONStream/index",
        "deps": {
          "jsonparse": "node_modules/module-deps/node_modules/JSONStream/node_modules/jsonparse/jsonparse.js",
          "through": "node_modules/module-deps/node_modules/JSONStream/node_modules/through/index.js"
        }
      },
      "browser-resolve": "node_modules/module-deps/node_modules/browser-resolve/index.js",
      "concat-stream": "node_modules/module-deps/node_modules/concat-stream/index",
      "detective": {
        "main": "node_modules/module-deps/node_modules/detective/index.js",
        "deps": {
          "escodegen": {
            "main": "node_modules/module-deps/node_modules/detective/node_modules/escodegen/escodegen.js",
            "deps": {
              "source-map": {
                "main": "node_modules/module-deps/node_modules/detective/node_modules/escodegen/node_modules/source-map/lib/source-map.js",
                "deps": {
                  "amdefine": "node_modules/module-deps/node_modules/detective/node_modules/escodegen/node_modules/source-map/node_modules/amdefine/amdefine.js"
                }
              }
            }
          },
          "esprima": "node_modules/module-deps/node_modules/detective/node_modules/esprima/esprima.js"
        }
      },
      "resolve": "node_modules/module-deps/node_modules/resolve/index.js",
      "through": "node_modules/module-deps/node_modules/through/index.js"
    }
  }
});