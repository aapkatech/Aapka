import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, AlertCircle, Loader2, Phone, MessageSquare, Mail } from 'lucide-react';
import { AapkaLogo } from './AapkaLogo';
import type { Translations } from '../i18n/translations';
import { 
  submitCoordinationLead, 
  buildWhatsAppUrl, 
  buildMailtoUrl,
  AAPKA_HELPLINE_PHONE, 
  AAPKA_LOGISTICS_EMAIL 
} from '../services/leadService';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const serviceOptions = t?.serviceOptions || {
    hospitalization: "Hospitalization & Surgery Coordination",
    consultation: "Doctor Teleconsultation (MD Specialist)",
    diagnostics: "Diagnostic Pathology & Radiology Routing",
    card: "Smart Health Card (Family Enrollment)",
    emergency: "Emergency Patient Transfer & Bed Reservation"
  };

  const getPathwayName = (key: string): string => {
    switch (key) {
      case 'hospitalization':
        return serviceOptions.hospitalization || "Hospitalization & Surgery Coordination";
      case 'teleconsult':
      case 'consultation':
        return serviceOptions.consultation || "Doctor Teleconsultation (MD Specialist)";
      case 'pathology':
      case 'diagnostics':
        return serviceOptions.diagnostics || "Diagnostic Pathology & Radiology Routing";
      case 'smartcard':
      case 'card':
        return serviceOptions.card || "Smart Health Card (Family Enrollment)";
      case 'caretaker':
        return "Bedside Attendant / Post-Op Care";
      case 'emergency':
        return serviceOptions.emergency || "Emergency Patient Transfer & Bed Reservation";
      default:
        return key;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedName = fullName.trim();
    const cleanPhone = contact.replace(/[^0-9]/g, '');

    if (!trimmedName) {
      setError("Please provide the full name of the patient or guardian.");
      return;
    }

    if (cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    const pathwayName = getPathwayName(service);

    const result = await submitCoordinationLead({
      fullName: trimmedName,
      contact: contact.trim(),
      city: city.trim(),
      servicePathway: pathwayName,
      source: "Aapka Web Portal (Access Clinical Coordination Modal)"
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || `Unable to submit automatically. Please call our clinical desk at ${AAPKA_HELPLINE_PHONE}.`);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setError(null);
    setFullName('');
    setContact('');
    setCity('');
    onClose();
  };

  const title = t?.title || "Access Clinical Coordination";
  const subtitle = t?.subtitle || "Submit your requirement. A dedicated Swasthya-Mitra coordinator will contact you within 15 minutes.";
  const serviceLabel = t?.serviceLabel || "REQUIRED CARE PATHWAY";
  const nameLabel = t?.nameLabel || "FULL NAME OF PATIENT / GUARDIAN";
  const namePlaceholder = t?.namePlaceholder || "e.g. Rahul Sharma";
  const contactLabel = t?.contactLabel || "PHONE NUMBER / WHATSAPP";
  const contactPlaceholder = t?.contactPlaceholder || "10-digit mobile number";
  const cityLabel = t?.cityLabel || "CITY / DISTRICT";
  const cityPlaceholder = t?.cityPlaceholder || "e.g. Meerut, Bulandshahr, Delhi NCR";
  const submitButton = t?.submitButton || "Request Care Navigation";
  const successTitle = t?.successTitle || "Coordination Request Logged";
  const successDesc = t?.successDesc || `Your care requirement has been transmitted to our clinical dispatch desk (${AAPKA_LOGISTICS_EMAIL}). A personal Swasthya-Mitra coordinator will call you within 15 minutes.`;
  const closeButton = t?.closeButton || "Close Window";

  const leadData = {
    fullName: fullName.trim() || 'Patient',
    contact: contact.trim(),
    city: city.trim(),
    servicePathway: getPathwayName(service)
  };

  const waLink = buildWhatsAppUrl(leadData);
  const mailtoLink = buildMailtoUrl(leadData);

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

            {error && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-start gap-2.5 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1 space-y-2">
                  <p className="font-semibold">{error}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a 
                      href={`tel:${AAPKA_HELPLINE_PHONE}`} 
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-rose-700 text-white font-medium text-[11px]"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call {AAPKA_HELPLINE_PHONE}</span>
                    </a>
                    <a 
                      href={waLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-600 text-white font-medium text-[11px]"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  {serviceLabel}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-50 border border-zinc-200 text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 cursor-pointer"
                >
                  <option value="hospitalization">{serviceOptions.hospitalization || "Hospitalization & Surgery Coordination"}</option>
                  <option value="teleconsult">{serviceOptions.consultation || "Doctor Teleconsultation (MD Specialist)"}</option>
                  <option value="pathology">{serviceOptions.diagnostics || "Diagnostic Pathology & Radiology Routing"}</option>
                  <option value="smartcard">{serviceOptions.card || "Smart Health Card (Family Enrollment)"}</option>
                  <option value="caretaker">Bedside Attendant / Post-Op Care</option>
                  <option value="emergency">{serviceOptions.emergency || "Emergency Patient Transfer & Bed Reservation"}</option>
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
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (error) setError(null);
                  }}
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
                  onChange={(e) => {
                    setContact(e.target.value);
                    if (error) setError(null);
                  }}
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
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold tracking-tight transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-zinc-400" />
                  <span>{t?.submittingButton || "Dispatching Care Coordinator..."}</span>
                </>
              ) : (
                <>
                  <span>{submitButton}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>DPDP Act 2023 & HIPAA Compliant Healthcare Vault</span>
            </div>
          </form>
        ) : (
          <div className="py-4 text-center space-y-5 animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto text-teal-700 shadow-xs">
              <Check className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-medium tracking-tight text-zinc-950">
                {successTitle}
              </h3>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto leading-relaxed">
                {successDesc}
              </p>
            </div>

            {/* Summary Box */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs text-left space-y-2 text-zinc-700">
              <div className="flex justify-between border-b border-zinc-200/60 pb-1.5">
                <span className="text-zinc-500 font-medium">Patient / Guardian:</span>
                <span className="font-semibold text-zinc-900">{fullName}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-200/60 pb-1.5">
                <span className="text-zinc-500 font-medium">Contact Number:</span>
                <span className="font-semibold text-zinc-900">{contact}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-200/60 pb-1.5">
                <span className="text-zinc-500 font-medium">Care Pathway:</span>
                <span className="font-semibold text-zinc-900">{getPathwayName(service)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500 font-medium">City / District:</span>
                <span className="font-semibold text-zinc-900">{city || 'Location Logged'}</span>
              </div>
            </div>

            {/* Direct Escalation Options */}
            <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-100 text-xs text-zinc-700 space-y-2.5 text-left">
              <div>
                <p className="font-semibold text-zinc-900">Direct Clinical Escalation</p>
                <p className="text-[11px] text-zinc-500">Need instant assistance? Contact our dispatch desk directly:</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={`tel:${AAPKA_HELPLINE_PHONE}`}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-medium text-[11px] transition-colors text-center"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Now</span>
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-[11px] transition-colors text-center"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={mailtoLink}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-medium text-[11px] transition-colors text-center"
                >
                  <Mail className="w-3 h-3" />
                  <span>Email App</span>
                </a>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold cursor-pointer transition-colors"
            >
              {closeButton}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
