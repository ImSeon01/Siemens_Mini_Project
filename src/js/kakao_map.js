$(function(){
    move_map(document.querySelector('button'), 37.45684426, 126.71075001);
})
/**이벤트 발생한 요소, 위도, 경도를 인자값으로 받아서 지도에 표시해주는 함수
 * @ref https://developers.kakao.com/docs/latest/ko/local/common
 */
function move_map(event, lat, lng){
    $('.buttons button').attr('class', 'btn btn-outline-primary big-lg');
    $(event).attr('class', 'btn btn-primary big-lg disabled');
    document.getElementById('location').innerHTML = event.innerHTML;
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };
    
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);
        // 마커가 표시될 위치입니다 
        let markerPosition  = new kakao.maps.LatLng(lat, lng); 

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
}// move_map fin