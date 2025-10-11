// import React, { useState } from 'react'
// import Lightbox from './Lightbox'
// import Carousel from './Carousel'

// export function ProjectTemplate({ project }) {
//   const [lightSrc, setLightSrc] = useState(null)
//   return (
//     <div className="max-w-4xl mx-auto space-y-6 px-6">
//   <div className="flex flex-col md:flex-row items-start md:items-stretch gap-6">
//         {project.image && (
//           (() => {
//             const largeIds = ['bass', 'laser-sequencer', 'sensavvy'];
//             // Instead of forcing a fixed square, show the image at its natural dimensions
//             // while constraining max-width so it fits the layout.
//             const wrapperClass = 'flex-none rounded-lg overflow-hidden border border-gray-700';
//             const imgClass = largeIds.includes(project.id)
//               ? 'block max-w-[280px] md:max-w-[360px] w-auto h-auto object-contain'
//               : 'block max-w-[220px] md:max-w-[280px] w-auto h-auto object-contain';
//             return (
//               <div className={`${wrapperClass} self-start md:self-start inline-flex items-start leading-none`}>
//                 <img src={project.image} alt={project.title} className={`${imgClass} block`} />
//               </div>
//             )
//           })()
//         )}
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold">{project.title}</h1>
//           <h2 className="text-sm text-primary mb-2">{project.subtitle}</h2>
//           {(project.meta?.year || (project.meta?.tech && project.meta.tech.length > 0)) && (
//             <div className="text-sm text-gray-400 mb-2">
//               {project.meta?.year}
//               {project.meta?.year && project.meta?.tech?.length ? ' • ' : ''}
//               {project.meta?.tech?.length ? project.meta.tech.join(', ') : ''}
//             </div>
//           )}
//           {project.description && (
//             <>
//               {project.description.split(/\n{2,}/).map((para, idx) => {
//                 const text = para.trim()
//                 return text ? (
//                   <p key={idx} className="text-gray-300 mb-4">
//                     {text.split('\n').map((line, i) => (
//                       <React.Fragment key={i}>
//                         {i > 0 && <br />}
//                         {line}
//                       </React.Fragment>
//                     ))}
//                   </p>
//                 ) : null
//               })}
//             </>
//           )}

//           {project.links && project.links.length > 0 && (
//             <div className="flex gap-3 mt-4">
//               {project.links.map((l) => (
//                 <a key={l.label} href={l.href} className="btn-primary">{l.label}</a>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Cards / thumbnails (supports legacy `cards`, and newer `covers` + `bands`) */}
//       {project.cards && project.cards.length > 0 && (
//         <div className={`grid ${project.id === 'art-portfolio' || project.id === 'identity' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6' : 'grid-cols-1 md:grid-cols-2 gap-4'}`}>
//           {project.cards.map((c) => (
//             project.id === 'art-portfolio' ? (
//               <div key={c.id} className="block border border-gray-700 rounded-lg overflow-hidden hover:border-primary transition">
//                 <button onClick={() => setLightSrc(c.full)} className="w-full block">
//                   <img src={c.thumbnail} alt={c.title} className="w-full h-80 object-cover" />
//                 </button>
//                 <div className="p-4 text-center">
//                   <h3 className="font-semibold capitalize mb-2">{c.title}</h3>
//                   {c.statement && <p className="text-sm text-gray-400">{c.statement}</p>}
//                   {c.statementLink && (
//                     <p className="mt-2">
//                       <a href={c.statementLink.href} target="_blank" rel="noopener noreferrer" className="text-primary underline">
//                         {c.statementLink.text}
//                       </a>
//                     </p>
//                   )}
//                 </div>
//               </div>
//             ) : (
//               <a key={c.id} href={c.href} className="flex gap-4 items-center p-3 border border-gray-700 rounded-lg hover:border-primary transition">
//                 <img src={c.thumbnail} alt={c.title} className="w-24 h-24 object-cover rounded" />
//                 <div>
//                   <h3 className="font-semibold capitalize">{c.title}</h3>
//                 </div>
//               </a>
//             )
//           ))}
//         </div>
//       )}

//       {/* New: Bands section (shown before Covers) */}
//       {project.bands && project.bands.length > 0 && (
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold">Bands</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {project.bands.map((b) => (
//               <a key={b.id} href={b.href} className="block border border-gray-700 rounded-lg overflow-hidden hover:border-primary transition">
//                 <div className="p-4 flex justify-center">
//                   <img src={b.thumbnail} alt={b.title} className="w-28 h-28 rounded-full object-cover" />
//                 </div>
//                 <div className="p-3 text-center">
//                   <h4 className="font-semibold">{b.title}</h4>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* New: Covers section (for music/bass) */}
//       {project.covers && project.covers.length > 0 && (
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold">Covers</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {project.covers.map((c) => (
//               <div key={c.id} className="block border border-gray-700 rounded-lg overflow-hidden hover:border-primary transition">
//                 <a href={c.href || '#'} target="_blank" rel="noopener noreferrer" className="w-full block">
//                   <img src={c.thumbnail} alt={c.title} className="w-full h-40 object-cover block" />
//                 </a>
//                 <div className="p-3 text-center">
//                   <h4 className="font-semibold">{c.title}</h4>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//       {/* Photos section */}
//       {project.photos && project.photos.length > 0 && (
//         <div className="space-y-4">
//           <h3 className="text-lg font-semibold">Photos</h3>
//           <Carousel images={project.photos} maxWidth={420} onImageClick={(src) => setLightSrc(src)} />
//         </div>
//       )}
//       {lightSrc && <Lightbox src={lightSrc} alt="art" onClose={() => setLightSrc(null)} />}
//     </div>
//   )
// }

