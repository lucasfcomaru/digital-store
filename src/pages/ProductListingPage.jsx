import FilterGroup from "../components/FilterGroup";
import OrderBy from "../components/OrderBy";
import Section from "../components/Section";

function ProductListingPage() {
    return (
        <>
            <Section color={"#F5F5F5"}>
                <OrderBy />
                <FilterGroup />
            </Section>
        </>
    );
}

export default ProductListingPage;