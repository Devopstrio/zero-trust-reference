import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import { 
  Shield, 
  Lock, 
  Activity,
  ArrowUpRight,
  TrendingDown,
  Clock,
  Database,
  Cpu,
  ChevronRight,
  CheckCircle,
  Zap,
  Fingerprint,
  Monitor,
  Layers,
  Server
} from 'lucide-react';

const adoptionData = [
  { name: 'Ph 1', identity: 100, network: 40, data: 20 },
  { name: 'Ph 2', identity: 100, network: 75, data: 45 },
  { name: 'Ph 3', identity: 100, network: 100, data: 85 },
  { name: 'Ph 4', identity: 100, network: 100, data: 100 },
];

const KPI_CARDS = [
  { title: 'Reference Patterns', value: '142', trend: '+12', color: 'cyan', icon: Layers },
  { title: 'Implementation Ready', value: '98%', trend: 'Optimum', color: 'cyan', icon: CheckCircle },
  { title: 'Policy Blueprints', value: '250', trend: '+25', color: 'cyan', icon: Lock },
  { title: 'Architecture Blocks', value: '85', trend: 'Verified', color: 'cyan', icon: Server },
];

const ReferenceDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Zero Trust Reference Command</h1>
          <p className="text-slate-400">Enterprise-grade reference implementations, modular patterns, and strategic adoption frameworks.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all border border-slate-800">
            Export Arch Blueprints
          </button>
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-cyan-600/20">
            Simulate Adoption Flow
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-cyan-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-cyan-400`} />
              </div>
              <div className={`text-xs font-medium text-cyan-400`}>
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Adoption Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Zero Trust Adoption Maturity Curve</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={adoptionData}>
                <defs>
                  <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="network" stroke="#06b6d4" fill="url(#colorNet)" name="Network Maturity (%)" />
                <Area type="monotone" dataKey="data" stroke="#334155" fill="none" name="Data Maturity (%)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Strategy Pillars */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Reference Model Coverage</h3>
          <div className="flex-1 space-y-6">
            {[
              { label: 'Identity Layer', score: 95, color: 'bg-cyan-500', status: 'COMPLETE' },
              { label: 'Device Posture', score: 85, color: 'bg-cyan-500', status: 'PRODUCTION' },
              { label: 'Network Isolation', score: 60, color: 'bg-cyan-600', status: 'IN_PHASE' },
              { label: 'Data Governance', score: 40, color: 'bg-slate-600', status: 'PILOT' },
            ].map((node) => (
              <div key={node.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300 font-medium">{node.label}</span>
                  <span className="text-slate-400 font-bold">{node.score}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${node.color}`} style={{ width: `${node.score}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex gap-3">
            <Zap className="text-cyan-400 shrink-0" size={18} />
            <p className="text-xs text-slate-400">Reference Mode: <span className="text-cyan-400 font-bold">Standardized Patterns</span> active. All reference implementations align with NIST 800-207 and CISA Zero Trust guidelines.</p>
          </div>
        </div>
      </div>

      {/* Pattern Grid */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Reference Patterns</h3>
          <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">View Library</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Pattern Name</th>
                <th className="px-6 py-4 font-semibold">Domain</th>
                <th className="px-6 py-4 font-semibold">Maturity</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Artifacts</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'OIDC Federation Pattern', domain: 'Identity', maturity: 'ADVANCED', status: 'READY', artifacts: 'Terraform + App' },
                { name: 'mTLS Service Mesh Isolation', domain: 'Network', maturity: 'OPTIMAL', status: 'STABLE', artifacts: 'Helm + Policy' },
                { name: 'Conditional Access Baseline', domain: 'Device', maturity: 'INITIAL', status: 'BETA', artifacts: 'Python Logic' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4 text-sm font-bold text-slate-200">{row.name}</td>
                  <td className="px-6 py-4 text-xs font-mono text-slate-400">{row.domain}</td>
                  <td className="px-6 py-4 text-xs font-bold text-slate-300">{row.maturity}</td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-bold px-2 py-1 rounded border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 font-medium">{row.artifacts}</td>
                  <td className="px-6 py-4">
                    <button className="text-cyan-400 hover:text-cyan-300 text-xs font-bold uppercase tracking-wider">
                      Explore
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReferenceDashboard;
