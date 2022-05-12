/* eslint-disable */
/**
 *- HO_TEN
*- SDT 
*- EMAIL
*- PASSWORD
*- USERNAME
* **/
const arrtype ={
    HO_TEN: 'HO_TEN',
    PHONENUMBER: 'PHONENUMBER',
    EMAIL: 'EMAIL',
    PASSWORD: 'PASSWORD',
    USERNAME: 'USERNAME',
    ADDRESS: 'ADDRESS',
    AGE: 'AGE'
}
const validateString = function(string, type) {
    let validResult = {
        error: false,
        msg: ''
    }
    switch(type){
        case 'HO_TEN':
            validResult = this.validateTypeHoten(string)
            break
        case 'PHONENUMBER':
            validResult = this.validateTypePhonenumber(string)
            break
        case 'AGE':
            validResult = this.validateTypeAge(string)
            break
        case 'EMAIL':
            validResult = this.validateTypeEmail(string)
            break
        case 'PASSWORD':
            validResult = this.validateTypePassword(string)
            break
        case 'USERNAME':
            validResult = this.validateTypeUsername(string)
            break
        case 'ADDRESS':
            validResult = this.validateTypeAddress(string)
            break
        case 'GIOI_TINH':
            validResult = this.validateTypeHoten(string)
            break
        default:
            validResult = {
            error: false,
            msg: ''
            }
    }
    return validResult
}
const validateNumber = function(number, type){
    let validResult ={
        error: false,
        msg:''
    }
    switch(type){
        case 'AGE':
            break
        default:
            validResult ={
                error: true,
                msg:''
            }
    }
    return validResult
}

// const validateTypeAge = function(number){
//     let validResult = {
//         error: false,
//         msg: ''
//     }
//     console.log(typeof(`${number}`))
//     if(!this.isNumber(number)){
//         validResult = {
//         ...validResult,
//         error: true,
//         msg:'Dữ liệu không hợp lệ'
//         }
//     }
//     return validResult
// }
const validateTypeHoten = function(string){
    let validResult = {
        error: false,
        msg: ''
    }
    const pattern = /^[a-z\s]+$/i
    if(!this.isString(string)|| !string.trim() || !pattern.test(string)){
        validResult = {
        ...validResult,
        error: true,
        msg:'Dữ liệu không hợp lệ'
        }
    }
    // this.errors.firstname= validResult
    return validResult
}
const validateTypeUsername = function(string){
    let validResult = {
        error: false,
        msg: ''
    }
    const pattern = /^[a-z\d]+$/i
    if(!this.isString(string)|| !string.trim() || !pattern.test(string)){
        validResult = {
        ...validResult,
        error: true,
        msg:'Dữ liệu không hợp lệ'
        }
    }
    return validResult
}
const validateTypePassword = function(string){
    let validResult = {
        error: false,
        msg: ''
    }
    const pattern = /^[a-z\d]+$/i
    if(!this.isString(string)|| !string.trim() || !pattern.test(string)){
        validResult = {
        ...validResult,
        error: true,
        msg:'Dữ liệu không hợp lệ'
        }
    }
    return validResult
}
const validateTypePhonenumber = function(string){
    let validResult = {
        error: false,
        msg: ''
    }
    const pattern = /^[0-9]+$/i
    if(!this.isString(string)|| !string.trim() || !pattern.test(string) || string.length < 10  || string.length > 11 ){
        validResult = {
        ...validResult,
        error: true,
        msg:'Dữ liệu không hợp lệ'
        }
    }
    return validResult
}
const validateTypeAge = function(string){
    let validResult = {
        error: false,
        msg: ''
    }
    const pattern = /^[0-9\s]+$/i
    if(!this.isString(string)|| !string.trim() || !pattern.test(string)){
        validResult = {
        ...validResult,
        error: true,
        msg:'Dữ liệu không hợp lệ'
        }
    }
    return validResult
}
const validateConfirm = function(string1, string2){
    let validResult = {
        error: false,
        msg: ''
    }
    const isValid = string1 !== string2
    if(isValid){
        validResult = {
            ...validResult,
            error: true,
            msg:'Nhập lại không đúng'
        }
    }
    return validResult
}
const validateTypeAddress = function(string){
    let validResult = {
        error: false,
        msg: ''
    }
    const pattern = /^[a-z\d\s]+$/i
    if(!this.isString(string)|| !string.trim() || !pattern.test(string)){
        validResult = {
        ...validResult,
        error: true,
        msg:'Dữ liệu không hợp lệ'
        }
    }
    return validResult
}
const validateTypeEmail = function(string){
    let validResult = {
        error: false,
        msg: ''
    }
    const pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if(!this.isString(string)|| !string.trim() || !pattern.test(string)){
        validResult = {
        ...validResult,
        error: true,
        msg:'Dữ liệu không hợp lệ'
        }
    }
    return validResult
}
const isString = function(variable){
    return typeof variable ==='string'
}
const isNumber = function(variable){
    return typeof variable ==='number'
}
const pushLocalStorage = (variable, keyword) =>{
        if(isObjectOrArr(variable)){
            addLocalStorage(convertToString(variable), keyword)
        } else{
            addLocalStorage(variable, keyword)
        }
}
const isObjectOrArr = (variable) => typeof variable =='object'
const convertToString= (variable) => JSON.stringify(variable)
const addLocalStorage= (variable, keyword) => localStorage.setItem(keyword,variable)
const getFieldName = (fieldName, keyLocal) => {
    let fieldNames= []
    
    let arrFieldName = localStorage.getItem(keyLocal)? JSON.parse(localStorage.getItem(keyLocal)):[]
     arrFieldName.forEach(function(element){
        fieldNames.push(element[fieldName])
     });
     console.log(fieldNames)
     return fieldNames
}
const validateExist = (data, fieldName, keyLocal, msg)=>{
    let isExist = false
    let validResult ={
        error: false,
        msg:''
    }
    let arrFieldName = localStorage.getItem(keyLocal)? JSON.parse(localStorage.getItem(keyLocal)) :[] 
    arrFieldName.forEach(function(e){
      if(data && data===e[fieldName]){
          isExist = true
      }
    }) 
    console.log(isExist)
    if(isExist){
      validResult = {
        error: true,
        msg: msg 
      }
    }
    return validResult
}
/* eslint-disable */
export default{
    validateString,
    validateNumber,
    validateTypeHoten,
    validateTypeUsername,
    validateTypeAddress,
    validateTypeEmail,
    validateTypePassword,
    validateTypePhonenumber,
    validateTypeAge,
    validateConfirm,
    pushLocalStorage,
    getFieldName,
    validateExist,
    isString,
    isNumber,
    arrtype
}