import React from 'react';
import { X, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'privacy' | 'terms';
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy'
}) => {
  const [tab, setTab] = React.useState<'privacy' | 'terms'>(initialTab);

  React.useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 max-h-[88vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-200/60">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-base font-bold text-slate-900 font-serif">
                {tab === 'privacy' ? 'Privacy & Patient Data Safeguards' : 'Terms of Healthcare Access'}
              </h3>
              <p className="text-[11px] text-slate-500">
                SP Rural India Services Private Limited • Effective October 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pt-3 pb-2 text-xs font-semibold">
          <button
            onClick={() => setTab('privacy')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              tab === 'privacy' 
                ? 'bg-teal-700 text-white' 
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Privacy Policy (DPDP 2023)
          </button>
          <button
            onClick={() => setTab('terms')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              tab === 'terms' 
                ? 'bg-teal-700 text-white' 
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            Terms of Service
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto pr-2 py-4 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-h-[58vh]">
          {tab === 'privacy' ? (
            <>
              <div className="p-3.5 rounded-xl bg-teal-50/50 border border-teal-100 text-xs text-teal-900 space-y-1">
                <p className="font-semibold flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-teal-700" />
                  <span>Commitment to Patient Dignity & Confidentiality</span>
                </p>
                <p>
                  Aapka (SP Rural India Services Private Limited) adheres strictly to the Digital Personal Data Protection Act (DPDP Act 2023) of India and applicable national health data principles.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-sm">1. Purpose of Data Collection</h4>
                <p>
                  We collect patient details (name, contact, primary medical condition, village/district location, hospital admission records) solely to coordinate emergency transport, confirm hospital bed availability, pre-inform casualty doctors, and facilitate transparent billing.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-sm">2. Patient Consent & Gram Mitra Protocols</h4>
                <p>
                  Every data entry submitted via on-ground Gram Mitras is executed with explicit verbal or written consent from the patient or legal guardian. Medical case descriptions are shared only with vetted partner hospitals and attending doctors.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-sm">3. Zero Third-Party Data Monetization</h4>
                <p>
                  Aapka guarantees that patient medical records and personal telephone numbers will never be sold, leased, or monetized to commercial third parties, ad networks, or predatory lenders.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-sm">4. Data Security & Encryption</h4>
                <p>
                  All patient transmissions are encrypted using industry-standard TLS 1.3 in transit and stored in secure Indian cloud server regions compliant with Indian data residency mandates.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-sm">5. Grievance Redressal</h4>
                <p>
                  For data rectification, revocation of consent, or privacy inquiries, contact our Data Grievance Officer at <strong>prabal@aapka.co.in</strong> or write to: SP Rural India Services Private Limited, 201 Convention Centre, JNU New Delhi, 110067.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-800 space-y-1">
                <p className="font-semibold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-slate-700" />
                  <span>Terms of Healthcare Access & Coordination</span>
                </p>
                <p>
                  Please review the terms governing use of the Aapka platform, Gram Mitra facilitation, and partner hospital linkages.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-sm">1. Platform Role as Healthcare Facilitator</h4>
                <p>
                  Aapka is a technology and grassroots healthcare access facilitator connecting patients with hospitals, verified laboratories, and doctors. Medical diagnosis, surgical interventions, and clinical treatment are performed exclusively by licensed partner medical institutions.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-sm">2. Pre-Coordination in Emergencies</h4>
                <p>
                  Aapka's pre-arrival coordination alerts partner hospital emergency casualty units and pre-stages beds. While our team makes every reasonable effort to eliminate wait times, medical prioritization in triage is determined by hospital clinical emergency protocols.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-sm">3. Transparent Fee & Service Schedules</h4>
                <p>
                  All institutional admission rates, diagnostic tests, and platform facilitation charges are communicated transparently upfront with zero hidden gouging.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-slate-900 text-sm">4. Jurisdiction</h4>
                <p>
                  These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the competent courts of New Delhi.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-slate-500 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
            <span>DPDP Act 2023 Compliant</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-medium cursor-pointer transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
