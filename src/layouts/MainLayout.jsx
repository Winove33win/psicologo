import { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { QuoteModalContext } from "@/context/QuoteModalContext";

const servicesItems = [
  {
    label: "Rodo",
    to: "/servicos#rodo",
    description: "Transporte rodoviário nacional com hubs distribuídos.",
  },
  {
    label: "Modal Aéreo",
    to: "/servicos#aereo",
    description: "Envios urgentes com malha aérea integrada ao tracking.",
  },
  {
    label: "Atento Health",
    to: "/servicos#health",
    description: "Soluções dedicadas para o setor de saúde e farma.",
  },
  {
    label: "Biolog",
    to: "/servicos#biolog",
    description: "Operações com controle térmico e protocolos especiais.",
  },
  {
    label: "Alimentos",
    to: "/servicos#alimentos",
    description: "Distribuição com temperatura controlada e compliance.",
  },
  {
    label: "Motofrete Atento",
    to: "/servicos#motofrete",
    description: "Rede urbana sob demanda para entregas expressas.",
  },
];

const solutionSectors = [
  { label: "Saúde & Farma", to: "/servicos#saude" },
  { label: "Varejo & E-commerce", to: "/servicos#varejo" },
  { label: "Indústria Automotiva", to: "/servicos#automotivo" },
  { label: "Tecnologia & Eletrônicos", to: "/servicos#tecnologia" },
  { label: "Moda & Lifestyle", to: "/servicos#moda" },
  { label: "Bens de Consumo", to: "/servicos#consumo" },
  { label: "Energia & Infraestrutura", to: "/servicos#energia" },
  { label: "Agronegócio", to: "/servicos#agro" },
];

const navItems = [
  { label: "Home", to: "/" },
  { label: "Institucional", to: "/sobre" },
  { label: "Diferenciais", href: "/#advantages" },
  { label: "Rastreamento", href: "/#services" },
  { label: "Atento Social", href: "/#sustainability" },
  { label: "Blog", href: "https://blog.logipro.com.br", external: true },
  { label: "Serviços", type: "dropdown", children: servicesItems },
  { label: "Soluções", type: "mega", children: solutionSectors },
];

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export function MainLayout() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSections, setMobileSections] = useState({});

  useEffect(() => {
    const SCROLL_ENTER_THRESHOLD = 64;
    const SCROLL_EXIT_THRESHOLD = 16;

    // Apply hysteresis so the header doesn't flicker when hovering near the top.
    const listener = () => {
      setScrolled((previous) => {
        if (previous) {
          return window.scrollY > SCROLL_EXIT_THRESHOLD;
        }
        return window.scrollY >= SCROLL_ENTER_THRESHOLD;
      });
    };
    window.addEventListener("scroll", listener, { passive: true });
    listener();
    return () => window.removeEventListener("scroll", listener);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileSections({});
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  const toggleDropdown = (label) => {
    setActiveDropdown((current) => (current === label ? null : label));
  };

  const toggleMobileSection = (label) => {
    setMobileSections((current) => ({ ...current, [label]: !current[label] }));
  };

  const contextValue = useMemo(
    () => ({
      isOpen: isQuoteOpen,
      open: () => setIsQuoteOpen(true),
      close: () => setIsQuoteOpen(false),
    }),
    [isQuoteOpen]
  );

  const handleMobileNavigate = () => {
    setMobileOpen(false);
  };

  return (
    <QuoteModalContext.Provider value={contextValue}>
      <div className="app-shell">
        <header className={`app-header ${scrolled ? "app-header--compact" : ""}`}>
          <div className="container app-header__inner">
            <NavLink to="/" className="brand">
              LogiPro
            </NavLink>
            <nav className="nav-desktop" aria-label="Principal">
              {navItems.map((item) => {
                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className={`nav-item nav-item--has-children ${
                        activeDropdown === item.label ? "is-open" : ""
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        type="button"
                        className="nav-link nav-link--toggle"
                        onClick={() => toggleDropdown(item.label)}
                        aria-expanded={activeDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown size={16} aria-hidden="true" />
                      </button>
                      <div
                        className={`nav-dropdown ${item.type === "mega" ? "nav-dropdown--mega" : ""}`}
                        role="menu"
                      >
                        <div
                          className={
                            item.type === "mega" ? "nav-dropdown__grid" : "nav-dropdown__list"
                          }
                        >
                          {item.children.map((child) => {
                            const key = `${item.label}-${child.label}`;
                            const childContent = (
                              <>
                                {child.to ? (
                                  <NavLink
                                    to={child.to}
                                    className={({ isActive }) =>
                                      `nav-dropdown__link ${isActive ? "is-active" : ""}`
                                    }
                                  >
                                    {child.label}
                                  </NavLink>
                                ) : (
                                  <a
                                    href={child.href}
                                    className="nav-dropdown__link"
                                    target={child.external ? "_blank" : undefined}
                                    rel={child.external ? "noreferrer" : undefined}
                                  >
                                    {child.label}
                                  </a>
                                )}
                                {child.description && <p>{child.description}</p>}
                              </>
                            );

                            return (
                              <div key={key} className="nav-dropdown__item">
                                {childContent}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                if (item.to) {
                  return (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-link"
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <div className="header-actions">
              <button type="button" className="btn btn-outline" onClick={() => setIsQuoteOpen(true)}>
                Solicitar cotação
              </button>
              <button
                type="button"
                className="nav-trigger"
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menu"
                aria-expanded={mobileOpen}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </header>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div className="mobile-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.nav
                className="mobile-drawer"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 280, damping: 32 }}
              >
                <div className="mobile-drawer__header">
                  <span>Menu</span>
                  <button type="button" onClick={() => setMobileOpen(false)} aria-label="Fechar menu">
                    <X size={22} />
                  </button>
                </div>
                <div className="mobile-drawer__links">
                  {navItems.map((item) => {
                    if (item.children) {
                      const isOpen = mobileSections[item.label];
                      return (
                        <div
                          key={item.label}
                          className={`mobile-drawer__group ${isOpen ? "is-open" : ""}`}
                        >
                          <button
                            type="button"
                            className="mobile-drawer__group-toggle"
                            onClick={() => toggleMobileSection(item.label)}
                            aria-expanded={isOpen}
                          >
                            {item.label}
                            <ChevronDown size={18} aria-hidden="true" />
                          </button>
                          <div className="mobile-drawer__submenu">
                            {item.children.map((child) =>
                              child.to ? (
                                <NavLink
                                  key={`${item.label}-${child.label}`}
                                  to={child.to}
                                  className={({ isActive }) =>
                                    `mobile-drawer__submenu-link ${isActive ? "is-active" : ""}`
                                  }
                                  onClick={handleMobileNavigate}
                                >
                                  {child.label}
                                </NavLink>
                              ) : (
                                <a
                                  key={`${item.label}-${child.label}`}
                                  href={child.href}
                                  className="mobile-drawer__submenu-link"
                                  target={child.external ? "_blank" : undefined}
                                  rel={child.external ? "noreferrer" : undefined}
                                  onClick={handleMobileNavigate}
                                >
                                  {child.label}
                                </a>
                              )
                            )}
                          </div>
                        </div>
                      );
                    }

                    if (item.to) {
                      return (
                        <NavLink
                          key={item.label}
                          to={item.to}
                          className={({ isActive }) => (isActive ? "is-active" : "")}
                          onClick={handleMobileNavigate}
                        >
                          {item.label}
                        </NavLink>
                      );
                    }

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                        onClick={handleMobileNavigate}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
                <button type="button" className="btn btn-primary" onClick={() => setIsQuoteOpen(true)}>
                  Solicitar cotação
                </button>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
        <ScrollToTopButton />
        <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      </div>
    </QuoteModalContext.Provider>
  );
}

export default MainLayout;
