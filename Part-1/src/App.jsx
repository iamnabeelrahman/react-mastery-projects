import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasicEffect from "./component/BasicEffect";

function App() {
  const [sw, setSw] = useState(true);
console.log("Mount 1")
  return (
    <div
      className={
        sw
          ? `bg-white text-black min-h-screen p-8`
          : `bg-black text-white min-h-screen p-8`
      }
    >
      <header
        className={
          sw
            ? `mb-8 border-b pb-4 border-gray-300 text-center`
            : `mb-8 border-b pb-4 border-gray-700 text-center`
        }
      >
        <h1
          className={
            sw
              ? `text-3xl font-bold mb-4 text-gray-800 `
              : `text-3xl font-bold mb-4 text-gray-200`
          }
        >
          An ordinary morning
        </h1>
      </header>
      <main className="max-w-2xl mx-auto text-lg leading-7">
        <article className="space-y-6">
          <p className={sw ? `text-gray-700` : `text-gray-300`}>
            On an ordinary morning, sunlight pooled across the wooden
            floorboards and carried with it the subtle promise of new ideas: a
            quiet invitation to notice small patterns, to tinker with thoughts
            that seemed unfinished, and to turn curiosity into practice. In that
            calm space, a single question, how might I make this kinder,
            clearer, or more useful? It becomes a tiny compass, guiding each
            choice toward something better. Small experiments follow: a sentence
            rewritten, a colour chosen for clarity, a routine adjusted for joy.
            Over time these micro-improvements add up, showing that steady
            attention, not sudden leaps, is often the surest way to change what
            matters.
          </p>
        </article>
      </main>
      <div className="text-center mt-12 text-sm text-gray-500">
        <button
          className={
            `cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-200 ` +
            (sw
              ? `px-4 py-2 border border-gray-300 bg-white text-gray-800 rounded hover:bg-gray-100`
              : `px-4 py-2 border border-gray-700 bg-black text-gray-200 rounded hover:bg-gray-900`)
          }
          onClick={() => setSw(!sw)}
        >
          Switch
        </button>
      </div>
      <BasicEffect/>
    </div>
  );
}

export default App;
