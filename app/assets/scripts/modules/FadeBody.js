import $ from 'jquery';

class FadeBody {
    constructor() {
        this.bdy = $("body");
        this.fade();
    }


    fade() {
        this.bdy.removeClass('fade-out');
    }
}

export default FadeBody;