import FilterGroup from "../components/FilterGroup";
import OrderBy from "../components/OrderBy";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";

function ProductListingPage() {
  return (
    <>
      <Section color={"#F5F5F5"}>
        <OrderBy />
        <Section>
          <FilterGroup />
          <ProductListing produtos={produtos} />
        </Section>
      </Section>
    </>
  );
}

export default ProductListingPage;
