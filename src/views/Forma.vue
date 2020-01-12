<template>
  <div>
<div class="form">
 
 <form @submit.prevent="sub_form" class="forma">

  <p>
   <input class="name1" id="name" v-model="name" type="text" name="name"  placeholder="Name" size="60"></input>
   </p>
   <p>
   <input class="name1" id="email" v-model="email" type="email" name="email" placeholder="Email" size="60"></input>
  </p>
  <p>
   <textarea class="name2" id="message" v-model="message" type="message" name="message" placeholder="Comment" rows="5" cols="60"></textarea>
  </p>
   <button class="butt3" type="submit">Send</button>

   {{response}}
 </form>

 </div>

 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'modal',
  data() {
    return{
    name: null,
    email: null,
    message: null,
    response: null,
    error: 'Error'
    }
  },
   mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
     if (localStorage.email) {
      this.email = localStorage.email;
    }
     //if (localStorage.message) {
      //this.message = localStorage.message;
    //}
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    email(newEmail) {
      localStorage.email = newEmail;
    }
  },
    //message(newMessage) {
      //localStorage.message = newMessage;
    //}
    methods: {
      sub_form() {
        axios.post('https://formcarry.com/s/qIPKY2OVjpZ', {
          name: this.name,
          email: this.email,
          message: this.message
        }).then(response => {
          alert('OK'),
          this.name=null,
          this.email=null,
          this.message=null
        }).catch(error => console.log(error));
      }
    }
  }
</script>

<style scoped>
  .form{
    top:0;
    right: 1px;
    width: 100%;
    height: 100%;
    visibility: visible;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .open{
    left:0;
  }
  .form .forma{
    margin: auto;
    background: #00000;
    margin-left: 277px;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 300px;
    height: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    flex-direction: column;
  }
  .form .forma .contact_button{
    width: 150px;
    margin: 0 auto;
  }
  form textarea{
    margin-bottom: 15px;
    background: #e6e9ee;
    color: #62708c;
    border: none;
    font-size: 15px;
  }
  input{
    padding: 10px;
  }
  textarea{
    margin-top: 15px;
    padding: 10px;
    height: 120px;
  }
  .form .forma. close{
    position: absolute;
    right: 8px;
    top: 0;
    font-size: 38px;
  }
  .form .forma .close:hover{
    cursor: pointer;
  }
  .name1, .name2 {
    border-radius: 30px;
    font-size: 13px;
    background-color: #fff;
    padding: 0 20px;
    width: 190px;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    color: #000;
}
.name1 {
    height: 30px;
}
.name1, .name2, .butt3 {
        width: 220px;
    }
    .butt3 {
    text-transform: uppercase;
    width: 190px;
    margin: 10px auto;
    color: #fff;
    background-color: #f21f02;
    text-align: center;
    border-radius: 30px;
    border: none;
    height: 33px;
}
.butt3 span {
    line-height: 1em;
    font-size: 14px;
}
</style>
