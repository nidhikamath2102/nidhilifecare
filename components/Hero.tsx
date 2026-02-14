import { colors } from '@/styles/colors';

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden"
             style={{ backgroundColor: colors.background.accent }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
             style={{
               backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23003366" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
             }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Mission Statement */}
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6"
                style={{ color: colors.business.darkBlue }}>
              Hospital Consumables & Diagnostic Kits
            </h2>
            <div className="w-24 h-1 mx-auto mb-6"
                 style={{ backgroundColor: colors.logo.maroon }} />
            <p className="text-xl md:text-2xl leading-relaxed"
               style={{ color: colors.text.secondary }}>
              Specialised in supply of hospital consumables, diagnostic kits, surgical products with consistent availability and dependable fulfillment.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: colors.medical.accentLight }}>
                <svg className="w-8 h-8" fill="none" stroke={colors.medical.accent} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.business.darkBlue }}>
                Quality Assured
              </h3>
              <p style={{ color: colors.text.secondary }}>
                Premium diagnostic equipment from trusted manufacturers
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: colors.medical.accentLight }}>
                <svg className="w-8 h-8" fill="none" stroke={colors.medical.accent} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.business.darkBlue }}>
                Expert Support
              </h3>
              <p style={{ color: colors.text.secondary }}>
                Technical expertise and dedicated customer service
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: colors.medical.accentLight }}>
                <svg className="w-8 h-8" fill="none" stroke={colors.medical.accent} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.business.darkBlue }}>
                Nationwide Network
              </h3>
              <p style={{ color: colors.text.secondary }}>
                Authorized distributors across the country
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
