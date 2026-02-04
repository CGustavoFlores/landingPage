"use client";

import { useState } from 'react';

export default function GFlowLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gflow-beige/90 backdrop-blur-md border-b border-gflow-blue/10">
        <nav className="container h-20 flex justify-between items-center">
          <div className="text-2xl font-bold text-gflow-blue">
            GFLOW <span className="font-normal text-gflow-cyan">Software</span>
          </div>

          <ul className="hidden md:flex space-x-8 text-sm font-semibold text-gflow-blue">
            <li><a href="#inicio" className="hover:text-gflow-cyan transition-colors">Inicio</a></li>
            <li><a href="#beneficios" className="hover:text-gflow-cyan transition-colors">Beneficios</a></li>
            <li><a href="#modulos" className="hover:text-gflow-cyan transition-colors">Módulos</a></li>
            <li><a href="#sectores" className="hover:text-gflow-cyan transition-colors">Sectores</a></li>
            <li><a href="#contacto" className="bg-gflow-blue text-white px-5 py-2 rounded-lg hover:bg-gflow-blue-light transition-all">Contacto</a></li>
          </ul>

          <button className="md:hidden text-gflow-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl text-gflow-blue !leading-tight font-bold">
                Sistema de Gestión y Contabilidad para PyMEs, <span className="text-gflow-cyan">probado en el mundo real.</span>
              </h1>
              <p className="text-lg md:text-xl text-gflow-text leading-relaxed">
                Más de 30 años desarrollando software de gestión para empresas de todo tipo: comercios, agro, transporte, servicios y estudios contables. Multiusuario, estable y con soporte remoto permanente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="btn btn-primary text-lg px-8 py-4">
                  Quiero más información
                </a>
                <a href="https://wa.me/5493517687304" className="btn btn-whatsapp text-lg px-8 py-4">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-gflow-blue/10 overflow-hidden aspect-video flex flex-col">
                <div className="bg-gray-50 px-4 py-2 border-b flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-[10px] font-medium text-gray-400 ml-4">GFLOW Software v12.4</span>
                </div>
                <div className="flex-1 bg-gflow-beige-dark/20 flex flex-col items-center justify-center text-gray-400 italic">
                  <div className="text-5xl mb-4">🖥️</div>
                  <p>Captura del Sistema ERP</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gflow-cyan text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-3xl font-bold">+30</div>
                <div className="text-xs uppercase tracking-wider font-semibold">Años de experiencia</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Beneficios Clave */}
        <section id="beneficios" className="py-24 bg-gflow-beige-dark/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl">¿Por qué elegir GFLOW?</h2>
              <p className="text-lg text-gflow-text">Nuestra experiencia se traduce en tranquilidad para su administración.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {BENEFICIOS.map((b, i) => (
                <div key={i} className="card group">
                  <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{b.icon}</div>
                  <h3 className="text-xl mb-4">{b.title}</h3>
                  <p className="text-gflow-text leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Sectores - Circular Diagram */}
        <section id="sectores" className="py-24 overflow-hidden">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl">Sectores e Industrias atendidas</h2>
              <p className="text-lg text-gflow-text">Una solución versátil para diversos rubros comerciales y productivos.</p>
            </div>

            <div className="relative flex justify-center items-center min-h-[500px]">
              {/* Central Core */}
              <div className="w-40 h-40 bg-gflow-blue rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-2xl border-4 border-white">
                GFlow ERP
              </div>

              {/* Spinning Orbits */}
              <div className="absolute w-[350px] h-[350px] border border-gflow-blue/10 rounded-full animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute w-[500px] h-[500px] border border-gflow-blue/5 rounded-full animate-[spin_60s_linear_infinite_reverse]"></div>

              {/* Sector Nodes */}
              {SECTORES.map((s, i) => {
                const angle = (i / SECTORES.length) * 2 * Math.PI;
                const radius = 220;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={i}
                    className="absolute bg-white p-4 rounded-xl shadow-lg border border-gflow-blue/10 flex flex-col items-center space-y-2 cursor-default hover:scale-110 transition-transform z-20"
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <span className="text-3xl">{s.icon}</span>
                    <span className="text-xs font-bold text-gflow-blue whitespace-nowrap">{s.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 4. Módulos */}
        <section id="modulos" className="py-24 bg-gflow-blue text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl text-white">Módulos del Sistema</h2>
              <p className="text-lg text-gflow-cyan">Funcionalidades integradas para una gestión 360°.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {MODULOS.map((m, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl text-gflow-cyan mb-6 border-b border-gflow-cyan/30 pb-3">{m.title}</h3>
                  <ul className="space-y-3">
                    {m.items.map((item, ii) => (
                      <li key={ii} className="flex items-start text-sm">
                        <span className="text-gflow-cyan mr-3">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center text-white/60 italic text-sm">
              * Actualmente el sistema no incluye módulo de sueldos ni liquidación de haberes.
            </div>
          </div>
        </section>

        {/* 5. Control Interno */}
        <section className="py-24">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl leading-tight">Mejore su Gestión y <br />Control Interno</h2>
              <p className="text-lg text-gflow-text leading-relaxed">
                GFLOW no es solo un registrador de datos, es una guía para las mejores prácticas administrativas que su empresa necesita para escalar.
              </p>
              <ul className="space-y-6">
                {[
                  { t: 'Trazabilidad total', d: 'Desde el saldo de un cliente hasta el asiento contable original.' },
                  { t: 'Evite duplicidad', d: 'Registración por única vez de comprobantes en todos los módulos.' },
                  { t: 'Auditoría simplificada', d: 'Cada movimiento tiene un origen y destino identificable.' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-gflow-cyan text-white rounded-full p-1 mr-4 mt-1">
                      <CheckIcon />
                    </div>
                    <div>
                      <strong className="block text-gflow-blue">{item.t}</strong>
                      <span className="text-gflow-text text-sm">{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gflow-beige-dark/20 rounded-3xl p-12 flex items-center justify-center text-8xl grayscale opacity-20">
              🔍
            </div>
          </div>
        </section>

        {/* 6. Testimonios */}
        <section id="clientes" className="py-24 bg-gflow-beige-dark/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl">Confían en nosotros</h2>
              <p className="text-lg text-gflow-text">Empresas que han transformado su gestión con GFLOW.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIOS.map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gflow-blue/5">
                  <h4 className="text-xl font-bold text-gflow-blue">{t.nombre}</h4>
                  <span className="text-xs font-bold text-gflow-cyan uppercase tracking-wider block mb-4">{t.rubro}</span>
                  <p className="text-gflow-text italic leading-relaxed">"{t.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Evolución Nube */}
        <section className="py-24">
          <div className="container">
            <div className="bg-gflow-blue rounded-[2rem] p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl">
              <div className="text-7xl md:text-9xl opacity-50 drop-shadow-lg">☁️</div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-5xl text-white">Próxima Evolución: GFLOW Cloud</h3>
                <p className="text-lg md:text-xl text-gflow-cyan leading-relaxed">
                  Estamos trabajando en la versión web integrando toda la potencia actual con la libertad de la nube. Asegure su inversión hoy con una solución estable y prepárese para el futuro con migración garantizada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Contacto */}
        <section id="contacto" className="py-24">
          <div className="container grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl">¿Querés ordenar la administración de tu empresa?</h2>
              <p className="text-xl text-gflow-text leading-relaxed">
                Dejanos tus datos y te contactaremos para una demostración personalizada y un diagnóstico pro-profesional.
              </p>
              <div className="space-y-4 text-gflow-blue font-semibold">
                <p className="flex items-center">
                  <span className="mr-3">📍</span> Reconquista, Santa Fe, Argentina
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📧</span> gflowsoftware@gmail.com
                </p>
              </div>
              <a href="https://wa.me/5493517687304" className="btn btn-whatsapp w-full text-xl py-5">
                Hablar por WhatsApp ahora
              </a>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gflow-blue/5">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gflow-blue">Nombre</label>
                    <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:border-gflow-cyan outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gflow-blue">Empresa</label>
                    <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:border-gflow-cyan outline-none" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gflow-blue">Email</label>
                  <input type="email" className="w-full p-3 rounded-lg border border-gray-200 focus:border-gflow-cyan outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gflow-blue">Teléfono</label>
                  <input type="tel" className="w-full p-3 rounded-lg border border-gray-200 focus:border-gflow-cyan outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gflow-blue">Mensaje</label>
                  <textarea className="w-full p-3 rounded-lg border border-gray-200 focus:border-gflow-cyan outline-none" rows={4}></textarea>
                </div>
                <button className="btn btn-primary w-full py-4 text-lg">Enviar consulta profesional</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-gflow-blue/10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gflow-text text-sm">
            © 2000–2026 Gustavo Flores – <strong className="text-gflow-blue">GFLOW Software</strong>. Todos los derechos reservados.
          </p>
          <ul className="flex space-x-8 text-sm font-bold text-gflow-blue">
            <li><a href="#beneficios" className="hover:text-gflow-cyan">Beneficios</a></li>
            <li><a href="#modulos" className="hover:text-gflow-cyan">Módulos</a></li>
            <li><a href="#" className="hover:text-gflow-cyan">Privacidad</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

const TESTIMONIOS = [
  { nombre: 'Colussi S.A.', rubro: 'Transporte y Logística', quote: 'Logramos un control exacto de nuestra flota y cuentas corrientes. La estabilidad del sistema en años de uso es increíble.' },
  { nombre: 'Ponticelli Hnos. S.A.', rubro: 'Materiales de Construcción', quote: 'La facturación y el manejo de stock en el corralón se volvieron ágiles. Es un sistema pensado para el día a día.' },
  { nombre: 'Algodonera Pinedo S.A.', rubro: 'Industria Textil / Agro', quote: 'Escalable y robusto. Nos permite manejar procesos complejos con una curva de aprendizaje mínima para el personal.' },
];

const BENEFICIOS = [
  { icon: '🎯', title: 'Fácil de aprender y usar', desc: 'Pensado para administrativos reales, no para expertos en sistemas. Pantallas claras y procesos guiados.' },
  { icon: '🛡️', title: 'Confiable y súper probado', desc: 'Cientos de implementaciones en PyMEs a lo largo de casi 30 años, con un núcleo estable.' },
  { icon: '👥', title: 'Multiusuario y adaptable', desc: 'Permite trabajo simultáneo de varios usuarios, con perfiles y permisos configurables.' },
  { icon: '⚙️', title: 'Buenas prácticas de gestión', desc: 'Acompañamos la adopción de circuitos formales: Nota de venta → Remito → Factura.' },
  { icon: '📊', title: 'Automatización contable', desc: 'Las operaciones generan automáticamente los asientos, reduciendo errores y trabajo manual.' },
  { icon: '👨‍💻', title: 'Soporte y Capacitación', desc: 'Acompañamiento directo, inclusive articulando con el estudio contable del cliente.' },
];

const SECTORES = [
  { icon: '🏪', label: 'Comercios' },
  { icon: '🌾', label: 'Agro / Cereales' },
  { icon: '🐄', label: 'Ganadería' },
  { icon: '🚚', label: 'Transportes' },
  { icon: '💼', label: 'Estudios Contables' },
  { icon: '⛽', label: 'Estaciones de Servicio' },
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

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
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
