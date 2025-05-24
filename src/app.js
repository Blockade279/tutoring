import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'react-lottie-player';
import essayLottie from './animations/essay.json';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);
  const reveal = {
    hidden: { opacity: 0, y: 80 },
    visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.3, ease: 'easeOut' } })
  };

  return (
    <div className="font-['GT_Section'] bg-white text-gray-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/40 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold">Blake Bird Coaching</h1>
          <ul className="flex space-x-8 text-lg">
            {['Home','Services','Credibility','Courses','Testimonials','Process','Pricing','Essay','Resume','Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-rose-gold transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <motion.section
          id="home"
          className="relative h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')", opacity: heroOpacity }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-midnight-blue to-rose-gold/60" />
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: 'anticipate' }}
          >
            <motion.h2
              className="text-6xl font-serif leading-tight text-white drop-shadow-lg"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Transform Your Academic Journey
            </motion.h2>
            <motion.p
              className="mt-6 text-2xl text-white/90 max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Bespoke Math, Physics & Essay Coaching for the ambitious mind.
            </motion.p>
            <motion.button
              className="mt-12 px-10 py-4 bg-rose-gold text-white font-medium rounded-full shadow-2xl hover:scale-105"
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Book Your Free Consult
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Services */}
        <section id="services" className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-serif text-center mb-16 text-onyx-black">Our Premium Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {['SAT Math','ACT Math','Calculus III','AP Physics C','College Essay','Data Analytics'].map((s,i) => (
                <motion.div
                  key={s}
                  className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={reveal}
                  custom={i}
                >
                  <div className="relative p-8">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-rose-gold to-platinum opacity-30 blur-lg mix-blend-overlay"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    />
                    <div className="relative z-10 flex flex-col items-center">
                      <img src="/svgs/service-duotone.svg" alt={s} className="mb-6 w-24 h-24" />
                      <h3 className="text-2xl font-semibold mb-2 text-onyx-black">{s} Tutoring</h3>
                      <p className="text-gray-600 text-center">Cutting-edge strategies, tailored for elite performance.</p>
                      {s === 'College Essay' && (
                        <span className="mt-4 inline-block px-3 py-1 bg-rose-gold text-white rounded-full text-sm">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility */}
        <section id="credibility" className="py-32 relative">
          <div className="absolute left-[50%] w-1 h-full bg-gradient-to-b from-platinum to-soft-gold" />
          <div className="max-w-4xl mx-auto px-6 space-y-20">
            {[
              { icon: '🏆', text: '100 AP Physics C (Score)' },
              { icon: '🎓', text: 'Dual Enrolled: Calculus III & Real Analysis' },
              { icon: '🏛️', text: 'HPU Freshman: 4 Majors, 1 Minor' },
              { icon: '🚀', text: 'Founder: Drive Mate & Trash Concierge' }
            ].map((item,i) => (
              <motion.div
                key={i}
                className="flex items-center pl-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                custom={i}
              >
                <div className="absolute left-[50%] w-8 h-8 bg-white border-4 border-platinum rounded-full flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <p className="ml-6 text-2xl">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Coursework Carousel */}
        <section id="courses" className="py-32 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-serif text-center mb-12">Coursework & Projects</h2>
            <motion.div
              className="flex space-x-8 overflow-x-auto pb-4 scrollbar-thumb-rose-gold scrollbar-thin"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            >
              {['ACC2010','PHY2010','MTH3110','ACC3020','PHY2020','MTH3410'].map((code,i) => (
                <motion.div
                  key={code}
                  className="min-w-[280px] bg-white rounded-3xl shadow-2xl p-6 relative"
                  variants={reveal}
                  custom={i}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold to-platinum opacity-20 blur-lg mix-blend-overlay" />
                  <h3 className="text-2xl font-bold mb-2 relative z-10">{code}</h3>
                  <p className="text-gray-600 relative z-10">Preview key concepts & sample challenges.</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-32">
          <div className="max-w-5xl mx-auto px-6 relative">
            <h2 className="text-5xl font-serif text-center mb-16">Testimonials</h2>
            <motion.div
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.5 } } }}
            >
              {[
                { quote: '+200 points in 8 weeks', author: 'John Doe', img: '/images/john.jpg' },
                { quote: 'AP Physics C: 100%', author: 'Jane Smith', img: '/images/jane.jpg' },
                { quote: 'College Essay Accepted at Yale', author: 'Alex Lee', img: '/images/alex.jpg' },
                { quote: 'SAT Math: Top 1%', author: 'Maria Garcia', img: '/images/maria.jpg' }
              ].map((t,i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-3xl shadow-2xl p-8 flex items-center space-x-6"
                  variants={reveal}
                  custom={i}
                >
                  <img src={t.img} alt={t.author} className="w-20 h-20 rounded-full object-cover shadow-md" />
                  <div>
                    <p className="italic text-xl">“{t.quote}”</p>
                    <p className="mt-2 font-semibold">— {t.author}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="process" className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl font-serif text-center mb-16">Our Process</h2>
            <div className="relative">
              <svg className="absolute left-[50%]" width="2" height="500" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="linegrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EAB308"/>
                    <stop offset="100%" stopColor="#F97316"/>
                  </linearGradient>
                </defs>
                <motion.line x1="1" y1="0" x2="1" y2="500" stroke="url(#linegrad)" strokeWidth="3"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
              </svg>
              <div className="space-y-24">
                {[
                  { step: 'Consult', desc: '15-min call via Calendly' },
                  { step: 'Strategize', desc: 'Craft custom syllabus & milestones' },
                  { step: 'Master', desc: 'Interactive sessions & analytics dashboard' }
                ].map((item,i) => (
                  <motion.div
                    key={i}
                    className="flex items-center pl-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={reveal}
                    custom={i}
                  >
                    <div className="absolute left-[50%] w-10 h-10 bg-rose-gold text-white rounded-full flex items-center justify-center text-lg font-bold">
                      {i+1}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-3xl font-semibold mb-2">{item.step}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section id="pricing" className="py-32 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-serif text-center mb-16">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[{name:'Core',price:'$80/hr',roi:'+150%'},{name:'Accelerator',price:'$100/hr',roi:'+200%'},{name:'Mastery',price:'$120/hr',roi:'+300%'}].map((plan,i) => (
                <motion.div
                  key={plan.name}
                  className="relative bg-white rounded-3xl shadow-2xl p-8 text-center"
                  initial={{ opacity:0, scale:0.8 }}
                  animate={{ opacity:1, scale:1 }}
                  transition={{ delay: i*0.3, duration: 0.8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-gold to-platinum opacity-30 blur-lg mix-blend-overlay" />
                  <div className="relative">
                    <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                    <p className="text-4xl font-extrabold mb-2">{plan.price}</p>
                    <p className="text-gray-600 mb-6">ROI: {plan.roi}</p>
                    <button className="px-6 py-3 bg-rose-gold text-white rounded-full hover:scale-105 transition-transform">Select</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Essay */}
        <section id="essay" className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-serif mb-12">Featured College Essay</h2>
            <Lottie play loop animationData={essayLottie} className="mx-auto w-full max-w-xl" />
            <motion.div
              className="mt-12 bg-paper-grain p-12 rounded-3xl shadow-2xl"
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.5 }}
            >
              <p className="text-lg text-gray-800">
                "[Your first two sentences here...]"
                <motion.span whileHover={{ color: '#F97316' }} className="cursor-pointer">
                  Read More
                </motion.span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resume */}
        <section id="resume" className="py-32 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-serif mb-8">My Resume & Certifications</h2>
            <div className="grid grid-cols-2 gap-8 mb-12">
              {['AP Scholar','NSHSS','NLCS','5th Grade Valedictorian'].map((cert,i) => (
                <div key={i} className="flex items-center space-x-4">
                  <img src={`/badges/${cert.replace(/ /g,'')}.svg`} alt={cert} className="w-12 h-12" />
                  <span className="text-lg font-medium">{cert}</span>
                </div>
              ))}
            </div>
            <motion.div
              className="relative w-full h-96 border border-gray-300 rounded-2xl overflow-hidden shadow-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <iframe src="/resume/preview.html" className="w-full h-full" />
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32 bg-white relative">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-serif mb-6">Let's Connect</h2>
            <p className="text-lg mb-8">Ready to skyrocket your success? Schedule now or message me directly.</p>
            <div className="space-x-6">
              <motion.button className="px-10 py-4 bg-rose-gold text-white rounded-full shadow-2xl hover:scale-105 transition-transform">
                Schedule via Calendly
              </motion.button>
              <motion.button className="px-10 py-4 border border-rose-gold text-rose-gold rounded-full hover:bg-rose-gold hover:text-white transition-colors">
                Email Me
              </motion.button>
            </div>
          </div>
          <div className="fixed left-4 top-1/3 space-y-4">
            {['linkedin','instagram','whatsapp'].map((s,i) => (
              <motion.a key={s} href="#" className="block text-2xl text-gray-500 hover:text-rose-gold" whileHover={{ scale: 1.2 }}>
                <i className={`icon-${s}`}></i>
              </motion.a>
            ))}
          </div>
        </section>

        <footer className="py-12 bg-gray-800 text-center text-gray-400">
          © {new Date().getFullYear()} Blake Bird Coaching. All Rights Reserved.
        </footer>
      </main>
    </div>
);

