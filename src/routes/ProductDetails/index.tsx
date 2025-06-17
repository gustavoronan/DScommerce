import { useNavigate, useParams } from "react-router-dom";
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service";
import * as cartService from "../../services/cart-service";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();
  const navigate = useNavigate();

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/catalog");
      });
  }, []);

  function handleByClick() {
    if (product) {
      cartService.addProduct(product);
      navigate("/cart")
    }
  }

  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && (
          <ProductDetailsCard productProps={product}></ProductDetailsCard>
        )}

        <div className="dsc-btn-page-container">
          <div onClick={handleByClick}>
            <ButtonPrimary name="Comprar"></ButtonPrimary>
          </div>
          <Link to="/">
            <ButtonInverse name="Início"></ButtonInverse>
          </Link>
        </div>
      </section>
    </main>
  );
}
