<template>
   <section class="container">
      <div class="logo-footer">
         <img src="../assets/img/Vector.png" />
      </div>
      <div class="line">
         <img srcset="../assets/img/Vector-footer.png 2x" />
      </div>
      <nav class="nav">
         <ul class="list-nav">
            <li><a href="#" class="list-nav__item">ABOUT</a></li>
            <li><a href="#" class="list-nav__item">SERVICES</a></li>
            <li><a href="#" class="list-nav__item">TECHNOLOGIES</a></li>
            <li><a href="#" class="list-nav__item">HOW TO</a></li>
            <li><a href="#" class="list-nav__item">JOIN HYDRA</a></li>
         </ul>
      </nav>
      <div class="line">
         <img srcset="../assets/img/Vector-footer.png 2x" />
      </div>
      <nav class="nav">
         <ul class="list-nav">
            <li><a href="#" class="list-nav__item">F.A.Q</a></li>
            <li><a href="#" class="list-nav__item">SITEMAP</a></li>
            <li><a href="#" class="list-nav__item">CONDITIONS</a></li>
            <li><a href="#" class="list-nav__item">LICENSES</a></li>
         </ul>
      </nav>
      <div class="line">
         <img srcset="../assets/img/Vector-footer.png 2x" />
      </div>
      <div class="socials">
         <div class="heading">
            <h4>SOCIALIZE WITH HYDRA</h4>
         </div>
         <nav>
            <ul class="list-socials">
               <li><img srcset="../assets/img/facebook.png 2x" /></li>
               <li><img srcset="../assets/img/twitter.png 2x" /></li>
               <li><img srcset="../assets/img/linkedin.png 2x" /></li>
               <li><img srcset="../assets/img/youtube.png 2x" /></li>
               <li><img srcset="../assets/img/instagram.png 2x" /></li>
               <li><img srcset="../assets/img/pinterest.png 2x" /></li>
            </ul>
         </nav>
         <div class="btn">
            <a href="#">BUILD YOUR WORLD</a>
         </div>
      </div>
   </section>
   <footer>
      <p class="coppy-right">
         2023 © HYDRA LANDING PAGE - BY LE XUAN SON - ALL RIGHTS RESERVED
      </p>
   </footer>
</template>
<script>
export default {
   name: 'FooterView',
};
</script>
<style scoped>
.container {
   display: flex;
   justify-content: space-between;
   border-bottom: 2px solid #8176af;
   padding-bottom: 70px;
   margin-bottom: 50px;
}
.list-nav {
   list-style: none;
}
.list-nav li {
   margin-bottom: 22px;
}
.list-nav__item {
   color: var(--color-white);
   text-decoration: none;
   font-weight: 700;
   font-size: 16px;
}
.heading {
   color: var(--color-white);
   margin-bottom: 40px;
}

.list-socials {
   display: flex;
   gap: 10px;
   list-style: none;
   margin-bottom: 40px;
}
.list-socials li:hover {
   opacity: 0.8;
   cursor: pointer;
}
.btn {
   width: 210px;
   text-align: center;
   padding: 16px 0;
   border-radius: 100rem;
   background: linear-gradient(to right, #8176af, #c0b7e8);
}
.btn:hover {
   opacity: 0.8;
   cursor: pointer;
}
.btn a {
   color: var(--color-black);
   text-decoration: none;
   font-weight: 700;
   font-size: 12px;
}
.coppy-right {
   color: var(--color-white);
   font-weight: 700;
   font-size: 14px;
   line-height: 17px;
   text-align: center;
}
@media (max-width: 600px) {
   .container {
      flex-direction: column;
      align-items: center;
   }
   .line {
      display: none;
   }
   .nav {
      display: none;
   }
   .logo-footer {
      margin-bottom: 30px;
   }
   .socials {
      text-align: center;
   }
   .btn {
      margin: auto;
   }
}
</style>
