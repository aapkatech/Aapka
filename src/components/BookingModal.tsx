import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Phone, 
  User, 
  MapPin, 
  CreditCard, 
  CheckCircle, 
  ArrowRight,
  Activity,
  HeartHandshake
} from 'lucide-react';
import type { Language } from '../data/translations';
import { content } from '../data/translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  lang,
  initialService = 'smartcard' 
}) => {
  const t = content[lang];
  const [serviceType, setServiceType] = useState(initialService);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setLocation('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white p-7 sm:p-8 shadow-2xl border border-slate-100 transition-all animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={resetForm}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'hi' ? 'तुरंत सहायता गारंटी' : 'Instant Swasthya-Mitra Assistance'}</span>
              </div>
              <h3 id="modal-title" className="text-2xl font-black text-slate-900 tracking-tight">
                {lang === 'hi' ? 'सेवा का चयन करें व विवरण भरें' : 'Book Healthcare Assistance'}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {lang === 'hi' 
                  ? 'हमारे स्थानीय स्वास्थ्य-मित्र 15 मिनट में आपसे संपर्क करेंगे।' 
                  : 'A dedicated Swasthya-Mitra will call you within 15 minutes.'}
              </p>
            </div>

            {/* Service Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                {lang === 'hi' ? 'सेवा चुनें:' : 'Select Service:'}
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
              >
                <option value="smartcard">💳 Aapka Smart Health Card (Family Coverage)</option>
                <option value="hospitalization">🏥 Hospitalization & Surgery Assistance</option>
                <option value="pathology">🧪 Home Blood Sample Pickup / Diagnostic Test</option>
                <option value="teleconsult">📞 Doctor Tele-Consultation (Video/Phone)</option>
                <option value="caretaker">🤝 24x7 Bedside Attendant & Elderly Care</option>
                <option value="grammitra">🌟 Join as a Certified Gram Mitra</option>
              </select>
            </div>

            {/* Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                {lang === 'hi' ? 'पूरा नाम:' : 'Full Name:'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'hi' ? 'उदा. रामेश्वर शर्मा' : 'e.g. Rameshwar Sharma'}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                {lang === 'hi' ? '10-अंकों का मोबाइल नंबर:' : '10-Digit Mobile Number:'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="98765 43210"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
            </div>

            {/* Location / Village / Pincode */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                {lang === 'hi' ? 'गांव / कस्बा / पिनकोड:' : 'Village / District / Pincode:'}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={lang === 'hi' ? 'उदा. बुलंदशहर / 203001' : 'e.g. Bulandshahr / 203001'}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/25 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{lang === 'hi' ? 'स्वास्थ्य-मित्र से जुड़ें' : 'Connect with Swasthya-Mitra'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-400">
              🔒 {lang === 'hi' ? 'आपकी जानकारी सुरक्षित है और कभी साझा नहीं की जाएगी।' : 'Your health data is 100% confidential under SP Rural India Services.'}
            </p>
          </form>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">
              {lang === 'hi' ? 'अनुरोध सफलतापूर्वक प्राप्त हुआ!' : 'Request Received Successfully!'}
            </h3>

            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              {lang === 'hi'
                ? `धन्यवाद ${name}! आपके नजदीकी स्वास्थ्य-मित्र को सूचित कर दिया गया है। वे शीघ्र ही ${phone} पर आपसे संपर्क करेंगे।`
                : `Thank you, ${name}! Your local Swasthya-Mitra has been assigned and will call you on ${phone} within 15 minutes.`}
            </p>

            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={resetForm}
                className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider"
              >
                {lang === 'hi' ? 'ठीक है (Close)' : 'Back to Home'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
