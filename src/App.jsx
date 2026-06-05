import portfolio from "./data/portfolio.json";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Expertise from "./components/Expertise.jsx";
import Services from "./components/Services.jsx";
import RecentJobs from "./components/RecentJobs.jsx";
import Clients from "./components/Clients.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app-shell">
      <Header profile={portfolio.profile} navigation={portfolio.navigation} />
      <main>
        <Hero profile={portfolio.profile} />
        <About profile={portfolio.profile} />
        <Expertise expertise={portfolio.expertise} tools={portfolio.tools} />
        <Services services={portfolio.services} />
        <RecentJobs jobs={portfolio.recentJobs} />
        <Clients clients={portfolio.clients} />
        <Testimonials testimonials={portfolio.testimonials} />
        <Contact profile={portfolio.profile} services={portfolio.services} />
      </main>
      <Footer profile={portfolio.profile} navigation={portfolio.navigation} />
    </div>
  );
}

export default App;
