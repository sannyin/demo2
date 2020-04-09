import React, { useEffect, useState } from "react";
import { connect } from "dva";
import { Button } from "antd";

function Miuse(props) {
  //  列表渲染数组
  // let { dispatch } = props;

  useEffect(() => {
    // dispatch({
    //   type: "home/getListdata",
    //   payload: {}
    // });
  }, []);

  // function savestate() {
  //   dispatch({
  //     type: "home/save",
  //     payload: { val: ++val }
  //   });
  // }
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setTimeout(() => {
      alert("You clicked on: " + count);
    }, 3000);
  }

  return (
    <div>
      {/* <Button onClick={() => savestate()}>
        Miuse show
        {val}
      </Button>
      {listdata.map((item, i) => {
        return <span key={i}> {item.name} </span>;
      })} */}
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <Button onClick={handleAlertClick}>Show alert</Button>
    </div>
  );
}

export default connect(state => {
  let {
    home: { userData, val, listdata }
  } = state;
  return {
    userData,
    val,
    listdata
  };
})(Miuse);
