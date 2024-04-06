/*지금 이파일 js를 가져온 경우에 */
window.onload = function() {

    /* 화면에 랜더링 된 태그들이 존재하지 않는 경우 에러 발생 가능성이 있어서 if문으로
    태그가 존재하는지 부터 확인하고 이벤트를 연결한다. */

    /* 로그인이라는 버튼을 클릭할경우 /member/login으로 요청한다 */
    if(document.getElementById("login")) {
        const $login = document.getElementById("login");
        $login.onclick = function() {
            location.href = "/member/login";
        }
    }

    if(document.getElementById("logout")) {
        const $logout = document.getElementById("logout");
        $logout.onclick = function() {
            location.href = "/member/logout";
        }
    }
    
    if(document.getElementById("regist")) {
        const $regist = document.getElementById("regist");
        $regist.onclick = function() {
            location.href = "/member/regist";
        }
    }
    //중복확인 버튼이 있으면 실행
    if(document.getElementById("duplicationCheck")) {

        const $duplication = document.getElementById("duplicationCheck");
        //중복확인을 클릭하고
        $duplication.onclick = function() {
            //공백없이 memberId를 담는다
            let memberId = document.getElementById("memberId").value.trim();
            //요청주소 설정
            fetch("/member/idDupCheck", {
                //POST형식으로
                method: "POST",
                //지금의 데이터를 json형태로 바꾼후
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                //memberId라는 값을 보낸다
                body: JSON.stringify({memberId: memberId})
            })  //수행하고나서 결과처리 Response라는 응답객체가 돌아왔을때 text를 가져오록하고
                .then(result => result.text())
                //그 텍스트를 alert창으로 띄우도록한다
                .then(result => alert(result))
                //에러가 발생했을때 그에러도 alert창으로 띄우도록한다
                .catch((error) => error.text().then((res) => alert(res)));

        }
    }

    if(document.getElementById("updateMember")) {
        const $update = document.getElementById("updateMember");
        $update.onclick = function() {
            location.href = "/member/update";
        }
    }
    
    if(document.getElementById("deleteMember")) {
        const $update = document.getElementById("deleteMember");
        $update.onclick = function() {
            location.href = "/member/delete";
        }
    }

	/* ------------------------------------------------------------- */

    if(document.getElementById("writeBoard")) {
        const $writeBoard = document.getElementById("writeBoard");
        $writeBoard.onclick = function() {
            location.href = "/board/regist";
        }
    }

    if(document.getElementById("writeThumbnail")) {
        const $writeThumbnail = document.getElementById("writeThumbnail");
        $writeThumbnail.onclick = function() {
            location.href = "/thumbnail/regist";
        }
    }
}