/* eslint-disable */
<template>
    <div class="list-user container">
        <div class="container border border-dark pb-3">
            <div class="list-user">
                <h3 class="fs-1 fw-bold">Danh sách người đã đăng kí</h3>
                <div class="d-flex justify-content-end mt-5 " v-if="listUser.length > 2">
                    <div class="form-check me-5" >
                        <label class="form-check-label" for="checkbox">
                           Xóa nhiều phần tử
                        </label>
                        <input class="form-check-input" type="checkbox" value="1" id="checkbox"   @click="checkSelected" :checked="selected">
                    </div>
                    <div class="input-group filter">
                        <select class="form-select " id="inputGroupSelect04" aria-label="Example select with button addon" v-model="selectGender">
                            <option selected value="">Tất cả</option>
                            <option value="Nam">Nam</option>
                            <option value="Nu">Nữ</option>
                        </select>
                        <button class="btn btn-outline-secondary" type="button" @click="filterGender(selectGender)" >Filter</button>
                    </div>
                    <!-- <span class="border border-dark w-25"> {{listUser1}} </span> -->
                </div>
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
                    <tbody v-if="!selectFilter">
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
                            <td> <a href="#" @click="showUser(--index)" >Edit</a> <a href="#" @click="deleteUser(index-2)" v-if="!selected">| Delete</a><input class="form-check-input ms-5 border-dark" type="checkbox"  v-if="selected"  @click="getIDs(index-2)"></td>
                        </tr>
                    </tbody>
                    <tbody v-if="!!selectFilter">
                        <tr v-for=" (user, index) in listUser1" :key="index++"  >
                            <td>{{index++}}</td>
                            <td>{{user.firstname}}</td>
                            <td>{{user.lastname}}</td>
                            <td>{{user.username}}</td>
                            <td>{{user.age}}</td>
                            <td>{{user.gender}}</td>
                            <td>{{user.phone}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.address}}</td>
                            <td> <a href="#" @click="showUser(--index)" >Edit</a> <a href="#" @click="deleteUser(index-2)" v-if="!selected">| Delete</a><input class="form-check-input ms-5 border-dark" type="checkbox"  v-if="selected"  @click="getIDs(index-2)"></td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-end mt-3 ">
                    <button type="button" class="btn btn-warning" v-if="selected" @click="deleteIDSelected">Delete</button>
                </div>
            </div>
        </div>
    <a class="btn btn-success btn-signUp-login btn--logOut" @click="routerPageWithName('login')">Đăng xuất </a>
    </div>
</template>

<script>
/* eslint-disable */
import helper from '../helpers/utilities'
import { mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return{
            selectGender:''
           
        }
    },
    computed: { 
        ...mapState(['listUser','selected', 'selectFilter']),
        ...mapGetters(['listUser1']),
    },
    methods:{
        ...mapMutations(['getIDs', 'filterGender']),
        // ...mapMutations(['checkSelected']),
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
            console.log(this.$store.state.listUser)
            return userIndex
        },
        ...mapActions(['deleteUser','checkSelected','deleteIDSelected'])
    },
    watch:{
        'selectGender': function(){
            // console.log(!!this.selectGender)
        }
    }
}
</script>

<style scoped>
 .btn--logOut{
     position: absolute;
     top: 2%;
     right: 3%;
     font-size: 20px;
 }
 .filter{
     width: 100px;
     /* left: 90%;
     transform: translateX(100px); */
 }
</style>>


