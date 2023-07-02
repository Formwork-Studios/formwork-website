import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Digital Marketing",
        image: "/new-york-city.webp",
        imageAria: "SEO and Marketing",
        description: "SEO and Marketing Agency.",
        slug: "digital-marketing",
        subServices: [
          { sid: 0,
            name: "Search Engine Optimization",
            description: "Improve website visibility on search engines.",
            header: "On-Page & Off-Page SEO",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Read More" 
          },
          {sid: 1,
            name: "Google Ads Management",
            description: "Improve website visibility on search engines.",
            header: "Google Ads Strategy & Optimization",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Check it out" 
          },
          {sid: 2,
            name: "Social Media Marketing",
            description: "Promote brand awareness on social media platforms.",
            header: "Leverage Social Media Platforms",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "More" 
          },
          {sid: 3,
            name: "Content Marketing",
            description: "Create valuable content to engage the target audience.",
            header: "Content That Converts",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "More" 
          },
        ],
      },
      {
        id: 2,
        name: "Web Design & UI/UX",
        image: "/new-york-city.webp",
        imageAria: "Web Design",
        description: "We are a web design company.",
        details: "these are some details",
        slug: "website-design",
        subServices: [
          { sid: 0,
            name: "Visual Design",
            description: "Improve website visibility on search engines.",
            header: "You Dream It, We Build It",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Read More" 
          },
          {sid: 1,
            name: "UI/UX Design",
            description: "Create websites that adapt to different devices and screen sizes.",
            header: "Designing for Usability",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "More" 
          },
          {sid: 2,
            name: "Web Accessibility",
            description: "Prioritizing digital inclusivity with a focus on designing and developing universally accessible websites. Our approach is consistent with WCAG guidelines and universal design principles, enabling seamless user experience for all, including individuals with diverse abilities and needs.",
            header: "Universal Web Accessibility Integration",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "More" 
          },
          {sid: 3,
            name: "Responsive Design",
            description: "We specialize in designing responsive layouts that provide a consistent user experience across various device types and screen sizes. Ensuring clear readability and effortless navigation, our designs prioritize functionality and user comfort on all devices, whether mobile or desktop.",
            header: "Stand Out on Any Device",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Read More" 
          },
        ],
      },




      {
        id: 3,
        name: "Web Development",
        image: "/birds2.jpg",
        imageAria: "Web Design",
        description: "Transforming ideas into functional and scalable web solutions",
        details: "From responsive designs to dynamic user experiences, we focus on building websites that perform.",
        slug: "website-development",
        subServices: [
            {
                sid: 0,
                name: "Front-End Development",
                description: "Transforming designs into interactive and engaging web experiences.",
                header: "Bringing Designs to Life",
                question: "What kind of user experience are you aiming for?",
                link: "front-end-development.html",
                linkText: "Learn More"
            },
            {
                sid: 1,
                name: "Back-End Development",
                description: "Building the backbone of your website with reliable and efficient server-side scripting.",
                header: "Powering Your Web Infrastructure",
                question: "What functionality does your website need?",
                link: "back-end-development.html",
                linkText: "Learn More"
            },
            {
                sid: 2,
                name: "API Development & Integration",
                description: "Linking your website to third-party services for enhanced functionality and user engagement.",
                header: "Connecting the Web",
                question: "What third-party services would you like to integrate?",
                link: "api-development.html",
                linkText: "Learn More"
            },
            {
                sid: 3,
                name: "Analytics & Tracking",
                description: "Implementing tools to track, analyze, and report on your website's performance and user interactions.",
                header: "Data-Driven Web Solutions",
                question: "What key metrics would you like to monitor?",
                link: "analytics-tracking.html",
                linkText: "Learn More"
            }
        ]
    },
    






      
    {
      id: 4,
      name: "E-commerce",
      image: "/birds2.jpg",
      imageAria: "E-commerce Solutions",
      description: "Crafting online stores to drive growth and sales",
      details: "From personalized shopping experiences to seamless checkout flows, we build robust e-commerce solutions.",
      slug: "e-commerce-solutions",
      subServices: [
          {
              sid: 0,
              name: "Custom E-commerce Development",
              description: "Building unique online stores tailored to your brand and customers.",
              header: "Tailored Online Shopping Experiences",
              question: "What features do you want in your online store?",
              link: "custom-e-commerce-development.html",
              linkText: "Learn More" 
          },
          {
              sid: 1,
              name: "Shopping Cart Integration",
              description: "Integrating seamless and secure shopping cart solutions for easy customer checkout.",
              header: "Streamlined Checkout Processes",
              question: "How can we simplify your customers' shopping experience?",
              link: "shopping-cart-integration.html",
              linkText: "Learn More" 
          },
          {
              sid: 2,
              name: "Shipping & Fulfillment Solutions",
              description: "Implementing shipping and fulfillment solutions for efficient order management.",
              header: "Efficient Order Delivery & Management",
              question: "How can we optimize your order delivery and fulfillment process?",
              link: "shipping-fulfillment-solutions.html",
              linkText: "Learn More" 
          },
          {
              sid: 3,
              name: "Amazon & Marketplace Integration",
              description: "Integrating your online store with Amazon and other marketplaces to expand your reach.",
              header: "Expanding Your Online Presence",
              question: "Which marketplaces do you want to integrate with?",
              link: "amazon-marketplace-integration.html",
              linkText: "Learn More" 
          }
      ]
  },
  
            {
        id: 5,
        name: "Social Media",
        image: "/birds2.jpg",
        imageAria: "Web Design",
        description: "We are a web design company.",
        details: "these are some details",
        slug: "social-media",
        subServices: [
          { sid: 0,
            name: "Strategy & Planning",
            description: "Improve website visibility on search engines.",
            header: "You Dream It, We Build It",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "More" 
          },
          {sid: 1,
            name: "Content Creation & Curation",
            description: "Create websites that adapt to different devices and screen sizes.",
            header: "RWD Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "More" 
          },
          {sid: 2,
            name: "Advertising & Promotion",
            description: "Design intuitive and visually appealing user interfaces.",
            header: "UI/UX Design Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "More" 
          },
          {sid: 3,
            name: "Reputation & Crisis Management",
            description: "Build online stores with secure payment integration.",
            header: "E-commerce Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "More" 
          },
        ],
      },
            {
        id: 6,
        name: "Branding & Identity",
        image: "/birds2.jpg",
        imageAria: "Web Design",
        description: "We are a web design company.",
        details: "these are some details",
        slug: "branding-identity",

        subServices: [
          { sid: 0,
            name: "Brand Strategy & Positioning",
            description: "Improve website visibility on search engines.",
            header: "You Dream It, We Build It",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "See More" 
          },
          {sid: 1,
            name: "Logo & Visual Identity Design",
            description: "Creating memorable visual elements that represent your brand.",
            header: "RWD Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "See More" 
          },
          {sid: 2,
            name: "Brand Style Guidelines",
            description: "Establishing a consistent look and feel across all media.",
            header: "UI/UX Design Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "See More" 
          },
          {sid: 3,
            name: "Brand Strategy & Development",
            description: "Increasing brand recognition and establishing your brand in the market.",
            header: "E-commerce Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "See More" 
          },
        ],
      },
    ],
  }),
});
