import { motion } from "framer-motion";
const profileImg = '/images/profile2.jpeg';

const sectionVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({ opacity: 1, x: 0, transition: { delay: 0.25 * i, duration: 0.9 } }),
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Section: Hero (image + hello) */}
      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8 px-6">
          <motion.img
            src={profileImg}
            alt="Eliška Jelinek"
            className="w-48 h-48 rounded-2xl border-2 border-primary object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          />

          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="flex-1">
            <h1 className="text-4xl font-bold mb-2 text-primary">Oh hello there!</h1>
            <p className="text-gray-300 mb-6">I'm Eliška. Welcome to my little corner of the internet!</p>
          </motion.div>
        </div>
      </section>
{/* 
      <section className="w-full py-12">
        <div className="max-w-4xl mx-auto px-1">
            <h1 className="text-2xl font-mono tracking-wide uppercase text-center" style={{ color: 'var(--primary)' }}>WHO I AM IN...</h1>
        </div>
      </section> */}

      {/* Section: 3 words */}
      <section className="w-full py-6">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="flex items-stretch gap-6 glass-red">
            <div className="w-36 flex items-center justify-center">
              <h3 className="text-2xl font-mono tracking-wide uppercase text-center" style={{ color: 'var(--primary)' }}>3 WORDS</h3>
            </div>
            <div className="flex-1 text-left">
              <p className="text-xl text-gray-300">Daring. Creative. Curious.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: 2 sentences */}
      <section className="w-full py-6">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="flex items-stretch gap-6 glass-red">
            <div className="w-36 flex items-center justify-center">
              <h3 className="text-2xl font-mono tracking-wide uppercase text-center" style={{ color: 'var(--primary)' }}>2 SENTENCES</h3>
            </div>
            <div className="flex-1 text-left">
              <p className="text-xl text-gray-300">I'm a relentless creator at the intersection of computer science and business, driven by growth and sustained by creation. I'm an outdoorsy go-getter and electric bass guitarist in my free time.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: 1 paragraph */}
      <section className="w-full py-6">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="flex items-stretch gap-6 glass-red">
            <div className="w-36 flex items-center justify-center">
              <h3 className="text-2xl font-mono tracking-wide uppercase text-center" style={{ color: 'var(--primary)' }}>1 PARAGRAPH</h3>
            </div>
            <div className="flex-1 text-left">
              <p className="text-xl text-gray-300">I'm always up to something, be it playing in a band, diving deep into a coding project, or hiking the steepest trails. I'm majoring in computer science, and minoring in both mathematics and entrepreneurship, at California Polytechnic State University SLO. I'm also the business lead for Analogue Design Lab, an active member of several clubs (CP Entrepreneurs, Music Production Club, and CS+AI), and the bassist for three bands. </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
