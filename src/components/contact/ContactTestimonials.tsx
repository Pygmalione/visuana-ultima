// ============================================
// CONTACT TESTIMONIALS COMPONENT - SPEC-007
// Responsive: Single column on mobile, 3 columns on desktop
// ============================================

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    quote: 'Wspolpraca z Visuana to byl przelom. Nasz content organicznie dotarl do 3x wiekszej grupy odbiorcow.',
    author: 'Anna Nowak',
    role: 'Marketing Manager',
    company: 'TechStartup.pl',
  },
  {
    quote: 'Profesjonalne podejscie i konkretne wyniki. Po 3 miesiacach nasz ruch organiczny wzrosl o 150%.',
    author: 'Marcin Kowalczyk',
    role: 'CEO',
    company: 'EcoSolutions',
  },
  {
    quote: 'Karol doskonale rozumie rynek azjatycki. Pomogl nam wejsc na rynek japonski z odpowiednia strategia.',
    author: 'Tomasz Wisniewski',
    role: 'Founder',
    company: 'AsiaConnect',
  },
]

export function ContactTestimonials() {
  return (
    <section className="py-12 sm:py-16 bg-charcoal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-charcoal-800 text-center mb-8 sm:mb-12">
          Co mowia nasi klienci
        </h2>

        {/* Responsive grid: 1 column mobile, 2 tablet, 3 desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                bg-white rounded-xl p-5 sm:p-6
                shadow-card
                hover:shadow-card-hover hover:-translate-y-1
                transition-all duration-300 ease-out
              "
            >
              {/* Quote icon */}
              <div className="text-royal-red-200 mb-3 sm:mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="text-charcoal-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="
                  w-10 h-10 sm:w-11 sm:h-11
                  rounded-full bg-royal-red-100
                  flex items-center justify-center
                  text-royal-red-600 font-semibold
                  text-sm sm:text-base
                ">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-charcoal-800 text-sm sm:text-base">
                    {testimonial.author}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
