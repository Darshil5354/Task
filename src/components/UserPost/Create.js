import React, { useState } from "react";
import { Input, Button, Space, Card } from "antd";
import { useSelector,useDispatch } from "react-redux";
import { createPost } from "../../slices/feature/postSlice"; 
import LoadingCard from "./LoadingCard";

const CreatePost = ({ history }) => {
  const [values, setValues] = useState({ title: "", body: "" });

  const [showPost, setShowPost] = useState(false);

  const {post,loading} = useSelector((state)=>({ ...state.app }));
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({values})) 
    setValues({ title: "", body: "" });
    setShowPost(true);
  };

  const showPostBlog = () => {
    return (
      <>
        {loading ? (
          <LoadingCard count={1} />
        ) : (
          <div className="site-card-border-less-wrapper" style={{textAlign:"center"}}>
            <Card type="inner" title={post[0].title}>
              <p>User Id: {post[0].id}</p>
              <span>data : {post[0].body}</span>
            </Card>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
        <div className="container" style={{ marginTop: "20px" }}>
          <h1>Create Post</h1>
          <Input
            placeholder="Enter title"
            type="text"
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            value={values.title}
            style={{ width: "400px" }}
          />
          <br />
          <br />
          <Input.TextArea
            placeholder="Enter Body"
            type="text"
            onChange={(e) => setValues({ ...values, body: e.target.value })}
            value={values.body}
            style={{ width: "400px" }}
            size="large"
          />
          <br />
          <br />
          <Space style={{ margin: 10 }}>
          {/* If In case you want it not seperate links. */}
            {/* <Button onClick={() => history.push("/")}>Go Back</Button> */}
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </div>
      </form>
      <br />
      <br />
      {showPost && <div>{showPostBlog()}</div>}
    </>
  );
};

export default CreatePost;
