<template>
   <header class="container">
      <div class="logo">
         <div class="logo__item">
            <img srcset="../assets/img/Vector.png 2x" />
         </div>
         <div class="logo__item">
            <img srcset="../assets/img/Text.png 2x" />
         </div>
      </div>
      <nav>
         <ul class="list">
            <li class="list__item">
               <a href="#" class="list__link">ABOUT</a>
            </li>
            <li class="list__item">
               <a href="#" class="list__link">SERVICES</a>
            </li>
            <li class="list__item">
               <a href="#" class="list__link">TECHNOLOGIES</a>
            </li>
            <li class="list__item">
               <a href="#" class="list__link">HOW TO</a>
            </li>
         </ul>
      </nav>
      <slot />
   </header>
</template>

<script>
export default {
   name: 'HeaderView',
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
.logo {
   display: flex;
   align-items: center;
   gap: 15px;
}

.list {
   display: flex;
   gap: 40px;
   list-style: none;
}

.list__link {
   color: var(--color-white);
   font-size: 12px;
   font-weight: 700;
   text-decoration: none;
}
.list__link:hover {
   opacity: 0.8;
   cursor: pointer;
}
@media (max-width: 600px) {
   nav {
      display: none;
   }
}
</style>
