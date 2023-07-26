import { _ as __nuxt_component_1 } from './nuxt-link-4b6c660d.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-40 min-h-screen" }, _attrs))} data-v-c68385a2><h1 class="text-6xl font-fancy font-bold text-white pt-40 pb-20 max-w-3xl mx-auto" data-v-c68385a2>Blog Posts</h1><ul class="text-xl text-white max-w-3xl mx-auto" data-v-c68385a2><!--[-->`);
      ssrRenderList(posts.value, (post, index2) => {
        _push(`<li class="py-4 animate-delay" style="${ssrRenderStyle({ animationDelay: index2 * 0.1 + "s" })}" data-v-c68385a2>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: post.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2 data-v-c68385a2${_scopeId}>${ssrInterpolate(post.meta.title)}</h2>`);
            } else {
              return [
                createVNode("h2", null, toDisplayString(post.meta.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="text-white-800" data-v-c68385a2>${ssrInterpolate(post.meta.date)}</p><p class="py-2" data-v-c68385a2>${ssrInterpolate(post.meta.blurb)}</p></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c68385a2"]]);

export { index as default };
//# sourceMappingURL=index-55725630.mjs.map
