import React,{ useEffect,useState } from 'react';
const useDate = (initialDate)=> {//初始化时间
	//创建一个字符串state,存储当前系统时间
	const [date, setDate] = useState();
	useEffect(() => {//使用useEffect，当date数据改变时，触发useEffect
        const times = setInterval(() => setDate(Date.now().toLocaleString()), 1000);
        return ()=> {
            //这里的return返回的应该函数和componentWillUnmount差不多一致，在组件销毁前执行,防止定时器没有销毁
            clearInterval(times);//退出的时候清除定时器
        }
    }, [date]);//第二个参数中的数组，就是依赖项，会相当于有状态组件的componentWillReceiveProps,每次执行useEffect前会对date进行一次浅比较
    return { date };//由于外部只需要使用date，可以只暴露出这个数据
}

export default  () => {
	const { date } = useDate(Date.now().toLocaleString());//使用自定义钩子，获取返回的对象
	return(
		<>
			<h2>当前时间</h2>
			<p>{date}</p>
		</>
	);
}