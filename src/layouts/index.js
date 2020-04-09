import styles from "./index.css";
import React from "react";
import { Menu,Icon } from "antd";
import { Link } from "dva/router";
import routerArr from "./route";
const { SubMenu } = Menu;

function BasicLayout(props) {
  return (
    // <div>
    //   {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1> */}
    //   {props.children}
    // </div>
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.leftTitle}> 大促运营平台 </div>{" "}
        <div className={styles.leftmeau}>
          <Sider> </Sider>{" "}
        </div>{" "}
      </div>{" "}
      <div className={styles.right}> {/* {props.children} */} </div>{" "}
    </div>
  );
}
class Sider extends React.Component {
  componentDidMount() {}
  state = {
    theme: "light",
    current: ["/"],
    collapsed: false,
    openKeys: [],
  };
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  // toggleCollapsed = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // };
  // handleClick = e => {
  //   this.props.callback(e.key);
  //   this.setState({
  //     current: e.key
  //   });
  // };
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  menuRender = data => {
    let { id, url, value, children } = data;
    if (children && children.length) {
      return (
        <SubMenu
          key={id}
          title={
            <span>
              <span className={styles.linkcolor}> {value} </span>{" "}
            </span>
          }
        >
          {" "}
          {children.map(item => this.menuRender(item))}{" "}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={id}>
          <Link to={url}>
            <span>
              <span className="linkcolor"> {value} </span>{" "}
            </span>{" "}
          </Link>{" "}
        </Menu.Item>
      );
    }
  };

  render() {
    return (
      <div>
        <Menu
          theme={this.state.theme}
          style={{
            width: "200px"
          }}
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          selectedKeys={[this.state.current]}
          mode="inline"
          inlineCollapsed={this.state.collapsed}
        >
          {/* {" "}
          {routerArr.map(item => this.menuRender(item))}{" "} */}
           <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
        </Menu>{" "}
      </div>
    );
  }
}

export default BasicLayout;
