function Rastreamento() {
  const steps = [
    {
      title: "Primeira escuta",
      description: "Encontro inicial de 20 minutos para entender necessidades, esclarecer dúvidas e definir objetivos imediatos.",
    },
    {
      title: "Plano terapêutico",
      description: "Construção conjunta de metas, frequência e materiais de apoio. Tudo registrado para acompanhamento transparente.",
    },
    {
      title: "Acompanhamento contínuo",
      description: "Sessões semanais, check-ins rápidos por mensagem e ajustes de rota a partir da evolução do paciente.",
    },
  ];

  return (
    <section id="processo" className="bg-emerald-700 py-20 text-white">
      <div className="mx-auto w-full max-w-5xl px-6 text-center" data-aos="fade-up">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-100">Como funciona</p>
        <h2 className="mt-4 text-3xl font-semibold">Acompanhamento claro e transparente</h2>
        <p className="mt-4 text-lg text-emerald-50">
          Um fluxo de cuidado que acolhe no primeiro contato, planeja com você e acompanha cada avanço para garantir constância e
          segurança ao longo da jornada terapêutica.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-3xl bg-white/10 p-6 text-left backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-emerald-50">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rastreamento;
