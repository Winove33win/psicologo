import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuoteModal } from "@/context/QuoteModalContext";
import {
  BarChart2,
  Boxes,
  CheckCircle,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function Home() {
  const { open } = useQuoteModal();
  const services = [
    {
      icon: <Truck size={28} className="card__icon" />,
      title: "Transporte fracionado premium",
      description:
        "Rede dedicada de cross-docking, veículos rastreados e SLA de coleta sob medida para operações B2B.",
    },
    {
      icon: <Boxes size={28} className="card__icon" />,
      title: "Logística integrada",
      description:
        "Planejamento, armazenagem e distribuição coordenados pelo nosso time de especialistas com dados em tempo real.",
    },
    {
      icon: <ShieldCheck size={28} className="card__icon" />,
      title: "Operações sensíveis",
      description:
        "Camadas adicionais de segurança, monitoramento 24/7 e protocolos de contingência para cargas de alto valor.",
    },
  ];

  const sectors = [
    { title: "Varejo e e-commerce", detail: "Reposição ágil e slots de entrega garantidos." },
    { title: "Indústria farmacêutica", detail: "Protocolos GDP e temperatura controlada." },
    { title: "Bens de consumo", detail: "Campanhas promocionais sincronizadas." },
    { title: "Tecnologia", detail: "Segurança reforçada e seguros dedicados." },
  ];

  const blogPosts = [
    {
      title: "Como reduzir o lead time sem aumentar custos",
      tag: "Estratégia",
      link: "/blog/lead-time",
    },
    {
      title: "O que muda com a logística omnichannel",
      tag: "Tendências",
      link: "/blog/omnichannel",
    },
    {
      title: "Checklist de segurança para cargas sensíveis",
      tag: "Operações",
      link: "/blog/checklist-seguranca",
    },
  ];

  return (
    <div>
      <section className="hero" id="home">
        <div className="hero__background" aria-hidden="true" />
        <div className="container hero__content">
          <motion.div
            className="hero__copy"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="badge badge--light">Logística 4.0 sem complicação</span>
            <h1>
              Agilidade e previsibilidade para operações logísticas que não podem parar
            </h1>
            <p>
              Somos parceiros estratégicos de indústrias e varejistas que precisam de transporte confiável, monitoramento em
              tempo real e atendimento consultivo para crescer.
            </p>
            <div className="hero__actions">
              <button type="button" className="btn btn-primary" onClick={open}>
                Solicite uma cotação
              </button>
              <Link to="/servicos" className="hero__secondary hero__secondary--light">
                Conheça nossos serviços
              </Link>
            </div>
            <dl className="hero__metrics">
              <div>
                <dt>98%</dt>
                <dd>SLA de entregas dentro do prazo</dd>
              </div>
              <div>
                <dt>+1.200</dt>
                <dd>Cidades atendidas em todo o Brasil</dd>
              </div>
              <div>
                <dt>24/7</dt>
                <dd>Central de monitoramento ativa</dd>
              </div>
            </dl>
          </motion.div>
          <motion.div
            className="hero__media"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          >
            <div className="hero__card">
              <img src="/camiao-na-rodovia-ao-por-sol.jpg" alt="Caminhão na rodovia ao pôr do sol" />
              <div className="hero__card-content">
                <p>Monitoramento em tempo real via torre de controle dedicada.</p>
                <ul>
                  <li>
                    <CheckCircle size={18} /> Rastreamento por rota
                  </li>
                  <li>
                    <CheckCircle size={18} /> Ajustes proativos durante a viagem
                  </li>
                  <li>
                    <CheckCircle size={18} /> Comunicação integrada com seu time
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section--split" id="institucional">
        <div className="container section__split">
          <motion.div className="section__split-copy" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.span className="section__kicker" variants={item}>
              Quem está por trás
            </motion.span>
            <motion.h2 variants={item}>Mais de 20 anos orquestrando rotas pelo país</motion.h2>
            <motion.p variants={item}>
              Nascemos como uma transportadora de cargas fracionadas e evoluímos para parceiro estratégico dos maiores players do
              varejo e da indústria, combinando tecnologia, pessoas e processos.
            </motion.p>
            <motion.ul className="list" variants={container}>
              <motion.li variants={item}>
                <Users size={18} /> 280 especialistas em logística, atendimento e tecnologia
              </motion.li>
              <motion.li variants={item}>
                <BarChart2 size={18} /> Torre de controle com dashboards de performance sob demanda
              </motion.li>
              <motion.li variants={item}>
                <Leaf size={18} /> Operação carbono compensado e compromisso ESG
              </motion.li>
            </motion.ul>
            <motion.div className="section__cta" variants={item}>
              <Link to="/sobre" className="btn btn-primary">
                Conheça nossa história
              </Link>
              <Link to="/contato" className="section__cta-secondary">
                Fale com especialistas
              </Link>
            </motion.div>
          </motion.div>
          <motion.figure
            className="section__split-media"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/retrato-de-entregador-distribuindo-encomendas.jpg" alt="Entregador distribuindo encomendas" />
          </motion.figure>
        </div>
      </section>

      <section className="section section--highlight" id="diferenciais">
        <div className="container section__highlight">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.span className="section__kicker" variants={item}>
              Resultados na prática
            </motion.span>
            <motion.h2 variants={item}>Performance comprovada com grandes marcas</motion.h2>
            <motion.p variants={item}>
              Cases de implementação mostram reduções de até 32% no lead time e satisfação dos clientes finais acima de 90%.
            </motion.p>
          </motion.div>
          <motion.div className="grid grid-3" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {["Setup em 15 dias", "Dashboard em tempo real", "Equipe dedicada"].map((title) => (
              <motion.article className="card" key={title} variants={item}>
                <h3>{title}</h3>
                <p>
                  Processos desenhados lado a lado com seu time para entregar previsibilidade desde o onboarding até a operação diária.
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--split" id="rastreamento">
        <div className="container section__split">
          <motion.div className="section__split-copy" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.span className="section__kicker" variants={item}>
              Rastreamento e torre de controle
            </motion.span>
            <motion.h2 variants={item}>Visibilidade em tempo real em cada quilômetro</motion.h2>
            <motion.p variants={item}>
              Atuamos com protocolos de geofencing, alertas proativos e dashboards personalizados para que seu time acompanhe cada expedição.
            </motion.p>
            <motion.ul className="list" variants={container}>
              <motion.li variants={item}>
                <CheckCircle size={18} /> Monitoramento 24/7 integrado a sistemas TMS/WMS
              </motion.li>
              <motion.li variants={item}>
                <CheckCircle size={18} /> Análises preditivas para antecipar desvios de rota
              </motion.li>
              <motion.li variants={item}>
                <CheckCircle size={18} /> Relatórios executivos com KPIs acionáveis
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.figure
            className="section__split-media"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/operador-monitorando-entregas.jpg" alt="Analista monitorando entregas em telas" />
          </motion.figure>
        </div>
      </section>

      <section className="section" id="servicos">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.span className="section__kicker" variants={item}>
              Portfólio completo
            </motion.span>
            <motion.h2 variants={item}>Serviços que aceleram o seu supply chain</motion.h2>
            <motion.p variants={item}>
              Cada solução é conectada à nossa torre de controle e às células dedicadas de atendimento consultivo.
            </motion.p>
          </motion.div>
          <motion.div className="grid grid-3" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {services.map((service) => (
              <motion.article className="card" key={service.title} variants={item}>
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/servicos" className="card__link">
                  Explorar serviço
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section" id="setores">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.span className="section__kicker" variants={item}>
              Soluções por setor
            </motion.span>
            <motion.h2 variants={item}>Mosaico de operações especializadas</motion.h2>
            <motion.p variants={item}>
              Customizamos rotas, embalagens e SLAs conforme o segmento para manter sua marca em destaque.
            </motion.p>
          </motion.div>
          <motion.div className="grid grid-4" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {sectors.map((sector) => (
              <motion.article className="card card--minimal" key={sector.title} variants={item}>
                <h3>{sector.title}</h3>
                <p>{sector.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--highlight" id="atento-social">
        <div className="container section__highlight">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.span className="section__kicker" variants={item}>
              Atento Social
            </motion.span>
            <motion.h2 variants={item}>Impacto positivo em cada rota</motion.h2>
            <motion.p variants={item}>
              Neutralizamos emissões com parceiros certificados e apoiamos programas de capacitação para motoristas e comunidades vizinhas às nossas bases.
            </motion.p>
            <motion.ul className="list" variants={container}>
              <motion.li variants={item}>
                <Leaf size={18} /> 100% das emissões diretas compensadas
              </motion.li>
              <motion.li variants={item}>
                <Users size={18} /> +500 pessoas impactadas por projetos educacionais
              </motion.li>
              <motion.li variants={item}>
                <ShieldCheck size={18} /> Programas contínuos de segurança e direção defensiva
              </motion.li>
            </motion.ul>
            <motion.div className="section__cta" variants={item}>
              <button type="button" className="btn btn-primary" onClick={open}>
                Conheça o programa
              </button>
              <Link to="/sustentabilidade" className="section__cta-secondary">
                Saiba mais
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section" id="blog">
        <div className="container">
          <motion.div className="section__header" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container}>
            <motion.span className="section__kicker" variants={item}>
              Insights do time
            </motion.span>
            <motion.h2 variants={item}>Últimos artigos do blog</motion.h2>
            <motion.p variants={item}>
              Conteúdo curto para orientar decisões rápidas sobre logística e atendimento ao cliente.
            </motion.p>
          </motion.div>
          <motion.div className="grid grid-3" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            {blogPosts.map((post) => (
              <motion.article className="card" key={post.title} variants={item}>
                <span className="badge">{post.tag}</span>
                <h3>{post.title}</h3>
                <Link to={post.link} className="card__link">
                  Ler artigo
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--cta" id="contato-rapido">
        <div className="container section__cta-wrapper">
          <motion.div
            className="section__cta-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Contato rápido com especialistas</h2>
            <p>Escolha o melhor canal e fale com quem entende do seu negócio agora mesmo.</p>
            <div className="section__cta-grid">
              <div className="section__cta-item">
                <Phone size={20} />
                <div>
                  <strong>Telefone</strong>
                  <p>(11) 4000-2024</p>
                </div>
              </div>
              <div className="section__cta-item">
                <Mail size={20} />
                <div>
                  <strong>E-mail</strong>
                  <p>contato@atento.com.br</p>
                </div>
              </div>
              <div className="section__cta-item">
                <MapPin size={20} />
                <div>
                  <strong>Escritórios</strong>
                  <p>São Paulo, Recife e Curitiba</p>
                </div>
              </div>
            </div>
            <div className="section__cta">
              <button type="button" className="btn btn-primary" onClick={open}>
                Solicitar retorno
              </button>
              <Link to="/contato" className="section__cta-secondary">
                Ver canais completos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
