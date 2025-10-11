
const IconLink = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 hover:bg-gray-800 rounded-lg transition">
  <div className="w-12 h-12 flex items-center justify-center bg-black/60 rounded-lg border-2 border-primary">{children}</div>
    <span className="text-sm text-gray-300">{label}</span>
  </a>
);

export default function Contact() {
  return (
    <div className="p-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Get in Touch</h1>
        <p className="text-gray-400 mb-6">Want to collaborate or just say hi? Choose a contact method below.</p>

        <div className="grid grid-cols-3 gap-6 justify-center">
          <IconLink href="https://www.linkedin.com/in/Eliška-jelinek-36a536328/" label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.25 8h4.46V24H.25zM8.5 8h4.28v2.2h.06c.6-1.1 2.07-2.2 4.26-2.2C22.9 8 24 10.12 24 13.86V24h-4.46v-9.1c0-2.17-.04-4.96-3.02-4.96-3.03 0-3.49 2.36-3.49 4.8V24H8.5z" />
            </svg>
          </IconLink>

          <IconLink href="https://www.instagram.com/Eliška.jelinek/" label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM18 6.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" />
            </svg>
          </IconLink>

          <IconLink href="mailto:Eliška.jelinek@gmail.com" label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
              <path d="M12 13.065L.75 5.25V18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5.25L12 13.065zM12 11L24 3H0l12 8z" />
            </svg>
          </IconLink>
        </div>
      </div>
    </div>
  );
}
