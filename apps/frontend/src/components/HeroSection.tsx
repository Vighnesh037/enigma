
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { useAuth } from "../contexts/AuthContext";
import Footer from "./ui/footer";

const steps = [
  { id: 1, number: "01", title: "REGISTER", description: "Create an account or sign in with Google" },
  { id: 2, number: "02", title: "DAILY QUESTION", description: "Answer today's challenge as quickly as possible" },
  { id: 3, number: "03", title: "COMPETE", description: "See your ranking on the daily leaderboard" },
  { id: 4, number: "04", title: "REPEAT", description: "Come back tomorrow for the next challenge!" }
];

const tilesContainerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.18, when: "beforeChildren" } }
};

const tileVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works-section" className="pt-24 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          style={{ fontFamily: "WhirlyBirdie" }}
          className="text-4xl md:text-5xl font-bold text-black text-center mb-6"
        >
          HOW IT WORKS
        </h2>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-2xl md:text-3xl font-bold text-black/90">Join our 10-day treasure hunt!!</p>
          <p className="text-md md:text-lg font-bold text-black/70 mt-4">
            One question per day, compete for the fastest completion time, and climb the daily leaderboard
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={tilesContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={tileVariants}
              className="group relative bg-black border-[3px] border-white text-white overflow-hidden cursor-pointer flex items-center justify-center"
              style={{ minHeight: 260 }}
              tabIndex={0}
            >
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-6 w-full h-full">
                <div
                  style={{ fontFamily: "WhirlyBirdie" }}
                  className="text-[1.9rem] md:text-[2.2rem] font-bold mb-2"
                >
                  {step.number}
                </div>

                <div
                  style={{ fontFamily: "WhirlyBirdie" }}
                  className="text-base md:text-lg font-bold mb-3"
                >
                  {step.title}
                </div>

                <p
                  className={
                    "text-sm md:text-base text-white/90 max-w-[160px] mx-auto transition-all duration-700 transform opacity-0 translate-y-4 " +
                    "group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 text-center"
                  }
                >
                  {step.description}
                </p>
              </div>

              <div aria-hidden className="pointer-events-none absolute inset-0 border-[3px] border-white" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

const HeroSection = () => {
  const { currentUser } = useAuth();

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.25 } } };

  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9 } } };

  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.9 } } };

  const scrollToHow = () => {
    const el = document.getElementById("how-it-works-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div className="flex flex-col" initial="hidden" animate="visible" variants={containerVariants}>
      <section className="flex min-h-screen flex-col justify-center">
        <div className="flex px-4 sm:px-6 lg:px-8 pt-[140px] items-start justify-center select-none">
          <div className="max-w-5xl mx-auto text-center w-full">

            <motion.h1
              variants={fadeIn}
              style={{ fontFamily: "WhirlyBirdie" }}
              className={cn(
                "md:text-[9rem] sm:text-[7.5rem] text-[6rem] font-bold",
                "text-black tracking-[0.08em] leading-[0.85] mb-4"
              )}
            >
              ENIGMA
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-2xl sm:text-3xl md:text-4xl text-black mb-10 max-w-2xl mx-auto font-normal font-orbitron"
            >
              Online Treasure Hunt
            </motion.p>

            <motion.div className="mt-28 flex flex-col items-center gap-6" variants={containerVariants}>
              <motion.div variants={fadeUp}>
                <Link
                  to={currentUser ? "/play" : "/signin"}
                  className="px-12 py-4 rounded-full text-lg font-medium border border-black text-black bg-transparent hover:bg-black hover:text-white transition-all duration-200"
                >
                  Get Started
                </Link>
              </motion.div>

              <motion.button
                onClick={scrollToHow}
                variants={fadeUp}
                aria-label="Scroll"
                className="flex items-center justify-center w-12 h-12 rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.1, ease: "easeInOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.button>
            </motion.div>

          </div>
        </div>
      </section>

      <HowItWorksSection />
      <Footer />
    </motion.div>
  );
};

export default HeroSection;
