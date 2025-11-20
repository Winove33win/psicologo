function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-emerald-50"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute -left-10 top-24 h-64 w-64 rounded-full bg-emerald-200 blur-3xl" />
        <div className="absolute right-6 top-12 h-72 w-72 rounded-full bg-sky-200 blur-3xl" />
        <div className="absolute bottom-6 left-24 h-52 w-52 rounded-full bg-amber-100 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center gap-12 px-6 pb-24 pt-32 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6" data-aos="fade-right">
          <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Clínica de Psicologia Integrativa
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Cuidando da sua saúde mental com acolhimento, ciência e propósito
          </h1>
          <p className="max-w-xl text-lg text-slate-700">
            Atendimentos presenciais e online conduzidos pela psicóloga clínica Marina Andrade. Terapia individual, apoio para
            profissionais e programas de bem-estar emocional pensados para quem precisa de equilíbrio em meio à rotina.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="rounded-full bg-emerald-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-500"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Agendar primeira conversa
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-emerald-100 px-8 py-3 text-base font-semibold text-emerald-700 backdrop-blur transition hover:-translate-y-0.5 hover:bg-emerald-50"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              Conheça a psicóloga
            </a>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3" data-aos="fade-up" data-aos-delay="260">
            {["10+ anos de experiência clínica", "Atendimento online e presencial", "Protocolos validados cientificamente"].map(
              (metric) => (
                <div
                  key={metric}
                  className="rounded-2xl border border-emerald-100 bg-white/80 p-4 text-center shadow-sm shadow-emerald-100"
                >
                  <p className="text-sm font-medium text-emerald-700">{metric}</p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex-1" data-aos="fade-left">
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -left-8 -top-6 h-24 w-24 rounded-3xl bg-emerald-100/80" aria-hidden="true" />
            <div className="absolute -right-10 bottom-12 h-32 w-32 rounded-full bg-sky-100/80" aria-hidden="true" />
            <div className="overflow-hidden rounded-[28px] border border-emerald-50 bg-white shadow-2xl shadow-emerald-200/50">
              <img
                src="/psicologa-imagem-frontal-fundo-transparente.png"
                alt="Retrato da psicóloga clínica Marina Andrade"
                className="w-full object-cover"
              />
            </div>
            <div className="mt-6 rounded-3xl border border-emerald-50 bg-white/90 p-5 shadow-lg shadow-emerald-100">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-100" />
                <div>
                  <p className="text-sm font-semibold text-emerald-700">Especialidade</p>
                  <p className="text-base text-slate-700">Terapia Cognitivo-Comportamental e Mindfulness</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                Processos terapêuticos personalizados, com planos de cuidado evolutivos e acompanhamento humanizado semana a semana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
