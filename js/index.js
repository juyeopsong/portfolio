$(document).ready(function () {
    $("#fullpage").fullpage({
        // sectionsColor: ['#101820', '#1a7a4c', '', '', '', '', '#101820',],
        anchors: ["main", "aboutme", "work1", "work2","contact"
        ], //요게 있어야 부드럽게 움직임
        menu: "#topMenu",
        //navigation: true,
        scrollBar: true,
        //스크롤바를 발생시키면 메뉴의 포지션값을 fixed로 변경, scrolltop, AOS 사용시에도 옵션 활성화.
        //verticalCentered: false,  //이게 있으면 푸터의 높이를 작게 유지 못함.
        //수직중앙정렬비활성화
    });

    AOS.init({
        duration: 2000
    });

    //포트폴리오 이미지 스크롤
    $(".case a").on("mouseenter", function () {
        let imgH = $(this).find("img").height();
        let caseH = $(this).height();
        $(this).find("img").css({
            top: -(imgH - caseH)
        });
    });
    $(".case a").on("mouseleave", function () {
        $(this).find("img").css({
            top: 0
        });
    });

});