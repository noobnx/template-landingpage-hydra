<template>
   <section class="container">
      <div class="heading">
         <div class="heading__title">
            <h2>WHY BUILD</h2>
            <div class="heading__link">
               <p>WITH HYDRA?</p>
               <img srcset="../assets/img/Arrow-right-intro.png 2x" alt="" />
            </div>
         </div>
         <div class="heading__content">
            <p class="heading--text">
               Vitae sapien pellentesque habitant morbi tristique senectus et
               netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
               lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
               nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit
               amet est placerat in. Lectus magna fringilla urna porttitor
               rhoncus vitae.
            </p>
         </div>
      </div>
      <div class="wrapper">
         <div class="icon-arrow-left">
            <img srcset="../assets/img/Arrow-brand-left.png 2x" alt="" />
         </div>
         <div class="list-author">
            <div class="author">
               <div class="author__avatar">
                  <img srcset="../assets/img/Avatar1.png 2x" alt="" />
               </div>
               <h2 class="author__name">SIMULATION</h2>
               <p class="author__descr">
                  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                  porttitor rhoncus libero justo laoreet sit amet vitae.
               </p>
               <div class="btn">
                  <a href="#" class="btn-link">TRY IT NOW</a>
               </div>
            </div>
         </div>
         <div class="list-author">
            <div class="author">
               <div class="author__avatar">
                  <img srcset="../assets/img/Avatar2.png 2x" alt="" />
               </div>
               <h2 class="author__name">EDUCATION</h2>
               <p class="author__descr">
                  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                  porttitor rhoncus libero justo laoreet sit amet vitae.
               </p>
               <div class="btn">
                  <a href="#" class="btn-link">TRY IT NOW</a>
               </div>
            </div>
         </div>
         <div class="list-author">
            <div class="author">
               <div class="author__avatar">
                  <img srcset="../assets/img/Avatar3.png 2x" alt="" />
               </div>
               <h2 class="author__name">SELF-CARE</h2>
               <p class="author__descr">
                  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                  porttitor rhoncus libero justo laoreet sit amet vitae.
               </p>
               <div class="btn">
                  <a href="#" class="btn-link">TRY IT NOW</a>
               </div>
            </div>
         </div>
         <div class="list-author">
            <div class="author">
               <div class="author__avatar">
                  <img srcset="../assets/img/Avatar4.png 2x" alt="" />
               </div>
               <h2 class="author__name">OUTDOOR</h2>
               <p class="author__descr">
                  Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
                  porttitor rhoncus libero justo laoreet sit amet vitae.
               </p>
               <div class="btn">
                  <a href="#" class="btn-link">TRY IT NOW</a>
               </div>
            </div>
         </div>
         <div class="icon-arrow-right">
            <img srcset="../assets/img/Arrow-brand-right.png 2x" alt="" />
         </div>
      </div>
   </section>
</template>
<script>
export default {
   name: 'AuthorView',
   props: {
      //
   },
};
</script>
<style scoped>
.heading {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 100px;
}
.heading__title h2 {
   color: var(--color-white);
   font-size: 38px;
   font-weight: 700;
}
.heading__link {
   height: 45px;
   display: flex;
   align-items: center;
   gap: 30px;
}
.heading__link p {
   color: var(--color-white);
   font-size: 36px;
}
.heading__content {
   width: 575px;
}
.heading--text {
   color: var(--color-white);
   font-weight: 400;
   text-align: justify;
   line-height: 25px;
}

.wrapper {
   display: flex;
   gap: 10px;
   justify-content: space-between;
   margin-bottom: 110px;
}
.list-author {
   text-align: center;
   border-radius: 12px;
   background: linear-gradient(#211e2e, #433d60, #211e2e);
   padding: 60px 25px;
}
.author__name {
   color: var(--color-white);
   margin: 40px auto;
}
.author__descr {
   color: var(--color-white);
   margin-bottom: 35px;
   font-weight: 400;
   font-size: 12px;
}

.btn-link {
   color: var(--color-black);
   font-weight: 700;
   font-size: 12px;
   padding: 16px 40px;
   border-radius: 100rem;
   text-decoration: none;
   background: linear-gradient(to right, #8176af, #c0b7e8);
}
.btn-link:hover {
   opacity: 0.8;
   cursor: pointer;
}
.icon-arrow-left {
   display: none;
}
.icon-arrow-right {
   display: none;
}
@media (max-width: 600px) {
   .heading__title {
      margin: auto;
   }
   .heading__title h2 {
      font-size: 26px;
      text-align: center;
   }
   .heading__link p {
      font-size: 26px;
      margin: auto;
   }
   .heading__link img {
      display: none;
   }
   .heading__content {
      display: none;
   }
   .wrapper {
      align-items: center;
      justify-content: center;
   }
   .list-author:nth-child(3),
   .list-author:nth-child(4),
   .list-author:nth-child(5) {
      display: none;
   }
   .icon-arrow-left {
      width: 50px;
      height: 40px;
      border-radius: 100rem;
      display: block;
      background: linear-gradient(to right, #c0b7e8, #8176af);
   }
   .icon-arrow-right {
      width: 50px;
      height: 40px;
      border-radius: 100rem;
      display: block;
      border-radius: 100rem;
      background: linear-gradient(to right, #c0b7e8, #8176af);
   }
}
@media (max-width: 510px) {
   .wrapper {
      gap: 0;
      align-items: center;
      justify-content: center;
   }

   .icon-arrow-left {
      transform: translateX(20px);
   }
   .icon-arrow-right {
      transform: translateX(-20px);
   }
}
</style>
