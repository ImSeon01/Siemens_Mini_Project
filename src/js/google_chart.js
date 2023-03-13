/** 가공할 데이터의 행의 개수 */
let num = $('#right tbody').children().length + 1;
/** 사용자가 데이터를 입력할 행을 추가하는 함수
  * @author 임선혁 
  */
function add(){
  num = $('#right tbody').children().length + 1;
  if(num > 5){
    alert('최대 5개입니다.');
    return;
  }
  let row = `  
            <tr class="row${num}">
              <td><input name="subject" type="text"></td>
              <td><input name="start_date" type="date"></td>
              <td><input name="end_date" type="date"></td>
            </tr>`;
  $('#right tbody').append(row);
}// add fin
/** 사용자가 데이터를 입력할 행을 제거하는 함수
  * @author 임선혁 
  */
function remove(){
  num = $('#right tbody').children().length + 1;
  if(num == 2){
    alert('최소 1개입니다.');
    return;
  }
  $('#right tbody tr').remove(`.row${num - 1}`);
}
// remove fin
/** 차트 보기 버튼 시 데이터를 가공하여 차트를 출력해주는 함수를 호출해주는 함수
 *  @author 임선혁
*/
function show_chart(){
  let rows = [];
  console.log();
  num = $('#right tbody').children().length + 1;
  for(let i = 0; i < num - 1; i++){
    let row = {
    subject : $('#right tbody tr').eq(i).children().eq(0).children().val(),
    start_date : $('#right tbody tr').eq(i).children().eq(1).children().val(),
    end_date : $('#right tbody tr').eq(i).children().eq(2).children().val()
    };
    rows.push(row);
    google_chart(rows);
  }
}// show_chart fin
/** 차트의 데이터를 인자값으로 받아 차트를 출력해주는 함수 
 * @ref https://developers.google.com/chart/interactive/docs/gallery/timeline?hl=ko
 */
function google_chart(rows){
  google.charts.load('current', {'packages':['timeline']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    let container = document.getElementById('timeline');
    let chart = new google.visualization.Timeline(container);
    let dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'President' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    for(const i of rows){
      dataTable.addRows([
      [ i.subject, new Date(i.start_date), new Date(i.end_date) ]]);
    }
    chart.draw(dataTable);
  }
}// google_chart fin