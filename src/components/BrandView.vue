<template>
   <section class="container">
      <div class="heading">
         <div class="heading__img">
            <img srcset="../assets/img/Background-brand.png 2x" alt="" />
         </div>
         <div class="heading__text">
            <h2>TECHNOLOGIES & HARDWARE</h2>
            <p>USED BY HYDRA VR.</p>
            <div class="btn">
               <img srcset="../assets/img/Arrow-brand-bottom.png 2x" alt="" />
            </div>
         </div>
      </div>
      <nav class="list-brand">
         <div class="icon-arrow">
            <img srcset="../assets/img/Arrow-brand-left.png 2x" alt="" />
         </div>
         <ul class="list">
            <li>
               <a href="#"
                  ><img srcset="../assets/img/Brand1.png 2x" alt=""
               /></a>
            </li>
            <li>
               <a href="#"
                  ><img srcset="../assets/img/Brand2.png 2x" alt=""
               /></a>
            </li>
            <li>
               <a href="#"
                  ><img srcset="../assets/img/Brand3.png 2x" alt=""
               /></a>
            </li>
            <li>
               <a href="#"
                  ><img srcset="../assets/img/Brand4.png 2x" alt=""
               /></a>
            </li>
         </ul>
         <div class="icon-arrow">
            <img srcset="../assets/img/Arrow-brand-right.png 2x" alt="" />
         </div>
      </nav>
   </section>
</template>
<script>
export default {
   name: 'BarndView',
   props: {
      //
   },
};
</script>
<style scoped>
.container {
   margin-bottom: 70px;
}
.heading {
   position: relative;
}
.heading__img {
   text-align: center;
}
.heading__text {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}
.heading__text h2 {
   color: var(--color-white);
   font-weight: 700;
   font-size: 38px;
   margin-bottom: 10px;
}
.heading__text p {
   color: var(--color-white);
   text-align: center;
   font-weight: 300;
   font-size: 36px;
}
.btn {
   position: absolute;
   top: 160%;
   left: 50%;
   transform: translateX(-50%);
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100px;
   height: 100px;
   background: linear-gradient(to right, #c0b7e8, #8176af);
   border: 15px solid #000;
   border-radius: 100rem;
   margin: auto;
}
.btn:hover {
   opacity: 0.8;
   cursor: pointer;
}

.list-brand {
   display: flex;
   align-items: center;
   justify-content: space-around;
}
.list {
   display: flex;
   align-items: center;
   justify-content: space-between;
   list-style: none;
}
.list a {
   text-decoration: none;
}
.icon-arrow {
   display: none;
}
@media (max-width: 600px) {
   .heading__img img {
      width: 100%;
      height: 165px;
   }
   .heading__text h2 {
      text-align: center;
      font-size: 15px;
   }
   .heading__text p {
      text-align: center;
      font-size: 14px;
   }
   .btn {
      display: none;
   }
   .list {
      flex-direction: column;
   }
   .list li:nth-child(2),
   .list li:nth-child(3),
   .list li:nth-child(4) {
      display: none;
   }
   .icon-arrow {
      border-radius: 100rem;
      display: block;
      background: linear-gradient(to right, #c0b7e8, #8176af);
   }
   .icon-arrow:hover {
      opacity: 0.8;
      cursor: pointer;
   }
}
@media (max-width: 510px) {
   .heading__img img {
      width: 100%;
      height: 165px;
   }

   .btn {
      display: none;
   }
}
</style>
