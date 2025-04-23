
'use client';
import './globals.css';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-10">
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-10">
        <div className="flex items-center space-x-4">
          <img src="/logo-ceesdecontroller.png" alt="Cees de Controller logo" className="h-12 w-12" />
          <h1 className="text-2xl font-bold">Cees de Controller</h1>
        </div>
        <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">Contact</a>
      </header>
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Grip op je financiën. Rust in je hoofd.</h2>
        <p className="text-lg mb-6">Ik ben Cees van de Vendel – controller, adviseur en ondernemer. Ik help freelancers en MKB-ondernemers met heldere financiële inzichten en praktische oplossingen.</p>
      </section>
    </main>
  );
}
