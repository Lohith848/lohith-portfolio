import { motion } from "motion/react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Stocks/large cap", value: 40, color: "#C8A97A" },
  { name: "Midcap / Smallcap", value: 30, color: "#9A7D56" },
  { name: "Gold / Silver ETFs", value: 20, color: "#444440" },
  { name: "Cash / Emergency", value: 10, color: "#222220" },
];

export default function Finance() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <span className="font-accent text-amber-primary text-xs uppercase tracking-[0.3em] font-bold block mb-4">
              // MONEY MOVES
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Portfolio Discipline<span className="text-amber-primary">.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-sans leading-relaxed max-w-xl">
              <p>
                Most 18-year-olds don't think about SIPs. I do.
                Compounding is a long game, and I'm starting now.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-border bg-card">
                   <p className="text-xs uppercase opacity-40 mb-1 font-mono">Status</p>
                   <p className="font-heading font-bold text-amber-primary tracking-widest">INVESTING</p>
                </div>
                <div className="p-4 border border-border bg-card">
                   <p className="text-xs uppercase opacity-40 mb-1 font-mono">Platform</p>
                   <p className="font-heading font-bold tracking-widest">GROWW / ZERODHA</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm font-mono opacity-80 pt-4">
                <li>→ Nifty 50 / Large Cap Index</li>
                <li>→ Small Cap</li>
                <li>→ Gold / Silver ETFs</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 w-full flex items-center justify-center p-8 bg-card border-2 border-border relative">
          {/* Custom Donut Chart */}
          <div className="w-full h-[400px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: '#111', border: '1px solid #222', borderRadius: '0' }}
                   itemStyle={{ color: '#fff', fontSize: '10px', textTransform: 'uppercase' }}
                />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="font-heading font-bold text-4xl">100%</span>
                <span className="text-[10px] uppercase tracking-widest opacity-40 font-mono">allocated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
