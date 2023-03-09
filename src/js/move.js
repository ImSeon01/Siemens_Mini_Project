// 문서가 로딩되면 main에 home.html을 보여줌
$(function(){
    move('home');
})
// main 페이지 전환
function move(url){
    $('iframe').attr('src', 'iframe/' + url + '.html');
}
