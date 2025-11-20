import { Flower2, HeartPulse, Lamp, MoonStar, Sparkles, Users } from "lucide-react";

const CATEGORIES = [
  { title: "Ansiedade e Estresse", icon: HeartPulse, items: ["Regulação emocional", "Burnout e exaustão", "Crises de ansiedade"] },
  { title: "Autoconhecimento", icon: Lamp, items: ["Propósito e valores", "Gestão de carreira", "Hábitos saudáveis"] },
  { title: "Relacionamentos", icon: Users, items: ["Comunicação assertiva", "Limites saudáveis", "Lutos e transições"] },
  { title: "Sono e Rotina", icon: MoonStar, items: ["Higiene do sono", "Rituais de descanso", "Sobrecarga cognitiva"] },
  { title: "Alta performance", icon: Sparkles, items: ["Foco e organização", "Tomada de decisão", "Autogestão de metas"] },
  { title: "Bem-estar holístico", icon: Flower2, items: ["Mindfulness guiado", "Respiração e grounding", "Diário emocional"] },
];

function Solucoes() {
  return (
    <section id="especialidades" className="bg-slate-100 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10 text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Especialidades</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Planos terapêuticos para diferentes momentos</h2>
          <p className="mt-3 text-lg text-slate-600">
            Cada ciclo de acompanhamento inclui sessões estruturadas, materiais de apoio e exercícios práticos entre os encontros.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CATEGORIES.map(({ title, icon: Icon, items }, index) => (
            <div
              key={title}
              className={`${index % 2 === 0 ? "bg-white" : "bg-emerald-700 text-white"} rounded-3xl p-6 shadow-xl transition hover:-translate-y-1`}
              data-aos="fade-up"
              data-aos-delay={index * 60}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index % 2 === 0 ? "bg-emerald-100 text-emerald-700" : "bg-white/10 text-emerald-50"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <ul className="space-y-2 text-base">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solucoes;
