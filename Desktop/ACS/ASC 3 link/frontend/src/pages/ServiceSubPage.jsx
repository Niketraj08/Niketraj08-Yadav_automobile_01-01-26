import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import Contact from "../components/Contact.jsx";

const serviceDetails = {
  "crm-erp-solutions": {
    title: "CRM & ERP Solutions",
    summary:
      "Take control of your customer experience and grow revenue with the most beneficent CRM system. We offer an all-in-one platform to automate your sales, customer services, marketing campaigns, finance, and logistics.",
    // image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "Process mapping, data migration, and change management",
      "Custom workflows, approvals, notifications, and dashboards", 
      "Role-based access, audit trails, and compliance-ready controls",
      "Performance tuning, observability, and ongoing optimization",
    ],
    highlight: "Tested and trusted implementations that unify your customer and operations data for faster, more accurate decisions.",
    featureCards: [
      { title: "360° Customer View", detail: "Consolidated profiles, interaction history, and smart routing." },
      { title: "Operations & Finance", detail: "Inventory, invoicing, procurement, and revenue recognition synced." },
      { title: "Automation & Alerts", detail: "Playbooks, approvals, SLAs, nudges, and exception handling." },
      { title: "Analytics & Forecasts", detail: "Cohorts, pipeline health, demand forecasting, and executive dashboards." },
    ],
    faq: [
      { q: "Do you migrate from legacy CRM/ERP?", a: "Yes. We plan data models, dedupe, rehearse cutovers, and secure migrations." },
      { q: "Can you integrate with existing tools?", a: "We connect telephony, marketing, support desks, finance, and data warehouses via secure APIs/events." },
      { q: "How do you ensure adoption?", a: "Role-based UX, enablement, runbooks, and staged rollouts with feedback loops." },
    ],
    explainer: {
      heading: "What is CRM Software and How Does it Work?",
      body:
        "CRM software centralizes customer data and touchpoints—sales, marketing, service—so teams share a single source of truth. It ingests leads, tracks interactions, automates follow-ups, scores opportunities, routes tickets, and surfaces insights via dashboards. Data flows in from channels (email, chat, phone, web), is enriched, and triggers workflows and alerts. Integrations with ERP, finance, and support tools keep customer-facing and back-office processes synchronized.",
      
      image: "/Attached_image.png",
      quadrants: {
        automation: {
          title: "Automation & Efficiency",
          items: [
            "Lead management",
            "Marketing automation",
            "Sales automation",
            "Workflow automation"
          ]
        },
        intelligence: {
          title: "Intelligence & Insights",
          items: [
            "Analytics",
            "Artificial intelligence",
            "Track customer interaction",
            "Individualized customer experience"
          ]
        }
      }
    },
    mattersImage: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80",
    differences: {
      heading: "Difference between CRM & ERP",
      copy:
        "Pristinely simple with advanced features, CRM & ERP solutions serve different parts of the business. CRM drives revenue and relationships; ERP runs operations and finance. Here’s how they compare and where each adds value.",
      rows: [
        { label: "Category", crm: "CRM", erp: "ERP" },
        { label: "Type", crm: "Computer software", erp: "Enterprise software" },
        { label: "Primary domain", crm: "Front-office activities", erp: "Back-office operations" },
        { label: "Business goal", crm: "Increase sales & loyalty", erp: "Optimize efficiency & cost" },
        { label: "Orientation", crm: "Customer-oriented", erp: "Process/operations-oriented" },
        { label: "Common tools", crm: "Salesforce, HubSpot, Zoho, Pipedrive", erp: "SAP, Oracle, NetSuite, Microsoft Dynamics" },
        { label: "Main users", crm: "Sales & marketing; CS/support", erp: "Finance, ops, supply chain, HR" },
      ],
      panels: {
        crm: {
          title: "CRM",
          image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80",
          bullets: [
            "Computer software",
            "Utilized in front-office activities",
            "Focuses on increasing sales",
            "Customer-oriented",
            "Salesforce, HubSpot, Zoho, Pipedrive",
            "Used by sales & marketing",
          ],
        },
        erp: {
          title: "ERP",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
          bullets: [
            "Pre-installed packages",
            "Utilized in back-office activities",
            "Focuses on reducing costs",
            "Enterprise-oriented",
            "Netsuite, Odoo, SAP, Oracle ERP, Acumatica",
            "Used by accounting & warehouse teams",
          ],
        },
      },
    },
    benefits: [
      {
        title: "Deal flow clarity",
        detail: "Instant sharing of data on the progress of ongoing deals and monitoring purchasing activities, the sales team can easily keep the finance team in the loop. Account and calculate the expected revenue. This enhances data quality, improves analytics, and allows better-informed decision-making. In a way, it connects your operational and financial system to a central database.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "360° customer view",
        detail: "CRM software gives you a holistic view of client details and needs. Name, email address, website, birthday, contact details, job title, or social media handles having this information at your fingertips makes it easier to personalize communication with every client. This information will help reps to proactively offer the right services at the right time.",
        image: "https://images.unsplash.com/photo-1686852340439-34d2bdfb6f5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Inventory updates",
        detail: "Effective inventory management is crucial for businesses. A business with excellent inventory management capabilities can improve accuracy and visibility. Inventory updates can help avoid potential issues, overselling products that are out of stock, and identify potential bottlenecks. Accurate quotes and on-time shipment consistency are key to building loyal customers.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Accurate pricing",
        detail: "Closing a deal is the toughest part for sales reps in a business. Fair and accurate pricing recommendations by CRM software allow faster deal closing. Offering fair prices reduces the chances of customers having second thoughts about your services. Eventually, this increases the chances clients will purchase your product.",
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Marketing insights",
        detail: "In addition to planning marketing campaigns logistically, CRM and ERP software integration can facilitate better marketing insights. Analyzing the correlation between the timing of marketing actions and consumer actions will give your business a better idea of what works well. This level of benefit is a direct path to connect with loyal clientele.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Better collaboration",
        detail: "CRM & ERP systems will facilitate better collaboration among your teams. With marketing campaign insights, both finance and marketing teams can share and look into the same data rather than having information related to the specific department. With this, it’s easier to boost revenue from future marketing activities..",
        image: "https://media.istockphoto.com/id/1360521207/photo/businessman-using-a-computer-analysis-for-process-and-workflow-automation-with-flowchart-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=VXkUveiNKFDmHF6frXng4Es6t4pyj3qmMHbI8TMd3hg=",
      },
    ],
    benefitsImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  },

  "angularjs-development": {
    title: "AngularJS Development ",
    summary:
      "Shape your ideas into reality with agile, scalable, and high‑performance AngularJS applications. We design and build dynamic web solutions using AngularJS, HTML, and TypeScript so your business gets fast, secure, and maintainable products that are easy to grow over time.",
    bullets: [
      "Custom AngularJS web, SPA, and PWA development",
      "Modular MVC architecture for reusable, testable code",
      "Material Design–driven, mobile‑first user interfaces",
      "Code‑splitting and optimization for fast page loads",
    ],
    highlight:
      "Our AngularJS team combines strong engineering discipline with UX‑first thinking. From MVPs to large enterprise frontends, we architect applications for long‑term maintainability, clean separation of concerns, and performance that feels instant to your users.",
    featureCards: [
      {
        title: "MVC Architecture",
        detail:
          "Organize your frontend with a clear Model‑View‑Controller structure. We keep logic, state, and UI decoupled so adding new flows or refactoring existing ones stays safe and predictable.",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Material Design UI",
        detail:
          "Craft responsive AngularJS interfaces using Material Design principles. Consistent grids, typography, spacing, and components deliver a polished, brand‑aligned experience across devices.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Code Splitting & Performance",
        detail:
          "Split bundles and lazy‑load modules so users download only what they need. We fine‑tune change detection, caching, and API usage for crisp, low‑latency interactions.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Two‑Way Data Binding",
        detail:
          "Use AngularJS data binding to keep the model and view synchronized. We design bindings carefully to avoid performance bottlenecks while preserving developer productivity.",
        image:
          "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    services: {
      heading: "AngularJS Development Services",
      items: [
        {
          title: "Custom AngularJS Development",
          detail:
            "End‑to‑end AngularJS application development tailored to your business domain—covering architecture, UI, APIs, and integrations for web and mobile‑friendly frontends.",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Single Page Application (SPA) Development",
          detail:
            "Build fast SPA experiences with client‑side routing, deep linking, and smooth transitions. Ideal for dashboards, portals, and productivity tools that must feel like desktop apps in the browser.",
          image:
            "https://images.unsplash.com/photo-1559163499-413811fb2344?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Progressive Web App Development",
          detail:
            "Leverage AngularJS with modern browser capabilities to ship installable PWAs featuring offline support, background sync, and app‑like UX on any device.",
          image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Hybrid Mobile App Development",
          detail:
            "Use your AngularJS codebase to power hybrid mobile apps. We combine web technologies with native wrappers to deliver Android and iOS apps faster and more cost‑effectively.",
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "AngularJS Upgrade & Migration",
          detail:
            "Migrate legacy frontends or older AngularJS versions to modern Angular or a refreshed AngularJS stack. We plan data, routing, and component migration to minimize downtime.",
          image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "AngularJS Plugin & Module Development",
          detail:
            "Extend existing applications with custom AngularJS modules, directives, components, and widgets that encapsulate reusable functionality for teams across your organization.",
          image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    process: {
      heading: "Our AngularJS Development Process",
      steps: [
        {
          title: "Discovery & Architecture",
          detail:
            "Understand your goals, users, and existing systems. Define information architecture, tech stack, and AngularJS module structure aligned with scalability and performance needs.",
          image:
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "UX/UI Design & Prototyping",
          detail:
            "Create wireframes and interactive prototypes that follow Material Design and your brand guidelines. Validate key user journeys before we write production code.",
          image:
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Agile Development",
          detail:
            "Implement AngularJS components, services, and state management in iterative sprints. You get regular demos, early feedback loops, and transparent progress tracking.",
          image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Testing & Hardening",
          detail:
            "Use unit tests, integration tests, and cross‑browser checks to keep regressions out. We profile performance, harden security, and refine UX polish before launch.",
          image:
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Deployment & Ongoing Support",
          detail:
            "Set up CI/CD, monitoring, and logging for your AngularJS apps. Post‑launch, we offer maintenance, feature extensions, and performance optimization as your product evolves.",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    faq: [
      {
        q: "What are the benefits of using AngularJS?",
        a: "AngularJS helps you build dynamic, scalable, and testable applications with an organized codebase. It promotes code reusability, supports single‑page app features, and offers a declarative UI with a relatively gentle learning curve."
      },
      {
        q: "How long does it take to develop an AngularJS project?",
        a: "Timelines depend on scope, integrations, and design complexity. Simple AngularJS projects can be delivered in a few weeks, while large enterprise frontends may span multiple months with phased releases."
      },
      {
        q: "Can you migrate my existing application to Angular or AngularJS?",
        a: "Yes. We analyze your current stack, data models, and UX, then design a phased migration plan. We focus on minimizing disruption while improving performance, maintainability, and overall user experience."
      },
      {
        q: "Do you provide post‑launch support for AngularJS apps?",
        a: "Yes. We offer ongoing maintenance, monitoring, bug fixes, and feature enhancements so your AngularJS applications stay secure, stable, and aligned with business needs."
      },
    ],
    mattersImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1400&q=80",
    techStack: {
      heading: "Our Range of Technologies, Tools, and Skill Sets",
      description:
        "We combine a modern JavaScript stack with enterprise‑grade backend, DevOps, and cloud expertise so your AngularJS frontend sits on a robust, scalable foundation. Here’s a snapshot of the technologies we work with day‑to‑day.",
      groups: [
        {
          title: "Frontend",
          items: ["AngularJS", "Angular", "React", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
        },
        {
          title: "Backend & Frameworks",
          items: [".NET", "Node.js", "Java", "Python", "PHP", "Laravel", "Express.js", "Flask"],
        },
        {
          title: "Databases & Storage",
          items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Firebase", "Redis"],
        },
        {
          title: "Cloud & DevOps",
          items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD pipelines"],
        },
      ],
    },
    whyChoose: {
      heading: "Why Choose AstraCognix as Your AngularJS Development ",
      description:
        "We blend strong engineering discipline with an obsession for user experience to ship AngularJS applications that are scalable, secure, and genuinely easy to use. From concept to long‑term support, you get a transparent, agile, and partnership‑driven engagement.",
      items: [
        {
          title: "Agile, Value‑Led Delivery",
          detail:
            "Our teams work in short, transparent sprints with regular demos and clear backlogs. You always know what’s shipping next and how it maps to business outcomes, not just technical tasks.",
          image:
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Deep UI/UX Expertise",
          detail:
            "We combine AngularJS best practices with modern UI design so your product feels fast, consistent, and on‑brand. Wireframes, prototypes, and usability feedback are baked into our process.",
          image:
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Feature‑Rich, Future‑Ready Apps",
          detail:
            "We architect AngularJS frontends with clean modules, shared components, and robust testing. That makes adding new features, integrating APIs, or evolving to modern Angular much easier later.",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Seamless Integration & Support",
          detail:
            "Our engineers are comfortable integrating AngularJS with your existing CRMs, ERPs, and cloud services. Post‑launch, we stay available for monitoring, optimization, and continuous improvement.",
          image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
  },





  

// ReactJS Development


  // "reactjs-development": {
  //   title: "ReactJS Development",
  //   summary:
  //     "Build modern, interactive, and scalable web applications with ReactJS. We create dynamic user interfaces using React, JSX, and modern JavaScript so your business gets fast, component-based, and maintainable products that grow with your needs.",
  //   bullets: [
  //     "Custom ReactJS web, SPA, and PWA development",
  //     "Component-based architecture for reusable, testable code",
  //     "Modern UI libraries and responsive design patterns",
  //     "Virtual DOM optimization for lightning-fast performance",
  //   ],
  //   highlight:
  //     "Our ReactJS team combines cutting-edge engineering practices with user-centric design. From MVPs to large-scale applications, we architect solutions for long-term scalability, clean component structure, and performance that feels instant to your users.",
  //   featureCards: [
  //     {
  //       title: "Component Architecture",
  //       detail:
  //         "Organize your frontend with reusable React components. We maintain clean separation of concerns so adding new features or refactoring existing ones stays safe and predictable.",
  //       image:
  //         "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  //     },
  //     {
  //       title: "Modern React UI",
  //       detail:
  //         "Craft responsive React interfaces using modern design systems. Consistent components, state management, and responsive layouts deliver a polished, brand-aligned experience across devices.",
  //       image:
  //         "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  //     },
  //     {
  //       title: "Virtual DOM & Performance",
  //       detail:
  //         "Leverage React's Virtual DOM for efficient rendering and updates. We implement code splitting, lazy loading, and optimization techniques for crisp, high-performance interactions.",
  //       image:
  //         "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  //     },
  //     {
  //       title: "State Management",
  //       detail:
  //         "Implement robust state management with React hooks, Context API, or Redux. We design state flow carefully to maintain performance while ensuring predictable data handling.",
  //       image:
  //         "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80",
  //     },
  //   ],
  //   services: {
  //     heading: "ReactJS Development Services",
  //     items: [
  //       {
  //         title: "Custom ReactJS Development",
  //         detail:
  //           "End-to-end ReactJS application development tailored to your business domain—covering architecture, UI, APIs, and integrations for web and mobile-friendly frontends.",
  //         image:
  //           "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "Single Page Application (SPA) Development",
  //         detail:
  //           "Build fast SPA experiences with React Router, client-side routing, and smooth transitions. Ideal for dashboards, portals, and productivity tools that feel like native apps.",
  //         image:
  //           "https://images.unsplash.com/photo-1559163499-413811fb2344?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "Progressive Web App Development",
  //         detail:
  //           "Leverage React with modern browser capabilities to ship installable PWAs featuring offline support, background sync, and app-like UX on any device.",
  //         image:
  //           "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "React Native Mobile App Development",
  //         detail:
  //           "Use React knowledge to power cross-platform mobile apps. We build iOS and Android apps using React Native for faster development and consistent code sharing.",
  //         image:
  //           "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "React Migration & Upgrade",
  //         detail:
  //           "Migrate legacy frontends or older React versions to modern React with hooks and functional components. We plan data, routing, and component migration to minimize downtime.",
  //         image:
  //           "https://images.unsplash.com/photo-1522071820081-009f0129c11c?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "React Component Library Development",
  //         detail:
  //           "Build reusable component libraries and design systems that standardize UI patterns across your applications. Perfect for teams and enterprise-scale development.",
  //         image:
  //           "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
  //       },
  //     ],
  //   },
  //   process: {
  //     heading: "Our ReactJS Development Process",
  //     steps: [
  //       {
  //         title: "Discovery & Architecture",
  //         detail:
  //           "Understand your goals, users, and existing systems. Define component architecture, state management strategy, and React ecosystem aligned with scalability and performance needs.",
  //         image:
  //           "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "UX/UI Design & Prototyping",
  //         detail:
  //           "Create wireframes and interactive prototypes that follow modern design principles and your brand guidelines. Validate key user journeys before we write production code.",
  //         image:
  //           "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "Agile Development",
  //         detail:
  //           "Implement React components, hooks, and state management in iterative sprints. You get regular demos, early feedback loops, and transparent progress tracking.",
  //         image:
  //           "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "Testing & Optimization",
  //         detail:
  //           "Use unit tests, integration tests, and cross-browser checks to keep regressions out. We profile performance, optimize bundles, and refine UX polish before launch.",
  //         image:
  //           "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "Deployment & Ongoing Support",
  //         detail:
  //           "Set up CI/CD, monitoring, and logging for your React apps. Post-launch, we offer maintenance, feature extensions, and performance optimization as your product evolves.",
  //         image:
  //           "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  //       },
  //     ],
  //   },
  //   faq: [
  //     {
  //       q: "What are the benefits of using ReactJS?",
  //       a: "ReactJS helps you build dynamic, scalable, and testable applications with reusable components. It offers excellent performance through Virtual DOM, supports modern development patterns, and has a vast ecosystem of tools and libraries."
  //     },
  //     {
  //       q: "How long does it take to develop a ReactJS project?",
  //       a: "Timelines depend on scope, integrations, and design complexity. Simple ReactJS projects can be delivered in a few weeks, while large enterprise frontends may span multiple months with phased releases."
  //     },
  //     {
  //       q: "Can you migrate my existing application to React?",
  //       a: "Yes. We analyze your current stack, data models, and UX, then design a phased migration plan. We focus on minimizing disruption while improving performance, maintainability, and overall user experience."
  //     },
  //     {
  //       q: "Do you provide post-launch support for ReactJS apps?",
  //       a: "Yes. We offer ongoing maintenance, monitoring, bug fixes, and feature enhancements so your ReactJS applications stay secure, stable, and aligned with business needs."
  //     },
  //   ],
  //   mattersImage:
  //     "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1400&q=80",
  //   techStack: {
  //     heading: "Our Range of Technologies, Tools, and Skill Sets",
  //     description:
  //       "We combine a modern JavaScript stack with enterprise-grade backend, DevOps, and cloud expertise so your React frontend sits on a robust, scalable foundation. Here's a snapshot of the technologies we work with day-to-day.",
  //     groups: [
  //       {
  //         title: "Frontend",
  //         items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Styled Components"],
  //       },
  //       {
  //         title: "State Management",
  //         items: ["Redux", "Zustand", "React Query", "Context API", "Recoil"],
  //       },
  //       {
  //         title: "Backend & Frameworks",
  //         items: ["Node.js", "Express.js", "Next.js API Routes", "GraphQL", "REST APIs"],
  //       },
  //       {
  //         title: "Databases & Storage",
  //         items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Redis"],
  //       },
  //       {
  //         title: "Cloud & DevOps",
  //         items: ["Vercel", "Netlify", "AWS", "Azure", "Docker", "CI/CD pipelines"],
  //       },
  //     ],
  //   },
  //   whyChoose: {
  //     heading: "Why Choose AstraCognix as Your ReactJS Development Partner",
  //     description:
  //       "We blend cutting-edge engineering practices with an obsession for user experience to ship React applications that are scalable, secure, and genuinely easy to use. From concept to long-term support, you get a transparent, agile, and partnership-driven engagement.",
  //     items: [
  //       {
  //         title: "Modern, Future-Ready Development",
  //         detail:
  //           "Our teams work with the latest React patterns, hooks, and ecosystem tools. You always get solutions built with current best practices and future scalability in mind.",
  //         image:
  //           "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "Performance-First Approach",
  //         detail:
  //           "We combine React best practices with modern optimization techniques so your product feels fast and responsive. Code splitting, lazy loading, and caching are built into our process.",
  //         image:
  //           "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "Component-Driven Development",
  //         detail:
  //           "We architect React frontends with reusable components, design systems, and robust testing. That makes scaling your team, adding features, and maintaining code much easier over time.",
  //         image:
  //           "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  //       },
  //       {
  //         title: "Full-Stack Integration & Support",
  //         detail:
  //           "Our engineers excel at integrating React with modern backends, APIs, and cloud services. Post-launch, we stay available for monitoring, optimization, and continuous improvement.",
  //         image:
  //           "https://images.unsplash.com/photo-1522071820081-009f0129c11c?auto=format&fit=crop&w=1200&q=80",
  //       },
  //     ],
  //   },
  // },



// Web Development Company


  "web-development-company": {
    title: "Web Development Company",
    summary:
      "We design and build fast, secure, and scalable websites that feel great on every device. From corporate sites and product landing pages to complex web applications, AstraCognix blends clean engineering with thoughtful UX so your brand looks sharp and converts better.",
    bullets: [
      "Custom business websites, portals, and product microsites",
      "Responsive, mobile‑first layouts with modern UI patterns",
      "SEO‑friendly architecture, schema, and content structure",
      "CMS and eCommerce integrations tailored to your stack",
    ],
    highlight:
      "Your website is often the first place customers interact with your brand. We treat it as a product, not just a brochure—focusing on usability, performance, accessibility, and measurable business outcomes like leads, trials, and sales.",
    featureCards: [
      {
        title: "User‑Friendly Experiences",
        detail:
          "More than great visuals, we design intuitive navigation, clear information hierarchy, and fast interactions so visitors can find what they need in just a few clicks—on desktop, tablet, or mobile.",
        image:
          "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Conversion‑Focused Layouts",
        detail:
          "We combine UX best practices with clear calls‑to‑action, trust signals, and forms that convert. Every page is mapped to a goal—book a demo, request a quote, download a resource, or talk to your team.",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "SEO‑Ready Foundations",
        detail:
          "Clean HTML, semantic markup, optimized images, and structured data help search engines understand and rank your site. We build for page‑speed, mobile friendliness, and Core Web Vitals from day one.",
        image:
          "https://images.unsplash.com/photo-1519222970733-f546218fa6d1?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Secure & Maintainable Code",
        detail:
          "Our engineers follow secure‑by‑default patterns, version control, and coding standards. That makes your site easier to extend, safer to operate, and simpler to maintain over the long term.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    services: {
      heading: "Web Development Services",
      items: [
        {
          title: "Custom Website Development",
          detail:
            "Bespoke corporate, portfolio, and marketing websites aligned with your brand voice and growth goals. We turn wireframes and content into performant, secure experiences that are easy for your team to manage.",
          image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "CMS‑Driven Sites (WordPress & Headless)",
          detail:
            "Implement WordPress or headless CMS solutions so non‑technical teams can manage pages, blogs, and landing pages without developer bottlenecks, while maintaining strong performance and security.",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Web Application Frontends",
          detail:
            "Rich dashboards, portals, and self‑service experiences built with modern JavaScript frameworks. We design components and flows that feel like native apps in the browser.",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "eCommerce & Payment Integrations",
          detail:
            "Product catalogs, carts, and checkout flows powered by modern eCommerce platforms or custom builds. We integrate payment gateways and logistics providers for smooth ordering and fulfillment.",
          image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Website Redesign & Performance Tuning",
          detail:
            "Redesign outdated sites with fresh UI, better copy, and improved performance. We audit speed, SEO, and UX, then address the bottlenecks that hurt rankings and conversions.",
          image:
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Ongoing Support & Maintenance",
          detail:
            "Security updates, content support, feature enhancements, and monitoring to keep your site secure, fast, and aligned with evolving business needs.",
          image:
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    process: {
      heading: "Our Web Development Process",
      steps: [
        {
          title: "Discovery & Strategy",
          detail:
            "We dig into your audience, competitors, and goals. Together we define site structure, key user journeys, content strategy, and success metrics.",
          image:
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "UX/UI Design & Prototyping",
          detail:
            "Wireframes and high‑fidelity designs that reflect your brand identity and prioritize clarity, accessibility, and responsiveness across screen sizes.",
          image:
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Development & Integration",
          detail:
            "We implement frontends and backends with clean, modular code. APIs, CMSs, analytics, and third‑party tools are integrated with an eye on performance and security.",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Testing & Launch",
          detail:
            "Functional, cross‑browser, and device testing plus SEO and performance checks. We deploy with backups and monitoring so launch day is smooth and predictable.",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    techStack: {
      heading: "Web Technologies We Work With",
      description:
        "We combine proven web frameworks with modern tooling so your site is both future‑ready and easy to operate. Here are some of the technologies we commonly use.",
      groups: [
        {
          title: "Frontend",
          icon: "fas fa-code",
          items: [
            { name: "React", icon: "fab fa-react" },
            { name: "Angular", icon: "fab fa-angular" },
            { name: "Vue", icon: "fab fa-vuejs" },
            { name: "HTML5", icon: "fab fa-html5" },
            { name: "CSS3", icon: "fab fa-css3-alt" },
            { name: "Tailwind CSS", icon: "fas fa-palette" },
            { name: "Bootstrap", icon: "fab fa-bootstrap" }
          ],
        },
        {
          title: "Backend & Frameworks",
          icon: "fas fa-server",
          items: [
            { name: "Node.js", icon: "fab fa-node-js" },
            { name: "Laravel", icon: "fab fa-laravel" },
            { name: "PHP", icon: "fab fa-php" },
            { name: "Python", icon: "fab fa-python" },
            { name: "Django", icon: "fas fa-cogs" },
            { name: ".NET", icon: "fab fa-microsoft" }
          ],
        },
        {
          title: "CMS & eCommerce",
          icon: "fas fa-shopping-cart",
          items: [
            { name: "WordPress", icon: "fab fa-wordpress" },
            { name: "Headless CMS", icon: "fas fa-database" },
            { name: "Shopify", icon: "fab fa-shopify" },
            { name: "WooCommerce", icon: "fab fa-wordpress-simple" }
          ],
        },
        {
          title: "Cloud & DevOps",
          icon: "fas fa-cloud",
          items: [
            { name: "AWS", icon: "fab fa-aws" },
            { name: "Azure", icon: "fab fa-microsoft" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "CI/CD pipelines", icon: "fas fa-infinity" }
          ],
        },
      ],
    },
    whyChoose: {
      heading: "Why Choose AstraCognix as Your Web Development Company",
      description:
        "We don’t just ship pages—we build web experiences that tell your story clearly and turn visitors into customers. You get a partner who cares about strategy, execution, and ongoing results.",
      items: [
        {
          title: "Business‑Aligned Strategy",
          detail:
            "Every layout, component, and integration is mapped back to your objectives—brand presence, inbound leads, or direct sales—so the site supports real growth.",
          image:
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Modern Design & UX",
          detail:
            "We combine clean, modern visuals with accessible, mobile‑first UX so your site feels trustworthy and effortless to use for every visitor.",
          image:
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Performance & SEO Conscious",
          detail:
            "From code splitting and image optimization to metadata and structured data, we build with performance and search visibility baked in—not as an afterthought.",
          image:
            "https://images.unsplash.com/photo-1519222970733-f546218fa6d1?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Transparent Delivery & Support",
          detail:
            "Regular check‑ins, clear roadmaps, and post‑launch support mean you always know what’s happening and have a team to call when you need changes.",
          image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    faq: [
      {
        q: "What types of websites do you build?",
        a: "We build corporate websites, product and service pages, blogs, landing pages, portals, and more complex web applications. The stack and architecture are selected based on your goals, content needs, and integration requirements.",
      },
      {
        q: "How long does it take to develop a website?",
        a: "Simple marketing sites and landing pages can be launched in a few weeks, whereas larger, multi‑page or custom‑integrated sites may take several weeks to a few months. We share a clear timeline after discovery.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. We can audit your current site for UX, performance, and SEO, then redesign it with modern layouts, cleaner code, and better conversion paths while preserving or improving your existing content structure.",
      },
      {
        q: "Will my website be mobile‑friendly and SEO‑ready?",
        a: "Yes. Responsive design, fast loading, semantic HTML, and basic on‑page SEO best practices are part of every project. We can also collaborate with your marketing team to go deeper on SEO and analytics.",
      },
      {
        q: "Do you offer ongoing support and maintenance?",
        a: "We provide support and maintenance plans that cover updates, security checks, minor enhancements, and performance monitoring so your website remains secure, stable, and aligned with your business.",
      },
    ],
  },



//   System Integration Solutions ......................................


  
  "system-integration": {
    title: "System Integration Solutions",
    summary:
      "Tested and trusted for over a decade, software integration services. Connect your infrastructure, data processes, improve operational efficiency, data accuracy, and decision-making to thrive in dynamic market conditions.",
    // image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "Integration strategy and interface contracts",
      "API gateway, rate limits, auth, and monitoring",
      "Event-driven pipelines and ETL/ELT for data domains",
      "Resilience patterns: retries, DLQs, idempotency, tracing",
    ],
    highlight:
      "Streamline your organizational workflows by seamlessly combining disparate technology systems and applications. Our software integration services will enhance data consistency, facilitate real-time data access, and improve operational efficiency. Ultimately, we're equipped to handle complex IT environments more effectively, ensuring agility and competitive advantage in the digital landscape.",
    featureCards: [
      { title: "Appliction Programming Interfaces", detail: "Enable your business to integrate, share data, and extend functionality while enhancing operational efficiency. With API services we will design, develop, and manage APIs to facilitate seamless interactions. Enable innovation by leveraging our resources in diverse technological environments.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" },
      { title: "Design & Development", detail: "Get personalized solutions that streamline and unify disparate IT systems. Our services ensure seamless data flow, improved process efficiency, and enhanced information accessibility across various platforms. We aim to boost your business productivity and support strategic business goals.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
      { title: "Email Marketing and CRM", detail: "Seamlessly connect your CRM tools with email marketing platforms. Nurture your leads, automate personalized communication, and enable detailed tracking of customer interactions. Witness significant improvement in service effectiveness and overall customer engagement..", image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80" },
      { title: "Accounting Integration", detail: "Streamline your accounting processes with our accounting integration services. Integrate your accounting software with other business systems including ERP, CRM, and e-commerce platforms. Automate data entry, reduce errors, ensure real-time financial reporting, and enhance compliance. Get a holistic view of financial health and improve decision-making across the organization..", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
    ],
    integrationExamples: {
      heading: "Benefits of System Integration Services",
      examples: [
        {
          title: "Less Development Investment",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Data Protection",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Maximize Business Value",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Guaranteed Uptime",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Quality Control",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Cost Reduction",
          image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    challenges: {
      heading: "Challenges in System Integration",
      items: [
        {
          title: "Dealing with incompatible platforms and interfaces",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Complexity of existing systems",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Compatibility issues between different technologies",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Security risks and data protection",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Downtime management during integration",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Data migration and synchronization challenges",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    services: {
      heading: "System Integration Services",
      items: [
        {
          title: "Data Integration",
          detail: "Seamlessly connect and synchronize data across multiple systems, ensuring consistency and real-time updates.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Business-to-Business Integration",
          detail: "Enable seamless communication and data exchange between your business and partners, suppliers, and customers.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Legacy System Integration",
          detail: "Modernize your infrastructure by integrating legacy systems with modern applications and cloud services.",
          image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Enterprise Application Integration",
          detail: "Connect enterprise applications to create a unified ecosystem that improves workflow and productivity.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "API Integration",
          detail: "Design and implement robust API integrations that enable secure and efficient data exchange.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Cloud Integration",
          detail: "Integrate on-premise systems with cloud-based applications and services for hybrid infrastructure.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    process: {
      heading: "Our Integration Process",
      steps: [
        {
          title: "Assessment & Planning",
          detail: "Comprehensive analysis of your existing systems, requirements, and integration goals.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Solution Design",
          detail: "Custom integration architecture tailored to your business needs and technical environment.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Development & Implementation",
          detail: "Secure and efficient integration development with minimal disruption to your operations.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Testing & Quality Assurance",
          detail: "Rigorous testing to ensure data accuracy, system reliability, and performance optimization.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Deployment & Monitoring",
          detail: "Smooth deployment with continuous monitoring and support for seamless operations.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Maintenance & Optimization",
          detail: "Ongoing support, updates, and optimization to keep your integrated systems running efficiently.",
          image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    robustIntegration: {
      heading: "Robust Integration Solutions",
      description: "Enterprise-grade integration solutions designed to seamlessly connect your systems, applications, and data sources. Our robust integration services ensure reliable, scalable, and secure connectivity across your entire technology ecosystem. We build resilient integration architectures with comprehensive error handling, automated retry mechanisms, monitoring and alerting, security best practices, and resilience patterns like circuit breakers and dead-letter queues to ensure reliable operations under all conditions. This enables real-time data flow, enhanced operational efficiency, and ensures your critical business processes remain uninterrupted while enabling seamless data exchange across platforms.",
      image: "/SYSTEM I S.png",
      features: [
        {
          title: "Enterprise API Management",
          detail: "Design, develop, and manage robust APIs with comprehensive security, rate limiting, versioning, and monitoring."
        },
        {
          title: "Real-Time Data Synchronization",
          detail: "Achieve real-time data consistency across multiple systems with event-driven architectures and intelligent synchronization mechanisms."
        },
        {
          title: "Resilient Architecture",
          detail: "Build fault-tolerant integrations with automated retry mechanisms, dead-letter queues, circuit breakers, and comprehensive error handling."
        },
        {
          title: "Security & Compliance",
          detail: "Implement authentication, authorization, encryption, audit logging, and compliance controls to protect sensitive data."
        }
      ]
    },
    faq: [
      { 
        q: "What is a system integration service?", 
        a: "The process of system integration is connecting different systems and components to ensure seamless functionality. There are multiple integration services including data integration, business-to-business integration, legacy system integration, and enterprise application integration. Join hands with AstraCognix, a system integration company, and learn more." 
      },
      { 
        q: "What are some common examples of system integration?", 
        a: "In the ever-evolving digital landscape, there are several examples of integration including CRM & ERP Integration, Ecommerce & Inventory Management, HR Management & Payroll System, Marketing Integration, Healthcare System Integration, and IoT Device Integration." 
      },
      { 
        q: "What are the challenges faced in system integration?", 
        a: "Dealing with incompatible platforms and interfaces is one of the common challenges faced in system integration. The complexity of existing systems, compatibility issues, security risks, downtime management, and others can cause issues in the process of system integration." 
      },
      { 
        q: "What kinds of systems can you integrate?", 
        a: "CRM/ERP, finance, marketing, support desks, data warehouses, IoT, and custom line-of-business apps via APIs, events, and secure connectors." 
      },
      { 
        q: "How do you ensure resilience?", 
        a: "We design with idempotency, dead-letter queues, retries, back-pressure, and monitoring to keep data flowing reliably." 
      },
      { 
        q: "Do you handle modernization?", 
        a: "Yes—API-first facades for legacy, phased migrations, and playbooks for zero/minimal downtime cutovers." 
      },
    ],
  },





//   Software Consulting Solutions ......................................



  "software-consulting": {
    title: "Software Consulting Solutions",
    summary:
      "Collaborate with one of the leading software consulting companies. Here we bridge the gap between your business needs and the latest technological innovations. Our personalized software consulting services propel businesses into the future with smarter solutions, strategic planning, and seamless implementation.",
    // image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "Architecture reviews, PoCs, and modernization plans",
      "Team enablement on SDLC, testing, and DevSecOps",
      "Cloud, cost, and performance optimization playbooks",
      "Observability, SLOs, and incident-response readiness",
    ],
    highlight: "Leverage software consulting services to help your business reach its full potential. We're a leading software development consulting company offering strategic planning, technology selection, system design, and full lifecycle management. Leverage our full suite of services to upgrade efficiency, reduce risk, and drive growth.",
    consultingServices: {
      heading: "Software Consulting Services",
      services: [
        {
          title: "Software Product Consulting",
          detail: "Our professionals will be one call away throughout the process of product development. Elevate your product's impact with our guidance ensuring your product meets customer demands and excels in competitive environments. We will help you assess market needs, identify opportunities, and craft a personalized plan to bring your product to the market.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Technology Portfolio Consulting",
          detail: "Explore the pain points of your existing deliveries and optimize your technology investments. Learn about the improvement areas with a detailed software portfolio analysis of your business system. Join hands with one of the prominent software consulting companies and get cost-effective solutions with future-proof strategies.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Software Modernization",
          detail: "Get robust modernization solutions with our software consulting services. From project scope detailing to performance engineering, our team is available right at your fingertips. Our developers will assess the details of your existing software system, craft a plan, and execute it seamlessly. Leverage re-platforming and comprehensive upgrades with reduced operational costs.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Application Development Consulting",
          detail: "Craft optimal app development strategies, and customized features, and ensure smooth operations. Ensure a competitive edge for the maximum return on your investments. With modern architecture and efficient project management, our experts will ensure your app is robust, scalable, and user-centric.",
          image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Custom App Development Consulting",
          detail: "Transform your dream business idea into reality. Harness the power of bespoke custom app solutions, and integrate unique insights, and advanced tech trends to create custom applications. Boost efficiency, captivate users, and achieve unparalleled results with our innovative, tailor-made strategies.",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Digital Transformation",
          detail: "From AI and IoT to cloud solutions, our holistic approach aims to elevate the process of digital transformation services. We specialize in architecting bespoke digital strategies that fuse AI, IoT, blockchain, and cloud technologies to revolutionize your business operations. Join hands with us today and thrive in a rapidly evolving digital landscape.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "MVP Consultation",
          detail: "Our strategic approach focuses on essential features, rapid prototyping, and market feedback integration. From startups to established enterprises, our software development consulting services help design, refine, and launch minimal viable products that resonate with your business niche and market needs.",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Software Launch Consulting",
          detail: "Ensure a triumphant market entry with our software consulting services. Get guidance in strategic planning, market analysis, and user engagement to maximize your product's impact. We're one of the industry-known software consulting companies that will refine your go-to-market strategy, ensuring robust readiness from beta testing to full launch.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        },
      ]
    },
    beneficialSolutions: {
      heading: "Highly Beneficial Solutions",
      description: "Integrate the best value response to your software solutions. Plan and implement tech solutions and improve your ROI with time-tested software development consulting services. Our team will provide highly beneficial solutions that empower your business and brand image. We have an approach deeply rooted in understanding specific industry challenges. Join hands with us and redefine your business trajectory.",
      image: "/SCS.png",
      solutions: [
        "Forward Thinking Ideas",
        "Legacy Modernization",
        "Resilient Systems",
        "Integrated Automation",
        "Gen AI Powered Capabilities",
        "Expanding Revenue Streams",
        "Cross-Functional Resource Pool",
        "Quality Assurance"
      ]
    },
    benefits: {
      heading: "Benefits from Our Software Consulting Services",
      description: "Being an award-winning software development company we ensure all our services rank above industry standards. Specializing in AI, IoT, and Blockchain, we ensure a 95% customer success rate. Here are a few quick facts about our software consulting services.",
      items: [
        {
          title: "Talented Techies",
          detail: "Our team consists of highly skilled professionals with deep expertise in cutting-edge technologies.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Time Zone Aligned",
          detail: "We work across time zones to ensure seamless collaboration and round-the-clock support for your projects.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Dedicated Project Managers",
          detail: "Every project gets a dedicated project manager to ensure smooth communication and timely delivery.",
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Standard Security Protocols",
          detail: "We implement industry-standard security protocols to protect your data and ensure compliance.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Deep Industry Expertise",
          detail: "Our consultants bring years of experience across various industries to provide tailored solutions.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Managed Strategic IT Planning",
          detail: "We help you create comprehensive IT strategies that align with your business goals and objectives.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    consultingProcess: {
      heading: "Innovate With Confidence With Our 3-Step Consulting Process",
      description: "Embark on a transformative software development journey with our unique software development consulting services. Our skillful consultants will fuse strategic insights with agile methodologies to create bespoke solutions that elevate your operations and deliver measurable results. Experience innovation and exceed expectations.",
      steps: [
        {
          title: "Strategic Discussion",
          detail: "Share your business goals, challenges, and technological landscape. Our experts will work diligently to align with your business drivers and lay out a market plan to get the most out of your investment.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Quick Implementation",
          detail: "With strategy building, our experts will accelerate the development process. We leverage the industry's best tools and practices to accelerate the process of consulting and commence with development.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Smart Improvements",
          detail: "Right after the implementation of the strategy comes the crucial changes in the developed solutions. Here, our experts will introduce the best operational practices to review and improve the existing processes.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    commitment: {
      heading: "Commitment to Deliver Cutting-edge Solutions",
      description: "As a leading software consulting services provider our team will support your business at every stage of product development. From streamlining everyday business processes to implementing innovative solutions, we will handle every challenge in the process.",
      features: [
        {
          title: "Solutions That Scale",
          detail: "Our team works on the industry's best solutions and identifies all the gaps to align a risk architecture and roadmap. Collaborate with us and implement effective consulting solutions."
        },
        {
          title: "Industry Standard Compliance",
          detail: "Our team matches your operations, security, and solutions by proactively meeting all industry compliance mitigating risks."
        },
        {
          title: "Superior Industry Knowledge",
          detail: "Join hands with our extraordinary team and effectively translate your business requirements. We offer top-notch consulting services across multiple industries."
        },
        {
          title: "Competitive Advantage",
          detail: "Stay abreast with the latest technological advancements. We aim to help businesses get a competitive edge in their leading industry."
        }
      ]
    },
    faq: [
      {
        q: "What are the benefits of collaborating with a software consulting company?",
        a: "Collaborating with a software consulting services provider offers several strategic benefits. Join hands with AstraCognix and significantly enhance the efficiency, innovation, and competitiveness of your business. Here are the key advantages of collaborating with a software consulting company: Cost efficiency, Risk management, Personalized solutions, Minimized downtime, Enhanced security."
      },
      {
        q: "How much do software consulting services cost?",
        a: "Depending on your location and project complexity, the cost of software consulting services will vary from $100 - $1000 and more per day."
      },
      {
        q: "Will you provide post-release support and maintenance services?",
        a: "Absolutely. At AstraCognix we provide post-release support and maintenance. Including bug fixing, framework upgrades, continuous monitoring, and monitoring other technical glitches."
      },
      {
        q: "What types of software consulting services do you offer?",
        a: "We offer a comprehensive range of software consulting services including Software Product Consulting, Technology Portfolio Consulting, Software Modernization, Application Development Consulting, Custom App Development Consulting, Digital Transformation, MVP Consultation, and Software Launch Consulting."
      },
      {
        q: "How do you ensure the success of software consulting projects?",
        a: "We follow a proven 3-step consulting process: Strategic Discussion to understand your needs, Quick Implementation using industry best practices, and Smart Improvements through continuous review and optimization. Our team of talented techies, dedicated project managers, and deep industry expertise ensures project success."
      }
    ],
  },








// Fleet Management Solutions





  "fleet-management": {
    title: "Fleet Management Solutions",
    summary:
      "Fleet management solutions to help fleet managers automate the operations and enhance overall work performance. Our developers utilize the latest technology to build advanced solutions with reduced operational costs, allowing users greater control over their fleet.",
    // image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "Live tracking, geofencing, and ETA calculations",
      "Route optimization with constraints and alerts",
      "Driver apps with offline support and proof-of-delivery",
      "Dashboards for utilization, SLA adherence, and fuel/costs",
    ],
    highlight: "With over a decade of experience in developing remarkable software solutions. We provide comprehensive fleet management services tailored to serve your business needs. Get innovatively crafted solutions that'll help you streamline processes, enhance efficiency, and move your business forward.",
    services: {
      heading: "Fleet Management Services",
      items: [
        {
          title: "Technology Consulting",
          detail: "Get suggestions on a vast range of tools and technology. Advanced training, consultancy, digital transformation, and fleet automation have covered it all.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Fleet Maintenance Software",
          detail: "Our fleet management software will allow your maintenance team to record, monitor, store, and share equipment details.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Fleet Telematics Software Solutions",
          detail: "Fleet tracking, IoT sensors, or video telematics built with advanced technology get a comprehensive view of your entire fleet operations.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "GPS Fleet Tracking Software",
          detail: "The fleet management services can be used to maintain and extend the life of your fleet. The use of advanced IoT sensors helps collect real-time data and improve the management of fleets.",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Fleet Fuel Management Solutions",
          detail: "We offer fuel consumption control apps that will collect and monitor data of your fleet to help you manage fuel efficiency.",
          image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Fleet Asset Management Systems",
          detail: "Get a 360-degree view of your fleet's assets including machinery, tools, or personnel to maximize the profits and life of the assets.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    featureCards: [
      { 
        title: "Acquisition and Disposal", 
        detail: "Fleet management software plays a vital role in the acquisition and disposal of vehicles. No matter what your vehicle requirements are, fleet management systems offer economic funding options, supply chain monitoring, and easy scalability.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Maintenance Management", 
        detail: "Maintenance management in the fleet involves all aspects of vehicle upkeep to ensure your fleets are good for use and are in the best operating condition. Regular maintenance ensures the vehicles are safe, reliable, and cost-effective to operate.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Accident Management", 
        detail: "Instant notifications, help at every step, easy to access accident data, handle fleet vehicle claims, repairs, and more. Fleet accident management features adhere to several safety regulations and minimize the occurrence of accidents.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Account Management", 
        detail: "For strategic account managers fleet account management is an additional service that offers data transparency and detailed monthly reports on components including driver ID usage, fuel consumption, driver behavior, and other bespoke analyses.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
      },
    ],
    benefits: {
      heading: "Benefits of Using Fleet Management",
      description: "Fleet management systems are a fast-growing trend in companies of every size. It helps in maximizing efficiency while simultaneously reducing expenses. Fleet management solutions deliver actionable intelligence to solve complex vehicle-related problems.",
      items: [
        {
          title: "Remote Access",
          detail: "Manage the daily operations for fleets of any size or component. Fleet management software provides a platform to view every aspect remotely. Remote access allows fleet owners to access real-time data through online portals while keeping track of the maintenance status.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Safety",
          detail: "In-vehicle monitoring and reporting systems will boost safety, track, and monitor behavior. It will alter drivers to reduce tailgating and minimize idle time. This enhances asset projection and reduces the risk of vehicle loss.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Fuel Economy",
          detail: "At its core fuel economy oversight will track and analyze the fuel usage of a fleet of vehicles. The fleet management app will offer streamlined fuel data collection to reduce unnecessary consumption and improve efficiency.",
          image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Maintenance",
          detail: "Gather data on vehicle and driver's performance. The fleet management app includes monitoring devices that transmit timely maintenance reminders and schedule preventive maintenance.",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Data Reporting",
          detail: "Gather data across your fleet and process it within a reporting tool. Reporting tools allow estimating the most critical metrics and KPIs helping your business efficiency and customer satisfaction.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "GPS Tracking",
          detail: "GPS, IoT sensors, and other telematics transmit information in real time on driving hours, miles, locations, stoppage, engine conditions, and others. Fleet management systems provide all the vital features for your business.",
          image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    commitment: {
      heading: "Result-Oriented Fleet Management Company",
      description: "With over a decade of experience, we're the fastest-growing web and app development company. Collaborate with us, a leading fleet management company, you can rest assured that you are getting a fleet management app that will serve your business niche and needs.",
      image: "/FLEAT.png",
      features: [
        {
          title: "Customized Solutions",
          detail: "Tailored fleet management solutions designed to meet your specific business requirements and operational needs."
        },
        {
          title: "Performance Metrics",
          detail: "Comprehensive analytics and reporting tools to track and optimize fleet performance, utilization, and efficiency."
        },
        {
          title: "Environmental Sustainability",
          detail: "Eco-friendly solutions that help reduce carbon footprint and promote sustainable fleet operations."
        },
        {
          title: "Advanced Tools",
          detail: "Cutting-edge technology stack including IoT sensors, GPS tracking, and AI-powered analytics for superior fleet management."
        },
        {
          title: "Training and Safety",
          detail: "Comprehensive training programs and safety features to ensure driver compliance and reduce accidents."
        },
        {
          title: "Reduced Cost",
          detail: "Optimize operations and reduce expenses through intelligent route planning, fuel management, and preventive maintenance."
        },
        {
          title: "Proactive Communication",
          detail: "Real-time alerts, notifications, and communication tools to keep all stakeholders informed and connected."
        },
        {
          title: "Scalability",
          detail: "Scalable solutions that grow with your business, from small fleets to enterprise-level operations."
        }
      ]
    },
    whyWorkWith: {
      heading: "Why Work With AstraCognix Solutions",
      description: "In addition to overseeing the movements and activities of a fleet, fleet managers need to look at the bigger picture to keep their business running smoothly and profitability. Being a prominent fleet management company, we aim to craft a well-rounded fleet management system that will help businesses execute their actions efficiently, on time, and within budget.",
      items: [
        {
          title: "Full Stack Expertise",
          detail: "Leverage our software development expertise to keep your logistic business abreast of the fleet's performance while utilizing modern IoT technologies.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Dedicated Team",
          detail: "We have been fleet management experts for over a decade now. Our team makes efficient use of resources to reduce admin work and eliminate fleet handling hassle.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Quality Delivery",
          detail: "Our ultimate goal is to create high-quality software to deliver projects that satisfy customers' needs and guarantee growth for your business.",
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Efficient Communication",
          detail: "Get round-the-clock support and get your queries answered anytime you need. Our team maintains efficient and prompt communication to ensure full transparency.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    industries: {
      heading: "Industries We've Served",
      items: [
        {
          name: "Healthcare",
          icon: "fa-solid fa-heart-pulse",
          // image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Finance",
          icon: "fa-solid fa-coins",
          // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "eCommerce",
          icon: "fa-solid fa-cart-shopping",
          // image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Education",
          icon: "fa-solid fa-graduation-cap",
          // image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Logistics",
          icon: "fa-solid fa-truck-fast",
          // image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Social Networking",
          icon: "fa-brands fa-facebook",
          // image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Games",
          icon: "fa-solid fa-gamepad",
          // image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Travel",
          icon: "fa-solid fa-plane",
          // image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Entertainment",
          icon: "fa-solid fa-film",
          // image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Real estate",
          icon: "fa-solid fa-building",
          // image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "SaaS",
          icon: "fa-solid fa-cloud",
          // image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "News",
          icon: "fa-solid fa-newspaper",
          // image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Wellness",
          icon: "fa-solid fa-spa",
          // image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Aviation",
          icon: "fa-solid fa-helicopter",
          // image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=400&q=80"
        },
       
        {
          name: "Politics",
          icon: "fa-solid fa-landmark",
          // image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Agriculture",
          icon: "fa-solid fa-tractor",
          // image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Events",
          icon: "fa-solid fa-calendar-days",
          // image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "EV",
          icon: "fa-solid fa-charging-station",
          // image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d3a?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Food",
          icon: "fa-solid fa-utensils",
          // image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Manufacturing",
          icon: "fa-solid fa-industry",
          // image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Media",
          icon: "fa-solid fa-broadcast-tower",
          // image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
        },
        {
          name: "Retail",
          icon: "fa-solid fa-store",
          // image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    faq: [
      {
        q: "What is fleet management software?",
        a: "Fleet management systems is a cloud platform that uses GPS technology to track, and provide real-time updates to fleet owners. It makes it easier for fleet managers to collect information relating to vehicle and driver behavior."
      },
      {
        q: "How much does fleet management software development cost?",
        a: "Considering the several development factors fleet management can cost from $7,000 - $30,000+"
      },
      {
        q: "What are the technologies used in fleet management software development?",
        a: "Integrated solutions used in fleet management services often include hardware, software, telematics, IoT, AI/ML, augmented reality, fuel management systems, and more."
      },
      {
        q: "What are the key features of fleet management software?",
        a: "Key features include GPS tracking, route optimization, maintenance scheduling, fuel management, driver behavior monitoring, real-time alerts, geofencing, ETA calculations, and comprehensive reporting dashboards."
      },
      {
        q: "How does fleet management software improve operational efficiency?",
        a: "Fleet management software improves operational efficiency by providing real-time visibility, optimizing routes, reducing fuel consumption, scheduling preventive maintenance, monitoring driver behavior, and generating actionable insights through analytics and reporting."
      }
    ],
  },



// Custom CRM Development

  "custom-crm-development": {
    title: "Custom CRM Development",
    summary:
      "Leverage our custom CRM services to manage your client relationships effectively. From seamless communication to efficient data management enhance your every bit of interaction. Achieve consistent growth and sweat-free scalability with a CRM development company.",
    // image: "/CRM.png",
    bullets: [
      "Workflow automation and process optimization",
      "Document management and task management systems",
      "Marketing automation and sales data centralization",
      "Analytics, reporting, and account & case management",
    ],
    highlight: "Get tailored solutions that align with your unique business processes and goals. From individual to enterprise-level businesses we build custom software solutions to scale your services as your business grows.",
    mattersImage: "/CRM.png",
    featureCards: [
      { title: "Workflow Automation", detail: "Streamline business processes with automated workflows that reduce manual tasks and improve efficiency." },
      { title: "Document Management", detail: "Centralized document storage and management system for easy access and collaboration." },
      { title: "Task Management", detail: "Organize and track tasks with intelligent task management features." },
      { title: "Marketing Automation", detail: "Automate marketing campaigns and nurture leads through the sales funnel." },
      { title: "Analytics and Reporting", detail: "Advanced analytics and reporting tools to gain actionable insights from customer data." },
      { title: "Sales Data Centralization", detail: "Centralize all sales data in one place for better visibility and decision-making." },
      { title: "Account & Case Management", detail: "Comprehensive account and case management for better customer service." },
      { title: "Feature-Packed Tech Suite", detail: "Complete suite of CRM features designed to meet all your business needs." },
    ],
    services: {
      heading: "Custom CRM Development Services",
      items: [
        {
          title: "Custom CRM Software Development",
          detail: "Get tailored solutions that align with your unique business processes and goals. From individual to enterprise-level businesses we build custom software solutions to scale your services as your business grows. Make the most of your client data, improve retention, and promote internal communication - all within a single interface.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "CRM Customization",
          detail: "We offer CRM customization services tailored to fit specific business needs and enhance functionality and user experience. Our services will help you modify existing features, integrate third-party applications, and add unique functionalities to streamline workflows. Get ensured CRM solutions fully align with your organizational processes and strategic objectives.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Mobile CRM App Development",
          detail: "Enhanced productivity, improved customer services, data accuracy, and increased sales opportunities. Get quick access to dashboards and analytics, calendar management, email management, and regular account updates. Our adept developers offer ideal services to empower the mobile workforce.",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "CRM Integration",
          detail: "We offer CRM integration services to help you streamline business processes. Seamlessly connect your CRM system with other critical business applications including ERP, marketing automation, email platforms, and customer support tools. CRM integration services enhance data synchronization, improve workflow automation, and provide a unified view of customer interactions.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "CRM Design",
          detail: "Focus on creating a user-centric and efficient CRM system tailored to your specific business needs. CRM design services involve strategic planning, interface design, and feature customization. Enhance your user experience, streamline operations, and ensure effective management.",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    benefits: {
      heading: "Benefits of Custom CRM Development Services",
      description: "Experience heightened lead conversion, improved customer loyalty, and optimized workflow automation. Gain strategic insights from advanced analytics, facilitate smarter business decisions that enhance your competitive edge, and drive sustainable growth.",
      items: [
        {
          title: "Perfect Tech Fit",
          detail: "Attain harmony between your clientele and business processes with a personalized CRM system. With over a decade of experience under our belt, we build a system that fits like a glove. Get frictionless workflow and enhance efficiency tailored to your specific needs.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Broad Integrations",
          detail: "Seamlessly connect and blend your industry ecosystem with broad integrations. Leverage tailored CRM development and enable the integration of diverse tools and platforms creating a unified environment for your clients.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Data-Driven Decision Making",
          detail: "Harness the power of data with our custom-built CRM software. Our adept developers will collect actionable insights to dig deep into customer behavior, sales trends, and operational efficiency.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Access Control",
          detail: "Ensure the data and security of your business. With the custom CRM development services, we offer robust access control features that will allow users to define and manage user permissions while protecting sensitive information.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    commitment: {
      heading: "Trust AstraCognix for Outstanding CRM Solutions",
      description: "With over 15 years of experience we develop the best in class CRM solutions. We have curated a team of adept developers who will craft systems tailored to your specific needs, enhancing customer relationships and driving sales efficiency. With robust analytics, seamless integration, and user-friendly designs, count on us and empower your business while delivering exceptional customer service.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
      features: [
        {
          title: "Reliability",
          detail: "Being a leading custom CRM development company, we offer specialized CRM development solutions. Confidently scale and rely on our services and the efficiency of your business operations."
        },
        {
          title: "Advanced Technology",
          detail: "Given the rapid advancement of technologies, it's important to keep up the pace and elevate your business. Our team leverages top-notch technologies to offer solid custom CRM development services."
        },
        {
          title: "Better Client Interactions",
          detail: "Cater to your precise client needs with the help of our CRM system development services. We offer intuitive CRM solutions with 360-degree customer behavior insights."
        },
        {
          title: "Real-Time Analytics",
          detail: "We're a custom CRM development company with real-time dashboards that reflect the latest data to clients. Get comprehensive insights and make data-driven decisions."
        }
      ]
    },
    faq: [
      {
        q: "How long will it take to develop a custom CRM?",
        a: "Depending on the various factors in the project development it can take from 2 months to 10+ months to develop a custom CRM. The more complex your project is, the longer it will take to develop."
      },
      {
        q: "Will I be able to upgrade my CRM as my business grows?",
        a: "Absolutely. CRM development solutions are easily scalable without hassle or extra charges. CRM software development companies allow users to easily scale up or down their CRM depending on their business growth."
      },
      {
        q: "How will custom CRM help me improve my relations with clients?",
        a: "Effective CRM solutions enable businesses to better understand their clientele and anticipate their needs and requirements. Tracking leads, anticipating user needs, and managing interactions boost your overall business brand name and build a loyal relationship with clients."
      },
      {
        q: "What features are included in custom CRM development?",
        a: "Custom CRM development includes features like workflow automation, document management, task management, marketing automation, analytics and reporting, sales data centralization, account & case management, and a feature-packed tech suite tailored to your business needs."
      },
      {
        q: "Can you integrate CRM with existing business applications?",
        a: "Yes, we offer comprehensive CRM integration services. We can seamlessly connect your CRM system with ERP systems, marketing automation tools, email platforms, customer support tools, and other critical business applications to create a unified ecosystem."
      }
    ],
  },




// Custom Software Development

  "custom-software-development": {
    title: "Custom Software Development",
    summary:
      "Build software tailored to your unique business processes instead of forcing your work to fit off‑the‑shelf tools. We design, develop, and maintain robust, scalable applications that streamline operations and accelerate growth.",
    bullets: [
      "End‑to‑end product engineering from idea to launch",
      "Modern, secure and scalable architectures",
      "User‑centric UI/UX focused on business outcomes",
      "Ongoing support, maintenance, and enhancements",
    ],
    highlight:
      "From discovery workshops to post‑launch optimization, we partner with you to deliver software that maps exactly to your workflows and helps you outpace competitors. As a custom software development company, we offer feature-rich and immersive solutions.",
    // image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    mattersImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    featureCards: [
      {
        title: "Product Strategy & Discovery",
        detail:
          "Clarify goals, users, and success metrics before we write a single line of code, so the final product fits your business perfectly.",
      },
      {
        title: "Architecture & Technology Stack",
        detail:
          "We choose the right technologies and design a clean, modular architecture that is easy to extend and maintain.",
      },
      {
        title: "Agile Delivery",
        detail:
          "Incremental releases, frequent demos, and tight feedback loops ensure you see value early and often.",
      },
      {
        title: "Quality & Security",
        detail:
          "Automated testing, code reviews, and security best practices are built into every stage of development.",
      },
    ],
    explainer: {
      heading: "What is custom software development? What are custom applications?",
      body:
        "Custom software development is the designing of applications for users in an organization or individual to fulfill client needs. Custom apps are developed specifically for a particular organization. Our team will build the apps from scratch using programming languages including - Java, C#, Python, React, Angular, and many others. Custom software development comes with several benefits and advantages -",
      benefits: [
        "Cost-effectiveness",
        "Efficiency",
        "Ease of customization",
        "Integrations",
        "Minimal security risks",
        "Scalability"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    },
    techArchitecture: {
      heading: "How do you choose the right tech architecture?",
      body:
        "There's no straightforward answer to this question. And like many other software development scenarios, it depends. Our team starts with the very basics. We picture our project as a set of different modules, each module varying according to different functions and complexity. Therefore, each project will have a few differences in architecture that best suit it.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    },
    techStack: {
      heading: "List of tech stack that will be used in custom software development?",
      body:
        "At AstraCognix, a custom software development company we are technology praisers and strongly believe that each technology has its own pros and cons. Considering this, we work on a range of technologies, frameworks, and programming languages.",
      technologies: [
        "Node.js",
        ".Net Core",
        "PHP",
        "Java",
        "Javascript",
        "Angular",
        "React",
        "Android",
        "Flutter",
        "Laravel",
        "React Native",
        "SQL",
        "Oracle",
        "Firebase",
        "SQL Server",
        "WordPress",
        "Magento",
        "and many others"
      ],
      images: [
        "/Custom Stack 1.png",
        "/Custom stack.png"
      ],
      
    },
    services: {
      heading: "Custom Software Development Services",
      items: [
        {
          title: "CRM & ERP Service Solutions",
          detail:
            "Design and implement custom CRM and ERP systems that centralize customer, finance, and operations data for smarter, faster decisions.",
          image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Fleet Management Solutions",
          detail:
            "End‑to‑end fleet management platforms with vehicle tracking, route optimization, maintenance scheduling, and powerful reporting dashboards.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "System Integration Solutions",
          detail:
            "Connect your existing tools and databases with secure APIs and middleware so data flows smoothly between all your business systems.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Custom CRM Development",
          detail:
            "Tailor‑made CRM applications that match your sales, support, and marketing workflows while giving you a 360° view of every customer.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Software Consulting Solutions",
          detail:
            "Strategic consulting to define the right architecture, tech stack, and roadmap for your custom software initiatives.",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Real‑time Tracking Services",
          detail:
            "Real‑time tracking and monitoring software for assets, deliveries, or field teams, built with GPS, IoT, and intuitive web dashboards.",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    benefits: {
      heading: "Benefits of Custom Software Development",
      description: "Custom software development offers numerous advantages that can transform your business operations, improve efficiency, and drive growth. Here are the key benefits of choosing custom software solutions for your organization.",
      items: [
        {
          title: "Cost-effectiveness",
          detail: "While the initial investment may be higher, custom software eliminates recurring licensing fees and subscription costs. Over time, it proves more cost-effective than off-the-shelf solutions, especially for businesses with specific needs that require expensive customizations.",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Efficiency",
          detail: "Custom software is designed specifically for your workflows and processes, eliminating unnecessary features and focusing on what matters most to your business. This results in streamlined operations and improved productivity.",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Ease of customization",
          detail: "Unlike generic software, custom solutions can be easily modified and extended as your business evolves. You have complete control over features, functionality, and future enhancements without being limited by vendor constraints.",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Integrations",
          detail: "Custom software can be seamlessly integrated with your existing systems, databases, and third-party applications. This creates a unified ecosystem where data flows smoothly between all your business tools.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Minimal security risks",
          detail: "Custom software development allows you to implement security measures tailored to your specific requirements. With dedicated security protocols and regular updates, you can significantly reduce vulnerabilities compared to widely-used commercial software.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Scalability",
          detail: "Custom software is built with your growth in mind. It can be designed to scale seamlessly as your business expands, accommodating increased users, data volume, and functionality without major overhauls.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    faq: [
      {
        q: "What is custom software development?",
        a: "Custom software development is the process of designing and building software specifically for your business needs instead of using generic, off‑the‑shelf products. Custom apps are developed specifically for a particular organization using programming languages like Java, C#, Python, React, Angular, and many others.",
      },
      {
        q: "How long does a project take?",
        a: "Smaller solutions or MVPs can take a few weeks, while larger enterprise platforms may take several months depending on scope and complexity. The timeline depends on the project requirements, features, and the complexity of the architecture.",
      },
      {
        q: "Can you integrate with our existing systems?",
        a: "Yes, we can integrate with CRMs, ERPs, payment gateways, and other third‑party or internal systems using APIs and secure data flows. Our team specializes in creating seamless integrations that connect all your business tools.",
      },
      {
        q: "How do you choose the right tech architecture?",
        a: "Our team starts with the very basics, picturing the project as a set of different modules, each varying according to different functions and complexity. We analyze your requirements, scalability needs, and existing infrastructure to recommend the best architecture that suits your project.",
      },
      {
        q: "What technologies do you use?",
        a: "We work with a wide range of technologies including Node.js, .Net Core, PHP, Java, Javascript, Angular, React, Android, Flutter, Laravel, React Native, SQL, Oracle, Firebase, SQL Server, WordPress, Magento, and many others. We choose the best tech stack based on your project requirements.",
      },
    ],
  },

// Real-time Tracking Systems




  "real-time-tracking": {
    title: "Real-time Tracking Systems",
    summary:
      "Advance your digital transformation by leveraging our real-time tracking solutions. We work with precision and efficiency and utilize cutting-edge GPS and IoT technologies. Get location updates, optimal route management, enhanced security, and improved decision-making.",
    // image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
    bullets: [
      "Live location tracking with GPS and IoT technologies",
      "Proof of delivery with e-signature and photo capture",
      "Delivery management with instant notifications",
      "Fleet management with route optimization and maintenance scheduling",
    ],
    highlight: "Harness the power of our real-time tracking solutions to gain unparalleled visibility into your asset and operational activities. AstraCognix offers real-time locating systems suited to all industries. Employ state-of-the-art GPS and IoT solutions. Instant updates, superior route optimization, heightened security, and strategic decision support.",
    services: {
      heading: "Advantages of Real-time Tracking Solutions",
      items: [
        {
          title: "Live Location Tracking",
          detail: "Perfect for industries like logistics, transportation, and asset management. Our real-time tracking solutions allow users to share live locations with customers so they can see exactly where their delivery is. Elevate your tracking capabilities and drive efficiency with our next-generation live location tracking feature.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Proof of Delivery",
          detail: "Transform how you track and manage with our innovative features. Capture an e-signature and photo of the item at the time of delivery. The proof of delivery feature lets customers check such sensitive information in real time. Photo verification, data integration, or barcode scanning we offer robust solutions for businesses to ensure delivery accuracy and improved customer relations.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Delivery Management",
          detail: "Reduce your wasted resources and labor and ensure the full-proof delivery of the goods with our real-time tracking solutions. Gain full visibility into delivery through live tracking and instant notifications. Transform your logistics into precision work with our real-time locating system.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "GPS Tracking",
          detail: "The software is accessible anywhere, at any time, on any device. GPS tracking feature allows users to track the status of their vehicle and asset. Provide your customer with accurate ETAs and fix issues instantly. Access the live location data via our intuitive platform, ensuring you are always informed and in control.",
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Instant Alerts",
          detail: "Elevate your relationship with your clients with an instant alert feature. Share immediate notifications when you're en route and on critical events, enabling swift action. The instant alert feature will help you avoid potential issues with location updates, status changes, and unexpected delays, directly enhancing operational efficiency and security.",
          image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Fleet Management",
          detail: "Optimize your fleet operations, monitor vehicle locations, and analyze route efficiency. The fleet management feature allows users to manage maintenance schedules effectively. Increase operational uptime and reduce costs with our comprehensive tools. Drive your fleet to peak efficiency.",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    benefits: {
      heading: "Benefits of Time-tracking Solutions",
      description: "Whether you handle a local delivery service or a large national operation, get real-time tracking solutions to streamline your process, reduce costs, and improve customer satisfaction. Leverage multiple benefits including detailed analytics, optimized operations, and improved project delivery timelines with better time management across your organization.",
      items: [
        {
          title: "Swift & User-Friendly",
          detail: "Intuitive interface designed for ease of use, ensuring quick adoption and minimal training time for your team.",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Perfectly Configurable",
          detail: "Customize tracking parameters, alerts, and reporting to match your specific business requirements and workflows.",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Secure & Reliable",
          detail: "Enterprise-grade security with encrypted data transmission and reliable infrastructure ensuring 99.9% uptime.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Available Worldwide",
          detail: "Global coverage with multi-region support, ensuring consistent tracking performance regardless of location.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Instant Support",
          detail: "24/7 customer support with dedicated account managers to assist with any issues or questions you may have.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Route Optimization",
          detail: "Advanced algorithms that calculate the most efficient routes, reducing fuel costs and delivery times significantly.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Resource Optimization",
          detail: "Maximize your asset utilization with intelligent scheduling and resource allocation based on real-time data.",
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Forecasting & Planning",
          detail: "Predictive analytics and forecasting tools help you plan ahead and make data-driven decisions for future operations.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    featureRichSolutions: {
      heading: "Feature-rich Time Tracking Solutions",
      description: "Customizable timesheets, real-time tracking, mobile app accessibility, geofencing for location-based tracking, automatic reminders, and detailed reporting - get comprehensive real-time tracking solutions. Additionally, integrates seamlessly with project management tools, enabling streamlined workflow management and detailed insights for efficient resource allocation.",
      image: "/Real Time.png",
      features: [
        {
          title: "Optimize Fleet Performance",
          detail: "Monitor and improve fleet efficiency with real-time performance metrics and analytics."
        },
        {
          title: "Maintain Fleet Health",
          detail: "Proactive maintenance scheduling and health monitoring to prevent breakdowns and extend vehicle lifespan."
        },
        {
          title: "Boost Efficiency",
          detail: "Streamline operations with automated workflows and intelligent route planning to maximize productivity."
        },
        {
          title: "Improved Client Satisfaction",
          detail: "Enhanced transparency and communication lead to better customer experiences and higher satisfaction rates."
        },
        {
          title: "Track Vital Asset",
          detail: "Comprehensive asset tracking with real-time location updates and status monitoring for all critical assets."
        },
        {
          title: "Streamline Fleet Operations",
          detail: "Centralized management platform that integrates all fleet operations for seamless coordination and control."
        }
      ]
    },
    whyWorkWith: {
      heading: "Why Work with AstraCognix",
      description: "Choose the easy-to-implement and expertly guided real-time tracking solutions. Our modular features enhance organizations' capabilities and provide unrivaled flexibility. Design the real-time tracking system you need to streamline processes, reduce costs, and improve customer satisfaction.",
      items: [
        {
          title: "Save Hours on Time-tracking",
          detail: "Automate tedious tasks, record accurate work hours, and collect valuable insights effortlessly. Streamline your process and save countless hours with our efficient time-tracking services. Boost productivity every day.",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Capture Every Little Detail",
          detail: "Collect every aspect of your workday with precision with our meticulous time-tracking services. From project hours to breaks, our solution ensures no detail goes unnoticed, providing comprehensive insights for optimal productivity.",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Empower Your People",
          detail: "Intuitive time-tracking services with enhanced accountability and productivity. Foster a culture of transparency and efficiency. Transform the way you work with our real-time tracking software and achieve your goals with ease.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Improved Productivity",
          detail: "Unlock enhanced productivity, identify bottlenecks, and optimize workflows to achieve greater efficiency and output. Real-time locating system to elevate your performance and exceed your ROI effortlessly.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    faq: [
      {
        q: "What is a real-time tracking service?",
        a: "Real-time locating systems are used to track and identify the locations of objects and people in real time. The tracking software uses GPS and a logistic database to determine the current location at any point in time from anywhere. Offering transparent and satisfied customers join hands with AstraCognix unbeatable real-time tracking software solutions."
      },
      {
        q: "Will I be able to track my vehicle and assets in real time with your tracking features?",
        a: "Yes, AstraCognix real-time tracking solutions allow users with all the advanced features to track and monitor their assets in real-time."
      },
      {
        q: "How will this software improve my fleet management?",
        a: "Real-time tracking software is a revolutionary solution for fleet management. It provides continuous visibility into the location, status, and performance of vehicles. Driver safety, route planning, proactive maintenance, security, and asset utilization get everything you need with our time-tracking services."
      },
      {
        q: "What industries can benefit from real-time tracking solutions?",
        a: "Real-time tracking solutions are perfect for industries like logistics, transportation, delivery services, asset management, field service, construction, and any business that needs to monitor mobile assets or personnel in real-time."
      },
      {
        q: "Can the tracking system integrate with my existing software?",
        a: "Yes, our real-time tracking solutions integrate seamlessly with project management tools, ERP systems, CRM platforms, and other business applications, enabling streamlined workflow management and detailed insights for efficient resource allocation."
      },
      {
        q: "What kind of devices are supported for tracking?",
        a: "Our tracking solutions work on any device - smartphones, tablets, computers, and dedicated GPS devices. The software is accessible anywhere, at any time, on any device, ensuring you're always informed and in control."
      }
    ],
  },

  "mobile-app-development": {
    title: "Mobile App Development",
    summary:
      "Native and cross-platform apps engineered for reliability, great UX, and secure scale—covering Android, iOS, Flutter, Ionic, and React Native. We deliver mobile solutions that drive engagement, retention, and business growth.",
    bullets: [
      "Product discovery, user journeys, and technical blueprint",
      "Design system, UI/UX prototypes, and usability validation",
      "Agile delivery with CI/CD, QA automation, and observability",
      "Launch, store submission support, analytics, and growth experiments",
    ],
    highlight: "Fast, flexible, future-ready delivery pods that keep your mobile roadmap on track. We align on KPIs—activation, retention, performance, and stability—then build against them with speed, quality, and transparency.",
    services: {
      heading: "Mobile App Development Services",
      items: [
        {
          title: "Android App Development",
          detail: "Native Kotlin/Java builds with material design, Play Store readiness, and performance optimization. We build scalable Android applications that leverage the latest features and best practices. Our Android development team creates high-performance apps that work seamlessly across all Android devices and versions.",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "iOS App Development",
          detail: "Swift/SwiftUI apps tuned for performance, accessibility, and App Store success. We create intuitive iOS applications that deliver exceptional user experiences on iPhone and iPad. Our iOS developers leverage the latest Apple technologies to build native apps that stand out in the App Store.",
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Flutter App Development",
          detail: "Flutter apps built with Dart and Material Design. We create high-performance mobile applications that deliver exceptional user experiences on both iPhone and Android. Flutter enables us to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
        }
        
      ]
    },
    featureCards: [
      { 
        title: "Agile Development", 
        detail: "Speed up delivery with agile client-centric sprints, CI/CD, and continuous feedback loops. We iterate quickly and deliver value incrementally.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "On-Demand Services", 
        detail: "Flexible engagement and payment models tailored to on-time delivery for your roadmap. Scale your team up or down as needed.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Instant Support", 
        detail: "24/7 availability for queries, incidents, and releases to keep your app running smoothly. We're always here when you need us.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Fastest Hiring", 
        detail: "Rapidly spin up vetted pods with cross-functional experts across mobile, backend, and QA. Get the right talent when you need it.",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
      },
    ],
    process: {
      heading: "Our Mobile App Development Process",
      steps: [
        {
          title: "Discovery & Planning",
          detail: "Product discovery, user journeys, technical blueprint, and roadmap definition. We understand your vision and create a strategic plan.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Design & Prototyping",
          detail: "Design system, UI/UX prototypes, and usability validation. We create beautiful, intuitive interfaces that users love.",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Development & Testing",
          detail: "Agile delivery with CI/CD, QA automation, and observability. We build robust apps with continuous testing and quality assurance.",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Launch & Growth",
          detail: "Launch, store submission support, analytics, and growth experiments. We help you launch successfully and optimize for growth.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    techStack: {
      heading: "Mobile App Development Technologies & Tools",
      description: "We leverage cutting-edge technologies and frameworks to build high-performance, scalable mobile applications across all platforms.",
      groups: [
        {
          title: "Native Development",
          icon: "fas fa-mobile-alt",
          items: [
            { name: "Kotlin & Java (Android)", icon: "fab fa-android" },
            { name: "Swift & SwiftUI (iOS)", icon: "fab fa-apple" },
            { name: "Objective-C (iOS Legacy)", icon: "fab fa-apple" },
            { name: "Android SDK & Jetpack", icon: "fab fa-android" },
            { name: "iOS SDK & UIKit", icon: "fab fa-apple" }
          ]
        },
        {
          title: "Cross-Platform Frameworks",
          icon: "fas fa-layer-group",
          items: [
            { name: "Flutter & Dart", icon: "fas fa-code" },
            { name: "React Native", icon: "fab fa-react" },
            { name: "Ionic & Angular", icon: "fab fa-angular" },
            { name: "Xamarin", icon: "fab fa-microsoft" },
            { name: "PhoneGap/Cordova", icon: "fas fa-mobile-alt" }
          ]
        },
        {
          title: "Backend & APIs",
          icon: "fas fa-server",
          items: [
            { name: "RESTful APIs", icon: "fas fa-exchange-alt" },
            { name: "GraphQL", icon: "fab fa-graphql" },
            { name: "Firebase", icon: "fab fa-google" },
            { name: "AWS Amplify", icon: "fab fa-aws" },
            { name: "Node.js & Express", icon: "fab fa-node-js" }
          ]
        },
        {
          title: "Tools & Services",
          icon: "fas fa-tools",
          items: [
            { name: "Android Studio", icon: "fab fa-android" },
            { name: "Xcode", icon: "fab fa-apple" },
            { name: "Git & GitHub", icon: "fab fa-github" },
            { name: "CI/CD Pipelines", icon: "fas fa-sync-alt" },
            { name: "App Store Connect", icon: "fab fa-app-store-ios" },
            { name: "Google Play Console", icon: "fab fa-google-play" }
          ]
        }
      ]
    },
    benefits: [
      {
        title: "Enhanced User Experience",
        detail: "We create intuitive, user-friendly mobile applications that provide seamless experiences across all devices. Our focus on UX design ensures high user engagement and satisfaction, leading to better retention rates and positive reviews.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Increased Business Reach",
        detail: "Mobile apps enable you to reach customers anytime, anywhere. With billions of smartphone users worldwide, a mobile presence significantly expands your market reach and provides new revenue opportunities through in-app purchases and subscriptions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Improved Customer Engagement",
        detail: "Mobile apps offer direct communication channels with push notifications, in-app messaging, and personalized content. This helps build stronger customer relationships and increases brand loyalty through regular, meaningful interactions.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Competitive Advantage",
        detail: "Having a well-designed mobile app sets you apart from competitors. It demonstrates innovation, improves brand perception, and provides a platform for unique features and services that differentiate your business in the market.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Real-Time Analytics",
        detail: "Mobile apps provide valuable insights into user behavior, preferences, and engagement patterns. Our integrated analytics solutions help you make data-driven decisions to optimize performance and improve user experience continuously.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Cost-Effective Marketing",
        detail: "Mobile apps serve as powerful marketing tools with lower costs than traditional advertising. Features like push notifications, referral programs, and in-app promotions help you reach customers directly and cost-effectively.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
      }
    ],
    benefitsImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    faq: [
      {
        q: "Do you handle app store submissions?",
        a: "Yes—store listings, screenshots, policies, and review responses are included. We guide you through the entire submission process for both Apple App Store and Google Play Store, ensuring compliance with all guidelines and requirements."
      },
      {
        q: "Can you work with existing codebases?",
        a: "We audit, refactor, and extend existing apps, adding tests and CI/CD where needed. We can modernize legacy apps or enhance current applications with new features, ensuring seamless integration with your existing infrastructure."
      },
      {
        q: "How do you ensure performance and security?",
        a: "Profiling, caching strategies, secure storage, OWASP checks, and dependency audits. We follow industry best practices to ensure your app is fast, secure, and reliable. We conduct thorough security testing and performance optimization throughout the development process."
      },
      {
        q: "What mobile platforms do you support?",
        a: "We develop for iOS (iPhone and iPad), Android, and cross-platform solutions using Flutter, React Native, and Ionic. We help you choose the right approach for your needs based on your budget, timeline, and feature requirements."
      },
      {
        q: "How long does it take to develop a mobile app?",
        a: "Timeline varies based on complexity, features, and platform. A simple app may take 2-3 months, while complex enterprise apps can take 6-12 months. We provide detailed timelines during discovery and keep you updated throughout the development process."
      },
      {
        q: "Do you provide post-launch support and maintenance?",
        a: "Absolutely. We offer ongoing support, bug fixes, feature updates, performance optimization, and security patches to keep your app running smoothly and up-to-date. Our maintenance packages are tailored to your specific needs."
      },
      {
        q: "What is the difference between native and cross-platform development?",
        a: "Native apps are built specifically for one platform (iOS or Android) using platform-specific languages, offering the best performance and access to device features. Cross-platform apps use frameworks like Flutter or React Native to share code between platforms, reducing development time and cost while maintaining good performance."
      },
      {
        q: "Can you integrate third-party services and APIs?",
        a: "Yes, we integrate various third-party services including payment gateways, social media platforms, analytics tools, cloud services, and more. We ensure secure and seamless integration with your existing systems and services."
      }
    ],
    mattersImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    keySteps: {
      heading: "Key Steps in our Development Process",
      description: "Our proven mobile app development methodology ensures quality, efficiency, and successful delivery from concept to launch.",
      steps: [
        {
          title: "Discovery & Strategy",
          detail: "We start by understanding your business goals, target audience, and market requirements. Our team conducts thorough research and creates a comprehensive strategy document outlining the app's features, technical architecture, and development roadmap.",
          icon: "fas fa-lightbulb",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "UI/UX Design",
          detail: "Our designers create intuitive, user-friendly interfaces that align with your brand identity. We develop wireframes, prototypes, and high-fidelity designs ensuring an exceptional user experience across all devices.",
          icon: "fas fa-palette",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Development & Integration",
          detail: "Our experienced developers build your app using the latest technologies and best practices. We ensure seamless integration with third-party services, APIs, and backend systems while maintaining code quality and performance.",
          icon: "fas fa-code",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Testing & Quality Assurance",
          detail: "Rigorous testing across multiple devices, operating systems, and scenarios ensures your app is bug-free and performs optimally. We conduct functional, performance, security, and usability testing before launch.",
          icon: "fas fa-check-circle",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Deployment & Launch",
          detail: "We handle the complete app store submission process, including preparing store listings, screenshots, and compliance documentation. Our team manages the review process and ensures a smooth launch.",
          icon: "fas fa-rocket",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Support & Maintenance",
          detail: "Post-launch, we provide ongoing support, regular updates, bug fixes, and feature enhancements. Our maintenance services ensure your app stays current with platform updates and continues to perform optimally.",
          icon: "fas fa-headset",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    whyChoose: {
      heading: "Why Choose AstraCognix As a Mobile App Development Company",
      description: "We combine technical expertise with creative innovation to deliver mobile applications that drive business growth and exceed user expectations. Our commitment to excellence and client success sets us apart.",
      items: [
        {
          title: "Expert Team of Developers",
          detail: "Our team consists of certified mobile app developers with years of experience in native and cross-platform development. We stay updated with the latest technologies and industry best practices to deliver cutting-edge solutions.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Proven Track Record",
          detail: "With hundreds of successful mobile app projects delivered across various industries, we have a proven track record of building scalable, high-performance applications that drive business results.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "End-to-End Services",
          detail: "From initial consultation and design to development, testing, deployment, and ongoing maintenance, we provide comprehensive mobile app development services under one roof, ensuring seamless project execution.",
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Agile Development Methodology",
          detail: "We follow agile development practices with regular sprints, demos, and feedback loops. This ensures transparency, faster delivery, and the ability to adapt to changing requirements throughout the project.",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Cost-Effective Solutions",
          detail: "We offer competitive pricing without compromising on quality. Our efficient development processes and reusable components help reduce costs while delivering premium mobile applications that meet your budget requirements.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "24/7 Support & Maintenance",
          detail: "Our commitment doesn't end at launch. We provide round-the-clock support, regular updates, security patches, and feature enhancements to ensure your app remains competitive and performs optimally.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    getInTouch: {
      heading: "Get in Touch",
      description: "Ready to transform your mobile app idea into reality? Let's discuss your project and explore how we can help you achieve your business goals.",
      contactInfo: [
        {
          icon: "fas fa-map-marker-alt",
          title: "Location",
          detail: "Bhubaneswar, Odisha 752054"
        },
        {
          icon: "fas fa-phone",
          title: "Phone",
          detail: "+91-6202808498"
        },
        {
          icon: "fas fa-envelope",
          title: "Email",
          detail: "hello@astracognix.com"
        }
      ],
      ctaText: "Schedule a Free Consultation",
      ctaLink: "https://wa.me/6202808498?text=Hello%2C%20I%27d%20like%20to%20discuss%20my%20project%20requirements"
    },
  },

  "android-app-development": {
    title: "Android App Development Company",
    summary:
      "As a leading Android app development company, AstraCognix delivers cutting-edge mobile solutions that power businesses across diverse industries. Our expert Android developers leverage the latest technologies and best practices to build scalable, high-performance applications that drive user engagement and business growth. From concept to deployment, we provide end-to-end Android app development services tailored to your unique requirements.",
    bullets: [
      "Seamless Integration with APIs",
      "Regular Updates and Maintenance",
      "Customizable User Interface",
      "Scalable Architecture",
      "Rapid Prototyping",
    ],
    highlight: "Transform your innovative ideas into powerful Android applications with AstraCognix. As a premier Android app development company, we combine technical excellence with creative design to deliver mobile solutions that exceed expectations. Our comprehensive approach covers everything from initial consultation and UI/UX design to development, testing, Play Store deployment, and ongoing support.",
    featureCards: [
      {
        title: "Native Android Development",
        detail: "Build high-performance Android apps using Kotlin and Java with Material Design principles. We leverage the latest Android SDK features and best practices for optimal performance and user experience.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Play Store Optimization",
        detail: "Complete Play Store listing optimization, ASO strategies, and seamless app publishing. We ensure your app meets all Google Play guidelines and maximizes visibility for downloads.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Modern UI/UX Design",
        detail: "Create intuitive, user-friendly interfaces following Material Design guidelines. Our designers craft beautiful, accessible Android experiences that engage users and drive conversions.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Cross-Device Compatibility",
        detail: "Ensure your app works flawlessly across all Android devices, screen sizes, and OS versions. We test extensively to guarantee consistent performance and user experience.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
      }
    ],
    services: {
      heading: "Android App Development Services",
      items: [
        {
          title: "Mobile App Consulting",
          detail: "It all starts with an idea guided correctly to seize the right opportunity at the right time. Android applications have a huge customer base and expectations. We help businesses align their ideas with those Android-specific user bases. Our adept consultants help you choose the best Android development platform and the ways to top the store.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Mobile UX and design/ Android UI/UX Design",
          detail: "Despite being one of the most expensive ecosystems there are a number of businesses that operate in Android. Our team creates prototypes and wireframes for the app user interface. Our team of Android app developers holds expertise in creating indelible experiences across all Android devices and versions.",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Custom Android Application Development",
          detail: "With great speed, precision, and the latest technology, we deliver the best intuitive Android app services. By leveraging an analytical mindset our Android app developers build custom apps for different industry verticals in a minimum timeframe. We provide Android app development services in India to help businesses build authentic solutions.",
          image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Android Software Testing",
          detail: "We're a renowned Android app development company that will handle your testing so you can keep building superior apps. Our mobile app development process is engineered considering security and performance first approach. We conduct multiple automated and manual tests to locate and resolve errors and glitches to ensure future-ready applications.",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Multi-Platform Deployment",
          detail: "Our Android application development team knows how to get your name on every platform in the Android ecosystem. We're a leading Android app development company that specializes in seamless integration and deployment. Irrespective of platform preference, our developers will help you get you there.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    signatureNiches: {
      heading: "Our Signature Niches",
      description: "Whenever you start with the Android app development services bandwagon, rely on an outsourced partner who is determined to deliver harsh deadlines with extraordinary features.",
      niches: [
        {
          title: "Complete Android Development Lifecycle",
          detail: "Our aim is to take you through the path of end-to-end app engineering, from ideation to development to integration to product launch.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Catering to Businesses of All Sizes",
          detail: "No matter who your target niche is or what business model - we are avid for challenges from diverse industries, newcomers, established enterprises, and global entities.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Innovation First Tech Background",
          detail: "Being a pioneer in an Android app development company, our team also underpins AI. VR/AR and IoT innovations at scale.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    projects: {
      heading: "Projects",
      description: "AstraCognix, an Android app development company in India, is well-versed with every trend and technology in the market. We've worked with a range of Android device types, brands, funded startups, and custom ecosystems.",
      items: [
        {
          title: "GCRS",
          detail: "GCRS, a UK based company providing one stop solution for navigating the complexities of global product compliance. They are leading provider of Regulatory, Toxicology and Quality assurance services helping all size business to bring their product into the market.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "PharmDel",
          detail: "PharmDel, a Welsh Pharmacy Award Winner delivery app. A stellar dispensary delivery app helps pharmacies design and monitor their order and delivery service.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "EasternEye",
          detail: "Founded in 1989 EasterEye is an award-winning British Asian newspaper. With a strong following on their website, their website can be accessed on diverse devices.",
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Mizo",
          detail: "Mizo is a creative learning platform for kids. With unlimited practice and in-depth analysis, Mizo has made learning a fun experience for kids.",
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Nayyar Fashion",
          detail: "With a mission of making an impact through their designs, Nayyar Fashion is a women's online shopping site. Alongside India, they have shoppers from all over the world.",
          image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    technology: {
      heading: "Android Development Technologies & Tools",
      categories: {
        languages: ["Kotlin", "Java", "C++", "Dart"],
        frameworks: ["Android SDK", "Jetpack Compose", "Material Design", "Android Architecture Components"],
        tools: ["Android Studio", "Gradle", "Firebase", "Git"],
        testing: ["JUnit", "Espresso", "Mockito", "Robolectric"],
        cloud: ["Firebase", "AWS Amplify", "Google Cloud", "Azure Mobile Apps"],
        database: ["Room Database", "SQLite", "Firebase Realtime Database", "Realm", "MongoDB"]
      }
    },
    industries: {
      heading: "Custom Android App Development Services for Diverse Industries",
      description: "AstraCognix, an Android app development company in India, is well-versed with every trend and technology in the market. We've worked with a range of Android device types, brands, funded startups, and custom ecosystems.",
      stats: [
        { label: "Years of Experience", value: "2+" },
        { label: "Clients", value: "50+" },
        { label: "Mobile Apps", value: "100+" },
        { label: "Weeks of Brisk Timeframe", value: "2" },
        { label: "Reviews", value: "4.9+" }
      ]
    },
    process: {
      heading: "Our Android App Development Process",
      description: "At AstraCognix we offer Android app development services to build custom Android apps. Our team follows an agile methodology for on-time delivery and transparent process.",
      steps: [
        {
          title: "Strategy",
          detail: "Your requirements will be outlined with a custom ecosystem in the strategy stage to ensure our business analysts understand your feature requirements.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "UI/UX Design",
          detail: "Our team will follow the roadmap and flesh out wireframes and prototypes to lay the foundation for the app user interface. Get ensured final user interface and app screens make the user go wow!",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "App Development",
          detail: "With an eye on user and functionality growth, we follow an agile methodology and DevOps culture ensures a breach-free backend and exceptional results within the deadline.",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Testing & Quality Assurance",
          detail: "Our diligent quality assurance procedure involves thorough testing of critical functionalities, workflows, additional features, performance, and UI.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Post Launch Support",
          detail: "Witness your Android app to work as a charm. AstraCognix the Android application development company is here to keep fighting for the best possible quality solution for your user base.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    whyChoose: {
      heading: "Why Choose AstraCognix for Your Android App Development",
      description: "Our team follows a comprehensible and creative development cycle to bring your Android app idea to life. Our team focuses on addressing operational efficiency with Gen AI, reducing tech and managerial debt.",
      items: [
        {
          title: "Led by Success",
          detail: "Teamwork and innovation are the quality values we highly appraise in everything we do. From the initial idea through to the final execution, we have a tailor-made Android design team to help adapt, assist, and meet client-specific needs.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Cost-Effective Solutions",
          detail: "With over a decade of experience, we offer services at the best competitive prices. We employ the best agile development practices, leading to a reduction in custom software application development cost and time.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Complete Transparency",
          detail: "Transparent communication is the key to effective business solutions. As a leading Android application development company we keep our clients regularly updated with project status and provide a clear view of every technological decision.",
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Latest Tech Stack",
          detail: "From system architecture to backend development we're a remarkable Android app development company. We implement a range of advanced technologies and languages with seamless guaranteed integration of processes.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    testimonials: {
      heading: "What Client Say",
      items: [
        {
          name: "Ashish Agarwal",
          location: "India",
          text: "We were most pleased with their problem-solving skills and simplistic approach.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Amrita Singh",
          location: "India",
          text: "AstraCognix technologies delivered an outstanding ecommerce website solution. Highly satisfied with their professional services and expertise.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Rajesh Mehta",
          location: "India",
          text: "AstraCognix technologies excelled in developing our Flutter app. Their expertise and dedication exceeded our expectations.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Sanjana Verma",
          location: "India",
          text: "We had an incredible experience working with AstraCognix technologies for our app development project. From the beginning, they impressed us with their professionalism, attention to detail, and innovative approach to problem-solving.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" 
          
        }
      ]
    },
    faq: [
      {
        q: "Will we sign an NDA to keep your Android app idea information confidential?",
        a: "Yes. We always sign an NDA the moment we get an app idea. App development is the heart and soul of our business."
      },
      {
        q: "Why opt for an Android app development company?",
        a: "According to records, Android has scored the majority of users in the world. Having an Android app means reaching a vast audience. Open source technology, easy to enter the market, cost-effective, and wide range of devices Android development is highly in demand."
      },
      {
        q: "Will you assist me in deploying my Android app to the Play Store?",
        a: "Yes, we do. In fact, our team takes the complete responsibility of publishing an app on the Play Store. It's part of our offerings as an Android application development company."
      },
      {
        q: "How much does it cost to build an Android App?",
        a: "Android app development services cost varies from $20,000 - $300,000. This figure will depend and vary based on app features, complexity, team size, location, and other factors."
      },
      {
        q: "How long does it take to build an Android app?",
        a: "Commonly, the Android app development services time scale varies based on the client's requirement, customization, and complexity of integration. Usually, the app development time estimation ranges from 2 months to 12 months and even more in a few cases. We're an Android application development company that focuses on the collection of functional and non-functional requirements, R&D, and business concept analysis while following a roadmap engineering."
      },
      {
        q: "How can I hire Android app developers from AstraCognix?",
        a: "It's a straightforward two-step process. Give us your number and we will ring you Tring Tring! That's it. Whether you're a newbie or tech-savvy, AstraCognix, an Android app development company in India will help you find the most suitable model to hire Android app developers for you."
      },
      {
        q: "I have an idea but I am not a technical person. Can you help?",
        a: "Definitely, we can. Some of the best tech business ideas come from people with no technical background. If you have an idea you think can be a winner in the industry, we will help you turn it into a reality."
      }
    ],
    mattersImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=80",
  },





  "ios-app-development": {
    title: "iOS App Development Company",
    summary:
      "Professional iOS app development using Swift and SwiftUI. We create beautiful, high-performance iOS applications optimized for iPhone and iPad, following Apple's Human Interface Guidelines and ensuring App Store success.",
    bullets: [
      "Native Swift/SwiftUI development with modern iOS features",
      "Apple Human Interface Guidelines compliance",
      "App Store submission and optimization",
      "Performance optimization for iPhone and iPad",
    ],
    highlight: "We craft exceptional iOS applications that leverage the latest Apple technologies and design principles. Our iOS apps deliver seamless user experiences, optimal performance, and App Store success with attention to detail and Apple's quality standards.",
    featureCards: [
      { 
        title: "Swift & SwiftUI", 
        detail: "Modern iOS development using Swift and SwiftUI for declarative UI. We leverage the latest iOS features, frameworks, and Apple's recommended patterns for optimal performance.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Apple Design Guidelines", 
        detail: "Strict adherence to Apple's Human Interface Guidelines. We create intuitive, accessible interfaces that feel native to iOS and provide exceptional user experiences.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "App Store Optimization", 
        detail: "Complete App Store listing optimization, keyword research, and ASO strategies. We help maximize your app's visibility and downloads in the App Store.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "iPhone & iPad Support", 
        detail: "Universal apps optimized for both iPhone and iPad. We ensure your app looks and works perfectly on all iOS device sizes and orientations.",
        image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=800&q=80"
      },
    ],
    process: {
      heading: "iOS App Development Process",
      steps: [
        {
          title: "Strategy & Planning",
          detail: "Define app concept, target audience, and technical requirements. We plan the architecture using MVVM or SwiftUI patterns and select the appropriate iOS frameworks.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Design & Prototyping",
          detail: "Create iOS-native designs following HIG, wireframes, and interactive prototypes. We ensure your app feels natural and intuitive to iOS users.",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Development & QA",
          detail: "Swift/SwiftUI development with comprehensive testing on real devices. We ensure compatibility across iOS versions and device types with rigorous QA processes.",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "App Store Launch",
          detail: "App Store submission, review process management, and launch support. We handle all aspects of getting your app approved and published on the App Store.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    whyChoose: {
      heading: "Why Choose AstraCognix for Your iOS App Development",
      description: "Our team follows a comprehensible and creative development cycle to bring your iOS app idea to life. Our team focuses on addressing operational efficiency with Gen AI, reducing tech and managerial debt.",
      items: [
        {
          title: "Led by Success",
          detail: "Teamwork and innovation are the quality values we highly appraise in everything we do. From the initial idea through to the final execution, we have a tailor-made iOS design team to help adapt, assist, and meet client-specific needs.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Cost-Effective Solutions",
          detail: "With over a decade of experience, we offer services at the best competitive prices. We employ the best agile development practices, leading to a reduction in custom software application development cost and time.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Complete Transparency",
          detail: "Transparent communication is the key to effective business solutions. As a leading iOS application development company we keep our clients regularly updated with project status and provide a clear view of every technological decision.",
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Latest Tech Stack",
          detail: "From system architecture to backend development we're a remarkable iOS app development company. We implement a range of advanced technologies and languages with seamless guaranteed integration of processes.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },

    testimonials: {
      heading: "What Client Say",
      items: [
        {
          name: "Suraj Patel",
          location: "India",
          text: "We were most pleased with their problem-solving skills and simplistic approach.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Priya Singh",
          location: "India",
          text: "AstraCognix technologies delivered an outstanding ecommerce website solution. Highly satisfied with their professional services and expertise.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Manoj  Kumar",
          location: "India",
          text: "AstraCognix technologies excelled in developing our Flutter app. Their expertise and dedication exceeded our expectations.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Amisha Verma",
          location: "India",
          text: "We had an incredible experience working with AstraCognix technologies for our app development project. From the beginning, they impressed us with their professionalism, attention to detail, and innovative approach to problem-solving.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" 
          
        }
      ]
    },
    faq: [
      {
        q: "What iOS versions do you support?",
        a: "We typically support iOS 13 and above, ensuring compatibility with the vast majority of active iOS devices. We also implement the latest iOS 16+ features when appropriate."
      },
      {
        q: "Do you use SwiftUI or UIKit?",
        a: "We use both SwiftUI (for new projects) and UIKit (when needed). SwiftUI is our preferred choice for modern iOS development, but we can work with UIKit for complex legacy requirements."
      },
      {
        q: "How do you ensure App Store approval?",
        a: "We follow Apple's App Store Review Guidelines strictly, implement proper privacy policies, handle data correctly, and ensure all requirements are met before submission. We have a high approval rate."
      },
      {
        q: "Can you integrate with Apple services?",
        a: "Yes, we integrate with Apple Pay, iCloud, Core ML, ARKit, HealthKit, and other Apple frameworks. We ensure proper authentication and data handling per Apple's guidelines."
      },
      {
        q: "Do you develop for both iPhone and iPad?",
        a: "Absolutely. We create universal iOS apps that work seamlessly on both iPhone and iPad, with adaptive layouts that take advantage of each device's unique capabilities."
      },
      {
        q: "How long does iOS app development take?",
        a: "A simple iOS app typically takes 2-3 months, while complex apps with advanced features can take 4-6 months. We provide detailed timelines during the planning phase."
      }
    ],
    mattersImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
  },





  "flutter-app-development": {
    title: "Flutter App Development Company",
    summary:
      "Expert Flutter app development for cross-platform mobile applications. Build beautiful, natively compiled apps for iOS, Android, web, and desktop from a single codebase. Fast development, native performance, and stunning UI.",
    bullets: [
      "Single codebase for iOS, Android, web, and desktop",
      "Native performance with Dart programming language",
      "Beautiful Material and Cupertino widgets",
      "Fast development cycles with hot reload",
    ],
    highlight: "Flutter enables us to build high-quality apps faster with a single codebase. Our Flutter apps deliver native performance, beautiful UIs, and consistent experiences across all platforms, reducing development time and costs significantly.",
    featureCards: [
      { 
        title: "Cross-Platform Development", 
        detail: "Write once, run everywhere. Build for iOS, Android, web, and desktop from a single codebase. Reduce development time and maintenance costs significantly.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Native Performance", 
        detail: "Flutter apps compile to native ARM code, delivering true native performance. No JavaScript bridge means faster startup times and smoother animations.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Beautiful UI", 
        detail: "Rich set of Material Design and Cupertino widgets. Create stunning, pixel-perfect interfaces that look native on both iOS and Android.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
      },
      { 
        title: "Fast Development", 
        detail: "Hot reload enables instant updates during development. See changes in real-time, iterate quickly, and deliver faster without compromising quality.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
    ],
    process: {
      heading: "Flutter App Development Process",
      steps: [
        {
          title: "Architecture Setup",
          detail: "Set up Flutter project with proper architecture (BLoC, Provider, or Riverpod). Plan state management, navigation, and project structure for scalability.",
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "UI/UX Design",
          detail: "Design beautiful interfaces using Flutter's widget system. Create custom widgets, animations, and ensure platform-specific design guidelines are followed.",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Development & Testing",
          detail: "Dart development with hot reload, widget testing, and integration testing. We ensure your app works flawlessly across all target platforms.",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Multi-Platform Deployment",
          detail: "Build and deploy to iOS, Android, web, and desktop. We handle platform-specific configurations and ensure optimal performance on each platform.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    whyChoose: {
      heading: "Why Choose AstraCognix for Your Flutter App Development",
      description: "Our team follows a comprehensible and creative development cycle to bring your Flutter app idea to life. Our team focuses on addressing operational efficiency with Gen AI, reducing tech and managerial debt.",
      items: [
        {
          title: "Led by Success",
          detail: "Teamwork and innovation are the quality values we highly appraise in everything we do. From the initial idea through to the final execution, we have a tailor-made Flutter design team to help adapt, assist, and meet client-specific needs.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Cost-Effective Solutions",
          detail: "With over a decade of experience, we offer services at the best competitive prices. We employ the best agile development practices, leading to a reduction in custom software application development cost and time.",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Complete Transparency",
          detail: "Transparent communication is the key to effective business solutions. As a leading Flutter application development company we keep our clients regularly updated with project status and provide a clear view of every technological decision.",
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Latest Tech Stack",
          detail: "From system architecture to backend development we're a remarkable Flutter app development company. We implement a range of advanced technologies and languages with seamless guaranteed integration of processes.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        }
      ]
    },

    testimonials: {
      heading: "What Client Say",
      items: [
        {
          name: "Shivam Bharti",
          location: "India",
          text: "We were most pleased with their problem-solving skills and simplistic approach.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Ladly Singh",
          location: "India",
          text: "AstraCognix technologies delivered an outstanding ecommerce website solution. Highly satisfied with their professional services and expertise.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Vinod Kumar",
          location: "India",
          text: "AstraCognix technologies excelled in developing our Flutter app. Their expertise and dedication exceeded our expectations.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Anjali ",
          location: "India",
          text: "We had an incredible experience working with AstraCognix technologies for our app development project. From the beginning, they impressed us with their professionalism, attention to detail, and innovative approach to problem-solving.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" 
          
        }
      ]
    },

    faq: [
      {
        q: "What platforms can Flutter apps run on?",
        a: "Flutter apps can run on iOS, Android, web browsers, Windows, macOS, and Linux. You can target multiple platforms from a single codebase, significantly reducing development and maintenance costs."
      },
      {
        q: "How does Flutter performance compare to native apps?",
        a: "Flutter apps compile to native ARM code, delivering performance comparable to native apps. Flutter's rendering engine ensures 60fps animations and smooth scrolling on both iOS and Android."
      },
      {
        q: "Can Flutter apps access native device features?",
        a: "Yes, Flutter provides platform channels to access native APIs. We can integrate with device features like camera, GPS, sensors, and platform-specific services using plugins or custom platform channels."
      },
      {
        q: "What state management do you use with Flutter?",
        a: "We use BLoC, Provider, or Riverpod based on project requirements. These patterns ensure scalable, maintainable code and efficient state management across your Flutter app."
      },
      {
        q: "How long does Flutter app development take?",
        a: "Flutter development is typically 30-40% faster than native development since you're building for multiple platforms simultaneously. A typical app takes 2-4 months depending on complexity."
      },
      {
        q: "Can you migrate existing native apps to Flutter?",
        a: "Yes, we can migrate existing iOS or Android apps to Flutter. We analyze your current app, plan the migration strategy, and rebuild it in Flutter while maintaining feature parity and improving performance."
      }
    ],
    mattersImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80",
  },

  "ecommerce-development": {
    title: "Ecommerce Development Company",
    summary:
      "Transform your business with powerful, scalable ecommerce solutions that drive sales and enhance customer experiences. We build secure, high-performance online stores using modern technologies like Shopify, WooCommerce, Magento, and custom platforms that convert visitors into loyal customers.",
    bullets: [
      "Custom ecommerce platforms and marketplace development",
      "Payment gateway integration and PCI compliance",
      "Inventory management and order processing systems",
      "Mobile-responsive designs optimized for conversions",
      "Multi-channel retail solutions and marketplace integrations",
    ],
    highlight:
      "Your online store is your digital storefront—first impressions matter. We create ecommerce experiences that not only look great but also convert browsers into buyers, with seamless checkout flows, personalized recommendations, and robust backend systems that scale with your business growth.",
    featureCards: [
      {
        title: "Conversion-Optimized Design",
        detail:
          "Strategic layouts, clear product presentations, and streamlined checkout processes designed to maximize conversion rates. Every element is crafted to guide users from browsing to purchase completion.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Secure Payment Integration",
        detail:
          "Multiple payment gateway options including Stripe, PayPal, Razorpay, and bank transfers. PCI DSS compliant architecture ensures secure transactions and builds customer trust.",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Scalable Architecture",
        detail:
          "Cloud-based infrastructure that grows with your business. Handle traffic spikes during sales events, manage large product catalogs, and support international shipping with ease.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Advanced Analytics & Insights",
        detail:
          "Comprehensive dashboards tracking sales performance, customer behavior, inventory levels, and marketing campaign effectiveness. Make data-driven decisions to optimize your ecommerce strategy.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    services: {
      heading: "Ecommerce Development Services",
      items: [
        {
          title: "Custom Ecommerce Platform Development",
          detail:
            "Bespoke ecommerce solutions built from the ground up using modern frameworks and architectures. Perfect for businesses with unique requirements that off-the-shelf platforms can't accommodate.",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Shopify Development & Customization",
          detail:
            "Expert Shopify development including custom themes, apps, integrations, and performance optimizations. Transform your store into a high-converting sales machine.",
          image:
            "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "WooCommerce Solutions",
          detail:
            "WordPress-powered ecommerce stores with custom themes, plugins, and integrations. Cost-effective solutions that leverage the flexibility of WordPress with powerful ecommerce capabilities.",
          image:
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Magento Development",
          detail:
            "Enterprise-grade ecommerce solutions using Magento Commerce. Scalable platforms for B2B and B2C businesses requiring complex catalog management and advanced features.",
          image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Multi-Vendor Marketplace Development",
          detail:
            "Build thriving online marketplaces where multiple vendors can sell their products. Complete with vendor dashboards, commission management, and dispute resolution systems.",
          image:
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Ecommerce Migration & Integration",
          detail:
            "Seamlessly migrate from existing platforms or integrate with existing systems like ERPs, CRMs, and inventory management software. Preserve data integrity and minimize business disruption.",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    explainer: {
      heading: "What Makes a Great Ecommerce Platform?",
      body:
        "A successful ecommerce platform combines technical excellence with business acumen. It handles complex product catalogs, processes thousands of transactions securely, personalizes shopping experiences, and provides actionable insights. Modern platforms integrate with social commerce, support omnichannel retail strategies, and leverage AI for recommendations and fraud prevention. The best solutions are built to scale, adapt to market changes, and provide seamless experiences across all devices and touchpoints.",
      image: "/SCS.png",
      quadrants: {
        automation: {
          title: "Automation & Efficiency",
          items: [
            "Automated inventory management",
            "Order processing workflows",
            "Email marketing automation",
            "Customer service chatbots",
            "Dynamic pricing algorithms",
            "Abandoned cart recovery"
          ]
        },
        intelligence: {
          title: "Intelligence & Personalization",
          items: [
            "AI-powered recommendations",
            "Customer behavior analytics",
            "Personalized marketing campaigns",
            "Predictive inventory management",
            "Fraud detection and prevention",
            "Customer lifetime value analysis"
          ]
        }
      }
    },
    faq: [
      {
        q: "Which ecommerce platform is best for my business?",
        a: "The choice depends on your business size, budget, and requirements. Shopify is great for quick setup and small-to-medium businesses. WooCommerce offers flexibility for WordPress users. Magento/Adobe Commerce suits enterprise needs. Custom development is ideal for unique requirements. We can help you choose the right platform based on your specific needs."
      },
      {
        q: "How long does it take to build an ecommerce website?",
        a: "Timeline varies by complexity: Simple stores (4-6 weeks), medium complexity (8-12 weeks), complex platforms (16-24 weeks). This includes design, development, testing, and deployment. Custom integrations or complex features may extend timelines."
      },
      {
        q: "Do you handle payment gateway integration and PCI compliance?",
        a: "Yes, we integrate multiple payment gateways (Stripe, PayPal, Razorpay, etc.) and ensure PCI DSS compliance. We handle the technical implementation while you focus on growing your business."
      },
      {
        q: "Can you migrate my existing online store to a new platform?",
        a: "Absolutely. We specialize in ecommerce migrations with minimal downtime. Our process includes data mapping, content migration, testing, and go-live support to ensure a smooth transition."
      },
      {
        q: "What about mobile commerce and app development?",
        a: "We build responsive websites that work perfectly on mobile devices and can develop companion mobile apps if needed. Progressive Web Apps (PWAs) offer app-like experiences without requiring separate app development."
      },
      {
        q: "Do you provide ongoing maintenance and support?",
        a: "Yes, we offer comprehensive maintenance packages including security updates, performance monitoring, feature enhancements, and technical support. We can also provide training for your team to manage the platform independently."
      }
    ],
    testimonials: {
      heading: "What Our Ecommerce Clients Say",
      items: [
        {
          name: "Rahul Mehta",
          location: "Mumbai, India",
          text: "AstraCognix delivered an outstanding ecommerce website solution. Highly satisfied with their professional services and expertise.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Priya Singh",
          location: "Delhi, India",
          text: "The ecommerce platform built by AstraCognix has transformed our online sales. The user experience is exceptional and conversion rates have improved significantly.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Amit Kumar",
          location: "Bangalore, India",
          text: "Working with AstraCognix for our ecommerce development was a great experience. Their technical expertise and attention to detail resulted in a platform that exceeded our expectations.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
      ]
    },
    mattersImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
  },

  "ui-ux-design": {
    title: "UI/UX Design Company",
    summary:
      "Create exceptional user experiences that delight customers and drive business results. Our UI/UX design services combine strategic thinking, user research, and cutting-edge design principles to craft intuitive, beautiful, and conversion-focused digital experiences across web, mobile, and software platforms.",
    bullets: [
      "User research, personas, and journey mapping",
      "Wireframing, prototyping, and interactive design",
      "Visual design systems and brand consistency",
      "Usability testing and iterative improvements",
      "Accessibility compliance and inclusive design",
    ],
    highlight:
      "Great design isn't just about looking good—it's about creating seamless experiences that users love and businesses need. We blend creativity with data-driven insights to design interfaces that are not only visually stunning but also highly functional and user-friendly.",
    featureCards: [
      {
        title: "User-Centered Research & Strategy",
        detail:
          "Deep user research, competitive analysis, and strategic planning to understand your users' needs, pain points, and behaviors. We create detailed user personas and journey maps that inform every design decision.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Intuitive Interface Design",
        detail:
          "Clean, modern interfaces that prioritize usability and user experience. We create designs that are both visually appealing and functionally superior, following platform-specific design guidelines.",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Interactive Prototyping",
        detail:
          "High-fidelity prototypes that bring your ideas to life. Test user flows, validate assumptions, and gather feedback before development begins, reducing costly revisions later.",
        image:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Design Systems & Scalability",
        detail:
          "Comprehensive design systems with reusable components, patterns, and guidelines. Ensure consistency across all touchpoints while maintaining design quality as your product grows.",
        image:
          "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    services: {
      heading: "UI/UX Design Services",
      items: [
        {
          title: "Website UI/UX Design",
          detail:
            "Complete website design from research to final deliverables. We create responsive, conversion-optimized designs that work seamlessly across all devices and browsers.",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Mobile App UI/UX Design",
          detail:
            "Native mobile app design following platform-specific guidelines. We craft intuitive, engaging experiences that users love and that drive app store success.",
          image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Software UI/UX Design",
          detail:
            "Complex software interfaces designed for productivity and ease of use. We focus on workflow optimization and user efficiency for enterprise applications and SaaS platforms.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Design System Creation",
          detail:
            "Build scalable design systems with components, patterns, and documentation. Ensure design consistency and speed up development across your entire product ecosystem.",
          image:
            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "User Research & Testing",
          detail:
            "Comprehensive user research including surveys, interviews, usability testing, and A/B testing. Validate design decisions and continuously improve user experience.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Accessibility & Inclusive Design",
          detail:
            "Design for all users including those with disabilities. We ensure WCAG compliance and create inclusive experiences that work for everyone, expanding your market reach.",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Product Design & Development",
          detail:
            "End-to-end product design from concept to launch. We handle the complete design lifecycle including ideation, prototyping, testing, and iteration to create market-ready digital products.",
          image:
            "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "SaaS UI Design",
          detail:
            "Specialized design for Software-as-a-Service platforms. We create intuitive, scalable interfaces that support complex workflows while maintaining simplicity for end users.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Website Redesign Services",
          detail:
            "Transform your existing website with modern design principles. We analyze current performance, user feedback, and industry trends to create improved, conversion-focused redesigns.",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Wireframing and Prototyping Services",
          detail:
            "Create detailed wireframes and interactive prototypes to validate design concepts before development. Test user flows, gather feedback, and refine ideas efficiently.",
          image:
            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Ecommerce Website Design",
          detail:
            "Specialized design for online stores that maximizes conversions. We create user-friendly shopping experiences with intuitive navigation, clear product presentation, and seamless checkout flows.",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    explainer: {
      heading: "The Power of Great UI/UX Design",
      body:
        "UI/UX design is the bridge between your business goals and user satisfaction. It encompasses everything from understanding user needs through research to crafting pixel-perfect interfaces that delight and convert. Modern UI/UX design combines psychology, technology, and creativity to create experiences that feel natural, efficient, and enjoyable. Great design reduces friction, increases engagement, and ultimately drives business success through higher conversion rates and user loyalty.",
      image: "/UI_UX.png",
      quadrants: {
        automation: {
          title: "Research & Strategy",
          items: [
            "User interviews and surveys",
            "Competitive analysis",
            "User journey mapping",
            "Information architecture",
            "Usability testing",
            "A/B testing and optimization"
          ]
        },
        intelligence: {
          title: "Design & Implementation",
          items: [
            "Wireframing and prototyping",
            "Visual design and branding",
            "Interaction design",
            "Micro-interactions",
            "Design system creation",
            "Cross-platform consistency"
          ]
        }
      }
    },
    faq: [
      {
        q: "What's the difference between UI and UX design?",
        a: "UX (User Experience) design focuses on the overall feel of the experience and how users interact with your product. UI (User Interface) design focuses on the visual elements and aesthetics. Great products need both—UX ensures it works well, UI ensures it looks great."
      },
      {
        q: "How long does a typical UI/UX design project take?",
        a: "Timeline varies by project complexity: Simple redesigns (2-4 weeks), new websites/apps (6-12 weeks), complex enterprise platforms (12-20 weeks). This includes research, design, prototyping, testing, and final deliverables."
      },
      {
        q: "Do you provide design files and documentation?",
        a: "Yes, we deliver comprehensive design packages including Figma/Sketch files, design specifications, component libraries, style guides, and developer handoff documentation to ensure smooth implementation."
      },
      {
        q: "How do you ensure the design works for all users?",
        a: "We follow WCAG accessibility guidelines, conduct usability testing with diverse user groups, and design for inclusive experiences. Our designs work across different devices, abilities, and demographics."
      },
      {
        q: "Can you work with existing design systems or brand guidelines?",
        a: "Absolutely. We can work within your existing brand guidelines, enhance current design systems, or create new ones from scratch. We adapt to your needs and constraints while maintaining design quality."
      },
      {
        q: "Do you conduct user testing and validation?",
        a: "Yes, user testing is integral to our process. We conduct usability testing, A/B testing, and gather user feedback throughout the design process to validate assumptions and ensure optimal user experiences."
      },
      {
        q: "What tools do you use for UI/UX design?",
        a: "We use industry-leading design tools including Figma, Adobe XD, Sketch, InVision, and Principle for creating wireframes, prototypes, and high-fidelity designs. Our choice of tools depends on project requirements and client preferences."
      },
      {
        q: "Can you improve the UX of our existing product?",
        a: "Absolutely! We specialize in UX audits and redesigns of existing products. We analyze current user flows, identify pain points, and implement improvements that enhance usability and user satisfaction without disrupting your business operations."
      },
      {
        q: "What if I don't like the design you created?",
        a: "We believe in collaborative design and unlimited revisions. If you're not satisfied with initial concepts, we'll work closely with you to understand your vision better and refine the designs. We iterate until we achieve the perfect result that meets your expectations."
      }
    ],
    testimonials: {
      heading: "What Our UI/UX Design Clients Say",
      items: [
        {
          name: "Sneha Patel",
          location: "Ahmedabad, India",
          text: "AstraCognix transformed our app's user experience completely. The new design increased user engagement by 300% and received rave reviews from our customers.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Rajesh Gupta",
          location: "Pune, India",
          text: "The UI/UX design work by AstraCognix was exceptional. They understood our users perfectly and created an interface that's both beautiful and highly functional.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Kavita Sharma",
          location: "Jaipur, India",
          text: "Working with AstraCognix on our website redesign was a game-changer. Their user-centered approach resulted in a 250% increase in conversion rates.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
      ]
    },
    mattersImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1400&q=80",
  },

  "digital-marketing": {
    title: "Digital Marketing Services Company",
    summary:
      "Drive growth and increase revenue with comprehensive digital marketing strategies. We combine data-driven insights with creative campaigns across all digital channels to help your business reach the right audience, engage customers, and achieve measurable results.",
    bullets: [
      "Search engine optimization (SEO) and content marketing",
      "Pay-per-click (PPC) advertising and social media marketing",
      "Email marketing campaigns and conversion rate optimization",
      "Analytics, reporting, and performance tracking",
      "Brand strategy and digital marketing consulting",
    ],
    highlight:
      "Digital marketing is more than just ads—it's about creating meaningful connections with your audience. We develop customized strategies that align with your business goals, target the right customers, and deliver measurable ROI across all digital channels.",
    featureCards: [
      {
        title: "SEO & Content Marketing",
        detail:
          "Improve your search rankings and organic visibility with comprehensive SEO strategies and engaging content that attracts, converts, and retains customers. We optimize for both search engines and user experience.",
        image:
          "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "PPC & Paid Advertising",
        detail:
          "Maximize your advertising ROI with expertly managed PPC campaigns on Google Ads, Bing Ads, and social media platforms. We optimize bids, targeting, and creative to deliver qualified leads at the lowest cost.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Social Media Marketing",
        detail:
          "Build brand awareness, engage your audience, and drive conversions through strategic social media marketing. We create compelling content, manage communities, and run targeted ad campaigns across all platforms.",
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Analytics & Insights",
        detail:
          "Make data-driven decisions with comprehensive analytics and reporting. We track performance across all channels, identify opportunities, and provide actionable insights to optimize your marketing ROI.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    services: {
      heading: "Digital Marketing Services",
      items: [
        {
          title: "Search Engine Optimization (SEO)",
          detail:
            "Improve your website's visibility in search results with comprehensive SEO strategies. We optimize on-page elements, build quality backlinks, and create SEO-friendly content to drive organic traffic and improve rankings.",
          image:
            "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Social Media Marketing",
          detail:
            "Build brand awareness and engage your audience across social platforms. We develop content strategies, manage social media accounts, and run targeted ad campaigns to grow your following and drive engagement.",
          image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Content Marketing",
          detail:
            "Create valuable content that attracts and retains customers. We develop comprehensive content strategies including blog posts, whitepapers, videos, and infographics that establish your authority and drive conversions.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          detail:
            "Turn more visitors into customers with data-driven CRO strategies. We analyze user behavior, identify friction points, and implement A/B tests to improve conversion rates and maximize revenue.",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Analytics & Reporting",
          detail:
            "Track performance and make informed decisions with comprehensive analytics. We set up tracking systems, create custom dashboards, and provide detailed reports with actionable insights to optimize your marketing efforts.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Digital Marketing Consulting",
          detail:
            "Get expert guidance on your digital marketing strategy. We assess your current efforts, identify opportunities, and develop comprehensive plans that align with your business objectives and budget.",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Online Reputation Management",
          detail:
            "Protect and enhance your brand's online reputation. We monitor online mentions, manage reviews, create positive content, and implement strategies to build trust and credibility with your audience.",
          image:
            "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Social Media Optimization",
          detail:
            "Optimize your social media presence for maximum visibility and engagement. We enhance profiles, create compelling content strategies, and implement best practices to grow your following and increase social media ROI.",
          image:
            "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
        }
      ],
    },
    explainer: {
      heading: "Why Digital Marketing Matters for Your Business",
      body:
        "In today's digital-first world, effective digital marketing is essential for business growth. It allows you to reach highly targeted audiences, build meaningful relationships, and drive measurable results. Modern digital marketing combines creativity with data analytics, utilizing multiple channels and touchpoints to create comprehensive customer journeys that convert prospects into loyal customers.",
      image: "/Digital.png",
      quadrants: {
        automation: {
          title: "Strategy & Planning",
          items: [
            "Market research and audience analysis",
            "Competitive analysis and positioning",
            "Channel selection and budget allocation",
            "Campaign planning and scheduling",
            "Performance goal setting",
            "ROI measurement frameworks"
          ]
        },
        intelligence: {
          title: "Execution & Optimization",
          items: [
            "Content creation and distribution",
            "Campaign management and monitoring",
            "A/B testing and experimentation",
            "Performance analytics and reporting",
            "Conversion optimization",
            "Continuous improvement processes"
          ]
        }
      }
    },
    faq: [
      {
        q: "How long does it take to see results from digital marketing?",
        a: "Results vary by channel and strategy. SEO typically takes 3-6 months for significant results, while PPC and social media can show immediate results. We provide detailed timelines in your customized strategy and regular progress reports."
      },
      {
        q: "What's included in your digital marketing packages?",
        a: "Our packages are customized based on your needs, but typically include strategy development, campaign management, content creation, analytics setup, monthly reporting, and ongoing optimization across selected channels."
      },
      {
        q: "Do you work with businesses in specific industries?",
        a: "We work with businesses across all industries including e-commerce, healthcare, finance, technology, real estate, and more. Our strategies are tailored to your industry, target audience, and business objectives."
      },
      {
        q: "How do you measure and report on campaign performance?",
        a: "We use industry-leading analytics tools like Google Analytics, SEMrush, Ahrefs, and custom dashboards to track KPIs. You'll receive monthly reports with insights, recommendations, and clear ROI metrics."
      },
      {
        q: "Can you manage our existing digital marketing campaigns?",
        a: "Absolutely! We can audit your current campaigns, identify areas for improvement, and take over management to optimize performance and achieve better results."
      },
      {
        q: "What makes your digital marketing different from other agencies?",
        a: "We combine data-driven strategies with creative excellence, transparent reporting, and a focus on ROI. Our team has extensive experience across industries, and we prioritize long-term partnerships over quick wins."
      },
      {
        q: "How can my business benefit from your digital marketing services?",
        a: "Most businesses can benefit significantly from digital marketing services. Whether you're selling products or services, digital marketing helps increase brand awareness, generate leads, improve customer retention, and boost sales through targeted, measurable campaigns."
      },
      {
        q: "Why do businesses need digital marketing services?",
        a: "In today's constantly changing digital landscape, businesses need strong digital marketing to stay competitive. A robust online presence helps you reach your target audience effectively, build credibility, and adapt to evolving consumer behaviors and market trends."
      },
      {
        q: "Is digital marketing more cost-effective than traditional marketing?",
        a: "Yes, digital marketing is generally more cost-effective than traditional marketing. It offers real-time tracking of results, precise audience targeting, and measurable ROI. You can reach relevant audiences with better effectiveness while optimizing campaigns based on actual performance data."
      }
    ],
    testimonials: {
      heading: "What Our Digital Marketing Clients Say",
      items: [
        {
          name: "Arjun Sharma",
          location: "Mumbai, India",
          text: "AstraCognix transformed our online presence completely. Their digital marketing strategies increased our website traffic by 300% and leads by 250% within 6 months.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Priya Gupta",
          location: "Delhi, India",
          text: "The ROI from our digital marketing campaigns with AstraCognix has been exceptional. Their strategic approach and attention to detail delivered outstanding results.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Vikram Singh",
          location: "Bangalore, India",
          text: "Working with AstraCognix was a game-changer for our business. Their digital marketing expertise helped us dominate our niche and achieve unprecedented growth.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
      ]
    },
    mattersImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1400&q=80",
  },

  "digital-marketing-consulting": {
    title: "Digital Marketing Consulting Services",
    summary:
      "Transform your digital presence with expert consulting that drives measurable results. Our digital marketing consultants combine strategic thinking, data-driven insights, and cutting-edge techniques to help your business thrive in the competitive digital landscape.",
    bullets: [
      "Comprehensive digital marketing strategy development",
      "Performance audits and competitive analysis",
      "Channel optimization and budget allocation",
      "ROI-focused campaign planning and execution",
      "Analytics implementation and reporting systems",
      "Ongoing strategy refinement and optimization",
    ],
    highlight:
      "Digital marketing consulting goes beyond basic campaign management—it's about developing a comprehensive roadmap that aligns with your business objectives and delivers sustainable, measurable growth. Our consultants bring years of experience and proven methodologies to ensure your success.",
    featureCards: [
      {
        title: "Strategy Development",
        detail:
          "We create comprehensive digital marketing strategies tailored to your business goals, target audience, and competitive landscape. Our strategic planning includes market research, audience analysis, and detailed implementation roadmaps.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Performance Audit",
        detail:
          "Comprehensive analysis of your current digital marketing efforts to identify strengths, weaknesses, and optimization opportunities. We provide actionable insights to improve your overall marketing effectiveness.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Channel Optimization",
        detail:
          "Expert recommendations for the optimal mix of digital channels including SEO, PPC, social media, content marketing, and email. We help you allocate budget effectively across channels for maximum ROI.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Analytics & Insights",
        detail:
          "Advanced analytics setup and interpretation to make data-driven decisions. We implement tracking systems, create custom dashboards, and provide detailed insights to optimize your marketing performance.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    services: {
      heading: "Digital Marketing Consulting Services",
      items: [
        {
          title: "Digital Strategy Consulting",
          detail:
            "Develop comprehensive digital marketing strategies that align with your business objectives. We analyze your market position, identify opportunities, and create actionable plans for sustainable growth.",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Performance Optimization",
          detail:
            "Optimize your existing digital marketing efforts for better results. We audit current campaigns, identify bottlenecks, and implement improvements to maximize ROI across all channels.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Technology Stack Consulting",
          detail:
            "Recommend and implement the right marketing technology stack. From CRM systems to analytics platforms, we help you choose and integrate tools that enhance your marketing capabilities.",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Budget & Resource Planning",
          detail:
            "Strategic planning for marketing budgets and resource allocation. We help you optimize spending, forecast ROI, and plan for scalable marketing operations.",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Competitive Intelligence",
          detail:
            "In-depth competitive analysis and market intelligence. We help you understand your competitors' strategies and identify opportunities to gain market share.",
          image:
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Digital Transformation",
          detail:
            "Guide your business through digital transformation initiatives. We help traditional businesses adapt to digital marketing and establish modern online presence strategies.",
          image:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    explainer: {
      heading: "Why Digital Marketing Consulting Matters",
      body:
        "In today's rapidly evolving digital landscape, businesses need expert guidance to navigate complex marketing challenges and capitalize on emerging opportunities. Our digital marketing consulting services provide the strategic direction and technical expertise needed to build sustainable competitive advantages and achieve measurable business growth.",
      image: "/Digital.png",
      quadrants: {
        automation: {
          title: "Strategic Planning",
          items: [
            "Business objective alignment",
            "Market research and analysis",
            "Target audience definition",
            "Competitive positioning",
            "Channel strategy development",
            "Budget optimization planning"
          ]
        },
        intelligence: {
          title: "Implementation & Growth",
          items: [
            "Campaign execution oversight",
            "Performance monitoring systems",
            "A/B testing frameworks",
            "Conversion optimization",
            "Scalability planning",
            "ROI measurement and reporting"
          ]
        }
      }
    },
    faq: [
      {
        q: "How long does a digital marketing consulting engagement typically last?",
        a: "Consulting engagements vary based on your needs. Initial strategy development usually takes 4-8 weeks, while ongoing consulting relationships can span 6-12 months or longer, depending on your goals and complexity."
      },
      {
        q: "What industries do you provide digital marketing consulting for?",
        a: "We work with businesses across all industries including e-commerce, healthcare, technology, finance, manufacturing, professional services, and more. Our strategies are customized for your specific industry and market conditions."
      },
      {
        q: "Do you provide both strategy and implementation services?",
        a: "Yes, we offer both pure consulting (strategy development and guidance) and full-service implementation (where we execute the strategies we develop). The scope depends on your needs and internal capabilities."
      },
      {
        q: "How do you measure the success of your consulting recommendations?",
        a: "We establish clear KPIs and success metrics at the beginning of each engagement. Progress is measured through regular reporting, and we adjust strategies based on performance data to ensure optimal results."
      },
      {
        q: "What makes your digital marketing consulting different?",
        a: "Our consulting approach combines deep industry expertise with data-driven methodologies. We focus on sustainable, scalable strategies rather than quick wins, and we prioritize transparent communication and measurable ROI."
      }
    ],
    testimonials: {
      heading: "What Our Consulting Clients Say",
      items: [
        {
          name: "Rajesh Kumar",
          location: "Mumbai, India",
          text: "AstraCognix's digital marketing consulting transformed our entire approach to online growth. Their strategic insights and implementation guidance helped us achieve 400% increase in qualified leads within 8 months.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Meera Patel",
          location: "Ahmedabad, India",
          text: "The consulting team at AstraCognix provided invaluable guidance during our digital transformation. Their expertise in strategy development and performance optimization delivered exceptional ROI.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Amit Singh",
          location: "Delhi, India",
          text: "Working with AstraCognix consultants was a turning point for our business. Their comprehensive approach to digital marketing strategy helped us establish market leadership in our industry.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
      ]
    },
    techStack: {
      heading: "Technology Stack We Use for Digital Marketing Consulting",
      description: "We leverage cutting-edge marketing technology and analytics platforms to deliver data-driven insights and optimize your digital marketing performance.",
      groups: [
        {
          title: "Analytics & Tracking",
          icon: "fas fa-chart-line",
          items: [
            { name: "Google Analytics 4", icon: "fab fa-google" },
            { name: "Google Tag Manager", icon: "fab fa-google" },
            { name: "Adobe Analytics", icon: "fab fa-adobe" },
            { name: "Hotjar", icon: "fas fa-eye" },
            { name: "Mixpanel", icon: "fas fa-chart-bar" },
            { name: "Crazy Egg", icon: "fas fa-heat" }
          ]
        },
        {
          title: "SEO & Content Tools",
          icon: "fas fa-search",
          items: [
            { name: "SEMrush", icon: "fas fa-search-plus" },
            { name: "Ahrefs", icon: "fas fa-link" },
            { name: "Moz Pro", icon: "fas fa-chart-area" },
            { name: "Screaming Frog", icon: "fas fa-spider" },
            { name: "Surfer SEO", icon: "fas fa-wave-square" },
            { name: "Jasper AI", icon: "fas fa-robot" },
            { name: "Copy.ai", icon: "fas fa-copy" }
          ]
        },
        {
          title: "Advertising Platforms",
          icon: "fas fa-bullhorn",
          items: [
            { name: "Google Ads", icon: "fab fa-google" },
            { name: "Facebook Ads Manager", icon: "fab fa-facebook" },
            { name: "LinkedIn Campaign Manager", icon: "fab fa-linkedin" },
            { name: "Twitter Ads", icon: "fab fa-twitter" },
            { name: "TikTok Ads Manager", icon: "fab fa-tiktok" },
            { name: "Microsoft Advertising", icon: "fab fa-microsoft" }
          ]
        },
        {
          title: "Marketing Automation",
          icon: "fas fa-robot",
          items: [
            { name: "HubSpot", icon: "fas fa-cogs" },
            { name: "Marketo", icon: "fas fa-bolt" },
            { name: "Mailchimp", icon: "fas fa-envelope" },
            { name: "ActiveCampaign", icon: "fas fa-paper-plane" },
            { name: "Klaviyo", icon: "fas fa-shopping-cart" },
            { name: "Zapier", icon: "fas fa-plug" },
            { name: "Make.com", icon: "fas fa-network-wired" }
          ]
        },
        {
          title: "Social Media Management",
          icon: "fas fa-share-alt",
          items: [
            { name: "Hootsuite", icon: "fas fa-calendar-alt" },
            { name: "Buffer", icon: "fas fa-clock" },
            { name: "Sprout Social", icon: "fas fa-leaf" },
            { name: "Later", icon: "fas fa-camera" },
            { name: "Iconosquare", icon: "fas fa-hashtag" },
            { name: "SocialPilot", icon: "fas fa-plane" }
          ]
        },
        {
          title: "Reporting & Visualization",
          icon: "fas fa-chart-bar",
          items: [
            { name: "Google Data Studio", icon: "fab fa-google" },
            { name: "Tableau", icon: "fas fa-table" },
            { name: "Power BI", icon: "fas fa-chart-pie" },
            { name: "Looker Studio", icon: "fas fa-eye" },
            { name: "Databox", icon: "fas fa-database" },
            { name: "AgencyAnalytics", icon: "fas fa-analytics" }
          ]
        }
      ]
    },
    mattersImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  },

  "social-media-optimization": {
    title: "Social Media Optimization Services",
    summary:
      "Enhance your online presence strategically by promoting your brand across social media platforms. Our SMO services are designed to increase brand awareness, improve engagement rates, drive website traffic, and build lasting relationships with your audience through optimized social media presence.",
    bullets: [
      "Comprehensive social media profile optimization",
      "Content strategy and calendar planning",
      "Community management and engagement",
      "Social media analytics and reporting",
      "Hashtag strategy and trending topic utilization",
      "Cross-platform brand consistency",
    ],
    highlight:
      "Social Media Optimization (SMO) is the process of creating unique, engaging content that attracts followers to your social media profiles and increases awareness of your products or services. Unlike paid advertising, SMO focuses on organic growth through strategic content and community engagement.",
    featureCards: [
      {
        title: "Profile Optimization",
        detail:
          "Complete optimization of your social media profiles across all platforms including compelling bios, professional profile pictures, cover images, and strategic link placements that drive traffic and conversions.",
        image:
          "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Content Strategy",
        detail:
          "Develop comprehensive content calendars with engaging posts, stories, reels, and live sessions that resonate with your target audience and encourage interaction and sharing.",
        image:
          "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Community Engagement",
        detail:
          "Active community management including responding to comments, messages, and mentions, fostering relationships with followers, and building brand loyalty through consistent interaction.",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Analytics & Insights",
        detail:
          "Comprehensive social media analytics tracking engagement rates, reach, impressions, click-through rates, and conversion metrics to optimize performance and ROI.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    services: {
      heading: "Social Media Optimization Services",
      items: [
        {
          title: "Platform-Specific Optimization",
          detail:
            "Tailored optimization strategies for each social media platform including Facebook, Instagram, Twitter, LinkedIn, TikTok, YouTube, and Pinterest to maximize reach and engagement on each network.",
          image:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Content Creation & Curation",
          detail:
            "Professional content creation including graphics, videos, stories, and reels that align with your brand identity and resonate with your target audience across all platforms.",
          image:
            "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Hashtag Strategy",
          detail:
            "Strategic hashtag research and implementation including branded hashtags, trending topics, and community hashtags to increase visibility and discoverability.",
          image:
            "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Competitor Analysis",
          detail:
            "In-depth analysis of competitors' social media presence, content strategies, engagement tactics, and performance metrics to identify opportunities and competitive advantages.",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Crisis Management",
          detail:
            "Social media crisis management and reputation monitoring to handle negative comments, reviews, and PR issues while maintaining brand integrity and trust.",
          image:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Performance Reporting",
          detail:
            "Detailed monthly reporting with actionable insights, KPI tracking, ROI analysis, and strategic recommendations for continuous improvement and growth.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    explainer: {
      heading: "Why Social Media Optimization Matters",
      body:
        "In today's digital landscape, social media is no longer optional—it's essential for business success. Effective SMO helps you build authentic connections with your audience, establish thought leadership, drive website traffic, and ultimately increase conversions and revenue through strategic organic growth.",
      image: "/Digital.png",
      quadrants: {
        automation: {
          title: "Content & Strategy",
          items: [
            "Content calendar planning",
            "Platform-specific content creation",
            "Hashtag research and strategy",
            "Posting schedule optimization",
            "Brand voice consistency",
            "Visual content guidelines"
          ]
        },
        intelligence: {
          title: "Engagement & Growth",
          items: [
            "Community interaction monitoring",
            "Response time optimization",
            "Influencer collaboration",
            "User-generated content leverage",
            "Cross-platform promotion",
            "Audience growth tactics"
          ]
        }
      }
    },
    faq: [
      {
        q: "What is the difference between SMO and SMM?",
        a: "SMO (Social Media Optimization) focuses on organic growth through profile optimization, content strategy, and community engagement. SMM (Social Media Marketing) includes paid advertising and promotional activities alongside organic efforts."
      },
      {
        q: "Which social media platforms should my business focus on?",
        a: "The best platforms depend on your target audience and business goals. We analyze your audience demographics, industry, and objectives to recommend the most effective platforms for your business."
      },
      {
        q: "How long does it take to see results from SMO?",
        a: "SMO is a long-term strategy. Initial improvements in engagement can be seen within 1-3 months, while significant follower growth and brand awareness typically occur within 6-12 months of consistent optimization."
      },
      {
        q: "Do you handle content creation for SMO?",
        a: "Yes, our SMO services include comprehensive content creation including graphics, videos, captions, hashtags, and posting schedules tailored to each platform's best practices and your brand guidelines."
      },
      {
        q: "How do you measure SMO success?",
        a: "We track key metrics including follower growth, engagement rates, reach, impressions, click-through rates, website traffic from social media, and conversion rates to ensure measurable ROI from your SMO efforts."
      }
    ],
    testimonials: {
      heading: "What Our SMO Clients Say",
      items: [
        {
          name: "Priya Sharma",
          location: "Mumbai, India",
          text: "AstraCognix transformed our social media presence completely. Their SMO strategy increased our follower count by 300% and engagement rates by 250% within 8 months. Highly recommend their expertise!",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Rahul Mehta",
          location: "Delhi, India",
          text: "The SMO services from AstraCognix helped us establish a strong brand presence on social media. Their strategic approach to content and community management delivered outstanding results.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Sneha Patel",
          location: "Ahmedabad, India",
          text: "Working with AstraCognix for SMO was a game-changer for our business. Their optimization strategies and content creation helped us connect with our audience like never before.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
      ]
    },
    techStack: {
      heading: "Technology Stack We Use for Social Media Optimization",
      description: "We leverage cutting-edge social media tools and analytics platforms to deliver data-driven insights and optimize your social media performance.",
      groups: [
        {
          title: "Social Media Management",
          icon: "fas fa-share-alt",
          items: [
            { name: "Hootsuite", icon: "fas fa-calendar-alt" },
            { name: "Buffer", icon: "fas fa-clock" },
            { name: "Sprout Social", icon: "fas fa-leaf" },
            { name: "Later", icon: "fas fa-camera" },
            { name: "Iconosquare", icon: "fas fa-hashtag" },
            { name: "SocialPilot", icon: "fas fa-plane" }
          ]
        },
        {
          title: "Analytics & Insights",
          icon: "fas fa-chart-line",
          items: [
            { name: "Google Analytics", icon: "fab fa-google" },
            { name: "Facebook Insights", icon: "fab fa-facebook" },
            { name: "Instagram Insights", icon: "fab fa-instagram" },
            { name: "Twitter Analytics", icon: "fab fa-twitter" },
            { name: "LinkedIn Analytics", icon: "fab fa-linkedin" },
            { name: "YouTube Analytics", icon: "fab fa-youtube" }
          ]
        },
        {
          title: "Content Creation",
          icon: "fas fa-palette",
          items: [
            { name: "Canva", icon: "fas fa-images" },
            { name: "Adobe Creative Suite", icon: "fab fa-adobe" },
            { name: "CapCut", icon: "fas fa-video" },
            { name: "InShot", icon: "fas fa-edit" },
            { name: "Photoshop", icon: "fab fa-adobe" },
            { name: "Lightroom", icon: "fas fa-camera-retro" }
          ]
        },
        {
          title: "Automation & Scheduling",
          icon: "fas fa-robot",
          items: [
            { name: "Zapier", icon: "fas fa-plug" },
            { name: "IFTTT", icon: "fas fa-bolt" },
            { name: "Missinglettr", icon: "fas fa-envelope" },
            { name: "ContentStudio", icon: "fas fa-newspaper" },
            { name: "Ocoya", icon: "fas fa-share" },
            { name: "Crowdfire", icon: "fas fa-fire" }
          ]
        },
        {
          title: "Hashtag & Trend Tools",
          icon: "fas fa-hashtag",
          items: [
            { name: "Hashtagify", icon: "fas fa-search-plus" },
            { name: "RiteTag", icon: "fas fa-tags" },
            { name: "Keyhole", icon: "fas fa-key" },
            { name: "Brandwatch", icon: "fas fa-eye" },
            { name: "Mention", icon: "fas fa-at" },
            { name: "Awario", icon: "fas fa-search" }
          ]
        },
        {
          title: "Reporting & Dashboard",
          icon: "fas fa-chart-bar",
          items: [
            { name: "Google Data Studio", icon: "fab fa-google" },
            { name: "Tableau", icon: "fas fa-table" },
            { name: "Power BI", icon: "fas fa-chart-pie" },
            { name: "Sprout Social Reports", icon: "fas fa-file-alt" },
            { name: "Hootsuite Analytics", icon: "fas fa-chart-line" },
            { name: "Iconosquare Reports", icon: "fas fa-chart-area" }
          ]
        }
      ]
    },
    mattersImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1400&q=80",
  },

  "support-and-maintenance": {
    title: "Support & Maintenance Services",
    summary:
      "Ensure your software applications remain secure, up-to-date, and performing optimally with our comprehensive support and maintenance services. We provide ongoing technical support, bug fixes, performance optimization, and feature enhancements to keep your systems running smoothly.",
    bullets: [
      "24/7 technical support and monitoring",
      "Regular security updates and patches",
      "Performance optimization and scalability",
      "Bug fixes and issue resolution",
      "Feature enhancements and upgrades",
      "System backups and disaster recovery",
    ],
    highlight:
      "In today's fast-paced digital environment, software maintenance is not optional—it's essential. Our support services ensure your applications remain secure, functional, and competitive while you focus on growing your business.",
    featureCards: [
      {
        title: "Technical Support",
        detail:
          "Round-the-clock technical assistance with dedicated support engineers, help desk services, and priority response times for critical issues affecting your business operations.",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "System Monitoring",
        detail:
          "Continuous monitoring of your applications, servers, and infrastructure with proactive alerts, performance tracking, and automated incident response to prevent downtime.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Security Updates",
        detail:
          "Regular security assessments, vulnerability patches, and updates to protect your applications from emerging threats and ensure compliance with industry standards.",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Performance Optimization",
        detail:
          "Ongoing performance tuning, database optimization, code refactoring, and infrastructure scaling to ensure your applications maintain optimal speed and efficiency.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    services: {
      heading: "Support & Maintenance Services",
      items: [
        {
          title: "Application Support",
          detail:
            "Comprehensive support for web applications, mobile apps, and enterprise software including bug fixes, feature requests, and compatibility updates across all platforms and devices.",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Infrastructure Management",
          detail:
            "Server management, cloud infrastructure monitoring, database administration, and backup solutions to ensure high availability and data integrity.",
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Security Maintenance",
          detail:
            "Ongoing security monitoring, threat detection, vulnerability assessments, and compliance management to protect your applications and data from cyber threats.",
          image:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Performance Monitoring",
          detail:
            "Real-time performance tracking, load testing, bottleneck identification, and optimization recommendations to maintain peak application performance.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Version Updates",
          detail:
            "Regular software updates, feature enhancements, and technology stack upgrades to keep your applications current with the latest industry standards and user expectations.",
          image:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Disaster Recovery",
          detail:
            "Comprehensive backup solutions, disaster recovery planning, and business continuity strategies to minimize downtime and data loss in case of emergencies.",
          image:
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    whyChoose: {
      heading: "What Makes Us Your Ideal Partner?",
      description:
        "Choose AstraCognix for support and maintenance services that go beyond basic technical assistance. Our commitment to excellence, proactive approach, and deep industry expertise make us the perfect partner for your ongoing software success.",
      items: [
        {
          title: "24/7 Availability",
          detail: "Round-the-clock support ensures your systems remain operational and your business continues running smoothly, regardless of time zones or emergencies.",
          bg: "bg-blue-50",
        },
        {
          title: "Proactive Approach",
          detail: "We don't just fix problems—we prevent them. Our proactive monitoring and maintenance strategies identify and resolve issues before they impact your business.",
          bg: "bg-green-50",
        },
        {
          title: "Expert Team",
          detail: "Our certified professionals bring years of experience across multiple technologies, ensuring comprehensive coverage for all your software maintenance needs.",
          bg: "bg-purple-50",
        },
        {
          title: "Customized Solutions",
          detail: "Every business is unique. We tailor our support and maintenance services to match your specific requirements, technology stack, and business objectives.",
          bg: "bg-orange-50",
        },
        {
          title: "Transparent Communication",
          detail: "Clear reporting, regular updates, and open communication channels ensure you're always informed about your system's status and any maintenance activities.",
          bg: "bg-cyan-50",
        },
        {
          title: "Cost-Effective",
          detail: "Our preventive maintenance approach reduces downtime and emergency fixes, providing better value and predictable costs for your maintenance budget.",
          bg: "bg-indigo-50",
        },
      ]
    },
    faq: [
      {
        q: "What types of support do you offer?",
        a: "We offer comprehensive support including 24/7 technical assistance, system monitoring, security updates, performance optimization, bug fixes, and feature enhancements for all types of software applications."
      },
      {
        q: "How quickly do you respond to support requests?",
        a: "We provide tiered response times based on issue severity: Critical issues within 1 hour, High priority within 4 hours, Medium within 24 hours, and Low priority within 48 hours during business days."
      },
      {
        q: "Do you provide support for legacy systems?",
        a: "Yes, we specialize in maintaining and supporting legacy systems, including migration planning, modernization strategies, and continued support for older technology stacks."
      },
      {
        q: "What are your maintenance service packages?",
        a: "We offer flexible packages including Basic (monitoring only), Standard (support + maintenance), Premium (comprehensive management), and Enterprise (customized solutions) based on your specific needs."
      },
      {
        q: "How do you ensure data security during maintenance?",
        a: "We implement strict security protocols including encrypted communications, secure remote access, regular security audits, compliance with industry standards (GDPR, HIPAA, etc.), and comprehensive data backup strategies."
      }
    ],
    testimonials: {
      heading: "What Our Support Clients Say",
      items: [
        {
          name: "Rajesh Sharma",
          location: "Delhi, India",
          text: "AstraCognix's support team is exceptional. They've kept our critical business applications running smoothly for over 2 years with minimal downtime. Their proactive approach prevents issues before they occur.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Priya Patel",
          location: "Mumbai, India",
          text: "The maintenance services from AstraCognix have been invaluable. They handle all technical updates and security patches, allowing us to focus on our core business while ensuring our systems remain secure and up-to-date.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Amit Kumar",
          location: "Bangalore, India",
          text: "Outstanding support and maintenance services. Their team's expertise in performance optimization has significantly improved our application speed and user experience. Highly recommended for any business.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
      ]
    },
    techStack: {
      heading: "Technology Stack We Use for Support & Maintenance",
      description: "We leverage industry-leading tools and platforms to provide comprehensive support and maintenance services for your applications.",
      groups: [
        {
          title: "Monitoring & Analytics",
          icon: "fas fa-chart-line",
          items: [
            { name: "New Relic", icon: "fas fa-tachometer-alt" },
            { name: "DataDog", icon: "fas fa-dog" },
            { name: "Grafana", icon: "fas fa-chart-area" },
            { name: "ELK Stack", icon: "fas fa-search" },
            { name: "Prometheus", icon: "fas fa-database" },
            { name: "Zabbix", icon: "fas fa-server" }
          ]
        },
        {
          title: "DevOps & Automation",
          icon: "fas fa-cogs",
          items: [
            { name: "Jenkins", icon: "fas fa-robot" },
            { name: "GitLab CI/CD", icon: "fab fa-gitlab" },
            { name: "Docker", icon: "fab fa-docker" },
            { name: "Kubernetes", icon: "fas fa-dharmachakra" },
            { name: "Ansible", icon: "fas fa-tasks" },
            { name: "Terraform", icon: "fas fa-infinity" }
          ]
        },
        {
          title: "Security & Compliance",
          icon: "fas fa-shield-alt",
          items: [
            { name: "Nessus", icon: "fas fa-search-plus" },
            { name: "Qualys", icon: "fas fa-shield-alt" },
            { name: "OWASP ZAP", icon: "fas fa-bug" },
            { name: "Splunk", icon: "fas fa-chart-line" },
            { name: "Wireshark", icon: "fas fa-network-wired" },
            { name: "Burp Suite", icon: "fas fa-lock" }
          ]
        },
        {
          title: "Database Management",
          icon: "fas fa-database",
          items: [
            { name: "pgAdmin", icon: "fas fa-database" },
            { name: "MySQL Workbench", icon: "fas fa-database" },
            { name: "MongoDB Compass", icon: "fas fa-leaf" },
            { name: "Redis Insight", icon: "fas fa-memory" },
            { name: "phpMyAdmin", icon: "fab fa-php" },
            { name: "DBeaver", icon: "fas fa-plug" }
          ]
        },
        {
          title: "Cloud Platforms",
          icon: "fas fa-cloud",
          items: [
            { name: "AWS Management Console", icon: "fab fa-aws" },
            { name: "Azure Portal", icon: "fab fa-microsoft" },
            { name: "Google Cloud Console", icon: "fab fa-google" },
            { name: "DigitalOcean", icon: "fas fa-water" },
            { name: "Heroku", icon: "fas fa-cube" },
            { name: "Vercel", icon: "fas fa-rocket" }
          ]
        },
        {
          title: "Communication & Ticketing",
          icon: "fas fa-comments",
          items: [
            { name: "Jira Service Desk", icon: "fab fa-jira" },
            { name: "Zendesk", icon: "fas fa-headset" },
            { name: "Slack", icon: "fab fa-slack" },
            { name: "Microsoft Teams", icon: "fab fa-microsoft" },
            { name: "Freshdesk", icon: "fas fa-ticket-alt" },
            { name: "Intercom", icon: "fas fa-comments" }
          ]
        }
      ]
    },
    mattersImage: "/mainten.png",
  },

  "seo-services-company": {
    title: "SEO Services ",
    summary:
      "Dominate search engine rankings and drive organic traffic to your website with our comprehensive SEO services. We combine technical expertise, content strategy, and data-driven insights to improve your search visibility and attract qualified leads that convert into customers.",
    bullets: [
      "On-page and off-page SEO optimization",
      "Technical SEO audits and implementation",
      "Content marketing and link building strategies",
      "Local SEO and mobile optimization",
      "SEO analytics, reporting, and ROI tracking",
    ],
    highlight:
      "SEO is the foundation of digital marketing success. Our proven methodologies and cutting-edge techniques ensure your website ranks higher, attracts more visitors, and generates more business. We don't just optimize for search engines—we optimize for your customers.",
    featureCards: [
      {
        title: "Technical SEO Excellence",
        detail:
          "Comprehensive technical SEO audits and optimizations including site speed, mobile-friendliness, structured data, and crawlability. We fix technical issues that prevent search engines from properly indexing your site.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Content Strategy & Optimization",
        detail:
          "Strategic content creation and optimization that resonates with both search engines and your target audience. We develop comprehensive content calendars and optimize existing content for better rankings.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Link Building & Authority",
        detail:
          "Ethical link building strategies that build domain authority and improve search rankings. We acquire high-quality backlinks from authoritative sources through content marketing and digital PR.",
        image:
          "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Local SEO Domination",
        detail:
          "Dominate local search results with Google My Business optimization, local citations, and location-based content. Perfect for businesses serving specific geographic areas.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    services: {
      heading: "SEO Services",
      items: [
        {
          title: "On-Page SEO Optimization",
          detail:
            "Optimize every element of your web pages including title tags, meta descriptions, headings, content, and internal linking structure. We ensure your pages are perfectly optimized for target keywords and user intent.",
          image:
            "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Off-Page SEO & Link Building",
          detail:
            "Build high-quality backlinks and improve domain authority through ethical link building strategies. We create shareable content, conduct digital PR, and build relationships with authoritative websites.",
          image:
            "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Technical SEO Audit",
          detail:
            "Comprehensive technical SEO audits to identify and fix issues affecting your search rankings. We analyze site speed, mobile-friendliness, structured data, and crawlability to ensure optimal performance.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Local SEO Services",
          detail:
            "Dominate local search results with Google My Business optimization, local schema markup, and citation building. We help local businesses attract customers from their geographic area.",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "E-commerce SEO",
          detail:
            "Specialized SEO strategies for online stores including product page optimization, category optimization, and conversion-focused content. We drive qualified traffic that converts into sales.",
          image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "SEO Content Marketing",
          detail:
            "Create SEO-optimized content that attracts, engages, and converts your target audience. We develop comprehensive content strategies that align with your SEO goals and business objectives.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "SEO Analytics & Reporting",
          detail:
            "Comprehensive SEO analytics and reporting to track performance and ROI. We provide detailed insights into rankings, traffic, conversions, and actionable recommendations for improvement.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Voice Search Optimization",
          detail:
            "Optimize your content for voice search queries and featured snippets. We prepare your website for the growing trend of voice-activated search and conversational queries.",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    results: {
      heading: "Proven Results from Our SEO Services",
      stats: [
        { value: "300%", label: "Average Traffic Increase" },
        { value: "250%", label: "Lead Generation Growth" },
        { value: "85%", label: "Client Retention Rate" },
        { value: "2+", label: "Projects Completed" },
        { value: "4+", label: "Happy Clients" },
        { value: "4.9/5", label: "Client Satisfaction Score" }
      ],
      description: "Our SEO strategies have delivered measurable results across industries. We combine technical expertise with strategic thinking to drive sustainable growth and long-term success for our clients."
    },
    explainer: {
      heading: "Why SEO Services Matter for Your Business",
      body:
        "Search engine optimization (SEO) is the cornerstone of digital marketing success. In an increasingly competitive online landscape, appearing on the first page of search results can make or break your business. Effective SEO combines technical expertise, strategic content creation, and ongoing optimization to ensure your website attracts qualified traffic that converts into customers.",
      image: "/SEO.png",
      quadrants: {
        automation: {
          title: "Technical Foundation",
          items: [
            "Site structure optimization",
            "Mobile responsiveness",
            "Page speed optimization",
            "Schema markup implementation",
            "XML sitemap creation",
            "Robots.txt optimization"
          ]
        },
        intelligence: {
          title: "Content & Strategy",
          items: [
            "Keyword research and analysis",
            "Content optimization",
            "Link building campaigns",
            "Local SEO strategies",
            "Analytics and reporting",
            "Algorithm updates monitoring"
          ]
        }
      }
    },
    faq: [
      {
        q: "What is SEO and why is it important for businesses?",
        a: "Search Engine Optimization (SEO) is the practice of improving your website's visibility in search engine results to attract more organic traffic. It's crucial for businesses because it helps increase online visibility, drive qualified leads, build credibility, and provide long-term marketing benefits that traditional advertising can't match."
      },
      {
        q: "Will you perform an SEO audit on my website?",
        a: "Absolutely! We start every SEO project with a comprehensive audit that includes technical analysis, on-page optimization review, off-page factors assessment, competitor analysis, keyword opportunity identification, and prioritized recommendations for improvement."
      },
      {
        q: "How long does SEO take to work?",
        a: "SEO is a long-term investment. Initial improvements are typically visible in 3-6 months, with significant results appearing in 6-12 months. Unlike paid advertising, SEO provides sustainable growth and continues to deliver results long after the initial investment."
      },
      {
        q: "How much do SEO services cost?",
        a: "SEO costs vary based on your business size, competition level, and goals. We offer customized packages starting from basic optimization to comprehensive enterprise solutions. Contact us for a free consultation and personalized quote based on your specific needs."
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "While we can't guarantee specific rankings due to Google's ever-changing algorithms, we have a proven track record of helping clients achieve top rankings. We focus on sustainable, long-term SEO strategies that deliver measurable results and provide transparent reporting."
      },
      {
        q: "How do you stay updated with Google algorithm changes?",
        a: "We continuously monitor industry news, participate in SEO communities, conduct ongoing testing, and adapt our strategies based on the latest algorithm updates and best practices. Our team invests in ongoing education to ensure optimal results for our clients."
      },
      {
        q: "Do you work with all industries and niches?",
        a: "Yes, our SEO strategies are customized for different industries including e-commerce, healthcare, finance, legal, real estate, and more. We adapt our approach based on your specific industry requirements and target audience."
      },
      {
        q: "How is SEO different from PPC?",
        a: "SEO focuses on organic search results that provide long-term, sustainable traffic, while PPC (Pay-Per-Click) delivers immediate but temporary results through paid advertisements. SEO builds credibility and authority, while PPC provides instant visibility. Both are valuable parts of a comprehensive digital marketing strategy."
      },
      {
        q: "What's your approach to penalty recovery?",
        a: "If your site has been penalized, we conduct a thorough analysis to identify the cause, develop a recovery strategy, and implement fixes. We work closely with Google through reconsideration requests and monitor recovery progress with regular updates."
      }
    ],
    testimonials: {
      heading: "What Our SEO Clients Say",
      items: [
        {
          name: "Rahul Sharma",
          location: "Delhi, India",
          text: "AstraCognix transformed our online presence completely. Our organic traffic increased by 400% and we now rank on the first page for our main keywords. Their SEO expertise is unmatched.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Priya Mehta",
          location: "Mumbai, India",
          text: "Working with AstraCognix was a game-changer for our business. Their technical SEO audit identified critical issues we didn't know existed, and the results have been phenomenal.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Amit Kumar",
          location: "Bangalore, India",
          text: "The SEO strategy developed by AstraCognix helped us dominate our local market. Our leads increased significantly and our ROI on SEO investment has been excellent.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
      ]
    },
    mattersImage: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&w=1400&q=80",
    industries: {
      heading: "Industries We've Served",
      items: [
        { name: "Healthcare", icon: "fa-solid fa-heart-pulse" },
        { name: "Finance", icon: "fa-solid fa-money-bill-wave" },
        { name: "eCommerce", icon: "fa-solid fa-shopping-cart" },
        { name: "Education", icon: "fa-solid fa-graduation-cap" },
        { name: "Logistics", icon: "fa-solid fa-truck-fast" },
        { name: "Social Networking", icon: "fa-solid fa-users" },
        { name: "Games", icon: "fa-solid fa-gamepad" },
        { name: "Travel", icon: "fa-solid fa-plane" },
        { name: "Entertainment", icon: "fa-solid fa-film" },
        { name: "Real Estate", icon: "fa-solid fa-building" },
        { name: "SaaS", icon: "fa-solid fa-cloud" },
        { name: "News", icon: "fa-solid fa-newspaper" },
        { name: "Wellness", icon: "fa-solid fa-spa" },
        { name: "Aviation", icon: "fa-solid fa-plane-up" },
        { name: "E-scooter", icon: "fa-solid fa-person-biking" },
        { name: "Politics", icon: "fa-solid fa-landmark" },
        { name: "Agriculture", icon: "fa-solid fa-tractor" },
        { name: "Events", icon: "fa-solid fa-calendar-alt" },
        { name: "EV", icon: "fa-solid fa-car-battery" },
        { name: "Food", icon: "fa-solid fa-utensils" },
        { name: "Manufacturing", icon: "fa-solid fa-industry" },
        { name: "Media", icon: "fa-solid fa-tv" },
        { name: "Retail", icon: "fa-solid fa-store" }
      ]
    }
  },

  "content-marketing-services": {
    title: "Content Marketing Services",
    summary:
      "Create compelling content that attracts, engages, and converts your target audience. Our content marketing services combine strategic storytelling with data-driven insights to build brand authority, drive organic traffic, and nurture long-term customer relationships across all digital channels.",
    bullets: [
      "Strategic content creation and distribution",
      "SEO-optimized blog posts and articles",
      "Social media content and campaigns",
      "Video content production and marketing",
      "Email marketing content and newsletters",
      "Content performance analytics and optimization",
    ],
    highlight:
      "Content is the foundation of successful digital marketing. Our expert team creates high-quality, engaging content that resonates with your audience, improves search rankings, and drives meaningful business results. We don't just create content—we create connections that convert.",
    featureCards: [
      {
        title: "Strategic Content Creation",
        detail:
          "Develop comprehensive content strategies that align with your business goals and audience needs. We create compelling narratives that educate, entertain, and inspire your target customers.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "SEO Content Optimization",
        detail:
          "Create search-engine optimized content that ranks well and drives organic traffic. Our content marketing includes keyword research, on-page optimization, and technical SEO best practices.",
        image:
          "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Multi-Channel Distribution",
        detail:
          "Distribute your content across multiple channels including blogs, social media, email newsletters, and third-party platforms to maximize reach and engagement.",
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Content Performance Analytics",
        detail:
          "Track and analyze content performance with comprehensive analytics. We measure engagement, conversions, and ROI to optimize your content strategy for better results.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    services: {
      heading: "Content Marketing Services",
      items: [
        {
          title: "Blog Writing & Content Creation",
          detail:
            "Create engaging, SEO-optimized blog posts and articles that attract organic traffic and establish your authority. Our expert writers produce high-quality content that resonates with your audience and drives conversions.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Social Media Content",
          detail:
            "Develop compelling social media content including posts, graphics, videos, and stories. We create content calendars and strategies that boost engagement and grow your social media following.",
          image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Video Content Production",
          detail:
            "Produce professional video content for marketing purposes including explainer videos, product demos, testimonials, and social media videos. We handle scripting, production, and post-production.",
          image:
            "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Email Marketing Content",
          detail:
            "Create persuasive email marketing content including newsletters, promotional emails, and automated sequences. We craft compelling copy that drives opens, clicks, and conversions.",
          image:
            "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "White Papers & E-books",
          detail:
            "Develop in-depth white papers, e-books, and guides that showcase your expertise. These premium content pieces help with lead generation and establish your thought leadership position.",
          image:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Infographics & Visual Content",
          detail:
            "Design eye-catching infographics and visual content that simplifies complex information. Our visual content is optimized for sharing and performs exceptionally well on social media platforms.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Content Strategy & Consulting",
          detail:
            "Develop comprehensive content strategies that align with your business goals. We create content calendars, editorial guidelines, and measurement frameworks to ensure consistent, high-quality content output.",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Content Syndication & Distribution",
          detail:
            "Distribute your content across multiple channels and platforms to maximize reach. We identify the best distribution channels and manage the syndication process for optimal exposure.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    explainer: {
      heading: "Why Content Marketing Matters for Your Business",
      body:
        "Content marketing is the art and science of creating valuable, relevant content that attracts, engages, and retains a clearly defined audience. In today's digital landscape, content is the currency of trust and authority. Effective content marketing builds long-term relationships with customers, improves search engine rankings, and drives sustainable business growth.",
      image: "/content.png",
      quadrants: {
        automation: {
          title: "Content Creation & Strategy",
          items: [
            "Audience research and persona development",
            "Content strategy and calendar planning",
            "Keyword research and topic clustering",
            "Content creation and optimization",
            "Editorial guidelines and brand voice",
            "Content performance monitoring"
          ]
        },
        intelligence: {
          title: "Distribution & Promotion",
          items: [
            "Multi-channel content distribution",
            "Social media promotion and engagement",
            "Email marketing and newsletters",
            "SEO and search engine optimization",
            "Influencer partnerships and PR",
            "Paid content promotion"
          ]
        }
      }
    },
    faq: [
      {
        q: "What makes content effective for marketing purposes?",
        a: "Effective content marketing is tailored to your target audience, provides genuine value, creates engagement, and aligns with your overall marketing strategy. It should educate, entertain, or solve problems for your audience while subtly promoting your brand."
      },
      {
        q: "What's the cost of content marketing services?",
        a: "Content marketing costs vary based on scope, complexity, and volume. Basic blog writing starts from $50-$200 per article, while comprehensive content strategies can range from $2,000-$50,000+ depending on the scale and requirements."
      },
      {
        q: "What is included in content marketing services?",
        a: "Our content marketing services include strategy development, content creation (blogs, social posts, videos, emails), SEO optimization, multi-channel distribution, performance analytics, and ongoing optimization to ensure maximum ROI."
      },
      {
        q: "How can I measure the success of my marketing content?",
        a: "Content success is measured through various KPIs including website traffic, engagement metrics (likes, shares, comments), conversion rates, time on page, bounce rate, lead generation, and ultimately, ROI and revenue attribution."
      },
      {
        q: "Why choose AstraCognix for content marketing services?",
        a: "We combine creative storytelling with data-driven strategies, ensuring your content not only engages audiences but also drives measurable business results. Our experienced team delivers high-quality, conversion-focused content that builds brand authority."
      },
      {
        q: "How long does content marketing take to show results?",
        a: "Content marketing is a long-term strategy. Initial results can be seen in 3-6 months with consistent publishing, but significant impact typically appears after 6-12 months of strategic content creation and distribution."
      }
    ],
    testimonials: {
      heading: "What Our Content Marketing Clients Say",
      items: [
        {
          name: "Priya Sharma",
          location: "Mumbai, India",
          text: "AstraCognix transformed our content strategy completely. Their engaging blog posts and social media content increased our website traffic by 200% and established us as thought leaders in our industry.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Rajesh Gupta",
          location: "Delhi, India",
          text: "The video content and infographics created by AstraCognix have been game-changers for our brand awareness. Their creative approach and attention to detail resulted in exceptional engagement rates.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Kavita Singh",
          location: "Bangalore, India",
          text: "Working with AstraCognix for our content marketing was a fantastic experience. Their strategic approach and quality content helped us generate 150% more qualified leads.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
      ]
    },
    mattersImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    techStack: {
      heading: "Tech Stack We Use",
      technologies: [
        { name: "React", icon: "fa-brands fa-react", category: "Frontend" },
        { name: "TypeScript", icon: "fa-brands fa-js", category: "Frontend" },
        { name: "HTML5", icon: "fa-brands fa-html5", category: "Frontend" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt", category: "Frontend" },
        { name: "JavaScript", icon: "fa-brands fa-js", category: "Frontend" },
        { name: "Tailwind CSS", icon: "fa-solid fa-wind", category: "Frontend" },
        { name: "Node.js", icon: "fa-brands fa-node-js", category: "Backend" },
        { name: "Python", icon: "fa-brands fa-python", category: "Backend" },
        { name: "PHP", icon: "fa-brands fa-php", category: "Backend" },
        { name: "Express.js", icon: "fa-brands fa-node-js", category: "Framework" },
        { name: "Django", icon: "fa-brands fa-python", category: "Framework" },
        { name: "Laravel", icon: "fa-brands fa-laravel", category: "Framework" },
        { name: "Docker", icon: "fa-brands fa-docker", category: "DevOps" },
        { name: "Kubernetes", icon: "fa-solid fa-cubes", category: "DevOps" },
        { name: "AWS", icon: "fa-brands fa-aws", category: "Cloud" },
        { name: "MongoDB", icon: "fa-solid fa-database", category: "Database" },
        { name: "MySQL", icon: "fa-solid fa-server", category: "Database" },
        { name: "PostgreSQL", icon: "fa-solid fa-database", category: "Database" }
      ]
    },
    industries: {
      heading: "Industries We've Worked",
      items: [
        { name: "Healthcare", icon: "fa-solid fa-heart-pulse" },
        { name: "Finance", icon: "fa-solid fa-money-bill-wave" },
        { name: "eCommerce", icon: "fa-solid fa-shopping-cart" },
        { name: "Education", icon: "fa-solid fa-graduation-cap" },
        { name: "Logistics", icon: "fa-solid fa-truck-fast" },
        { name: "Social Networking", icon: "fa-solid fa-users" },
        { name: "Games", icon: "fa-solid fa-gamepad" },
        { name: "Travel", icon: "fa-solid fa-plane" },
        { name: "Entertainment", icon: "fa-solid fa-film" },
        { name: "Real Estate", icon: "fa-solid fa-building" },
        { name: "SaaS", icon: "fa-solid fa-cloud" },
        { name: "News", icon: "fa-solid fa-newspaper" },
        { name: "Wellness", icon: "fa-solid fa-spa" },
        { name: "Aviation", icon: "fa-solid fa-plane-up" },
        { name: "E-scooter", icon: "fa-solid fa-person-biking" },
        { name: "Politics", icon: "fa-solid fa-landmark" },
        { name: "Agriculture", icon: "fa-solid fa-tractor" },
        { name: "Events", icon: "fa-solid fa-calendar-alt" },
        { name: "EV", icon: "fa-solid fa-car-battery" },
        { name: "Food", icon: "fa-solid fa-utensils" },
        { name: "Manufacturing", icon: "fa-solid fa-industry" },
        { name: "Media", icon: "fa-solid fa-tv" },
        { name: "Retail", icon: "fa-solid fa-store" }
      ]
    }
  },

  "social-media-marketing": {
    title: "Social Media Marketing",
    summary:
      "Elevate your social media channels with innovative and engaging solutions. Our social media marketing services help you build brand awareness, engage your audience, and drive conversions across all major social platforms. From strategy development to content creation and community management, we deliver comprehensive social media solutions that grow your business.",
    bullets: [
      "Social media strategy and content planning",
      "Multi-platform content creation and scheduling",
      "Community management and engagement",
      "Paid social media advertising campaigns",
      "Social media analytics and performance tracking",
      "Influencer marketing and brand partnerships",
    ],
    highlight:
      "Social media is more than just posting content—it's about building meaningful connections with your audience. Our data-driven approach combines creative content with strategic targeting to maximize engagement, grow your following, and drive measurable business results across all social platforms.",
    featureCards: [
      {
        title: "Strategic Social Planning",
        detail:
          "Develop comprehensive social media strategies tailored to your business goals and target audience. We create detailed content calendars, platform-specific approaches, and measurable objectives to ensure consistent growth and engagement.",
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Content Creation & Curation",
        detail:
          "Create engaging, brand-consistent content that resonates with your audience. From eye-catching graphics and videos to compelling copy and stories, we produce content that drives engagement and builds community.",
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Community Management",
        detail:
          "Build and nurture engaged communities across social platforms. We handle customer interactions, monitor brand mentions, and foster positive relationships that strengthen your brand loyalty and advocacy.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Paid Advertising Campaigns",
        detail:
          "Maximize your social media ROI with expertly managed paid campaigns. We optimize targeting, creative, and bidding strategies to reach the right audience at the right time with compelling advertisements.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    services: {
      heading: "Social Media Marketing Services",
      items: [
        {
          title: "Facebook Marketing",
          detail:
            "Dominate Facebook with targeted campaigns, engaging content, and community building. We optimize your Facebook presence for maximum reach, engagement, and conversions through strategic posting and advertising.",
          image:
            "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
        },
        {
          title: "Instagram Marketing",
          detail:
            "Build visual brand stories on Instagram with stunning visuals, Stories, Reels, and IGTV content. We create engaging content strategies that drive followers, engagement, and business growth.",
          image:
            "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "LinkedIn Marketing",
          detail:
            "Establish B2B authority on LinkedIn with professional content, thought leadership, and networking. We help businesses connect with decision-makers, share industry insights, and generate qualified leads.",
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Twitter/X Marketing",
          detail:
            "Build real-time conversations and brand awareness on Twitter/X. We create engaging content, manage customer interactions, and run targeted campaigns to increase visibility and engagement.",
          image:
            "https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png",
        },
        
        {
          title: "YouTube Marketing",
          detail:
            "Build video content authority on YouTube with educational, entertaining, and promotional videos. We optimize channels, create SEO-friendly content, and grow subscriber bases organically and through advertising.",
          image:
            "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Social Media Advertising",
          detail:
            "Run targeted paid campaigns across all social platforms. We optimize ad spend, creative content, and audience targeting to maximize ROI and drive qualified traffic to your website or landing pages.",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        },
        {
          title: "Influencer Marketing",
          detail:
            "Partner with influencers to expand your reach and credibility. We identify relevant influencers, manage partnerships, and track campaign performance to ensure authentic engagement with your target audience.",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    explainer: {
      heading: "Why Social Media Marketing Matters for Your Business",
      body:
        "Social media has become the primary way consumers discover, research, and engage with brands. Effective social media marketing builds trust, increases brand awareness, drives website traffic, and creates lasting customer relationships. In today's digital landscape, businesses that master social media gain a significant competitive advantage.",
      image: "/social media.png",
      quadrants: {
        automation: {
          title: "Strategy & Planning",
          items: [
            "Platform selection and audience analysis",
            "Content strategy and calendar planning",
            "Competitor analysis and benchmarking",
            "Budget allocation and ROI tracking",
            "Brand voice and visual identity",
            "Performance goals and KPIs"
          ]
        },
        intelligence: {
          title: "Execution & Growth",
          items: [
            "Content creation and curation",
            "Community engagement and management",
            "Paid advertising campaign management",
            "Influencer partnership coordination",
            "Analytics and performance monitoring",
            "Continuous optimization and testing"
          ]
        }
      }
    },
    faq: [
      {
        q: "What is social media management?",
        a: "Social media management involves creating, scheduling, analyzing, and engaging with content across social media platforms to build brand awareness, engage audiences, and drive business goals. It includes content creation, community management, advertising, and performance tracking."
      },
      {
        q: "Which social media platforms should my business use?",
        a: "The best platforms depend on your target audience and business goals. Facebook and Instagram work well for most businesses, LinkedIn is ideal for B2B, Twitter for real-time engagement, TikTok for younger audiences, and YouTube for educational content. We help you choose the right mix."
      },
      {
        q: "How much should I spend on social media marketing?",
        a: "Social media marketing costs vary based on your goals, target audience, and competition. Organic content creation starts at $500-$2,000/month, while comprehensive management with advertising can range from $2,000-$10,000+/month. We provide customized recommendations based on your budget and objectives."
      },
      {
        q: "What's involved in social media lead generation?",
        a: "Social media lead generation involves creating valuable content that attracts potential customers, using targeted advertising to reach qualified prospects, and implementing conversion-focused strategies like lead magnets, landing pages, and retargeting campaigns to turn social media engagement into qualified leads."
      },
      {
        q: "How do you measure social media marketing success?",
        a: "We track key metrics including reach, engagement, follower growth, website traffic from social media, lead generation, conversion rates, and ROI. We provide detailed monthly reports with insights and recommendations for optimization."
      },
      {
        q: "Can you manage my existing social media accounts?",
        a: "Absolutely! We can audit your current social media presence, develop improvement strategies, and take over management while maintaining your brand voice and existing community relationships."
      }
    ],
    testimonials: {
      heading: "What Our Social Media Marketing Clients Say",
      items: [
        {
          name: "Sneha Kapoor",
          location: "Mumbai, India",
          text: "AstraCognix transformed our social media presence completely. Our engagement rates increased by 300% and we gained over 50,000 new followers in just 6 months. Their creative content and strategic approach are outstanding.",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Raj Singh",
          location: "Delhi, India",
          text: "The social media marketing campaign by AstraCognix helped us dominate our niche. Their influencer partnerships and targeted advertising delivered exceptional ROI and brand visibility.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
        },
        {
          name: "Priya Sharma",
          location: "Bangalore, India",
          text: "Working with AstraCognix for social media management was a game-changer. Their community engagement strategies and content quality helped us build a loyal following and increase conversions significantly.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
        }
      ]
    },
    mattersImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1400&q=80",
    techStack: {
      heading: "Tech Stack We Use",
      technologies: [
        { name: "React", icon: "fa-brands fa-react", category: "Frontend" },
        { name: "TypeScript", icon: "fa-brands fa-js", category: "Frontend" },
        { name: "HTML5", icon: "fa-brands fa-html5", category: "Frontend" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt", category: "Frontend" },
        { name: "JavaScript", icon: "fa-brands fa-js", category: "Frontend" },
        { name: "Tailwind CSS", icon: "fa-solid fa-wind", category: "Frontend" },
        { name: "Node.js", icon: "fa-brands fa-node-js", category: "Backend" },
        { name: "Python", icon: "fa-brands fa-python", category: "Backend" },
        { name: "PHP", icon: "fa-brands fa-php", category: "Backend" },
        { name: "Express.js", icon: "fa-brands fa-node-js", category: "Framework" },
        { name: "Django", icon: "fa-brands fa-python", category: "Framework" },
        { name: "Laravel", icon: "fa-brands fa-laravel", category: "Framework" },
        { name: "Docker", icon: "fa-brands fa-docker", category: "DevOps" },
        { name: "Kubernetes", icon: "fa-solid fa-cubes", category: "DevOps" },
        { name: "AWS", icon: "fa-brands fa-aws", category: "Cloud" },
        { name: "MongoDB", icon: "fa-solid fa-database", category: "Database" },
        { name: "MySQL", icon: "fa-solid fa-server", category: "Database" },
        { name: "PostgreSQL", icon: "fa-solid fa-database", category: "Database" }
      ]
    },
    industries: {
      heading: "Industries We've Worked",
      items: [
        { name: "Healthcare", icon: "fa-solid fa-heart-pulse" },
        { name: "Finance", icon: "fa-solid fa-money-bill-wave" },
        { name: "eCommerce", icon: "fa-solid fa-shopping-cart" },
        { name: "Education", icon: "fa-solid fa-graduation-cap" },
        { name: "Logistics", icon: "fa-solid fa-truck-fast" },
        { name: "Social Networking", icon: "fa-solid fa-users" },
        { name: "Games", icon: "fa-solid fa-gamepad" },
        { name: "Travel", icon: "fa-solid fa-plane" },
        { name: "Entertainment", icon: "fa-solid fa-film" },
        { name: "Real Estate", icon: "fa-solid fa-building" },
        { name: "SaaS", icon: "fa-solid fa-cloud" },
        { name: "News", icon: "fa-solid fa-newspaper" },
        { name: "Wellness", icon: "fa-solid fa-spa" },
        { name: "Aviation", icon: "fa-solid fa-plane-up" },
        { name: "E-scooter", icon: "fa-solid fa-person-biking" },
        { name: "Politics", icon: "fa-solid fa-landmark" },
        { name: "Agriculture", icon: "fa-solid fa-tractor" },
        { name: "Events", icon: "fa-solid fa-calendar-alt" },
        { name: "EV", icon: "fa-solid fa-car-battery" },
        { name: "Food", icon: "fa-solid fa-utensils" },
        { name: "Manufacturing", icon: "fa-solid fa-industry" },
        { name: "Media", icon: "fa-solid fa-tv" },
        { name: "Retail", icon: "fa-solid fa-store" }
      ]
    }
  },

  // "ionic-app-development": {
  //   title: "Ionic App Development Company",
  //   summary:
  //     "Professional Ionic app development for cross-platform mobile applications. Build high-performance mobile apps using web technologies (HTML, CSS, JavaScript) that work seamlessly across iOS and Android with a single codebase.",
  //   bullets: [
  //     "Cross-platform development with web technologies",
  //     "Single codebase for iOS and Android",
  //     "Access to native device features via Capacitor",
  //     "Familiar web development stack (HTML, CSS, JS)",
  //   ],
  //   highlight: "Ionic enables web developers to build mobile apps using familiar technologies. Our Ionic apps deliver native-like experiences, access to device features, and consistent performance across iOS and Android platforms.",
  //   featureCards: [
  //     { 
  //       title: "Web Technologies", 
  //       detail: "Build mobile apps using HTML, CSS, and JavaScript/TypeScript. Leverage your existing web development skills and frameworks like React, Angular, or Vue.",
  //       image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
  //     },
  //     { 
  //       title: "Native Features", 
  //       detail: "Access native device features through Capacitor plugins. Camera, GPS, push notifications, and more are easily accessible from your web-based app.",
  //       image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=800&q=80"
  //     },
  //     { 
  //       title: "UI Components", 
  //       detail: "Rich library of pre-built UI components that adapt to iOS and Android design guidelines. Create beautiful, platform-appropriate interfaces with minimal effort.",
  //       image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
  //     },
  //     { 
  //       title: "Cost Effective", 
  //       detail: "Significantly lower development costs compared to native development. One codebase, multiple platforms, faster time-to-market, and easier maintenance.",
  //       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  //     },
  //   ],
  //   process: {
  //     heading: "Ionic App Development Process",
  //     steps: [
  //       {
  //         title: "Framework Selection",
  //         detail: "Choose the right framework (React, Angular, or Vue) and set up the Ionic project. Plan the architecture and select appropriate plugins for native features.",
  //         image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "Design & Development",
  //         detail: "Create responsive designs using Ionic components. Develop the app with web technologies while ensuring it looks and feels native on both platforms.",
  //         image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "Native Integration",
  //         detail: "Integrate native features using Capacitor plugins. Test on real devices to ensure proper functionality across iOS and Android platforms.",
  //         image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "Build & Deploy",
  //         detail: "Build native apps for iOS and Android. Handle platform-specific configurations and submit to App Store and Play Store with optimized listings.",
  //         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  //       }
  //     ]
  //   },
  //   faq: [
  //     {
  //       q: "What frameworks can I use with Ionic?",
  //       a: "Ionic works with React, Angular, and Vue.js. You can choose the framework you're most comfortable with. We typically use React or Angular based on project requirements."
  //     },
  //     {
  //       q: "How does Ionic compare to native app development?",
  //       a: "Ionic apps are web-based but wrapped in a native container. They offer faster development, lower costs, and easier maintenance, while still providing access to native device features through Capacitor."
  //     },
  //     {
  //       q: "Can Ionic apps access native device features?",
  //       a: "Yes, through Capacitor plugins. We can access camera, GPS, push notifications, file system, and other native features. Custom native plugins can also be created if needed."
  //     },
  //     {
  //       q: "What's the performance like for Ionic apps?",
  //       a: "Ionic apps perform well for most use cases. They use native WebView rendering, which provides smooth animations and interactions. For highly performance-critical apps, we may recommend native development."
  //     },
  //     {
  //       q: "How long does Ionic app development take?",
  //       a: "Ionic development is typically faster than native development since you're building one codebase for multiple platforms. A typical app takes 2-3 months, depending on complexity and features."
  //     },
  //     {
  //       q: "Can you convert an existing web app to Ionic?",
  //       a: "Yes, if your web app is built with React, Angular, or Vue, we can convert it to an Ionic mobile app relatively easily, adding native features and optimizing for mobile platforms."
  //     }
  //   ],
  //   mattersImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80",
  // },

  // "react-native-app-development": {
  //   title: "React Native App Development Company",
  //   summary:
  //     "Expert React Native development for cross-platform mobile applications. Build native iOS and Android apps using React and JavaScript, sharing code while maintaining native performance and access to platform-specific features.",
  //   bullets: [
  //     "Cross-platform development with React and JavaScript",
  //     "Native performance with JavaScript bridge optimization",
  //     "Code sharing between iOS and Android",
  //     "Access to native modules and APIs",
  //   ],
  //   highlight: "React Native combines the best of both worlds: the development speed of web technologies and the performance of native apps. Our React Native apps deliver native-like experiences with shared code, reducing development time and costs.",
  //   featureCards: [
  //     { 
  //       title: "React Ecosystem", 
  //       detail: "Leverage React's component-based architecture and vast ecosystem. Use familiar React patterns, hooks, and libraries to build mobile apps efficiently.",
  //       image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
  //     },
  //     { 
  //       title: "Native Performance", 
  //       detail: "React Native compiles to native code, ensuring true native performance. Critical paths can use native modules for maximum performance when needed.",
  //       image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  //     },
  //     { 
  //       title: "Code Reusability", 
  //       detail: "Share up to 90% of code between iOS and Android. Write once, deploy to both platforms, significantly reducing development and maintenance costs.",
  //       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  //     },
  //     { 
  //       title: "Native Modules", 
  //       detail: "Access native device features and APIs through native modules. We can create custom native modules or use existing ones from the React Native community.",
  //       image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=800&q=80"
  //     },
  //   ],
  //   process: {
  //     heading: "React Native App Development Process",
  //     steps: [
  //       {
  //         title: "Project Setup",
  //         detail: "Set up React Native project with proper architecture and state management (Redux, Context API, or MobX). Plan navigation, API integration, and project structure.",
  //         image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "UI Development",
  //         detail: "Build responsive UI using React Native components and third-party libraries. Create platform-specific designs when needed while maximizing code sharing.",
  //         image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "Native Integration",
  //         detail: "Integrate native modules for device features, optimize performance, and test on both iOS and Android. Ensure smooth animations and native feel.",
  //         image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "Build & Launch",
  //         detail: "Build native binaries for iOS and Android. Handle platform-specific configurations, App Store and Play Store submissions, and launch support.",
  //         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  //       }
  //     ]
  //   },
  //   faq: [
  //     {
  //       q: "What's the difference between React Native and native development?",
  //       a: "React Native uses JavaScript and React to build mobile apps, sharing code between iOS and Android. Native development uses platform-specific languages (Swift/Kotlin) but requires separate codebases. React Native offers faster development and code sharing while maintaining native performance."
  //     },
  //     {
  //       q: "Can React Native apps access native device features?",
  //       a: "Yes, React Native provides access to native APIs through native modules. We can use existing modules from the community or create custom native modules for specific requirements."
  //     },
  //     {
  //       q: "How much code can be shared between iOS and Android?",
  //       a: "Typically 80-90% of code can be shared. Platform-specific code is only needed for native features, platform-specific UI components, or performance-critical sections."
  //     },
  //     {
  //       q: "What state management do you use with React Native?",
  //       a: "We use Redux, Context API, MobX, or Zustand based on project complexity. For simpler apps, Context API is sufficient, while complex apps benefit from Redux or MobX."
  //     },
  //     {
  //       q: "How long does React Native app development take?",
  //       a: "React Native development is typically 30-40% faster than building separate native apps. A typical app takes 2-4 months, depending on complexity and features."
  //     },
  //     {
  //       q: "Can you migrate an existing React web app to React Native?",
  //       a: "Yes, if your web app uses React, we can migrate significant portions of the code to React Native. Business logic, API calls, and state management can often be reused with minimal changes."
  //     }
  //   ],
    mattersImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1400&q=80"
  }

  const serviceData = {
    "crm-erp-solutions": {
      title: "CRM & ERP Solutions",
      summary: "Placeholder content for CRM service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "system-integration": {
    title: "System Integration",
    summary: "Placeholder content for system integration service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "software-consulting": {
    title: "Software Consulting",
    summary: "Placeholder content for software consulting service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "fleet-management": {
    title: "Fleet Management",
    summary: "Placeholder content for fleet management service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "custom-crm-development": {
    title: "Custom CRM Development",
    summary: "Placeholder content for custom CRM development service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "custom-software-development": {
    title: "Custom Software Development",
    summary: "Placeholder content for custom software development service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "real-time-tracking": {
    title: "Real-time Tracking",
    summary: "Placeholder content for real-time tracking service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    summary: "Placeholder content for mobile app development service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "android-app-development": {
    title: "Android App Development",
    summary: "Placeholder content for Android app development service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "ios-app-development": {
    title: "iOS App Development",
    summary: "Placeholder content for iOS app development service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "flutter-app-development": {
    title: "Flutter App Development",
    summary: "Placeholder content for Flutter app development service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "angularjs-development": {
    title: "AngularJS Development",
    summary: "Placeholder content for AngularJS development service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  "web-development-company": {
    title: "Web Development Company",
    summary: "Placeholder content for web development company service",
    bullets: ["Feature 1", "Feature 2"],
    highlight: "Placeholder highlight"
  },
  // "saas-application-development": {
  //   title: "SaaS Application Development",
  //   summary: "Transform your business with scalable, cloud-based SaaS solutions. Our expert team delivers secure, feature-rich SaaS applications that drive growth and enhance user experiences. From consulting to platform migration, we ensure your SaaS solution stands out in the competitive market.",
  //   bullets: [
  //     "Multi-tenant architecture design and implementation",
  //     "Scalable cloud infrastructure and deployment strategies",
  //     "Advanced security protocols and data protection",
  //     "Seamless integration with third-party services and APIs",
  //     "User-friendly interface design and intuitive UX",
  //     "Automated billing, subscription management, and analytics",
  //   ],
  //   highlight: "Build robust SaaS applications that scale with your business. Our comprehensive approach covers everything from initial consulting to ongoing maintenance, ensuring your SaaS platform delivers exceptional value to your customers.",
  //   featureCards: [
  //     { title: "Multi-Tenant Architecture", detail: "Efficiently manage multiple customers with isolated data and scalable resources." },
  //     { title: "Cloud-Native Solutions", detail: "Leverage AWS, Azure, or Google Cloud for reliable, scalable infrastructure." },
  //     { title: "Advanced Security", detail: "Implement enterprise-grade security with encryption, SSO, and compliance." },
  //     { title: "Automated Billing", detail: "Streamlined subscription management with recurring billing and payment processing." },
  //     { title: "Real-Time Analytics", detail: "Comprehensive dashboards and insights for user behavior and business metrics." },
  //     { title: "API-First Design", detail: "Build flexible platforms with robust APIs for seamless integrations." },
  //   ],
  //   services: {
  //     heading: "SaaS Application Development Services",
  //     items: [
  //       {
  //         title: "SaaS Consulting Services",
  //         detail: "Strategic guidance for your SaaS journey. We analyze market trends, define your business model, and create a roadmap for successful SaaS implementation. Our experts help you identify the right technology stack, pricing strategy, and go-to-market approach.",
  //         image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "UI/UX SaaS Design",
  //         detail: "Create intuitive, engaging user interfaces that drive adoption and retention. Our design team focuses on user-centered design principles, ensuring your SaaS application provides exceptional user experiences across all devices and platforms.",
  //         image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "SaaS Platform Migration",
  //         detail: "Seamlessly migrate your existing applications to the cloud. We handle data migration, system integration, and performance optimization to ensure minimal downtime and maximum efficiency during the transition to a SaaS model.",
  //         image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "SaaS Security Services",
  //         detail: "Protect your SaaS application and user data with comprehensive security measures. We implement advanced security protocols, regular audits, compliance frameworks, and incident response strategies to safeguard your platform.",
  //         image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  //       }
  //     ]
  //   },
  //   explainer: {
  //     heading: "What is SaaS Application Development?",
  //     body:
  //       "SaaS (Software as a Service) applications are cloud-based software solutions that users can access via the internet without installation. These applications are hosted on remote servers and delivered through web browsers or APIs. SaaS development involves creating scalable, multi-tenant applications that serve multiple customers simultaneously while maintaining data isolation and security.",

  //     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  //     quadrants: {
  //       automation: {
  //         title: "Scalability & Performance",
  //         items: [
  //           "Auto-scaling infrastructure",
  //           "Load balancing and optimization",
  //           "Database performance tuning",
  //           "Caching strategies"
  //         ]
  //       },
  //       intelligence: {
  //         title: "Security & Compliance",
  //         items: [
  //           "Data encryption and privacy",
  //           "Multi-tenant security",
  //           "Regulatory compliance (GDPR, HIPAA)",
  //           "Regular security audits"
  //         ]
  //       }
  //     }
  //   },
  //   mattersImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  //   benefits: [
  //     {
  //       title: "Scalable Architecture",
  //       detail: "Multi-tenant design that grows with your business and user base."
  //     },
  //     {
  //       title: "Cost Efficiency",
  //       detail: "Reduced infrastructure costs with cloud-based deployment and maintenance."
  //     },
  //     {
  //       title: "Automatic Updates",
  //       detail: "Seamless updates and new features without user intervention."
  //     },
  //     {
  //       title: "Global Accessibility",
  //       detail: "Access your application from anywhere with an internet connection."
  //     },
  //     {
  //       title: "Enhanced Security",
  //       detail: "Enterprise-grade security measures and regular compliance audits."
  //     },
  //     {
  //       title: "Faster Time-to-Market",
  //       detail: "Rapid development and deployment cycles for quick business value."
  //     }
  //   ],
  //   commitment: {
  //     heading: "Leading SaaS Application Development Company",
  //     description: "With years of experience in cloud computing and SaaS development, AstraCognix Solutions delivers cutting-edge SaaS applications that drive business growth. Our team combines technical expertise with business acumen to create solutions that not only meet current needs but also scale for future growth.",
  //     image: "/SaaS.png",
  //     features: [
  //       {
  //         title: "Cloud Expertise",
  //         detail: "Deep knowledge of AWS, Azure, and Google Cloud platforms for optimal SaaS deployment."
  //       },
  //       {
  //         title: "Security First Approach",
  //         detail: "Comprehensive security measures ensuring data protection and regulatory compliance."
  //       },
  //       {
  //         title: "Agile Development",
  //         detail: "Iterative development process with continuous integration and deployment."
  //       },
  //       {
  //         title: "24/7 Support",
  //         detail: "Round-the-clock monitoring and support for your SaaS applications."
  //       },
  //       {
  //         title: "Scalability Focus",
  //         detail: "Architecture designed to handle rapid user growth and increased demand."
  //       },
  //       {
  //         title: "Integration Capabilities",
  //         detail: "Seamless integration with existing systems and third-party services."
  //       },
  //       {
  //         title: "Performance Optimization",
  //         detail: "Continuous monitoring and optimization for peak application performance."
  //       },
  //       {
  //         title: "User-Centric Design",
  //         detail: "Focus on user experience and adoption through intuitive design and features."
  //       }
  //     ]
  //   },
  //   whyWorkWith: {
  //     heading: "Why Choose AstraCognix for SaaS Development",
  //     description: "Partner with a team that understands the unique challenges of SaaS development. From multi-tenant architecture to subscription management, we provide end-to-end solutions that ensure your SaaS platform's success in the competitive market.",
  //     items: [
  //       {
  //         title: "SaaS Specialists",
  //         detail: "Dedicated team with extensive experience in SaaS application development and cloud technologies.",
  //         image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "Full-Stack Expertise",
  //         detail: "Complete development capabilities from frontend UI/UX to backend infrastructure and DevOps.",
  //         image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "Cloud-Native Solutions",
  //         detail: "Expertise in major cloud platforms ensuring optimal performance, security, and cost-efficiency.",
  //         image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  //       },
  //       {
  //         title: "Ongoing Support",
  //         detail: "Continuous maintenance, updates, and support to keep your SaaS platform running smoothly.",
  //         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  //       }
  //     ]
  //   },
  //   industries: {
  //     heading: "Industries We Serve with SaaS Solutions",
  //     items: [
  //       {
  //         name: "Healthcare",
  //         icon: "fa-solid fa-heart-pulse",
  //       },
  //       {
  //         name: "Finance",
  //         icon: "fa-solid fa-coins",
  //       },
  //       {
  //         name: "Education",
  //         icon: "fa-solid fa-graduation-cap",
  //       },
  //       {
  //         name: "Retail",
  //         icon: "fa-solid fa-store",
  //       },
  //       {
  //         name: "HR & Recruitment",
  //         icon: "fa-solid fa-users",
  //       },
  //       {
  //         name: "Real Estate",
  //         icon: "fa-solid fa-building",
  //       },
  //       {
  //         name: "Manufacturing",
  //         icon: "fa-solid fa-industry",
  //       },
  //       {
  //         name: "Legal Services",
  //         icon: "fa-solid fa-scale-balanced",
  //       },
  //       {
  //         name: "Marketing",
  //         icon: "fa-solid fa-bullhorn",
  //       },
  //       {
  //         name: "Logistics",
  //         icon: "fa-solid fa-truck-fast",
  //       },
  //       {
  //         name: "SaaS",
  //         icon: "fa-solid fa-cloud",
  //       },
  //       {
  //         name: "Non-Profit",
  //         icon: "fa-solid fa-hand-holding-heart",
  //       }
  //     ]
  //   },
  //   faq: [
  //     {
  //       q: "What is the typical timeline for SaaS application development?",
  //       a: "The timeline varies based on complexity, but most SaaS applications take 4-12 months from concept to launch. This includes planning, development, testing, and deployment phases."
  //     },
  //     {
  //       q: "How do you ensure scalability in SaaS applications?",
  //       a: "We use microservices architecture, auto-scaling cloud infrastructure, efficient database design, and performance monitoring to ensure your application can handle growing user bases and increased demand."
  //     },
  //     {
  //       q: "What security measures do you implement for SaaS applications?",
  //       a: "We implement multi-layered security including data encryption, secure authentication, regular security audits, compliance with standards like SOC 2 and GDPR, and incident response protocols."
  //     },
  //     {
  //       q: "Can you help with SaaS pricing strategy and monetization?",
  //       a: "Yes, we provide consulting on pricing models, subscription tiers, freemium strategies, and billing system implementation to optimize your revenue streams."
  //     },
  //     {
  //       q: "Do you provide ongoing maintenance and support for SaaS applications?",
  //       a: "Absolutely. We offer comprehensive maintenance packages including bug fixes, feature updates, security patches, performance monitoring, and 24/7 technical support."
  //     }
  //   ],
  //   testimonials: {
  //     heading: "What Our SaaS Clients Say",
  //     items: [
  //       {
  //         name: "Rajesh Kumar",
  //         location: "Delhi, India",
  //         text: "AstraCognix transformed our business with a robust SaaS platform. The multi-tenant architecture and scalability features exceeded our expectations.",
  //         image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  //       },
  //       {
  //         name: "Priya Sharma",
  //         location: "Mumbai, India",
  //         text: "The SaaS application developed by AstraCognix has significantly improved our operational efficiency. Their cloud expertise and security focus are outstanding.",
  //         image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  //       },
  //       {
  //         name: "Amit Patel",
  //         location: "Ahmedabad, India",
  //         text: "Working with AstraCognix was a game-changer for our SaaS startup. Their team's technical expertise and business understanding helped us launch successfully.",
  //         image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  //       }
  //     ]
  //   }
  // }
};
function ServiceSubPage() {
  const { slug } = useParams();
  const detail = serviceDetails[slug];

  if (!detail) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Service not found</h1>
        <p className="mt-3 text-slate-600">The service you’re looking for is unavailable.</p>
        <Link to="/" className="mt-4 rounded-full bg-primary px-5 py-2 text-white">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900 pt-20 md:pt-24">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Services</p>
          <h1 className="mt-3 flex items-center gap-3 text-4xl font-bold md:text-5xl">
            {slug === "angularjs-development" && (
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                <FaCode className="text-2xl" />
              </span>
            )}
            <span>{detail.title}</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-200">{detail.summary}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href={`https://wa.me/6202808498?text=Hello%2C%20I%27d%20like%20to%20contact%20you%20about%20your%20${detail.title}%20services`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative rounded-full bg-primary px-5 py-3 text-white shadow-md transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95"
              onClick={(e) => {
                // Error handling: Check if WhatsApp link is valid
                try {
                  const url = new URL(e.currentTarget.href);
                  if (!url.href.includes('wa.me')) {
                    console.error('Invalid WhatsApp URL');
                    e.preventDefault();
                    alert('Unable to open WhatsApp. Please contact us directly.');
                  }
                } catch (error) {
                  console.error('Error opening WhatsApp:', error);
                  e.preventDefault();
                  alert('Unable to open WhatsApp. Please contact us directly.');
                }
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact US
                <svg 
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-slate-900">What we deliver</h2>
              <p className="mt-3 text-slate-700">
                We tailor engagement models to your roadmap—covering discovery, design, engineering, QA, and launch.
              </p>
              {detail.bullets && Array.isArray(detail.bullets) && (
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {detail.bullets.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              )}
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card transition-all duration-300 hover:shadow-xl hover:border-primary/20"
            >
              {detail.image && (
                <div className="h-56 w-full md:h-72 overflow-hidden bg-white">
                  <motion.img
                    src={detail.image}
                    alt={detail.title}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">Engagement snapshot</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>Discovery & estimation</li>
                  <li>Design & prototyping</li>
                  <li>Agile delivery with demos</li>
                  <li>QA automation & UAT</li>
                  <li>Launch & hypercare</li>
                  <li>Monitoring & optimization</li>
                </ul>
                <a
                  href={`https://wa.me/6202808498?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20call%20about%20your%20${detail.title}%20services`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative mt-4 block rounded-full bg-primary px-4 py-3 text-center text-white shadow-md transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95"
                  onClick={(e) => {
                    // Error handling: Check if WhatsApp link is valid
                    try {
                      const url = new URL(e.currentTarget.href);
                      if (!url.href.includes('wa.me')) {
                        console.error('Invalid WhatsApp URL');
                        e.preventDefault();
                        alert('Unable to open WhatsApp. Please contact us directly.');
                      }
                    } catch (error) {
                      console.error('Error opening WhatsApp:', error);
                      e.preventDefault();
                      alert('Unable to open WhatsApp. Please contact us directly.');
                    }
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Schedule a call
                    <svg 
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {detail.highlight && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
              <p className="text-sm uppercase tracking-[0.3em] text-primary">Why it matters</p>
              <h3 className="mt-2 text-2xl font-semibold">{detail.title}</h3>
              <p className="mt-3 text-slate-200">{detail.highlight}</p>
            {detail.mattersImage && (
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <motion.img
                  src={detail.mattersImage}
                  alt={detail.title}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                />
              </div>
            )}
              {detail.featureCards && Array.isArray(detail.featureCards) && (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {detail.featureCards.map((card, idx) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 30, rotateX: -10 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: idx * 0.15, duration: 0.5 }}
                      whileHover={{ 
                        scale: 1.05, 
                        rotateY: 5,
                        z: 50,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                      }}
                      className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary/50 hover:bg-white/10"
                    >
                      {card.image && (
                        <div className="h-32 w-full overflow-hidden">
                          <motion.img
                            src={card.image}
                            alt={card.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                            whileHover={{ scale: 1.15, rotate: 2 }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <p className="text-sm font-semibold text-white">{card.title}</p>
                        <p className="mt-1 text-sm text-slate-200">{card.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {detail.integrationExamples && detail.integrationExamples.examples && Array.isArray(detail.integrationExamples.examples) && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold text-slate-900">{detail.integrationExamples.heading}</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {detail.integrationExamples.examples.map((example, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.4, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.08, 
                    rotate: 3,
                    y: -8,
                    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
                  }}
                  className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50 shadow-card transition-all duration-300 hover:border-primary hover:shadow-lg cursor-pointer"
                >
                  {example.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={example.image}
                        alt={example.title || example}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-sm font-semibold text-slate-900">{example.title || example}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.challenges && detail.challenges.items && Array.isArray(detail.challenges.items) && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold">{detail.challenges.heading}</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {detail.challenges.items.map((challenge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
                  whileHover={{ 
                    scale: 1.03,
                    x: idx % 2 === 0 ? 5 : -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)"
                  }}
                  className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                >
                  {challenge.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={challenge.image}
                        alt={challenge.title || challenge}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.1, brightness: 1.2 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                  <div className="flex items-start gap-3 p-4">
                    <motion.span 
                      className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <p className="text-sm text-slate-200">{challenge.title || challenge}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.services && detail.services.items && Array.isArray(detail.services.items) && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold text-slate-900">{detail.services.heading}</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {detail.services.items.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.12, duration: 0.6, type: "spring", stiffness: 80 }}
                  whileHover={{ 
                    scale: 1.04,
                    rotateY: 5,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                  }}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl cursor-pointer"
                >
                  {service.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.2, rotate: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900">{service.title}</h4>
                    <p className="mt-2 text-sm text-slate-700">{service.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.robustIntegration && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold">{detail.robustIntegration.heading}</h3>
            <p className="mt-3 text-slate-200 text-sm md:text-base">{detail.robustIntegration.description}</p>
            {detail.robustIntegration.image && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card">
                <img
                  src={detail.robustIntegration.image}
                  alt={detail.robustIntegration.heading}
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            )}
            {detail.robustIntegration.features && Array.isArray(detail.robustIntegration.features) && (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {detail.robustIntegration.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9, rotateZ: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.15, duration: 0.5, type: "spring" }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateZ: 2,
                      x: idx % 2 === 0 ? -5 : 5,
                      boxShadow: "0 15px 35px rgba(59, 130, 246, 0.2)"
                    }}
                    className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                  >
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                    <p className="mt-2 text-sm text-slate-200">{feature.detail}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {detail.process && detail.process.steps && Array.isArray(detail.process.steps) && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold">{detail.process.heading}</h3>
            {detail.process.description && (
              <p className="mt-3 text-slate-200">{detail.process.description}</p>
            )}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {detail.process.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
                  whileHover={{ 
                    scale: 1.06,
                    rotateY: 10,
                    y: -12,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)"
                  }}
                  className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                >
                  {step.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.15, brightness: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <motion.div 
                      className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {idx + 1}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="mt-2 text-sm text-slate-200">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.techStack && detail.techStack.groups && Array.isArray(detail.techStack.groups) && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
                {detail.techStack.heading}
              </h3>
              {detail.techStack.description && (
                <p className="mt-3 text-slate-700 max-w-3xl mx-auto text-sm md:text-base">
                  {detail.techStack.description}
                </p>
              )}
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {detail.techStack.groups.map((group, idx) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {group.icon && (
                      <i className={`${group.icon} text-2xl text-primary`}></i>
                    )}
                    <h4 className="text-lg font-semibold text-slate-900">{group.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {group.items && Array.isArray(group.items) && group.items.map((item, itemIdx) => {
                      const itemName = typeof item === 'string' ? item : item.name;
                      const itemIcon = typeof item === 'string' ? null : item.icon;
                      return (
                        <li key={itemIdx} className="flex items-center gap-3">
                          {itemIcon ? (
                            <i className={`${itemIcon} text-primary text-base w-5 flex-shrink-0`}></i>
                          ) : (
                            <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          )}
                          <span>{itemName}</span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.consultingServices && detail.consultingServices.services && Array.isArray(detail.consultingServices.services) && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold text-slate-900">{detail.consultingServices.heading}</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {detail.consultingServices.services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.12, duration: 0.6, type: "spring", stiffness: 80 }}
                  whileHover={{ 
                    scale: 1.04,
                    rotateY: 5,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                  }}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl cursor-pointer"
                >
                  {service.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.2, rotate: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900">{service.title}</h4>
                    <p className="mt-2 text-sm text-slate-700">{service.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.beneficialSolutions && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold">{detail.beneficialSolutions.heading}</h3>
            <p className="mt-3 text-slate-200 text-sm md:text-base">{detail.beneficialSolutions.description}</p>
            {detail.beneficialSolutions.image && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card">
                <img
                  src={detail.beneficialSolutions.image}
                  alt={detail.beneficialSolutions.heading}
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            )}
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {detail.beneficialSolutions.solutions && Array.isArray(detail.beneficialSolutions.solutions) && detail.beneficialSolutions.solutions.map((solution, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.4, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.08, 
                    rotate: 3,
                    y: -8,
                    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
                  }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                >
                  <p className="text-sm font-semibold text-white">{solution}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.featureRichSolutions && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold">{detail.featureRichSolutions.heading}</h3>
            <p className="mt-3 text-slate-200 text-sm md:text-base">{detail.featureRichSolutions.description}</p>
            {detail.featureRichSolutions.image && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card">
                <img
                  src={detail.featureRichSolutions.image}
                  alt={detail.featureRichSolutions.heading}
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            )}
            {detail.featureRichSolutions.features && Array.isArray(detail.featureRichSolutions.features) && (
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {detail.featureRichSolutions.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9, rotateZ: -2 }}
                    whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.15, duration: 0.5, type: "spring" }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateZ: 2,
                      x: idx % 2 === 0 ? -5 : 5,
                      boxShadow: "0 15px 35px rgba(59, 130, 246, 0.2)"
                    }}
                    className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                  >
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                    <p className="mt-2 text-sm text-slate-200">{feature.detail}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {detail.consultingProcess && detail.consultingProcess.steps && Array.isArray(detail.consultingProcess.steps) && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold">{detail.consultingProcess.heading}</h3>
            <p className="mt-3 text-slate-200 text-sm md:text-base">{detail.consultingProcess.description}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {detail.consultingProcess.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40, rotateX: 20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.15, duration: 0.5, type: "spring" }}
                  whileHover={{ 
                    scale: 1.06,
                    rotateY: 10,
                    y: -12,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)"
                  }}
                  className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                >
                  {step.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.15, brightness: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <motion.div 
                      className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {idx + 1}
                    </motion.div>
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="mt-2 text-sm text-slate-200">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.results && detail.results.heading && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-white">{detail.results.heading}</h3>
              {detail.results.description && (
                <p className="mt-4 text-slate-200 max-w-3xl mx-auto text-sm md:text-base">
                  {detail.results.description}
                </p>
              )}
            </div>
            {detail.results.stats && Array.isArray(detail.results.stats) && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {detail.results.stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: idx * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                    }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base font-medium text-slate-200">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {detail.commitment && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold text-slate-900">{detail.commitment.heading}</h3>
            <p className="mt-2 text-sm md:text-base text-slate-700">{detail.commitment.description}</p>
            {detail.commitment.image && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card">
                <img
                  src={detail.commitment.image}
                  alt={detail.commitment.heading}
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            )}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {detail.commitment.features && Array.isArray(detail.commitment.features) && detail.commitment.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.12, duration: 0.6, type: "spring", stiffness: 80 }}
                  whileHover={{ 
                    scale: 1.04,
                    rotateY: 5,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                  }}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl cursor-pointer p-6"
                >
                  <h4 className="text-lg font-semibold text-slate-900">{feature.title}</h4>
                  <p className="mt-2 text-sm text-slate-700">{feature.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.whyWorkWith && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3">Why Choose Us</p>
              <h3 className="text-3xl md:text-4xl font-bold text-white">{detail.whyWorkWith.heading}</h3>
            </div>
            <p className="mt-3 text-center text-slate-200 text-sm md:text-base max-w-3xl mx-auto">{detail.whyWorkWith.description}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {detail.whyWorkWith.items && Array.isArray(detail.whyWorkWith.items) && detail.whyWorkWith.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.12, duration: 0.6, type: "spring", stiffness: 80 }}
                  whileHover={{ 
                    scale: 1.04,
                    rotateY: 5,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)"
                  }}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                >
                  {item.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.2, rotate: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.industries && detail.industries.items && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{detail.industries.heading}</h3>
            </div>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {detail.industries.items.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.05, duration: 0.4, type: "spring" }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
                  }}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-card transition-all duration-300 hover:border-primary/50 hover:bg-white cursor-pointer group"
                >
                  {industry.icon && (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 border-2 border-slate-200 group-hover:border-primary bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                      <i className={`${industry.icon} text-2xl md:text-3xl text-primary group-hover:scale-110 transition-transform duration-300`}></i>
                    </div>
                  )}
                  {!industry.icon && industry.image && (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 border-2 border-slate-200 group-hover:border-primary transition-colors duration-300">
                      <motion.img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                  <p className="text-xs md:text-sm font-medium text-slate-700 text-center group-hover:text-primary transition-colors duration-300">
                    {industry.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.signatureNiches && detail.signatureNiches.niches && Array.isArray(detail.signatureNiches.niches) && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{detail.signatureNiches.heading}</h3>
              <p className="mt-3 text-slate-700 max-w-3xl mx-auto">{detail.signatureNiches.description}</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {detail.signatureNiches.niches.map((niche, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                >
                  {niche.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={niche.image}
                        alt={niche.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900">{niche.title}</h4>
                    <p className="mt-2 text-sm text-slate-700">{niche.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.projects && detail.projects.items && Array.isArray(detail.projects.items) && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold">{detail.projects.heading}</h3>
              <p className="mt-3 text-slate-200 max-w-3xl mx-auto">{detail.projects.description}</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {detail.projects.items.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card transition-all duration-300 hover:border-primary/50 hover:bg-white/10"
                >
                  {project.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                    <p className="mt-2 text-sm text-slate-200">{project.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.technology && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8">{detail.technology.heading}</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {detail.technology.categories && Object.entries(detail.technology.categories).map(([category, items], catIdx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.1 }}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-6"
                >
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        <FaCode className="text-[0.75rem]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.industries && detail.industries.stats && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold">{detail.industries.heading}</h3>
              <p className="mt-3 text-slate-200 max-w-3xl mx-auto">{detail.industries.description}</p>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-6">
              {detail.industries.stats && Array.isArray(detail.industries.stats) && detail.industries.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center rounded-xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.whyChoose && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{detail.whyChoose.heading}</h3>
              <p className="mt-3 text-slate-700 max-w-3xl mx-auto">{detail.whyChoose.description}</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {detail.whyChoose.items && Array.isArray(detail.whyChoose.items) && detail.whyChoose.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.04, y: -10 }}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                >
                  {item.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate-700">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.testimonials && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold">{detail.testimonials.heading}</h3>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {detail.testimonials.items && Array.isArray(detail.testimonials.items) && detail.testimonials.items.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-slate-200 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    {testimonial.image && (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-400">{testimonial.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.explainer && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold">{detail.explainer.heading}</h3>
            <p className="mt-3 text-slate-200 text-sm md:text-base">{detail.explainer.body}</p>
            {detail.explainer.image && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card">
                <img
                  src={detail.explainer.image}
                  alt={detail.explainer.heading || "Service Explanation"}
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            )}
            {detail.explainer.benefits && Array.isArray(detail.explainer.benefits) && (
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {detail.explainer.benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="h-2 w-2 rounded-full bg-primary"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-sm text-slate-200">{benefit}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            {detail.explainer.quadrants && detail.explainer.quadrants.automation && detail.explainer.quadrants.intelligence && (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.03, rotate: -1, x: -5 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                >
                  <h4 className="text-lg font-semibold text-white">{detail.explainer.quadrants.automation?.title}</h4>
                  <ul className="mt-4 space-y-2">
                    {Array.isArray(detail.explainer.quadrants.automation.items) && detail.explainer.quadrants.automation.items.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-2 text-sm text-slate-200"
                      >
                        <motion.span
                          className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.03, rotate: 1, x: 5 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                >
                  <h4 className="text-lg font-semibold text-white">{detail.explainer.quadrants.intelligence?.title}</h4>
                  <ul className="mt-4 space-y-2">
                    {Array.isArray(detail.explainer.quadrants.intelligence.items) && detail.explainer.quadrants.intelligence.items.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: -5 }}
                        className="flex items-start gap-2 text-sm text-slate-200"
                      >
                        <motion.span
                          className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            )}
          </div>
        </section>
      )}

      {detail.techArchitecture && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-900">{detail.techArchitecture.heading}</h3>
                <p className="mt-3 text-slate-700 text-sm md:text-base">{detail.techArchitecture.body}</p>
              </div>
              {detail.techArchitecture.image && (
                <div className="flex-1 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card">
                  <img
                    src={detail.techArchitecture.image}
                    alt={detail.techArchitecture.heading}
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {detail.techStack && !detail.techStack.groups && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold">{detail.techStack.heading}</h3>
            <p className="mt-3 text-slate-200 text-sm md:text-base">{detail.techStack.body}</p>
            {detail.techStack.images && Array.isArray(detail.techStack.images) && detail.techStack.images.length > 0 && (
              <div className="mt-8 space-y-6">
                {detail.techStack.images.map((image, idx) => (
                  <div 
                    key={idx} 
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card w-full"
                  >
                    <img
                      src={image}
                      alt={`${detail.techStack.heading} - Image ${idx + 1}`}
                      className={`w-full ${
                        idx === 0 ? 'object-cover' : 'object-contain'
                      }`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
            {detail.techStack.image && !detail.techStack.images && (
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card">
                <img
                  src={detail.techStack.image}
                  alt={detail.techStack.heading}
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            )}
            {detail.techStack.technologies && Array.isArray(detail.techStack.technologies) && (
              <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {detail.techStack.technologies.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                  >
                    {tech.icon && (
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20">
                        <i className={`${tech.icon} text-xl text-primary`}></i>
                      </div>
                    )}
                    <span className="text-sm font-medium text-slate-200 block">{tech.name}</span>
                    {tech.category && (
                      <span className="text-xs text-slate-400 mt-1 block">{tech.category}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {detail.benefits && detail.benefits.heading && detail.benefits.items && Array.isArray(detail.benefits.items) && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold text-slate-900">{detail.benefits.heading}</h3>
            <p className="mt-2 text-sm md:text-base text-slate-700">{detail.benefits.description}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {detail.benefits.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, rotateZ: idx % 2 === 0 ? -5 : 5 }}
                  whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, type: "spring" }}
                  whileHover={{ 
                    scale: 1.07,
                    rotateZ: idx % 2 === 0 ? 3 : -3,
                    y: -15,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl cursor-pointer"
                >
                  {item.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.25, rotate: idx % 2 === 0 ? 3 : -3 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-700">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.keySteps && detail.keySteps.steps && Array.isArray(detail.keySteps.steps) && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                {detail.keySteps.heading}
              </h3>
              {detail.keySteps.description && (
                <p className="text-slate-700 text-lg max-w-3xl mx-auto">
                  {detail.keySteps.description}
                </p>
              )}
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {detail.keySteps.steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                >
                  {step.image && (
                    <div className="h-40 w-full overflow-hidden">
                      <motion.img
                        src={step.image}
                        alt={step.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    {step.icon && (
                      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <i className={`${step.icon} text-primary text-xl`}></i>
                      </div>
                    )}
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-700 leading-relaxed">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.faq && Array.isArray(detail.faq) && slug !== "crm-erp-solutions" && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold text-white">Frequently Asked Questions</h3>
            <div className="mt-4 space-y-3">
              {detail.faq.map((item, idx) => (
                <motion.details
                  key={item.q}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-white">{item.q}</summary>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm text-slate-200"
                  >
                    {item.a}
                  </motion.p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.differences && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold text-slate-900">{detail.differences.heading}</h3>
            <p className="mt-2 text-slate-700 text-sm md:text-base">{detail.differences.copy}</p>
            {detail.differences.panels && (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {["crm", "erp"].map((key, idx) => {
                  const panel = detail.differences.panels[key];
                  if (!panel) return null;
                  return (
                    <motion.div
                      key={panel.title}
                      initial={{ opacity: 0, y: 30, rotateY: idx === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: idx * 0.2, duration: 0.6, type: "spring" }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: idx === 0 ? 5 : -5,
                        y: -10,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                      }}
                      className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl cursor-pointer"
                    >
                      {panel.image && (
                        <div className="h-44 w-full overflow-hidden">
                          <motion.img
                            src={panel.image}
                            alt={panel.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                            whileHover={{ scale: 1.15, rotate: idx === 0 ? 2 : -2 }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h4 className="text-lg font-semibold text-slate-900">{panel.title}</h4>
                        <ul className="mt-3 space-y-2 text-sm text-slate-700">
                          {panel.bullets.map((b, bulletIdx) => (
                            <motion.li
                              key={b}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: bulletIdx * 0.05 }}
                              whileHover={{ x: 5 }}
                              className="flex items-start gap-2"
                            >
                              <motion.span
                                className="mt-1 h-1.5 w-1.5 rounded-full bg-primary"
                                whileHover={{ scale: 1.5 }}
                              />
                              <span>{b}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 shadow-card">
              <div className="grid grid-cols-3 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                <span>Aspect</span>
                <span>CRM</span>
                <span>ERP</span>
              </div>
              {detail.differences.rows.map((row) => (
                <div key={row.label} className="grid grid-cols-3 border-t border-slate-100 px-4 py-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-800">{row.label}</span>
                  <span>{row.crm}</span>
                  <span>{row.erp}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.benefits && Array.isArray(detail.benefits) && slug !== "mobile-app-development" && (
        <section className="bg-slate-900 py-12 text-white">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold">Benefits of CRM & ERP</h3>
            <p className="mt-2 text-sm md:text-base text-slate-200">
              Clarity from pipeline to fulfillment—connect revenue, operations, and finance for smoother execution.
            </p>
            {detail.benefitsImage && (
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 shadow-card">
                <img
                  src={detail.benefitsImage}
                  alt="Benefits of CRM and ERP"
                  className="h-56 w-full object-cover md:h-72"
                  loading="lazy"
                />
              </div>
            )}
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {detail.benefits.map((b, idx) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30, rotateZ: idx % 2 === 0 ? -5 : 5 }}
                  whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, type: "spring" }}
                  whileHover={{ 
                    scale: 1.07,
                    rotateZ: idx % 2 === 0 ? 3 : -3,
                    y: -15,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                  }}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-card transition-all duration-300 hover:border-primary/50 hover:bg-white/10 cursor-pointer"
                >
                  {b.image && (
                    <div className="h-32 w-full overflow-hidden">
                      <motion.img
                        src={b.image}
                        alt={b.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.25, rotate: idx % 2 === 0 ? 3 : -3 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-sm font-semibold text-white">{b.title}</p>
                    <p className="mt-1 text-sm text-slate-200">{b.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Contact />

      {detail.faq && Array.isArray(detail.faq) && slug === "crm-erp-solutions" && (
        <section className="bg-white py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h3 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h3>
            <div className="mt-4 space-y-3">
              {detail.faq.map((item, idx) => (
                <motion.details
                  key={item.q}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg cursor-pointer"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.q}</summary>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm text-slate-700"
                  >
                    {item.a}
                  </motion.p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ServiceSubPage;

