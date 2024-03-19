<!-- 基本已经完成，可能要改一些字体 -->
<template>
    <div class="backgd">
    <div class="container">
        <div class="title_line">
            <p>超员检测系统</p>
        </div>
        <div class="welcome">
            <div :class="form">
                <div :class="form_signup">
                    <h1><i class="fas fa-user-circle"></i> 注 册</h1>
                    <form autocomplete="off">
                        <input type="text" placeholder="用户名">
                        <input type="email" placeholder="电子邮箱">
                        <input type="password" placeholder="密码">
                        <input type="password" placeholder="确认密码">
                        <button class="button submit">创建账号 </button>
                    </form>
                </div>
                <div :class="form_signin">
                    <h1><i class="fas fa-sign-in-alt"></i> 登 录</h1>
                    <form class="more-padding" autocomplete="off">
                        <input type="text" placeholder="用户名">
                        <input type="password" placeholder="密码">
                        <div class="checkbox">
                            <input type="checkbox" id="remember" /><label for="remember">记住我</label>
                        </div>
                        <button class="button submit">登录</button>
                    </form>
                </div>
            </div>
            <div class="leftbox">
                <h2 class="title"><span>ELECTRONIC</span>&<br>POLICE</h2>
                <p class="desc">欢迎注册成为<span>管理员</span></p>
                <img class="logo" src="../assets/images/login.png" alt="logo" border="0">
                <p class="account">已经有账号了?</p>
                <button class="button" id="signin" @click="btn_signin">登录</button>
            </div>
            <div class="rightbox">
                <h2 class="title"><span>OVERCROWD</span>&<br>DETECT</h2>
                <p class="desc">欢迎来到<span>超员检测系统</span></p>
                <img class="logo smaller" src="../assets/images/moniter.png" />
                <p class="account">还没有账号?</p>
                <button class="button" id="signup" @click="btn_signup">注册</button>
            </div>
        </div>
    </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const form_signup = ref('signup nodisplay');
const form_signin = ref('signin');
const form = ref("form-signin")

function btn_signin() {
    console.log("btn_signin: ")
    form.value = 'form-signin'
    form_signin.value = 'signin'
    form_signup.value = 'signup nodisplay'
}

function btn_signup() {
    console.log("btn_signup: ", form_signin.value)
    form.value = 'form-signup'
    form_signin.value = 'signin nodisplay'
    form_signup.value = 'signup'
    console.log("btn_signup: ", form_signin.value)
   
}
</script>

<style scoped src="../assets/css/style.css">
</style>