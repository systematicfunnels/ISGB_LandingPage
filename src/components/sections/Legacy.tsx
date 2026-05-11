import { CAMPUS_HIGHLIGHTS } from '@lib/constants'

export default function Legacy() {
  return (
    <section className="section-shell pt-0">
      <div className="container-custom">
        <div className="reveal-up editorial-shell mesh-surface p-6 md:p-8">
          <div className="max-w-4xl">
            <p className="section-kicker">A Legacy of Academic Excellence</p>
            <h2 className="section-title">
              Backed by Shree Chanakya Education Society, IGSB continues a legacy of 30+ years in quality education, innovation, and industry-oriented academic excellence.
            </h2>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {CAMPUS_HIGHLIGHTS.map((highlight, index) => (
              <div
                key={highlight.title}
                className={`reveal-up reveal-delay-${Math.min(index + 1, 4)} spotlight-card hover-panel rounded-[24px] border border-slate-200 bg-white/85 p-6`}
              >
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{highlight.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
