import { _ as __nuxt_component_1 } from './nuxt-link-4b6c660d.mjs';
import { ref, watchEffect, onUnmounted, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { _ as __unplugin_components_1 } from './arrow-right-thick-31ece0d9.mjs';
import { _ as __unplugin_components_0 } from './chevron-double-right-fbde6f25.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { u as useStore } from './store-8fe1f8bd.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
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

const _sfc_main = {
  __name: "[service]",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const serviceImage = ref("");
    const currentService = ref(route.params.service);
    console.log(currentService.value);
    const selectedSubService = ref({});
    const subServices = ref([]);
    const serviceName = ref("");
    const routeParam = ref("");
    const serviceDescription = ref("");
    const serviceQuestion = ref("");
    const contactPulseAnimation = ref("");
    watchEffect(() => {
      const service = store.projects.find((project) => project.slug === currentService.value);
      if (!service) {
        router.push("/error");
        return;
      }
      serviceName.value = service ? service.name : "";
      routeParam.value = service ? service.routeParam : "";
      serviceDescription.value = service ? service.description : "";
      serviceQuestion.value = service ? service.subServices[0].question : "";
      subServices.value = service ? service.subServices : [];
      const defaultSubService = subServices.value.find((subService) => subService.sid === 0);
      serviceImage.value = service ? service.image : "";
      selectedSubService.value = defaultSubService || {};
      const pulseAnimationInterval = setInterval(() => {
        contactPulseAnimation.value = "animate-pulse";
        setTimeout(() => {
          contactPulseAnimation.value = "";
        }, 2e3);
      }, 7e3);
      onUnmounted(() => {
        clearInterval(pulseAnimationInterval);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_mdi_chevron_double_right = __unplugin_components_0;
      const _component_nuxt_link = __nuxt_component_1;
      const _component_i_mdi_arrow_right_thick = __unplugin_components_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col h-screen overflow-hidden" }, _attrs))} data-v-57751764><div class="bg-stone-950 px-4 md:px-10 pt-14 basis-1/4 md:basis-1/2 mb-6" data-v-57751764><div id="toparea" class="col-span-1 p-4 h-full flex flex-col justify-end custom-border" style="${ssrRenderStyle({
        "background-image": `url(${serviceImage.value})`,
        "background-position": "center bottom",
        "background-repeat": "no-repeat",
        "background-size": "cover"
      })}" data-v-57751764><div class="text-xl text-white clamp-text font-black mb-8 uppercase tracking-wide" data-v-57751764>${ssrInterpolate(serviceName.value)}</div></div></div><div class="flex flex-grow overflow-auto px-10 pb-10 bg-stone-950 flex-basis-50 flex-col md:flex-row" data-v-57751764><div class="w-full md:w-1/4 flex-none p-4 mr-6 border-b-2 md:border-b-0 pb-8 mb-6 border-stone-500" data-v-57751764><ul class="space-y-4 text-xl uppercase" data-v-57751764><!--[-->`);
      ssrRenderList(subServices.value, (subService) => {
        _push(`<li class="${ssrRenderClass([{ "text-stone-600": subService !== selectedSubService.value, "text-white": subService === selectedSubService.value }, "cursor-pointer hover:text-white"])}" data-v-57751764>`);
        if (subService === selectedSubService.value) {
          _push(`<span class="pr-2" data-v-57751764>+</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`${ssrInterpolate(subService.name)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="w-full md:w-3/4 text-white text-2xl p-4 relative" data-v-57751764><!--[-->`);
      if (selectedSubService.value) {
        _push(`<div data-v-57751764>`);
        if (selectedSubService.value.header) {
          _push(`<div class="text-white font-bold mb-4 text-3xl uppercase" data-v-57751764><span class="" data-v-57751764>${ssrInterpolate(selectedSubService.value.header)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="text-white-500 mb-4 text-lg max-w-[80ch]" data-v-57751764>${ssrInterpolate(selectedSubService.value.description)}</div><a${ssrRenderAttr("href", selectedSubService.value.link)} class="text-secondary text-lg group" target="_blank" data-v-57751764>${ssrInterpolate(selectedSubService.value.linkText)} `);
        _push(ssrRenderComponent(_component_i_mdi_chevron_double_right, { class: "inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" }, null, _parent));
        _push(`</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: { path: "/contact", query: { reason: routeParam.value } }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([contactPulseAnimation.value, "fixed md:absolute bottom-0 right-0 h-auto w-auto px-3 md:px-4 py-3 md:py-4 bg-secondary text-white font-bold flex items-center justify-center text-sm md:text-base"])}" data-v-57751764${_scopeId}><span class="pr-2" data-v-57751764${_scopeId}>GET IN TOUCH</span>`);
            _push2(ssrRenderComponent(_component_i_mdi_arrow_right_thick, { style: { "align-self": "center" } }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ["fixed md:absolute bottom-0 right-0 h-auto w-auto px-3 md:px-4 py-3 md:py-4 bg-secondary text-white font-bold flex items-center justify-center text-sm md:text-base", contactPulseAnimation.value]
              }, [
                createVNode("span", { class: "pr-2" }, "GET IN TOUCH"),
                createVNode(_component_i_mdi_arrow_right_thick, { style: { "align-self": "center" } })
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[service].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _service_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57751764"]]);

export { _service_ as default };
//# sourceMappingURL=_service_-9a43213f.mjs.map
