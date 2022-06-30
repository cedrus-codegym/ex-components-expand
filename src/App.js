import "./App.css";
import { useState } from "react";
function App() {
  const [isExpand, setExpand] = useState(false);

  const expandHandle = () => {
    setExpand(!isExpand);
  };
  return (
    <>
      <div className="header">
        <h1>Conditional Rendering</h1>
      </div>

      <div className="content">
        <button onClick={expandHandle}>
          {isExpand ? "Đóng giới thiệu" : "Xem giới thiệu"}
        </button>

        {isExpand ? <ContentExpand /> : ``}
      </div>
    </>
  );
}

const ContentExpand = () => {
  return (
    <>
      <h3>Giới thiệu</h3>
      <p>
        Trong ReactJs, đôi khi bạn có một số components và tùy thuộc vào từng
        điều kiện ví dụ như trạng thái của state, props,... mà bạn muốn hiển thị
        hoặc một số component nào đó. Khi đó bạn có thể sử dụng Conditional
        rendering để render ra component mà bạn mong muốn
      </p>
    </>
  );
};

export default App;
