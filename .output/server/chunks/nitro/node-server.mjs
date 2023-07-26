globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, assertMethod, readBody, setCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "supabase": {
      "url": "https://osxrxhlkpbbjpzmxvftk.supabase.co",
      "key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zeHJ4aGxrcGJianB6bXh2ZnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3MTM5MTIsImV4cCI6MjAwMzI4OTkxMn0.unxTt_YHWbnm8GoXR_j26zY5P62PLJJaAmP6QqI9X0o",
      "client": {
        "auth": {
          "detectSessionInUrl": true,
          "persistSession": true,
          "autoRefreshToken": true
        }
      },
      "redirect": false,
      "cookies": {
        "name": "sb",
        "lifetime": 28800,
        "domain": "",
        "path": "/",
        "sameSite": "lax"
      }
    }
  },
  "OPENAI_API_KEY": "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",
  "PINECONE_API_KEY": "3cd93fc4-cf29-4530-a856-692a2202fb9d",
  "PINECONE_BASE_URL": "https://formwork-3f90a1d.svc.us-central1-gcp.pinecone.io",
  "supabase": {
    "serviceKey": ""
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/FORMWORK_logo_combo.png": {
    "type": "image/png",
    "etag": "\"380b-/JGWn9N+tzAXlEx/ZjMfFswGhvw\"",
    "mtime": "2023-07-26T10:38:15.566Z",
    "size": 14347,
    "path": "../public/FORMWORK_logo_combo.png"
  },
  "/Unite-dhabitation-Marseille_C.-Emden.jpg": {
    "type": "image/jpeg",
    "etag": "\"27ef2e-2NCZyHQ1dNjroKn5JZqrkFkNEzs\"",
    "mtime": "2023-07-26T10:38:15.566Z",
    "size": 2617134,
    "path": "../public/Unite-dhabitation-Marseille_C.-Emden.jpg"
  },
  "/birds2.jpg": {
    "type": "image/jpeg",
    "etag": "\"f0e1d-BNwah77XISZBUjU+eU1bWq4IpfI\"",
    "mtime": "2023-07-26T10:38:15.566Z",
    "size": 986653,
    "path": "../public/birds2.jpg"
  },
  "/buildings.jpg": {
    "type": "image/jpeg",
    "etag": "\"949c1-RrK/YsJ+Ia9rwemeW2dkQnlCug4\"",
    "mtime": "2023-07-26T10:38:15.562Z",
    "size": 608705,
    "path": "../public/buildings.jpg"
  },
  "/chinatown.jpg": {
    "type": "image/jpeg",
    "etag": "\"b9d34-aqkjNDbDMzZ4b5dF7+FK+7A7AOU\"",
    "mtime": "2023-07-26T10:38:15.562Z",
    "size": 761140,
    "path": "../public/chinatown.jpg"
  },
  "/exmachina.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a6575-WAebg6bcQVfAV8rBfw4XuEhMkNQ\"",
    "mtime": "2023-07-26T10:38:15.562Z",
    "size": 1729909,
    "path": "../public/exmachina.jpg"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-07-26T10:38:15.558Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/formwork_100.png": {
    "type": "image/png",
    "etag": "\"468-AMtFcaqRkp13viTnqXRqK0CB2to\"",
    "mtime": "2023-07-26T10:38:15.558Z",
    "size": 1128,
    "path": "../public/formwork_100.png"
  },
  "/formwork_color.png": {
    "type": "image/png",
    "etag": "\"7fb-UO5rxmOQjucitqSdUA7YXf1chYU\"",
    "mtime": "2023-07-26T10:38:15.558Z",
    "size": 2043,
    "path": "../public/formwork_color.png"
  },
  "/formwork_white.png": {
    "type": "image/png",
    "etag": "\"2be2-XNLR5PsS6alt5vCxp5Gjkdyo12E\"",
    "mtime": "2023-07-26T10:38:15.558Z",
    "size": 11234,
    "path": "../public/formwork_white.png"
  },
  "/new-york-city.jpg": {
    "type": "image/jpeg",
    "etag": "\"23b7b-4+MtXk4KkCucx5ubYjXq6XNYTvw\"",
    "mtime": "2023-07-26T10:38:15.558Z",
    "size": 146299,
    "path": "../public/new-york-city.jpg"
  },
  "/new-york-city.webp": {
    "type": "image/webp",
    "etag": "\"8cc4-4YugwKiHzeuQiA4rxdQ8znYEibM\"",
    "mtime": "2023-07-26T10:38:15.558Z",
    "size": 36036,
    "path": "../public/new-york-city.webp"
  },
  "/nyc-skyline.webp": {
    "type": "image/webp",
    "etag": "\"33820-3IhfHjKxVA/VpUdoqEjfwubZzr8\"",
    "mtime": "2023-07-26T10:38:15.554Z",
    "size": 210976,
    "path": "../public/nyc-skyline.webp"
  },
  "/subwaycompressed.png": {
    "type": "image/png",
    "etag": "\"401f4d-juB9MB09cE+3pFvfkLrhkyI0+3w\"",
    "mtime": "2023-07-26T10:38:15.554Z",
    "size": 4202317,
    "path": "../public/subwaycompressed.png"
  },
  "/_nuxt/404.20f2fddd.js": {
    "type": "application/javascript",
    "etag": "\"26f-HXQwoTDm4VfocYQzKXoqBH74AZI\"",
    "mtime": "2023-07-26T10:38:15.550Z",
    "size": 623,
    "path": "../public/_nuxt/404.20f2fddd.js"
  },
  "/_nuxt/Button.vue.7e10987a.js": {
    "type": "application/javascript",
    "etag": "\"342-3icmB0cc4puHo54dJXNAu1+IRUA\"",
    "mtime": "2023-07-26T10:38:15.550Z",
    "size": 834,
    "path": "../public/_nuxt/Button.vue.7e10987a.js"
  },
  "/_nuxt/Footer.10e67ae3.js": {
    "type": "application/javascript",
    "etag": "\"e15-Rt9QiSNyVHsXd5hOzF0OJAH9iLY\"",
    "mtime": "2023-07-26T10:38:15.550Z",
    "size": 3605,
    "path": "../public/_nuxt/Footer.10e67ae3.js"
  },
  "/_nuxt/Footer.9c16fd10.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10c-N0ae+8EczzCxhVTgkRENL4NXJYE\"",
    "mtime": "2023-07-26T10:38:15.550Z",
    "size": 268,
    "path": "../public/_nuxt/Footer.9c16fd10.css"
  },
  "/_nuxt/Lora-Regular.8ab1c2e5.ttf": {
    "type": "font/ttf",
    "etag": "\"20774-DU1lv5dWaLfviDzY4CkMqb+rG7s\"",
    "mtime": "2023-07-26T10:38:15.550Z",
    "size": 132980,
    "path": "../public/_nuxt/Lora-Regular.8ab1c2e5.ttf"
  },
  "/_nuxt/NavBar.06b41cd0.js": {
    "type": "application/javascript",
    "etag": "\"1f81-Yl+RCgnxTh8kD6Y4Q48Aktpz+Sw\"",
    "mtime": "2023-07-26T10:38:15.546Z",
    "size": 8065,
    "path": "../public/_nuxt/NavBar.06b41cd0.js"
  },
  "/_nuxt/NavBar.c8514453.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c7-mZtarYSStZH+j/CfVTnQahPCklo\"",
    "mtime": "2023-07-26T10:38:15.546Z",
    "size": 199,
    "path": "../public/_nuxt/NavBar.c8514453.css"
  },
  "/_nuxt/WorkSans-Black.c1ca12b6.ttf": {
    "type": "font/ttf",
    "etag": "\"2ed74-UUeuT1sOwR3Jzmr7JOJsG8ufkT0\"",
    "mtime": "2023-07-26T10:38:15.546Z",
    "size": 191860,
    "path": "../public/_nuxt/WorkSans-Black.c1ca12b6.ttf"
  },
  "/_nuxt/WorkSans-Medium.f1ca78b6.ttf": {
    "type": "font/ttf",
    "etag": "\"2ef7c-qM+UN2pXOuLEPQRXootDV+mAiUY\"",
    "mtime": "2023-07-26T10:38:15.546Z",
    "size": 192380,
    "path": "../public/_nuxt/WorkSans-Medium.f1ca78b6.ttf"
  },
  "/_nuxt/WorkSans-Regular.1b94e0d8.ttf": {
    "type": "font/ttf",
    "etag": "\"2edac-iaXTjhMWtw2kjpR1YoAjJkr3R4M\"",
    "mtime": "2023-07-26T10:38:15.546Z",
    "size": 191916,
    "path": "../public/_nuxt/WorkSans-Regular.1b94e0d8.ttf"
  },
  "/_nuxt/_service_.4d8810b6.js": {
    "type": "application/javascript",
    "etag": "\"c8b-KPkoFugfaedUsNOv75NFH0xxup8\"",
    "mtime": "2023-07-26T10:38:15.546Z",
    "size": 3211,
    "path": "../public/_nuxt/_service_.4d8810b6.js"
  },
  "/_nuxt/_service_.a763dce2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"25e-EC75Vho5mIRh9Imki6YYVC85PDY\"",
    "mtime": "2023-07-26T10:38:15.546Z",
    "size": 606,
    "path": "../public/_nuxt/_service_.a763dce2.css"
  },
  "/_nuxt/ai-chatbot-integration.7340fd18.js": {
    "type": "application/javascript",
    "etag": "\"17d1-pMu3pGfNuzmDIlWPnteXC9Jutd8\"",
    "mtime": "2023-07-26T10:38:15.546Z",
    "size": 6097,
    "path": "../public/_nuxt/ai-chatbot-integration.7340fd18.js"
  },
  "/_nuxt/ai-chatbot-integration.757b7050.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ea-eWsAUNABZPZdDtMkc782IgLbNjk\"",
    "mtime": "2023-07-26T10:38:15.542Z",
    "size": 1258,
    "path": "../public/_nuxt/ai-chatbot-integration.757b7050.css"
  },
  "/_nuxt/arrow-right-thick.68a00a6b.js": {
    "type": "application/javascript",
    "etag": "\"14a-8Xp4tNLDHPcke+Q/peAH86kiCHg\"",
    "mtime": "2023-07-26T10:38:15.542Z",
    "size": 330,
    "path": "../public/_nuxt/arrow-right-thick.68a00a6b.js"
  },
  "/_nuxt/art-age-of-artificial-intelligence.002fa0cc.js": {
    "type": "application/javascript",
    "etag": "\"440-H6bIDUhPszaQRlKonMAYljUpmmk\"",
    "mtime": "2023-07-26T10:38:15.542Z",
    "size": 1088,
    "path": "../public/_nuxt/art-age-of-artificial-intelligence.002fa0cc.js"
  },
  "/_nuxt/birds2.14d93fc5.jpg": {
    "type": "image/jpeg",
    "etag": "\"f0e1d-BNwah77XISZBUjU+eU1bWq4IpfI\"",
    "mtime": "2023-07-26T10:38:15.542Z",
    "size": 986653,
    "path": "../public/_nuxt/birds2.14d93fc5.jpg"
  },
  "/_nuxt/birds2.2c9002df.js": {
    "type": "application/javascript",
    "etag": "\"62-M9TWo0H5kasAf7JkvvA5OIqB9Pc\"",
    "mtime": "2023-07-26T10:38:15.542Z",
    "size": 98,
    "path": "../public/_nuxt/birds2.2c9002df.js"
  },
  "/_nuxt/buildings.40bc77bc.js": {
    "type": "application/javascript",
    "etag": "\"6e-PdbMbh/UitLDb7uxGC9DDaztOow\"",
    "mtime": "2023-07-26T10:38:15.542Z",
    "size": 110,
    "path": "../public/_nuxt/buildings.40bc77bc.js"
  },
  "/_nuxt/buildings.fc7364ba.jpg": {
    "type": "image/jpeg",
    "etag": "\"949c1-RrK/YsJ+Ia9rwemeW2dkQnlCug4\"",
    "mtime": "2023-07-26T10:38:15.538Z",
    "size": 608705,
    "path": "../public/_nuxt/buildings.fc7364ba.jpg"
  },
  "/_nuxt/chevron-double-right.45da6eeb.js": {
    "type": "application/javascript",
    "etag": "\"173-k2BZpQsxhTTI17BRC/d9ctGsVec\"",
    "mtime": "2023-07-26T10:38:15.538Z",
    "size": 371,
    "path": "../public/_nuxt/chevron-double-right.45da6eeb.js"
  },
  "/_nuxt/contact.472958bb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"51a-GDniWHlz8+3SfT4s2g6IsvWYtt4\"",
    "mtime": "2023-07-26T10:38:15.538Z",
    "size": 1306,
    "path": "../public/_nuxt/contact.472958bb.css"
  },
  "/_nuxt/contact.84d226e3.js": {
    "type": "application/javascript",
    "etag": "\"1b30-n8SrUr3y5HZWbdkW1AyDTZNMa8k\"",
    "mtime": "2023-07-26T10:38:15.538Z",
    "size": 6960,
    "path": "../public/_nuxt/contact.84d226e3.js"
  },
  "/_nuxt/default.908c8152.js": {
    "type": "application/javascript",
    "etag": "\"273-l8zYrXXnErKXURTdn3q5UZW0Yn8\"",
    "mtime": "2023-07-26T10:38:15.538Z",
    "size": 627,
    "path": "../public/_nuxt/default.908c8152.js"
  },
  "/_nuxt/entry.23a0ee72.js": {
    "type": "application/javascript",
    "etag": "\"5174c-WHFZoP9JibHVq6iGl8o5Tq6VlwY\"",
    "mtime": "2023-07-26T10:38:15.538Z",
    "size": 333644,
    "path": "../public/_nuxt/entry.23a0ee72.js"
  },
  "/_nuxt/entry.fe4cc3b1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"711a-0SGUTfpvxfqq1sDGFd/419N2dA4\"",
    "mtime": "2023-07-26T10:38:15.534Z",
    "size": 28954,
    "path": "../public/_nuxt/entry.fe4cc3b1.css"
  },
  "/_nuxt/formwork_white.3dbb7b65.js": {
    "type": "application/javascript",
    "etag": "\"6a-U99hr0NOBXUF+O2z2OZcyB0WBVs\"",
    "mtime": "2023-07-26T10:38:15.534Z",
    "size": 106,
    "path": "../public/_nuxt/formwork_white.3dbb7b65.js"
  },
  "/_nuxt/index.1591cf19.js": {
    "type": "application/javascript",
    "etag": "\"2cede-paS8z/5spXtC1gLsspXpRCHYjUM\"",
    "mtime": "2023-07-26T10:38:15.534Z",
    "size": 184030,
    "path": "../public/_nuxt/index.1591cf19.js"
  },
  "/_nuxt/index.2ba9e1d8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e6-14aF0ZnhvXLZAnAn4zow2f1ec60\"",
    "mtime": "2023-07-26T10:38:15.534Z",
    "size": 230,
    "path": "../public/_nuxt/index.2ba9e1d8.css"
  },
  "/_nuxt/index.31021fa2.js": {
    "type": "application/javascript",
    "etag": "\"3e2-XGaNN8iW5QWLXZ5DOfJ2ybQM52I\"",
    "mtime": "2023-07-26T10:38:15.534Z",
    "size": 994,
    "path": "../public/_nuxt/index.31021fa2.js"
  },
  "/_nuxt/index.95fc1899.js": {
    "type": "application/javascript",
    "etag": "\"aa-lxdpRGM1v8FuYeGjNw4FHdhVFL4\"",
    "mtime": "2023-07-26T10:38:15.534Z",
    "size": 170,
    "path": "../public/_nuxt/index.95fc1899.js"
  },
  "/_nuxt/index.d2adac55.js": {
    "type": "application/javascript",
    "etag": "\"82-QEOtFvvgxPC4KZF52xJm0QNalv0\"",
    "mtime": "2023-07-26T10:38:15.534Z",
    "size": 130,
    "path": "../public/_nuxt/index.d2adac55.js"
  },
  "/_nuxt/index.e834691b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13d5-J/P6gJiUbFcYYSQESIZKqo/nMUc\"",
    "mtime": "2023-07-26T10:38:15.530Z",
    "size": 5077,
    "path": "../public/_nuxt/index.e834691b.css"
  },
  "/_nuxt/lesson.c4763a8d.js": {
    "type": "application/javascript",
    "etag": "\"aa-7Kyu6ojxhi6I+43u+XBdDyNf1qc\"",
    "mtime": "2023-07-26T10:38:15.530Z",
    "size": 170,
    "path": "../public/_nuxt/lesson.c4763a8d.js"
  },
  "/_nuxt/loader4-line.124debb3.js": {
    "type": "application/javascript",
    "etag": "\"757-rr77f9n0PazsU9EBifAC6IQ52ak\"",
    "mtime": "2023-07-26T10:38:15.530Z",
    "size": 1879,
    "path": "../public/_nuxt/loader4-line.124debb3.js"
  },
  "/_nuxt/loader4-line.e3477aff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c-Ne9yoXXlN+2wRwd2l1mNp637mm0\"",
    "mtime": "2023-07-26T10:38:15.530Z",
    "size": 44,
    "path": "../public/_nuxt/loader4-line.e3477aff.css"
  },
  "/_nuxt/nofooter.77ffe782.js": {
    "type": "application/javascript",
    "etag": "\"247-qyLFqI2Lp6BdqFFUcyIKM09Ez6U\"",
    "mtime": "2023-07-26T10:38:15.530Z",
    "size": 583,
    "path": "../public/_nuxt/nofooter.77ffe782.js"
  },
  "/_nuxt/nuxt-link.0ab953ff.js": {
    "type": "application/javascript",
    "etag": "\"10fa-DVRjLYFdWEmRQMohmY/iGjTIt3I\"",
    "mtime": "2023-07-26T10:38:15.530Z",
    "size": 4346,
    "path": "../public/_nuxt/nuxt-link.0ab953ff.js"
  },
  "/_nuxt/post.1a01d450.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"140-Da3qJiA3bRNwfPhru2MnTjHmfbc\"",
    "mtime": "2023-07-26T10:38:15.530Z",
    "size": 320,
    "path": "../public/_nuxt/post.1a01d450.css"
  },
  "/_nuxt/post.b9c0378e.js": {
    "type": "application/javascript",
    "etag": "\"a72-jmXw1rFI40XLBmNUZ1zCq2l/Z+I\"",
    "mtime": "2023-07-26T10:38:15.530Z",
    "size": 2674,
    "path": "../public/_nuxt/post.b9c0378e.js"
  },
  "/_nuxt/privacy.3b8ec755.js": {
    "type": "application/javascript",
    "etag": "\"1c6-7MwY4MFA9aWl7yU/ofGag7Y7Wjo\"",
    "mtime": "2023-07-26T10:38:15.526Z",
    "size": 454,
    "path": "../public/_nuxt/privacy.3b8ec755.js"
  },
  "/_nuxt/service.adc6ad0f.js": {
    "type": "application/javascript",
    "etag": "\"167-X7V9ddplNFIaZ6CFZBPN+vNqsKs\"",
    "mtime": "2023-07-26T10:38:15.526Z",
    "size": 359,
    "path": "../public/_nuxt/service.adc6ad0f.js"
  },
  "/_nuxt/store.0e2d13d2.js": {
    "type": "application/javascript",
    "etag": "\"23c9-b60rvE7ulmW5iFm/Io+U/Nt7MFw\"",
    "mtime": "2023-07-26T10:38:15.526Z",
    "size": 9161,
    "path": "../public/_nuxt/store.0e2d13d2.js"
  },
  "/_nuxt/team.84a46a03.js": {
    "type": "application/javascript",
    "etag": "\"f2-RlQKOxNU+EZSul9i7KzhBnCGh2Y\"",
    "mtime": "2023-07-26T10:38:15.526Z",
    "size": 242,
    "path": "../public/_nuxt/team.84a46a03.js"
  },
  "/_nuxt/website-machine.6d8807c3.js": {
    "type": "application/javascript",
    "etag": "\"2a15-4HCwzez6lmikeZ6aB30mwPoviME\"",
    "mtime": "2023-07-26T10:38:15.526Z",
    "size": 10773,
    "path": "../public/_nuxt/website-machine.6d8807c3.js"
  },
  "/_nuxt/website-machine.8a47b38e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ac-ZkXJQrkvSnCE7Y9fK7v/G9lp8N0\"",
    "mtime": "2023-07-26T10:38:15.522Z",
    "size": 172,
    "path": "../public/_nuxt/website-machine.8a47b38e.css"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const config = useRuntimeConfig().public;
