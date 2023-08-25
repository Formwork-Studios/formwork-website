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
        bio: "I'm Michael, a front-end engineer and UI/UX designer, long-time Linux user, philosophy nerd, and open-source advocate. My Master's degree in Urban Affairs and Bachelor's degree in Psychology have helped me understand the human side of technology.",
        slug: 'michael-synan',
        links: {
          github: 'https://github.com/michaelsynan',
          personalSite: 'https://www.michaelsynan.com',
          mastodon: 'https://elk.zone/mstdn.social/@letsbecomehuman',
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
