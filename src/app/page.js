import Image from "next/image";
import LoginTop from "@/00_common/top/LoginTop";
import LoginDupAlert from "@/00_common/modal/1/LoginDupAlert";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';


export default function Home() {
  return (
    <>
     <LoginTop/>
     <Container>s
      <Row>
        <Col>
         <div className="p-3">
  <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="w-560 mt-160">
      <div className="d-flex justify-content-center">
      <img src='/star/images/riderlog_logo.svg' className="text-center logo"/>
      </div>
  <form className="was-validated">
    <div className="id-top">
      <label htmlFor=""className="idText">아이디</label>
      <input type="text" className="form-control w-100 id input-bg rounded-3" placeholder="아이디를 입력해 주세요" name="" required/>
      <div className="invalid-feedback">아이디를 입력해주세요.<br/>올바른 이메일 형식으로 입력해 주세요</div>
    </div>
    <div className="pw-top">
      <label htmlFor="pwd" className="pwText">비밀번호</label>
      <input type="password" className="form-control w-100 pw input-bg rounded-3" placeholder="비밀번호를 입력해 주세요" name="" required/>
      <div className="invalid-feedback">비밀번호를 입력해 주세요</div>
    </div>
    <div className="mt-60">
    <button className="loginLight"  data-bs-toggle="modal" data-bs-target="#logindup">로그인</button>
    <div className="d-flex justify-content-center">
      <div className="forgotText">
        <h6 className="fs-18 fw-500">아이디 혹은 비밀번호를 잊으셨나요?</h6>
        <div className="mt-2 mb-3 d-flex justify-content-center">
          <div className="w-256 d-flex justify-content-between mt-20">  
            <a className="idFind" href="http://localhost:3000/star/03_find/1">아이디 찾기</a>
            <a className="pwFind" href="http://localhost:3000/star/04_pwfind/1">비밀번호 찾기</a>
          </div>
        </div>
      </div>
    </div>
    </div>
    </form>

    </div>
      </div>
      </div>
        </Col>
      </Row>
     </Container>
     <LoginDupAlert/>

    </>
  );
}