const _7JYNPn = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const body = await readBody(event);
  const cookieOptions = config.supabase.cookies;
  const { event: signEvent, session } = body;
  if (!event) {
    throw new Error("Auth event missing!");
  }
  if (signEvent === "SIGNED_IN" || signEvent === "TOKEN_REFRESHED") {
    if (!session) {
      throw new Error("Auth session missing!");
    }
    setCookie(
      event,
      `${cookieOptions.name}-access-token`,
      session.access_token,
      {
        domain: cookieOptions.domain,
        maxAge: cookieOptions.lifetime ?? 0,
        path: cookieOptions.path,
        sameSite: cookieOptions.sameSite
      }
    );
    setCookie(event, `${cookieOptions.name}-refresh-token`, session.refresh_token, {
      domain: cookieOptions.domain,
      maxAge: cookieOptions.lifetime ?? 0,
      path: cookieOptions.path,
      sameSite: cookieOptions.sameSite
    });
  }
  if (signEvent === "SIGNED_OUT") {
    setCookie(event, `${cookieOptions.name}-access-token`, "", {
      maxAge: -1,
      path: cookieOptions.path
    });
    setCookie(event, `${cookieOptions.name}-refresh-token`, "", {
      maxAge: -1,
      path: cookieOptions.path
    });
  }
  return "auth cookie set";
});

const _lazy_KKA5UV = () => import('../chat.mjs');
const _lazy_lh5vDL = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/chat', handler: _lazy_KKA5UV, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_lh5vDL, lazy: true, middleware: false, method: undefined },
  { route: '/api/_supabase/session', handler: _7JYNPn, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_lh5vDL, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useNitroApp as a, getRouteRules as g, nodeServer as n, useRuntimeConfig as u };
//# sourceMappingURL=node-server.mjs.map
