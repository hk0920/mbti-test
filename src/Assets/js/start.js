import * as data from "./data.js";

const endPoint = 12;

const goResult=()=>{
	const qna = document.querySelector("#qna");
	const result = document.querySelector("#result");
	qna.style.WebkitAnimation = "fadeOut 1s";
	qna.style.animation = "fadeOut 1s";
	
	setTimeout(() => {
		result.style.WebkitAnimation = "fadeIn 1s";
		result.style.animation = "fadeIn 1s";
		
		setTimeout(() => {
			qna.style.display = "none";
			result.style.display = "block";
		}, 450);
		
		let qIdx = 0;
		goNext(qIdx);
	}, 450);
}

const addAnswer=(answerText, qIdx)=>{
	const a = document.querySelector(".answerBox");
	const answer = document.createElement("button");

	answer.classList.add("answerList");
	answer.classList.add("mx-auto");
	answer.classList.add("my-3");
	answer.classList.add("py-3");
	answer.classList.add("fadeIn");

	a.appendChild(answer);
	answer.innerHTML = answerText;

	answer.addEventListener("click", function(){
		const children = document.querySelectorAll(".answerList");

		for(let i=0; i<children.length; i++){
			children[i].disabled = true;
			children[i].style.WebkitAnimation = "fadeOut 0.5s";
			children[i].style.animation = "fadeOut 0.5s";
		}
		setTimeout(() => {
			for(let i=0; i< children.length; i++){
				children[i].style.display = "none";
			}
		}, 450);
		goNext(qIdx+1);
	}, false);
}

const goNext=(qIdx)=>{
	if(qIdx === endPoint){
		goResult();
	}
	const q = document.querySelector(".qBox");
	q.innerHTML = data.qnaList[qIdx].q;

	for(let i in data.qnaList[qIdx].a){
		addAnswer(data.qnaList[qIdx].a[i].answer, qIdx);
	}
	const status = document.querySelector(".statusBar");
	status.style.width = (100/endPoint) * (qIdx+1) + "%";
}

export const begin=()=>{
	const main = document.querySelector("#main");
	const qna = document.querySelector("#qna");

	main.style.WebkitAnimation = "fadeOut 1s";
	main.style.animation = "fadeOut 1s";
	
	setTimeout(() => {
		qna.style.WebkitAnimation = "fadeIn 1s";
		qna.style.animation = "fadeIn 1s";
		
		setTimeout(() => {
			main.style.display = "none";
			qna.style.display = "block";
		}, 450);
		
		let qIdx = 0;
		goNext(qIdx);
	}, 450);
}