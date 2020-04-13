import React,{useState, useImperativeHandle} from "react";
const ChildComp = ({cRef}) => {
	const [val, setVal] = useState();
	// 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
	useImperativeHandle(cRef, () => ({
		// changeVal 就是暴露给父组件的方法
	    changeVal: (newVal) => {
	      setVal(newVal);
	    }
  	}));
  	return (
		<div>{val}</div>
	)
}
export default ChildComp;
