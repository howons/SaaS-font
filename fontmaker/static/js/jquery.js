$(document).ready(function(){
    $('.card-title-new').click(function(){
        let $href = $(this).attr('href');
        layer_popup($href, 1);
    });
    $('.card-title-open').click(function(){
        let $href2 = $(this).attr('href');
        layer_popup($href2, 2);
    });
});

function layer_popup(el, num) {

    // 새로 만들기 와 프로젝트 불러오기 구분용
    let dimBg, _dimlayer, _popupclose, _layer;
    if (num === 1) {
        dimBg = 'dimBg';
        _dimlayer = '.dim-layer';
        _popupclose = '.popup-close';
        _layer = '.layer .dimBg';
    } else {
        dimBg = 'dimBg2';
        _dimlayer = '.dim-layer2';
        _popupclose = '.popup-close2';
        _layer = '.layer2 .dimBg2';
    }

    let $el = $(el);    //레이어의 id를 $el 변수에 저장
    let isDim = $el.prev().hasClass(dimBg); //dimmed 레이어를 감지하기 위한 boolean 변수

    isDim ? $(_dimlayer).fadeIn() : $el.fadeIn();

    let $elWidth = ~~($el.outerWidth()),
        $elHeight = ~~($el.outerHeight()),
        docWidth = $(document).width(),
        docHeight = $(document).height();

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight/2,
            marginLeft: -$elWidth/2
        })
    } else {
        $el.css({top: 0, left: 0});
    }

    $el.find(_popupclose).click(function(){
        isDim ? $(_dimlayer).fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
        return false;
    });

    $(_layer).click(function(){
        $(_dimlayer).fadeOut();
        return false;
    });
}