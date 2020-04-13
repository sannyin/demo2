import React, { useState, useEffect } from "react";
function User(props) {
    const [obj, setCount] = useState({
      name: '白茶',
      age: 23
    })
    const [data, setData] = useState(
      [
        { name: 'baicha' }
      ]
    )
    const { name, age } = obj;
    const onAdd = () => {
      setCount({ ...obj, age: obj.age + 1 });
    }
    const onName = () => {
      setData([{ name:'白茶2',age:2 }]);
    }
    useEffect(() => {
      console.log('进入了')
    }, [obj,data]);
    return (
      <div>
        <div> {name}</div>
        <div onClick={onAdd}> {age}</div>
        <div onClick={onName}> {data[0].name}</div>
        <div> {data[0].age}</div>
      </div>
    )
  }
  export default User;