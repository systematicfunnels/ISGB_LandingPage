import { Check } from 'lucide-react'

export default function PlacementSupport() {
  const supports = [
    'Mock Interviews & Aptitude Training',
    'Resume Building & Profile Development',
    'Internship Opportunities',
    'Corporate Readiness Programmes',
    'Pre-Placement Training & Mentorship',
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-8">Placement Support Includes</h2>

        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          At IGSB, placements are supported through structured training, industry engagement,
          and continuous career development.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {supports.map((support, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-semibold text-slate-800">{support}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
