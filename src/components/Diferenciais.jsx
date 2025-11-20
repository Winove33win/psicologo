import { Brain, HeartHandshake, Laptop2, Leaf, ShieldCheck, Sparkles } from "lucide-react";

const FEATURES = [
  { icon: HeartHandshake, title: "Acolhimento ativo", description: "Escuta qualificada e segura para que você se sinta confortável a cada sessão." },
  { icon: Brain, title: "Base científica", description: "Protocolos inspirados em TCC, mindfulness e regulação emocional validados." },
  { icon: Laptop2, title: "Formato híbrido", description: "Atendimentos online ou presenciais com a mesma qualidade e continuidade." },
  { icon: Leaf, title: "Plano personalizado", description: "Planejamento terapêutico com metas claras, exercícios e monitoramento." },
  { icon: ShieldCheck, title: "Confidencialidade", description: "Processos éticos, sigilo profissional e contratos transparentes." },
  { icon: Sparkles, title: "Microvitórias semanais", description: "Check-ins curtos para apoiar mudanças entre uma sessão e outra." },
];

function Diferenciais() {
  return (
    <section id="beneficios" className="bg-emerald-50/70 py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 space-y-4 text-center" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Por que escolher</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Terapia que se adapta à sua rotina</h2>
          <p className="text-lg text-slate-600">
            Um cuidado que combina ciência, presença e ferramentas práticas para transformar o cotidiano e prevenir recaídas.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg shadow-emerald-100/60"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-base text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;
