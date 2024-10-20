import styled from "styled-components";
import Section from "../components/Section";
import collection1 from "../../public/collection1.png";
import collection2 from "../../public/collection2.png";
import collection3 from "../../public/collection3.png";
import { Link } from "react-router-dom";

const StyledImgColecao = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  box-sizing: border-box;

  & div {
    position: relative;
    img {
      width: 100%;
    }
  }
`;

const StyledButtonSecondary = styled.button`
  position: absolute;
  border: none;
  border-radius: 4px;
  padding: 16px 20px;
  background-color: var(--light-grey-3);
  font-weight: bold;
  font-size: 1rem;
  color: var(--primary);
  left: 8%;
  bottom: 12%;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    color: var(--white);
    background-color: var(--primary);
  }
`;

function HomePage() {
  return (
    <>
      <Section title={"Coleções em destaque"}>
        <StyledImgColecao>
          <div>
            <img src={collection1} alt="" />
            <Link to={"/productlisting"}>
              <StyledButtonSecondary>Comprar</StyledButtonSecondary>
            </Link>
          </div>
          <div>
            <img src={collection2} alt="" />
            <Link to={"/productlisting"}>
              <StyledButtonSecondary>Comprar</StyledButtonSecondary>
            </Link>
          </div>
          <div>
            <img src={collection3} alt="" />
            <Link to={"/productlisting"}>
              <StyledButtonSecondary>Comprar</StyledButtonSecondary>
            </Link>
          </div>
        </StyledImgColecao>
      </Section>
      <Section title={"Coleções em destaque"} titleAlign="center">
        <h1>teste</h1>
        dgdfjh
      </Section>
      <Section
        title={"Produtos em alta"}
        titleAlign="space-between"
        link={"/productlisting"}
      >
        <h1>teste</h1>
      </Section>
    </>
  );
}

export default HomePage;
