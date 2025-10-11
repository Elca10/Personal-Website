import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const projectsTimerRef = useRef(null);
  const otherTimerRef = useRef(null);

  // Ensure only one menu open at a time
  const openProjects = (val) => {
    setProjectsOpen(val);
    if (val) setOtherOpen(false);
  };
  const openOther = (val) => {
    setOtherOpen(val);
    if (val) setProjectsOpen(false);
  };

  const clearProjectsTimer = () => {
    if (projectsTimerRef.current) {
      clearTimeout(projectsTimerRef.current);
      projectsTimerRef.current = null;
    }
  };
  const clearOtherTimer = () => {
    if (otherTimerRef.current) {
      clearTimeout(otherTimerRef.current);
      otherTimerRef.current = null;
    }
  };

  return (
  <nav className="flex justify-between items-center px-8 py-4 fixed top-0 left-0 right-0 z-[9999] navbar">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-mono tracking-tight text-primary brand">
          <Link to="/">EJ</Link>
        </div>
        {/* mobile menu toggle */}
        <button aria-label="Toggle menu" className="md:hidden p-2 rounded hover:bg-white/5" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

      <ul className="hidden md:flex gap-8 text-sm uppercase font-mono">
        <li><Link to="/">Home</Link></li>

        {/* Projects dropdown: hover shows menu on desktop, click toggles on mobile */}
        <li className="relative group" onMouseEnter={() => { clearProjectsTimer(); setProjectsOpen(true); }} onMouseLeave={() => { clearProjectsTimer(); projectsTimerRef.current = setTimeout(() => setProjectsOpen(false), 180); }}>
          <div className="flex items-center gap-2">
            <Link to="/projects" className="hover:underline">Projects</Link>
            <button onClick={() => openProjects(!projectsOpen)} aria-label="Toggle projects menu">▾</button>
          </div>
          <ul onMouseEnter={() => { clearProjectsTimer(); setProjectsOpen(true); }} onMouseLeave={() => { clearProjectsTimer(); projectsTimerRef.current = setTimeout(() => setProjectsOpen(false), 180); }} className={`absolute left-0 mt-1 bg-black/90 rounded-lg shadow-lg z-50 ${projectsOpen ? 'block' : 'hidden'} md:group-hover:block`}>
            <li><Link className="block px-4 py-2 hover:bg-primary/20" to="/projects/laser-sequencer">Laser Sequencer</Link></li>
            <li><Link className="block px-4 py-2 hover:bg-primary/20" to="/projects/adl">Analogue Design Lab</Link></li>
            <li><Link className="block px-4 py-2 hover:bg-primary/20" to="/projects/bass">Bass</Link></li>
            <li><Link className="block px-4 py-2 hover:bg-primary/20" to="/projects/z2k">Z2K</Link></li>
            <li><Link className="block px-4 py-2 hover:bg-primary/20" to="/projects/sensavvy">SenSavvy</Link></li>
            <li><Link className="block px-4 py-2 hover:bg-primary/20" to="/projects/art-portfolio">Art Portfolio</Link></li>
          </ul>
        </li>

        {/* Other dropdown */}
        <li className="relative group" onMouseEnter={() => { clearOtherTimer(); setOtherOpen(true); }} onMouseLeave={() => { clearOtherTimer(); otherTimerRef.current = setTimeout(() => setOtherOpen(false), 180); }}>
          <div className="flex items-center gap-2">
            <Link to="/other" className="hover:underline">Other</Link>
            <button onClick={() => openOther(!otherOpen)} aria-label="Toggle other menu">▾</button>
          </div>
          <ul onMouseEnter={() => { clearOtherTimer(); setOtherOpen(true); }} onMouseLeave={() => { clearOtherTimer(); otherTimerRef.current = setTimeout(() => setOtherOpen(false), 180); }} className={`absolute left-0 mt-1 bg-black/90 rounded-lg shadow-lg z-50 ${otherOpen ? 'block' : 'hidden'} md:group-hover:block`}>
            <li><Link className="block px-4 py-2 hover:bg-primary/20" to="/other/achievements">Achievements</Link></li>
            <li><Link className="block px-4 py-2 hover:bg-primary/20" to="/other/coursework">Coursework</Link></li>
            <li><Link className="block px-4 py-2 hover:bg-primary/20" to="/other/identity">Identity</Link></li>
          </ul>
        </li>

        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Mobile stacked menu (shows on small screens) */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-black/95 border-t border-gray-800 z-40 max-h-[calc(100vh-4rem)] overflow-y-auto"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex flex-col p-4 gap-2">
            <Link to="/" className="block py-2" onClick={() => setMobileOpen(false)}>Home</Link>

            <div className="pt-2 pb-1 font-semibold">Projects</div>
            <Link to="/projects" className="block py-2 pl-2" onClick={() => setMobileOpen(false)}>All Projects</Link>
            <Link to="/projects/laser-sequencer" className="block py-2 pl-4" onClick={() => setMobileOpen(false)}>Laser Sequencer</Link>
            <Link to="/projects/adl" className="block py-2 pl-4" onClick={() => setMobileOpen(false)}>Analogue Design Lab</Link>
            <Link to="/projects/bass" className="block py-2 pl-4" onClick={() => setMobileOpen(false)}>Bass</Link>
            <Link to="/projects/z2k" className="block py-2 pl-4" onClick={() => setMobileOpen(false)}>Z2K</Link>
            <Link to="/projects/sensavvy" className="block py-2 pl-4" onClick={() => setMobileOpen(false)}>SenSavvy</Link>
            <Link to="/projects/art-portfolio" className="block py-2 pl-4" onClick={() => setMobileOpen(false)}>Art Portfolio</Link>

            <div className="pt-2 pb-1 font-semibold">Other</div>
            <Link to="/other/achievements" className="block py-2 pl-2" onClick={() => setMobileOpen(false)}>Achievements</Link>
            <Link to="/other/coursework" className="block py-2 pl-2" onClick={() => setMobileOpen(false)}>Coursework</Link>
            <Link to="/other/identity" className="block py-2 pl-2" onClick={() => setMobileOpen(false)}>Identity</Link>

            <Link to="/contact" className="block py-2 pt-3" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
