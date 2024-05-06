import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBlogById, deleteBlog } from "../store/blogSlice";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { LikesContext } from "../context/like-context";
import "./BlogDetails.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

const BlogDetails = () => {
  const { id } = useParams();
  const blogUnit = useSelector((state) => selectBlogById(state, id));
  const { likes, toggleLike } = useContext(LikesContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
    navigate("/");
  };

  const handleLikeClick = () => {
    toggleLike(id);
  };

  const likeButton = (
    <Button bg="light" variant="danger" onClick={handleLikeClick}>
      {likes[id] ? (
        <>
          {" "}
          'Liked' <FaHeart />
        </>
      ) : (
        <>
          {" "}
          'Like' <FaRegHeart />
        </>
      )}
    </Button>
  );

  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  return (
    <div>
      <Button
        type="button"
        bg="light"
        variant="dark"
        onClick={() => navigate("/")}
        style={{
          justifyContent: "center",
          position: "relative",
          top: "50%",
          left: "10%",
          marginBottom: "25px",
        }}
      >
        BACK
      </Button>

      <Card border="primary" key={blogUnit.id} text={"dark"} className="card-out">
        <Card.Header style={{ backgroundColor: "#854F6C" }}>
          <Button
            type="button"
            bg="light"
            variant="warning"
            onClick={() => handleDelete(blogUnit.id)}
            style={{
              marginRight: "25px",
            }}
          >
            <AiFillDelete />
            Delete
          </Button>
          <Button
            type="button"
            bg="dark"
            variant="info"
            onClick={() => handleEdit(blogUnit.id)}
            style={{
              marginRight: "25px",
            }}
          >
            <AiOutlineEdit />
            Edit
          </Button>
          {likeButton}
        </Card.Header>

        <Card.Body style={{ backgroundColor: "#DFB6B2" }}>
          <Card.Title>
            <div>
              <div
                style={{
                  marginRight: "25px",
                  color: "rgb(112, 22, 55)",
                  textAlign: "center",
                }}
              >
                <div style={{ marginBottom: "20px" }}>{blogUnit.category}</div>
              </div>
              <div>{blogUnit.title}</div>
            </div>
          </Card.Title>

          <Card.Text>
            <div style={{ marginBottom: "15px" }}>{blogUnit.description}</div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogDetails;
