import { _ as __unplugin_components_1 } from './arrow-right-thick-31ece0d9.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: "Click Me"
    },
    ghost: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_i_mdi_arrow_right_thick = __unplugin_components_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "px-4",
          "py-2",
          "transition-color",
          "duration-200",
          "cursor-pointer",
          "flex",
          "items-center",
          "justify-center",
          "tracking-wider",
          "text-lg",
          "mt-4",
          "border-2",
          __props.full ? "w-full" : "w-max",
          // Conditional class
          __props.ghost ? "bg-transparent border-primary text-primary hover:bg-primary hover:text-white" : "bg-primary border-primary hover:bg-primary-light text-white hover:text-white hover:shadow"
        ]
      }, _attrs))}>${ssrInterpolate(__props.text)} `);
      if (__props.icon === "i-mdi-arrow-right-thick") {
        _push(ssrRenderComponent(_component_i_mdi_arrow_right_thick, { class: "ml-2" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Button-0ec09f05.mjs.map