// export function ProjectGridCard({ project }) {
//   return (
//     <div className="border border-gray-700 p-4 rounded-lg hover:border-primary transition">
//       <h3 className="text-lg font-semibold mb-2 capitalize">{project.title}</h3>
//       <p className="text-gray-400 text-sm">{project.subtitle}</p>
//     </div>
//   )
// }

// export default ProjectTemplate


import React, { useState } from 'react'
import Lightbox from './Lightbox'
import Carousel from './Carousel'

export function ProjectTemplate({ project }) {
  const [lightSrc, setLightSrc] = useState(null)
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-6">
      <div className="flex flex-col md:flex-row items-start md:items-stretch gap-6">
        {project.image && (
          (() => {
            const largeIds = ['bass', 'laser-sequencer', 'sensavvy']
            // Special-case ADL: smaller image and no border
            const isADL = project.id === 'adl'
            const wrapperClass = isADL ? 'flex-none overflow-hidden' : 'flex-none rounded-lg overflow-hidden border border-gray-700'
            const imgClass = isADL
              ? 'block max-w-[180px] md:max-w-[220px] w-auto h-auto object-contain'
              : (largeIds.includes(project.id)
                ? 'block max-w-[280px] md:max-w-[360px] w-auto h-auto object-contain'
                : 'block max-w-[220px] md:max-w-[280px] w-auto h-auto object-contain')
            return (
              <div className={`${wrapperClass} self-start md:self-start inline-flex items-start leading-none`}>
                <img src={project.image} alt={project.title} className={`${imgClass} block`} />
              </div>
            )
          })()
        )}
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <h2 className="text-sm text-primary mb-2">{project.subtitle}</h2>
          {(project.meta?.year || (project.meta?.tech && project.meta.tech.length > 0)) && (
            <div className="text-sm text-gray-400 mb-2">
              {project.meta?.year}
              {project.meta?.year && project.meta?.tech?.length ? ' • ' : ''}
              {project.meta?.tech?.length ? project.meta.tech.join(', ') : ''}
            </div>
          )}
          {project.description && (
            <>
              {project.description.split(/\n{2,}/).map((para, idx) => {
                const text = para.trim()
                return text ? (
                  <p key={idx} className="text-gray-300 mb-4">
                    {text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </p>
                ) : null
              })}
            </>
          )}

          {project.links && project.links.length > 0 && (
            <div className="flex gap-3 mt-4">
              {project.links.map((l) => (
                <a key={l.label} href={l.href} className="btn-primary">{l.label}</a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Cards / thumbnails (supports Achievements and Art Portfolio, etc.) */}
      {project.cards && project.cards.length > 0 && (
        <div className={`grid ${project.id === 'art-portfolio' || project.id === 'identity'
          ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6'
          : 'grid-cols-1 md:grid-cols-2 gap-4'
          }`}>
          {project.cards.map((c) => (
            project.id === 'art-portfolio' ? (
              <div key={c.id} className="block border border-gray-700 rounded-lg overflow-hidden hover:border-primary transition">
                <button onClick={() => setLightSrc(c.full)} className="w-full block">
                  <img src={c.thumbnail} alt={c.title} className="w-full h-80 object-cover" />
                </button>
                <div className="p-4 text-center">
                  <h3 className="font-semibold capitalize mb-2">{c.title}</h3>
                  {c.statement && <p className="text-sm text-gray-400">{c.statement}</p>}
                  {c.statementLink && (
                    <p className="mt-2">
                      <a href={c.statementLink.href} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                        {c.statementLink.text}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div key={c.id} className="flex gap-4 items-start p-3 border border-gray-700 rounded-lg hover:border-primary transition">
                {c.thumbnail && <img src={c.thumbnail} alt={c.title} className="w-24 h-24 object-cover rounded" />}
                <div>
                  <h3 className="font-semibold capitalize mb-1">{c.title}</h3>
                  {c.description && (
                    <p className="text-sm text-gray-400">
                      {c.description}
                      {c.link && (
                        <>
                          {' '}
                          <a
                            href={c.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                          >
                            {c.link.text}
                          </a>
                        </>
                      )}
                    </p>
                  )}
                </div>
              </div>
            )
          ))}
        </div>
      )}

      {/* Bands section */}
      {project.bands && project.bands.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Bands</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.bands.map((b) => (
              <a key={b.id} href={b.href} className="block border border-gray-700 rounded-lg overflow-hidden hover:border-primary transition">
                <div className="p-4 flex justify-center">
                  <img src={b.thumbnail} alt={b.title} className="w-28 h-28 rounded-full object-cover" />
                </div>
                <div className="p-3 text-center">
                  <h4 className="font-semibold">{b.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Covers section */}
      {project.covers && project.covers.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Covers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.covers.map((c) => (
              <div key={c.id} className="block border border-gray-700 rounded-lg overflow-hidden hover:border-primary transition">
                <a href={c.href || '#'} target="_blank" rel="noopener noreferrer" className="w-full block">
                  <img src={c.thumbnail} alt={c.title} className="w-full h-40 object-cover block" />
                </a>
                <div className="p-3 text-center">
                  <h4 className="font-semibold">{c.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Photos */}
      {project.photos && project.photos.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Photos</h3>
          <Carousel images={project.photos} maxWidth={420} onImageClick={(src) => setLightSrc(src)} />
        </div>
      )}
      {lightSrc && <Lightbox src={lightSrc} alt="art" onClose={() => setLightSrc(null)} />}
    </div>
  )
}

export function ProjectGridCard({ project }) {
  return (
    <div className="border border-gray-700 p-4 rounded-lg hover:border-primary transition">
      <h3 className="text-lg font-semibold mb-2 capitalize">{project.title}</h3>
      <p className="text-gray-400 text-sm">{project.subtitle}</p>
    </div>
  )
}

export default ProjectTemplate
