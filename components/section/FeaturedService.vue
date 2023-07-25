<template>
  <div class="">
    <div id="particles" class="relative w-full h-full z-20 flex items-center justify-center">
      <div class="content relative z-10">
        <div class="m">
          <div id="theParent"
            class="relative p-20 flex justify-start items-center my-20 mb-60 flex-col max-w-3xl mx-auto group border-4 border-white rounded-lg shadow-lg">
            <div class="absolute inset-0 bg-gradient-to-b from-purple-950 via-secondary to-transparent opacity-50"></div>
            <div class="relative z-10">
              <h2 class="text-center text-white mb-4">
                AI Chatbot Integration <span class="blinking">_</span>
              </h2>

              <div class="text-xl pt-4 pb-2 inline text-center text-white">
                We provide custom chatbots that are trained on your own up-to-date documentation or recent news and
                information.
              </div>
              <div class="flex w-full justify-center">
                <nuxt-link to="/services/ai-chatbot-integration" class="text-secondary text-xl m-2">
                  <uiButton text="Contact" class="shadow-lg" />
                </nuxt-link>
                <nuxt-link to="/services/ai-chatbot-integration" class="text-secondary text-xl m-2">
                  <uiButton ghost icon="i-mdi-arrow-right-thick shadow-lg" text="Try Demo" />
                </nuxt-link>
              </div>
            </div>
            <vue-particles id="tsparticles" :options="options" :particles-init="particlesInit"
              class="absolute top-0 left-0 w-full h-full z-0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" >
import { onMounted, nextTick } from "vue";
import { loadFull } from "tsparticles";

export default {
  name: "NuxtTutorial",
  data() {
    return {
      options: {
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
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
            value: 0.2,
          },
          size: {
            value: 2,
          },
          links: {
            color: '#ffffff',
            distance: 5,
            enable: true,
            opacity: 0.25,
            width: 1
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
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
          },

        }
      }
    };
  },
  methods: {
    particlesInit: async (engine) => {
      await loadFull(engine);
    }
  }
};
</script>

<style scoped>
@keyframes blink {

  0%,
  49% {
    opacity: 0;
  }

  50%,
  100% {
    opacity: 1;
  }
}

.blinking {
  animation: blink 1s linear infinite;
}
</style>
