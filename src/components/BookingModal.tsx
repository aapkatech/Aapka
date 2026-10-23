import React, { useState, useEffect, useCallback } from 'react';
import { X, Check, ArrowRight, ShieldCheck, MessageSquare, Phone, AlertCircle } from 'lucide-react';
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
  const normalizeService = (svc?: string) => {
    if (!svc) return 'hospitalization';
    if (svc === 'consultation') return 'teleconsult';
    if (svc === 'diagnostics') return 'pathology';
    if (svc === 'card') return 'smartcard';
    return svc;
  };

  const [service, setService] = useState(() => normalizeService(initialService));
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleClose = useCallback(() => {
    setSubmitted(false);
    setError('');
    setFullName('');
    setContact('');
    setCity('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const validateIndianMobile = (num: string): boolean => {
    const clean = num.replace(/[\s-]/g, '');
    return /^(?:(?:\+|0{0,2})91)?[6-9]\d{9}$/.test(clean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedContact = contact.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setError('Please provide a valid patient or guardian name (minimum 2 characters).');
      return;
    }

    if (!validateIndianMobile(trimmedContact)) {
      setError('Please enter a valid 10-digit Indian mobile number (e.g. +91 98765 43210).');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const title = t?.title || "Access Clinical Coordination";
  const subtitle = t?.subtitle || "Connect with an accredited medical navigator. No waiting rooms, no clinical confusion.";
  const serviceLabel = t?.serviceLabel || "Service Pathway";
  const nameLabel = t?.nameLabel || "Full Name";
  const namePlaceholder = t?.namePlaceholder || "e.g. Rahul Sharma";
  const contactLabel = t?.contactLabel || "Contact Number";
  const contactPlaceholder = t?.contactPlaceholder || "+91 98765 43210";
  const cityLabel = t?.cityLabel || "City / District / Village";
  const cityPlaceholder = t?.cityPlaceholder || "e.g. Meerut, Bulandshahr, or Delhi NCR";
  const submitButton = t?.submitButton || "Prepare Direct Care Connection";
  const successTitle = t?.successTitle || "Direct Care Connection Prepared";
  const successDesc = t?.successDesc || "Your request is ready for coordination. Tap below to connect directly with the Aapka Care Desk via WhatsApp or Call.";
  const closeButton = t?.closeButton || "Done";

  const serviceOptions = t?.serviceOptions || {
    hospitalization: "Hospitalization & Surgery Coordination",
    teleconsult: "Doctor Teleconsultation (Instant / Scheduled)",
    pathology: "Diagnostic Lab & Pathology Home Collection",
    smartcard: "Smart Health Card Inquiry",
    caretaker: "Bedside Attendants & Home Recovery Care",
    emergency: "Emergency Transport & Bed Reservation"
  };

  const selectedServiceLabel = serviceOptions[service] || serviceOptions.hospitalization || "Healthcare Coordination";

  const cleanPhone = contact.replace(/[^0-9+]/g, '');
  const encodedWhatsApp = encodeURIComponent(
    `Namaste Aapka Coordination Desk, I would like to request assistance for: ${selectedServiceLabel}.\nPatient Name: ${fullName.trim()}\nContact: ${cleanPhone}\nLocation: ${city.trim() || 'My area'}\n\nPlease connect me with an on-ground care coordinator.`
  );

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/50 backdrop-blur-md flex items-center justify-center p-4"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-10 shadow-2xl border border-zinc-200/80 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <div className="mb-2">
                <AapkaLogo variant="full" className="h-8 w-auto" />
              </div>
              <h3 id="booking-modal-title" className="text-2xl font-serif font-semibold tracking-tight text-zinc-950">
                {title}
              </h3>
              <p className="text-xs text-zinc-500 font-normal leading-relaxed">
                {subtitle}
              </p>
            </div>

            {error && (
              <div 
                role="alert" 
                className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2 animate-in fade-in"
              >
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label htmlFor="modal-service" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  {serviceLabel}
                </label>
                <select
                  id="modal-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900"
                >
                  <option value="hospitalization">
                    {serviceOptions.hospitalization || "Hospitalization & Surgery Coordination"}
                  </option>
                  <option value="teleconsult">
                    {serviceOptions.teleconsult || serviceOptions.consultation || "Doctor Teleconsultation (Instant / Scheduled)"}
                  </option>
                  <option value="pathology">
                    {serviceOptions.pathology || serviceOptions.diagnostics || "Diagnostic Lab & Pathology Home Collection"}
                  </option>
                  <option value="smartcard">
                    {serviceOptions.smartcard || serviceOptions.card || "Smart Health Card Inquiry"}
                  </option>
                  <option value="caretaker">
                    {serviceOptions.caretaker || "Bedside Attendants & Home Recovery Care"}
                  </option>
                  <option value="emergency">
                    {serviceOptions.emergency || "Emergency Transport & Bed Reservation"}
                  </option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="modal-fullname" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  {nameLabel}
                </label>
                <input
                  id="modal-fullname"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder={namePlaceholder}
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="modal-contact" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  {contactLabel}
                </label>
                <input
                  id="modal-contact"
                  type="tel"
                  required
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder={contactPlaceholder}
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="modal-city" className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  {cityLabel}
                </label>
                <input
                  id="modal-city"
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

            <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>DPDP Act 2023 Principles • Confidential Care Navigation</span>
            </div>
          </form>
        ) : (
          <div className="py-4 text-center space-y-5 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto text-teal-700">
              <Check className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-semibold tracking-tight text-zinc-950">
                {successTitle}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
                {successDesc}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs text-zinc-700 space-y-3 text-left">
              <div className="text-[11px] text-zinc-500 space-y-1">
                <p><span className="font-semibold text-zinc-700">Patient:</span> {fullName.trim()}</p>
                <p><span className="font-semibold text-zinc-700">Service:</span> {selectedServiceLabel}</p>
                {city.trim() && <p><span className="font-semibold text-zinc-700">Location:</span> {city.trim()}</p>}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1 border-t border-zinc-200">
                <a
                  href={`https://wa.me/919716332976?text=${encodedWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </a>
                <a
                  href="tel:+919667033044"
                  className="flex-1 py-2.5 px-3 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call +91 9667033044</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-zinc-500 hover:text-zinc-900 underline cursor-pointer"
              >
                ← Edit details
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="py-2 px-5 rounded-lg bg-zinc-200 hover:bg-zinc-300 text-zinc-900 text-xs font-semibold cursor-pointer transition-colors"
              >
                {closeButton}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
