<template>
	<el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="loginForm">
		<el-form-item label="账户" prop="account">
			<el-input type="string" v-model="ruleForm2.account" autocomplete="off"></el-input>
		</el-form-item>
	  	<el-form-item label="密码" prop="pass">
	    	<el-input type="password" v-model="ruleForm2.password" autocomplete="off"></el-input>
	  	</el-form-item>
	  	<el-form-item>
	    	<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
	    	<el-button @click="resetForm('ruleForm2')">重置</el-button>
	  	</el-form-item>
	</el-form>
</template>

<script>
	import { loginService } from "../service/loginService.js"
	export default {
	  	name: 'login',
		data() {
	      return {
	        ruleForm2: {
	          password: '',
	          account: ''
	        }
	      };
	    },
	    methods: {
		    submitForm(formName) {
		        this.$refs[formName].validate((valid) => {
		          	if (valid) {
		          		loginService.login(this.ruleForm2).then(()=>{
		          			
		          		})
		          	} else {
		            	console.log('error submit!!');
		            	return false;
		          	}
		        });
		    },
	      	resetForm(formName) {
	        	this.$refs[formName].resetFields();
	      	}
	    }
	}
</script>

<style>
	.loginForm {
		width: 400px;
		height: 400px;
		margin: 200px auto;
		text-align: center;
		padding: 24px;
		border: 1px solid #e3e3e3;
	}
</style>