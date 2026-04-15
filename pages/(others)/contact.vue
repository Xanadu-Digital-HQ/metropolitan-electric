<template>
  <div class="min-h-screen bg-[#fbfdfb] text-brand">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(113,159,99,0.14),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(16,32,39,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]"
    />
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"
    />

    <section
      class="mx-auto flex max-w-7xl flex-col gap-12 px-5 pb-16 pt-34 sm:px-8 lg:px-12 lg:pb-24 lg:pt-40"
    >
      <div class="page-reveal reveal-delay-1 space-y-8">
        <div class="space-y-6">
          <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
            Contact Metropolitan Electric
          </p>
          <h1
            class="max-w-6xl font-elemental text-4xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl"
          >
            Let's build the future of electric mobility.
          </h1>
          <p class="max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
            Reach out for fleet solutions, charging infrastructure, partnerships, and EV support
            services across Africa.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-3 lg:max-w-3xl lg:ml-auto">
          <div
            class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Response</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">Direct</p>
          </div>
          <div
            class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Focus</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">EV Systems</p>
          </div>
          <div
            class="rounded-[1.75rem] border border-brand/8 bg-brand p-5 text-white shadow-[0_24px_80px_rgba(16,32,39,0.16)]"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/50">Location</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">Lagos</p>
          </div>
        </div>
      </div>

      <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <aside class="flex flex-col gap-6">
          <div
            class="page-reveal reveal-delay-2 rounded-4xl border border-[#d8dfd5] bg-brand p-6 text-white shadow-[0_24px_80px_rgba(16,32,39,0.12)] sm:p-8"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/45">Direct Lines</p>
            <div class="mt-6 space-y-5">
              <a
                href="tel:+2348126630682"
                class="block rounded-[1.35rem] border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:bg-white/8"
              >
                <p class="text-[11px] uppercase tracking-[0.24em] text-white/40">Phone</p>
                <p class="mt-2 text-lg font-medium text-white/90">+234 812 663 0682</p>
              </a>
              <a
                href="mailto:ev@metropolitanelectricng.com"
                class="block rounded-[1.35rem] border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:bg-white/8"
              >
                <p class="text-[11px] uppercase tracking-[0.24em] text-white/40">Email</p>
                <p class="mt-2 break-all text-lg font-medium text-white/90">
                  ev@metropolitanelectricng.com
                </p>
              </a>
              <a
                href="https://maps.app.goo.gl/uqnb6dCGvyMbGXiC9"
                target="_blank"
                rel="noreferrer"
                class="block rounded-[1.35rem] border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:bg-white/8"
              >
                <p class="text-[11px] uppercase tracking-[0.24em] text-white/40">Office</p>
                <p class="mt-2 text-base leading-7 text-white/84">
                  Metropolitan Electric Limited, 77 Sinari Daranijo St, Victoria Island, Lagos
                  106104, Lagos
                </p>
              </a>
            </div>
          </div>

          <div
            class="page-reveal reveal-delay-3 rounded-4xl border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm sm:p-8"
          >
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
              Best For
            </p>
            <div class="mt-5 flex flex-wrap gap-3">
              <span
                v-for="item in enquiryTopics"
                :key="item"
                class="rounded-full border border-[#d8dfd5] bg-[#fbfdfb] px-4 py-3 text-sm text-[#22343b]"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </aside>

        <div class="grid gap-8">
          <section
            class="page-reveal reveal-delay-3 rounded-4xl border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_22px_70px_rgba(16,32,39,0.07)] backdrop-blur-sm sm:p-8"
          >
            <div class="flex flex-col gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
                Send Enquiry
              </p>
              <h2
                class="font-opensans text-3xl font-semibold tracking-[-0.045em] text-brand sm:text-4xl"
              >
                Tell us what you are building or planning.
              </h2>
              <p class="max-w-2xl text-sm leading-7 text-[#41555d] sm:text-base">
                The more context you share, the easier it is to route you to the right EV solution.
              </p>
            </div>

            <form ref="form" method="post" @submit.prevent="sendEmail" class="mt-8 space-y-5">
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="block">
                  <span
                    class="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6b8177]"
                    >Name</span
                  >
                  <input
                    type="text"
                    name="from_name"
                    class="w-full rounded-[1.15rem] border border-[#d9e1d7] bg-[#fdfefd] px-4 py-3 text-sm text-brand placeholder:text-[#7a8d84] focus:outline-none focus:ring-2 focus:ring-brand/15"
                    placeholder="Jane Smith"
                    required
                  />
                </label>

                <label class="block">
                  <span
                    class="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6b8177]"
                    >Email</span
                  >
                  <input
                    type="email"
                    name="from_email"
                    class="w-full rounded-[1.15rem] border border-[#d9e1d7] bg-[#fdfefd] px-4 py-3 text-sm text-brand placeholder:text-[#7a8d84] focus:outline-none focus:ring-2 focus:ring-brand/15"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label class="block">
                <span
                  class="mb-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6b8177]"
                  >Message</span
                >
                <textarea
                  rows="6"
                  name="message"
                  class="w-full resize-none rounded-3xl border border-[#d9e1d7] bg-[#fdfefd] px-4 py-3 text-sm text-brand placeholder:text-[#7a8d84] focus:outline-none focus:ring-2 focus:ring-brand/15"
                  placeholder="Share your fleet size, infrastructure goal, city, partnership idea, or operational challenge."
                  required
                />
              </label>

              <div class="flex items-start gap-3 rounded-[1.2rem] bg-[#fbfdfb] p-4">
                <input
                  id="contact-consent"
                  v-model="checkBox"
                  type="checkbox"
                  class="mt-1 h-4 w-4 rounded border-[#cad4c7] accent-brand"
                  required
                />
                <label for="contact-consent" class="text-sm leading-7 text-[#41555d]">
                  I allow Metropolitan Electric to store this enquiry and contact me about the
                  request.
                </label>
              </div>

              <p
                v-if="response"
                class="rounded-2xl bg-green-500/10 px-4 py-3 text-sm text-green-900"
              >
                {{ response }}
              </p>
              <p
                v-else-if="errorMsg"
                class="rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-900"
              >
                {{ errorMsg }}
              </p>

              <button
                type="submit"
                class="inline-flex min-w-44 items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                <ArrowPathIcon v-if="isLoading" class="h-5 w-5 animate-spin" />
                <span v-else>Send Enquiry</span>
              </button>
            </form>
          </section>
        </div>
        <section
          class="page-reveal reveal-delay-4 overflow-hidden col-span-full rounded-4xl border border-[#d8dfd5] bg-white/92 shadow-[0_22px_70px_rgba(16,32,39,0.07)] backdrop-blur-sm w-full"
        >
          <div class="border-b border-[#e2e9df] px-6 py-5 sm:px-8">
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
              Office Map
            </p>
            <h2 class="mt-2 font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
              Victoria Island, Lagos
            </h2>
          </div>
          <iframe
            class="h-105 w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.730220431644!2d3.433507975679751!3d6.428694524256389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf535ed0cc7ab%3A0x4601420b48fe9092!2s77%20Sinari%20Daranijo%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1720609776367!5m2!1sen!2sng"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </section>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import emailjs from '@emailjs/browser';
import { ArrowPathIcon } from '@heroicons/vue/20/solid';

useSeoMeta({
  title: 'Contact Metropolitan Electric',
  ogTitle: 'Contact Metropolitan Electric',
  description:
    'Reach Metropolitan Electric for EV fleets, charging infrastructure, mobility programmes, partnerships and electric vehicle support.',
  ogDescription:
    'Reach Metropolitan Electric for EV fleets, charging infrastructure, mobility programmes, partnerships and electric vehicle support.',
  ogImage: 'https://metropolitanelectricng.com/logo.svg',
  twitterCard: 'summary_large_image',
});

const enquiryTopics = [
  'Corporate Fleets',
  'Charging Infrastructure',
  'Public Mobility Programmes',
  'EV Maintenance',
  'Assembly Partnerships',
  'Ride-Hailing Platforms',
] as const;

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
