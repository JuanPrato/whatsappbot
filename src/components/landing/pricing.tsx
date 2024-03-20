import { IoLogoWhatsapp } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";

import { Anchor } from "../shared/anchor";
import { PricingCard } from "../shared/pricingCard";

const ICONS: { [key: string]: JSX.Element } = {
  wpp: <IoLogoWhatsapp size={36} className="text-primary-dark" />,
  trophy: <FaTrophy size={36} className="text-accent" />,
};

const PRICING_DATA = [
  {
    title: "Bot con API",
    price: 100,
    icon: "wpp",
    advantages: [
      "👀 Programación de Respuestas",
      "👀 Respuestas Automatizadas",
      "👀 Dashboard de configuración",
      "👀 Api para acceder a respuestas",
    ],
    theme: "light",
  },
  {
    title: "Acceso total",
    price: 150,
    icon: "trophy",
    advantages: [
      "👀 Incluye el plan Bot con API",
      "👀 Dashboard de gestión",
      "👀 Manejo de Consultas Básicas",
      "👀 Configuración de Mensajes Personalizados",
    ],
    theme: "dark",
    isPrincipal: true,
  },
];

export default function Pricing() {
  return (
    <section
      className="flex h-[calc(100vh-7rem)] w-full flex-col items-center justify-center gap-8 overflow-hidden bg-primary px-[15%]"
      id="pricing"
    >
      <div className="text-center">
        <h2 className="text-4xl">La solución más simple a tu negocio</h2>
        <h4 className="text-2xl font-light">Elegí solo lo que necesites</h4>
      </div>
      <section className="bg-text flex gap-16 rounded-lg p-16">
        {PRICING_DATA.map((pricingData, i) => (
          <PricingCard
            key={i}
            title={pricingData.title}
            price={pricingData.price}
            rightIcon={ICONS[pricingData.icon]!}
            advantages={pricingData.advantages}
            theme={pricingData.theme as any}
            isPrincipal={pricingData.isPrincipal}
          />
        ))}
      </section>
    </section>
  );
}
