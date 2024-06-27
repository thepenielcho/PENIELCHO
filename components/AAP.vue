<template>
  <div class="w-full section-border grid grid-cols-1 md:grid-cols-3">
    <div class="h-full googleyellow outline-item flex items-center justify-center">
      <div class="googletextblack px-6 py-9 md:py-16">
        <div class="text-center mb-2 text-2xl md:text-3xl font-medium">🥑 About</div>
        <div class="text-center font-medium opacity-50 keep-all">About moi, Peniel!</div>
      </div>
    </div>
    <div class="h-full googlegreen outline-item flex items-center justify-center">
      <div class="googletextblack px-6 py-9 md:py-16">
        <div class="text-center mb-2 text-2xl md:text-3xl font-medium">✍🏻 Articles</div>
        <div class="text-center font-medium opacity-50 keep-all">Articles About Tech Tips, DevRel, etc...</div>
      </div>
    </div>
    <div class="h-full googlered outline-item flex items-center justify-center">
      <div class="googletextblack px-6 py-9 md:py-16">
        <div class="text-center mb-2 text-2xl md:text-3xl font-medium">🔭 Projects</div>
        <div class="text-center font-medium opacity-50 keep-all">Tech Events, Web Development, <br class="md:hidden inline"> Data Science, etc...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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