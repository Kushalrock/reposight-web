import Typewriter from "./components/typewriter";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-gradient-to-r from-[#12100e] to-[#2b4162] flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center">
        <p className="text-white lg:text-5xl font-bold md:text-4xl sm:text-2xl">
          Find Open Source Projects
        </p>
        <p className="text-white lg:text-5xl font-bold md:text-4xl sm:text-2xl">
          that fits{" "}
          <Typewriter
            textArr={["your profile ", "your needs ", "your wants "]}
            delay={200}
            styles="underline"
          />
        </p>
      </div>
      <button className="py-5 mt-6 px-10 border-slate-800 border text-xl hover:bg-black hover:text-white">
        Get started
      </button>
    </main>
  );
}
