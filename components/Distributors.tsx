import { colors } from '@/styles/colors';

interface Distributor {
  name: string;
}

interface DistributorsProps {
  distributors?: Distributor[];
}

const defaultDistributors: Distributor[] = [
  {
    name: "Biomerieux India pvt Ltd."
  },
  {
    name: "MIL Laboratories pvt Ltd."
  },
  {
    name: "Sun Technosolutions India Ltd."
  },
  {
    name: "Entrust Data Cards/Force ID"
  },
  {
    name: "Hemant Surgical Industries Ltd"
  }
];

export default function Distributors({ distributors = defaultDistributors }: DistributorsProps) {
  return (
    <section id="distributors" className="py-20" style={{ backgroundColor: colors.background.secondary }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4"
                style={{ color: colors.business.darkBlue }}>
              Authorized Distributors
            </h2>
            <div className="w-24 h-1 mx-auto mb-4"
                 style={{ backgroundColor: colors.logo.maroon }} />
            <p className="text-lg" style={{ color: colors.text.secondary }}>
              Our trusted partners across India
            </p>
          </div>

          {/* Distributors Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {distributors.map((distributor, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4"
                style={{ borderLeftColor: colors.logo.maroon }}
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: colors.medical.accentLight }}>
                      <svg className="w-7 h-7" fill="none" stroke={colors.medical.accent} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2"
                        style={{ color: colors.business.darkBlue }}>
                      {distributor.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4"
                style={{ color: colors.business.darkBlue }}>
              Interested in Becoming a Distributor?
            </h3>
            <p className="text-lg mb-6" style={{ color: colors.text.secondary }}>
              Join our network of authorized distributors and bring quality diagnostic equipment to your region
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: colors.logo.maroon }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
