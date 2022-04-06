<template>
  <section class="pt-4 mb-4 portfolio">
    <div class="flex flex-col items-start justify-center section-header">
      <h4 class="text-3xl">Work</h4>
      <span class="subtitle">Projects I have worked on for clients</span>
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
</template>

<script>
export default {
  name: 'WorkSection',
}
</script>
