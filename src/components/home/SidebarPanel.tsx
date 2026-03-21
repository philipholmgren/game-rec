export default function SidebarPanel() {
  return (
    <div className="lg:col-span-4 space-y-8">
      <div className="space-y-4">
        <button className="w-full py-6 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline text-xl font-bold uppercase tracking-wider shadow-[0_0_40px_rgba(208,149,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
          Generate Recommendations
        </button>
      </div>
    </div>
  );
}