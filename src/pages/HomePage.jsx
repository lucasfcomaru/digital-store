import Section from "../components/Section";

function HomePage() {
  return (
    <>
      <Section title={"Coleções em destaque"}>
        <h1>teste</h1>
      </Section>
      <Section title={"Coleções em destaque"} titleAlign="center">
        <h1>teste</h1>
        dgdfjh
      </Section>
      <Section title={"Produtos em alta"} titleAlign="space-between" link={"/productlisting"}>
        <h1>teste</h1>
      </Section>
    </>
  );
}

export default HomePage;
