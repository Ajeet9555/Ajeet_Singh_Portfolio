import React, { useState } from 'react';
import { personalData } from '../data/personal';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setFeedbackMsg('Please complete all form fields before sending.');
      return;
    }

    setStatus('submitting');
    
    // Construct mailto link as reliable client fallback + feedback state
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
      
      setStatus('success');
      setFeedbackMsg('Thank you! Your email client has been opened to dispatch your message directly to Ajeet Singh.');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0d14] relative">
      
      {/* Top Banner Call to Action Inspired by Behance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40 border border-blue-500/30 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-60" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              I'm always open to discussing new opportunities, interesting projects and potential collaborations.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`mailto:${personalData.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-glow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
              <a
                href={personalData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#131929] border border-blue-500/30 text-slate-200 font-semibold text-sm hover:border-blue-500 hover:text-white transition-all"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Details & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-heading font-extrabold text-3xl text-white">
                Contact <span className="text-gradient-blue-purple">Me</span>
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Feel free to reach out for opportunities or just a friendly chat.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#131929] border border-blue-500/15 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Email</span>
                  <a href={`mailto:${personalData.email}`} className="font-semibold text-white hover:text-blue-400 text-sm break-all">
                    {personalData.email}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#131929] border border-blue-500/15 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Phone</span>
                  <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="font-semibold text-white hover:text-blue-400 text-sm">
                    {personalData.phone}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#131929] border border-blue-500/15 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Location</span>
                  <span className="font-semibold text-white text-sm">
                    {personalData.location}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#131929] border border-blue-500/15 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-600/20 text-cyan-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">LinkedIn</span>
                  <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-blue-400 text-sm break-all">
                    linkedin.com/in/ajeetsinghrajput33
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#131929] border border-blue-500/15 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-rose-600/20 text-rose-400">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium block">GitHub</span>
                  <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-blue-400 text-sm break-all">
                    github.com/Ajeet9555
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#131929] border border-blue-500/20 shadow-2xl relative">
              
              <h4 className="font-heading font-bold text-xl text-white mb-6">
                Send a Direct Message
              </h4>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-300 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0d14] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0d14] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0d14] border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-glow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Opening Mail Client...' : 'Send Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
