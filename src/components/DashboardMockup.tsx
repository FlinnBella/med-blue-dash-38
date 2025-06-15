
import { LineChart, Users, Calendar, Activity } from 'lucide-react';

export const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute -top-12 -right-12 w-72 h-72 bg-white/10 rounded-full filter blur-2xl opacity-30 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
      <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-white/10 rounded-full filter blur-2xl opacity-30 animate-[pulse_10s_cubic-bezier(0.4,0,0.6,1)_infinite_2s]"></div>
      
      <div className="relative bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-slate-700/50">
        <div className="flex items-center gap-2 mb-4 p-2 bg-slate-900/50 rounded-lg">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm text-slate-300">Doctor's Dashboard</p>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-700/50 p-4 rounded-lg">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><Users className="w-5 h-5" /> Patient Overview</h3>
            <div className="w-full h-24 bg-slate-600/50 rounded-md flex items-center justify-center">
               <LineChart className="w-12 h-12 text-slate-500" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><Calendar className="w-5 h-5" /> Upcoming</h4>
              <div className="space-y-2">
                <div className="w-full h-8 bg-slate-600/50 rounded-md"></div>
                <div className="w-3/4 h-8 bg-slate-600/50 rounded-md"></div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2 flex items-center gap-2"><Activity className="w-5 h-5" /> Recent Activity</h4>
              <div className="space-y-2">
                <div className="w-full h-4 bg-slate-600/50 rounded-md"></div>
                <div className="w-full h-4 bg-slate-600/50 rounded-md"></div>
                <div className="w-2/3 h-4 bg-slate-600/50 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
