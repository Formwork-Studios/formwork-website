import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_1$2 } from './nuxt-link-4b6c660d.mjs';
import { _ as _sfc_main$8 } from './Button-0ec09f05.mjs';
import { loadFull } from 'tsparticles';
import { _ as __unplugin_components_0 } from './chevron-double-right-fbde6f25.mjs';
import { _ as _imports_0$2 } from './formwork_white-c8180610.mjs';
import { _ as _imports_0$3 } from './birds2-1659f6f6.mjs';
import { u as useSupabaseClient, _ as __unplugin_components_0$1, a as __nuxt_component_1$3 } from './loader4-line-4fe339b2.mjs';
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
import './arrow-right-thick-31ece0d9.mjs';

const _sfc_main$7 = {
  __name: "Formwork",
  __ssrInlineRender: true,
  setup(__props) {
    const activeMessage = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen min-h-screen relative flex items-center justify-center break-words mb-20" }, _attrs))} data-v-a0743864><div class="w-screen text-center" data-v-a0743864><div style="${ssrRenderStyle(activeMessage.value === 1 ? null : { display: "none" })}" data-v-a0743864><h2 id="message1" class="font-sans tracking-wide animate-fade-in-out" data-v-a0743864>FORMWORK</h2></div><div style="${ssrRenderStyle(activeMessage.value === 2 ? null : { display: "none" })}" data-v-a0743864><h2 id="message2" class="font-sans tracking-wide animate-fade-in-out" data-v-a0743864>WE ARE A FULL SERVICE DIGITAL DESIGN AGENCY</h2></div><div style="${ssrRenderStyle(activeMessage.value === 3 ? null : { display: "none" })}" data-v-a0743864><h2 id="message3" class="font-sans tracking-wide animate-fade-in-out" data-v-a0743864>LET&#39;S BUILD SOMETHING</h2></div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Formwork.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-a0743864"]]);
