var data = {
    title: 'VueJs',
    url: 'https://www.google.com',
    flipIn:true,
    flipOut:false,
    items:[
        {
            name:'Foo',
            isActive:true
        },
        {
            name:'Bar',
        },
        {
            name:'John'
        }
    ]
};

new Vue({
    el: '#app',
    data: data,
    methods: {
        showAlert() {
            alert('Hello VueJS');
        },
        showAlertWithParam(msg) {
            alert(msg + ' ' + 'VueJS');
        },
        toggleImage(){
            this.flipIn = !this.flipIn;
            this.flipOut = !this.flipOut;
        }
    }
});