const LoginDupAlert = () => {
    return(
<>
<div className="modal" id="logindup">
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content d-flex justify-content-between align-items-center dup">

      <div className="dup-inner">
        <h4 className="dup-text fs-18 fw-700">중복 로그인 확인</h4>
          <div className="dup-body">
          이미 다른 기기 및 브라우저에서 접속 중입니다.<br/>
          기존 접속을 로그아웃 하고, 현재 기기 및 브라우저에서<br/>
          로그인을 진행하시겠습니까?<br/>
          </div>

          <div className="dupBtnGroup">
          <button type="button" className="btn btn-light w-50" data-bs-dismiss="modal">취소</button>
          <button className=" btn btn-success w-50 ml-20">로그인</button>
          </div>
        </div>
      </div>
 


        </div>
    </div>
</>
    );
}
export default LoginDupAlert;