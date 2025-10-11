export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-4 text-sm text-gray-400 text-center">
      <p>© {new Date().getFullYear()} Eliška Jelinek. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="https://www.linkedin.com/in/Eliška-jelinek-36a536328/" className="hover:text-red-400">LinkedIn</a>
        <a href="https://github.com/Elca10" className="hover:text-red-400">GitHub</a>
        <a href="mailto:eliska.jelinek@gmail.com" className="hover:text-red-400">Email</a>
      </div>
      <div className="mt-3 text-xs text-gray-500">Built with my own two hands.</div>
    </footer>
  )
}
