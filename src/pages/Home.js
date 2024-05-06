import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import { TbPencilExclamation } from "react-icons/tb";

const Home = () => {
  const blogs = useSelector((state) => state.blogs.blogs);

  const colors = [
    { backgroundColor: '#2B124C' },
    { backgroundColor: '#522B5B' },
    { backgroundColor: '#854F6C' },
    { backgroundColor: '#DFB6B2' },
  ];

  return (
    <Container>
      <h2 className="text-center my-4" style={{ backgroundColor: 'rgb(250, 218, 177)' }}>Blog Posts</h2>
      <Row className="justify-content-center">
        {blogs.map((blog, index) => (
          <Col md={4} key={blog.id} className="mb-4">
            <Card style={colors[(index + 1) % colors.length]} text={"light"}>
              <Card.Header><b>{index + 1}. Blog <TbPencilExclamation /></b></Card.Header>
              <Link to={`/blog-details/${blog.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card.Body>
                  <Card.Title><h6>{blog.title}</h6></Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
