$(function(){
    move('home');
})
/**main 페이지 전환
 * @author 임선혁
 */
function move(url){
    $('iframe').attr('src', 'iframe/' + url + '.html');
}