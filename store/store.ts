import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Digital Marketing",
        routeParam: "web-development",
        image: "/new-york-city.webp",
        imageAria: "SEO and Marketing",
        description: "SEO and Marketing Agency.",
        slug: "digital-marketing",
        subServices: [
          { sid: 0,
            name: "Search Engine Optimization",
            description: "Improve your ranking in search results relevant to your brand. Learn more about On-Page & Off-Page SEO.",
            header: "On-Page & Off-Page SEO",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 1,
            name: "Google Ads Management",
            description: "Reach your customers where they are searching, browsing and watching. Learn more about Google Ads Strategy & Optimization.",
            header: "Google Ads Strategy & Optimization",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 2,
            name: "Social Media Marketing",
            description: "Heighten brand awareness on social media platforms. Learn more about leveraging Social Media Platforms.",
            header: "Leverage Social Media Platforms",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 3,
            name: "Content Marketing",
            description: "Create engaging content that captures and holds attention. Learn more about Content That Converts.",
            header: "Content That Converts",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
        ],
      },
      {
        id: 2,
        name: "Web Design & UI/UX",
        routeParam: "web-design-and-ui-ux",
        image: "/subwaycompressed.webp",
        imageAria: "Web Design",
        description: "We are a web design company.",
        details: "these are some details",
        slug: "website-design",
        subServices: [
          { sid: 0,
            name: "Visual Design",
            description: "Bring your brand ideas to life. We use industry best practices to make sure your audience gets the type of experience you're looking for. Learn more about You Dream It, We Build It.",
            header: "You Dream It, We Build It",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 1,
            name: "UI/UX Design",
            description: "Create websites that adapt to different devices and screen sizes. Learn more about Designing for Usability.",
            header: "Designing for Usability",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 2,
            name: "Web Accessibility",
            description: "Digital inclusivity is an integral part of our philosophy of design. Our approach is consistent with WCAG guidelines and universal design principles, enabling seamless user experience for all, including individuals with diverse abilities and needs. Learn more about Universal Web Accessibility Integration.",
            header: 'WCAG-Compliant Designs',
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 3,
            name: "Responsive Design",
            description: "Our designs provide a consistent user experience across various device types and screen sizes. Prioritizing clear readability and effortless navigation, our responsive layouts ensure functionality and user comfort on all devices. Learn more about Stand Out on Any Device.",
            header: "Stand Out on Any Device",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
        ],
      },




      {
        id: 3,
        name: "Web Development",
        routeParam: "web-development",
        image: "/birds-flying.webp",
        imageAria: "Web Design",
        description: "Transforming ideas into functional and scalable web solutions",
        details: "From responsive designs to dynamic user experiences, we focus on building websites that perform.",
        slug: "website-development",
        subServices: [
            {
                sid: 0,
                name: "Front-End Development",
                description: "We transform designs into interactive and engaging web experiences. Learn more about Bringing Designs to Life.",
                header: "Bringing Designs to Life",
                question: "What kind of user experience are you aiming for?",
                link: "front-end-development.html",
                linkText: "Free Consultation"
            },
            {
                sid: 1,
                name: "Back-End Development",
                description: "Build the backbone of your website with reliable and efficient server-side scripting. Learn more about Powering Your Web Infrastructure.",
                header: "Powering Your Web Infrastructure",
                question: "What functionality does your website need?",
                link: "back-end-development.html",
                linkText: "Free Consultation"
            },
            {
                sid: 2,
                name: "API Development & Integration",
                description: "Link your website to third-party services for enhanced functionality and user engagement. Learn more about Connecting the Web.",
                header: "Connecting the Web",
                question: "What third-party services would you like to integrate?",
                link: "api-development.html",
                linkText: "Free Consultation"
            },
            {
                sid: 3,
                name: "Analytics & Tracking",
                description: "Implement tools to track, analyze, and report on your website's performance and user interactions. Learn more about Data-Driven Web Solutions.",
                header: "Data-Driven Web Solutions",
                question: "What key metrics would you like to monitor?",
                link: "analytics-tracking.html",
                linkText: "Free Consultation"
            }
        ]
    },
    






      
    {
      id: 4,
      name: "E-commerce",
      routeParam: "e-commerce",
      image: "/Socrates-Sculpture-Park-Queens-LIC.webp",
      imageAria: "E-commerce Solutions",
      description: "Crafting online stores to drive growth and sales",
      details: "From personalized shopping experiences to seamless checkout flows, we build robust e-commerce solutions.",
      slug: "e-commerce-solutions",
      subServices: [
          {
              sid: 0,
              name: "Custom E-commerce Development",
              description: "We build unique online stores tailored to your brand and customers. Learn more about Tailored Online Shopping Experiences.",
              header: "Tailored Online Shopping Experiences",
              question: "What features do you want in your online store?",
              link: "custom-e-commerce-development.html",
              linkText: "Free Consultation" 
          },
          {
              sid: 1,
              name: "Shopping Cart Integration",
              description: "Integrating seamless and secure shopping cart solutions for easy customer checkout. Learn more about Streamlined Checkout Processes.",
              header: "Streamlined Checkout Processes",
              question: "How can we simplify your customers' shopping experience?",
              link: "shopping-cart-integration.html",
              linkText: "Free Consultation" 
          },
          {
              sid: 2,
              name: "Shipping & Fulfillment Solutions",
              description: "Implement shipping and fulfillment solutions for efficient order management. Learn more about Efficient Order Delivery & Management.",
              header: "Efficient Order Delivery & Management",
              question: "How can we optimize your order delivery and fulfillment process?",
              link: "shipping-fulfillment-solutions.html",
              linkText: "Free Consultation" 
          },
          {
              sid: 3,
              name: "Amazon & Marketplace Integration",
              description: "Integrate your online store with Amazon and other marketplaces to expand your reach. Learn more about Expanding Your Online Presence. ",
              header: "Expanding Your Online Presence",
              question: "Which marketplaces do you want to integrate with?",
              link: "amazon-marketplace-integration.html",
              linkText: "Free Consultation" 
          }
      ]
  },
  
            {
        id: 5,
        name: "Social Media",
        routeParam: "social-media",
        image: "/busy-city.jpg",
        imageAria: "Web Design",
        description: "We are a web design company.",
        details: "these are some details",
        slug: "social-media",
        subServices: [
          { sid: 0,
            name: "Strategy & Planning",
            description: "A plan for creating, posting, and engaging with social media content, customized for your brand. ",
            header: "You Dream It, We Build It",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 1,
            name: "Content Creation & Curation",
            description: "Create websites that adapt to different devices and screen sizes.",
            header: "RWD Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 2,
            name: "Advertising & Promotion",
            description: "Design intuitive and visually appealing user interfaces.",
            header: "UI/UX Design Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 3,
            name: "Reputation & Crisis Management",
            description: "Build online stores with secure payment integration.",
            header: "E-commerce Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
        ],
      },
            {
        id: 6,
        name: "Branding & Identity",
        routeParam: "branding-identity",
        image: "/world-trade-center-nyc-sky.webp",
        imageAria: "Web Design",
        description: "We are a web design company.",
        details: "these are some details",
        slug: "branding-identity",

        subServices: [
          { sid: 0,
            name: "Brand Strategy & Positioning",
            description: "Tell your story how and where it will inspire audience trust and action.",
            header: "You Dream It, We Build It",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 1,
            name: "Logo & Visual Identity Design",
            description: "Create memorable visual elements that represent your brand. ",
            header: "RWD Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 2,
            name: "Brand Style Guidelines",
            description: "Establish a consistent look and feel across all media.",
            header: "UI/UX Design Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
          {sid: 3,
            name: "Brand Strategy & Development",
            description: "Increase brand recognition and establish your brand in the market.",
            header: "E-commerce Header",
            question: "What are you interested in building?",
            link: "some-link.html",
            linkText: "Free Consultation" 
          },
        ],
      },
    ],
  }),
});
