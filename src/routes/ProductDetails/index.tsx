import { useParams } from "react-router-dom";
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import axios from "axios";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(()=> {
    axios.get(`http://localhost:8080/products/${params.productId}`)
    .then(response => {
      setProduct(response.data);
    })
   
  },[])


  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && (
          <ProductDetailsCard productProps={product}></ProductDetailsCard>
        )}

        <div className="dsc-btn-page-container">
          <ButtonPrimary name="Comprar"></ButtonPrimary>
          <Link to="/">
            <ButtonInverse name="Início"></ButtonInverse>
          </Link>
        </div>
      </section>
    </main>
  );
}
