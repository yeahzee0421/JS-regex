let str = `
    010-1234-5678
    the123123@gmail.com
    https://www.omdbapi.com/?apikey=7035c60c&s=frozen
    The quick brown fox jumps over the lazy dog.
    aaabbbcccddd
    하나둘셋_넷다섯 여섯일곱
`;

//패턴
console.log(str.match(/h..p/g));
console.log(str.match(/fox|dog/)); //먼저 찾아진 것 반환

//
console.log(str.match(/d{2}/)); //dd
console.log(str.match(/d{2,}/g)); //ddd

// \w: 숫자를 포함한 영어 알파벳 의미
//2번 이상 3번 이하 반복되는 단어를 모두 다 찾는 구조
console.log(str.match(/\w{2,3}/g));

// \b: 알파벳과 숫자가 아닌 부분의 경계 생성
console.log(str.match(/\b\w{2,3}\b/g));

//하이픈: 범위
//연속되는 모든 숫자 구분
console.log(str.match(/[0-9]{1,}/g));
console.log(str.match(/[가-힣]{1,}/g));

console.log(str.match(/\w/g));

//f로 시작하는 모든 영단어 찾음
console.log(str.match(/\bf\w{1,}\b/g)); //frozen, fox

console.log(str.match(/\s/g)); //줄바꿈 & 띄어쓰기

const h = `      hihi    hungry  `;
console.log(h.replace(/\s/g, "")); //모든 공백 제거

console.log(str.match(/(?<=@).{1,}/g));
