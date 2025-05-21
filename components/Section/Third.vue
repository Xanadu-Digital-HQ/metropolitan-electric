<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col md:flex-row py-20 justify-between items-center gap-28"
      :class="container"
    >
      <div class="flex flex-1 flex-col gap-y-2.5">
        <h3
          v-motion
          :initial="{ opacity: 1, y: 20 }"
          :enter="{ opacity: 1, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="500"
          class="font-main text-[#1C6220]"
        >
          Contact Us
        </h3>
        <h1
          v-motion
          :initial="{ opacity: 1, y: 50 }"
          :enter="{ opacity: 1, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="300"
          :delay="500"
          class="font-main text-2xl lg:text-3xl text-[#113912]"
        >
          Get In Touch
        </h1>
        <p
          v-motion
          :initial="{ opacity: 1, y: 150 }"
          :enter="{ opacity: 1, y: 150 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="300"
          :delay="600"
          class="font-noto text-base lg:text-lg text-[#505050] tracking-wide"
        >
          Reach out to Metropolitan Electric today to schedule an appointment or
          inquire about our services. We are here to assist you with all your
          Electric Vehicles (EV) needs.
        </p>

        <form
          ref="form"
          method="post"
          @submit.prevent="sendEmail"
          v-motion-slide-visible-once-bottom
          :duration="400"
          :delay="600"
          class="mt-2.5"
        >
          <div class="flex flex-col gap-y-4">
            <label class="block">
              <span
                class="after:content-['*'] after:ml-0.5 after:text-red-500 after:font-black block text-[#113912] font-semibold text-sm sm:text-base"
              >
                Name
              </span>
              <input
                type="text"
                name="from_name"
                class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md text-sm md:text-base focus:ring-1"
                placeholder="Jane Smith"
                required
              />
            </label>
            <label class="block">
              <span
                class="after:content-['*'] after:ml-0.5 after:text-red-500 after:font-black block text-[#113912] font-semibold text-sm sm:text-base"
              >
                Email
              </span>
              <input
                type="email"
                name="from_email"
                class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md text-sm md:text-base focus:ring-1"
                placeholder="you@example.com"
                required
              />
            </label>
            <label class="block">
              <span
                class="after:content-['*'] after:ml-0.5 after:text-red-500 after:font-black block text-[#113912] font-semibold text-sm sm:text-base"
              >
                Phone number
              </span>
              <input
                type="number"
                name="from_number"
                class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md text-sm md:text-base focus:ring-1"
                placeholder="555-555-5555"
                required
              />
            </label>
            <label class="block">
              <span
                class="after:ml-0.5 after:text-red-500 after:font-black block text-[#113912] font-semibold text-sm sm:text-base"
              >
                Message
              </span>
              <textarea
                rows="5"
                name="message"
                class="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-green-500 block w-full rounded-md text-sm md:text-base focus:ring-1"
                placeholder="Your Message"
                required
              ></textarea>
            </label>
            <div class="flex items-start gap-2.5">
              <input
                v-model="checkBox"
                type="checkbox"
                name="checkbox"
                class="relative appearance-none border-2 checked:bg-[#1C6220] focus:outline-none focus:border-green-500 focus:ring-green-500 block w-6 h-5 before:absolute before:content-[''] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:w-1.5 before:h-2.5 before:border-r-2 before:border-b-2 before:border-white"
                id="checkbox"
                required
              />
              <label
                class="after:content-['*'] after:ml-0.5 after:text-red-500 after:font-black text-[#113912] text-xs sm:text-sm"
              >
                I allow this website to store my submission so they can respond
                to my inquiry.
              </label>
            </div>
            <span
              v-if="response"
              class="bg-green-100 text-green-950 w-full py-1 text-center"
              >{{ response }}</span
            >
            <span
              v-else-if="errorMsg"
              class="bg-red-100 text-red-950 w-full py-1 text-center"
              >{{ errorMsg }}</span
            >
            <button
              class="py-3 px-8 text-center text-sm sm:text-base bg-brand/80 hover:bg-brand cursor-pointer text-white font-semibold block transition-colors duration-200"
              type="submit"
            >
              <ArrowPathIcon
                class="animate-spin size-6 mx-auto"
                v-if="isLoading"
              />
              <span v-else>Submit</span>
            </button>
          </div>
        </form>
      </div>
      <Map />
    </div>
  </div>
</template>

<script lang="ts" setup>
import emailjs from "@emailjs/browser";
import { ArrowPathIcon } from "@heroicons/vue/20/solid";
const { container } = useTailwindConfig();

const form = ref<HTMLFormElement | null>(null);
const isLoading = ref(false);
const response = ref("");
const errorMsg = ref("");

const checkBox = ref(false);
const sendEmail = () => {
  isLoading.value = true;
  if (!checkBox.value) {
    errorMsg.value = "checkbox is not ticked";
    isLoading.value = false;
    setTimeout(() => {
      errorMsg.value = "";
    }, 3000);
  } else {
    if (form.value) {
      emailjs
        .sendForm(
          "service_nkjkddv",
          "contact_form",
          form.value,
          useRuntimeConfig().public.Emailjs
        )
        .then(
          () => {
            isLoading.value = false;
            response.value = "Email successfully sent";
            setTimeout(() => {
              response.value = "";
            }, 3000);
          },
          (error) => {
            isLoading.value = false;
            console.log(error.text);
            errorMsg.value = "Something Went Wrong, Please try again";
            setTimeout(() => {
              errorMsg.value = "";
            }, 3000);
          }
        );
    }
  }
};
</script>

<style></style>
