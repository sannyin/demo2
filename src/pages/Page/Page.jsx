import React, { useState, useRef, } from "react";
import Demoone from "../components/Demoone";
import Son from '../components/Son'
import { Button } from "antd";
export const Demowrap = React.createContext();
const Page = () => {
  const data = [{ name: "baicha" }, { age: "12" }, { gender: "men" }];
  const [number, setNumber] = useState(0);
  const [state, setState] = useState(data);
  const childRef = useRef();
	const updateChildState = () => {
		// changeVal就是子组件暴露给父组件的方法
		childRef.current.changeVal(99);
	}
  return (
    <div>
      <Demowrap.Provider value={{ usename: state, number: number }} >
        <Demoone/>
      </Demowrap.Provider>
      {/* 此处注意需要将childRef通过props属性从父组件中传给自己 cRef={childRef} */}
      <Son  cRef={childRef}></Son>
      <button onClick={updateChildState}>触发子组件方法</button>
    </div>
  );
};
export default Page;
