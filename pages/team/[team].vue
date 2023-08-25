<template>
  <div class="flex flex-col md:flex-row items-stretch h-full md:h-screen h-min-screen text-white" v-if="teamMember">
    <div class="w-full md:w-1/2 h-full flex-shrink-0">
      <img :src="teamMember.image" alt="Team Member" class="h-full w-full object-cover" />
    </div>
    <div class="flex flex-col justify-center w-full md:w-1/3 text-left p-8">
      <h1 class="mt-2 font-bold text-2xl md:text-4xl uppercase">{{ teamMember.name }}</h1>
      <p class="mt-2">{{ teamMember.bio }}</p>
      <div class="mt-4">
        <a :href="teamMember.links.github" target="_blank" class="mr-2">GitHub</a>|
        <a :href="teamMember.links.personalSite" target="_blank" class="mr-2">Personal Site</a>|
        <a :href="teamMember.links.mastodon" target="_blank">Mastodon</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTeamStore } from '/store/team.ts';
definePageMeta({
  layout: "nofooter"
});
const { getTeamMemberBySlug } = useTeamStore();
const route = useRoute();
const slug = route.params.team as string;
const teamMember = getTeamMemberBySlug(slug);
</script>
