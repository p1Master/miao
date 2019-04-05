import Vue from 'vue';
import MessageBox from './message';

export var messageBox = (function () {
    var defaults = {
        title:'',
        content:'',
        cancel:'',
        enter:'',
        handleCancel:null,
        handleEnter:null
    };

    var MyComponent = Vue.extend(MessageBox);

    return function (options) {
        for (var attr in defaults){
            defaults[attr] = options[attr];
        }
        var vm = new MyComponent({
            el:document.createElement('div'),
            data:{
                title:defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                enter: defaults.enter
            },
            methods:{
                handleCancel(){
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleEnter(){
                    defaults.handleEnter && defaults.handleEnter.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });
        document.body.appendChild(vm.$el);
    };
})();