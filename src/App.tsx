import Navbar from "./components/Navbar";
import SidebarSocial from "./components/SidebarSocial";
import SidebarEmail from "./components/SidebarEmail";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <SidebarSocial />
      <SidebarEmail />

      <main>
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>
      </main>
    </>
  );
}

export default App;
