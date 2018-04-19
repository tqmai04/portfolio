import $ from 'jquery';

class Intro {
    constructor() {
        this.introText = $(".banner__text");
        this.events();
    }

    events() {
        var spans = '<span class="banner__blueText">Hi, I&#39;m </span><span class="banner__orgText">M</span><span class="banner__blueText">ai,<br>Web </span><span class="banner__orgText">D</span><span class="banner__blueText">esigner </span><span class="banner__blueText">and </span><span class="banner__orgText">D</span><span class="banner__blueText">eveloper.</span>';
        $(spans).hide().appendTo(this.introText).each(function (i) {
        $(this).delay(120 * i).css({
        display: 'inline',
        opacity: 0
        }).animate({
        opacity: 1
        }, 120);
});
    }

}

export default Intro;