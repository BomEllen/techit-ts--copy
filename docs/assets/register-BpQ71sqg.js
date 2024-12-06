import{p as u,S as l}from"./Header-G1zuKWyi.js";import{g as d}from"./index-DjKJqAo0.js";console.log("register");function p(){document.body.insertAdjacentHTML("beforeend",` 
    <div class="container">
        <h2>회원가입</h2>
        <div class="line">
          <div></div>
        </div>
        <div class="wrapper">
          <div class="step-1">
            <h3>
              로그인에 사용할 <br />
              아이디를 입력해주세요.
            </h3>
            <label for="idField"></label>
            <input type="email" id="idField" placeholder="아이디(이메일)입력"/>
            <button disabled type="button" class="next-1">다음</button>
          </div>
          <div class="step-2">
            <h3>
              로그인에 사용할 <br />
              비밀번호를 입력해주세요.
            </h3>
            <label for="pwField"></label>
            <input type="password" id="pwField" placeholder="비밀번호 입력"/>
            <button disabled type="button" class="next-2">회원가입</button>
          </div>
        </div>
      </div>
  `)}function b(){const e=document.querySelector("#idField"),t=document.querySelector("#pwField"),a=document.querySelector(".next-1"),o=document.querySelector(".next-2");function i(c){const n=c.currentTarget;n.value.length>5?n.nextElementSibling.disabled=!1:n.nextElementSibling.disabled=!0}function r(){d.to(".wrapper",{x:-460,ease:"power2.inOut"}),d.to(".line > div",{width:"70%"})}function s(){u.collection("users").create({email:e.value,password:t.value,passwordConfirm:t.value}).then(()=>{l.fire({text:"회원가입 완료! 로그인 페이지로 이동합니다!"}).then(()=>{location.href="/src/pages/login/"})}).catch(()=>{l.fire({text:"잘못된 정보를 입력하셨습니다."}).then(()=>{location.reload()})})}e.addEventListener("input",i),t.addEventListener("input",i),a.addEventListener("click",r),o.addEventListener("click",s)}p();b();
