import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, GraduationCap, Home, HeartHandshake, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CharityPage = () => {
  const impactStats = [
    { icon: Users, value: "500+", label: "Children Supported" },
    { icon: GraduationCap, value: "12", label: "Years of Service" },
    { icon: Home, value: "8", label: "Children's Homes" },
    { icon: HeartHandshake, value: "10%", label: "From Every Entry" }
  ];

  const pillars = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "We provide school fees, uniforms, books, and tutoring to ensure every child receives quality education and the chance to build a better future."
    },
    {
      icon: Home,
      title: "Safe Shelter",
      description: "Our children's homes provide safe, nurturing environments where orphans and vulnerable children can grow, play, and feel truly at home."
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Regular medical checkups, dental care, and mental health support ensure every child stays healthy in body and mind."
    }
  ];

  const programs = [
    {
      title: "Children's Homes",
      description: "Safe, family-style residential care for orphans and children without stable homes, staffed by dedicated caregivers."
    },
    {
      title: "School Sponsorships",
      description: "Full educational support including tuition, uniforms, books, and supplies for children from low-income families."
    },
    {
      title: "Medical Outreach",
      description: "Regular health screenings, immunizations, and access to medical care for children in remote communities."
    },
    {
      title: "Nutrition Programs",
      description: "Daily nutritious meals and food support for families, ensuring children receive proper nourishment."
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-gold/5 to-dark">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                  <Heart className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-gold tracking-wider uppercase">
                    Our Charity Partner
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
                  Yayasan Harapan <span className="gold-text">Bali</span>
                </h1>
                
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Supporting orphan children across Indonesia with education, 
                  shelter, and care. Together, we're making a difference.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-dark border-y border-dark-100">
          <div className="section-padding">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-white font-display mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-dark">
          <div className="section-padding">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                  Our <span className="gold-text">Mission</span>
                </h2>
                <p className="text-lg text-gray-400">
                  Yayasan Harapan Bali is dedicated to transforming the lives of 
                  orphaned and vulnerable children across Indonesia.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-dark-50 border border-dark-100 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                      <pillar.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm">{pillar.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 bg-dark-50">
          <div className="section-padding">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                  Our <span className="gold-text">Programs</span>
                </h2>
                <p className="text-lg text-gray-400">
                  Every donation directly supports these essential programs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-dark border border-dark-100"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{program.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gold/10 via-dark to-gold/10">
          <div className="section-padding">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Heart className="w-12 h-12 text-gold mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
                  Make an <span className="gold-text">Impact</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                  10% of every competition entry goes directly to supporting 
                  orphan children in Indonesia through Yayasan Harapan Bali.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 gold-gradient rounded-full font-semibold text-dark hover:shadow-gold transition-shadow"
                  >
                    Enter the Competition
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CharityPage;
