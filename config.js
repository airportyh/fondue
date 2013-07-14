fondue.config({
  "volo": {
    "modules": {
      "jquery": "volo/jquery.js"
    }
  },
  "bower": {
    "modules": {
      "qwery": {
        "main": "bower_components/qwery/qwery.js",
        "format": "commonjs"
      },
      "underscore": {
        "main": "bower_components/underscore/underscore.js",
        "format": "commonjs"
      }
    }
  },
  "jam": {
    "format": "amd",
    "modules": {
      "async": "jam/async/lib/async.js"
    }
  },
  "npm": {
    "format": "commonjs",
    "modules": {
      "async": "node_modules/async/lib/async",
      "backbone": {
        "main": "node_modules/backbone/backbone.js",
        "deps": {
          "underscore": "node_modules/backbone/node_modules/underscore/underscore.js"
        }
      },
      "bodydouble": {
        "main": "node_modules/bodydouble/index.js",
        "deps": {
          "ispy": "node_modules/bodydouble/node_modules/ispy/index.js"
        }
      },
      "empath": {
        "main": "node_modules/empath/index",
        "deps": {
          "colors": "node_modules/empath/node_modules/colors/colors",
          "deep-equal": "node_modules/empath/node_modules/deep-equal/index.js",
          "jsdom": {
            "main": "node_modules/empath/node_modules/jsdom/lib/jsdom",
            "deps": {
              "contextify": {
                "main": "node_modules/empath/node_modules/jsdom/node_modules/contextify/lib/contextify",
                "deps": {
                  "bindings": "node_modules/empath/node_modules/jsdom/node_modules/contextify/node_modules/bindings/bindings.js"
                }
              },
              "cssom": "node_modules/empath/node_modules/jsdom/node_modules/cssom/lib/index.js",
              "cssstyle": "node_modules/empath/node_modules/jsdom/node_modules/cssstyle/lib/CSSStyleDeclaration.js",
              "htmlparser2": {
                "main": "node_modules/empath/node_modules/jsdom/node_modules/htmlparser2/lib/index.js",
                "deps": {
                  "domelementtype": "node_modules/empath/node_modules/jsdom/node_modules/htmlparser2/node_modules/domelementtype/index.js",
                  "domhandler": "node_modules/empath/node_modules/jsdom/node_modules/htmlparser2/node_modules/domhandler/index.js",
                  "domutils": "node_modules/empath/node_modules/jsdom/node_modules/htmlparser2/node_modules/domutils/index.js",
                  "readable-stream": "node_modules/empath/node_modules/jsdom/node_modules/htmlparser2/node_modules/readable-stream/readable.js"
                }
              },
              "nwmatcher": "node_modules/empath/node_modules/jsdom/node_modules/nwmatcher/src/nwmatcher",
              "request": {
                "main": "node_modules/empath/node_modules/jsdom/node_modules/request/index.js",
                "deps": {
                  "aws-sign": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/aws-sign/index.js",
                  "cookie-jar": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/cookie-jar/index.js",
                  "forever-agent": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/forever-agent/index.js",
                  "form-data": {
                    "main": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/form-data/lib/form_data",
                    "deps": {
                      "combined-stream": {
                        "main": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/form-data/node_modules/combined-stream/lib/combined_stream",
                        "deps": {
                          "delayed-stream": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/form-data/node_modules/combined-stream/node_modules/delayed-stream/lib/delayed_stream"
                        }
                      }
                    }
                  },
                  "hawk": {
                    "main": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/hawk/index",
                    "deps": {
                      "boom": {
                        "main": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/hawk/node_modules/boom/index",
                        "deps": {
                          "hoek": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/hawk/node_modules/boom/node_modules/hoek/index"
                        }
                      },
                      "cryptiles": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/hawk/node_modules/cryptiles/index",
                      "hoek": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/hawk/node_modules/hoek/index",
                      "sntp": {
                        "main": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/hawk/node_modules/sntp/index",
                        "deps": {
                          "hoek": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/hawk/node_modules/sntp/node_modules/hoek/index"
                        }
                      }
                    }
                  },
                  "http-signature": {
                    "main": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/http-signature/lib/index.js",
                    "deps": {
                      "asn1": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/http-signature/node_modules/asn1/lib/index.js",
                      "assert-plus": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/http-signature/node_modules/assert-plus/assert.js",
                      "ctype": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/http-signature/node_modules/ctype/ctype.js"
                    }
                  },
                  "json-stringify-safe": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/json-stringify-safe/stringify.js",
                  "mime": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/mime/mime.js",
                  "node-uuid": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/node-uuid/uuid.js",
                  "oauth-sign": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/oauth-sign/index.js",
                  "qs": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/qs/index",
                  "tunnel-agent": "node_modules/empath/node_modules/jsdom/node_modules/request/node_modules/tunnel-agent/index.js"
                }
              }
            }
          }
        }
      },
      "esprima": "node_modules/esprima/esprima.js",
      "ispy": "node_modules/ispy/index.js",
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
    }
  }
});