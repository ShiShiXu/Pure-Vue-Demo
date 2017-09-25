/**
 * Created by KidSirZ4i on 2017/9/23.
 */


window.EventHub = new Vue();


// 注册组件
 var tips = Vue.component('tips', {
    data: function () {
        return {
            tipsShow : false,
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
    template: '<div class="tips" v-if="tipsShow"> {{ tipsMsg }} </div>'
});


var modal = Vue.component('modal', {
    data: function () {
        return {
            modalShow : false,
            modalButtonShow : false,
            captcha : undefined
        }
    },
    watch : {
        modalShow : function ( newVal, oldVal ) {
            if ( newVal === true ) {
                this.$nextTick( function () {
                    var captcha = document.getElementById("captcha");
                    captcha.focus();
                });
            }
            else {}
        },
        captcha : function ( newVal, oldVal ) {
            if ( newVal.length >= 6 ) {
                this.modalButtonShow = true ;
            }
            else {
                this.modalButtonShow = false ;
            }
        }
    },
    methods : {
        modalOpen : function () {
            this.modalShow = true;
        },
        modalClose : function () {
            this.modalShow = false;
        },
        handleButtonClick : function () {
            this.modalShow = true ;
        },
        handleCloseClick : function () {
            this.modalShow = false ;
        },
        captchaSend : function () {
            this.tipsShow = true;
            setTimeout(function () {
                app1.tipsShow = false;
            },800000)
        }
    },
   template: '<div class="flex cross-center modal" v-if="modalShow">'+
    '<div class="modal-box">'+
    '<div class="flex main-center modal-title">安全验证'+
    '<div id="app1-modal-close" class="flex horizontal-end vertical-center close" @click="handleCloseClick">'+
    '<img src="./images/icon_close.png" width="22" height="22">'+
    '</div>'+
    '</div>'+
    '<div class="modal-body">'+
    '<label class="item-name" for="captcha">手机验证码</label>'+
    '<div class="flex item-input">'+
    '<input id="captcha" ref="captchaHook" class="flex1" type="tel" maxlength="6" v-model="captcha">'+
    '<div class="captcha" @click="captchaSend">点击获取</div>'+
    '</div>'+
    '</div>'+
    '<div class="modal-footer">'+
    '<button id="app1-modal-btn" type="button" class="modal-button" :class="{ active : modalButtonShow }"'+
    ' :disabled="!modalButtonShow" @click="">确认</button>'+
    '</div>'+
    '</div>'+
    '</div>',
    mounted : function () {
        var _this = this;
        console.log("全局组件 modal 已经插入文档");
        EventHub.$on("modal",function () {
            _this.modalOpen();
        });
    }
});


