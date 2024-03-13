import React, { useState } from 'react';
import styles from './login.module.css';
import { motion } from "framer-motion";

function Login() {
  
  // 로그인 로직
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직을 여기에 추가하세요.
    // 예: 서버에 사용자 이름과 비밀번호를 전송하고 응답을 처리합니다.
    console.log('로그인 시도:', username, password);
  };

  return (
      <div className={ styles.materialContainer }>


        <div className={ styles.box }>

          <div className={ styles.title }>로그인</div>

          <div className={ styles.input }>
              <label htmlFor="username">이메일</label>
              <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
              <span className={ styles.spin } ></span>
          </div>

          <div className={ styles.input }>
              <label htmlFor="password">비밀번호</label>
              <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
              <span className={ styles.spin }></span>
          </div>

          <div className={`${styles.button} ${styles.login}`}>
              <button type="submit"><span>로그인</span> <i class="fa fa-check"></i></button>
          </div>

          <a href="" className={ styles.passforgot }>비밀번호를 잊으셨나요?</a>

        </div>

        <div className={`${styles.materialbutton} ${styles.alt2}`}><span className={ styles.shape }></span></div>


      </div>
  );
}

export default Login;