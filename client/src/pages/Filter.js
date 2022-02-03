import React, { useEffect, useState } from "react";
import { QUERY_AREA, QUERY_CATEGORY, QUERY_MEAL_SHORT } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  Form,
  Button,
  Alert,
  Card,
  Container,
  Row,
  Col,
  DropdownButton,
} from "react-bootstrap";
import Auth from "../utils/auth";
export default function Filter() {
  const [areaData, setAreaData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [mealShortData, setMealShortData] = useState([]);
  const [cultureSelect, setCultureSelect] = useState("American");
  const [categorySelect, setCategorySelect] = useState("Beef");
  
  const { loading: queryAreaLoading, data: queryAreaData } =
    useQuery(QUERY_AREA);
  const { loading: queryCategoryLoading, data: queryCategoryData } =
    useQuery(QUERY_CATEGORY);
  const { loading: queryMealShortLoading, data: queryMealShortData } = useQuery(
    QUERY_MEAL_SHORT,
    { variables: { a: cultureSelect, c: categorySelect } }
  );

  useEffect(() => {
    if (queryAreaData) {
      setAreaData(queryAreaData.area);
    }
    if (queryCategoryData) {
      setCategoryData(queryCategoryData.category);
    }
    if (queryMealShortData) {
      setMealShortData(queryMealShortData.mealShort);
    }
  }, [
    queryAreaData,
    queryAreaLoading,
    queryCategoryLoading,
    queryCategoryData,
    queryMealShortData,
    queryMealShortLoading,
    categorySelect,
    cultureSelect
  ]);
  function handleSearch(e) {
    e.preventDefault();
    var cultureSelect = document.querySelector(".cultureSelect").value;
    var categorySelect = document.querySelector(".categorySelect").value;
    console.log(cultureSelect, categorySelect);
    setCultureSelect(cultureSelect);
    setCategorySelect(categorySelect);
  }
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  return (
    <body className="recipePage">
      <DropdownButton>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="formBasicSelect">
          <Form.Label>Select Your Culture</Form.Label>
          <Form.Control
            className="cultureSelect"
            as="select"
            onChange={(e) => {}}
          >
            {areaData.map((item, index) => {
              return (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicSelect">
          <Form.Label>Select Your Category</Form.Label>
          <Form.Control
            className="categorySelect"
            as="select"
            onChange={(e) => {}}
          >
            {categoryData.map((item, index) => {
              return (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="success">
          Submit
        </Button>
      </Form>
      </DropdownButton>
      <Container>
        <Row>
          {mealShortData.map((item, index) => {
            return (
              <Col>
                <Card Name="cardPad" key={index} style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Button value={item.idMeal} variant="primary">
                      Go somewhere
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </body>
  );
}

