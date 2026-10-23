import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShieldAlert } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200/60 text-teal-700 flex items-center justify-center mx-auto shadow-sm">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700">Error 404 • Page Not Found</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Lost Your Way?
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for doesn't exist or has moved. Return to our homepage or explore our dedicated healthcare sections.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs tracking-tight transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs tracking-tight transition-colors flex items-center justify-center gap-2"
          >
            <span>View Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
