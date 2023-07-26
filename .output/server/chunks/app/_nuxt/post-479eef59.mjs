import { _ as __nuxt_component_0 } from './NavBar-34917629.mjs';
import { _ as _sfc_main$2 } from './Button-0ec09f05.mjs';
import { u as useSupabaseClient, _ as __unplugin_components_0, a as __nuxt_component_1$1 } from './loader4-line-4fe339b2.mjs';
import { useSSRContext, defineComponent, mergeProps, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './birds2-1659f6f6.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_2 } from './Footer-f9548da4.mjs';
import './nuxt-link-4b6c660d.mjs';
import 'ufo';
import './store-8fe1f8bd.mjs';
import './arrow-right-thick-31ece0d9.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'cookie-es';
import '@supabase/supabase-js';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FollowBlog",
  __ssrInlineRender: true,
  setup(__props) {
    const client = useSupabaseClient();
    const email = ref("");
    ref("");
    const formFeedback = ref(null);
    const success = ref(true);
    async function submitEmail() {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (email.value && !regex.test(email.value)) {
        formFeedback.value = "invalidEmail";
        success.value = false;
        return;
      }
      const { error } = await client.from("blogFollows").insert([
        { email: email.value, topic: "blog" }
      ]);
      if (error) {
        console.error("Error submitting email:", error.message);
        formFeedback.value = "error";
        success.value = false;
        return;
      }
      console.log("Email submitted successfully!");
      formFeedback.value = "success";
      success.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_uiButton = _sfc_main$2;
      const _component_i_ri_loader_4_line = __unplugin_components_0;
      const _component_uiFormFeedback = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-10" }, _attrs))} data-v-256a3f24><div class="opacity-0" data-v-256a3f24><div class="max-w-2xl md:max-w-4xl bg-white w-full md:mx-auto mb-60 text-black grid grid-cols-5 h-full" data-v-256a3f24><div class="p-14 flex flex-col justify-between col-span-5 md:col-span-3 relative" data-v-256a3f24><div class="mb-20" data-v-256a3f24><h3 class="text-black text-3xl font-bold inline-block" data-v-256a3f24>New Article Notification</h3><div class="my-4 text-lg" data-v-256a3f24>When you sign-up below we will kindly notify you when the next article drops.</div></div><div data-v-256a3f24><input type="email"${ssrRenderAttr("value", email.value)} placeholder="Enter your email" class="mb-4 p-3 w-full rounded-none" data-v-256a3f24>`);
      _push(ssrRenderComponent(_component_uiButton, {
        onClick: submitEmail,
        class: "inline-flex px-4 py-2 w-full uppercase font-bold",
        btnText: "Submit"
      }, null, _parent));
      _push(ssrRenderComponent(_component_i_ri_loader_4_line, {
        style: _ctx.isLoading ? null : { display: "none" },
        class: "animate-spin"
      }, null, _parent));
      _push(`</div><div class="block absolute bottom-0 left-0 w-full" data-v-256a3f24>`);
      if (formFeedback.value) {
        _push(ssrRenderComponent(_component_uiFormFeedback, {
          formFeedback: formFeedback.value,
          class: "feedback-animation",
          success: success.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-span-5 md:col-span-2 order-first md:order-none hidden md:flex" data-v-256a3f24><img${ssrRenderAttr("src", _imports_0)} class="block object-fill h-full" data-v-256a3f24></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/FollowBlog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-256a3f24"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "post",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_uiNavBar = __nuxt_component_0;
      const _component_UiFollowBlog = __nuxt_component_1;
      const _component_uiFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen bg-stone-950 text-white" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_uiNavBar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_UiFollowBlog, null, null, _parent));
      _push(ssrRenderComponent(_component_uiFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=post-479eef59.mjs.map
