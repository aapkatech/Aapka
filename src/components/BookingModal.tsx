import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { AapkaLogo } from './AapkaLogo';
import type { Translations } from '../i18n/translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  t?: Translations['booking'];
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  initialService = 'hospitalization',
  t
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

  const title = t?.title || "Access Clinical Coordination";
  const subtitle = t?.subtitle || "Connect with an accredited medical navigator within 15 minutes. No waiting rooms, no clinical confusion.";
  const serviceLabel = t?.serviceLabel || "Service Pathway";
  const nameLabel = t?.nameLabel || "Full Name";
  const namePlaceholder = t?.namePlaceholder || "e.g. Eleanor Vance";
  const contactLabel = t?.contactLabel || "Contact Number";
  const contactPlaceholder = t?.contactPlaceholder || "+91 98765 43210";
  const cityLabel = t?.cityLabel || "City / Location";
  const cityPlaceholder = t?.cityPlaceholder || "e.g. New Delhi, Noida, or District";
  const submitButton = t?.submitButton || "Confirm & Dispatch Coordinator";
  const successTitle = t?.successTitle || "Care Request Active";
  const successDesc = t?.successDesc || "Thank you. A personal healthcare navigator has been assigned to coordinate your care pathway.";
  const closeButton = t?.closeButton || "Done";

  const serviceOptions = t?.serviceOptions || {
    hospitalization: "Hospitalization & Surgical Navigation",
    teleconsult: "Doctor Teleconsultation (MD Specialist)",
    pathology: "Diagnostic Pathology & Radiology Routing",
    smartcard: "Smart Health Card (Family Enrollment)",
    caretaker: "Bedside Attendant / Post-Op Care",
    emergency: "Emergency Patient Transfer"
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
              <div className="mb-3">
                <AapkaLogo variant="full" className="h-8 w-auto" />
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-zinc-950">
                {title}
              </h3>
              <p className="text-xs text-zinc-500 font-normal leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  {serviceLabel}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900"
                >
                  <option value="hospitalization">{serviceOptions.hospitalization || "Hospitalization & Surgery Coordination"}</option>
                  <option value="teleconsult">{serviceOptions.consultation || "Doctor Teleconsultation"}</option>
                  <option value="pathology">{serviceOptions.diagnostics || "Diagnostic Pathology & Radiology"}</option>
                  <option value="smartcard">{serviceOptions.card || "Smart Health Card Inquiry"}</option>
                  <option value="caretaker">{serviceOptions.emergency || "Bedside Attendant / Post-Op Care"}</option>
                  <option value="emergency">{serviceOptions.emergency || "Emergency Patient Transfer"}</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  {nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={namePlaceholder}
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  {contactLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={contactPlaceholder}
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  {cityLabel}
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={cityPlaceholder}
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-tight transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
            >
              <span>{submitButton}</span>
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
                {successTitle}
              </h3>
              <p className="text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
                {successDesc}
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
              {closeButton}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
