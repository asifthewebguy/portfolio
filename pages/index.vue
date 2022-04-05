<template>
  <div class="container grid grid-cols-1 mx-auto divide-y-2 sm:mx-0 md:w-md">
    <section
      class="flex justify-between sm:justify-center sm:flex-col-reverse intro"
    >
      <div class="text">
        <h2 class="text-5xl sm:text-center">Asif Chowdhury</h2>
        <span class="text-3xl sm:text-center"
          >Full Stack Web Developer & UI/UX Designer</span
        >
        <div class="mt-4 text-xl">
          <p class="mb-4">
            I am passionate about creating products which are easy to use and
            solves problem for millions of people if not more.
          </p>
          <p class="mb-4">
            Technology should make our lives easy, if it doesn't help us or
            makes our lives easy, its not good technology. My mission is, Make
            technology great again.
          </p>
        </div>
      </div>
      <div class="justify-center img sm:flex sm:">
        <img
          src="https://avatars.githubusercontent.com/u/78401115?v=4"
          alt="Md Asif Ullah Chowdhury"
        />
      </div>
    </section>
    <section class="pt-4 mb-4 portfolio">
      <div class="flex flex-col items-center justify-center section-header">
        <h4 class="text-3xl">Work</h4>
        <span class="subtitle">Projects for Clients</span>
      </div>
      <div
        class="grid grid-cols-3 gap-4 sm:gap-2 md:gap-2 sm:grid-cols-1 md:grid-cols-2 portfolio-grid sm:justify-center"
      >
        <div
          class="transition duration-300 rounded-lg shadow-xl p-item overflow-clip hover:shadow-2xl hover:scale-105"
        >
          <figure>
            <img
              src="~/assets/portfolio-items/bazar24.jpeg"
              alt="Bazar24.com.bd"
            />
            <figcaption class="text-lg text-center text-blue-700">
              eCommerce Website
            </figcaption>
          </figure>
        </div>
        <div
          class="transition duration-300 rounded-lg shadow-xl p-item overflow-clip hover:shadow-2xl hover:scale-105"
        >
          <figure>
            <img
              src="~/assets/portfolio-items/vpgc.jpeg"
              alt="Vorer Pata Group"
            />
            <figcaption class="text-lg text-center text-blue-700">
              Corporate Website
            </figcaption>
          </figure>
        </div>
        <div
          class="transition duration-300 rounded-lg shadow-xl p-item overflow-clip hover:shadow-2xl hover:scale-105"
        >
          <figure>
            <img
              src="~/assets/portfolio-items/rupantar.jpeg"
              alt="Rupantar Design & Development"
            />
            <figcaption class="text-lg text-center text-blue-700">
              Real Estate Website
            </figcaption>
          </figure>
        </div>
        <div
          class="transition duration-300 rounded-lg shadow-xl p-item overflow-clip hover:shadow-2xl hover:scale-105"
        >
          <figure>
            <img
              src="~/assets/portfolio-items/ibcci.jpeg"
              alt="Iran-BD Chamber of Commerce & Industry"
            />
            <figcaption class="text-lg text-center text-blue-700">
              Corporate Website
            </figcaption>
          </figure>
        </div>
        <div
          class="transition duration-300 rounded-lg shadow-xl p-item overflow-clip hover:shadow-2xl hover:scale-105"
        >
          <figure>
            <img
              src="~/assets/portfolio-items/just10-dhaka.png"
              alt="Iran-BD Chamber of Commerce & Industry"
            />
            <figcaption class="text-lg text-center text-blue-700">
              Corporate Website
            </figcaption>
          </figure>
        </div>
        <div
          class="transition duration-300 rounded-lg shadow-xl p-item overflow-clip hover:shadow-2xl hover:scale-105"
        >
          <figure>
            <img
              src="~/assets/portfolio-items/dr-kazierteza-hasan.png"
              alt="Iran-BD Chamber of Commerce & Industry"
            />
            <figcaption class="text-lg text-center text-blue-700">
              Portfolio Website
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
