import React from "react";
import { useParams } from "react-router-dom";
import "../Assets/css/default.css";
import "../Assets/css/result.css";
import { infoList } from "../Assets/js/data";

const Result=()=>{
	const params = useParams().key;
	const img = "../images/image-" + params + ".png";

	const goHome=()=>{
		window.location.href = "/";
	}
	
	return(
		<div className="container">
			<section id="result" className="mx-auto mt-5 py-5 px-3 share-type">
				<h1 className="pt-5">당신의 연애유형 결과는?</h1>
				<p className="resultName">{infoList[params].name}</p>
				<div id="resultImg" className="col-lg-6 col-md-8 col-sm-10 mx-auto">
					<img src={img} alt={params} />
				</div>
				<p className="resultDesc">{infoList[params].desc}</p>
				<button type="button" className="btn btn-home mt-3" onClick={goHome}>나도 참여하기</button>
			</section>
		</div>
	)
}

export default Result;