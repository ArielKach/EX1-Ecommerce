import "./MainPage.css";
import { products } from "../products";

const MainPage = () => {
  return (
    <div className="MainPage">
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <div className="productDescription">
                <p className="productTitle"><b>Title:</b> {product.title}</p>
                <p className="productPrice"><b>Price:</b> {product.price}</p>
              </div>
              <img
                className="productImg"
                src={product.images[0]}
                alt={product.title}
              ></img>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainPage;
