<template>
    <div class="flex flex-col items-center justify-center h-screen text-white" v-if="teamMember">
      <img :src="teamMember.image" alt="Team Member" class="w-full sm:w-64 h-auto" />
      <h1 class="text-center mt-2 font-bold text-2xl">{{ teamMember.name }}</h1>
      <p class="text-center mt-2">{{ teamMember.bio }}</p>
      <div class="mt-2">
        <a :href="teamMember.links.github" target="_blank" class="mr-2">GitHub</a>
        <a :href="teamMember.links.personalSite" target="_blank" class="mr-2">Personal Site</a>
        <a :href="teamMember.links.mastodon" target="_blank">Mastodon</a>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useTeamStore } from '/store/team.ts'; // Importing useTeamStore from team.ts


definePageMeta({
  layout: "nofooter"})
  
  const { getTeamMemberBySlug } = useTeamStore(); // Using useTeamStore function
  const route = useRoute();
  const slug = route.params.team as string;
  const teamMember = getTeamMemberBySlug(slug);
  </script>
  