(function () {
  window.OsWidgetInitEvent = new CustomEvent('OsWidgetInit');
  window.addEventListener('OsWidgetInitDaemon', e => {
    let data = localStorage.getItem('onesky-widget');
    let parsedData = JSON.parse(data) ?? [];
    let [firstParsedValue] = parsedData;

    if (data && firstParsedValue) {
      parsedData.forEach(elem => {
        const componentHtmlTag = window.OsSelectors.filter(obj => {
          return obj.type === elem.type;
        })?.shift()?.htmlTag;
        const {
          componentInDom,
          isExistComponentHasChildren
        } = window.OsWidget.checkComponentInitialization(componentHtmlTag);

        if (componentInDom && !isExistComponentHasChildren) {
          window.OsWidget.OsWidgetInit();
        }

        if (componentInDom && isExistComponentHasChildren && elem.initialized === false) {
          elem.initialized = true;
        }
      })
    }
    window.OsWidget.findComponentsInDom();
    setTimeout(() => window.dispatchEvent(new CustomEvent('OsWidgetInitDaemon', {})), 5000);
  })

  // Begin code-gen: Selector of app rule
  console.log("Keep this placeholder mark for selectors code generation: begin");
  window.OsSelectors = [{
    "type": "display-language",
    "htmlTag": "language-selector",
    "theme": "generals",
    "options": ["ar_AE", "en_US", "ru_RU", "zh_Hans_CN", "zh_Hant_TW"],
    "defaultValue": "en_US",
    "respectOrder": ["user-input", "auto-detection"],
    "webTransitionMappings": [{ "localeId": "ar_AE", "location": "?lang=ar-AE" }, {
      "localeId": "en_US",
      "location": "?lang=en-US"
    }, { "localeId": "ru_RU", "location": "?lang=ru-RU" }, {
      "localeId": "zh_Hans_CN",
      "location": "?lang=zh-Hans-CN"
    }, { "localeId": "zh_Hant_TW", "location": "?lang=zh-Hant-TW" }],
    "isWebTransitionReloadPage": false,
    "locales": [{
      "id": "ar_AE",
      "displayName": "العربية",
      "platformLocale": "ar-AE",
      "additionalProperties": [{ "key": "direction", "value": "rtl" }]
    }, {
      "id": "en_US",
      "displayName": "English",
      "platformLocale": "en-US",
      "additionalProperties": [{ "key": "direction", "value": "ltr" }]
    }, {
      "id": "ru_RU",
      "displayName": "русский",
      "platformLocale": "ru-RU",
      "additionalProperties": [{ "key": "direction", "value": "ltr" }]
    }, {
      "id": "zh_Hans_CN",
      "displayName": "简体中文 (中国)",
      "platformLocale": "zh-Hans-CN",
      "additionalProperties": [{ "key": "direction", "value": "ltr" }]
    }, {
      "id": "zh_Hant_TW",
      "displayName": "繁體中文 (台灣)",
      "platformLocale": "zh-Hant-TW",
      "additionalProperties": [{ "key": "direction", "value": "ltr" }]
    }],
    "css": ".oswidget-dropdown-language-current-selection,.oswidget-dropdown-language-current-selection-rtl{background-image:url(https://onesky-locale-widget-web-stag.firebaseapp.com/images/global.png);background-repeat:no-repeat;background-size:19px 19px}.oswidget-dropdown-language{position:relative;display:inline-block}.oswidget-dropdown-language-button{padding:0;font-size:13px;border:none;outline:0;cursor:pointer}.oswidget-dropdown-language-current-selection{border:1px solid #cacaca;background-color:#fafafa;padding:5px 5px 5px 20px;width:195px;background-position:4px 50%}.oswidget-dropdown-language-current-selection-name{width:150px}.oswidget-dropdown-language-arrow{float:right}.oswidget-dropdown-language-content{display:none;position:absolute;min-width:195px;box-shadow:0 2px 4px 0 rgba(0,0,0,.2);border:1px solid #cacaca;z-index:99}.oswidget-dropdown-language-content li{color:#00a4bd;padding:10px 10px 10px 32px;text-decoration:none;text-align:left;display:block}.oswidget-dropdown-language-content li:hover{background-color:#ddd;color:#00a4bd}.oswidget-dropdown-language:hover .oswidget-dropdown-language-content{display:block;background-color:#fafafa}.oswidget-dropdown-language:hover .oswidget-dropdown-language-button{color:#00a4bd}.oswidget-dropdown-language-rtl{position:relative;display:inline-block}.oswidget-dropdown-language-button-rtl{padding:0;font-size:13px;border:none;outline:0;cursor:pointer}.oswidget-dropdown-language-current-selection-rtl{border:1px solid #cacaca;background-color:#fafafa;padding:5px 20px 5px 5px;width:170px;background-position:171px 50%}.oswidget-dropdown-language-current-selection-name-rtl{width:150px}.oswidget-dropdown-language-arrow-rtl{float:left}.oswidget-dropdown-language-content-rtl{display:none;position:absolute;min-width:195px;box-shadow:0 0 4px 2px rgba(0,0,0,.2);border:1px solid #cacaca;z-index:99}.oswidget-dropdown-language-content-rtl li{color:#333;padding:10px 32px 10px 10px;text-decoration:none;text-align:right;display:block}.oswidget-dropdown-language-content-rtl li:hover{background-color:#ddd;color:#000}.oswidget-dropdown-language-rtl:hover .oswidget-dropdown-language-content-rtl{display:block;background-color:#fafafa}.oswidget-dropdown-language-rtl:hover .oswidget-dropdown-language-button-rtl{color:#00a4bd} input[type=search]:focus{outline:0} input[type=search]{border:1px solid #d3d3d3;width:100%;height:2rem;padding:1rem .5rem;border-top:none;} .search-list{list-style-type:none;padding-left:0;margin-bottom:0;} .general-oswidget-dropdown-language-current-selection,.general-oswidget-dropdown-language-current-selection-rtl{background-image:url(https://onesky-locale-widget-web-stag.firebaseapp.com/images/global.png);background-repeat:no-repeat;background-size:19px 19px}.general-oswidget-dropdown-language{position:relative;display:inline-block}.general-oswidget-dropdown-language-button{padding:0;font-size:13px;border:none;outline:0;cursor:pointer}.general-oswidget-dropdown-language-current-selection{border:1px solid #cacaca;background-color:#fafafa;padding:5px 5px 5px 20px;width:195px;background-position:4px 50%}.general-oswidget-dropdown-language-current-selection-name{width:150px}.general-oswidget-dropdown-language-arrow{float:right}.general-oswidget-dropdown-language-content{display:none;position:absolute;min-width:195px;box-shadow:0 2px 4px 0 rgba(0,0,0,.2);border:1px solid #cacaca;z-index:99;border-top:none;}.general-oswidget-dropdown-language-content li{color:#333;padding:10px 10px 10px 32px;text-decoration:none;text-align:left;display:block}.general-oswidget-dropdown-language-content li:hover{background-color:#ddd;color:#000}.general-oswidget-dropdown-language:hover .general-oswidget-dropdown-language-content{display:block;background-color:#fafafa}.general-oswidget-dropdown-language:hover .general-oswidget-dropdown-language-button{color:#000}.general-oswidget-dropdown-language-rtl{position:relative;display:inline-block}.general-oswidget-dropdown-language-button-rtl{padding:0;font-size:13px;border:none;outline:0;cursor:pointer}.general-oswidget-dropdown-language-current-selection-rtl{border:1px solid #cacaca;background-color:#fafafa;padding:5px 20px 5px 5px;width:170px;background-position:171px 50%}.general-oswidget-dropdown-language-current-selection-name-rtl{width:150px}.general-oswidget-dropdown-language-arrow-rtl{float:left}.general-oswidget-dropdown-language-content-rtl{display:none;position:absolute;min-width:195px;box-shadow:0 0 4px 2px rgba(0,0,0,.2);border:1px solid #cacaca;z-index:99}.general-oswidget-dropdown-language-content-rtl li{color:#333;padding:10px 32px 10px 10px;text-decoration:none;text-align:right;display:block}.general-oswidget-dropdown-language-content-rtl li:hover{background-color:#ddd;color:#000}.general-oswidget-dropdown-language-rtl:hover .general-oswidget-dropdown-language-content-rtl{display:block;background-color:#fafafa}.general-oswidget-dropdown-language-rtl:hover .general-oswidget-dropdown-language-button-rtl{color:#000}"
  }, {
    "type": "display-region",
    "htmlTag": "region-selector",
    "theme": "generalq",
    "options": ["CN", "JP", "TW", "US", "RU"],
    "defaultValue": "US",
    "respectOrder": ["user-input", "auto-detection"],
    "webTransitionMappings": [{ "localeId": "CN", "location": "?region=CN" }, {
      "localeId": "JP",
      "location": "?region=JP"
    }, { "localeId": "TW", "location": "?region=TW" }, {
      "localeId": "US",
      "location": "?region=US"
    }, { "localeId": "AE", "location": "?region=AE" }, { "localeId": "RU", "location": "?region=RU" }],
    "isWebTransitionReloadPage": true,
    "locales": [{
      "id": "AE",
      "displayName": "United Arab Emirates",
      "regionLanguages": [],
      "platformLocale": "AE"
    }, { "id": "CN", "displayName": "China", "regionLanguages": [], "platformLocale": "CN" }, {
      "id": "JP",
      "displayName": "Japan",
      "regionLanguages": [],
      "platformLocale": "JP"
    }, { "id": "RU", "displayName": "Russia", "regionLanguages": [], "platformLocale": "RU" }, {
      "id": "TW",
      "displayName": "Taiwan",
      "regionLanguages": [],
      "platformLocale": "TW"
    }, { "id": "US", "displayName": "United States", "regionLanguages": [], "platformLocale": "US" }],
    "css": ".oswidget-dropdown-region-current-selection,.oswidget-dropdown-region-current-selection-rtl{background-image:url(https://onesky-locale-widget-web-stag.firebaseapp.com/images/global.png);background-repeat:no-repeat;background-size:19px 19px}.oswidget-dropdown-region{position:relative;display:inline-block}.oswidget-dropdown-region-button{padding:0;font-size:13px;border:none;outline:0;cursor:pointer}.oswidget-dropdown-region-current-selection{border:1px solid #cacaca;background-color:#fafafa;padding:5px 5px 5px 20px;width:170px;background-position:4px 50%}.oswidget-dropdown-region-current-selection-name{width:150px}.oswidget-dropdown-region-arrow{float:right}.oswidget-dropdown-region-content{display:none;position:absolute;min-width:195px;box-shadow:0 2px 4px 0 rgba(0,0,0,.2);border:1px solid #cacaca;z-index:99}.oswidget-dropdown-region-content a{color:#333;padding:10px 10px 10px 32px;text-decoration:none;text-align:left;display:block}.oswidget-dropdown-region-content a:hover{background-color:#ddd;color:#000}.oswidget-dropdown-region:hover .oswidget-dropdown-region-content{display:block;background-color:#fafafa}.oswidget-dropdown-region:hover .oswidget-dropdown-region-button{color:#00a4bd}.oswidget-dropdown-region-rtl{position:relative;display:inline-block}.oswidget-dropdown-region-button-rtl{padding:0;font-size:13px;border:none;outline:0;cursor:pointer}.oswidget-dropdown-region-current-selection-rtl{border:1px solid #cacaca;background-color:#fafafa;padding:5px 20px 5px 5px;width:170px;background-position:171px 50%}.oswidget-dropdown-region-current-selection-name-rtl{width:150px}.oswidget-dropdown-region-arrow-rtl{float:left}.oswidget-dropdown-region-content-rtl{display:none;position:absolute;min-width:195px;box-shadow:0 0 4px 2px rgba(0,0,0,.2);border:1px solid #cacaca;z-index:99}.oswidget-dropdown-region-content-rtl a{color:#333;padding:10px 32px 10px 10px;text-decoration:none;text-align:right;display:block}.oswidget-dropdown-region-content-rtl a:hover{background-color:#ddd;color:#000}.oswidget-dropdown-region-rtl:hover .oswidget-dropdown-region-content-rtl{display:block;background-color:#fafafa}.oswidget-dropdown-region-rtl:hover .oswidget-dropdown-region-button-rtl{color:#00a4bd}"
  }, {
    "type": "interested-regions",
    "htmlTag": "interested-regions-selector",
    "theme": "general",
    "options": ["US", "JP", "TW", "RU"],
    "defaultValue": "US",
    "respectOrder": ["user-input", "auto-detection"],
    "locales": [{
      "id": "AE",
      "displayName": "United Arab Emirates",
      "regionLanguages": [],
      "platformLocale": "AE"
    }, { "id": "CN", "displayName": "China", "regionLanguages": [], "platformLocale": "CN" }, {
      "id": "JP",
      "displayName": "Japan",
      "regionLanguages": [],
      "platformLocale": "JP"
    }, { "id": "RU", "displayName": "Russia", "regionLanguages": [], "platformLocale": "RU" }, {
      "id": "TW",
      "displayName": "Taiwan",
      "regionLanguages": [],
      "platformLocale": "TW"
    }, { "id": "US", "displayName": "United States", "regionLanguages": [], "platformLocale": "US" }],
    "css": ".oswidget-interested-regions-multi-select-checkbox{width:200px}.oswidget-interested-regions-select-option{position:relative}.oswidget-interested-regions-select-option select{width:100%;font-weight:700}.oswidget-interested-regions-select-bg{position:absolute;left:0;right:0;top:0;bottom:0}#oswidget-interested-regions{display:none;border:1px solid #dadada}#oswidget-interested-regions label{display:block;padding:0;font-size:13px}#checkboxes label:hover{background-color:#1e90ff} #interested-reg-select-ul{list-style:none;padding-left:0;} #interested-reg-select-ul > li > label:hover{cursor:pointer;}   .oswidget-interested-regions-multi-select-checkbox:hover #oswidget-interested-regions{display:block;} .oswidget-interested-regions-multi-select-checkbox:hover{cursor:pointer;} #interested-regions-select-ul{list-style: none;padding-left:0;} #interested-regions-select-ul > li > label:hover{cursor:pointer;}\""
  }, {
    "type": "understood-languages",
    "htmlTag": "understood-languages-selector",
    "theme": "general",
    "options": ["en_US", "zh_Hant_TW", "ru_RU"],
    "defaultValue": "en_US",
    "respectOrder": ["user-input", "auto-detection"],
    "locales": [{
      "id": "ar_AE",
      "displayName": "العربية",
      "platformLocale": "ar-AE",
      "additionalProperties": [{ "key": "direction", "value": "rtl" }]
    }, {
      "id": "en_US",
      "displayName": "English",
      "platformLocale": "en-US",
      "additionalProperties": [{ "key": "direction", "value": "ltr" }]
    }, {
      "id": "ru_RU",
      "displayName": "русский",
      "platformLocale": "ru-RU",
      "additionalProperties": [{ "key": "direction", "value": "ltr" }]
    }, {
      "id": "zh_Hans_CN",
      "displayName": "简体中文 (中国)",
      "platformLocale": "zh-Hans-CN",
      "additionalProperties": [{ "key": "direction", "value": "ltr" }]
    }, {
      "id": "zh_Hant_TW",
      "displayName": "繁體中文 (台灣)",
      "platformLocale": "zh-Hant-TW",
      "additionalProperties": [{ "key": "direction", "value": "ltr" }]
    }],
    "css": ".oswidget-understood-languages-multi-select-checkbox{width:200px}.oswidget-understood-languages-select-option{position:relative}.oswidget-understood-languages-select-option select{width:100%;font-weight:700}.oswidget-understood-languages-select-bg{position:absolute;left:0;right:0;top:0;bottom:0}#oswidget-understood-languages{display:none;border:1px solid #dadada}#oswidget-understood-languages label{display:block;padding:0;font-size:13px}#checkboxes label:hover{background-color:#1e90ff} #understood-lang-select-ul{list-style: none;padding-left:0;} .oswidget-understood-languages-multi-select-checkbox:hover #oswidget-understood-languages{display:block;} .oswidget-understood-languages-multi-select-checkbox:hover{cursor:pointer;} #understood-lang-select-ul > li > label:hover{cursor:pointer;}"
  }];
  console.log("Keep this placeholder mark for selectors code generation: end");
  // End code-gen: Selector of app rule

  window.OsWidget = {
    loaders: [],   // {type: _type, loader: _loader} to be iterated when init
    selectorRenders: [],   // {type: _type, render: _render}
    init: () => {
      window.dispatchEvent(new CustomEvent('OsWidgetInitDaemon'));
      window.addEventListener('load', e => {
        localStorage.setItem('onesky-find-components-count', '0');
      })
      window.OsWidget.replace();
    },

    // when a locale preference is located a few clicks away and the app manipulates the dom after DOMContentLoaded event is fired
    // this fixes the dom event listener fires the DOMContentLoaded event before the document is loaded
    replace() {
      window.OsWidget.loaders.forEach(loaderObject => {
        loaderObject.loader();
      });

      window.OsWidget.OsWidgetInit();
    },
    OsWidgetInit() {
      let parsedWidgetData = JSON.parse(localStorage.getItem('onesky-widget')) ?? [];
      let [firstParsedElement] = parsedWidgetData;
      if (parsedWidgetData && firstParsedElement) {
        parsedWidgetData = parsedWidgetData.map(elem => {
          let initRes = window.OsWidget.initWithUrl(elem.type);
          elem.initialized = initRes === 1;
          return elem;
        })
        localStorage.setItem('onesky-widget', JSON.stringify(parsedWidgetData));
      }
    },
    checkComponentInitialization(componentHtmlTag = '') {
      const componentInDom = componentHtmlTag ? document.querySelector(componentHtmlTag) : null;
      const isExistComponentHasChildren = componentInDom?.hasChildNodes();
      return {
        componentInDom,
        isExistComponentHasChildren
      };
    },
    findComponentsInDom() {
      let isNoComponents = true;
      window.OsSelectors.map((elem) => {
        let { componentInDom } = window.OsWidget.checkComponentInitialization(elem.htmlTag);
        let initializedComponents = localStorage.getItem('onesky-widget') ?? [];
        if (componentInDom) {
          isNoComponents = false;
          if (initializedComponents.length) {
            initializedComponents = JSON.parse(initializedComponents);
          }

          initializedComponents = initializedComponents.filter(v => v);
          initializedComponents.push({
            type: elem.type,
            initialized: false
          });

          initializedComponents = initializedComponents.filter((elem, index, self) =>
              index === self.findIndex(t => (
                  t.type === elem.type
              ))
          )
          localStorage.setItem('onesky-widget', JSON.stringify(initializedComponents));
        } else {
          if (initializedComponents.length) {
            initializedComponents = JSON.parse(initializedComponents);
            if (initializedComponents.length) {
              initializedComponents = initializedComponents.filter(item => {
                return item.type !== elem.type
              })
              localStorage.setItem('onesky-widget', JSON.stringify(initializedComponents));
            }
          }
        }
      })
    },

    // handle selector's selected options according to url hostname, path or query
    initWithUrl(experienceType) {
      const localeId =
          OsWidget.getUrlQueryLocaleFromMappedLocation(experienceType) ||
          OsWidget.getUrlPathLocaleFromMappedLocation(experienceType) ||
          OsWidget.getUrlHostnameLocaleFromMappedLocation(experienceType);

      const targetLocales = [];

      if (localeId) {

        let targetLocale = null;

        const matchedOption = OsSelectors.find(selector => {

          if (selector.type == experienceType) {
            // the displayLanguageFromUrl is platform locale, we need to convert it to locale id for matching
            targetLocale = selector.locales.find(locale => {
              return locale.platformLocale == localeId;
            });

            if (targetLocale) {
              return selector.options.includes(targetLocale.id);
            } else {
              console.warn('Platform locale ' + localeId + ' not found for the type ' + experienceType + '.');
            }
          }
        });

        // extracted options from URL is valid
        if (matchedOption) {
          targetLocales.push(targetLocale.id);
          // remove the current type loader so that it won't be called to override the preference from URL
          OsWidget.loaders = OsWidget.loaders.filter(loaderObject => loaderObject.type !== experienceType);
        }
      }

      // render the selector with the locale value extracted from URL. Even there has no locale matches on URL, the selector will still being rendered
      OsWidget.render(experienceType, targetLocales);
      return 1;//???
    },

    // to be itereated when init
    addLoader(loader) {
      OsWidget.loaders.push(loader);
    },

    // called by other modules
    addSelectorRender(selectorRender) {
      OsWidget.selectorRenders.push(selectorRender);
    },

    // called by other modules
    addStyle(css) {
      const style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = css;
      document.head.appendChild(style);
    },

    // get user
    getUser() {
      const user = onesky.identifiedUser ?? null;
      if (user) {
        user.id = user.id ?? null;
        user.name = user.name ?? '';
        user.email = user.email ?? '';
      }
      return user;
    },

    // called by init function, render selectors after loaded user's display language preference
    render(experienceType, preferencedValues) {
      const selectorRender = OsWidget.selectorRenders.find(selectorRenderObject => {
        return selectorRenderObject.type === experienceType;
      });
      if (preferencedValues) {
        selectorRender?.render(preferencedValues);
      }
    },

    // called when an option is clicked in selector
    webTransition(selector, values) {
      const [targetPlatformLocale] = values;
      const targetLocale = selector.locales.find(locale => {
        return locale.platformLocale == targetPlatformLocale;
      });

      if (targetLocale) {
        const mappedTransition = selector.webTransitionMappings.find(mapping => {
          return mapping.localeId == targetLocale.id;
        });

        if (mappedTransition && mappedTransition.location) {
          const queryComponents = mappedTransition.location.split('=');
          const isQueryLocation = queryComponents.length == 2;
          const isHostnameLocation = mappedTransition.location.includes('://');

          if (isQueryLocation) {
            // query
            let [parameter] = queryComponents;
            parameter = parameter.replace('?', '').replace('&', '');
            OsWidget.rewriteParameteredUrlWithRefresh(parameter, targetPlatformLocale);
          } else if (isHostnameLocation) {
            // hostname changes must need reload
            window.location.href = mappedTransition.location;
          } else {
            // path
            const urlPathObject = OsWidget.getUrlPathObject(window.location.pathname);
            OsWidget.rewritePathUrlWithRefresh(mappedTransition.location + urlPathObject.fileName);
          }
        } else {
          console.warn("Transition location of locale '" + targetLocale.id + "' is not defined.");
        }
      }
    },

    getUrlPathObject(fullPath) {
      const path = fullPath.substring(0, fullPath.lastIndexOf("/"));
      const fileName = fullPath.replace(path, '');
      return {
        path,
        fileName
      }
    },

    getUrlQueryParameterValue(parameterName) {
      return decodeURIComponent((new RegExp('[?|&]' + parameterName + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
    },

    getQueryParameterNameFromOutput(output) {
      if (output.url && output.url.query) {
        return output.url.query.pattern.split('=')[0];
      }
      return null;
    },

    urlGetAddedParameter(url, param, value) {
      let hash = {};
      const parser = document.createElement('a');
      parser.href = url;

      const parameters = parser.search.split(/\?|&/);
      parameters.forEach(item => {
        let splattedParams = item.split('=') ?? [];
        let [firstParam, secondParam] = splattedParams;
        if (!firstParam && !secondParam) return;
        hash = {
          ...hash,
          [firstParam]: secondParam
        };
        hash[firstParam] = secondParam;
      })

      hash[param] = value;

      const list = [];
      Object.keys(hash).forEach(key => {
        list.push(key + '=' + hash[key]);
      });

      parser.search = '?' + list.join('&');
      return parser.href;
    },

    // get locale id from url if the hostname matched
    getUrlHostnameLocaleFromMappedLocation(experienceType) {

      const hostname = window.location.hostname;

      const selector = OsSelectors.find(selector => {
        return selector.type === experienceType;
      });

      let localeFromUrl = '';

      if (selector && selector.webTransitionMappings) {
        selector.webTransitionMappings.map(mapping => {
          if (mapping.location == hostname) {
            localeFromUrl = mapping.localeId;
          }
        });
      }

      return localeFromUrl;
    },

    // get locale id from url if the path matched
    getUrlPathLocaleFromMappedLocation(experienceType) {

      const urlPathObject = OsWidget.getUrlPathObject(window.location.pathname);

      const selector = OsSelectors.find(selector => selector.type === experienceType);

      let localeFromUrl = '';

      if (selector && selector.webTransitionMappings) {
        selector.webTransitionMappings.forEach(mapping => {
          if (mapping.location == urlPathObject.path) {
            localeFromUrl = mapping.localeId;
          }
        });
      }

      return localeFromUrl;
    },

    // get locale id from url if the query param matched
    getUrlQueryLocaleFromMappedLocation(experienceType) {
      // query from url in JSON
      const queryJson = OsWidget.queryStringToJson(window.location.search);

      // url location query params from rules definition
      const queryParams = [];

      // check if the query, path or hostname match the selector mapping locations
      let localeFromUrl = '';

      const selector = OsSelectors.find(selector => selector.type === experienceType);

      if (selector && selector.webTransitionMappings) {
        selector.webTransitionMappings.forEach(mapping => {
          Object.keys(OsWidget.queryStringToJson(mapping.location)).forEach(key => {
            if (!queryParams.includes(key)) {
              queryParams.push(key);
            }
          });
        });
      }

      Object.keys(queryJson).forEach(key => {
        if (queryParams.includes(key)) {
          localeFromUrl = queryJson[key];
        }
      });

      return localeFromUrl;
    },

    queryStringToJson(queryString) {
      try {
        return JSON.parse('{"' + queryString.replace('?', '').replace(/=/g, '":"').replace(/&/g, '","') + '"}');
      } catch (err) {
        return {};
      }
    },

    rewriteParameteredUrlWithRefresh(parameterName, parameterValue) {
      window.location.href = OsWidget.urlGetAddedParameter(location.href, parameterName, parameterValue);
    },

    rewriteParameteredUrlWithoutRefresh(parameterName, parameterValue) {
      const url = OsWidget.urlGetAddedParameter(location.href, parameterName, parameterValue);
      window.history.replaceState({}, 'title', url);
    },

    rewritePathUrlWithRefresh(path) {
      window.location.pathname = path;
    },

    rewritePathUrlWithoutRefresh(path) {
      const locationSplit = location.href.split(location.pathname);
      const url = locationSplit[0] + path + locationSplit[1];
      window.history.replaceState({}, 'title', url);
    }
  },

      window.OsWidgetStylist = {
        renderHtmlSelector(htmlTagElement, options, preferencedValue, onChangedCallback) {
          // clean up the element
          htmlTagElement.innerHTML = '';

          // Create SELECT with on change event listener
          const selectorElement = document.createElement('SELECT');
          selectorElement.addEventListener('change', onChangedCallback);
          htmlTagElement.appendChild(selectorElement);

          options.map(option => {
            // TODO: make sure preferencedValue is the platform locale
            const isSelected = (option.value == preferencedValue);
            let optionElement = document.createElement('OPTION');
            optionElement = {
              ...optionElement,
              value: option.value,
              text: option.name,
              selected: isSelected
            }
            selectorElement.appendChild(optionElement);
          });
        }
      };
}());
