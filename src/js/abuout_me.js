/**인사말 프로필 기술스택 프로젝트를 담을 변수*/
const greeting = `
        <br>
        <br>
        <br>
        <h3>"귀사와 함께 우리 사회를 보다 밝게하고 싶습니다."</h3>
        <p>
            우리 사회가 더 빛을 발할 때는 서로 간의 연결이 원활하게 이루어질 때라고 봅니다. <br>
            사람과 사람과의 연결을 넘어 사람과 사물, 사물과 사물 등 다양한 객체들의 연결이 중요한 시대<br>
            귀사에 입사하여 끊임없는 혁신을 통해 미래를 만들어 가고 싶습니다. <br>
        </p>
        `;
const profile = `                
        <h3>기본정보</h3>
        <table>
            <tr>
                <td>이름 : </td>
                <td>임선혁</td>
            </tr>
            <tr>
                <td>출생 : </td>
                <td>1994년 7월 18일</td>
            </tr>
            <tr>
                <td>사는곳 : </td>
                <td>인천광역시</td>
            </tr>
            <tr>
                <td>전공 : </td>
                <td>행정학과</td>
            </tr>
            <tr>
                <td>MBTI : </td>
                <td>INTJ</td>
            </tr>
        </table>
        <hr>
        <h3>주요연혁</h3>
        <table>
            <tr>
            <td>석천초등학교</td>
            </tr>  
            <tr>
            <td>구월중학교</td>
            </tr>  
            <tr>
            <td>인천남고등학교</td>
            </tr>  
            <tr>
            <td>건국대학교 행정학과</td>
            </tr>  
            <tr>
            <td>육군 12사단 만기전역</td>
            </tr>  
            <tr>
            <td>KH정보교육원 풀스택 개발자 과정 수료</td>
            </tr>  
        </table>`;
const stack = `      
        <h3>Languages</h3>
        <br>
        <P>
            <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
            <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jQuery&logoColor=white">
        </P>
        <h3>DBMS</h3>
        <p>
            <img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=Oracle&logoColor=white">
            <img src="https://img.shields.io/badge/SqlDeveloper-gray?style=for-the-badge&logo=SqlDeveloper&logoColor=white">
        </p>
        <h3>FrameWorks</h3>
        <p>
            <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
            <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white">
        </p>`;
const project = `
        <h3>Connection Pool</h3>
        <table>
            <tr>
                <td>
                    개발 :&nbsp;
                </td>
                <td>
                    수영인을 위한 커뮤니티 사이트 개발
                </td>
            </tr>
            <tr>
                <td>
                    기간 :&nbsp;
                </td>
                <td>
                        2022.12.30 ~ 2023.01.25
                </td>
            </tr>
            <tr>
                <td>
                    인원 :&nbsp;
                </td>
                <td> 
                        5명
                </td>
            </tr>
            <tr>
                <td>
                    링크 :&nbsp;
                </td>
                <td onclick="window.open('https://github.com/n0n22/CNTP','_blank')">
                    https://github.com/n0n22/CNTP
                </td>
            </tr>
            <tr>
                <td>
                    기능 :&nbsp;
                </td>
                <td>
                    AJAX를 이용한 인기도 기능
                </td>
            </tr>
        </table>
        <img src="https://user-images.githubusercontent.com/121650379/214218091-2441028b-8a5c-4c52-8012-5c921ea6404d.gif" width="270px" height="200px" style="margin-left: 70px;">`;
$(function(){
    show($('.button_area button').eq(0), 1);
})
/** 버튼을 클릭하면 인사말, 프로필, 기술스택, 프로젝트를 화면에 출력하는 함수
 * @author 임선혁
 */
function show(event, num){
    $('.button_area button').attr('class', 'btn btn-outline-primary');
    let content = '';
    switch(num){
        case 1 : content = greeting; break;
        case 2 : content = profile; break;
        case 3 : content = stack; break;
        case 4 : content = project; break;
    }
    $(event).attr('class', 'btn btn-primary disabled');
    $('.content_area').html(content);            
}// show fin