<template>
   <section class="container">
      <div class="heading">
         <div class="title">
            <h1>
               <span class="text--color-gra">Dive</span> Into The Depths Of
               <span class="text--color-gra">Virtual Reality</span>
            </h1>
         </div>
         <div class="content">
            <p class="content__text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore nisl tincidunt
               eget. Lectus mauris eros in vitae .
            </p>
         </div>
         <div class="navigation">
            <div class="btn__item">
               <a href="#" class="btn--text">BUILD YOUR WORLD</a>
            </div>
            <div class="navigation__arrow">
               <img srcset="../assets/img/Arrow-right.png 2x" />
            </div>
         </div>
      </div>
      <div class="img">
         <div class="">
            <img srcset="../assets/img/Hero.png 2x" />
         </div>
      </div>
   </section>
</template>
<script>
export default {
   name: 'HeroView',
   props: {
      //
   },
};
</script>
<style scoped>
.container {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 100px;
}

.title {
   width: 465px;
   margin-bottom: 35px;
}

.title h1 {
   color: var(--color-white);
   font-size: 46px;
   font-weight: 700;
}

.content {
   width: 400px;
   margin-bottom: 60px;
}

.content__text {
   color: var(--color-white);
   font-size: 16px;
}
.text--color-gra {
   color: transparent;
   background: linear-gradient(to right, #c0b7e8, #8176af);
   -webkit-background-clip: text;
   background-clip: text;
}
.navigation {
   display: flex;
   gap: 40px;
   align-items: center;
}

.navigation__arrow:hover {
   opacity: 0.8;
   cursor: pointer;
}

@media (max-width: 600px) {
   .container {
      gap: 20px;
      flex-direction: column-reverse;
      align-items: center;
   }
   .title h1 {
      text-align: center;
   }
   .content__text {
      display: none;
   }
   .btn__item {
      margin: auto;
      padding: 10px 0;
      text-align: center;
      width: 280px;
   }
   .navigation__arrow {
      display: none;
   }
}
@media (max-width: 510px) {
   .title h1 {
      font-size: 18px;
      text-align: center;
   }
   .title h1 span {
      display: block;
   }
   .img img {
      margin: auto;
      width: 100%;
   }
}
</style>
