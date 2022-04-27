import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card className="my-1 p-2 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Link to={`/product/${product._id}`}>
        <Card.Body>
          <strong as="div">{product.name}</strong>
        </Card.Body>
      </Link>

      <Card.Body>
        <div as="div" className="my-1">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color={"#f8e825"}
          />
        </div>
      </Card.Body>

      <Card.Body as="h3">${product.price}</Card.Body>
    </Card>
  );
}

export default Product;
