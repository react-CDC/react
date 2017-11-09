import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';


import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => () => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component/> : <Loading/>
        }
    </Bundle>
);

const getRouter = () => (
    <Router>
        <div>
        <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to="/">
                    <Icon type="user" />
                    <span className="nav-text">首页</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/page1">
                    <Icon type="video-camera" />
                    <span className="nav-text">商品</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/counter">
                    <Icon type="upload" />
                    <span className="nav-text">购物车</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to="/userinfo">
                    <Icon type="user" />
                    <span className="nav-text">我的</span>
                </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Switch>
                    <Route exact path="/" component={createComponent(Home)}/>
                    <Route path="/page1" component={createComponent(Page1)}/>
                    <Route path="/counter" component={createComponent(Counter)}/>
                    <Route path="/userinfo" component={createComponent(UserInfo)}/>
                </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
      </div>
    </Router>
);

export default getRouter;