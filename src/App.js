import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [user, setUser] = useState({});
  const [inputInfo, setInputInfo] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      name: '',
      phoneNum: '',
    });
    setInputInfo({
      name: user.name,
      phoneNum: user.phoneNum,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>이름</label>
        <input
          type='text'
          value={user.name}
          name='name'
          onChange={handleChange}
        />
        <label>전화번호</label>
        <input
          type='text'
          value={user.phoneNum}
          name='phoneNum'
          onChange={handleChange}
        />
        <button>전송</button>
        <h3>입력값</h3>
        <p>
          이름: {inputInfo.name}
          <br />
          전화번호: {inputInfo.phoneNum}
        </p>
      </form>
    </div>
  );
}
