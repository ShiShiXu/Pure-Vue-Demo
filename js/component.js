/**
 * Created by KidSirZ4i on 2017/9/23.
 */

// 注册 tips 组件
Vue.component('tips', {
    data: function () {
        return {
            tipsMsg : 'oops .. 出错啦~'
        }
    },
    methods : {
        tipsOpen : function ( msg, duration ) {
            this.tipsMsg = msg;
            this.tipsShow = true;
            var _this = this;
            setTimeout( function () {
                _this.tipsShow = false;
            },duration);
        }
    },
    template: '<div class="tips"> {{ tipsMsg }} </div>'
});


// 注册 modal 组件
Vue.component('modal', {
    props: ['modalMsg'],
    methods : {
        modalButtonClick : function () {
            this.$emit("modal-click","OK");
        }
    },
    template: '<div class="flex cross-center modal">'+
    '<div class="modal-box">'+
    '<div class="flex main-center modal-title">提示框</div>'+
    '<div class="modal-body">'+
    '<div> {{ modalMsg }} </div>'+
    '</div>'+
    '<div class="modal-footer">'+
    '<button id="app1-modal-btn" type="button" class="modal-button active" @click="modalButtonClick">确认</button>'+
    '</div>'+
    '</div>'+
    '</div>'
});