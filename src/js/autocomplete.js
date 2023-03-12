$(function(){
    // 자동 완성 이벤트가 실행되는 요소
    let $search_box = $("#search-box");
    
    // 자동 완성 검색어를 담을 배열
    let companies = ['지멘스', '스페이스솔루션', '씨테크시스템', '와이씨디아이에스', '이삭엔지리어링', '캐디언스시스템', '키미이에스'];

    /**검색어 입력시 자동완성 실행할 함수*/
    $search_box.autocomplete({
        source: companies
    });
    // autocomplete fin
    
    /**검색 버튼 클릭시 실행할 함수
     * case 1 : 검색어를 입력하지 않으면 => alert('검색어를 입력해주세요')
     * case 2 : 검색 결과가 있을 경우 => 회사의 정보가 화면에 출력
     * case 3 : 검색 결과가 없을 경우 => alert('검색 결과가 없습니다.')
    */
    function search(){
        // 검색어를 입력하지 않고 검색했을 경우
        if($search_box.val() === ''){
            alert('검색어를 입력해주세요');
            return;
        }
        $.ajax({
            url : "../../src/json/company_info.json",
            success : function(data){
                
                let company = '';
                let info = '';
    
                let result = 0;
                $.each(data.items, function(index, item){
                    // 검색 결과가 있을 경우
                    if(item.item == $search_box.val()){
                        result += 1;
                        company = `
                            <br>
                            <h3>${item.item}</h3>
                            <img src="${item.dataset.img}" style="width: 300px; height: 300px;">
                            `;
                        info = `
                            <table>
                                <tr>
                                    <td style="width: 80px;">
                                        설립일
                                    </td>
                                    <td style="width: 400px; text-align: left;">
                                        ${item.dataset.establishment_date}
                                    </td>
                                    </tr>
                                </tr>
                                <tr>
                                    <td>업종</td>
                                    <td style="text-align: left;">${item.dataset.sectors}</td>
                                </tr>
                                <tr>
                                    <td>
                                        직원수
                                    </td>
                                    <td style="text-align: left;">
                                        ${item.dataset.employees}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        매출액
                                    </td>
                                    <td style="text-align: left;">
                                        ${item.dataset.sales_revenue}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        홈페이지
                                    </td>
                                    <td style="text-align: left;">
                                        <sapn onclick="window.open('${item.dataset.homepage}', '_blank')">${item.dataset.homepage}</sapn>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        사업분야
                                    </td>
                                    <td style="text-align: left;">
                                        ${item.dataset.business_areas}
                                    </td>
                                </tr>
                            </table>`;
                        $('#left').html(company);
                        $('#info_title').html(`${item.item} 정보`);
                        $('#right #table-area').html(info);
                    }
                })
                // 검색결과가 없을 경우
                if(result == 0){
                    alert('검색 결과가 없습니다.');
                } 
            }
        })
    }// search fin
});