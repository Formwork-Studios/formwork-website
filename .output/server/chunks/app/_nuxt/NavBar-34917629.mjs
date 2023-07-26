import { _ as __nuxt_component_1 } from './nuxt-link-4b6c660d.mjs';
import { useSSRContext, defineComponent, mergeProps, ref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { u as useStore } from './store-8fe1f8bd.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "pointer-cursor z-50"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="text-white font-black text-lg sm:text-xl md:text-2xl z-50 align-top"${_scopeId}> FORMWORK STUDIOS</h3>`);
      } else {
        return [
          createVNode("h3", { class: "text-white font-black text-lg sm:text-xl md:text-2xl z-50 align-top" }, " FORMWORK STUDIOS")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Branding.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Btn",
  __ssrInlineRender: true,
  props: {
    btnText: {
      type: String,
      default: "Click Me"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-2 tracking-wider bg-primary bg-opacity-50 hover:bg-opacity-100 hover:text-stone-950 transition-color duration-200 text-stone-100 cursor-pointer" }, _attrs))}>${ssrInterpolate(__props.btnText)}</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Btn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const __unplugin_components_1 = { name: "mdi-twitter", render: render$3 };
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7v-.03Z"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const __unplugin_components_0$1 = { name: "mdi-pinterest", render: render$2 };
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const __unplugin_components_3 = { name: "mdi-github", render: render$1 };
const _hoisted_1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const __unplugin_components_0 = { name: "mdi-chevron-down", render };
const _sfc_main = {
  data() {
    return {
      isOpen: false,
      isDropdownOpen: false,
      showModal: false
    };
  },
  setup() {
    const menuStore = useStore();
    const serviceItems = ref([]);
    serviceItems.value = menuStore.projects;
    return { serviceItems };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      this.isDropdownOpen = false;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeMenu() {
      this.isOpen = false;
      this.isDropdownOpen = false;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_uiBranding = __nuxt_component_0$1;
  const _component_nuxt_link = __nuxt_component_1;
  const _component_i_mdi_chevron_down = __unplugin_components_0;
  const _component_uiBtn = _sfc_main$1;
  const _component_i_mdi_github = __unplugin_components_3;
  const _component_i_mdi_pinterest = __unplugin_components_0$1;
  const _component_i_mdi_twitter = __unplugin_components_1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 right-0 z-50" }, _attrs))} data-v-b119147c><nav class="flex items-center justify-between pl-4 lg:pl-10 w-full background-blur backdrop-filter backdrop-blur-sm bg-stone-950 bg-opacity-60 z-50" data-v-b119147c><div data-v-b119147c>`);
  _push(ssrRenderComponent(_component_uiBranding, null, null, _parent));
  _push(`</div><div class="hidden lg:flex items-center space-x-8 relative tracking-wide" data-v-b119147c>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "text-white border-none uppercase"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/posts/",
    class: "text-white border-none uppercase"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex flex-col" data-v-b119147c><div class="cursor-pointer text-white border-none uppercase" data-v-b119147c>Services `);
  _push(ssrRenderComponent(_component_i_mdi_chevron_down, {
    class: [$data.isDropdownOpen ? "rotate-180" : "", "inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1"]
  }, null, _parent));
  _push(`</div><div style="${ssrRenderStyle($data.isDropdownOpen ? null : { display: "none" })}" class="absolute top-full w-96 bg-stone-950 text-white border-white border-2 shadow-md right-0" data-v-b119147c><!--[-->`);
  ssrRenderList($setup.serviceItems, (item) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      key: item.id,
      to: `/services/${item.slug}`,
      class: "block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-secondary hover:text-white tracking-wide"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div>`);
  _push(ssrRenderComponent(_component_uiBtn, {
    onClick: ($event) => _ctx.$router.push("/contact"),
    btnText: "START A PROJECT"
  }, null, _parent));
  _push(`</div><div class="m-2 lg:hidden flex items-center" data-v-b119147c><button class="text-white z-50" data-v-b119147c><svg style="${ssrRenderStyle(!$data.isOpen ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer z-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b119147c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-b119147c></path></svg><svg style="${ssrRenderStyle($data.isOpen ? null : { display: "none" })}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer z-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b119147c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-b119147c></path></svg></button></div></nav><div id="nav-menu" class="${ssrRenderClass([{ "menu-open": $data.isOpen, "menu-closed": !$data.isOpen, "fixed inset-0 bg-gray-900 flex": $data.isOpen }, "bg-stone-950 lg:hidden shadow-md pt-20 transition-all transition-150 nav-menu opacity-0 mt-10 w-full"])}" data-v-b119147c><div class="flex flex-col h-full w-full justify-between items-start space-y-4 text-2xl" data-v-b119147c><div class="p-4" data-v-b119147c>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    onClick: ($event) => $data.isOpen = !$data.isOpen,
    class: "text-white border-none uppercase block mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/posts/",
    class: "text-white border-none uppercase block mb-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="cursor-pointer text-white border-none uppercase block mb-2" data-v-b119147c>Services `);
  _push(ssrRenderComponent(_component_i_mdi_chevron_down, {
    class: [$data.isDropdownOpen ? "rotate-180" : "", "inline transform transition-transform duration-200 ease-in-out group-hover:translate-x-1"]
  }, null, _parent));
  _push(`</div><div style="${ssrRenderStyle($data.isDropdownOpen ? null : { display: "none" })}" class="ml-2" data-v-b119147c><!--[-->`);
  ssrRenderList($setup.serviceItems, (item, index) => {
    _push(ssrRenderComponent(_component_nuxt_link, {
      key: item.id,
      to: `/services/${item.id}`,
      onClick: ($event) => {
        $data.isOpen = !$data.isOpen;
        $data.isDropdownOpen = false;
      },
      class: ["tracking-wide", ["text-white border-none flex flex-row text-lg py-2", { "mb-4": index === $setup.serviceItems.length - 1 }]]
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/contact",
    onClick: ($event) => $data.isOpen = !$data.isOpen,
    class: "text-white border-none uppercase"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex flex-row bottom-0 w-full items-center bg-gray-400" data-v-b119147c><a href="https://github.com" class="flex justify-center items-center bg-primary w-1/3 h-16" target="_blank" data-v-b119147c>`);
  _push(ssrRenderComponent(_component_i_mdi_github, {
    style: { "color": "white" },
    class: "turtle-icon text-xl md:text-4xl cursor-pointer"
  }, null, _parent));
  _push(`</a><a href="https://pinterest.com" class="flex justify-center items-center bg-secondary w-1/3 h-16" target="_blank" data-v-b119147c>`);
  _push(ssrRenderComponent(_component_i_mdi_pinterest, {
    style: { "color": "white" },
    class: "turtle-icon text-xl md:text-4xl cursor-pointer"
  }, null, _parent));
  _push(`</a><a href="https://twitter.com" class="flex justify-center items-center bg-tertiary w-1/3 h-16" target="_blank" data-v-b119147c>`);
  _push(ssrRenderComponent(_component_i_mdi_twitter, {
    style: { "color": "white" },
    class: "turtle-icon text-xl md:text-4xl cursor-pointer"
  }, null, _parent));
  _push(`</a></div></div></div></header>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/NavBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b119147c"]]);

export { __nuxt_component_0 as _, __unplugin_components_0$1 as a, __unplugin_components_1 as b, __unplugin_components_3 as c };
//# sourceMappingURL=NavBar-34917629.mjs.map
