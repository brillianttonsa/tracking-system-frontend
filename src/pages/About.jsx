"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-yellow-600 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About MaizeTrack</h1>
            <p className="text-xl max-w-3xl mx-auto">
              The complete solution for maize flour production tracking and management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Company</h2>
            <p className="text-lg text-gray-600 mb-6">
              MaizeTrack was founded in 2020 with a mission to revolutionize how maize flour production is managed and
              tracked. We recognized the challenges faced by producers in maintaining quality, tracking inventory, and
              optimizing production processes.
            </p>
            <p className="text-lg text-gray-600">
              Our team of industry experts and software developers came together to create a comprehensive solution that
              addresses these challenges, helping maize flour producers increase efficiency, reduce waste, and maintain
              consistent quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-600">
              <p className="text-lg italic text-gray-700">
                "To empower maize flour producers with cutting-edge technology that enhances production efficiency,
                ensures product quality, and drives business growth."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Choose MaizeTrack?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Comprehensive Tracking",
                  description:
                    "Monitor every stage of production from raw material intake to finished product distribution.",
                },
                {
                  title: "Quality Assurance",
                  description:
                    "Implement quality checks at critical control points to ensure consistent product quality.",
                },
                {
                  title: "Inventory Management",
                  description: "Keep track of raw materials, packaging supplies, and finished products in real-time.",
                },
                {
                  title: "Production Optimization",
                  description: "Identify bottlenecks and inefficiencies to optimize your production process.",
                },
                {
                  title: "Data-Driven Decisions",
                  description: "Access comprehensive reports and analytics to make informed business decisions.",
                },
                {
                  title: "User-Friendly Interface",
                  description: "Intuitive design that requires minimal training for your team to use effectively.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of experts combines industry knowledge with technical expertise to deliver the best
              solution for your maize flour production needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "John Doe",
                position: "CEO & Founder",
                bio: "With 15+ years in the milling industry, John brings unparalleled expertise to MaizeTrack.",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Jane Smith",
                position: "CTO",
                bio: "Jane leads our technical team, ensuring our platform leverages the latest technologies.",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Michael Johnson",
                position: "Production Specialist",
                bio: "Michael's background in food production helps shape our platform's practical features.",
                image: "/placeholder.svg?height=150&width=150",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-md text-center"
              >
                <div className="p-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-yellow-600 mb-2">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to transform your production process?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the growing number of maize flour producers who are optimizing their operations with MaizeTrack.
            </p>
            <div className="flex justify-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/signup"
                className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition-colors"
              >
                Sign Up Now
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
