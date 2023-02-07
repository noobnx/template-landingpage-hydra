<template>
   <section class="container">
      <div class="heading">
         <h2>JOIN HYDRA</h2>
         <p>Let’s Build Your VR Experience</p>
      </div>
      <div class="input-text">
         <input type="text" placeholder="First Name" />
         <input type="text" placeholder="Last Name" />
      </div>
      <div class="input-text">
         <input type="text" placeholder="Email" />
         <input type="text" placeholder="Phone Number" />
      </div>
      <div class="input-text">
         <input type="text" placeholder="Subject" />
      </div>
      <textarea
         name=""
         id=""
         cols="30"
         rows="10"
         placeholder="Tell Us Something..."
         class="btn-textarea"
      ></textarea>
      <div class="btn">
         <a href="#">SEND TO HYDRA</a>
      </div>
   </section>
</template>
<script>
export default {
   name: 'TableView',
   props: {
      //
   },
};
</script>
<style scoped>
.container {
   display: flex;
   flex-direction: column;
   padding: 90px 110px;
   margin-bottom: 120px;
   border-radius: 100px;
   background: linear-gradient(#211e2e, #433d60, #211e2e);
}

.heading {
   text-align: center;
}

.heading h2 {
   font-weight: 700;
   font-size: 36px;
   color: var(--color-white);
   margin-bottom: 30px;
}
.heading p {
   color: var(--color-white);
   font-size: 36px;
   margin-bottom: 60px;
}
.input-text {
   display: flex;
   gap: 10px;
   margin-bottom: 40px;
}
.input-text input {
   color: var(--color-white);
   width: 100%;
   padding: 20px 0 20px 40px;
   border: 2px solid #fff;
   border-radius: 100rem;
   background-color: transparent;
   outline: none;
}
.input-text input::placeholder {
   color: var(--color-white);
   opacity: 0.8;
}
.btn-textarea {
   color: var(--color-white);
   padding: 30px 0 0 40px;
   border: 2px solid #fff;
   border-radius: 50px;
   outline: none;
   background-color: transparent;
   resize: none;
   margin-bottom: 50px;
}
.btn-textarea::placeholder {
   color: var(--color-white);
   opacity: 0.8;
}
.btn {
   width: 220px;
   text-align: center;
   padding: 15px;
   margin: auto;
   border-radius: 100rem;
   background: linear-gradient(to right, #8176af, #c0b7e8);
}
.btn:hover {
   opacity: 0.8;
   cursor: pointer;
}
.btn a {
   font-weight: 700;
   font-size: 12px;
   color: var(--color-black);
   text-decoration: none;
}
@media (max-width: 600px) {
   .container {
      border-radius: 50px;
      padding: 20px;
   }
   .input-text {
      flex-direction: column;
   }
   .input-text input,
   .btn-textarea {
      padding: 20px;
   }
}
</style>
