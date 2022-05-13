import { infoList } from "./data";

export const kakaoShare=()=>{
  const url = "https://mbti-twelvelovetype.netlify.app/";
  const resultImg = document.querySelector("#resultImg");
  const resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = "십이간지 연애유형 결과";
  const shareDes = infoList[resultAlt].name;
  const shareImg = url + "/images/image-" + resultAlt + ".png";
  const shareURL = url + "/result/" + resultAlt ;

  window.Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImg,
      link: {
        mobileWebUrl: shareURL,
        webUrl : shareURL
      },
    },
    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl : shareURL
        },
      },
    ]
  });
}
