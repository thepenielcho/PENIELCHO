<template>
    <div>
        <div class="max-w-3xl mx-auto px-6 googletextblack font-medium text-2xl md:text-3xl pt-8 md:pt-12 pb-6 md:pb-8">
            Pages
        </div>
        <div class="fadeinupcom0 grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-4 px-6 pb-24 text-lg md:text-xl font-medium googletextblack">
            <nuxt-link to="/articles" class="c c1 h-36 md:h-40 rounded-xl flex items-center justify-center ">
                <div>
                    <div class="text-center pb-0.5">Tech Articles</div>  
                    <div class="text-center font-normal opacity-75 text-sm">Tech Articles like TIL, Tips, Essays, etc! 📂</div> 
                </div>
            </nuxt-link>
            <nuxt-link to="/notes" class="c c2 h-36 md:h-40 rounded-xl flex items-center justify-center ">
                <div>
                    <div class="text-center pb-0.5">Non-Tech Articles</div>  
                    <div class="text-center font-normal opacity-75 text-sm">Articles About Sociology, Economy, etc! 📂</div> 
                </div>
            </nuxt-link>
            <nuxt-link to="/" class="c c3 h-36 md:h-40 col-span-1 md:col-span-2 rounded-xl flex items-center justify-center ">
                <div>
                    <div class="text-center pb-0.5">About</div>  
                    <div class="text-center font-normal opacity-75 text-sm">Soon will be updated! 😎</div> 
                </div>
            </nuxt-link>
            <nuxt-link to="/" class="c c4 h-36 md:h-40 rounded-xl flex items-center justify-center ">
                <div>
                    <div class="text-center pb-0.5">Projects</div>  
                    <div class="text-center font-normal opacity-75 text-sm">Soon will be updated! 😎</div> 
                </div>
            </nuxt-link>
            <nuxt-link to="/" class="c c5 h-36 md:h-40 rounded-xl flex items-center justify-center ">
                <div>
                    <div class="text-center pb-0.5">Resume</div>  
                    <div class="text-center font-normal opacity-75 text-sm">Soon will be updated! 😎</div> 
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.c{
    background-color: #F1F3F4;
    filter: drop-shadow(0 5px 6px rgb(0 0 0 / 0.04)) drop-shadow(0 5px 6px rgb(0 0 0 / 0.03));
}
.c1:hover{
    background-color: #F6BD41;
    transition-duration: 150ms;
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}
.c2:hover{
    background-color: #65B867;
    transition-duration: 150ms;
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}
.c3:hover{
    background-color: #538FF7;
    transition-duration: 150ms;
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}
.c4:hover{
    background-color: #EC5E4F;
    transition-duration: 150ms;
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}
.c5:hover{
    background-color: #D2D5DB;
    transition-duration: 150ms;
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}
.fadeinupcom0 {
  animation: fadeinup0 0.55s ease-out forwards;
}

@keyframes fadeinup0 {
  0% {
    opacity: 0;
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
  }
  100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
  }
}
</style>