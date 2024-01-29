import styled from "styled-components";

export const AppContainer = styled.div`
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

export const ImageContainer = styled.div`
  width: 50vw;
  height: 100%;
  background-color: #eee;
  background: url(${(props) => props.imageUrl});
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

export const Logo = styled.img`
  width: 150px;
  height: auto;
  padding: 25px 25px;
  display: inline-block;

  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;

export const Credit = styled.div`
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

export const ContentConainer = styled.div`
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

export const Footer = styled.footer`
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
