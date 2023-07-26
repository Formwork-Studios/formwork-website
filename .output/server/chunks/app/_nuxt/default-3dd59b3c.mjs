import { _ as __nuxt_component_0 } from './NavBar-34917629.mjs';
import { _ as __nuxt_component_2 } from './Footer-f9548da4.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './buildings-3b6d17b6.mjs';
import './nuxt-link-4b6c660d.mjs';
import 'ufo';
import '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie-es';
import 'ohash';
import '@supabase/supabase-js';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import './store-8fe1f8bd.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_uiNavBar = __nuxt_component_0;
      const _component_uiFooter = __nuxt_component_2;
      _push(`<!--[--><img${ssrRenderAttr("src", _imports_0)} class="fixed top-0 left-0 min-w-full max-w-full min-h-full max-h-full object-cover"><div class="flex flex-col min-h-screen w-screen">`);
      _push(ssrRenderComponent(_component_uiNavBar, null, null, _parent));
      _push(`<div class="flex-grow formworkbg z-40">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_uiFooter, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-3dd59b3c.mjs.map
