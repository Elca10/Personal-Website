
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

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center">
          <IconLink href="https://www.linkedin.com/in/Eliska-jelinek-36a536328/" label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.25 8h4.46V24H.25zM8.5 8h4.28v2.2h.06c.6-1.1 2.07-2.2 4.26-2.2C22.9 8 24 10.12 24 13.86V24h-4.46v-9.1c0-2.17-.04-4.96-3.02-4.96-3.03 0-3.49 2.36-3.49 4.8V24H8.5z" />
            </svg>
          </IconLink>

          <IconLink href="https://www.instagram.com/Eliska.jelinek/" label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM18 6.5a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8z" />
            </svg>
          </IconLink>

          <IconLink href="https://github.com/Elca10" label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
          </IconLink>

          <IconLink href="mailto:Eliska.jelinek@gmail.com" label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
              <path d="M12 13.065L.75 5.25V18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5.25L12 13.065zM12 11L24 3H0l12 8z" />
            </svg>
          </IconLink>
        </div>
      </div>
    </div>
  );
}
