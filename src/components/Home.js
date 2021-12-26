import React, { useState, useEffect } from "react";
import UserPost from './UserPost/index';
import UserService from "../services/user.service";
import CreatePost from "./UserPost/Create";
import Layout, { Content, Footer } from "antd/lib/layout/layout";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <>
    <Layout className="layout">
    <Content style={{ padding: '0 50px' , textAlign: 'center'}}>
      <div className="site-layout-content">
      <h4 style={{paddingBottom: '50px'}}>Backend {content}</h4>
       <UserPost/>
      <CreatePost/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  </>
  );
};

export default Home;
