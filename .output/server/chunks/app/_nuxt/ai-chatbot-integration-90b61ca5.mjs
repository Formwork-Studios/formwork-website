import { useSSRContext, defineComponent, ref, mergeProps, unref, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _sfc_main$2 } from './Button-0ec09f05.mjs';
import { useRouter } from 'vue-router';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import 'ufo';
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
import './arrow-right-thick-31ece0d9.mjs';

const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "m2 21l21-9L2 3v7l15 2l-15 2v7Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_0$1 = { name: "mdi-send", render: render$2 };
var Roles = /* @__PURE__ */ ((Roles2) => {
  Roles2["System"] = "system";
  Roles2["User"] = "user";
  Roles2["Assistant"] = "assistant";
  return Roles2;
})(Roles || {});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "chatBot",
  __ssrInlineRender: true,
  setup(__props) {
    const keyword = ref("");
    var generateText = ref("");
    const chat = ref([
      {
        id: 1,
        role: Roles.Assistant,
        content: "Hello there! How can I help you?",
        timestamp: Date.now(),
        loader: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_mdi_send = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-screen p-2 md:p-10 md:pt-16" }, _attrs))} data-v-4a46df82><div class="flex flex-col h-full bg-stone-900 shadow-md" data-v-4a46df82><div class="bg-white px-4 py-1 box-content sticky top-14 flex flex-col md:flex-row md:items-end r-0" data-v-4a46df82><p class="font-workSans text-black font-black text-4xl" data-v-4a46df82>CHATBOT</p><p class="font-workSans text-black text-sm ml-2 mb-1" data-v-4a46df82> Powered by GPT-3.5 (using the <a class="text-secondary" href="https://stevejobsarchive.com/book" data-v-4a46df82>Steve Job Book</a> as knowledge base) </p></div><div id="chatarea" class="flex-grow w-full flex flex-col justify-end p-6" data-v-4a46df82><div class="flex flex-col" data-v-4a46df82><!--[-->`);
      ssrRenderList(unref(chat), (item) => {
        _push(`<div class="flex flex-row font-workSans" data-v-4a46df82>`);
        if (item.role === "assistant" && !item.loader) {
          _push(`<div class="min-h-[32px] h-fit p-1 px-2 bg-neutral-950 w-full" data-v-4a46df82>${ssrInterpolate(item.content)}</div>`);
        } else if (item.loader) {
          _push(`<div class="h-fit min-h-[32px] p-1 px-2 bg-neutral-950 w-full chatbot shadow-md" data-v-4a46df82><div class="flex flex-row h-fit" data-v-4a46df82><div class="${ssrRenderClass([{ emptyState: unref(generateText) === "" }, "output relative"])}" data-v-4a46df82>${ssrInterpolate(unref(generateText))}</div></div></div>`);
        } else {
          _push(`<div class="p-1 px-2 min-h-[32px] h-fit user" data-v-4a46df82>${ssrInterpolate(item.content)}</div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="relative flex flex-row mt-4 items-center" data-v-4a46df82><input${ssrRenderAttr("value", unref(keyword))} class="font-workSans bg-gray1 w-full rounded-none focus:outline-gray-500 p-1 text-black pr-10" data-v-4a46df82><button class="text-primary font-workSans disabled:opacity-60 disabled:cursor-not-allowed absolute right-2 top-1/2 transform -translate-y-1/2"${ssrIncludeBooleanAttr(unref(keyword) === "") ? " disabled" : ""} data-v-4a46df82>`);
      _push(ssrRenderComponent(_component_i_mdi_send, { class: "text-xl" }, null, _parent));
      _push(`</button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/chatBot.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4a46df82"]]);
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M8.68 17.04L7.5 15.86l-1.18 1.18l-1.18-1.18L7.5 13.5l2.36 2.36l-1.18 1.18m9 0l-1.18-1.18l-1.18 1.18l-1.18-1.18l2.36-2.36l2.36 2.36l-1.18 1.18Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_1 = { name: "mdi-robot-excited", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M11 7v2h2V7h-2m3 10v-2h-1v-4h-3v2h1v2h-1v2h4m8-5c0 5.5-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2s10 4.5 10 10m-2 0c0-4.42-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "mdi-information-slab-circle-outline", render };
const _sfc_main = {
  __name: "ai-chatbot-integration",
  __ssrInlineRender: true,
  setup(__props) {
    const showModal = ref(false);
    const router = useRouter();
    const navigateToContact = () => {
      router.push({ path: "/contact", query: { reason: "Artificial Intelligence" } });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ChatBot = __nuxt_component_0;
      const _component_i_mdi_information_slab_circle_outline = __unplugin_components_0;
      const _component_i_mdi_robot_excited = __unplugin_components_1;
      const _component_uiButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen text-white flex justify-center" }, _attrs))} data-v-f3f5e0ed><div class="box-border w-11/12 md:w-3/4" data-v-f3f5e0ed>`);
      _push(ssrRenderComponent(_component_ChatBot, null, null, _parent));
      _push(`<div class="fixed bottom-1/2 md:bottom-10 right-4 md:right-10 text-4xl" data-v-f3f5e0ed>`);
      _push(ssrRenderComponent(_component_i_mdi_information_slab_circle_outline, {
        onClick: ($event) => showModal.value = true,
        class: "cursor-pointer"
      }, null, _parent));
      if (showModal.value) {
        _push(`<div class="modal" data-v-f3f5e0ed><div class="m-auto p-10 bg-stone-900 text-white relative sm:w-full md:w-3/4 lg:max-w-3xl" data-v-f3f5e0ed><span class="close absolute top-2 right-2" data-v-f3f5e0ed>\xD7</span><h2 class="modal-header flex" data-v-f3f5e0ed>`);
        _push(ssrRenderComponent(_component_i_mdi_robot_excited, { class: "mr-3" }, null, _parent));
        _push(`<span class="inline-block align-baseline mt-[-2px]" data-v-f3f5e0ed>Customized ChatBot Demo</span></h2><p class="modal-text" data-v-f3f5e0ed>Through the use of vector databases, users can provide private or up-to-date information for ChatGPT to learn and assist users with.</p>`);
        _push(ssrRenderComponent(_component_uiButton, {
          btnText: "Schedule Consultation",
          icon: "i-mdi-arrow-right-thick",
          ghost: "",
          onClick: navigateToContact
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/ai-chatbot-integration.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const aiChatbotIntegration = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f3f5e0ed"]]);

export { aiChatbotIntegration as default };
//# sourceMappingURL=ai-chatbot-integration-90b61ca5.mjs.map
