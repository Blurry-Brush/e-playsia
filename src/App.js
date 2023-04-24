import Footer from "./components/Footer";
import Games from "./components/Games";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import { AuthContextProvider } from "./context/AuthContext";




function App() {
  return (

    
      <div>
        <LogoBar />
        <Hero />
        <Games />
        <Footer />
      </div>
   
  );
}

export default App;
