import React, { useState } from "react";
import styled from "styled-components";

import img from "./pic1.jpeg";
import MonzaLogo from "./monza_logo.png";

import "./App.css";

function App() {
  const [enteredName, setEnteredName] = useState("");
  const [signatures, setSignatures] = useState([]);

  const onInputChange = (e) => {
    setEnteredName(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted: " + enteredName);
    setSignatures((prevSignatures) => [...prevSignatures, enteredName]);
    setEnteredName("");
  };

  return (
    <AppContainer>
      <ImageContainer>
        <Credit>
          Foto
          <a href="https://instagram.com/whokilledbambi">&copy; Lennart Bick</a>
        </Credit>
        <Logo src={MonzaLogo} />
      </ImageContainer>
      <ContentConainer>
        <ScrollButton>
          <a href="#signature">Mit deinem Namen verewigen 👇</a>
        </ScrollButton>
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
        <SignSection id="signature">
          <h3>Deine Unterschrift – unser Dank:</h3>
          <p>
            Hinterlasse deinen Namen auf unserer Website und bleibe immer
            verbunden – auch wenn die Motoren ruhen.
          </p>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <Input
                type="text"
                placeholder="Dein Vor- oder Spitzname"
                value={enteredName}
                onChange={(e) => onInputChange(e)}
              />
              <Button type="submit">✍️</Button>
            </FormContainer>
          </form>
          <Signatures>
            <ul>
              {signatures.map((signature, index) => (
                <li key={index}>{signature}</li>
              ))}
            </ul>
          </Signatures>
        </SignSection>
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

const SignSection = styled.div`
  margin-top: 25px;
  background-color: #eee;
  padding: 25px;

  h3 {
    color: #c70039;
  }
`;
const Signatures = styled.div``;

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Input = styled.input`
  flex: 1;
  width: 85%;
  border: 2px solid #121212;
  box-sizing: border-box;
  padding: 15px;
  height: 45px;
  font-size: 18px;
  font-family: "Space Grotesk Variable", sans-serif;
  font-weight: 500;
  border-radius: none;

  &:focus {
    outline: none;
    border: 2px solid #121212;
  }
`;
const Button = styled.button`
  border: none;
  background-color: #121212;
  color: #fff;
  padding: 15px;
  height: 45px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  display: flex;
  flex-direction: column-reverse;
  align-items: space-between;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;

  &:hover {
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 300px;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  padding: 25px 25px;
  display: inline-block;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;

const Credit = styled.div`
  padding: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  gap: 5px;

  a,
  a:visited {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    padding: 10px;
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
    margin-bottom: 0px;
    color: #c70039;
    font-size: 36px;
  }
  h2 {
    margin-top: 0px;
    font-weight: 500;
    font-size: 26px;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;

const Footer = styled.footer`
  margin-top: 50px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  a,
  a:visited {
    color: #666;
    text-decoration: none;

    &:first-child {
      margin-right: 10px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ScrollButton = styled.div`
  margin-top: 25px;
  width: 230px;
  background: rgba(230, 230, 230, 1);
  padding: 2.5px 10px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  a {
    text-decoration: none;
    font-size: 14px;
    color: rgb(12, 12, 12);
  }

  &:hover {
    transform: scale(105%);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    //width: 100%;
  }
`;

export default App;
