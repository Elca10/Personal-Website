import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const dropdownLink = "block px-4 py-2 hover:bg-primary/20";

export default function Navbar() {
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [essaysOpen, setEssaysOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const projectsTimerRef = useRef(null);
  const otherTimerRef = useRef(null);
  const essaysTimerRef = useRef(null);

  const openProjects = (val) => { setProjectsOpen(val); if (val) { setOtherOpen(false); setEssaysOpen(false); } };
  const openOther   = (val) => { setOtherOpen(val);    if (val) { setProjectsOpen(false); setEssaysOpen(false); } };
  const openEssays  = (val) => { setEssaysOpen(val);   if (val) { setProjectsOpen(false); setOtherOpen(false); } };

  const clearTimer = (ref) => { if (ref.current) { clearTimeout(ref.current); ref.current = null; } };

  const hoverProps = (openFn, timerRef) => ({
    onMouseEnter: () => { clearTimer(timerRef); openFn(true); },
    onMouseLeave: () => { clearTimer(timerRef); timerRef.current = setTimeout(() => openFn(false), 180); },
  });

  return (
    <nav className="flex justify-between items-center px-8 py-4 fixed top-0 left-0 right-0 z-[9999] navbar">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-mono tracking-tight text-primary brand">
          <Link to="/">EJ</Link>
        </div>
        <button aria-label="Toggle menu" className="md:hidden p-2 rounded hover:bg-white/5" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

      <ul className="hidden md:flex gap-8 text-sm uppercase font-mono">
        <li><Link to="/">Home</Link></li>

        {/* Projects dropdown */}
        <li className="relative group" {...hoverProps(openProjects, projectsTimerRef)}>
          <div className="flex items-center gap-2">
            <Link to="/projects" className="hover:underline">Projects</Link>
            <button onClick={() => openProjects(!projectsOpen)} aria-label="Toggle projects menu">▾</button>
          </div>
          <ul {...hoverProps(openProjects, projectsTimerRef)} className={`absolute left-0 mt-1 bg-black/90 rounded-lg shadow-lg z-50 overflow-hidden ${projectsOpen ? 'block' : 'hidden'} md:group-hover:block`}>
            <li><Link className={dropdownLink} to="/projects/laser-sequencer">Laser Sequencer</Link></li>
            <li><Link className={dropdownLink} to="/projects/security-grader">Security Grader</Link></li>
            <li><Link className={dropdownLink} to="/projects/adl">Analogue Design Lab</Link></li>
            <li><Link className={dropdownLink} to="/projects/art-portfolio">Art Portfolio</Link></li>
          </ul>
        </li>

        {/* Other dropdown */}
        <li className="relative group" {...hoverProps(openOther, otherTimerRef)}>
          <div className="flex items-center gap-2">
            <Link to="/other" className="hover:underline">Other</Link>
            <button onClick={() => openOther(!otherOpen)} aria-label="Toggle other menu">▾</button>
          </div>
          <ul {...hoverProps(openOther, otherTimerRef)} className={`absolute left-0 mt-1 bg-black/90 rounded-lg shadow-lg z-50 overflow-hidden ${otherOpen ? 'block' : 'hidden'} md:group-hover:block`}>
            <li><Link className={dropdownLink} to="/other/achievements">Achievements</Link></li>
            <li><Link className={dropdownLink} to="/other/coursework">Coursework</Link></li>
            <li><Link className={dropdownLink} to="/other/identity">Identity</Link></li>
          </ul>
        </li>

        {/* Essays dropdown */}
        <li className="relative group" {...hoverProps(openEssays, essaysTimerRef)}>
          <div className="flex items-center gap-2">
            <Link to="/essays" className="hover:underline">Essays</Link>
            <button onClick={() => openEssays(!essaysOpen)} aria-label="Toggle essays menu">▾</button>
          </div>
          <ul {...hoverProps(openEssays, essaysTimerRef)} className={`absolute left-0 mt-1 bg-black/90 rounded-lg shadow-lg z-50 overflow-hidden whitespace-nowrap ${essaysOpen ? 'block' : 'hidden'} md:group-hover:block`}>
            <li><a className={dropdownLink} href="https://thoughts.eliskaj.com" target="_blank" rel="noopener noreferrer">thoughts.eliskaj.com ↗</a></li>
          </ul>
        </li>

        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-black/95 border-t border-gray-800 z-40 overflow-y-scroll overscroll-contain"
          style={{ maxHeight: 'calc(100svh - 4rem)', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex flex-col p-4 gap-2">
            <Link to="/" className="block py-2" onClick={() => setMobileOpen(false)}>Home</Link>

            <div className="pt-2 pb-1 font-semibold">Projects</div>
            <Link to="/projects" className="block py-2 pl-2" onClick={() => setMobileOpen(false)}>All Projects</Link>
            <Link to="/projects/laser-sequencer" className="block py-2 pl-4" onClick={() => setMobileOpen(false)}>Laser Sequencer</Link>
            <Link to="/projects/security-grader" className="block py-2 pl-4" onClick={() => setMobileOpen(false)}>Website Security Grader</Link>
            <Link to="/projects/adl" className="block py-2 pl-4" onClick={() => setMobileOpen(false)}>Analogue Design Lab</Link>
            <Link to="/projects/art-portfolio" className="block py-2 pl-4" onClick={() => setMobileOpen(false)}>Art Portfolio</Link>

            <div className="pt-2 pb-1 font-semibold">Other</div>
            <Link to="/other/achievements" className="block py-2 pl-2" onClick={() => setMobileOpen(false)}>Achievements</Link>
            <Link to="/other/coursework" className="block py-2 pl-2" onClick={() => setMobileOpen(false)}>Coursework</Link>
            <Link to="/other/identity" className="block py-2 pl-2" onClick={() => setMobileOpen(false)}>Identity</Link>

            <div className="pt-2 pb-1 font-semibold">Essays</div>
            <Link to="/essays" className="block py-2 pl-2" onClick={() => setMobileOpen(false)}>Essays</Link>
            <a href="https://thoughts.eliskaj.com" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4" onClick={() => setMobileOpen(false)}>thoughts.eliskaj.com ↗</a>

            <Link to="/contact" className="block py-2 pt-3" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
