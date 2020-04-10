import React, { useState, useEffect, useContext } from "react";
import styles from "./index.css";
import request from 'universal-request';
import { connect } from "dva";
import { Menu, Button, Icon,message } from "antd";
// import Miuse from './components/Miuse'
// import Time from './components/Time'
import Number from './components/Number'

function Home() {
  const themes = {
    light: {
      background: "#eeeeee"
    },
    dark: {
      background: "#222222"
    }
  };

  const ThemeContext = React.createContext(themes.light);
  // 声明数据初始化数组
  const [appleShow, setAppleShow] = useState(true);
  const [menuData, setMenuData] = useState([]);
  const [ReturnData, setReturnData] = useState([]);
  //  列表渲染数组
  useEffect(() => {
    let item = [...ReturnData];
    setMenuData(item);
  }, [ReturnData]);
  // 列表初始化
  useEffect(() => {
    request({
      url: 'http://localhost:8000/returnlist',
      method: 'GET',
      data: {
      },
      dataType: 'json'
    }).then(response => {
      // console.log(response);
      
      setReturnData(response.data.data);
    })
      .catch(error => {
        message.error(error.message)
      });
  }, []);

  // 调用接口数据发生改变
  function Meaulist(index) {
    if (index === "windows") {
      request({
        url: 'http://localhost:8000/returnlist2',
        method: 'GET',
        data: {
        },
        dataType: 'json'
      }).then(response => {
        setReturnData(response.data.data);
      })
        .catch(error => {
          message.error(error.message)
        });
    } else {
      request({
        url: 'http://localhost:8000/returnlist',
        method: 'GET',
        data: {
        },
        dataType: 'json'
      }).then(response => {
        setReturnData(response.data.data);
      })
        .catch(error => {
          message.error(error.message)
        });
    }
    
    
  }
  // 苹果出现隐藏
  function appleChange() {
    let item = [...menuData];
    setAppleShow(!appleShow);
    item[1].isshow = !appleShow;
    setMenuData(item);
  }
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.leftTitle}>导航栏</div>
        <div className={styles.leftmeau}>
          <Menu theme="dark" style={{ width: 256 }} mode="inline">
            {menuData.map((item, i) => {
              return item.isshow ? (
                <Menu.Item key={i}>
                  <Icon type={item.img} /> {item.name}
                </Menu.Item>
              ) : (
                ""
              );
            })}
          </Menu>
        </div>
      </div>
      <div className={styles.right}>
        <Button onClick={() => appleChange()} type="primary">
          {appleShow ? "苹果消失" : "苹果出现"}
        </Button>{" "}
        <Button onClick={() => Meaulist("windows")} type="primary">
          windows在最前面
        </Button>{" "}
        <Button onClick={() => Meaulist("android")} type="primary">
          android在最前面
        </Button>
        <Button
          style={{ background: theme.background, color: theme.foreground }}
        >
          I am styled by theme context!
        </Button>
        {/* <Miuse></Miuse>
        <Time></Time> */}
        <Number></Number>
      </div>
    </div>
  );
}
export default connect(state => {
  let {
    home: { userData,val }
  } = state;
  // 获取数据,为命名空间
  return {
    userData,
    val
  };
})(Home);
