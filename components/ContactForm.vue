<template>
  <form
    action="https://contact.asifthewebguy.me/sendMail"
    method="POST"
    class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-1 sm:gap-x-8"
    novalidate = "ture"
    @submit.prevent="checkForm"
  >
  <!-- <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p> -->
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
      <label for="name" class="block text-sm font-medium text-gray-900"
        >Name</label
      >
      <div class="mt-1">
        <input
          id="first-name"
          type="text"
          name="name"
          autocomplete="given-name"
          class="
            py-3
            px-4
            block
            w-full
            shadow-sm
            text-gray-900
            focus:ring-blue-500 focus:border-blue-500
            border-gray-300
            rounded-md
          "
        />
      </div>
    </div>
    <div class="sm:col-span-2">
      <label for="from" class="block text-sm font-medium text-gray-900"
        >Email</label
      >
      <div class="mt-1">
        <input
          id="from"
          name="from"
          type="email"
          autocomplete="email"
          class="
            py-3
            px-4
            block
            w-full
            shadow-sm
            text-gray-900
            focus:ring-blue-500 focus:border-blue-500
            border-gray-300
            rounded-md
          "
        />
      </div>
    </div>
    <div class="sm:col-span-2">
      <div class="flex justify-between">
        <label for="phone" class="block text-sm font-medium text-gray-900"
          >Phone</label
        >
        <span id="phone-optional" class="text-sm text-gray-500">Optional</span>
      </div>
      <div class="mt-1">
        <input
          id="phone"
          type="text"
          name="phone"
          autocomplete="tel"
          class="
            py-3
            px-4
            block
            w-full
            shadow-sm
            text-gray-900
            focus:ring-blue-500 focus:border-blue-500
            border-gray-300
            rounded-md
          "
          aria-describedby="phone-optional"
        />
      </div>
    </div>
    <!-- <div class="sm:col-span-2">
              <label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
              <div class="mt-1">
                <input type="text" name="subject" id="subject" class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md">
              </div>
            </div> -->
    <div class="sm:col-span-2">
      <div class="flex justify-between">
        <label for="message" class="block text-sm font-medium text-gray-900"
          >Message</label
        >
        <span id="message-max" class="text-sm text-gray-500"
          >Max. 500 characters</span
        >
      </div>
      <div class="mt-1">
        <textarea
          id="message"
          name="message"
          rows="4"
          class="
            py-3
            px-4
            block
            w-full
            shadow-sm
            text-gray-900
            focus:ring-blue-500 focus:border-blue-500
            border border-gray-300
            rounded-md
          "
          aria-describedby="message-max"
        ></textarea>
      </div>
    </div>
    <div class="sm:col-span-2 sm:flex sm:justify-end">
      <button
        type="submit"
        class="
          mt-2
          w-full
          inline-flex
          items-center
          justify-center
          px-6
          py-3
          border border-transparent
          rounded-md
          shadow-sm
          text-base
          font-medium
          text-white
          bg-blue-600
          hover:bg-blue-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-blue-500
          sm:w-auto
        "
      >
        Submit
      </button>
    </div>
  </form>
</template>
<script>
export default {
  name: 'ContactForm',
  methods: {
      checkForm(e){
          this.errors = [];
        //   name required
          if(!this.name){
              this.errors.push('Name is required');
          }
        //   email required
          if(!this.email){
              this.errors.push('Email is required');
          }else if(!this.validEmail(this.email)){
              this.errors.push('Valid email required.');
          }
        // message required
          if(!this.message){
              this.errors.push('Message is required');
          }

        //   if no errors
        if (!this.errors.length) {
            this.$emit('submit', e);
        }
        e.preventDefault();
      },
      validEmail(email){
          // eslint-disable-next-line
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(email).toLowerCase());
      },
  }
}
</script>
