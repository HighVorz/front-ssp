<template>
    <div class="container">
        <div class="welcome">
            <div :class="form">
                <div :class="form_signup">
                    <h1>注册</h1>
                    <form autocomplete="off">
                        <input type="text" placeholder="用户名">
                        <input type="email" placeholder="email">
                        <input type="password" placeholder="密码">
                        <input type="password" placeholder="确认密码">
                        <button class="button submit">创建账号 </button>
                    </form>
                </div>
                <div :class="form_signin">
                    <h1>登录</h1>
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
                <h2 class="title"><span>BLOOM</span>&<br>BOUQUET</h2>
                <p class="desc">选择你最喜欢的<span>鲜花</span></p>
                <img class="flower smaller" src="1.jpg" alt="1357d638624297b" border="0">
                <p class="account">已经有账号了?</p>
                <button class="button" id="signin" @click="btn_signin">登录</button>
            </div>
            <div class="rightbox">
                <h2 class="title"><span>BLOOM</span>&<br>BOUQUET</h2>
                <p class="desc">选择你最喜欢的<span>鲜花</span></p>
                <img class="flower" src="2.jpg" />
                <p class="account">还没有账号?</p>
                <button class="button" id="signup" @click="btn_signup">注册</button>
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

<style>
@import '../assets/css/style.css';
</style>