import React from "react";
import Random from "./components/Random";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gradient-to-r from-neutral-300 to-stone-400">
      <header className="bg-white rounded-lg w-11/12 text-center mt-10 px-10 py-4 text-4xl font-bold shadow-md">
        RANDOM GIFS
      </header>

      <main className="flex flex-col w-full items-center gap-y-10 mt-10">
        <Random />
      </main>

      <footer className="mt-auto mb-8 text-gray-500 text-sm text-center">
        © 2024 Random GIFs. All rights reserved.<br></br>Made with ❤️  by <h1 className="font-mono text-stone-800 font-bold text-lg">Harsh Dubey</h1>
      </footer>
    </div>
  );
}
