import React from "react";
import { Link } from "wouter";
import styled from "styled-components";

const Impressum = () => {
  return (
    <Container>
      <StyledLink to="/">
        <BackArrow>&#8592;</BackArrow> Zurück
      </StyledLink>

      <Heading>Impressum</Heading>

      <Section>
        <SubHeading>Verantwortlich für den Inhalt dieser Website:</SubHeading>
        <p>Monza Indoor Kart GmbH</p>
        <Address>Dorstener Straße 360, 44653 Herne</Address>
        <p>monza@monza.de</p>
        <p>0 23 25 / 988 288</p>
      </Section>

      <Section>
        <SubHeading>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        </SubHeading>
        <p>DE 175 578 023</p>
      </Section>

      <Section>
        <SubHeading>Registergericht:</SubHeading>
        <p>HRB 9940 · Amtsgericht Bochum</p>
      </Section>

      <Section>
        <SubHeading>Haftungshinweis:</SubHeading>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>
      </Section>

      <Section>
        <SubHeading>Datenschutzerklärung:</SubHeading>
        <p>
          <StyledLink href="/datenschutz">Datenschutzerklärung</StyledLink>
        </p>
      </Section>

      <Section>
        <SubHeading>Bildnachweise:</SubHeading>
        <p>Bild Karthalle: &copy; 2023 Lennart Bick</p>
      </Section>

      <Section>
        <SubHeading>Copyright:</SubHeading>
        <p>
          © {new Date().getFullYear()}, Monza Indoor Kart GmbH. Alle Rechte
          vorbehalten.
        </p>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

  p {
    display: block;
    margin: 0;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SubHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Address = styled.address`
  font-style: normal;
`;

const StyledLink = styled(Link)`
  color: #c70039;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BackArrow = styled.span`
  font-size: 20px;
  margin-right: 5px;
`;

export default Impressum;
