import React from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
//react-icons.netlify.com 에서 원하는 아이콘을 사용할수있는 라이브러리
const TodoInsert = () => {
  return (
    <div className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </div>
  );
};

export default TodoInsert;
