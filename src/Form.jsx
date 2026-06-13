import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Form() {
  // PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE:
  const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

  const [formData, setFormData] = useState({ name: '', email: '', role: 'Operator', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Bypasses CORS issues with Google Apps Script redirect pipelines
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Since 'no-cors' mode doesn't return an explicit body status readable by JS,
      // an execution without catching an error means it reached the endpoint safely.
      setStatus('success');
      setFormData({ name: '', email: '', role: 'Operator', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-[800px] bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-xl shadow-black/20">
      
      {/* Form Header */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">Access Authorization & Intake</h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-1">Submit your parameters to log data directly to the central operations array.</p>
      </div>

      {status === 'success' ? (
        /* Success Message State */
        <div className="flex flex-col items-center justify-center text-center p-8 bg-emerald-950/20 border border-emerald-500/30 rounded-xl animate-fadeIn">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-3" />
          <h3 className="text-emerald-400 font-semibold text-lg">Transmission Confirmed</h3>
          <p className="text-slate-400 text-sm max-w-sm mt-1">Your parameters have been parsed and securely appended to the master log.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-5 text-xs font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2 rounded-lg transition-colors"
          >
            Submit Another Record
          </button>
        </div>
      ) : (
        /* Standard Intake Form State */
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Operator Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Identify resource"
                className="w-full bg-[#0B1528]/80 text-white text-sm border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 transition-colors outline-none placeholder:text-slate-600"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Secure Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="reception@domain.io"
                className="w-full bg-[#0B1528]/80 text-white text-sm border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 transition-colors outline-none placeholder:text-slate-600"
              />
            </div>
          </div>

          {/* Role Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Functional Designation</label>
            <select 
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              className="w-full bg-[#0B1528]/80 text-white text-sm border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 transition-colors outline-none appearance-none cursor-pointer"
            >
              <option value="Operator">Operator (Standard Clearance)</option>
              <option value="Supervisor">Supervisor (Elevated Command)</option>
              <option value="Consultant">External Consultant Portfolio</option>
              <option value="Administrator">SysAdmin (Full Terminal Override)</option>
            </select>
          </div>

          {/* Message TextArea */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Payload Specification (Message)</label>
            <textarea 
              rows="4"
              required
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Input explicit mission statements, documentation requests, or program queries..."
              className="w-full bg-[#0B1528]/80 text-white text-sm border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 transition-colors outline-none placeholder:text-slate-600 resize-none"
            />
          </div>

          {/* Status Message Flags */}
          {status === 'error' && (
            <div className="flex items-center gap-2 text-rose-400 bg-rose-950/20 border border-rose-500/30 p-3 rounded-xl text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Transmission aborted. Verify API endpoints and retry execution.</span>
            </div>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full group flex items-center justify-center gap-2 bg-white hover:bg-slate-200 disabled:bg-slate-800 disabled:text-slate-500 border border-white text-[#0B1528] font-semibold text-sm py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-black/20 active:scale-[0.99] disabled:scale-100 disabled:cursor-not-allowed cursor-pointer"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Syncing Database Array...</span>
              </>
            ) : (
              <>
                <span>Commit Submissions</span>
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </>
            )}
          </button>

        </form>
      )}
    </div>
  );
}