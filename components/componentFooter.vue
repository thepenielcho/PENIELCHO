<template>
    <footer class="w-full googlegrey section-border outline-top">
        <div class="max-w-7xl px-7 md:px-14 pt-8 md:pt-10 pb-6 mx-auto googletextblack">
            <div class="md:flex place-content-between">
                <div class="block mb-6 md:mb-0">
                    <img class="w-10 md:w-12 md:mr-2.5 mx-auto" src="~/static/geek.png" alt="">
                </div>
                <div class="grid grid-cols-2 md:flex md:space-x-10">
                    <div>
                        <div class="text-base md:text-lg font-medium">Socials</div>
                        <ul class="text-sm md:text-base text-zinc-500 mt-2.5 space-y-1.5">
                            <a class="block hover:underline" href="https://www.linkedin.com/in/penielcho">Linkedin</a>
                            <a class="block hover:underline" href="https://github.com/thepenielcho">GitHub</a>
                            <a class="block hover:underline" href="https://twitter.com/penielcho">Twitter</a>
                        </ul>
                    </div>
                    <div>
                        <div class="text-base md:text-lg font-medium">Contact</div>
                        <ul class="text-sm md:text-base text-zinc-500 mt-2.5 space-y-1.5">
                            <a class="block hover:underline" href="mailto:mail@penielcho.com">Email</a>
                            <a class="block hover:underline" href="https://www.linkedin.com/in/penielcho">Linkedin</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-7xl px-7 md:px-14 py-5 h-24 mx-auto googletextblack">
            <div class="flex place-content-between">
                <div class="text-xs md:text-sm">
                    Peniel Cho <span class="text-zinc-500">© 2021</span> 
                </div>
                <div class="text-xs md:text-sm">
                    <a href="https://nuxtjs.org/">⛰</a> on <a href="https://m.do.co/c/110fd4eb9dac">DigitalOcean</a>, 🚀 with <a href="https://www.netlify.com/">Netlify</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.bg-img {
        background-position: center;
        background-repeat:  no-repeat;
        /* background-attachment: fixed; */
        background-size:  cover;
        background-color: #000000;
 }
.section {
  position: relative;
}
.inner {
  box-sizing: border-box;
  position: relative;
}
.keep-all {
  word-break: keep-all;
}
.lead-box {
    border-radius: 70%;
    overflow: hidden;
}
.square-box {
    overflow: hidden;
}
.profile {
    object-fit: cover;
    /* overflow: hidden; */
}

.ticker-wrapper {
    display: flex;
    position: relative;
    overflow: hidden
}

.ticker-item {
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-color: rgba(17, 24, 39)
}

.featured-item:hover {
    outline: 2px solid rgba(17, 24, 39);
}

.outline-item {
    outline: 2px solid rgba(17, 24, 39);
}

.outline-btm {
    border-bottom: 2px solid rgba(17, 24, 39);
    margin-bottom: -2px;
}

.outline-top {
    border-top: 2px solid rgba(17, 24, 39);
    margin-top: -2px;
}

.section-border {
    border-bottom-width: 2px;
    border-color: rgba(17, 24, 39)
}

.section-outline {
    outline: 0 0 2 0px;
    outline-color: rgba(17, 24, 39)
}

.dark .ticker-item {
    border-color: rgba(243, 244, 246)
}

.ticker-item {
    padding: .5rem;
    font-weight: 500
}

@media (min-width:768px) {
    .ticker-item {
        padding: 1rem
    }
}

@media (min-width:880px) {
    .featured-item:hover {
        padding: 1rem
    }
}

.ticker-item {
    white-space: nowrap
}

.bordergoogleblack{
    border-bottom-width: 2px;
    border-color: rgba(17, 24, 39)
}

.googleblue{
  background-color: #538FF7;
}
.googleyellow{
  background-color: #F6BD41;
}
.googlered{
  background-color: #EC5E4F;
}
.googlegreen{
  background-color: #65B867;
}
.googlegrey{
  background-color: #D2D5DB;
}
.googlelightgrey{
  background-color: #F1F3F4;
}
.googleblack{
  background-color: #202124;
}
.googletextblack{
  color: #202124;
}
.googletextblue{
  color: #1A73E8;
}
.nametext {
    color: #79c0ff;
    background: linear-gradient(92.7deg,#56d364 -1.37%,#79c0ff 78.71%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
