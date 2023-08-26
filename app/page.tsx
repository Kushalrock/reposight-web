import Typewriter from "./components/typewriter";
import Navbar from "./components/common/navbar";
export default function Home() {
  return (
    <main className="h-screen w-screen bg-[url('/mainbg.svg')] bg-cover flex items-center  flex-col">
      <div className="bg-[#0000009c] ">
        <Navbar></Navbar>
        <div className="h-screen w-screen flex items-center justify-center flex-col">
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
          <button className="py-5 mt-6 px-10 border-black border text-xl text-white hover:bg-black hover:text-white ease-in-out duration-300 rounded-lg ">
            Get started
          </button>
        </div>
      </div>
    </main>
  );
}
