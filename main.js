//API: Application Programming Interface | 프론트엔드의 마지막
//프론트와 백의

//프론트엔드: 사용자 보는 인터페이스 (사용자와 소통) - HTML, CSS, JS
//백엔드: 서버와 데이터베이스 관리 (정보를 가짐) - PHP, Node.js, JS, C++, JAVA, Python

//newscatcher api 사용
//API Key: eetcZ61Kb6ULUpNpu17Dt-eydQvwIzgwDBDWHEz7I9E

//Postman: API 호출

let news = [];

const getLatestNews = async () => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`
  );
  let header = new Headers({
    "x-api-key": "eetcZ61Kb6ULUpNpu17Dt-eydQvwIzgwDBDWHEz7I9E",
  });

  let response = await fetch(url, { headers: header }); //ajax, http, fetch
  let data = await response.json(); //json은 서버통신에서 많이 쓰이는 데이터 타입 (객체랑 똑같음)
  news = data.articles;
  console.log(news);
}; //함수임 | JS는 웹에 관한 함수들을 제공, URL
//async와 await는 세트!
//await fetch를 안 하면, response.json을 받을 수 없음.

getLatestNews();
