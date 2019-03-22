import Vue from 'vue'

function login(params){
	return Vue.axios.post("http://127.0.0.1:8090/check-account",params).then((response) => {
	  	console.log(response.data)
	})

}
export const loginService = {  
    login: login
} 