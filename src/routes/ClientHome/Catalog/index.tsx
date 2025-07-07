import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";

type QuerryParams = {
  page: number;
  name: string;
};

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [querryParams, setQuerryParams] = useState<QuerryParams>({
    page: 0,
    name: "",
  });

  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    productService
      .findPageRequest(querryParams.page, querryParams.name)
      .then((response) => {
        const list = response.data.content;
        setProducts(products.concat(list));
        setIsLastPage(response.data.last);
      });
  }, [querryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQuerryParams({ ...querryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQuerryParams({ ...querryParams, page: querryParams.page + 1 });
  }

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch}></SearchBar>
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
        {!isLastPage && (
          <div onClick={handleNextPageClick}>
            <ButtonNextPage></ButtonNextPage>
          </div>
        )}
      </section>
    </main>
  );
}
