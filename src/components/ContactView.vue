<template>
   <section class="container">
      <div class="btn-nav">
         <img srcset="../assets/img/btn-left-contact.png 2x" alt="" />
      </div>
      <div class="wrapper">
         <div class="address">
            <p class="about">Union St, Seattle, WA 98101, United States</p>
         </div>
      </div>
      <div class="wrapper">
         <div class="icon">
            <img srcset="../assets/img/address.png 2x" alt="" />
         </div>
         <div class="address">
            <h3 class="title">Pay Us a Visit</h3>
            <p class="about">Union St, Seattle, WA 98101, United States</p>
         </div>
      </div>
      <div class="wrapper bd">
         <div class="icon">
            <img srcset="../assets/img/phone.png 2x" alt="" />
         </div>
         <div class="address">
            <h3 class="title">Give Us a Call</h3>
            <p class="about">(110) 1111-1010</p>
         </div>
      </div>
      <div class="wrapper">
         <div class="icon">
            <img srcset="../assets/img/email.png 2x" alt="" />
         </div>
         <div class="address">
            <h3 class="title">Send Us a Message</h3>
            <p class="about">Contact@HydraVTech.com</p>
         </div>
      </div>
      <div class="btn-nav">
         <img srcset="../assets/img/btn-right-contact.png 2x" alt="" />
      </div>
   </section>
</template>
<script>
export default {
   name: 'ContactView',
   props: {
      //
   },
};
</script>
<style scoped>
.container {
   display: flex;
   align-items: center;
   justify-content: space-around;
   background: linear-gradient(to right, #3a3456, #211e2e, #3a3456);
   padding: 40px 30px;
   border-radius: 100rem;
   margin-bottom: 90px;
}

.wrapper {
   display: flex;
   gap: 20px;
   align-items: center;
}
.wrapper:nth-child(2) {
   display: none;
}
.title,
.about {
   color: var(--color-white);
}

.title {
   font-size: 24px;
   font-weight: 700;
   margin-bottom: 10px;
}

.about {
   font-size: 14px;
}

.bd {
   height: 120px;
   border-left: 1px solid rgba(192, 183, 232, 0.33);
   border-right: 1px solid rgba(192, 183, 232, 0.33);
   padding: 0 50px;
}
.btn-nav {
   display: none;
}
@media (max-width: 600px) {
   .container {
      background: linear-gradient(to right, #211e2e, #3a3456, #211e2e);
   }
   .wrapper:nth-child(2) {
      display: block;
   }
   .wrapper:nth-child(3),
   .wrapper:nth-child(4),
   .wrapper:nth-child(5) {
      display: none;
   }
   .btn-nav {
      display: block;
   }
   .btn-nav:hover {
      opacity: 0.8;
   }
}
@media (max-width: 510px) {
   .about {
      text-align: center;
      font-size: 1em;
   }
}
</style>
