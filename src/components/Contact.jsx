import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Please include a message';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-[#C5A880] mb-3">
              <span>05 / INITIATE CONVERSATION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-neutral-900 dark:text-neutral-50">
              Get in Touch
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            CONNECT · COLLABORATE · INQUIRE
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct info, Quick copy & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-neutral-900 dark:text-neutral-100 mb-4 leading-snug">
                Let's build something thoughtful together.
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                Whether you have an internship opportunity, an AI project idea, an open-source collaboration, or just want to discuss Python & systems design, my inbox is always open.
              </p>
            </div>

            {/* Quick Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#090910]/85 backdrop-blur-md border border-neutral-800/90 shadow-md space-y-4 hover:border-amber-500/40 transition-colors">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
                Primary Contact
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="font-serif text-lg text-neutral-100 hover:text-amber-400 transition-colors break-all"
                >
                  {personalData.contact.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="self-start sm:self-auto px-3.5 py-1.5 rounded-full border border-neutral-700 hover:border-amber-400 text-xs font-mono tracking-wider flex items-center gap-1.5 transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Academic Location Card */}
            <div className="p-6 rounded-2xl bg-[#090910]/60 backdrop-blur-md border border-neutral-800/80 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A880] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Base of Operations</span>
              </span>
              <p className="font-serif text-base text-neutral-900 dark:text-neutral-100">
                {personalData.contact.college}
              </p>
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                {personalData.contact.address}
              </p>
            </div>

            {/* Social Links Bar */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
                Direct Channels
              </span>
              <div className="flex flex-col gap-2.5">
                {personalData.contact.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200/90 dark:border-neutral-800 hover:border-[#C5A880] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      {social.name === 'GitHub' && <Github className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-[#C5A880]" />}
                      {social.name === 'LinkedIn' && <Linkedin className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-[#C5A880]" />}
                      {social.name === 'Email' && <Mail className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-[#C5A880]" />}
                      <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-[#C5A880]">
                        {social.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#090910]/85 backdrop-blur-md border border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <h4 className="font-serif text-2xl font-normal text-neutral-100 mb-2">
                Send a Direct Message
              </h4>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-8">
                Responses typically dispatched within 24 hours
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Chen"
                      className={`w-full px-4 py-3 rounded-xl bg-[#13121E]/70 border ${
                        errors.name ? 'border-red-500' : 'border-neutral-700/80'
                      } text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#13121E]/70 border ${
                        errors.email ? 'border-red-500' : 'border-neutral-700/80'
                      } text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                  >
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship / Project Collaboration / Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-[#13121E]/70 border border-neutral-700/80 text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your goals, project details, or internship query..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#13121E]/70 border ${
                      errors.message ? 'border-red-500' : 'border-neutral-700/80'
                    } text-neutral-100 text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 transition-colors`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-amber-400 text-black font-mono text-xs uppercase tracking-widest hover:bg-amber-300 transition-all flex items-center justify-center gap-2 group disabled:opacity-60 shadow-[0_0_20px_rgba(245,158,11,0.3)] font-semibold"
                  data-cursor-text="TRANSMIT"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* Confirmation Alert */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono flex items-center gap-2.5"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Thank you, Albin has received your transmission and will get back to you shortly!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

