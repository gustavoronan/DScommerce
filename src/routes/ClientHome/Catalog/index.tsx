import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  desciption: "Teste de descrição",
  imgUrl:
    "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/refs/heads/master/backend/img/2-big.jpg",
  price: 2500,
  categories: [
    {
      id: 2,
      name: "Eletronicos",
    },

    {
      id: 3,
      name: "Computadores",
    },

    {
      id: 4,
      name: "Importados",
    },
  ],
};

export default function Catalog() {
  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar></SearchBar>
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
          <CatalogCard product={product}></CatalogCard>
        </div>
        <ButtonNextPage></ButtonNextPage>
      </section>
    </main>
  );
}
