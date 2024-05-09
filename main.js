const str = `
    010-1234-5678
    the123123@gmail.com
    The quick brown fox jumps over the lazy dog.
    aaabbbcccddd
`;
//gi: 대소문자 구분X
const regexp = /fox/gi;
console.log(regexp.test(str)); //boolean형 반환
console.log(str.replace(regexp, "AAA")); //교체
console.log(str);
