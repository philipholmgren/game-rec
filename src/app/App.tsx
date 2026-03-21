import Hero from '../components/home/Hero';
import FiltersPanel from '../components/home/FiltersPanel';
import SidebarPanel from '../components/home/SidebarPanel';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container">
      <main className="pt-32 pb-24 min-h-screen kinetic-bloom px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <Hero />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <FiltersPanel />
          <SidebarPanel />
        </div>
      </main>
    </div>
  );
}