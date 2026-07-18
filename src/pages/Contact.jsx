import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('Please fill in all the required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Success response
    setSuccess(true);
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setTimeout(() => setSuccess(false), 5000);
  };

  const breadcrumbsPaths = [{ name: 'Contact Us', url: '/contact' }];

  return (
    <>
      <SEOHead 
        title="Contact Demo AdSense"
        description="Get in touch with the Demo AdSense editorial team, submit inquiries, suggest feedback, or report technical errors."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        
        {/* Breadcrumbs */}
        <Breadcrumbs paths={breadcrumbsPaths} />

        <div className="max-w-5xl mx-auto py-8">
          
          <div className="text-center mb-12">
            <h1 className="font-display font-extrabold text-3.5xl md:text-4.5xl text-slate-900 dark:text-white leading-tight">
              Contact Demo AdSense
            </h1>
            <p className="text-base text-slate-500 dark:text-slate-400 mt-2 font-sans">
              Have a question or feedback? We would love to hear from you.
            </p>
            <div className="h-1 w-16 bg-green-600 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Contact Information */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-slate-900 text-white rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
              
              <div>
                <h3 className="font-display font-extrabold text-xl mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-slate-400 block font-semibold">Email Us</span>
                      <a href="mailto:support@demoadsense.com" className="text-sm hover:underline text-white font-medium">support@demoadsense.com</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <Phone className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-slate-400 block font-semibold">Call Us</span>
                      <span className="text-sm font-medium">+1 (555) 019-2834</span>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-xs text-slate-400 block font-semibold">Office Location</span>
                      <span className="text-sm text-slate-300 font-sans leading-relaxed">
                        100 Pine Street, Suite 1250<br />San Francisco, CA 94111
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 border-t border-slate-800/80 mt-10">
                <span className="text-xs text-slate-400 uppercase tracking-widest block mb-4">Follow Our Updates</span>
                <div className="flex items-center space-x-3">
                  <a href="https://github.com/demoadsense" target="_blank" rel="noopener noreferrer" className="p-2 rounded-[14px] bg-slate-800 hover:bg-green-600 transition-colors text-white" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://twitter.com/demoadsense" target="_blank" rel="noopener noreferrer" className="p-2 rounded-[14px] bg-slate-800 hover:bg-green-600 transition-colors text-white" aria-label="Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com/company/demoadsense" target="_blank" rel="noopener noreferrer" className="p-2 rounded-[14px] bg-slate-800 hover:bg-green-600 transition-colors text-white" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com/demoadsense" target="_blank" rel="noopener noreferrer" className="p-2 rounded-[14px] bg-slate-800 hover:bg-green-600 transition-colors text-white" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50 rounded-3xl p-6 sm:p-8 shadow-xs">
              <h3 className="font-display font-extrabold text-xl text-slate-900 dark:text-white mb-6">Send Us a Message</h3>
              
              {success && (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-300 rounded-[18px] flex gap-3 items-start mb-6">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-display font-bold text-sm block">Message Sent Successfully!</span>
                    <p className="text-xs font-sans mt-0.5 leading-relaxed">
                      Thank you for contacting Demo AdSense. Our support team will review your ticket and reply within 24-48 business hours.
                    </p>
                  </div>
                </div>
              )}

              {error && (
                <div className="p-3.5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-red-800 dark:text-red-300 rounded-[18px] text-xs font-semibold mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5 font-display">Your Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 text-sm rounded-[14px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5 font-display">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 text-sm rounded-[14px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5 font-display">Subject</label>
                  <input
                    type="text"
                    placeholder="Editorial query / AdSense report"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 text-sm rounded-[14px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1.5 font-display">Message Content</label>
                  <textarea
                    placeholder="Describe your inquiry in detail..."
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 text-sm rounded-[14px] border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-[14px] bg-green-600 hover:bg-green-700 text-white font-bold transition-all hover:shadow-lg hover:shadow-green-500/10 cursor-pointer text-sm"
                >
                  Submit Inquiry <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