const _sfc_main$6 = {
  name: "NuxtTutorial",
  setup() {
    const featured = ref(null);
    const options = {
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push"
          },
          onHover: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      background: {
        color: "transparent"
      },
      fullScreen: {
        enable: false,
        zIndex: -1
      },
      particles: {
        color: {
          value: ["#ffffdd", "#ddffee", "#ffeeff"],
          animation: {
            enable: true,
            speed: 5,
            sync: false
          }
        },
        opacity: {
          value: 0.2
        },
        size: {
          value: 2
        },
        links: {
          color: "#ffffff",
          distance: 5,
          enable: true,
          opacity: 0.25,
          width: 1
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: true,
          speed: 3,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 400
          },
          value: 200
        }
      }
    };
    const particlesInit = async (engine) => {
      await loadFull(engine);
    };
    return {
      options,
      particlesInit,
      featured
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_1$2;
  const _component_uiButton = _sfc_main$8;
  const _component_vue_particles = resolveComponent("vue-particles");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-18385753><div id="particles" class="relative h-full z-20 flex items-center justify-center" data-v-18385753><div class="content relative z-10" data-v-18385753><div data-v-18385753><div id="theParent" class="relative p-4 sm:p-10 md:p-20 flex justify-start items-center my-0 md:my-20 md:mb-60 flex-col md:max-w-3xl mx-auto group border-4 border-white rounded-lg shadow-lg featured opacity-0" data-v-18385753><div class="absolute inset-0 bg-gradient-to-b from-purple-950 via-secondary to-transparent opacity-50" data-v-18385753></div><div class="relative z-10" data-v-18385753><h2 class="text-left md:text-center text-white mb-4 featured opacity-0" data-v-18385753> AI Chatbot Integration <span class="blinking" data-v-18385753>_</span></h2><div class="text-xl pt-4 pb-2 inline text-center text-white featured opacity-0" data-v-18385753> We provide custom chatbots that are trained on your own up-to-date documentation or recent news and information. </div><div class="flex w-full justify-center featured opacity-0" data-v-18385753>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/services/ai-chatbot-integration",
    class: "text-secondary text-xl m-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_uiButton, {
          text: "Contact",
          class: "shadow-lg"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_uiButton, {
            text: "Contact",
            class: "shadow-lg"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/services/ai-chatbot-integration",
    class: "text-secondary text-xl m-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_uiButton, {
          ghost: "",
          icon: "i-mdi-arrow-right-thick shadow-lg",
          text: "Try Demo"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_uiButton, {
            ghost: "",
            icon: "i-mdi-arrow-right-thick shadow-lg",
            text: "Try Demo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_vue_particles, {
    id: "tsparticles",
    options: $setup.options,
    "particles-init": $setup.particlesInit,
    class: "absolute top-0 left-0 w-full h-full z-0"
  }, null, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/FeaturedService.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-18385753"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    const hoveredService = ref("");
    ref([]);
    const visibleServices = ref([]);
    computed(() => {
      return (serviceTitle) => visibleServices.value.includes(serviceTitle);
    });
    computed(() => {
      return (serviceTitle) => hoveredService.value === serviceTitle || hoveredService.value === null ? 1 : 0.6;
    });
    const services = ref([
      {
        title: "WEB DESIGN",
        description: "More than what a website looks like, we focus on how it feels. Whether your project is big or small, we use industry best practices to make sure your audience gets the type of experience youre looking for.",
        link: "/services/website-design/"
      },
      {
        title: "DEVELOPMENT",
        description: "Code is just a means to an end. We use the technology needed to complete the project, from cutting-edge Javascript frameworks to Wordpress and Shopify - we got you covered.",
        link: "/services/website-development"
      },
      {
        title: "DIGITAL MARKETING",
        description: 'The Digital Marketing landscape is a cluttered mess, comprised of hoards of agencies producing endless AI generated "content". We will cut through the mess and bring back the human element to your work.',
        link: "/services/digital-marketing"
      },
      {
        title: "SOCIAL MEDIA",
        description: "Social media is a powerful tool for any company, big or small. Let us get you running on all relevant platforms and help set up targeting marketing.",
        link: "/services/social-media"
      },
      {
        title: "BRANDING",
        description: "Impeccable branding feels effortless when the work behind it is rigorous.",
        link: "/services/branding-identity"
      },
      {
        title: "E-commerce Solutions",
        description: "We will leverage the latest automation systems to help you save time and money.",
        link: "/services/e-commerce-solutions"
      }
    ]);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1$2;
      const _component_i_mdi_chevron_double_right = __unplugin_components_0;
      const _component_sectionFeaturedService = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-16 md:mb-0 p-4 md:p-12" }, _attrs))} data-v-4bb05d89><div id="services" class="grid grid-cols-1 gap-y-20 md:gap-y-20 md:grid-cols-3 gap-x-28 max-w-6xl mx-auto" data-v-4bb05d89><!--[-->`);
      ssrRenderList(services.value, (service) => {
        _push(`<div class="service-container serviceList -mt-4"${ssrRenderAttr("data-title", service.title)} data-v-4bb05d89><div class="${ssrRenderClass([{
          dim: hoveredService.value !== "" && service.title !== hoveredService.value
        }, "content-wrapper px-4 md:px-0"])}" data-v-4bb05d89><h2 class="text-2xl font-sans tracking-wide animate-slide-in text-white mb-2" data-v-4bb05d89>${ssrInterpolate(service.title)}</h2><div class="text-white-500 mb-4 leading-7" data-v-4bb05d89>${ssrInterpolate(service.description)}</div>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: service.link,
          class: "text-secondary group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`See more `);
              _push2(ssrRenderComponent(_component_i_mdi_chevron_double_right, { class: "inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode("See more "),
                createVNode(_component_i_mdi_chevron_double_right, { class: "inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_sectionFeaturedService, { class: "col-span-full md:col-span-3 flex justify-center h-screen h-min-screen my-20 md:mt-40 md:mb-60" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4bb05d89"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BigQuote",
  __ssrInlineRender: true,
  props: {
    bigQuote: String
  },
  setup(__props) {
    const props = __props;
    const words = ref(props.bigQuote.split(" "));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-start mb-40 h-screen" }, _attrs))} data-v-75022e0b><div class="quote text-white text-4xl md:text-7xl font-fancy flex flex-col md:flex-row items-center" data-v-75022e0b><img${ssrRenderAttr("src", _imports_0$2)} class="mr-0 md:mr-8 md:h-[500px] h-[300px]" data-v-75022e0b><div class="my-10 md:m-10 md:ml-28 text-white-500 quote-content items-center tracking-wider" data-v-75022e0b><!--[-->`);
      ssrRenderList(words.value, (word, index2) => {
        _push(`<div class="quoteWord" data-v-75022e0b>${ssrInterpolate(word)}</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BigQuote.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-75022e0b"]]);
const _imports_0$1 = "" + publicAssetsURL("chinatown.jpg");
const _imports_2 = "" + publicAssetsURL("subwaycompressed.png");
const _sfc_main$3 = {
  __name: "FeaturedBlog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1$2;
      const _component_i_mdi_chevron_double_right = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 text-black bg-white-300 text-xl w-full p-2 md:p-20 gap-10 relative" }, _attrs))} data-v-0c57d499><div class="col-span-1 flex flex-col h-full relative space-y-8" tracking-wide data-v-0c57d499>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/posts/website-machine " }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-bold text-black text-4xl md:text-6xl uppercase blogitem opacity-0" data-v-0c57d499${_scopeId}>A website is a machine for information and delight</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-bold text-black text-4xl md:text-6xl uppercase blogitem opacity-0" }, "A website is a machine for information and delight")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-primary w-max h-auto text-white-300 p-2 font-bold blogitem opacity-0" data-v-0c57d499>LATEST POST</div><div class="text-black-300 leading-loose text-lg blogitem opacity-0" data-v-0c57d499><div data-v-0c57d499><p class="py-4" data-v-0c57d499>In the post-WW2 reconstruction era, B\xE9ton Brut \u2014 the French term for Raw Concrete \u2014 became the material of choice for architects tasked with the goal of rebuilding a war-torn Europe. In response to what must be considered the most catastrophic conflict in human history, a collective desire emerged to begin the process of rebuilding society. Inspired by the Modernist principle of &#39;form follows function,&#39; architects sought to create buildings that embodied the ideals of utilitarianism, egalitarianism, and honesty. In Modernism, there was no need for the ornate flourishes typical of classical architecture. Instead, Architects of that time embraced Le Corbusier&#39;s perspective, treating homes as what they fundamentally are \u2014 machines for living in.&quot;</p></div><p class="py-4" data-v-0c57d499> The radical shift towards functionality in architecture embodied in the Modernist movement was pushed to an extreme in Brutalism \u2014 a branch of its parent philosophy \u2014 by Le Corbusier himself. </p></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/posts/website-machine" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="inline readmore text-black-300 text-base" data-v-0c57d499${_scopeId}>Read More `);
            _push2(ssrRenderComponent(_component_i_mdi_chevron_double_right, { class: "inline chevron text-secondary" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "inline readmore text-black-300 text-base" }, [
                createTextVNode("Read More "),
                createVNode(_component_i_mdi_chevron_double_right, { class: "inline chevron text-secondary" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex-grow" data-v-0c57d499></div></div><div class="col-span-1 flex flex-col gap-y-2 md:gap-y-4 order-first md:order-2" data-v-0c57d499><div class="grid grid-cols-2" data-v-0c57d499><div class="col-span-2" data-v-0c57d499><img class="shadow-sm shadow-black blogitem opacity-0"${ssrRenderAttr("src", _imports_0$1)} alt="Image 2" data-v-0c57d499></div></div><div class="grid grid-cols-2 gap-x-2 md:gap-x-4" data-v-0c57d499><div class="col-span-1" data-v-0c57d499><img class="shadow-sm shadow-black blogitem opacity-0"${ssrRenderAttr("src", _imports_0$3)} alt="Image 1" style="${ssrRenderStyle({ "object-fit": "cover" })}" data-v-0c57d499></div><div class="col-span-1" data-v-0c57d499><img class="shadow-sm shadow-black blogitem opacity-0"${ssrRenderAttr("src", _imports_2)} alt="Image 2" style="${ssrRenderStyle({ "object-fit": "cover" })}" data-v-0c57d499></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/section/FeaturedBlog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0c57d499"]]);
const _imports_0 = "" + publicAssetsURL("FORMWORK_logo_combo.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-20" }, _attrs))}><img${ssrRenderAttr("src", _imports_0)}></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/LogoCombo.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
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
      const _component_uiLogoCombo = __nuxt_component_0;
      const _component_i_ri_loader_4_line = __unplugin_components_0$1;
      const _component_uiFormFeedback = __nuxt_component_1$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-screen flex items-center justify-center bg-transparent my-20" }, _attrs))} data-v-5e1140c7><form id="mainContact" class="w-full max-w-xl px-6" data-v-5e1140c7>`);
      _push(ssrRenderComponent(_component_uiLogoCombo, null, null, _parent));
      _push(`<div class="relative mb-8" data-v-5e1140c7><label class="block text-white text-lg font-bold mb-2 sr-only" for="name" data-v-5e1140c7>Name</label><input${ssrRenderAttr("value", name.value)} class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="name" type="text" placeholder="Your Name" data-v-5e1140c7><div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left" data-v-5e1140c7></div></div><div class="relative mb-8" data-v-5e1140c7><label class="block text-white text-lg font-bold mb-2 sr-only" for="email" data-v-5e1140c7>Email</label><input${ssrRenderAttr("value", email.value)} class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="email" type="email" placeholder="Your Email" data-v-5e1140c7><div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left" data-v-5e1140c7></div></div><div class="relative mb-8" data-v-5e1140c7><textarea class="border-b !border-opacity-50 border-gray shadow appearance-none w-full text-white text-lg py-3 px-4 leading-tight focus:outline-none bg-transparent placeholder-gray focus:z-10 relative" id="message" placeholder="Your Message" data-v-5e1140c7>${ssrInterpolate(message.value)}</textarea><div class="z-10 border-b-extend absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-200 ease-in-out origin-left" data-v-5e1140c7></div><label class="block text-white text-lg font-bold mt-auto sr-only" for="message" data-v-5e1140c7>Your Message</label></div><div class="mb-8" data-v-5e1140c7><label class="flex items-center text-white text-lg" data-v-5e1140c7><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(consent.value) ? ssrLooseContain(consent.value, null) : consent.value) ? " checked" : ""} class="mr-3" id="updates" data-v-5e1140c7> I agree to receive email updates </label></div><div class="flex items-center justify-between" data-v-5e1140c7><button class="bg-transparent hover:bg-white text-white font-bold py-2 px-4 border border-white hover:text-black w-20 h-10 grid place-items-center" type="submit" data-v-5e1140c7><span style="${ssrRenderStyle(!isLoading.value ? null : { display: "none" })}" class="uppercase" data-v-5e1140c7>Send</span>`);
      _push(ssrRenderComponent(_component_i_ri_loader_4_line, {
        style: isLoading.value ? null : { display: "none" },
        class: "animate-spin"
      }, null, _parent));
      _push(`</button></div><div class="block" data-v-5e1140c7>`);
      if (formFeedback.value) {
        _push(ssrRenderComponent(_component_uiFormFeedback, {
          formFeedback: formFeedback.value,
          class: "feedback-animation",
          success: success.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5e1140c7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const bigQuote = ref("We Help Ideas Take Shape");
    const password = ref("");
    const passwordEntered = ref(false);
    const passwordError = ref(false);
    const isProduction = true;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Formwork = __nuxt_component_0$1;
      const _component_Services = __nuxt_component_1;
      const _component_BigQuote = __nuxt_component_2;
      const _component_sectionFeaturedBlog = __nuxt_component_3;
      const _component_uiContact = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-auto" }, _attrs))} data-v-3e9a09ca>`);
      if (!passwordEntered.value && isProduction) {
        _push(`<div data-v-3e9a09ca><div id="password-popup" data-v-3e9a09ca><div id="password-form" data-v-3e9a09ca><h2 class="my-4" data-v-3e9a09ca>Enter Password</h2><input type="password"${ssrRenderAttr("value", password.value)} data-v-3e9a09ca><br data-v-3e9a09ca><br data-v-3e9a09ca><button data-v-3e9a09ca>Submit</button>`);
        if (passwordError.value) {
          _push(`<p id="password-error" data-v-3e9a09ca>Incorrect password. Please try again.</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<div data-v-3e9a09ca>`);
        _push(ssrRenderComponent(_component_Formwork, null, null, _parent));
        _push(ssrRenderComponent(_component_Services, null, null, _parent));
        _push(ssrRenderComponent(_component_BigQuote, { bigQuote: bigQuote.value }, null, _parent));
        _push(ssrRenderComponent(_component_sectionFeaturedBlog, null, null, _parent));
        _push(ssrRenderComponent(_component_uiContact, null, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e9a09ca"]]);

export { index as default };
//# sourceMappingURL=index-616f1e97.mjs.map
