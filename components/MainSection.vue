<template>
<div id="carouselExampleIndicators" class="carousel slide relative h-60 md:h-80 overflow-hidden" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden section-outline googleblue">
    <div class="carousel-item active float-left w-full">
        <div class="googleblue h-60 md:h-80 flex items-center justify-center outline-btm">
        <div>
            <div class="flex justify-center">
            <div class="flex items-center">
                <img class="w-11 md:w-14 mr-2.5" src="~/static/geek.png" alt="">
                <div class="text-3xl md:text-5xl font-semibold text-white text-center">Peniel Cho</div>
            </div>
            </div>
            <div class="text-lg md:text-xl text-white font-medium text-center pt-1.5 md:pt-3"> <span class="opacity-50 pr-1">Your Nearest Developer Advocate</span> 🥑</div>
        </div>
        </div>
    </div>
    <div class="carousel-item float-left w-full">
        <div class="googleblue h-60 md:h-80 flex items-center justify-center outline-btm">
        <div>
            <div class="flex justify-center">
            <div class="flex items-center">
                <img class="w-11 md:w-14 mr-2.5" src="~/static/geek.png" alt="">
                <div class="text-3xl md:text-5xl font-semibold text-white text-center">조용주</div>
            </div>
            </div>
            <div class="text-lg md:text-xl text-white font-medium text-center pt-1.5 md:pt-3"> <span class="opacity-50 pr-1">요로붕 바로 옆의 DR!</span> 🥑</div>
        </div>
        </div>
    </div>
    <div class="carousel-item float-left w-full">
        <div class="googleblue h-60 md:h-80 flex items-center justify-center outline-btm">
        <div>
            <div class="flex justify-center">
            <div class="flex items-center">
                <img class="w-11 md:w-14 mr-2.5" src="~/static/geek.png" alt="">
                <div class="text-3xl md:text-5xl font-semibold text-white text-center">Peniel Cho</div>
            </div>
            </div>
            <div class="text-lg md:text-xl text-white font-medium text-center pt-1.5 md:pt-3"> <span class="opacity-50 pr-1">Your Nearest Developer Advocate</span> 🥑</div>
        </div>
        </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>