import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MotionConfig, LazyMotion } from "motion/react";
import "./i18n";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ServiceCoverage } from "./components/ServiceCoverage";
import { QuoteForm } from "./components/QuoteForm";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { FloatingContact } from "./components/FloatingContact";
import { SEO } from "./components/SEO";

const loadMotionFeatures = () =>
  import("./utils/motionFeatures").then((mod) => mod.default);

export default function App() {
  const { t } = useTranslation();
  const [values, setValues] = useState({
    pickup: "",
    destination: "",
    service: "",
    date: "",
    property: "",
    phone: "",
    details: "",
  });
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <SEO />
        <a className="skip-link" href="#main">
          {t("skip")}
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Highlights />
          <Services
            selectService={(service) => setValues((v) => ({ ...v, service }))}
          />
          <HowItWorks />
          <WhyChooseUs />
          <ServiceCoverage />
          <QuoteForm values={values} setValues={setValues} />
          <FAQ />
        </main>
        <Footer />
        <FloatingContact />
      </MotionConfig>
    </LazyMotion>
  );
}
