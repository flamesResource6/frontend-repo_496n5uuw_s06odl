import React from 'react'
import Spline from '@splinetool/react-spline'
import { CheckCircle, Shield, Zap, Wrench, Phone, Mail, MapPin, ArrowRight, Hammer } from 'lucide-react'

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  )
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm leading-6">{desc}</p>
      <div className="mt-4 inline-flex items-center text-blue-700 font-medium">
        Learn more <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  )
}

function ProjectCard({ title, sector, img }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white/70 backdrop-blur">
      <div className="aspect-[16/10] bg-gradient-to-br from-slate-900 to-slate-700 relative">
        <img src={img} alt="project" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">{sector}</span>
        <h3 className="mt-3 text-base font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-40 border-b border-white/30 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Electra</span>
            <span className="text-gray-900">Install</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-gray-950">Services</a>
            <a href="#projects" className="hover:text-gray-950">Projects</a>
            <a href="#about" className="hover:text-gray-950">About</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white shadow-sm hover:bg-blue-700">Get a Quote</a>
          </nav>
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative pt-28 sm:pt-32 lg:pt-36">
        <div className="absolute inset-0 -z-0">
          <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white" />

        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-4">
                  Reliable. Certified. Future-ready.
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Electrical installations for modern infrastructure
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                  We design, install, and maintain electrical systems for residential, commercial, and industrial clients — with safety and performance at the core.
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700">
                    Request a quote
                  </a>
                  <a href="#projects" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-50">
                    View projects
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-3 gap-6">
                  <Stat value="250+" label="Projects delivered" />
                  <Stat value="15yr" label="Industry experience" />
                  <Stat value="24/7" label="Emergency support" />
                </div>
              </div>
              <div className="lg:col-span-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              'NICEIC Approved',
              'BS 7671 Compliant',
              'Fully Insured',
              'CHAS Accredited',
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 text-green-600" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-white to-blue-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Our services</h2>
            <p className="mt-3 text-gray-600">End-to-end solutions for safe, efficient, and scalable power systems.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard icon={Zap} title="New Installations" desc="Complete electrical fit-outs for homes, offices, and industrial sites, built to the latest standards." />
            <ServiceCard icon={Wrench} title="Maintenance & Upgrades" desc="Planned maintenance, rewires, and energy-efficient upgrades to extend system lifespan." />
            <ServiceCard icon={Shield} title="Compliance & Testing" desc="EICR inspections, PAT testing, and certification to ensure compliance and safety." />
            <ServiceCard icon={Hammer} title="Industrial Solutions" desc="Power distribution, control panels, and automation for manufacturing and logistics." />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">Featured projects</h2>
              <p className="mt-3 text-gray-600 max-w-2xl">A snapshot of recent work across residential, commercial, and industrial sectors.</p>
            </div>
            <a href="#contact" className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 font-semibold text-gray-900 hover:bg-gray-50">Start your project</a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard title="Logistics Warehouse Fit-out" sector="Industrial" img="https://images.unsplash.com/photo-1582582429416-0ef66a9fef87?q=80&w=1600&auto=format&fit=crop" />
            <ProjectCard title="Luxury Apartment Rewire" sector="Residential" img="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop" />
            <ProjectCard title="Office Lighting Retrofit" sector="Commercial" img="https://images.unsplash.com/photo-1506792006437-256b665541e3?q=80&w=1600&auto=format&fit=crop" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 sm:py-24 bg-blue-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Powering progress since 2010</h2>
            <p className="mt-4 text-gray-700">Our certified team brings deep expertise across design, installation, and ongoing maintenance. We combine traditional craftsmanship with modern tools to deliver reliable, efficient, and future-ready systems.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> NICEIC-approved engineers</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> Transparent pricing and timelines</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /> Dedicated safety-first approach</li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-100 to-indigo-100" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl font-extrabold">Request a quote</h2>
              <p className="mt-3 text-gray-600">Tell us about your project and we’ll get back to you within one business day.</p>

              <div className="mt-8 space-y-4 text-gray-700">
                <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-blue-700" /> +1 (555) 123-4567</div>
                <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-blue-700" /> hello@electrainstall.co</div>
                <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-blue-700" /> 1200 Industrial Ave, Suite 200, London</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/70 backdrop-blur p-6 rounded-2xl border border-gray-200">
                <div>
                  <label className="text-sm font-medium text-gray-700">Full name</label>
                  <input required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="jane@email.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <input className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Project details</label>
                  <textarea rows={5} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Tell us about your project..." />
                </div>
                <div className="sm:col-span-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600"><Shield className="w-4 h-4" /> We’ll never share your details</div>
                  <button className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-semibold shadow-sm hover:bg-blue-700">Send request</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="font-semibold text-gray-900">ElectraInstall</div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} ElectraInstall Ltd. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
