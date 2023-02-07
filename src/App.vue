<template>
   <Header>
      <div class="btn-header">
         <div class="btn__item--signup">
            <router-link to="/signup" class="btn--signup-text"
               >Sign Up</router-link
            >
         </div>
         <div class="btn__item">
            <router-link to="/login" class="btn--text">Log In</router-link>
         </div>
         <!-- <router-view /> -->
      </div>
      <div class="btn-hambuger">
         <img srcset="./assets/img/Hamburger-Button.png 2x" alt="" />
      </div>
   </Header>
   <Hero />
   <Contact />
   <Intro />
   <Author />
   <Brand />
   <Table />
   <Footer />
</template>

<script>
import Header from './components/HeaderView.vue';
import Hero from './components/HeroView.vue';
import Contact from './components/ContactView.vue';
import Intro from './components/IntroView.vue';
import Author from './components/AuthorView.vue';
import Brand from './components/BrandView.vue';
import Table from './components/TableView.vue';
import Footer from './components/FooterView.vue';
export default {
   name: 'App',
   components: {
      Header,
      Hero,
      Contact,
      Intro,
      Author,
      Brand,
      Table,
      Footer,
   },
};
</script>

<style>
#app {
   user-select: none;
   background-color: var(--primary-color);
   padding: 50px 90px 50px;
}
.btn-header {
   display: flex;
   gap: 40px;
   align-items: center;
}

.btn__item--signup {
   border: 2px solid #fff;
   border-radius: 100rem;
}
.btn__item--signup:hover {
   opacity: 0.8;
   cursor: pointer;
}
.btn--signup-text {
   display: block;
   margin: 14px 50px;
   color: var(--color-white);
   font-size: 12px;
   font-weight: 700;
   text-decoration: none;
}

.btn-hambuger {
   display: none;
}
@media (max-width: 600px) {
   #app {
      overflow: hidden;
      padding: 20px;
   }
   .btn-header {
      display: none;
   }
   .btn-hambuger {
      display: block;
   }
}
@media (max-width: 510px) {
   #app {
      padding: 20px;
   }
   .btn-header {
      display: none;
   }
}
</style>
