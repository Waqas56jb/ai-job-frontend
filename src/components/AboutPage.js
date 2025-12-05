import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const pageMotion = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const isGerman = i18n.language === 'de';

  const content = {
    de: {
      title: "Über uns – JOBspeedy AI",
      intro: "JOBspeedy AI ist eine innovative Recruiting-Plattform, die Künstliche Intelligenz, Automatisierung und menschliche Erfahrung kombiniert, um Bewerber und Unternehmen schneller und passgenauer zusammenzubringen. Unser Fokus liegt darauf, den gesamten Bewerbungs- und Einstellungsprozess einfacher, transparenter und effizienter zu gestalten.",
      forCompaniesTitle: "Für Unternehmen bedeutet das:",
      forCompanies: "Stellenausschreibungen lassen sich in Sekunden mit KI erstellen, Lebensläufe werden automatisch analysiert und passende Talente werden intelligent vorgeschlagen. Alle Prozesse laufen zentral über ein übersichtliches Dashboard – für weniger Aufwand und bessere Entscheidungen.",
      forCandidatesTitle: "Für Bewerber bietet JOBspeedy AI ein modernes und unkompliziertes Erlebnis:",
      forCandidates: "Ein Profil reicht aus, um automatisch passende Jobvorschläge zu erhalten, sich in wenigen Klicks zu bewerben und jederzeit den eigenen Fortschritt zu verfolgen. Die Plattform unterstützt dabei, Chancen schneller zu erkennen und Jobs zu finden, die wirklich zur eigenen Persönlichkeit und Erfahrung passen.",
      missionTitle: "Unsere Mission ist klar:",
      mission: "Recruiting neu denken – fairer, schneller und menschlicher.",
      missionDesc: "Wir schaffen Technologien, die entlasten und verbinden, damit beide Seiten genau das finden, was sie suchen.",
      closing: "JOBspeedy AI steht für Innovation, Transparenz und echte Unterstützung.",
      closingFinal: "Wir gestalten die Zukunft des Recruitings – dort, wo KI auf Chancen trifft und Menschen in den Mittelpunkt rückt."
    },
    en: {
      title: "About Us – JOBspeedy AI",
      intro: "JOBspeedy AI is an innovative recruiting platform that combines artificial intelligence, automation, and human experience to bring applicants and companies together faster and more precisely. Our focus is on making the entire application and hiring process simpler, more transparent, and more efficient.",
      forCompaniesTitle: "For companies, this means:",
      forCompanies: "Job postings can be created in seconds with AI, resumes are automatically analyzed, and suitable talents are intelligently suggested. All processes run centrally through a clear dashboard – for less effort and better decisions.",
      forCandidatesTitle: "For applicants, JOBspeedy AI offers a modern and uncomplicated experience:",
      forCandidates: "One profile is enough to automatically receive matching job suggestions, apply in just a few clicks, and track your own progress at any time. The platform helps you recognize opportunities faster and find jobs that truly match your personality and experience.",
      missionTitle: "Our mission is clear:",
      mission: "Rethink recruiting – fairer, faster, and more human.",
      missionDesc: "We create technologies that relieve and connect, so both sides find exactly what they're looking for.",
      closing: "JOBspeedy AI stands for innovation, transparency, and genuine support.",
      closingFinal: "We shape the future of recruiting – where AI meets opportunities and people take center stage."
    }
  };

  const text = isGerman ? content.de : content.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f3ff] via-white to-[#eef4ff] text-gray-800">
      <Navbar />
      <div style={{ height: 70 }} />

      <div className="px-4 md:px-8 lg:px-12 pt-6 pb-16">
        {/* Hero Section */}
        <motion.div
          {...pageMotion}
          className="max-w-6xl mx-auto bg-white/85 backdrop-blur rounded-3xl border border-slate-200 shadow-xl shadow-sky-100 p-6 md:p-10 mb-8"
        >
          <div className="text-center mb-8">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full mb-4">
              🚀 About Us
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {text.title}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg"
          >
            <p className="text-slate-700 leading-relaxed text-lg">
              {text.intro}
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 mb-8">
          {/* For Companies Card */}
          <motion.div
            {...pageMotion}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <span className="text-2xl">🏢</span>
              </div>
              <h2 className="text-2xl font-bold text-indigo-700">
                {text.forCompaniesTitle}
              </h2>
            </div>
            <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
              <p className="text-slate-700 leading-relaxed">
                {text.forCompanies}
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-3 border border-indigo-100 text-center">
                <p className="text-2xl mb-1">⚡</p>
                <p className="text-xs text-slate-600 font-semibold">Schnell</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-indigo-100 text-center">
                <p className="text-2xl mb-1">🤖</p>
                <p className="text-xs text-slate-600 font-semibold">KI-gestützt</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-indigo-100 text-center">
                <p className="text-2xl mb-1">📊</p>
                <p className="text-xs text-slate-600 font-semibold">Dashboard</p>
              </div>
            </div>
          </motion.div>

          {/* For Candidates Card */}
          <motion.div
            {...pageMotion}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <span className="text-2xl">👤</span>
              </div>
              <h2 className="text-2xl font-bold text-emerald-700">
                {text.forCandidatesTitle}
              </h2>
            </div>
            <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-100">
              <p className="text-slate-700 leading-relaxed">
                {text.forCandidates}
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-3 border border-emerald-100 text-center">
                <p className="text-2xl mb-1">🎯</p>
                <p className="text-xs text-slate-600 font-semibold">Passgenau</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-emerald-100 text-center">
                <p className="text-2xl mb-1">⚡</p>
                <p className="text-xs text-slate-600 font-semibold">Schnell</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-emerald-100 text-center">
                <p className="text-2xl mb-1">📈</p>
                <p className="text-xs text-slate-600 font-semibold">Fortschritt</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          {...pageMotion}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 rounded-3xl shadow-xl p-8 md:p-12 text-white mb-8"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-4">
              <span className="text-2xl">🎯</span>
              <p className="text-sm font-semibold">Unsere Mission</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {text.missionTitle}
            </h2>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8 border border-white/20 mb-6">
            <p className="text-2xl md:text-3xl font-bold text-center mb-4">
              {text.mission}
            </p>
            <p className="text-lg text-center text-white/90 leading-relaxed">
              {text.missionDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 text-center">
              <p className="text-3xl mb-2">⚖️</p>
              <p className="font-semibold">Fairer</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 text-center">
              <p className="text-3xl mb-2">⚡</p>
              <p className="font-semibold">Schneller</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 text-center">
              <p className="text-3xl mb-2">❤️</p>
              <p className="font-semibold">Menschlicher</p>
            </div>
          </div>
        </motion.div>

        {/* Closing Section */}
        <motion.div
          {...pageMotion}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 p-6 md:p-10"
        >
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <p className="text-slate-800 text-lg leading-relaxed font-medium">
                {text.closing}
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-slate-700 text-lg leading-relaxed">
                {text.closingFinal}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-sky-50 rounded-xl p-5 border border-sky-100 text-center">
                <p className="text-3xl mb-2">💡</p>
                <p className="font-semibold text-sky-900 mb-1">Innovation</p>
                <p className="text-sm text-sky-700">Moderne Technologien</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 text-center">
                <p className="text-3xl mb-2">🔍</p>
                <p className="font-semibold text-emerald-900 mb-1">Transparenz</p>
                <p className="text-sm text-emerald-700">Klare Prozesse</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100 text-center">
                <p className="text-3xl mb-2">🤝</p>
                <p className="font-semibold text-amber-900 mb-1">Unterstützung</p>
                <p className="text-sm text-amber-700">Echte Hilfe</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-indigo-100 via-white to-purple-100 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">JobSpeedy AI</h3>
              <p className="text-gray-600 text-sm">
                Empowering your recruitment journey with AI-powered job matching and career insights.
              </p>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-md font-semibold text-gray-900 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/privacy" className="text-gray-600 hover:text-[#0477BF] transition-colors">
                    {t("Privacy Policy")}
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-600 hover:text-[#0477BF] transition-colors">
                    {t("Terms of Use")}
                  </a>
                </li>
                <li>
                  <a href="/impressum" className="text-gray-600 hover:text-[#0477BF] transition-colors">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="/ai-compliance" className="text-gray-600 hover:text-[#0477BF] transition-colors">
                    AI Compliance
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-md font-semibold text-gray-900 mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>support@jobspeedy.ai</li>
                <li>+49 821 / 486 99 516</li>
                <li>Alfred-Nobel-Str. 9, 86156 Augsburg</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2025 JobSpeedy AI | {t("All Rights Reserved")}</p>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
              <span>Language: 🇬🇧 🇩🇪</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
