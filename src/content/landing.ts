export const navLinks = [
  { label: "Product", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Why relyd", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#" },
] as const;

export const heroKeywords = ["STRATEGIC", "CLOUD", "OPS"] as const;

export const trustLogos = ["relyd Pulse", "Managed Services", "Cloud Ops", "AI-driven workflows"] as const;

export const platformTabs = [
  { id: "pro", label: "relyd Pulse Pro" },
  { id: "enterprise", label: "relyd Pulse Enterprise" },
  { id: "commerce", label: "relyd Pulse Commerce Suite" },
] as const;

export type PlatformTabId = (typeof platformTabs)[number]["id"];

export const platformCards: Record<
  PlatformTabId,
  {
    title: string;
    description: string;
    badge?: string;
  }[]
> = {
  pro: [
    {
      title: "Maximum performance for growing ambitions.",
      description: "$23 /month per user",
    },
    {
      title: "Unlimited customizable workflows",
      description: "Build, run, and iterate workflows to eliminate manual bottlenecks.",
    },
    {
      title: "Additional features and integrations",
      description: "Connect to your tools and extend your stack as you scale.",
    },
    {
      title: "Advanced support services",
      description: "Faster resolution with dedicated operational coverage.",
    },
  ],
  enterprise: [
    {
      title: "Unrivaled power. Tailored for your mission.",
      description: "$42 /month per user",
    },
    {
      title: "All Standard features, plus priority support",
      description: "Everything in Pro, with faster SLAs and elevated support.",
    },
    {
      title: "Dedicated account manager",
      description: "A single partner who understands your mission and roadmap.",
    },
    {
      title: "Custom API integrations and automation",
      description: "Bespoke connections and workflows tailored to your operation.",
    },
  ],
  commerce: [
    {
      title: "AI driven eCommerce System",
      description: "$42 /month per user",
    },
    {
      title: "Real-Time Omnichannel Orchestration",
      description: "Coordinate inventory, orders, and fulfillment in one system.",
    },
    {
      title: "Predictive AI-Driven Autonomy",
      description: "Automate decisions and reduce manual workload across channels.",
    },
    {
      title: "Scalable API-First Enterprise Architecture",
      description: "A robust backbone designed to grow with your commerce ambitions.",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Eliminate manual bottlenecks through AI-driven workflows, drastically reduce system risks, and empower your leadership to focus on long-term growth instead of day-to-day troubleshooting.",
    name: "AI-driven workflows",
  },
  {
    quote:
      "Unlock the power of real-time insights with our cutting-edge relyd Pulse dashboard. Monitor system performance, track resource allocation, and forecast scaling needs with precision - all in one place.",
    name: "relyd Pulse",
  },
  {
    quote:
      "Enterprise-grade Cloud Ops and Managed Services that bridge the gap between sophisticated engineering and your core strategic mission.",
    name: "Managed Services",
  },
  {
    quote:
      "Most clients are up and running within days thanks to our relyd Pulse framework and Zero-Touch deployment strategy.",
    name: "Zero-Touch deployment",
  },
] as const;

export const stats = [
  {
    value: "420+",
    label: "Active Customers",
  },
  {
    value: "130+",
    label: "Pre-built AI-Driven Workflows",
  },
  {
    value: "4.8",
    label: "Internal Customer Satisfaction",
  },
] as const;

export const complianceBullets = [
  {
    title: "Real-time system performance",
    description: "Monitor critical signals and spot issues before they become incidents.",
  },
  {
    title: "Resource allocation insights",
    description: "Track usage and cost drivers to forecast scaling needs with precision.",
  },
  {
    title: "Risk reduction by design",
    description: "Reduce system risks with workflows, automation, and strong operational practices.",
  },
] as const;

export const advantageFeatures = [
  {
    title: "AI-driven workflows",
    description: "Eliminate manual bottlenecks and keep operations moving without constant firefighting.",
  },
  {
    title: "Enterprise-grade security",
    description: "Built with encryption and operational controls designed for serious organizations.",
  },
  {
    title: "24/7 Support services",
    description: "Support coverage designed to minimize downtime and unblock teams quickly.",
  },
  {
    title: "Zero-Trust architecture",
    description: "Security-first design aligned with modern best practices and compliance expectations.",
  },
  {
    title: "Bespoke integrations",
    description: "Connect to your existing tools and APIs without disrupting daily operations.",
  },
  {
    title: "Fast implementation",
    description: "Most clients are up and running within days with guided onboarding and pre-built workflows.",
  },
] as const;

export const storyFilters = [
  "What makes your SaaS platform different from others on the market?",
  "How secure is the data stored on your SaaS platform?",
  "Can your SaaS platform integrate with other tools we already use?",
  "How quickly can we implement your SaaS platform in our business?",
] as const;

export const steps = [
  {
    title: "Book a call",
    description:
      "Book a call with our global workforce consultants. We’ll set you up with a free account ready to suit your team’s needs.",
  },
  {
    title: "Add your people",
    description:
      "From new hires to your existing workforce, onboard effortlessly with our self-serve platform.",
  },
  {
    title: "Dedicated onboarding",
    description:
      "From navigating local laws to support for your team members, our dedicated team will help you get set up seamlessly.",
  },
] as const;

export const reviews = [
  {
    name: "What makes your SaaS platform different from others on the market?",
    text: "We bridge the gap between high-end engineering and daily operations. Unlike others, relyd combines enterprise-grade security with pre-built, AI-driven workflows that eliminate manual friction. With 24/7 support services and a focus on high customer satisfaction, we ensure your technology never limits your ambition – it scales with it.",
  },
  {
    name: "How secure is the data stored on your SaaS platform?",
    text: "Security is at the heart of our relyd Pulse framework. We utilize enterprise-grade encryption and Zero-Trust architectures to safeguard your assets. By implementing strict Multi-Factor Authentication (MFA), regular automated security audits, and continuous compliance monitoring, we ensure your data remains protected at all times. Our infrastructure is designed to exceed industry standards, providing a secure, scalable foundation for your ambition.",
  },
  {
    name: "Can your SaaS platform integrate with other tools we already use?",
    text: "Absolutely. Our platform is designed to connect seamlessly with a wide range of third-party tools and APIs. By merging our AI-driven workflows with your existing systems, we centralize your operations and eliminate manual friction. We ensure a smooth transition and continuous data flow through bespoke integrations, allowing you to upgrade your technical backbone without any disruption to your daily business.",
  },
  {
    name: "How quickly can we implement your SaaS platform in your business?",
    text: "Speed is core to our model. Most clients are up and running within days thanks to our relyd Pulse framework and Zero-Touch deployment strategy. We provide a highly efficient, guided onboarding process that is tailored to your organization’s specific needs. By utilizing pre-built, AI-driven workflows, we ensure your setup is fast and seamless, allowing your technical backbone to scale without delaying your daily business.",
  },
] as const;

export const footerColumns = [
  {
    title: "Product",
    links: ["Customer Management", "PIM", "Warehouse", "Procurement", "Sales Channels", "Sales"],
  },
  {
    title: "Solutions",
    links: ["Payments", "Returns", "Workflows", "Statistics", "E-Commerce"],
  },
  {
    title: "Resources",
    links: ["Changelog", "FAQ", "Help", "Pricing"],
  },
  {
    title: "Company",
    links: ["About us", "System status"],
  },
  {
    title: "Legal",
    links: ["Privacy policy", "Terms of business", "Legal notice"],
  },
] as const;

export const promoLegal = ``;
