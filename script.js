const app = new Vue({
    el: '#app',
    data: {
      myEmail: '',
      newEmails: []
    },

    mounted() {
        let that = this;

        for(let i = 0; i < 10 ; i++){
                let ciao = axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( function(content) {
                    let email = content.data.response
                    that.myEmail = email
                    that.newEmails.push(email)
                    console.log(that.newEmails)
                })     
        }
        
    }
  })


//   https://flynn.boolean.careers/exercises/api/random/mail