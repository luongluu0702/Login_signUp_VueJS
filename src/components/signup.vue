/* eslint-disable */
<template>
    <div class="modal modal-signUp">
        <div class="modal-dialog modalSignUp-container">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="signUp--title fs-1 fw-bold">Đăng ký</h3>
              <div class="modal-header-close" @click="routerPageWithName('login')">
                <i class="fas fa-times" ></i>
              </div>
            </div>
            <div class="modal-body">
              <form id="formSignUp" >
                <div class="form-row ">
                  <div class="col form-group width-50">
                    <label for="firstname">Họ</label>
                    <input type="text" v-model="user.firstname" class="form-control " id="firstname" placeholder="Họ" name="firstname" @blur="validate('firstname', 'HO_TEN')"  >
                    <span class="mes" v-if="errors.firstname.error">{{errors.firstname.msg}}</span>
                  </div>
                  <div class="col form-group mt-3">
                    <label for="lastname">Tên</label>
                    <input type="text" v-model="user.lastname" class="form-control" id="lastname" placeholder="Tên" name="lastname" @blur="validate('lastname', 'HO_TEN')">
                    <span class="mes" v-if="errors.lastname.error">{{errors.lastname.msg}}</span>
                  </div>
                </div>
                <div class="form-row username mt-3">
                  <div class="col form-group ">
                    <label for="username">Tên tài khoản</label>
                    <input type="text" v-model="user.username" class="form-control" id="username" placeholder="Tên tài khoản" name="username" @blur="validate('username', 'USERNAME')" >
                    <span class="mes" v-if="errors.username.error">{{errors.username.msg}}</span>
                  </div>
                </div>
                <div class="form-row ">
                  <div class="col form-group mt-3">
                    <label for="age">Tuổi</label>
                    <input type="text" v-model="user.age" class="form-control" id="age" placeholder="Tuổi" name="age" @blur="validate('age', 'AGE')">
                    <span class="mes" v-if="errors.age.error">{{errors.age.msg}}</span>
                  </div>
                </div>
                <div class="form-selection mt-3" id="gender " >
                  <div>
                    <label for="">Giới tính</label> <span class="gender-error" v-if="errors.gender.error">{{errors.gender.msg}}</span>
                  </div>
                  <div class="flex-row">
                    <div class="custom-control custom-radio custom-control-inline  col form-control custom-control--pd" >
                      <input type="radio" class="custom-control-input" id="male" name="genderType" value="Nam" v-model="user.gender" >
                      <label class="custom-control-label flex-row1" for="male">Nam</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline  col form-control custom-control--pd" >
                      <input type="radio" class="custom-control-input" id="female" name="genderType"  value="Nu" v-model="user.gender">
                      <label class="custom-control-label flex-row1" for="female">Nữ</label>
                    </div>
                  </div>
                </div>
                <div class="form-row mt-3">
                  <div class="col form-group">
                    <label for="phone">Số điện thoại</label>
                    <input type="text" v-model="user.phone" class="form-control" id="phone" placeholder="Số điện thoại" name="phone" @blur="validate('phone', 'PHONENUMBER')">
                    <span class="mes" v-if="errors.phone.error">{{errors.phone.msg}}</span>
                  </div>
                </div>
                <div class="form-row mt-3">
                  <div class="col form-group">
                    <label for="address">Địa chỉ</label>
                    <input type="text" v-model="user.address" class="form-control" id="address" placeholder="Địa chỉ " name="address" @blur="validate('address', 'ADDRESS')">
                    <span class="mes" v-if="errors.address.error">{{errors.address.msg}}</span>
                  </div>
                </div>
                <div class="form-row mt-3">
                  <div class="col form-group email">
                    <label for="emailSignUp">Email</label>
                    <input type="email" v-model="user.email" class="form-control" id="email" placeholder="Email" name="email" @blur="validate('email', 'EMAIL')">
                    <span class="mes" v-if="errors.email.error">{{errors.email.msg}}</span>
                  </div>
                </div>
                <div class="form-row pass mt-3">
                  <div class="col form-group">
                    <label for="pwdSignUp">Mật khẩu</label>
                    <input type="password" v-model="user.pwdSignUp" class="form-control" id="pwdSignUp" placeholder="Enter new password" name="pwd" @blur="validate('pwdSignUp', 'PASSWORD')">
                    <span class="mes" v-if="errors.pwdSignUp.error">{{errors.pwdSignUp.msg}}</span>
                  </div>
                </div>
                <div class="form-row pass mt-3">
                  <div class="col form-group">
                    <label for="pwdSignUp-confirm">Nhập lại mật khẩu</label>
                    <input type="password" v-model="user.pwdSignUpCf" class="form-control" id="pwdSignUpCf" placeholder="Enter  password" name="pwdSignUp-confirm"  @blur="checkConfirm('pwdSignUpCf', 'pwdSignUp')">
                    <span class="mes" v-if="errors.pwdSignUpCf.error">{{errors.pwdSignUpCf.msg}} </span>
                  </div>
                </div>
                <div class="modal-footer ">
                  <p class="end-text">Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.</p>
                  <button type="submit" class="btn btn-success  btn-signUp btn--signUp" @click.prevent="validateForm" >Đăng kí</button>
                  <a class="btn btn-success  btn-signUp btn--save" >Lưu</a>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
