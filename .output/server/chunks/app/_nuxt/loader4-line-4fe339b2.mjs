import { useSSRContext, defineComponent, mergeProps, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useSupabaseToken, a as createSupabaseClient, _ as _export_sfc, b as useNuxtApp } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormFeedback",
  __ssrInlineRender: true,
  props: {
    formFeedback: String,
    success: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.formFeedback === "error") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-white w-full block p-3 mt-4 font-semibold text-lg", { "bg-primary": __props.success, "bg-tertiary": !__props.success }]
        }, _attrs))} data-v-de467931> There was an error processing your request. Please try again. </div>`);
      } else if (__props.formFeedback === "success") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-white w-full block p-3 mt-4 font-semibold text-lg", { "bg-primary": __props.success, "bg-tertiary": !__props.success }]
        }, _attrs))} data-v-de467931> Your request was processed successfully. </div>`);
      } else if (__props.formFeedback === "invalidEmail") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-white w-full block p-3 mt-4 font-semibold text-lg", { "bg-primary": __props.success, "bg-tertiary": !__props.success }]
        }, _attrs))} data-v-de467931> The email address you have entered is not valid. </div>`);
      } else if (__props.formFeedback === "incompleteForm") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-white w-full block p-3 mt-4 font-semibold text-lg", { "bg-primary": __props.success, "bg-tertiary": !__props.success }]
        }, _attrs))} data-v-de467931> Please complete all required fields. </div>`);
      } else if (__props.formFeedback === "consentNotGiven") {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["text-white w-full block p-3 mt-4 font-semibold text-lg", { "bg-primary": __props.success, "bg-tertiary": !__props.success }]
        }, _attrs))} data-v-de467931> Please agree to the terms before submitting. </div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/FormFeedback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-de467931"]]);
const useSupabaseClient = () => {
  var _a;
  const nuxtApp = useNuxtApp();
  const token = useSupabaseToken();
  const Authorization = token.value ? `Bearer ${token.value}` : void 0;
  const recreateClient = ((_a = nuxtApp._supabaseClient) == null ? void 0 : _a.headers.Authorization) !== Authorization;
  if (!nuxtApp._supabaseClient || recreateClient) {
    nuxtApp._supabaseClient = createSupabaseClient();
  }
  return nuxtApp._supabaseAuthClient;
};
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "ri-loader4-line", render };

export { __unplugin_components_0 as _, __nuxt_component_1 as a, useSupabaseClient as u };
//# sourceMappingURL=loader4-line-4fe339b2.mjs.map
