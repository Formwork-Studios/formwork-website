<template>
  <div>
    <div data-id="particles" class="relative h-full z-2\0 flex items-center justify-center">
      <div class="content relative z-10">
        <div>
          <div id="theParent"
            class="relative p-4 sm:p-10 md:pt-16 flex flex-col justify-between items-start my-0 md:my-20 md:mb-60 md:max-w-3xl mx-auto group bg-blur shadow-xl featured opacity-0 h-full">
            <div class="absolute inset-0 bg-stone-950 opacity-80 border-2"></div>
            <div class="relative z-10">
              <h2 class="text-left md:text-center text-white mb-4 featured opacity-0">
                AI Chatbot Integration <span class="blinking">_</span>
              </h2>
              <div class="text-xl pt-4 pb-2 inline text-center text-white featured opacity-0">
                We provide custom chatbots that are trained on your own up-to-date documentation or recent news and
                information.
              </div>
            </div>
            <div class="mt-10 flex w-full justify-center featured opacity-0">
              <nuxt-link to="/services/ai-chatbot-integration" class="text-secondary text-xl m-2">
                <uiButton ghost icon="i-mdi-arrow-right-thick shadow-lg" text="Try Demo" />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { onMounted, nextTick, ref } from "vue";
import { loadFull } from "tsparticles";

export default {
  name: "NuxtTutorial",
  setup() {
    const featured = ref(null);

    onMounted(() => {
  let delay = 0.2;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${delay}s`;
          entry.target.classList.add('animate-delay');
          delay += 0.2; // increment the delay for each element
          observer.unobserve(entry.target);  // Unobserve the element once it's intersected
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  document.querySelectorAll('.featured').forEach((item) => {
    observer.observe(item);
  });
});


    const options = {
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
    };

    const particlesInit = async (engine) => {
      await loadFull(engine);
    };

    return {
      options,
      particlesInit,
      featured
    };
  },
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


.featured {

  transform: translateY(10px);
  -webkit-transform: translateY(20px);
  -moz-transform: translateY(20px);
  -ms-transform: translateY(20px);
  -o-transform: translateY(20px);
}

.animate-delay {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: animate-delay;
}

@keyframes animate-delay {
  0% {
    opacity: 0;
    transform: translateY(10px);
    -webkit-transform: translateY(20px);
    -moz-transform: translateY(20px);
    -ms-transform: translateY(20px);
    -o-transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
  }
}

</style>
