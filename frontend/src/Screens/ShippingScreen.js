import React, { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";

function ShippingScreen() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Address, setAddress] = useState(
    shippingAddress.Address ? shippingAddress.Address : ""
  );
  const [City, setCity] = useState(
    shippingAddress.City ? shippingAddress.City : ""
  );
  const [PostalCode, setPostalCode] = useState(
    shippingAddress.PostalCode ? shippingAddress.PostalCode : ""
  );
  const [Country, setCountry] = useState(
    shippingAddress.Country ? shippingAddress.Country : ""
  );

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({
        Address,
        City,
        PostalCode,
        Country,
      })
    );
    navigate("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="Address"
            placeholder="Enter Address Here"
            value={Address ? Address : ""}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="City">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type="City"
            placeholder="Enter City Here"
            value={City ? City : ""}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="PostalCode">
          <Form.Label>PostalCode</Form.Label>
          <Form.Control
            required
            type="PostalCode"
            placeholder="Enter PostalCode Here"
            value={PostalCode ? PostalCode : ""}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="Country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            required
            type="Country"
            placeholder="Enter Country Here"
            value={Country ? Country : ""}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="mt-3">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default ShippingScreen;
