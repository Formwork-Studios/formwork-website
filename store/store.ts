import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "SEO & Marketing",
        image: "/birds2.jpg",
        imageAria: "SEO and Marketing",
        description: "SEO and Marketing Agency.",
        slug: ["digital-marketing"],
        subServices: [
          { sid: 0,
            name: "default sub service",
            description: "Improve website visibility on search engines.",
            header: "Default Header",
            details: "these are some details"
          },
          {sid: 1,
            name: "Search Engine Optimization",
            description: "Improve website visibility on search engines.",
            header: "SEO Header",
            details: "these are some details"
          },
          {sid: 2,
            name: "Social Media Marketing",
            description: "Promote brand awareness on social media platforms.",
            header: "SMM Header",
            details: "these are some details"
          },
          {sid: 3,
            name: "Content Marketing",
            description: "Create valuable content to engage the target audience.",
            header: "Content Marketing Header",
            details: "these are some details"
          },
        ],
      },
      {
        id: 2,
        name: "Web Design",
        image: "/birds2.jpg",
        imageAria: "Web Design",
        description: "We are a web design company.",
        details: "these are some details",
        slug: ["website-design"],
        subServices: [
          { sid: 0,
            name: "Website Design",
            description: "Improve website visibility on search engines.",
            header: "You Dream It, We Build It",
            details: "these are some details"
          },
          {sid: 1,
            name: "Responsive Web Design",
            description: "Create websites that adapt to different devices and screen sizes.",
            header: "RWD Header",
            details: "these are some details"
          },
          {sid: 2,
            name: "UI/UX Design",
            description: "Design intuitive and visually appealing user interfaces.",
            header: "UI/UX Design Header",
            details: "these are some details"
          },
          {sid: 3,
            name: "E-commerce Solutions",
            description: "Build online stores with secure payment integration.",
            header: "E-commerce Header",
            details: "these are some details"
          },
        ],
      },
    ],
  }),
});
