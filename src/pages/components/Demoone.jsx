//子组件取值
import { useContext, useReducer } from "react";
import { Demowrap } from "../Page/Page";
function reducer(state, action) {
  console.log(state, action, "=====================");

  switch (action.type) {
    case "increment":
      return { data: state.data + 1 };
    case "decrement":
      return { data: state.data - 1 };
    default:
      throw new Error();
  }
}
const Demoone = ({ cRef }) => {
  const usename = useContext(Demowrap).usename;
  const data = { data: useContext(Demowrap).number };
  const [state, dispatch] = useReducer(reducer, data);
  return (
    <div>
      这是demo1
      <hr />
      <span
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        {state.data}sss
      </span>
    </div>
  );
};
export default Demoone;
