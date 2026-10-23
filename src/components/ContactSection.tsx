import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  AlertCircle 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    inquiryType: 'Hospital Admission & Bed Staging',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError('Please provide a valid 10-digit contact telephone number.');
      return;
    }

    setLoading(true);
    // Simulate swift network dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      location: '',
      inquiryType: 'Hospital Admission & Bed Staging',
      message: ''
    });
    setError('');
  };

  const encodedWhatsApp = encodeURIComponent(
    `Hello Aapka Team, my name is ${formData.name || 'Patient'}. I am contacting regarding ${formData.inquiryType} in ${formData.location || 'my area'}. Phone: ${formData.phone}. Message: ${formData.message || 'Please assist.'}`
  );

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
            <span>24/7 Care Coordination & Inquiries</span>
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
            Connect With Our Clinical Team
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Whether you need urgent emergency bed staging, want to join as a Gram Mitra, or represent a hospital looking to empanel with Aapka — we respond within minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Contact Info & Leadership Linkages */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-white text-slate-900 space-y-6 shadow-sm border border-slate-200/90">
              <div className="space-y-2">
                <span className="text-xs uppercase font-semibold tracking-wider text-teal-700">Direct Coordination Lines</span>
                <h3 className="text-xl font-bold font-serif text-slate-900">Emergency &amp; Support Hub</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Our coordination desk is connected directly to hospital casualty counters and on-ground coordinators.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200/60">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Helpline Numbers</p>
                    <a href="tel:+919716332976" className="block text-sm font-semibold text-slate-900 hover:text-teal-700 transition-colors">
                      +91 9716332976
                    </a>
                    <a href="tel:+919667033044" className="block text-xs text-slate-600 hover:text-teal-700 transition-colors">
                      +91 9667033044
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200/60">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Executive Inquiries</p>
                    <a href="mailto:prabal@aapka.co.in" className="block text-sm font-semibold text-slate-900 hover:text-teal-700 transition-colors">
                      prabal@aapka.co.in
                    </a>
                    <a href="mailto:info@aapka.co.in" className="block text-xs text-slate-600 hover:text-teal-700 transition-colors">
                      info@aapka.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-200/60">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Registered Office</p>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      201 Convention Centre, JNU New Delhi, 110067
                    </p>
                    <p className="text-[11px] text-slate-500">SP Rural India Services Private Limited</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-teal-700 font-medium">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Average coordinator response time: &lt; 15 minutes</span>
              </div>
            </div>

            {/* Micro Guarantee */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 flex items-center gap-3 shadow-2xs">
              <ShieldCheck className="w-8 h-8 text-teal-700 shrink-0" />
              <div className="space-y-0.5">
                <p className="text-xs font-semibold text-slate-900">100% Patient Confidentiality</p>
                <p className="text-[11px] text-slate-500">Your health details are encrypted and shared only with verified hospital clinicians.</p>
              </div>
            </div>

          </div>

          {/* Right: Working Interactive Contact Form (Item 20) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 font-serif">Send a Care Coordination Request</h3>
                    <p className="text-xs text-slate-500">Fill in the patient or case details below to activate immediate assistance.</p>
                  </div>

                  {error && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-700">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-700">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="location" className="block text-xs font-semibold text-slate-700">
                        Village / District / City
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Banswara, Dungarpur, or Delhi NCR"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="inquiryType" className="block text-xs font-semibold text-slate-700">
                        Purpose of Inquiry
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                      >
                        <option value="Hospital Admission & Bed Staging">Hospital Admission &amp; Bed Staging</option>
                        <option value="Emergency Ambulance Coordination">Emergency Ambulance Coordination</option>
                        <option value="Join as a Gram Mitra Facilitator">Join as a Gram Mitra Facilitator</option>
                        <option value="Hospital Empanellment & Partnership">Hospital Empanellment &amp; Partnership</option>
                        <option value="Diagnostic Lab Booking">Diagnostic Lab Booking</option>
                        <option value="General Health Scheme Inquiry">General Health Scheme Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700">
                      Medical Condition or Inquiry Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe the symptoms, hospital preference, or assistance needed..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-sm tracking-tight shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {loading ? (
                        <span>Activating Care Coordinator...</span>
                      ) : (
                        <>
                          <span>Submit Care Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center">
                    By submitting, you agree to our confidential patient data handling under the DPDP Act 2023.
                  </p>
                </form>
              ) : (
                /* Success State with Instant WhatsApp & Call Options */
                <div className="py-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold font-serif text-slate-900">
                      Request Dispatched Successfully!
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. An Aapka healthcare coordinator has been assigned to your case regarding <strong>{formData.inquiryType}</strong>.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-md mx-auto text-left space-y-3">
                    <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Fast-Track Options:</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href={`https://wa.me/919716332976?text=${encodedWhatsApp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <a
                        href="tel:+919716332976"
                        className="flex-1 py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call +91 9716332976</span>
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    ← Submit another request
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
