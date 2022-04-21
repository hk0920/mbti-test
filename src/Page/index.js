import React from "react";
import mainImg from "../Assets/images/main.png";
import "../Assets/css/default.css";
import "../Assets/css/main.css";
import "../Assets/css/qna.css";
import "../Assets/css/result.css";
import "../Assets/css/animation.css";
import * as event from "../Assets/js/start.js";

const Main=()=>{
	return(
		<div className="container">
			<section id="main" className="mx-auto mt-5 py-5 px-3">
				<h1 className="pt-5">십이간지로 알아보는 연애유형</h1>
				<div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
					<img src={mainImg} alt="메인 이미지" className="img-fluid" />
				</div>
				<p className="txt">
					나만의 MBTI 사이트입니다!<br/>
					아래 시작하기 버튼을 눌러 시작해주세요.
				</p>
				<button type="button" className="btn btn-outline-danger mt-3" onClick={event.begin}>시작하기</button>
			</section>

			<section id="qna">
				<div className="status mx-auto my-5">
					<div className="statusBar"></div>
				</div>
				<div className="qBox mx-auto my-5 py-3"></div>
				<div className="answerBox"></div>
			</section>	

			<section id="result" className="mx-auto mt-5 py-5 px-3">
				<h1 className="pt-5">당신의 연애유형 결과는?</h1>
				<p className="resultName"></p>
				<div id="resultImg" className="col-lg-6 col-md-8 col-sm-10 mx-auto"></div>
				<p className="resultDesc"></p>
				<button type="button" className="btn btn-kakao mt-3" >공유하기</button>
			</section>
		</div>
	)
}

export default Main;