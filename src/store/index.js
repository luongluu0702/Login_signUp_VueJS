/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import helper from '../helpers/utilities'
Vue.use(Vuex)
const storeData = {
    // Dữ liệu chia sẻ chung cho các component
    state:{
        listUser:localStorage.getItem('listUser')? JSON.parse(localStorage.getItem('listUser')):[],
        idSelected:[],
        selected: false,
        isClick: false,
        arrIndexUser:[],
        currentIndex: localStorage.getItem('currentIndex')? JSON.parse(localStorage.getItem('currentIndex')): -1,
        selectFilter: ''
    },
    mutations: {
        deleteUser(state, id){
            if(confirm('Bạn chắc chắn muốn xóa người dùng khỏi danh sách')){
                state.listUser.splice(id,1)
                helper.pushLocalStorage(state.listUser, 'listUser')
            }
        },
        addUser(state, newUser){
            newUser.id = ++(state.currentIndex)
            helper.pushLocalStorage(state.currentIndex, 'currentIndex')
            state.listUser.push(newUser)
            helper.pushLocalStorage(state.listUser, 'listUser')
        },
        editUser(state, {idUser, userEdited}){
            state.listUser.splice(idUser,1,userEdited)
            helper.pushLocalStorage(state.listUser, 'listUser')
        },
        checkSelected(state){
            for(let element of state.listUser){
                element.isChoose = false
            }
            helper.pushLocalStorage(state.listUser, 'listUser')
            state.selected= !state.selected
            state.idSelected=[]
        },
        getIDs(state,index){
            state.listUser[index].isChoose=!state.listUser[index].isChoose
            if(state.listUser[index].isChoose){
                state.idSelected.push(state.listUser[index].id)
            }else{
                state.idSelected = state.idSelected.filter(item => item!=state.listUser[index].id)
            }
            console.log(state.idSelected)
        },
        deleteIDSelected(state){
            if(confirm('Bạn chắc chắn muốn xóa người dùng khỏi danh sách')){
                state.selected = false
                state.listUser = state.listUser.filter(item =>!state.idSelected.includes(item.id))
                helper.pushLocalStorage(state.listUser, 'listUser')
                state.idSelected=[]
            }
        },
        filterGender(state, data){
            state.selectFilter = data
            console.log(state.selectFilter)
        }
    },
    actions:{
        checkSelected({commit}){
            commit('checkSelected')
        },
        deleteUser({commit}, id){
            commit('deleteUser',id)
        },
        filterGender({commit}, data){
            commit('filterGender',data)
        },
        addUser({commit}, newUser){
            commit('addUser',newUser)
        },
        editUser({commit}, {idUser,userEdited}){
            console.log(userEdited)
            commit('editUser',{idUser,userEdited})
        },
        deleteIDSelected({commit}){
            commit('deleteIDSelected')
        }
        
    },
    getters: {
        listUser1(state){
            console.log(123)
            return state.listUser.filter(item => item.gender == state.selectFilter)
        }
    }

}
/* eslint-disable */
const store = new Vuex.Store(storeData)
export default store