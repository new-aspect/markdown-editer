import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // 使用content和setContent
  // 那么这时候监听testarea的文字变化，然后将变化塞到setContent里面
  const [content, setContent] = useState("")


  return (
    <div className='container'>
      {/* 左边是 textares */}
      <div className='editor'>
        <textarea 
          placeholder='在这里输入 Markdown 内容' 
          onChange={e=>{setContent(e.target.value)}}
        ></textarea>
      </div>

      {/* 右边是渲染部分 */}
      <div className='preview'>
        {/* 暂时是空的 */}
        <div>{content}</div>
      </div>
    </div>
  )
}

export default App;
