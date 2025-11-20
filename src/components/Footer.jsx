function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <section id="blog" className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-700 to-slate-900 p-8" data-aos="fade-up">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-100">Conteúdo</p>
          <h3 className="mt-2 text-2xl font-semibold">Psicoeducação para o dia a dia</h3>
          <p className="mt-2 text-slate-100">
            Artigos, roteiros de respiração e materiais rápidos para lidar com ansiedade, autocobrança e transições de carreira.
          </p>
        </div>
      </section>
      <div className="border-t border-white/10">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
          <div>
            <p className="text-lg font-semibold">
              <span className="text-emerald-300">Serenar</span> Psicologia
            </p>
            <p className="mt-3 text-sm text-slate-300">
              Espaço dedicado à saúde mental de adultos, líderes e equipes que buscam bem-estar sustentável.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#beneficios">Diferenciais</a>
              </li>
              <li>
                <a href="#blog">Conteúdo</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Atendimentos</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Online Brasil</li>
              <li>Presencial São Paulo</li>
              <li>Planos individuais</li>
              <li>Programas para equipes</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-200">Contato</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>contato@serenarpsicologia.com</li>
              <li>+55 (11) 99999-1122</li>
              <li>Rua Harmonia, 250 - São Paulo/SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-slate-400">© 2025 Serenar Psicologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
