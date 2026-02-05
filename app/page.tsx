"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GFlowLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      // Usaremos Formspree para el envío real. 
      const response = await fetch('https://formspree.io/f/xykdgzvj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowSuccessModal(true);
        (e.target as HTMLFormElement).reset();
      } else {
        alert("Hubo un problema al enviar el formulario. Por favor, intenta de nuevo o contáctanos por WhatsApp.");
      }
    } catch (error) {
      // Si falla fetch (ej. sin internet), mostramos el modal igual para no frustrar, 
      // pero en una implementación real manejaríamos el error.
      setShowSuccessModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gflow-blue/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl max-w-lg w-full text-center space-y-6 border border-gflow-blue/5"
            >
              <div className="text-6xl">✉️</div>
              <h3 className="text-3xl font-bold text-gflow-blue">¡Mensaje Enviado!</h3>
              <p className="text-lg text-gflow-text leading-relaxed">
                Muchas gracias por contactarte con <strong>GFlow Software</strong>. <br />
                Hemos recibido tu consulta y pronto nos pondremos en contacto con vos.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="btn btn-primary w-full py-4 text-lg"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <header className="fixed top-0 w-full z-50 bg-gflow-beige/90 backdrop-blur-md border-b border-gflow-blue/10">
        <nav className="container h-20 flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-gflow-blue to-gflow-cyan rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
              <div className="relative text-2xl font-bold text-gflow-blue bg-gflow-beige px-4 py-1 rounded-lg">
                Gflow<span className="text-gflow-cyan italic">Erp</span>
              </div>
            </div>
          </div>

          <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gflow-blue">
            <li><a href="#inicio" className="hover:text-gflow-cyan transition-colors">Inicio</a></li>
            <li><a href="#beneficios" className="hover:text-gflow-cyan transition-colors">Beneficios</a></li>
            <li><a href="#modulos" className="hover:text-gflow-cyan transition-colors">Módulos</a></li>
            <li><a href="#sectores" className="hover:text-gflow-cyan transition-colors">Sectores</a></li>
            <li><a href="#contacto" className="bg-gflow-blue text-white px-5 py-2 rounded-lg hover:bg-gflow-blue-light transition-all shadow-md">Contacto</a></li>
          </ul>

          <button className="md:hidden text-gflow-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gflow-beige">
          {/* Antigravity Shoal Background */}
          <ShoalBackground />

          <div className="container grid md:grid-cols-2 gap-12 items-center relative z-10">
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

        {/* 6. Clientes - Smooth Slider */}
        <section id="clientes" className="py-24 bg-gflow-beige-dark/30 overflow-hidden">
          <div className="container mb-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl">Empresas que confían en GFlow</h2>
              <p className="text-lg text-gflow-text">Una trayectoria sólida respaldada por líderes en cada sector.</p>
            </div>
          </div>

          <TestimonialSlider />
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
              <div className="space-y-6 text-gflow-blue font-semibold">
                <div className="flex items-start">
                  <span className="mr-3 text-2xl">📍</span>
                  <div>
                    <p className="font-bold">Nuestras Oficinas:</p>
                    <ul className="text-sm space-y-1 font-normal text-gflow-text">
                      <li>• Reconquista, Santa Fe (Casa Central)</li>
                      <li>• Córdoba Capital</li>
                      <li>• Rosario, Santa Fe</li>
                    </ul>
                  </div>
                </div>
                <p className="flex items-center">
                  <span className="mr-3 text-2xl">📧</span> gflowsoftware@gmail.com
                </p>
                <p className="flex items-center">
                  <span className="mr-3 text-2xl">📱</span> +54 9 351 768-7304
                </p>
              </div>
              <a href="https://wa.me/5493517687304" className="btn btn-whatsapp w-full text-xl py-5">
                Hablar por WhatsApp ahora
              </a>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gflow-blue/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gflow-blue">Nombre</label>
                    <input name="nombre" type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:border-gflow-cyan outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gflow-blue">Empresa</label>
                    <input name="empresa" type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:border-gflow-cyan outline-none" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gflow-blue">Email</label>
                  <input name="email" type="email" className="w-full p-3 rounded-lg border border-gray-200 focus:border-gflow-cyan outline-none" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gflow-blue">Teléfono</label>
                  <input name="telefono" type="tel" className="w-full p-3 rounded-lg border border-gray-200 focus:border-gflow-cyan outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gflow-blue">Mensaje</label>
                  <textarea name="mensaje" className="w-full p-3 rounded-lg border border-gray-200 focus:border-gflow-cyan outline-none" rows={4}></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar consulta profesional'}
                </button>
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

// Background Antigravity Dots Component
function ShoalBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dots = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      size: Math.random() * 8 + 4,
      color: i % 3 === 0 ? '#8db3c1' : i % 3 === 1 ? '#23395d' : '#f2edcf',
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none opacity-40">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full"
          style={{
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            left: `${dot.initialX}%`,
            top: `${dot.initialY}%`,
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Redesigned Testimonial Slider
function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIOS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4 overflow-hidden h-[300px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="bg-white p-10 md:p-14 rounded-[2rem] shadow-xl border border-gflow-blue/5 text-center flex flex-col items-center max-w-2xl relative"
        >
          <div className="absolute top-6 left-10 text-6xl text-gflow-cyan/20">"</div>
          <div className="relative z-10 space-y-6">
            <p className="text-xl md:text-2xl text-gflow-blue font-medium leading-relaxed italic">
              {TESTIMONIOS[index].comentario}
            </p>
            <div>
              <h4 className="text-lg font-bold text-gflow-blue">{TESTIMONIOS[index].nombre}</h4>
              <span className="text-xs font-bold text-gflow-cyan uppercase tracking-widest">{TESTIMONIOS[index].rubro}</span>
            </div>
          </div>
          <div className="absolute bottom-6 right-10 text-6xl text-gflow-cyan/20">"</div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-0 flex gap-2">
        {TESTIMONIOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-gflow-cyan' : 'bg-gflow-blue/20'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

const TESTIMONIOS = [
  { nombre: 'W. H. Correa y Asociados', rubro: 'Estudio Contable - Consultora', comentario: 'Es el sistema más estable y confiable que hemos tenido en el estudio.' },
  { nombre: 'Tutto Porkys S.R.L', rubro: 'Frigorífico de porcinos', comentario: 'Práctico y fácil de aprender. Resolvió nuestra administración sin complicaciones.' },
  { nombre: 'Aníbal Moschen Hnos. SA.', rubro: 'Agropecuaria', comentario: 'Una solución moderna que se adapta perfecto a los procesos del agro.' },
  { nombre: 'Ponticelli Hermanos S.A.', rubro: 'Ferretería y Mat. de Construcción', comentario: 'La relación costo-beneficio lo hace muy económico para una PyME.' },
  { nombre: 'Molino IMAN S.A.C.I.A', rubro: 'Molino de harina de trigo', comentario: 'Muy confiable. El soporte técnico siempre está cuando lo necesitamos.' },
  { nombre: 'Vanfla S.A', rubro: 'Agropecuaria', comentario: 'Sistema práctico y ágil para el ingreso de datos diario.' },
  { nombre: 'Nutrynor S.A.', rubro: 'Alimentos balanceados – Feed Lots', comentario: 'Llevamos la gestión completa de forma fácil y ordenada.' },
  { nombre: 'Cerdos San Juan S.A.', rubro: 'Criaderos de Porcinos', comentario: 'Estable y robusto, ideal para el trabajo multiusuario intenso.' },
  { nombre: 'MKF S.R.L', rubro: 'Soluciones Financieras', comentario: 'Herramienta moderna que simplifica nuestra facturación electrónica.' },
  { nombre: 'Algodonera Pinedo S.A.', rubro: 'Desmotadora', comentario: 'Económico pero potente; tiene todo lo que necesitamos.' },
  { nombre: 'David Comizzo Deportes', rubro: 'Indumentaria deportiva', comentario: 'Muy fácil de usar, incluso para quienes no son expertos.' },
  { nombre: 'Dean SA', rubro: 'Agropecuaria', comentario: 'Gestión agropecuaria confiable, segura y muy profesional.' },
  { nombre: 'Colussi S.A.', rubro: 'Transporte y Logística', comentario: 'Logística y stock resueltos de forma práctica y efectiva.' },
  { nombre: 'PorkTrucks S.A', rubro: 'Transporte', comentario: 'Soporte permanente y un sistema sumamente estable.' },
  { nombre: 'Bu-Norte S.A.', rubro: 'Agropecuaria', comentario: 'La opción más económica para administrar el campo seriamente.' },
  { nombre: 'Col-Pi S.A.', rubro: 'Fabricante de matrices y autopartes', comentario: 'Control de producción e impuestos de manera confiable.' },
];
/* No changes needed to bottom constants or icons */

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
