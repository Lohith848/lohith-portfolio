export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <a href="#" className="text-2xl font-heading font-bold flex items-center justify-center md:justify-start gap-1">
            <span>Lohith G</span>
            <span className="text-amber-primary">.</span>
          </a>
          <p className="text-xs font-mono opacity-40 uppercase tracking-widest">
            Built with chaos.
          </p>
        </div>
        
        <div className="flex gap-12 text-[10px] font-mono uppercase tracking-widest opacity-60">
           <div className="flex flex-col gap-2">
              <span className="opacity-30">credits</span>
              <a href="https://vite.dev" className="hover:text-amber-primary transition-colors">Vite</a>
              <a href="https://framer.com/motion" className="hover:text-amber-primary transition-colors">Motion</a>
              <a href="https://tailwindcss.com" className="hover:text-amber-primary transition-colors">Tailwind</a>
           </div>
           <div className="flex flex-col gap-2">
              <span className="opacity-30">legal</span>
              <p>© 2026</p>
              <p>All Rights Reserved</p>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-12 border-t border-border/50 text-center">
         <p className="text-[10px] font-mono opacity-20">
            ASCII: ░▒▓█ lohith_portfolio_v1.0.0 █▓▒░
         </p>
      </div>
    </footer>
  );
}
