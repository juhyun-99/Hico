import React from "react";
import styles from './nochild.module.css';
import Button from '@mui/material/Button';
import boy from '../../assets/nochild_boy.png'

const Nochild:React.FC= () => {

  // 초대코드 저장 변수
  const registCode = "52qpt2";

  // 코드 클립보드 저장 함수
  const handleCopyCode = () => {
    navigator.clipboard.writeText(registCode).then(() => {
      alert('코드가 클립보드에 복사되었습니다.'); 
    }, (err) => {
      console.error('클립보드에 복사를 실패했습니다: ', err); 
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.maintitle}>자녀학습 현황</div>
      <div className={styles.materialContainer}>

        {/* 이미지 */}
        <div className={styles.image}>
          <img src={boy} alt="boy" style={{ height: '180px', marginTop: 3 }} />
        </div>

        {/* comment1 */}
        <div className={styles.noregister}>현재 등록된 아이가 없습니다.</div>

        {/* comment2 */}
        <div className={styles.description}>
          <div className={styles.subtext}>자녀의 학습 현황을 알고 싶다면</div>
          <div className={styles.subtext}>아이 등록이 필요해요.</div>
          <div className={styles.subtext}>아이 회원가입에 아래 코드를 입력해 주세요.</div>
        </div>

        {/* 초대코드 */}
        <div className={styles.invitation}>
          <div className={styles.invitationmain}>
            <div className={styles.invitetext}>내 초대코드</div>
            <div className={styles.invitecode}>{registCode}</div>
          </div>

          {/* 코드 복사 버튼 */}
          <div className="buttoncopy">
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: '100%',
                height: '40px',
                fontSize: '14px',
                marginTop: '25px',
                paddingLeft: '75px',
                paddingRight: '75px',
                backgroundColor: '#0064FF',
                borderRadius: '30px',
                fontWeight: 'bold',
              }}
              onClick={handleCopyCode}>
              내 코드 복사하기
            </Button>
          </div>

          {/* 코드 카카오톡 공유 */}
          <div className="share">
          <Button
              variant="contained"
              disableElevation
              sx={{
                width: '100%',
                height: '40px',
                fontSize: '14px',
                marginTop: '14px',
                marginBottom: '5px',
                paddingLeft: '75px',
                paddingRight: '75px',
                backgroundColor: '#FAE100',
                borderRadius: '30px',
                fontWeight: 'bold',
                color: '#3B1D1D',
              }}
              onClick={handleCopyCode}>
              카카오톡 공유하기
            </Button>
          </div>

          {/* <div className={styles.button}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: '100%',
                height: '60px',
                fontSize: '22px',
                backgroundColor: '#0064FF',
              }}
            >
              확인
            </Button>
          </div> */}
          {/* .button {
            display: flex;
            justify-content: center;
            margin-top: 161px;
          } */}

        </div>
      </div>
    </div>
    
  );
};

export default Nochild;