import { useParams } from "react-router-dom";
import ServiceSubPage from "./ServiceSubPage.jsx";
import ServiceDetail from "./ServiceDetail.jsx";

const subSlugs = new Set([
  "crm-erp-solutions",
  "system-integration",
  "software-consulting",
  "fleet-management",
  "custom-crm-development",
  "custom-software-development",
  "real-time-tracking",
  "mobile-app-development",
  "android-app-development",
  "ios-app-development",
  "flutter-app-development",
  "angularjs-development",
  "web-development-company",
  "ecommerce-development",
  "ui-ux-design",
  "digital-marketing",
  "seo-services-company",
  "content-marketing-services",
  "social-media-marketing",
  "digital-marketing-consulting",
  "social-media-optimization",
  "support-and-maintenance",
]);

function ServiceRouter() {
  const { slug } = useParams();
  if (slug && subSlugs.has(slug)) {
    return <ServiceSubPage />;
  }
  return <ServiceDetail />;
}

export default ServiceRouter;

