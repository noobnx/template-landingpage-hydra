<template>
   <section class="container">
      <div class="intro">
         <div class="intro__title">
            <h2>INTRODUCTION</h2>
            <div class="intro__link">
               <p>TO HYDRA VR</p>
               <img srcset="../assets/img/Arrow-right-intro.png 2x" alt="" />
            </div>
         </div>
         <div class="intro__content">
            <p class="intro--text">
               Vitae sapien pellentesque habitant morbi tristique senectus et
               netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
               lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
               nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit
               amet est placerat in. Lectus magna fringilla urna porttitor
               rhoncus vitae.
            </p>
         </div>
      </div>
      <div class="about">
         <div class="about__img">
            <img srcset="../assets/img/Intro.png 2x" alt="" />
         </div>
         <div class="about__text">
            <div class="about__heading">
               <h2>ABOUT</h2>
               <p>HYDRA VR</p>
            </div>
            <div class="about__content">
               <p>
                  Eget mi proin sed libero enim sed faucibus turpis. Nisl
                  rhoncus mattis rhoncus urna neque viverra justo. Vivamus at
                  augue eget arcu dictum. Ultrices gravida dictum fusce ut
                  placerat orci. Aenean et tortor at risus viverra adipiscing at
                  in. Mattis aliquam faucibus purus in massa. Est placerat in
                  egestas erat imperdiet sed. Consequat semper viverra nam
                  libero justo laoreet sit amet. Aliquam etiam erat velit
                  scelerisque in dictum non consectetur a. Laoreet sit amet
                  cursus sit amet. Vel eros donec ac odio tempor orci dapibus.
                  Sem nulla pha retra diam sit amet nisl suscipit adipiscing
                  bibendum. Leo a diam sollicitudi n tempor.
               </p>
            </div>
            <div class="btn-intro">
               <a href="#" class="btn-intro__text">LET'S GET IN TOUCH</a>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
export default {
   name: 'IntroView',
   props: {
      //
   },
};
</script>
<style scoped>
.intro {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 100px;
}
.intro__title h2 {
   color: var(--color-white);
   font-size: 38px;
   font-weight: 700;
}
.intro__link {
   height: 45px;
   display: flex;
   align-items: center;
   gap: 30px;
}
.intro__link p {
   color: var(--color-white);
   font-size: 36px;
}
.intro__content {
   width: 575px;
}
.intro--text {
   color: var(--color-white);
   font-weight: 400;
   text-align: justify;
   line-height: 25px;
}

.about {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 100px;
}

.about__text {
   width: 570px;
}

.about__heading h2 {
   color: var(--color-white);
   font-weight: 700;
   font-size: 38px;
   line-height: 44px;
}
.about__heading p {
   color: var(--color-white);
   font-size: 36px;
   line-height: 44px;
   margin-bottom: 40px;
}
.about__content {
   color: var(--color-white);
   margin-bottom: 30px;
   line-height: 25px;
}

.btn-intro {
   width: 230px;
   text-align: center;
   border: 2px solid #8176af;
   border-radius: 100rem;
   background: linear-gradient(to right, #8176af, #c0b7e8);
}
.btn-intro:hover {
   opacity: 0.8;
   cursor: pointer;
}
.btn-intro__text {
   display: block;
   margin: 14px 50px;
   color: var(--color-black);
   font-size: 12px;
   font-weight: 700;
   text-decoration: none;
}
@media (max-width: 600px) {
   .intro__link img {
      display: none;
   }
   .intro__title {
      margin: auto;
   }
   .intro__link p {
      margin: auto;
   }
   .intro__content {
      display: none;
   }
   .about {
      flex-direction: column;
   }
   .about__img img {
      margin: auto;
      width: 100%;
   }
   .about__heading {
      display: none;
   }
   .about__content {
      width: 100%;
      padding: 0 30px;
   }
   .about__content p {
      margin: auto;
      font-size: 12px;
   }
   .btn-intro {
      margin: auto;
      padding: 10px 0;
      text-align: center;
      width: 280px;
   }
}
@media (max-width: 510px) {
   .intro__title h2 {
      font-size: 32px;
      margin: auto;
   }
   .intro__link p {
      font-size: 30px;
      margin: auto;
   }
   .about__content {
      width: 100%;
      padding: 0 30px;
   }
   .about__content p {
      text-align: center;
      width: 300px;
      margin: auto;
      font-size: 10px;
   }
}
</style>
