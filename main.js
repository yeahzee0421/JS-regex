const str = `
    010-1234-5678
    the123123@gmail.com
    The quick brown fox jumps over the lazy dog.
    aaabbbcccddd
`;
//gi: 대소문자 구분X
console.log(str.match(/the/gi));
//escape: escape 문자: 백슬래시 기호를 통해 본래의 기능에서 벗어나 상태가 바뀌는 문자
console.log(str.match(/\.$/gim));

//플래그
// g: 전체의 영역에서 검색
// m: 문자 데이터 내부 각각의 줄을 하나의 시작과 끝으로 간주
