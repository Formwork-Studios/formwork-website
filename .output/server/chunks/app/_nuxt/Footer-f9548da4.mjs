import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { a as __unplugin_components_0$1, b as __unplugin_components_1, c as __unplugin_components_3 } from './NavBar-34917629.mjs';
import { mergeProps, useSSRContext, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_2 = { name: "mdi-linkedin", render };
const _imports_0 = "" + publicAssetsURL("formwork_color.png");
const _sfc_main = {
  data() {
    return {
      sections: [
        {
          title: "About",
          links: [
            { name: "Team", url: "/team" },
            { name: "Contact", url: "/contact" },
            { name: "Privacy", url: "/privacy" },
            { name: "Blog", url: "/posts" }
          ]
        },
        {
          title: "Services",
          links: [
            { name: "Website Development", url: "/services/website-development" },
            { name: "Website Design", url: "/services/website-design" },
            { name: "Digital Marketing", url: "/services/digital-marketing" },
            { name: "SEO", url: "/services/digital-marketing" },
            { name: "Social Media", url: "/services/socialmedia" },
            {
              name: "Artificial Intelligence",
              url: "/services/ai-chatbot-integration"
            },
            { name: "Branding", url: "/services/branding-identity" }
          ]
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_i_mdi_pinterest = __unplugin_components_0$1;
  const _component_i_mdi_twitter = __unplugin_components_1;
  const _component_i_mdi_linkedin = __unplugin_components_2;
  const _component_i_mdi_github = __unplugin_components_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-black text-white py-4 sm:py-6 md:py-8 z-50 w-full tracking-wide" }, _attrs))} data-v-b80e0f9c><div class="flex flex-col md:flex-row md:justify-between px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-20 w-full" data-v-b80e0f9c><div id="footer-content" class="flex flex-col md:flex-row md:grow w-full justify-between" data-v-b80e0f9c><div class="mr-8 my-10 md:my-0" data-v-b80e0f9c><img${ssrRenderAttr("src", _imports_0)} alt="Formwork logo" class="fit mx-auto max-h-40" data-v-b80e0f9c></div><div class="flex flex-col lg:flex-row" data-v-b80e0f9c><!--[-->`);
  ssrRenderList($data.sections, (section) => {
    _push(`<div class="mb-4 sm:mb-5 md:mb-6 md:mr-20" data-v-b80e0f9c><h3 class="font-bold mb-2 border-b border-opacity-50 uppercase pr-20" data-v-b80e0f9c>${ssrInterpolate(section.title)} ok </h3>`);
    if (section.links) {
      _push(`<ul class="${ssrRenderClass({ "column-list": section.links.length > 5 })}" data-v-b80e0f9c><!--[-->`);
      ssrRenderList(section.links, (link) => {
        _push(`<li data-v-b80e0f9c><a${ssrRenderAttr("href", link.url)} class="text-white-500 hover:text-white-300 section-link" data-v-b80e0f9c>${ssrInterpolate(link.name)}</a></li>`);
      });
      _push(`<!--]--></ul>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--><div class="mb-4 sm:mb-5 md:mb-6 sm:mr-6 md:mr-8" data-v-b80e0f9c><h3 class="font-bold mb-2 border-b border-opacity-50 uppercase" data-v-b80e0f9c> Business Inquiries </h3><ul data-v-b80e0f9c><li data-v-b80e0f9c><a href="#inquiry1" class="text-white-500 hover:text-white-300" data-v-b80e0f9c>+1-222-222-2222</a></li><li data-v-b80e0f9c><a href="#inquiry2" class="text-white-500 hover:text-white-300" data-v-b80e0f9c>hello@formworkstudios.com</a></li></ul></div></div><div id="lastcol" class="flex flex-col h-full justify-between flex-grow" data-v-b80e0f9c><div class="flex flex-row justify-center md:justify-end space-x-2 sm:space-x-3 md:space-x-4 text-lg sm:text-xl mb-4 sm:mb-5 md:mb-6 md:py-0 py-4" data-v-b80e0f9c><a href="https://www.pinterest.com" target="_blank" data-v-b80e0f9c>`);
  _push(ssrRenderComponent(_component_i_mdi_pinterest, null, null, _parent));
  _push(`</a><a href="https://www.twitter.com" target="_blank" data-v-b80e0f9c>`);
  _push(ssrRenderComponent(_component_i_mdi_twitter, null, null, _parent));
  _push(`</a><a href="https://www.linkedin.com" target="_blank" data-v-b80e0f9c>`);
  _push(ssrRenderComponent(_component_i_mdi_linkedin, null, null, _parent));
  _push(`</a><a href="https://www.github.com" target="_blank" data-v-b80e0f9c>`);
  _push(ssrRenderComponent(_component_i_mdi_github, null, null, _parent));
  _push(`</a></div><div class="text-center md:text-right h-full flex flex-col justify-end text-sm text-stone-400" data-v-b80e0f9c><p class="mt-auto" data-v-b80e0f9c> \xA9 2023 Formwork Studios. All rights reserved. </p></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b80e0f9c"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Footer-f9548da4.mjs.map
