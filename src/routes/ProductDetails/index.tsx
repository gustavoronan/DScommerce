import { useParams } from "react-router-dom";
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import * as productService from "../../services/product-service"

export default function ProductDetails(){
  const params = useParams();
  const product = productService.findById(Number(params.productId));
    return (
        <main>
          <section id="product-details-section" className="dsc-container">
            {
              product &&
              <ProductDetailsCard productProps = {product}></ProductDetailsCard>
            }
          
            <div className="dsc-btn-page-container">
               <ButtonPrimary name = "Comprar"></ButtonPrimary>
               <ButtonInverse name = 'Início'></ButtonInverse>
            </div>
          </section>
        </main>
    )
}