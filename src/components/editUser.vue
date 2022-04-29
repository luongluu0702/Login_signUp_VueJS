/* eslint-disable */
<template>
    <div class="modal modal-signUp">
        <div class="modal-dialog modalSignUp-container">
          <div class="modal-content">
            <div class="modal-header">
              <h3 class="signUp--title fs-1 fw-bold">Thông tin tài khoản</h3>
              <div class="modal-header-close" @click="routerPageWithName('user')">
                <i class="fas fa-times" ></i>
              </div>
            </div>
            <div class="modal-body">
              <form id="formSignUp" >
                <div class="form-row ">
                  <div class="col form-group width-50">
                    <label for="firstname">Họ</label>
                    <input type="text" v-model="user.firstname" class="form-control " id="firstname" placeholder="Họ" name="firstname" @blur="validate('firstname', 'HO_TEN')">
                    <span class="mes" v-if="errors.firstname.error">{{errors.firstname.msg}}</span>
                  </div>
                  <div class="col form-group mt-3">
                    <label for="lastname">Tên</label>
                    <input type="text" v-model="user.lastname" class="form-control" id="lastname" placeholder="Tên" name="lastname" @blur="validate('lastname', 'HO_TEN')">
                    <span class="mes" v-if="errors.lastname.error">{{errors.lastname.msg}}</span>
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
                <div class="modal-footer mt-3">
                  <p class="end-text">Bằng cách nhấp vào Lưu, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.</p>
                  <button type="submit" class="btn btn-success  btn-signUp btn--signUp" @click.prevent="validateForm" >Lưu</button>
                  <a class="btn btn-success  btn-signUp btn--save" >Lưu</a>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import helper from '../helpers/utilities'
export default {
    data() { 
        let listUser = JSON.parse(localStorage.getItem('listUser'))
        let index = JSON.parse(localStorage.getItem('index'))
        let userData = listUser[--index]
        return {
          user: {
            index,
            firstname:userData.firstname,
            lastname: userData.lastname,
            age: userData.age,
            phone:userData.phone,
            gender: userData.gender,
            address:userData.address,
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
              age: {
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
            age:'AGE',
            phone:'PHONENUMBER',
            gender: 'HO_TEN',
            address:'ADDRESS',
          }
        }
    },
    methods:{
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
            console.log(isValid)
            if(isValid){
              let listUser = JSON.parse(localStorage.getItem('listUser'))
              let index = this.user.index
              let userEdit = listUser[index]
              console.log(userEdit)
              inputElement.forEach((e)=>{
                userEdit[e]= this.user[e]
              })
              listUser.splice(index,1,userEdit)
              helper.pushLocalStorage(listUser, 'listUser')
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
      'user.phone':  function(){
        this.validate('phone','PHONENUMBER')
      },
      'user.address':  function(){
        this.validate('address','ADDRESS')
      }
    }
}
</script>

<style>

</style>