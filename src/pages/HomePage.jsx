import Section from "../components/Section";

function HomePage() {
  return (
    <>
      <Section title={"Coleções em destaque"}></Section>
      <Section title={"Coleções em destaque"} titleAlign="center"></Section>
      <Section title={"Produtos em alta"} titleAlign="space-between" link={"/productlisting"}></Section>
    </>
  );
}

export default HomePage;
