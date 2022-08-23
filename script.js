const app = new Vue({
    el: '#app',
    data: {
      myEmail: '',
      newEmails: []
    },

    mounted() {
        let that = this;
 
        for(let i = 0; i < 11 ; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( function(content) {
                    let email = content.data.response
                    that.myEmail = email
                    that.newEmails.push(email)
                

                // let myList = document.getElementById('myList')
                // let myNewLiElement = document.createElement('li')
                // myList.append(myNewLiElement);
                // myNewLiElement.innerHTML = `${that.newEmails[i]}`
                })    
                
        }
        
    }
  })


//   https://flynn.boolean.careers/exercises/api/random/mail