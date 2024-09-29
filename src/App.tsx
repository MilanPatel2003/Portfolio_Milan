import "./App.css";
import StarsCanvas from "./components/ui/StarBackground";
import bgPattern from "./assets/img/bg_pattern.png"; // Import the image

function App() {
  return (
    <main
      className="h-screen w-screen overflow-hidden relative bg-slate-950 bg-no-repeat"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div>
        <StarsCanvas />
        <div className="relative z-10 flex flex-col gap-20">
          {/* Your other components go here */}
          {/* <Banner />
          <About />
          <Experience />
          <Projects />
          <Footer /> */}
        </div>
      </div>
    </main>
  );
}

export default App;
