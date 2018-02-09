/**
 * Created by KidSirZ4i on 2017/9/23.
 */


// 注册 modal 组件
Vue.component('modal', {
    props: ['modalMsg','modalTitle'],
    methods : {
        modalButtonClick : function () {
            this.$emit("modal-click","OK");
        }
    },
    template: '<div class="flex cross-center modal">'+
                    '<div class="modal-box">'+
                        '<div class="flex main-center modal-title">{{ modalTitle }}</div>'+
                        '<div class="modal-body">'+
                            '<div> {{ modalMsg }} </div>'+
                        '</div>'+
                        '<div class="modal-footer">'+
                            '<button id="app1-modal-btn" type="button" ' +
                                'class="modal-button active" @click="modalButtonClick">确认</button>'+
                        '</div>'+
                    '</div>'+
               '</div>'
});