"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function GFlowLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container h-20 flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <div className="relative flex items-center gap-2">
              <LogoIcon />
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-gflow-blue">GFlow</span>
                <span className="text-gflow-celeste">Erp</span>
              </div>
            </div>
          </div>

          <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gflow-blue">
            <li><a href="#inicio" className="hover:text-gflow-celeste transition-colors">Inicio</a></li>
            <li><a href="#beneficios" className="hover:text-gflow-celeste transition-colors">Beneficios</a></li>
            <li><a href="#modulos" className="hover:text-gflow-celeste transition-colors">Módulos</a></li>
            <li><a href="#clientes" className="hover:text-gflow-celeste transition-colors">Clientes</a></li>
            <li><a href="#contacto" className="btn btn-primary px-6 py-2.5 text-sm">Contacto</a></li>
          </ul>

          <button className="md:hidden text-gflow-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </button>
        </nav>
      </header>

      <main>
        {/* Antigravity Hero Section */}
        <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden hero-gradient text-white">
          {/* Animated Blobs */}
          <div className="blob animate-blob top-[-10%] left-[-10%] opacity-40"></div>
          <div className="blob animate-blob bottom-[-20%] right-[-10%] opacity-30 delay-700"></div>
          <div className="blob animate-blob top-[20%] right-[30%] opacity-20 delay-1000"></div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-gflow-celeste animate-pulse"></span>
                  <span className="text-xs font-bold tracking-widest uppercase text-gflow-celeste">Potencia real para tu PyME</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold !leading-[1.1] text-white">
                  Gestión y Contabilidad <br />
                  <span className="bg-gradient-to-r from-white to-gflow-celeste bg-clip-text text-transparent">
                    probado en el mundo real.
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-gflow-text-muted leading-relaxed max-w-2xl mx-auto"
              >
                Más de 30 años desarrollando software de gestión. Multiusuario, estable y con soporte permanente para escalar tu empresa.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              >
                <a href="#contacto" className="btn btn-primary text-lg px-8 py-4 bg-gflow-celeste hover:bg-white hover:text-gflow-blue">
                  Empezar ahora
                </a>
                <a href="https://wa.me/5493517687304" className="btn border border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Hablar con soporte
                </a>
              </motion.div>
            </div>
          </div>

          {/* Símbolo en el Hero */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <LogoIcon size={600} />
          </motion.div>
        </section>

        {/* 2. Beneficios Clave */}
        <section id="beneficios" className="py-24 bg-gray-50/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl">¿Por qué elegir GFLOW?</h2>
              <p className="text-lg text-gray-600">Nuestra experiencia se traduce en tranquilidad para su administración.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {BENEFICIOS.map((b, i) => (
                <div key={i} className="card group">
                  <div className="w-12 h-12 bg-gflow-blue/5 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-gflow-celeste/10 transition-colors">
                    {b.icon}
                  </div>
                  <h3 className="text-xl mb-4">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Sectores */}
        <section id="sectores" className="py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl text-gflow-blue">Sectores e Industrias</h2>
              <p className="text-lg text-gray-600">Una solución versátil para diversos rubros comerciales y productivos.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {SECTORES.map((s, i) => (
                <div key={i} className="flex flex-col items-center p-6 rounded-2xl border border-gray-100 hover:border-gflow-celeste/30 hover:shadow-lg transition-all text-center group">
                  <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{s.icon}</span>
                  <span className="font-bold text-gflow-blue">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Módulos */}
        <section id="modulos" className="py-24 bg-gflow-blue text-white overflow-hidden relative">
          <div className="blob absolute top-0 right-0 opacity-10"></div>
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl text-white">Módulos del Sistema</h2>
              <p className="text-lg text-gflow-celeste">Funcionalidades integradas para una gestión 360°.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {MODULOS.map((m, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl text-gflow-celeste mb-6 border-b border-gflow-celeste/20 pb-3">{m.title}</h3>
                  <ul className="space-y-3">
                    {m.items.map((item, ii) => (
                      <li key={ii} className="flex items-start text-sm text-gray-300">
                        <span className="text-gflow-celeste mr-3">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Clientes - Real Cards Grid */}
        <section id="clientes" className="py-24 bg-gray-50/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl">Empresas que confían en GFlowErp</h2>
              <p className="text-lg text-gray-600">Una trayectoria sólida respaldada por líderes en cada sector.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CLIENTES.map((c, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 flex flex-col justify-center hover:shadow-md transition-shadow">
                  <h4 className="text-sm font-bold text-gflow-blue mb-1">{c.nombre}</h4>
                  <p className="text-[10px] text-gflow-celeste font-semibold uppercase tracking-wider">{c.rubro}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Contacto */}
        <section id="contacto" className="py-24">
          <div className="container grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl">¿Querés ordenar la administración de tu empresa?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Dejanos tus datos y te contactaremos para una demostración personalizada y un diagnóstico profesional.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gflow-blue/5 rounded-full flex items-center justify-center text-xl shrink-0">📍</div>
                  <div>
                    <h4 className="font-bold text-gflow-blue">Oficinas Centrales</h4>
                    <p className="text-gray-600">Reconquista, Santa Fe, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gflow-blue/5 rounded-full flex items-center justify-center text-xl shrink-0">📧</div>
                  <div>
                    <h4 className="font-bold text-gflow-blue">Email de contacto</h4>
                    <p className="text-gray-600">gflowsoftware@gmail.com</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/5493517687304" className="btn btn-whatsapp w-full sm:w-auto text-xl py-5 px-12">
                Hablar por WhatsApp ahora
              </a>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gflow-blue ml-1">Nombre</label>
                    <input type="text" className="w-full p-4 rounded-xl border border-gray-200 focus:border-gflow-celeste focus:ring-1 focus:ring-gflow-celeste outline-none transition-all bg-gray-50/50" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gflow-blue ml-1">Empresa</label>
                    <input type="text" className="w-full p-4 rounded-xl border border-gray-200 focus:border-gflow-celeste focus:ring-1 focus:ring-gflow-celeste outline-none transition-all bg-gray-50/50" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gflow-blue ml-1">Email</label>
                  <input type="email" className="w-full p-4 rounded-xl border border-gray-200 focus:border-gflow-celeste focus:ring-1 focus:ring-gflow-celeste outline-none transition-all bg-gray-50/50" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gflow-blue ml-1">Mensaje</label>
                  <textarea className="w-full p-4 rounded-xl border border-gray-200 focus:border-gflow-celeste focus:ring-1 focus:ring-gflow-celeste outline-none transition-all bg-gray-50/50" rows={4}></textarea>
                </div>
                <button className="btn btn-primary w-full py-5 text-lg shadow-xl">Enviar consulta profesional</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gray-100">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-bold tracking-tight">
              <span className="text-gflow-blue">GFlow</span>
              <span className="text-gflow-celeste">Erp</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2000–2026 Gustavo Flores. Todos los derechos reservados.
            </p>
          </div>
          <ul className="flex space-x-8 text-sm font-bold text-gflow-blue">
            <li><a href="#beneficios" className="hover:text-gflow-celeste">Beneficios</a></li>
            <li><a href="#modulos" className="hover:text-gflow-celeste">Módulos</a></li>
            <li><a href="#" className="hover:text-gflow-celeste">Privacidad</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

const CLIENTES = [
  { nombre: "W. H. Correa y Asociados", rubro: "Estudio Contable - Consultora" },
  { nombre: "Tutto Porkys S.R.L", rubro: "Frigorífico de porcinos" },
  { nombre: "Aníbal Moschen Hnos. SA.", rubro: "Agropecuaria" },
  { nombre: "Ponticelli Hermanos S.A.", rubro: "Ferretería y Mat. Construcción" },
  { nombre: "Molino IMAN S.A.C.I.A", rubro: "Molino de harina de trigo" },
  { nombre: "Vanfla S.A", rubro: "Agropecuaria" },
  { nombre: "Nutrynor S.A.", rubro: "Alimentos balanceados" },
  { nombre: "Cerdos San Juan S.A.", rubro: "Criaderos de porcinos" },
  { nombre: "MKF S.R.L", rubro: "Soluciones Financiera" },
  { nombre: "Algodonera Pinedo S.A.", rubro: "Desmotadora" },
  { nombre: "David Comizzo Deportes", rubro: "Indumentaria deportiva" },
  { nombre: "Dean S.A.", rubro: "Agropecuaria" },
  { nombre: "Colussi S.A.", rubro: "Transporte y Logística" },
  { nombre: "PorkTrucks S.A.", rubro: "Transporte" },
  { nombre: "Bu-Norte S.A.", rubro: "Agropecuaria" },
  { nombre: "Col-Pi S.A.", rubro: "Fabricante de autopartes" },
];

const BENEFICIOS = [
  { icon: '🎯', title: 'Fácil de aprender', desc: 'Pensado para administrativos reales. Pantallas claras y procesos guiados para una rápida adopción.' },
  { icon: '🛡️', title: 'Confiable y Probado', desc: 'Cientos de implementaciones en PyMEs a lo largo de 30 años con un núcleo técnico estable.' },
  { icon: '👥', title: 'Multiusuario', desc: 'Permite trabajo simultáneo de varios usuarios, con perfiles y permisos totalmente configurables.' },
];

const SECTORES = [
  { icon: '🏪', label: 'Comercios' },
  { icon: '🌾', label: 'Agro / Cereales' },
  { icon: '🐄', label: 'Ganadería' },
  { icon: '🚚', label: 'Transportes' },
  { icon: '💼', label: 'Contables' },
  { icon: '⛽', label: 'Estaciones' },
  { icon: '🏭', label: 'Producción' },
  { icon: '🛠️', label: 'Servicios' },
];

const MODULOS = [
  { title: 'Ventas', items: ['Facturación Electrónica AFIP', 'Remitos y Notas de Venta', 'Cuentas Corrientes', 'Listas de Precios'] },
  { title: 'Compras', items: ['Circuito Orden de Compra', 'Ingreso de Facturas Prov.', 'Centros de Costos', 'Gestión de Deuda'] },
  { title: 'Stock', items: ['Múltiples Depósitos', 'Stock Proyectado', 'Lotes y Trazabilidad'] },
  { title: 'Cajas y Bancos', items: ['Conciliación Bancaria', 'Efec./Cheques/Tarjetas', 'Arqueos y Cierres'] },
  { title: 'Impuestos', items: ['Iva Ventas/Compras', 'Retenciones/Percepciones', 'Exportación AFIP'] },
  { title: 'Contabilidad', items: ['Asientos Automáticos', 'Mayores y Balances', 'Cierres de Ejercicio'] },
];

function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 80L50 20L80 80H20Z" className="stroke-gflow-celeste" strokeWidth="8" strokeLinejoin="round"/>
      <path d="M40 80L50 60L60 80H40Z" className="fill-gflow-blue" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );
}
