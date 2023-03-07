// 디데이 구하는 함수
function calc_d_day(){
    // 1. 현재 날짜 구하기
    const now = new Date();
    // 2. 계산을 원하는 날짜
    const target = new Date("2023-05-23T17:50:00");
    // 3. 디데이 계산
    const diff = target - now;
    // console.log(dDay); 밀리세컨드 단위로 출력
    // 4. 날짜, 시간, 분, 초 가져오기
    let diff_day = Math.floor(diff / (1000*60*60*24));
    let diff_hour = Math.floor((diff / (1000*60*60)) % 24);
    let diff_min = Math.floor((diff / (1000*60)) % 60);
    let diff_sec = Math.floor(diff / 1000 % 60);
    // 5. 시간, 분, 초 형식 정리
    diff_day = diff_day < 10 ? '0' + diff_day : diff_day ;
    diff_hour = diff_hour < 10 ? '0' + diff_hour : diff_hour; 
    diff_min = diff_min < 10 ? '0' + diff_min : diff_min; 
    diff_sec = diff_sec < 10 ? '0' + diff_sec : diff_sec;
    return diff_day + '일 ' + diff_hour + ':' + diff_min + ':' + diff_sec; 
}
// 디데이 출력하는 함수
function show_d_day(){
    document.getElementById('d_day').innerHTML = "종강 " + calc_d_day();
}
// 1초 단위로 디데이 출력하는 함수 호출
setInterval(()=>show_d_day(), 1000);