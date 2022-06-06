<template>
<div class="bg-white grid grid-cols-3 md:flex justify-between items-center border-b bordergoogleblack">
<div class="px-6 md:hidden block">
        <div class="flex justify-start">
            <div>
            <div class="dropdown relative font-medium">
                <a class="dropdown-toggle flex items-center whitespace-nowrap" href="" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                <Menu class="h-6 w-6" />
                </a>
                <ul class="full-border text-sm dropdown-menu absolute min-w-max hidden bg-white z-50 float-left py-2 rounded-lg text-left m-0 bg-clip-padding" aria-labelledby="dropdownMenuButton2">
                <!-- <li>
                    <nuxt-link class="dropdown-item px-4 py-2 block w-full" to="/about">About</nuxt-link>
                </li> -->
                <li>
                    <nuxt-link class="dropdown-item px-4 py-2 block w-full" to="/articles">Tech Articles</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="dropdown-item px-4 py-2 block w-full" to="/notes">Non-Tech Articles</nuxt-link>
                </li>
                <!-- <li>
                    <nuxt-link class="dropdown-item px-4 py-2 block w-full" to="/projects">Projects</nuxt-link>
                </li> -->
                </ul>
            </div>
            </div>
        </div>
</div>
<div class="flex items-center justify-center">
    <nuxt-link class="px-6 py-2 md:py-3" to="/">
        <img class="w-9 md:w-11" src="~/static/geek.png" alt="">
    </nuxt-link>
    <div class="items-center space-x-3 font-medium text-sm md:text-base hidden md:flex">
        <!-- <div>
            <nuxt-link to="/about">About</nuxt-link>    
        </div> -->
        <div class="justify-center">
            <div>
            <div class="dropdown relative">
                <a class="dropdown-toggle flex items-center whitespace-nowrap" href="" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Tech Articles <Down />
                </a>
                <ul class="full-border text-sm dropdown-menu absolute min-w-max hidden bg-white z-50 float-left py-2 rounded-lg text-left m-0 bg-clip-padding" aria-labelledby="dropdownMenuButton2">
                <li>
                    <nuxt-link class="dropdown-item px-4 py-2 block w-full" to="/articles">All Articles</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="dropdown-item px-4 py-2 block w-full" to="/category">Category</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="dropdown-item px-4 py-2 block w-full" :to="{path: '/articles/featured'}">Featured Articles</nuxt-link>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div class="justify-center">
            <div>
            <div class="dropdown relative">
                <a class="dropdown-toggle flex items-center whitespace-nowrap" href="" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Non-Tech Articles <Down />
                </a>
                <ul class="full-border text-sm dropdown-menu absolute min-w-max hidden bg-white z-50 float-left py-2 rounded-lg text-left m-0 bg-clip-padding" aria-labelledby="dropdownMenuButton2">
                <li>
                    <nuxt-link class="dropdown-item px-4 py-2 block w-full" to="/notes">All Articles</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="dropdown-item px-4 py-2 block w-full" to="/notes/tags">Tags</nuxt-link>
                </li>
                <li>
                    <nuxt-link class="dropdown-item px-4 py-2 block w-full" :to="{path: '/notes/featured'}">Featured Articles</nuxt-link>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <!-- <div>
            <nuxt-link to="/projects">Projects</nuxt-link>
        </div> -->
    </div>
</div>

<div class="p-6 flex justify-end space-x-2 md:space-x-3">
    <a href="https://github.com/thepenielcho" target="blank">
        <GithubLogo class="h-5 md:h-7" />
    </a>
    <a href="https://www.linkedin.com/in/peniel-cho/" target="blank">
        <LinkedinLogo class="h-5 md:h-7" />
    </a>
</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
a:focus {
    outline: none;
}
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

.no-border {
    border-width: 0px !important;
    box-shadow: 0 0 #0000 !important;
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

.section-border {
    border-bottom-width: 2px;
    border-color: rgba(17, 24, 39)
}

.full-border {
    border-width: 2px;
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
.outline-btm {
    border-bottom: 2px solid rgba(17, 24, 39);
    margin-bottom: -2px;
}
</style>