<script lang="ts" setup>
const route = useRoute()
definePageMeta({
  layout: "post",
  title: "Internet Addiction and Web Design",
  blurb: "In the early 20th century, Modernism became the dominant architectural movement in Europe. Inspired by the Modernist principle of 'form follows function,' architects sought to create buildings that embodied the ideals of utilitarianism, egalitarianism, and honesty.",
  date: "2023-08-10",
  status: "unpublished",
  author: "Michael Synan"
});

useHead({
  title: 'Internet Addiction and Web Design',
    meta: [
    { name: 'description', content: 'Increasingly, we are inundated with imagery aimed at directing our behavior. As available data increases, design patterns are developed and market competition becomes more steep, we risk having this flood of content overwhelm the consumers of digital media.' }
  ],
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-6 lg:px-8 blog py-20 tracking-wide">
    <!-- Header Image -->
    <img class="w-full h-64 object-cover" src="/unite-dhabitation.webp" alt="Blog post header image">
    <span class="pt-1.5 pb-7 inline-block text-white-800 text-base">The Unite d'habitation in Marseille, an example of Le
      Corbusier's brutalist architecture.</span>


    <!-- Blog post title -->
    <div class="blog-content">
<div class="mt-4 mb-8 ">
      <h1 class="text-3xl font-bold uppercase leading-normal">Internet Addiction and Web Design
      </h1>
      <div class="text-stone-600">By {{ route.meta.author }} | {{ route.meta.date }}</div>
</div>
      <div class="leading-loose text-lg">
        <p>In may the government released a <a class="border-b-2 border-opacity-50 hover:border-opacity-100 border-primary" href="https://www.hhs.gov/sites/default/files/sg-youth-mental-health-social-media-advisory.pdf">report</a> detailing issues related to social media and mental health.
           While the report talks about pitfalls and negative consequences of too much screen time, it falls short contextualizing and explaining the phenomena from a theoretical perspective. 
           One way to approach this type of analysis is through the lens of Jacques Lacan's '<a
            href="https://thedangerousmaybe.medium.com/lacans-concept-of-the-object-cause-of-desire-objet-petit-a-bd17b8f84e69"
            target="_blank" class="border-b-2 border-opacity-50 hover:border-opacity-100 border-primary">object petit
            a</a>', which is a concept that describes the object of desire as a stand-in for the 'real' object of desire. We can combine this with 
           Guy Debord's concept of the <a
            href="https://en.wikipedia.org/wiki/Society_of_the_Spectacle" target="_blank"
            class="border-b-2 border-opacity-50 hover:border-opacity-100 border-primary">the Spectacle</a>.
          
          
          
        </p>
        <p>For Lacan object petit a can represent the placeholder for a desire which cannot be satisfied. This desire is sustained through the cycle of lack
          and pursuit. Each time someone approaches the object of desire it moves slightly out of grasp keeping the desire wanting. 
          This effect is particularily pronounced with technology and social media - indeed, the appeal of the ideas come directly from it. 
        </p>
    <p>
      Unattainable object petit a can be also looked at from concerpts described in the buddhas fire sermon.
    </p>
  <p>From a neuroscience perspective you can also understand object petit a</p>




       


        
        <img class="w-full h-64 object-cover pt-10" src="/brutalistwebsites.webp" alt="Blog post header image">
        <span class="pt-1.5 pb-7 inline-block text-white-800 text-base"> Various brutalist websites displayed on <a
            href="https://brutalistwebsites.com">brutalistwebsites.com</a></span>
        <p>To better understand contemporary Brutalism, we can look at the definition presented on the website <a
            href="https://brutalistwebsites.com" target="_blank"
            class="border-b-2 border-opacity-50 hover:border-opacity-100 border-primary">brutalistwebsites.com</a>: </p>
        <div class="quote relative pt-3 pb-6">
          <i-mdi:format-quote-open-outline class="absolute left-0 md:-left-10 text-2xl md:text-4xl text-secondary" />
        <div class="mx-10 md:mx-0">In its ruggedness and lack of concern to look comfortable or easy, Brutalism can be
          seen as a reaction by a younger generation to the lightness, optimism, and frivolity of today's web design.
        </div>
      </div>




    </div>
  </div>
</div></template>

<style scoped>p,
ul {
  margin: 0px 0px 20px 0px;
}

ul li::before {
  content: '•';
  position: absolute;
  left: -1em;
}

.blog-image {
  padding: 30px 0px;
}</style>
