// /store/team.ts
import { defineStore } from "pinia";

export const useTeamStore = defineStore("team", {
  state: () => ({
    teamMembers: [
      {
        id: 1,
        name: 'Abderrahmane Hana',
        image: '/abderrahmane-hana.jpg',
        bio: 'Bio for Abderrahmane Hana',
        slug: 'abderrahmane-hana',
        links: {
          github: 'https://github.com/abderrahmane-hana',
          personalSite: 'https://www.abderrahmanehana.com',
          mastodon: 'https://mastodon.social/@abderrahmane-hana',
        },
      },
      {
        id: 2,
        name: 'Michael Synan',
        image: '/michael-synan.jpg',
        bio: 'Bio for Michael Synan',
        slug: 'michael-synan',
        links: {
          github: 'https://github.com/michael-synan',
          personalSite: 'https://www.michaelsynan.com',
          mastodon: 'https://mastodon.social/@michael-synan',
        },
      },
      // Add more team members as needed
    ],
  }),
  getters: {
    getTeamMemberBySlug: (state) => (slug: string) => {
      return state.teamMembers.find(member => member.slug === slug);
    },
  },
});
