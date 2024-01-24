import React from "react";
import styled from "styled-components";

import img from "./pic1.jpeg";
import MonzaLogo from "./monza_logo.png";

import "./App.css";

function App() {
  return (
    <AppContainer>
      <ImageContainer>
        <Logo src={MonzaLogo} />
      </ImageContainer>
      <ContentConainer>
        <h2>Liebe Rennsportfreunde,</h2>
        <p>
          mit einem wehmütigen Blick zurück und einem dankbaren Herzen möchten
          wir euch darüber informieren, dass unsere Kartbahn seit dem 18.
          Dezember 2023 ihre Pforten geschlossen hat. Diese 27 Jahre voller
          Adrenalin, Fahrspaß und unvergesslicher Momente wären ohne euch,
          unsere geschätzten Kunden und Freunde, nicht möglich gewesen. <br />
          <br />
          Seit der Eröffnung im Jahr 1996 durften wir viele Höhen und Tiefen
          erleben, aber vor allem haben wir zahlreiche Freundschaften
          geschlossen und unvergleichliche Rennmomente geteilt. Die
          Entscheidung, die Kartbahn zu schließen, fiel uns nicht leicht, aber
          wir möchten uns bei euch allen für die unglaubliche Unterstützung,
          Leidenschaft und die vielen lachenden Gesichter bedanken, die unsere
          Bahn über die Jahre gefüllt haben.
          <br />
          <br />
          Jede Kurve, jedes Überholmanöver, und jeder Jubelschrei hat unsere
          Bahn mit Leben erfüllt. Es war eine fantastische Reise, die wir nie
          vergessen werden. Wir schließen dieses Kapitel mit einem Lächeln,
          voller Dankbarkeit für die vielen Jahre gemeinsamer Erlebnisse.
          <br />
          <br /> Ein herzliches Dankeschön an jeden Einzelnen von euch, der Teil
          unserer Rennfamilie war. Auch wenn die Rennstrecke nun ruht, bleiben
          die Erinnerungen an die spannenden Rennen und die gemeinsamen Stunden
          bestehen.
          <br />
          <br />
          Wir hoffen, dass ihr die gleichen positiven Erinnerungen mitnehmt wie
          wir. Abschließend möchten wir uns nochmals von ganzem Herzen bei euch
          allen bedanken. Es war eine Ehre und Freude, euch auf unserer Kartbahn
          begrüßen zu dürfen. Möge die Rennleidenschaft in euch weiterbrennen,
          auch wenn die Motoren auf unserer Strecke verstummt sind.
        </p>
      </ContentConainer>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  width: 50vw;
  height: 100%;
  background-color: #eee;
  background: url(${img});
  background-size: cover;
  filter: grayscale();
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  &:hover {
    filter: none;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 300px;
  }
`;

const Logo = styled.img`
  height: 100px;
  padding: 25px 25px;

  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

const ContentConainer = styled.div`
  width: 45vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  overflow-y: scroll;

  h1 {
  }
  ul {
    list-style-type: none;
    padding: 0 5px;
    font-size: 28px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

export default App;
