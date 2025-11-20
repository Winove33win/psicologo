function Contato() {
  return (
    <section id="contato" className="bg-white py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div data-aos="fade-right" className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Agende sua sessão</p>
          <h2 className="text-3xl font-semibold text-slate-900">Vamos cuidar da sua saúde mental</h2>
          <p className="text-lg text-slate-600">
            Preencha o formulário para receber um retorno em até 24h úteis. A primeira conversa é gratuita para entendermos suas
            necessidades e construirmos o melhor plano de acompanhamento.
          </p>
          <div className="space-y-2 text-sm text-slate-600">
            <p>
              <strong>Email:</strong> contato@serenarpsicologia.com
            </p>
            <p>
              <strong>Telefone:</strong> +55 (11) 99999-1122
            </p>
            <p>
              <strong>Endereço:</strong> Rua Harmonia, 250 - Vila Madalena, São Paulo/SP
            </p>
          </div>
        </div>
        <form
          data-aos="fade-left"
          className="grid gap-4 rounded-3xl bg-emerald-50 p-6 shadow-xl shadow-emerald-100"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <label className="flex flex-col text-sm font-medium text-slate-600">
              Nome completo
              <input type="text" className="mt-1 rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900" required />
            </label>
            <label className="flex flex-col text-sm font-medium text-slate-600">
              E-mail
              <input type="email" className="mt-1 rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900" required />
            </label>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="flex flex-col text-sm font-medium text-slate-600">
              Telefone
              <input type="tel" className="mt-1 rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900" />
            </label>
            <label className="flex flex-col text-sm font-medium text-slate-600">
              Melhor horário para contato
              <input type="text" className="mt-1 rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900" />
            </label>
          </div>
          <label className="flex flex-col text-sm font-medium text-slate-600">
            O que você busca na terapia?
            <textarea className="mt-1 h-32 rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-slate-900" />
          </label>
          <button
            type="submit"
            className="rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;