/* eslint-disable */
import helper from '../helpers/utilities'
export default {
    name: 'signup',
    data () {
        return {
          user: {
            firstname:'',
            lastname: '',
            username:'',
            age:'',
            email: '',
            pwdSignUp: '',
            pwdSignUpCf: '',
            phone:'',
            gender: '',
            address:'',
          },
          errors: {
              firstname: {
                  error: false,
                  msg:''

              },
              lastname: {
                  error: false,
                  msg:''

              },
              username: {
                  error: false,
                  msg:''

              },
              age: {
                  error: false,
                  msg:''

              },
              email: {
                  error: false,
                  msg:''

              },
              pwdSignUp: {
                  error: false,
                  msg:''

              },
              pwdSignUpCf: {
                  error: false,
                  msg:''

              },
              phone: {
                  error: false,
                  msg:''

              },
              gender: {
                  error: false,
                  msg:''

              },
              address: {
                  error: false,
                  msg:''

              },
          },
          type:{
            firstname:'HO_TEN',
            lastname: 'HO_TEN',
            username:'USERNAME',
            age:'AGE',
            email: 'EMAIL',
            pwdSignUp: 'PASSWORD',
            pwdSignUpCf: 'PASSWORD',
            phone:'PHONENUMBER',
            gender: 'HO_TEN',
            address:'ADDRESS',
          }
        }
    },
    methods: {
      ...mapActions(['addUser']),
      routerPageWithName(name){
        this.$router.push({name: name })
      },
      validate(fieldName,type){
        const validateResult = helper.validateString(this.user[fieldName],type)
        this.errors[fieldName] = {
          ...this.errors[fieldName],
          ...validateResult
        }
      },
      validateNum(fieldName,type){
        const validateResult = helper.validateNumber(this.user[fieldName],this.type[fieldName])
        this.errors[fieldName] = {
          ...this.errors[fieldName],
          ...validateResult
        }
      },
      checkConfirm(fieldName, fieldName2){
        const validateResult = helper.validateConfirm(this.user[fieldName], this.user[fieldName2])
        this.errors[fieldName] = {
          ...this.errors[fieldName],
          ...validateResult
        }
        return validateResult.error
      },
      checkExist(fieldName,keyLocal,msg){
        const validateResult = helper.validateExist(this.user[fieldName], fieldName, keyLocal, msg)
        this.errors[fieldName] = {
          ...this.errors[fieldName],
          ...validateResult
        }
        return validateResult.error
      },
      validateForm(){
        let isValid = true
        isValid = !this.checkConfirm('pwdSignUpCf', 'pwdSignUp') && !this.checkExist( 'email', 'listUser', 'Email đã tồn tại') &&  !this.checkExist('username', 'listUser', 'Tên người dùng đã tồn tại')
        const inputElement = Object.keys(this.user)
        inputElement.forEach((e)=>{
          const validateResult = helper.validateString(this.user[e], this.type[e])
          this.errors[e] = {...this.errors[e],...validateResult}
          if(this.errors[e].error){
              isValid = false;
          }
        })
        if(this.user.email){
          this.checkExist('email', 'listUser', 'Email đã tồn tại')
        }
        if(this.user.username){
          this.checkExist('username', 'listUser', 'Tên người dùng đã tồn tại')
        }
        if(isValid){
          this.addUser(this.user)
          this.$router.push({name: 'user' })
        }
      }
    },
    watch: {
      'user.gender': function(){
        this.validate('gender','HO_TEN')
      },
      'user.firstname': function(){
        this.validate('firstname','HO_TEN')
      },
      'user.lastname':  function(){
        this.validate('lastname','HO_TEN')
      },
      'user.username':  function(){
        this.validate('username','USERNAME')
        this.checkExist('username', 'listUser', 'Tên người dùng đã tồn tại')
      },
      'user.phone':  function(){
        this.validate('phone','PHONENUMBER')
      },
      'user.email':  function(){
        this.validate('email','EMAIL')
        this.checkExist('email', 'listUser', 'Email đã tồn tại')
      },
      'user.address':  function(){
        this.validate('address','ADDRESS')
      },
      'user.pwdSignUp':  function(){
        this.validate('pwdSignUp','PASSWORD')
        if(this.user.pwdSignUpCf){
          this.checkConfirm('pwdSignUpCf', 'pwdSignUp')
        }
      },
      'user.pwdSignUpCf': function(){
          this.checkConfirm('pwdSignUpCf', 'pwdSignUp')
      }
    }
}

</script>
<style>
</style>
