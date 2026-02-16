import { colors } from '@/styles/colors';

interface AboutProps {
  establishedYear?: string;
  address?: string;
}

const ADDRESS = `Shop No. 15, Shakti Tower, Shakti Nagar,
Dahisar (E), Mumbai - 400068, India`;

export default function About({
  establishedYear = "2001",
  address = ADDRESS
}: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <div className="max-w-5xl mx-auto">

          {/* ===== Section Header ===== */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: colors.business.darkBlue }}
            >
              About Nidhi Life Care
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: colors.logo.maroon }}
            />
          </div>

          {/* ===== Company Info ===== */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">

            {/* Established */}
            <div className="text-center md:text-left">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: colors.medical.accentLight }}
              >
                <svg className="w-8 h-8" fill="none" stroke={colors.medical.accent} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: colors.business.darkBlue }}
              >
                Established
              </h3>

              <p
                className="text-3xl font-bold"
                style={{ color: colors.logo.maroon }}
              >
                {establishedYear}
              </p>

              <p
                className="mt-2"
                style={{ color: colors.text.secondary }}
              >
                Delivering Excellence in Healthcare Solutions
              </p>
            </div>

            {/* Address */}
            <div className="text-center md:text-left">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ backgroundColor: colors.medical.accentLight }}
              >
                <svg className="w-8 h-8" fill="none" stroke={colors.medical.accent} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: colors.business.darkBlue }}
              >
                Business Address
              </h3>

              <p
                className="text-lg leading-relaxed whitespace-pre-line"
                style={{ color: colors.business.darkBlue }}
              >
                {address}
              </p>
            </div>

          </div>

          {/* ===== Company Description ===== */}
          <div className="bg-gray-50 p-10 rounded-lg mb-16">
            <p
              className="text-lg leading-relaxed text-center"
              style={{ color: colors.text.primary }}
            >
              Nidhi Life Care is a pioneering healthcare service provider committed
              to delivering high-quality medical products and services to healthcare
              institutions across India. Guided by innovation, integrity, and
              excellence, we continuously strive to enhance healthcare support by
              offering comprehensive solutions that meet the highest international standards.
            </p>
          </div>

          {/* ===== Vision ===== */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: colors.business.darkBlue }}
            >
              Vision
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: colors.logo.maroon }}
            />
          </div>

          <div className="bg-gray-50 p-10 rounded-lg mb-16">
            <p
              className="text-lg leading-relaxed text-center"
              style={{ color: colors.text.primary }}
            >
              To be recognized as a leading healthcare service provider,
              setting benchmarks for excellence and innovation while positively
              impacting communities through our products and unmatched services.
            </p>
          </div>

          {/* ===== Our Team ===== */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: colors.business.darkBlue }}
            >
              Our Team
            </h2>
            <div
              className="w-24 h-1 mx-auto"
              style={{ backgroundColor: colors.logo.maroon }}
            />
          </div>

          <div className="bg-gray-50 p-10 rounded-lg">
            <p
              className="text-lg leading-relaxed text-center"
              style={{ color: colors.text.primary }}
            >
              <strong>Nidhi Life Care</strong> boasts a team of dedicated and highly skilled professionals with extensive 
              experience in the healthcare industry. Driven by a shared passion for making a meaningful impact on the lives 
              of individuals and communities, our team remains at the heart of everything we do. 
              As an organization, we continuously invest in their professional development and overall well-being, 
              empowering them to grow, excel, and deliver the highest standards of care.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
