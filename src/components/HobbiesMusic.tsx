import React from 'react';

const HobbiesMusic = () => {
  return (
    <section className="section bg-white rounded-lg shadow-md p-8 mb-8 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 text-center">Meet Hakemi 🎧</h2>

      <div className="text-gray-700 mb-10 text-lg">
        <p className="mb-4">
          Music is more than a hobby—it's a second language to me. I produce electronic music under the alias <strong>Hakemi</strong>. Inspired by the legendary Martin Garrix, I fell in love with EDM and its power to lift spirits and unlock creativity. Producing music helps clear my mind, grounds me, and brings me unmatched joy. One of my biggest dreams is to meet Martin Garrix in person someday.
        </p>
      </div>

      <div className="mb-10 text-center">
        <img
          src="/hakhemi-profile.jpg"
          alt="Hakemi Artist Profile"
          className="mx-auto w-48 h-48 rounded-full shadow-lg object-cover"
        />
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">🎵 Listen on Spotify</h3>
        <iframe
          src="https://open.spotify.com/embed/artist/6jSyMAYxXOcuYkb5GQFbFX?utm_source=generator"
          width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">📺 Watch on YouTube</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/iWeYUNQeXaQ"
            title="Hakhemi - Take Me Back"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/JwZZDvLm1C8"
            title="Dry Tears"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/7xbloYB6ke0"
            
            title="Neon Mist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/uz-3hq3CrhQ"
            title="All Night Long"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/okNfFNtKyGE"
            title="Prosaic"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/OEQviF13HgE"
            title="Odd Signature - Ghum (Remix)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.youtube.com/embed/n6tXrPKlDNY"
            title="Aaiye Meharbaan Flip"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="text-center mt-10">
        <h3 className="text-xl font-semibold mb-2">🔗 Follow Hakemi</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/hakhemimusic/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/hakhemimusic/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com/@hakhemimusic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default HobbiesMusic;