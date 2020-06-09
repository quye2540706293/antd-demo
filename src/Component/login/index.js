import React, { Component, Fragment } from "react";
import { Layout, Menu, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.css";

const { Header, Content, Footer } = Layout;

const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    
    return (
      <Fragment>
        <Layout className="layout" style={{ height: "100%" }}>
          <Header style={{ background: "rgba(255,255,255,1)" }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ background: "rgba(255,255,255,1)" }}
            >
              <Menu.Item
                key="1"
                style={{
                  color: "rgba(74,74,74,1)",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                企业
              </Menu.Item>
              <Menu.Item
                key="2"
                style={{
                  color: "rgba(74,74,74,1)",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                人才
              </Menu.Item>

              <Menu.Item
                key="5"
                style={{
                  color: "rgba(74,74,74,1)",
                  fontSize: "16px",
                  fontWeight: "500",
                  float: "right",
                }}
              >
                我要赚钱
              </Menu.Item>
              <Menu.Item
                key="4"
                style={{
                  color: "rgba(74,74,74,1)",
                  fontSize: "16px",
                  fontWeight: "500",
                  float: "right",
                }}
              >
                我要招才
              </Menu.Item>
              <Menu.Item
                key="3"
                style={{
                  color: "rgba(74,74,74,1)",
                  fontSize: "16px",
                  fontWeight: "500",
                  float: "right",
                }}
              >
                电话：101——12345678
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              padding: "0 50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="site-layout-content"
              style={{
                height: "60%",
                width: "33.68%",
                background: "rgba(255,255,255,1)",
                boxShadow: "0px 7px 14px 0px rgba(0,0,0,0.1)",
                borderRadius: "10px",
                opacity: "0.9",
              }}
            >
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item style={{ paddingTop: "5%" }}>
                  <h1>上午好！欢迎您回来</h1>
                </Form.Item>

                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: "Please input your Username!" },
                  ]}
                  style={{ padding: "0 12.16%" }}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="用户名："
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                  style={{ padding: "0 12.16%" }}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码："
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住密码</Checkbox>
                  </Form.Item>

                  <a className="login-form-forgot" href="# ">
                    忘记密码
                  </a>
                </Form.Item>

                <Form.Item style={{ padding: "0 12.16%" }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ width: "100%" }}
                  >
                    登录
                  </Button>
                </Form.Item>
                <Form.Item>
                  <p style={{ padding: "0 10px" }}>
                    <span style={{ padding: "0 10px" }}>其他登录方式</span>
                    <a href=" " style={{ padding: "0 10px" }}>
                      <img src=" #" alt="微信" />
                    </a>
                    <a href=" " style={{ padding: "0 10px" }}>
                      <img src=" #" alt="QQ" />
                    </a>
                    <a href=" " style={{ padding: "0 10px" }}>
                      <img src=" #" alt="微博" />
                    </a>
                    <a href=" " style={{ padding: "0 10px" }}>
                      注册账户
                    </a>
                  </p>
                </Form.Item>
              </Form>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <a href="# ">帮助</a>
            <a href="# ">隐私</a>
            <a href="# ">条款</a>
            <br />
            Copyright©2017 威派行有限公司体验技术部出品
          </Footer>
        </Layout>
      </Fragment>
    );
  }
}
