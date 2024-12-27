import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Grid } from "antd";
import { Col, Row } from "antd";
import axios from "axios";

function index() {
  const { Meta } = Card;
  const [books, setBooks] = useState([]);

  function getData() {
    axios.get("http://localhost:3001/books").then((res) => setBooks(res.data));
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        {books &&
          books.map((book) => (
            <Col span={6}>
              <Card
                hoverable
                style={{
                  width: 240,
                }}
                cover={
                  <img
                    alt="example"
                    src={book.image}
                  />
                }
              >
                <Meta
                  title={book.title}
                  description={book.author}
                />
              </Card>
            </Col>
          ))}
      </div>
    </>
  );
}

export default index;
