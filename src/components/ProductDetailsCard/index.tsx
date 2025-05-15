import { ProductDTO } from '../../models/product';
import ProductCategory from '../ProductCategory';
import './styles.css'

type Props = {
  productProps: ProductDTO;
}

export default function ProductDetailsCard ({productProps}: Props) {
    return(
        <div className="dsc-card dsc-mb20">
        <div className="dsc-product-details-top dsc-line-bottom">
          <img src={productProps.imgUrl} alt={productProps.name}/>
        </div>
        <div className="dsc-product-details-bottom">
          <h3>R$ {productProps.price.toFixed(2)}</h3>
          <h4>{productProps.name}</h4>
          <p>
            {productProps.description}
          </p>
          <div className="dsc-category-container">
             {
              productProps.categories.map(item => (
                <ProductCategory key={item.id} name = {item.name}></ProductCategory>
              ))
             }
          </div>
        </div>
      </div>
    );
}