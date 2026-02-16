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
              Our Mission
            </h2>
            <div className="w-24 h-1 mx-auto mb-6"
                 style={{ backgroundColor: colors.logo.maroon }} />
            <p className="text-xl md:text-2xl leading-relaxed"
               style={{ color: colors.text.secondary }}>
              To deliver reliable, cost-effective, and advanced healthcare solutions that contribute to the well-being and longevity of individuals, fostering a healthier and happier society.
            </p>
          </div>

          {/* Our Values */}
<div className="mt-16">
  <div className="text-center mb-12">
    <h2
      className="text-3xl font-bold mb-4"
      style={{ color: colors.business.darkBlue }}
    >
      Our Values
    </h2>
    <div
      className="w-24 h-1 mx-auto"
      style={{ backgroundColor: colors.logo.maroon }}
    />
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    
    {/* Integrity */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3
        className="text-xl font-semibold mb-3"
        style={{ color: colors.business.darkBlue }}
      >
        Integrity
      </h3>
      <p style={{ color: colors.text.secondary }}>
        Upholding the highest ethical standards in all our operations and 
        interactions, ensuring transparency and honesty in every aspect of our business.
      </p>
    </div>

    {/* Innovation */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3
        className="text-xl font-semibold mb-3"
        style={{ color: colors.business.darkBlue }}
      >
        Innovation
      </h3>
      <p style={{ color: colors.text.secondary }}>
        Constantly pursuing new technologies and methodologies to improve 
        the efficacy of our products and services, pushing the boundaries of healthcare.
      </p>
    </div>

    {/* Customer-Centric Approach */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3
        className="text-xl font-semibold mb-3"
        style={{ color: colors.business.darkBlue }}
      >
        Customer-Centric Approach
      </h3>
      <p style={{ color: colors.text.secondary }}>
        Placing our clients at the centre of our operations, striving to 
        understand and fulfil their needs with dedication and care.
      </p>
    </div>

    {/* Excellence */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3
        className="text-xl font-semibold mb-3"
        style={{ color: colors.business.darkBlue }}
      >
        Excellence
      </h3>
      <p style={{ color: colors.text.secondary }}>
        Striving for excellence in customer service to maintain the 
        highest quality standards in everything we do.
      </p>
    </div>

    {/* Products & Services */}
    <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
      <h3
        className="text-xl font-semibold mb-3"
        style={{ color: colors.business.darkBlue }}
      >
        Products & Services
      </h3>
      <p style={{ color: colors.text.secondary }}>
        <strong>Medical Devices:</strong> Providing cutting-edge 
        medical devices, catering to the needs of hospitals 
        and healthcare professionals.
      </p>
    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}
