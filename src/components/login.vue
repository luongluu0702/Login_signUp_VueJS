<template>
  <div class="container">
        <div class="container container-form">
          <form action="" id="formLogIn">
            <div class="form-group">
              <label for="email" class="">Email:</label>
              <input type="email" class="form-control mt-1" v-model="user.email" placeholder="Enter email" id="email" name ="email" @blur="validate('email', 'EMAIL')">
              <span class="mes mes-email" v-show="errors.email.error">{{errors.email.msg}}</span>
            </div>
            <div class="form-group mt-3">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control mt-1" v-model="user.pwd" placeholder="Enter password" id="pwd" name ="pwd"  @blur="validate('pwd', 'PASSWORD')" >
              <span class="mes mes-pwd" v-show="errors.pwd.error">{{errors.pwd.msg}}</span>
            </div>
            <button type="submit" class="btn btn-primary btn--loggin mt-4" @click.prevent="validateForm()">Đăng nhập</button>
          </form>
          <a class="btn btn-success  btn-signUp btn-signUp-login" @click="showSignUp">Đăng kí</a>
        </div>
  </div>
</template>
<script>
/* eslint-disable */
import helper from '../helpers/utilities'
export default {
  name: 'login',
  data () {
    return {
      user: {
        email:'',
        pwd: ''
      },
      errors: {
        email:{
          error: false,
          msg: ''
        },
        pwd: {
          error: false,
          msg: ''
        }
      },
      type: {
        email: 'EMAIL',
        pwd: 'PASSWORD'
      }

    }
  },
  
  methods: {
    showSignUp () {
      this.$router.push({ name: 'signup' })
    },
    validate(fieldName,type){
        const validateResult = helper.validateString(this.user[fieldName],type)
        this.errors[fieldName] = {
          ...this.errors[fieldName],
          ...validateResult
        }
    },
    check(fieldNameForm, fieldNameLocal ,keyLocal,msg){
      const validateResult = helper.validateExist(this.user[fieldNameForm],fieldNameLocal,keyLocal,msg)
      this.errors[fieldNameForm] = {
        ...this.errors[fieldNameForm],
        ...validateResult
      }
      console.log(validateResult.error)
      if(validateResult.error){
        return this.user[fieldNameForm]
      }
    },
    validateForm(){
        let isValid = true
        const inputElement = Object.keys(this.user)
        inputElement.forEach((e)=>{
          const validateResult = helper.validateString(this.user[e], this.type[e])
          this.errors[e] = {...this.errors[e],...validateResult}
          if(this.errors[e].error){
              isValid = false;
          }
        })
        if(isValid){
          let listUser = JSON.parse(localStorage.getItem('listUser'))
          console.log(listUser)
          let isCorrect = false
          let email = this.user.email
          let password = this.user.pwd
          listUser.forEach(function(item){
            if(email == item.email && password == item.pwdSignUp){
                isCorrect = true
            }
          })
          if(isCorrect){
             this.$router.push({name: 'user'})
          } else {
            alert('Email hoặc mật khẩu không đúng')
          }
        }

    }

  },
  watch:{
    'user.pwd': function(){
      this.validate('pwd', 'PASSWORD')
    },
    'user.email': function(){
      this.validate('email', 'EMAIL')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
