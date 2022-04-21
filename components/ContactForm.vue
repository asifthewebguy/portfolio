<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      action="https://contact.asifthewebguy.me/sendMail"
      method="POST"
      class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-1 sm:gap-x-8"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <input
        type="hidden"
        name="redirect"
        value="https://portfolio.asifthewebguy.me/contact/"
      />
      <input
        type="hidden"
        name="subject"
        value="You have got a mail From Server"
      />
      <input type="hidden" name="to" value="asifthewebguy@gmail.com" />
      <input type="hidden" name="to_name" value="Asif Chowdhury" />
      <div class="sm:col-span-2">
        <ValidationProvider
          v-slot="{ errors }"
          name="name"
          rules="required|alpha_spaces"
          immediate
        >
          <div class="flex justify-between">
            <label for="name" class="block text-sm font-medium text-gray-900"
              >Name</label
            >
            <span id="phone-optional" class="text-sm text-gray-500">{{
              errors[0]
            }}</span>
          </div>

          <div class="mt-1">
            <input
              id="name"
              v-model="formData.name"
              type="text"
              name="name"
              autocomplete="given-name"
              class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            />
          </div>
        </ValidationProvider>
      </div>
      <div class="sm:col-span-2">
        <ValidationProvider
          v-slot="{ errors }"
          name="from"
          rules="required|email"
          immediate
        >
          <div class="flex justify-between">
            <label for="from" class="block text-sm font-medium text-gray-900"
              >Email</label
            >
            <span id="phone-optional" class="text-sm text-gray-500">{{
              errors[errors.length - 1]
            }}</span>
          </div>

          <div class="mt-1">
            <input
              id="from"
              v-model="formData.from"
              name="from"
              type="email"
              autocomplete="email"
              class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
            />
          </div>
        </ValidationProvider>
      </div>
      <div class="sm:col-span-2">
        <ValidationProvider
          v-slot="{ errors }"
          name="phone"
          rules="phone|max:11|min:10"
          immediate
        >
          <div class="flex justify-between">
            <label for="phone" class="block text-sm font-medium text-gray-900"
              >Phone</label
            >
            <span id="phone-optional" class="text-sm text-gray-500"
              >Optional</span
            >
            <span
              v-if="errors[0]"
              id="phone-optional"
              class="text-sm text-gray-500"
              >{{ errors[0] }}</span
            >
          </div>
          <div class="mt-1">
            <input
              id="phone"
              v-model="formData.phone"
              type="text"
              name="phone"
              autocomplete="tel"
              class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
              aria-describedby="phone-optional"
              maxlength="11"
            />
          </div>
        </ValidationProvider>
      </div>
      <div class="sm:col-span-2">
        <ValidationProvider
          v-slot="{ errors }"
          name="message"
          rules="required"
          immediate
        >
          <div class="flex justify-between">
            <label for="message" class="block text-sm font-medium text-gray-900"
              >Message</label
            >
            <span id="message-max" class="text-sm text-gray-500"
              >Max. 500 characters</span
            >
            <span
              v-if="errors[0]"
              id="message-optional"
              class="text-sm text-gray-500"
              >{{ errors[0] }}</span
            >
          </div>
          <div class="mt-1">
            <textarea
              id="message"
              v-model="formData.message"
              name="message"
              rows="4"
              class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
              aria-describedby="message-max"
              maxlength="500"
            ></textarea>
          </div>
        </ValidationProvider>
      </div>
      <div class="sm:col-span-2 sm:flex sm:justify-end">
        <button
          type="submit"
          class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'ContactForm',
  components: { ValidationObserver, ValidationProvider },
  data: () => ({
    formData: {
      redirect: 'https://portfolio.asifthewebguy.me/contact/',
      subject: 'You have got a mail From Server',
      to: 'asif.aumi@gmail.com',
      to_name: 'Asif Chowdhury',
      name: '',
      from: '',
      phone: '',
      message: '',
    },
  }),
  methods: {
    //   onsubmit send fromdata to url
    onSubmit() {
      // fetch  with cors post request response and redirect to contact page
      fetch('https://contact.asifthewebguy.me/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      })
        .then((response) => {
          if (response.ok) {
            window.location.href = this.formData.redirect
          }
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    },
  },
}
</script>
