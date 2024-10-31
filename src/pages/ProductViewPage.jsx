import styled from "styled-components";
import ProductGallery from "../components/ProductGallery";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";

const StyledProductContainer = styled.div`
    display: grid;
    grid-template-columns: 700px 1fr;
    gap: 60px;
`;

const productImages = [
  { src: "../../public/product-image-1.jpg" },
  { src: "../../public/product-image-2.jpg" },
  { src: "../../public/product-image-3.jpg" },
  { src: "../../public/product-image-4.jpg" },
  { src: "../../public/product-image-5.jpg" },
];

const produtos = [
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
  },
  {
    name: "K-Swiss V8 - Masculino",
    image: "../../public/tenisv8.png",
    category: "Tênis",
    price: 200,
    priceDiscount: 149.9,
  },
];

function ProductViewPage() {
  return (
    <>
      <Section>
        <StyledProductContainer>
          <ProductGallery images={productImages} />
          <div className="buybox"></div>
        </StyledProductContainer>
      </Section>
      <Section
        title={"Produtos Relacionados"}
        link={"/productlisting"}
        padd={"60px 0 120px"}
        titleAlign="space-between"
      >
        <ProductListing produtos={produtos} />
      </Section>
    </>
  );
}

export default ProductViewPage;
