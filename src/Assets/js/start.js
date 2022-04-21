import * as data from "./data.js";

const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const calResult=()=>{	
	console.log(select);
	const result = select.indexOf(Math.max(...select));
	return result;
}

const setResult=()=>{
	let point = calResult();
	const resultName = document.querySelector(".resultName");
	resultName.innerHTML = data.infoList[point].name;
	
	const resultImg = document.createElement("img");
	const imgDiv = document.querySelector("#resultImg");
	const imgURL = "images/image-" + point + ".png";
	resultImg.src = imgURL;
	resultImg.alt = point;
	imgDiv.appendChild(resultImg);

	const resultDesc = document.querySelector(".resultDesc");
	resultDesc.innerHTML = data.infoList[point].desc;
}

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

	setResult();
}

const addAnswer=(answerText, qIdx, idx)=>{
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
			const target = data.qnaList[qIdx].a[idx].type;
			console.log("target=>" + target)
			for(let i=0; i<target.length; i++){
				console.log("i번째"+i+", select["+ target +"]=>" + select[target[i]]);
				select[target[i]] += 1;
			}

			for(let i=0; i< children.length; i++){
				children[i].style.display = "none";
			}
			goNext(++qIdx);
		}, 450);
	}, false);
}

const goNext=(qIdx)=>{
	if(qIdx === endPoint){
		goResult();
		return;
	}
	const q = document.querySelector(".qBox");
	q.innerHTML = data.qnaList[qIdx].q;

	for(let i in data.qnaList[qIdx].a){
		addAnswer(data.qnaList[qIdx].a[i].answer, qIdx, i);
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