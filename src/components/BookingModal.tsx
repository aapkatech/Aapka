import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { AapkaLogo } from './AapkaLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  initialService = 'consultation' 
}) => {
  const [service, setService] = useState(initialService);
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !contact) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFullName('');
    setContact('');
    setCity('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/40 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-white p-8 sm:p-10 shadow-2xl border border-zinc-200/80 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg mb-3">
                <AapkaLogo className="w-full h-full" />
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-zinc-950">
                Access Clinical Coordination
              </h3>
              <p className="text-xs text-zinc-500 font-normal leading-relaxed">
                Connect with an accredited medical navigator within 15 minutes. No waiting rooms, no clinical confusion.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  Service Pathway
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900"
                >
                  <option value="hospitalization">Hospitalization & Surgical Navigation</option>
                  <option value="teleconsult">Doctor Teleconsultation (MD Specialist)</option>
                  <option value="pathology">Diagnostic Pathology & Radiology Routing</option>
                  <option value="smartcard">Smart Health Card (Family Enrollment)</option>
                  <option value="caretaker">Bedside Attendant / Post-Op Care</option>
                  <option value="emergency">Emergency Patient Transfer</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  Contact Number
                </label>
                <input
                  type="tel"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  City / Location
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. New Delhi, Noida, or District"
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-tight transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Confirm & Dispatch Coordinator</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>DPDP Act 2023 & HIPAA Compliant Healthcare Vault</span>
            </div>
          </form>
        ) : (
          <div className="py-6 text-center space-y-5 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto text-teal-700">
              <Check className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-medium tracking-tight text-zinc-950">
                Care Request Active
              </h3>
              <p className="text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
                Thank you, {fullName}. A personal healthcare navigator has been assigned to coordinate your care pathway.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 text-xs text-zinc-600 space-y-1 text-left">
              <p className="font-semibold text-zinc-900">Direct Helpline:</p>
              <div className="flex items-center justify-between">
                <span>Clinical Desk: +91 9667033044</span>
                <a href="tel:+919667033044" className="text-teal-700 font-semibold hover:underline">
                  Call Now
                </a>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-2.5 rounded-lg bg-zinc-950 text-white text-xs font-semibold"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
