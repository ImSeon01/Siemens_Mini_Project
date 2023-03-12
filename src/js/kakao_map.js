$(function(){
    move_map(document.querySelector('button'), 37.45684426, 126.71075001);
})
/**이벤트 발생한 요소, 위도, 경도를 인자값으로 받아서 지도에 표시해주는 함수*/
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

    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    let iwContent = '<div style="padding:5px;font-size:0.9rem;"><a href="http://www.easyspub.co.kr" style="color:blue;text-decoration:none;" target="_blank">이지스퍼블리싱</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성합니다
    let infowindow = new kakao.maps.InfoWindow({
    content : iwContent,
    removable : iwRemoveable
    });

    // 마커에 마우스오버 이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커 위에 인포윈도우를 표시합니다 
        infowindow.open(map, marker);
    });// fin move_map
}