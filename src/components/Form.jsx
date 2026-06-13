import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Terminal, Layers, Radio } from 'lucide-react';

export default function Form() {
  // PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE:
  const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

  const [formData, setFormData] = useState({ name: '', email: '', role: 'Active Duty', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setStatus('success');
      setFormData({ name: '', email: '', role: 'Active Duty', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    /* RESPONSIVE SPLIT GRID WRAPPER */
    <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-4">
      
      {/* ==========================================
          LEFT COLUMN: PBN BRANDING & IDENTITY BLOCK 
         ========================================== */}
      <div className="flex flex-col justify-center space-y-8 p-4 sm:p-8 lg:sticky lg:top-28">
        
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full w-fit">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          2026 Membership Registration Live
        </div>

        {/* Core Section Typography */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Stand With the Shield. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Join Police Blue Nation.
            </span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            Gain access to an exclusive network dedicated to honoring, supporting, and connecting law enforcement personnel, advocates, and strategic partners. Secure your verified membership slot below.
          </p>
        </div>

        {/* Micro-Metrics Data Array */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl pt-2">
          
          {/* Metric Card 1 */}
          <div className="p-4 bg-slate-900/30 border border-slate-800/50 rounded-xl flex items-start gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wide">Verified Credentials</h4>
              <p className="text-slate-500 text-xs mt-0.5">Secure validation for active, retired, and civilian allies.</p>
            </div>
          </div>

          {/* Metric Card 2 */}
          <div className="p-4 bg-slate-900/30 border border-slate-800/50 rounded-xl flex items-start gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold tracking-wide">National Database</h4>
              <p className="text-slate-500 text-xs mt-0.5">Instant ledger logging for priority updates and alerts.</p>
            </div>
          </div>

        </div>

        {/* System Status Banner Note */}
        <div className="border-l-2 border-slate-700 pl-4 py-1 text-slate-500 text-xs max-w-md italic flex items-center gap-2">
          <Radio className="w-3.5 h-3.5 animate-pulse text-slate-400" />
          All membership applications undergo encrypted routing and review by the administration desk.
        </div>

      </div>

      {/* ==========================================
          RIGHT COLUMN: THE POLICE BLUE NATION FORM 
         ========================================== */}
      <div className="flex justify-center lg:justify-end w-full">
        <div className="w-full max-w-[800px] bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl p-6 sm:p-10 shadow-xl shadow-black/20">
          
          {/* Form Header */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide">Membership Enrollment</h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Submit your verification parameters to initiate your enrollment file.</p>
          </div>

          {status === 'success' ? (
            /* Success Message State */
            <div className="flex flex-col items-center justify-center text-center p-8 bg-emerald-950/20 border border-emerald-500/30 rounded-xl">
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
                  <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter official name"
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
                <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Membership Classification</label>
                <select 
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full bg-[#0B1528]/80 text-white text-sm border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 transition-colors outline-none appearance-none cursor-pointer"
                >
                  <option value="Active Duty">Active Duty Law Enforcement</option>
                  <option value="Retired LE">Retired Law Enforcement Officer</option>
                  <option value="Civilian Ally">Civilian Supporter / Ally</option>
                  <option value="Corporate Sponsor">Corporate / Business Sponsor</option>
                </select>
              </div>

              {/* Message TextArea */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Statement of Purpose / Notes</label>
                <textarea 
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Briefly state your department affiliation, background, or motivation for joining the Police Blue Nation initiative..."
                  className="w-full bg-[#0B1528]/80 text-white text-sm border border-slate-800 focus:border-blue-500 rounded-xl px-4 py-3 transition-colors outline-none placeholder:text-slate-600 resize-none"
                />
              </div>

              {/* Error Flag */}
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
                    <span>Processing Enrollment...</span>
                  </>
                ) : (
                  <>
                    <span>Request Enrollment</span>
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>
      </div>

    </div>
  );
}