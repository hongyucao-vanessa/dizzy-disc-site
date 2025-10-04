import React from 'react';

export default function DizzyDiscPsychedelic() {
  const spotifyEmbed = 'https://open.spotify.com/embed/album/617TKFz9M8BujvXlXNsKL0';
  const instagramUrl = 'https://www.instagram.com/dizzydisc_band?igsh=MXVhOWRpbXR3NmQxbA==';

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-300 to-indigo-200 text-white antialiased">
      <header className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider text-white drop-shadow-lg">Dizzy Disc</h1>
        <nav className="flex gap-4">
          <a href="#music" className="font-semibold hover:underline">Music</a>
          <a href="#about" className="font-semibold hover:underline">About</a>
          <a href="#shows" className="font-semibold hover:underline">Shows</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="font-semibold hover:underline">Instagram</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
              <img 
  src="/band.jpg" 
  alt="Dizzy Disc Band" 
  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
/>

            <p className="text-lg drop-shadow-md">Dizzy is a young girl band from Switzerland. They play authentic indie songs and love performing them live, now bringing their music to Spotify.</p>
            <div className="flex gap-3">
              <a href="#music" className="px-4 py-2 rounded-lg bg-white text-purple-700 font-bold hover:bg-yellow-200 transition">Listen on Spotify</a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-purple-700 font-bold hover:bg-pink-500 transition">Follow on Instagram</a>
            </div>
          </div>

          <div id="music">
            <h3 className="text-2xl font-bold drop-shadow-md mb-4">Latest Release</h3>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe title="Dizzy Disc - Spotify Album" src={spotifyEmbed} width="100%" height="380" frameBorder="0" allow="encrypted-media" />
            </div>
          </div>
        </section>

        <section id="about" className="bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-200 rounded-2xl p-6 shadow-lg text-purple-900">
          <h3 className="text-2xl font-bold mb-3">About Dizzy Disc</h3>
          <p>Dizzy Disc formed in high school and quickly became a close group of friends who love writing indie songs and performing them live. Their first concert was on September 7, 2024. After eight shows, they now release music on Spotify. Notable: 4th place in Young Band Competition 2025 (Canton Zurich) organized by band-it.</p>
        </section>

        <section id="shows" className="space-y-4">
          <h3 className="text-2xl font-bold drop-shadow-md">Shows</h3>
          <ul className="space-y-2">
            <li className="p-4 rounded-lg bg-purple-600 text-white shadow-lg">First Concert — School Hall, September 7, 2024 — Zurich</li>
            <li className="p-4 rounded-lg bg-pink-500 text-white shadow-lg">Young Band Competition — band-it, 2025 — 4th place</li>
            <li className="p-4 rounded-lg bg-yellow-400 text-purple-900 shadow-lg opacity-70">Add upcoming shows here</li>
          </ul>
        </section>

        <section className="bg-purple-700 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h4 className="text-xl font-bold">Book Dizzy Disc</h4>
            <p>Email: <a href="mailto:hello@dizzydisc.band" className="underline">hello@dizzydisc.band</a></p>
          </div>
          <div className="flex gap-3">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white text-purple-700 font-bold">Instagram</a>
            <a href="#music" className="px-4 py-2 rounded-lg bg-yellow-400 text-purple-900 font-bold">Listen</a>
          </div>
        </section>

        <footer className="text-center text-white/80 mt-10">© {new Date().getFullYear()} Dizzy Disc — Made with 🌈</footer>
      </main>
    </div>
  );
}
