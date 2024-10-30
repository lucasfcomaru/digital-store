import styled from "styled-components";
import ProductCard from "./ProductCard";

const StyledProductListingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

function ProductListing({ produtos }) {
  return (
    <>
      <StyledProductListingContainer>
        {produtos.map((produto, indice) => {
          if (produto.priceDiscount) {
            return (
              <div key={indice} className="product-container">
                <ProductCard
                  image={produto.image}
                  category={produto.category}
                  name={produto.name}
                  price={produto.price}
                  priceDiscount={produto.priceDiscount}
                />
              </div>
            );
          } else {
            return (
              <div key={indice} className="product-container">
                <ProductCard
                  image={produto.image}
                  category={produto.category}
                  name={produto.name}
                  price={produto.price}
                />
              </div>
            );
          }
        })}
      </StyledProductListingContainer>
    </>
  );
}

export default ProductListing;
