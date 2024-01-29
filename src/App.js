import React, { useState, useEffect } from "react";
import {
  AppContainer,
  ImageContainer,
  Logo,
  Credit,
  ContentConainer,
  Footer,
} from "./App.styled";

import MonzaLogo from "./monza_logo.png";

import "./App.css";

function App() {
  const images = [
    require("./img/pic1.jpg"),
    require("./img/pic2.jpg"),
    require("./img/pic3.jpg"),
    require("./img/pic4.jpg"),
    require("./img/pic5.jpg"),
    require("./img/pic6.jpg"),
    require("./img/pic7.jpg"),
    require("./img/pic8.jpg"),
  ];

  const preloadedImages = images
    .sort(() => Math.random() - 0.5)
    .map((image) => {
      const img = new Image();
      img.src = image;
      return img;
    });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <AppContainer>
      <ImageContainer
        key={currentImageIndex}
        imageUrl={preloadedImages[currentImageIndex].src}
      >
        <Credit>
          Fotos von
          <a href="https://instagram.com/whokilled.bambi">@whokilled.bambi</a>
        </Credit>
        <Logo src={MonzaLogo} />
      </ImageContainer>
      <ContentConainer>
        <h1>Wir haben geschlossen!</h1>
        <h2>Liebe Kundinnen und Kunden,</h2>
        <p>
          mit einem wehmütigen Blick zurück möchten wir euch darüber
          informieren, dass unsere Kartbahn seit dem{" "}
          <strong>18. Dezember 2023</strong> ihre Pforten geschlossen hat. Diese
          27 Jahre voller Adrenalin, Fahrspaß und unvergesslicher Momente wären
          ohne euch nicht möglich gewesen. <br />
          <br />
          Seit der Eröffnung im Jahr 1996 durften wir viele Höhen und Tiefen
          erleben, aber vor allem haben wir zahlreiche Freundschaften
          geschlossen und unvergleichliche Momente geteilt. Die Entscheidung,
          die Kartbahn zu schließen, fiel uns nicht leicht, aber wir möchten uns
          bei euch allen für die unglaubliche Unterstützung, Leidenschaft und
          die vielen lachenden Gesichter bedanken, die unsere Bahn über die
          Jahre gefüllt haben.
          <br />
          <br />
          Jede Kurve,jedes Überholmanöver, und jeder Jubelschrei hat unsere
          Kartbahn mit Leben erfüllt. Es war eine fantastische Reise, die wir
          nie vergessen werden. Wir schließen dieses Kapitel mit einem Lächeln,
          voller Dankbarkeit für die vielen Jahre gemeinsamer Erlebnisse.
          <br />
          <br />
          Ein herzliches Dankeschön an jeden Einzelnen von euch, der Teil
          unserer Rennfamilie war. Auch wenn die Rennstrecke nun ruht, bleiben
          die Erinnerungen an die spannenden Rennen und die gemeinsamen Stunden
          bestehen. Wir hoffen, dass ihr die gleichen positiven Erinnerungen
          mitnehmt wie wir.
          <br />
          <br />
          Abschließend möchten wir uns nochmals von ganzem Herzen bei euch allen
          bedanken. Es war eine Ehre und Freude, euch auf unserer Kartbahn
          begrüßen zu dürfen. Möge die Rennleidenschaft in euch weiterbrennen,
          auch wenn die Motoren auf unserer Strecke verstummt sind.
        </p>
        <Footer>
          <p>&copy; {new Date().getFullYear()} Monza Indoor Kart GmbH</p>
          <div>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </div>
        </Footer>
      </ContentConainer>
    </AppContainer>
  );
}

export default App;
