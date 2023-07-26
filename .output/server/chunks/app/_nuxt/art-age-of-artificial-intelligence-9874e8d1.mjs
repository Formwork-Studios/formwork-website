import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "art-age-of-artificial-intelligence",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl mx-auto px-20 sm:px-20 lg:px-8 tracking-wide" }, _attrs))}><h1 class="mt-4 mb-8 text-3xl font-bold">Your Blog Post Title</h1><p class="text-lg text-gray-700 mt-4 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique tristique semper. Morbi scelerisque mauris ac nunc tristique, sed vestibulum diam iaculis. </p><p class="text-lg text-gray-700 mt-4 mb-8"> Quisque consectetur, nisl id tincidunt volutpat, tortor ante pharetra est, sit amet finibus diam neque a nulla. Donec in ipsum dui. In tristique magna non diam vehicula, ac condimentum magna pharetra. </p><p class="text-lg text-gray-700 mt-4 mb-8"> Donec id ante id velit feugiat aliquet nec at dolor. Sed vel justo a lorem feugiat consectetur a at lacus. Vivamus cursus, ligula at ultricies ultrices, elit orci tristique sem, sed pharetra turpis erat ac neque. </p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/art-age-of-artificial-intelligence.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=art-age-of-artificial-intelligence-9874e8d1.mjs.map
