import "./App.css";
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "excursiones" },
    { url: "#", title: "Recompensas" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01} />
      <Slider
        imageSrc={travel_02}
        title={"Sé un explorador"}
        subtitle={
          "¡Nuestra plataforma ofrece una amplia variedad de viajes únicos!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Recuerdos para toda la vida"}
        subtitle={"Las vacaciones de tus sueños están a solo unos clics de distancia"}
        flipped={true}
      />
    </div>
  );
}

export default App;