/* eslint-disable */
<template>
    <div class="list-user container">
        <div class="list-user">
          <h3 class="fs-1 fw-bold">Danh sách người đã đăng kí</h3>
            <table class="list-user">
                <thead>
                    <tr class="fs-3 fw-bold">
                        <td>#</td>
                        <td>Họ</td>
                        <td>Tên</td>
                        <td>Tên tài khoản</td>
                        <td>Tuổi</td>
                        <td>Giới tính</td>
                        <td>Số điện thoại</td>
                        <td>Email</td>
                        <td>Địa chỉ</td>
                        <td>Hành động</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" (user, index) in listUser" :key="index++">
                        <td>{{index++}}</td>
                        <td>{{user.firstname}}</td>
                        <td>{{user.lastname}}</td>
                        <td>{{user.username}}</td>
                        <td>{{user.age}}</td>
                        <td>{{user.gender}}</td>
                        <td>{{user.phone}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.address}}</td>
                        <td> <a href="#" @click="showUser(--index)" >Edit |</a> <a href="#" @click="deleteUser(--index)">Delete</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    <a class="btn btn-success btn-signUp-login btn--logOut" @click="routerPageWithName('login')">Đăng xuất </a>
    </div>
</template>

<script>
/* eslint-disable */
import helper from '../helpers/utilities'
export default {
   data() {
       return{
           listUser: JSON.parse(localStorage.getItem('listUser'))
       }
   },
   methods:{
       routerPageWithName(name){
        this.$router.push({name: name })
        },
        getIndex(index){
            helper.pushLocalStorage(index, 'index')
            let userIndex = JSON.parse(localStorage.getItem('index'))
            return userIndex
        },
        showUser(index){
            let userIndex = this.getIndex(index)
            this.$router.push({name: 'editUser' })
            return userIndex
        },
        deleteUser(index){
            if(confirm('Bạn chắc chắn muốn xóa tài khoản khỏi danh sách')){
                let userIndex = this.getIndex(--index)
                this.listUser.splice(userIndex,1)
                helper.pushLocalStorage(this.listUser, 'listUser')
                this.$router.push({name: 'user' })
            }
        }


   }
}
</script>

<style scoped>
 .btn--logOut{
     position: absolute;
     top: 5%;
     right: 5%;
     font-size: 20px;
 }
</style>>


