<template>
  <section
    :class="[
      overlay
        ? 'js-home-closing absolute inset-0 overflow-hidden bg-[#0f171d] text-white'
        : 'js-home-closing relative overflow-hidden bg-[#0f171d] text-white',
    ]"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(129,173,214,0.18),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))]"
    />
    <img
      src="/car_image.png"
      alt=""
      class="js-home-closing-car pointer-events-none absolute left-0 top-5 hidden w-2xl max-w-[46vw] opacity-18 blur-[0.5px] lg:block"
    />

    <div
      :class="
        overlay
          ? 'js-home-closing-scroll h-full overflow-hidden'
          : 'js-home-closing-scroll min-h-screen overflow-hidden'
      "
    >
      <div class="js-home-closing-track mt-10 flex min-h-full flex-col pt-10 sm:pt-16 lg:pt-20 md:mt-0 will-change-transform">
        <div :class="container" class="js-home-closing-content flex-1 py-12 sm:py-16 lg:py-20">
          <div class="grid gap-8 lg:grid-cols-[0.98fr_1.35fr]">
          <div
            class="js-home-closing-form relative overflow-hidden rounded-4xl border border-white/12 bg-[#0b1217]/78 p-6 shadow-[0_24px_64px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-8"
          >
            <div
              class="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#7397b5]/14 blur-3xl"
            />

            <p
              class="font-opensans text-xs font-semibold uppercase tracking-[0.22em] text-white/58"
            >
              Contact Us
            </p>
            <h2
              class="js-home-closing-heading mt-4 max-w-sm text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl"
            >
              Reach the team behind Africa's next electric movement.
            </h2>
            <p class="mt-2 max-w-md font-poppins text-sm md:leading-7 text-white/72 sm:text-base">
              Share your project, fleet plan, or partnership enquiry and we will get back to you
              with the right next step.
            </p>

            <form ref="form" method="post" @submit.prevent="sendEmail" class="mt-8 space-y-4">
              <div class="grid gap-4 sm:grid-cols-2">
                <label class="block">
                  <span
                    class="mb-2 block font-poppins text-xs font-medium uppercase tracking-[0.18em] text-white/55"
                    >Name</span
                  >
                  <input
                    type="text"
                    name="from_name"
                    class="w-full rounded-2xl border border-white/12 bg-white/10 px-4 py-3 font-poppins text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/25"
                    placeholder="Jane Smith"
                    required
                  />
                </label>
                <label class="block">
                  <span
                    class="mb-2 block font-poppins text-xs font-medium uppercase tracking-[0.18em] text-white/55"
                    >Email</span
                  >
                  <input
                    type="email"
                    name="from_email"
                    class="w-full rounded-2xl border border-white/12 bg-white/10 px-4 py-3 font-poppins text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/25"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label class="block">
                <span
                  class="mb-2 block font-poppins text-xs font-medium uppercase tracking-[0.18em] text-white/55"
                  >Message</span
                >
                <textarea
                  rows="4"
                  name="message"
                  class="w-full resize-none rounded-3xl border border-white/12 bg-white/10 px-4 py-3 font-poppins text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/25"
                  placeholder="Tell us a little about your request."
                  required
                />
              </label>

              <div class="flex items-start gap-3">
                <input
                  id="closing-consent"
                  v-model="checkBox"
                  type="checkbox"
                  class="mt-1 h-4 w-4 rounded-md border-white/20 bg-white/8 accent-brand focus:ring-white/30"
                  required
                />
                <label for="closing-consent" class="font-poppins text-xs leading-6 text-white/60">
                  I allow this website to store my submission so Metropolitan Electric can respond
                  to my enquiry.
                </label>
              </div>

              <p
                v-if="response"
                class="rounded-xl bg-green-500/15 px-4 py-3 font-poppins text-sm text-green-200"
              >
                {{ response }}
              </p>
              <p
                v-else-if="errorMsg"
                class="rounded-xl bg-red-500/15 px-4 py-3 font-poppins text-sm text-red-200"
              >
                {{ errorMsg }}
              </p>

              <button
                type="submit"
                class="inline-flex min-w-40 items-center justify-center rounded-full bg-white px-6 py-3 font-sora text-sm font-semibold text-brand transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/92"
              >
                <ArrowPathIcon v-if="isLoading" class="h-5 w-5 animate-spin" />
                <span v-else>Send Enquiry</span>
              </button>
            </form>
          </div>

          <div
            class="relative overflow-hidden rounded-4xl border border-white/10 bg-[#14202a] shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
          >
            <div
              class="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]"
            />
            <iframe
              class="js-home-closing-map h-96 w-full sm:h-112 lg:h-full lg:min-h-136"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.730220431644!2d3.433507975679751!3d6.428694524256389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf535ed0cc7ab%3A0x4601420b48fe9092!2s77%20Sinari%20Daranijo%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1720609776367!5m2!1sen!2sng"
              style="border: 0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        </div>

        <div class="mt-auto pt-10 lg:pt-14">
          <Footer class="js-home-closing-footer min-h-56 border-t border-white/8 lg:min-h-64" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import emailjs from '@emailjs/browser';
import { ArrowPathIcon } from '@heroicons/vue/20/solid';

withDefaults(
  defineProps<{
    overlay?: boolean;
  }>(),
  {
    overlay: false,
  },
);

const { container } = useTailwindConfig();

const form = ref<HTMLFormElement | null>(null);
const isLoading = ref(false);
const response = ref('');
const errorMsg = ref('');
const checkBox = ref(false);

const sendEmail = () => {
  isLoading.value = true;

  if (!checkBox.value) {
    errorMsg.value = 'Consent is required';
    isLoading.value = false;
    setTimeout(() => {
      errorMsg.value = '';
    }, 3000);
    return;
  }

  if (!form.value) {
    isLoading.value = false;
    return;
  }

  emailjs
    .sendForm('service_nkjkddv', 'contact_form', form.value, useRuntimeConfig().public.Emailjs)
    .then(
      () => {
        isLoading.value = false;
        response.value = 'Enquiry sent successfully';
        form.value?.reset();
        checkBox.value = false;
        setTimeout(() => {
          response.value = '';
        }, 3000);
      },
      () => {
        isLoading.value = false;
        errorMsg.value = 'Something went wrong, please try again';
        setTimeout(() => {
          errorMsg.value = '';
        }, 3000);
      },
    );
};
</script>
