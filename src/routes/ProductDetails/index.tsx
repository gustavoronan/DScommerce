import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
    id:2,
    name: "Smart TV",
    desciption: "Teste de descrição",
    imgUrl:"https://raw.githubusercontent.com/devsuperior/dscatalog-resources/refs/heads/master/backend/img/2-big.jpg",
    price:2500,
    categories: [
      {
        id: 2,
        name: "Eletronicos"
      },

      {
        id: 3,
        name: "Computadores"
      },

      {
        id: 4,
        name: "Importados"
      }

    ]
}

export default function ProductDetails(){
    return (
        <main>
          <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard productProps = {product}></ProductDetailsCard>
            <div className="dsc-btn-page-container">
               <ButtonPrimary name = "Comprar"></ButtonPrimary>
               <ButtonInverse name = 'Início'></ButtonInverse>
            </div>
          </section>
        </main>
    )
}