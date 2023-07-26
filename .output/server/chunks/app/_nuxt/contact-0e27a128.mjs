import { u as useSupabaseClient, _ as __unplugin_components_0, a as __nuxt_component_1 } from './loader4-line-4fe339b2.mjs';
import { useSSRContext, mergeProps, ref, watch } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './formwork_white-c8180610.mjs';
import { useRouteQuery } from '@vueuse/router';
import { _ as _export_sfc } from '../server.mjs';
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
import 'ufo';
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

const _sfc_main$1 = {
  __name: "ContactLarge",
  __ssrInlineRender: true,
  setup(__props) {
    const routeQuery = useRouteQuery("reason");
    const reason = ref("");
    watch(routeQuery, (newValue) => {
      reason.value = newValue;
    });
    const consent = ref(false);
    const name = ref("");
    const email = ref("");
    const message = ref("");
    ref("");
    const isLoading = ref(false);
    const formFeedback = ref(null);
    useSupabaseClient();
    const success = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_ri_loader_4_line = __unplugin_components_0;
      const _component_uiFormFeedback = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex items-center justify-center bg-transparent w-full" }, _attrs))} data-v-8a689c8e><form id="mainContact" class="w-5/6 lg:w-2/3 px-0 lg:px-6 mx-auto" data-v-8a689c8e><div class="flex flex-col md:flex-row items-center" data-v-8a689c8e><div id="col1" class="flex items-center p-4 md:p-6 lg:p-10" data-v-8a689c8e><img${ssrRenderAttr("src", _imports_0)} class="hidden md:block mr-0 md:mr-8 p-10na md:h-[500px] h-[300px]" data-v-8a689c8e><span class="md:hidden text-white text-xl" data-v-8a689c8e> FORMWORK STUDIOS </span></div><div id="col2" class="w-4xl flex-grow p-4 md:p-6 lg:p-10" data-v-8a689c8e><div class="relative mb-8" data-v-8a689c8e><label class="block text-white text-lg font-bold mb-2" for="reason" data-v-8a689c8e>REASON FOR CONTACT</label><select id="reason" class="w-full text-white text-lg py-3 px-4 leading-tight bg-black focus:z-10 relative" data-v-8a689c8e><option value="" disabled data-v-8a689c8e>-</option><option value="web-design-and-ui-ux" data-v-8a689c8e>Website Design</option><option value="web-development" data-v-8a689c8e>Website Development</option><option value="digital-marketing" data-v-8a689c8e>Digital Marketing</option><option value="branding-identity" data-v-8a689c8e>Visual Identity</option><option value="e-commerce" data-v-8a689c8e>E-commerce</option><option value="social-media" data-v-8a689c8e>Social Media</option><option value="Artificial Intelligence" data-v-8a689c8e>Artificial Intelligence</option><option value="General Inquiry" data-v-8a689c8e>General Inquiry</option></select></div><div class="relative mb-8" data-v-8a689c8e><label class="block text-white text-lg font-bold mb-2 sr-only" for="name" data-v-8a689c8e>Name</label><input${ssrRenderAttr("value", name.value)} class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="name" type="text" placeholder="Your Name" data-v-8a689c8e><div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left" data-v-8a689c8e></div></div><div class="relative mb-8" data-v-8a689c8e><label class="block text-white text-lg font-bold mb-2 sr-only" for="email" data-v-8a689c8e>Email</label><input${ssrRenderAttr("value", email.value)} class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="email" type="email" placeholder="Your Email" data-v-8a689c8e><div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left" data-v-8a689c8e></div></div><div class="relative mb-8" data-v-8a689c8e><textarea class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="message" placeholder="Your Message" data-v-8a689c8e>${ssrInterpolate(message.value)}</textarea><div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left" data-v-8a689c8e></div><label class="block text-white text-lg font-bold mt-auto sr-only" for="message" data-v-8a689c8e>Your Message</label></div><div class="mb-8" data-v-8a689c8e><label class="flex items-center text-white text-lg" data-v-8a689c8e><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(consent.value) ? ssrLooseContain(consent.value, null) : consent.value) ? " checked" : ""} class="mr-3" id="updates" data-v-8a689c8e> I agree to receive email updates </label></div><div class="button-container relative" data-v-8a689c8e><button class="bg-transparent hover:bg-white text-white font-bold py-2 px-4 border border-white hover:text-black w-20 h-10 flex justify-center items-center text-lg" type="submit" data-v-8a689c8e><span style="${ssrRenderStyle(!isLoading.value ? null : { display: "none" })}" class="uppercase" data-v-8a689c8e>Send</span>`);
      _push(ssrRenderComponent(_component_i_ri_loader_4_line, {
        style: isLoading.value ? null : { display: "none" },
        class: "animate-spin"
      }, null, _parent));
      _push(`</button><div class="form-feedback absolute" data-v-8a689c8e>`);
      if (formFeedback.value) {
        _push(ssrRenderComponent(_component_uiFormFeedback, {
          formFeedback: formFeedback.value,
          class: "feedback-animation",
          success: success.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></form></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ContactLarge.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8a689c8e"]]);
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiContactLarge = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center h-screen w-full text-2xl" }, _attrs))} data-v-181d3bbd>`);
      _push(ssrRenderComponent(_component_UiContactLarge, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-181d3bbd"]]);

export { contact as default };
//# sourceMappingURL=contact-0e27a128.mjs.map
