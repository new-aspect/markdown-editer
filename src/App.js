import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      {/* 左边是 textares */}
      <div className='editor'>
        <textarea placeholder='在这里输入 Markdown 内容'></textarea>
      </div>

      {/* 右边是渲染部分 */}
      <div className='preview'>
        {/* 暂时是空的 */}
        <div>暂时是空的</div>
      </div>
    </div>
  )
}

export default App;
