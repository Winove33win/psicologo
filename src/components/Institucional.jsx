function Institucional() {
  const stats = [
    { value: "800+", label: "pessoas acolhidas" },
    { value: "12 anos", label: "de prática clínica" },
    { value: "98%", label: "satisfação no acompanhamento" },
  ];

  return (
    <section id="sobre" className="bg-white py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">Sobre a profissional</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Marina Andrade | CRP 06/112233</h2>
          <p className="text-lg text-slate-600">
            Psicóloga clínica com foco em saúde mental de adultos, líderes e profissionais em transição de carreira. Formada em
            Terapia Cognitivo-Comportamental, utiliza recursos de mindfulness, psicoeducação e acompanhamento contínuo para
            promover bem-estar emocional.
          </p>
          <p className="text-lg text-slate-600">
            Cada plano terapêutico é construído em parceria, respeitando ritmos individuais, contextos culturais e objetivos de
            vida. Sessões online e presenciais com rotinas de acompanhamento e ferramentas digitais para apoiar o dia a dia.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-emerald-50 p-4 text-center shadow-sm" data-aos="fade-up">
                <p className="text-2xl font-bold text-emerald-800">{stat.value}</p>
                <p className="text-sm uppercase tracking-wide text-emerald-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1" data-aos="fade-left">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-50 bg-gradient-to-tr from-emerald-50 via-white to-sky-50 shadow-2xl">
            <img
              src="/psicologo-template-website.png"
              alt="Layout de uma página dedicada a psicologia humanizada"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/5 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 shadow-lg">
              <p className="text-sm font-semibold text-emerald-700">Abordagem integrativa</p>
              <p className="text-sm text-slate-600">
                Sessões estruturadas, exercícios guiados e check-ins semanais para acompanhar avanços e acolher desafios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Institucional;
