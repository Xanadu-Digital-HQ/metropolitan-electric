<script lang="ts" setup>
const { container } = useTailwindConfig();
const absoluteUrl = useAbsoluteUrl();

useSeoMeta({
  title: 'Privacy Policy | Metropolitan Electric',
  ogTitle: 'Privacy Policy | Metropolitan Electric',
  description:
    'How Metropolitan Electric collects, uses, stores, and protects enquiry and website information.',
  ogDescription:
    'How Metropolitan Electric collects, uses, stores, and protects enquiry and website information.',
  ogImage: absoluteUrl('/og/ogImage.png'),
  twitterCard: 'summary_large_image',
});

const sections = [
  {
    title: 'Information We Collect',
    body: 'We collect information you submit through the website, including your name, email address, message, and any business or fleet details you choose to share. We may also receive basic technical information such as browser type, device details, pages visited, and referral source through analytics tools.',
  },
  {
    title: 'How We Use Information',
    body: 'We use submitted information to respond to enquiries, route requests to the right team, provide EV solution support, improve our website, and maintain records of business conversations. We do not sell personal information.',
  },
  {
    title: 'Storage and Protection',
    body: 'We keep enquiry records only for as long as needed for the purpose collected, legitimate business follow-up, legal compliance, and dispute resolution. We use reasonable technical and organisational safeguards to protect information from unauthorised access, loss, misuse, or disclosure.',
  },
  {
    title: 'Sharing',
    body: 'We may share information with service providers that help operate the website, process messages, host systems, or support analytics. These providers are expected to process information only for authorised purposes. We may also disclose information where required by law or regulatory process.',
  },
  {
    title: 'Your Rights',
    body: 'Subject to applicable law, you may request access to your personal information, correction, deletion, restriction, or withdrawal of consent. To make a request, contact us using the details below.',
  },
] as const;
</script>

<template>
  <main class="min-h-screen bg-[#fbfdfb] text-brand">
    <section :class="[container, 'pb-16 pt-34 lg:pb-24 lg:pt-40']">
      <div class="max-w-4xl">
        <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
          Metropolitan Electric
        </p>
        <h1
          class="mt-6 font-elemental text-3xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl"
        >
          Privacy Policy
        </h1>
        <p class="mt-6 max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
          This policy explains how Metropolitan Electric Limited handles information submitted
          through this website and related enquiry channels.
        </p>
        <p class="mt-4 text-sm text-[#64746d]">Last updated: July 1, 2026</p>
      </div>

      <div class="mt-12 grid gap-6">
        <section
          v-for="section in sections"
          :key="section.title"
          class="border-t border-[#d8dfd5] py-7"
        >
          <h2 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
            {{ section.title }}
          </h2>
          <p class="mt-4 max-w-4xl text-sm leading-7 text-[#41555d] sm:text-base">
            {{ section.body }}
          </p>
        </section>

        <section class="border-t border-[#d8dfd5] py-7">
          <h2 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
            Contact
          </h2>
          <div class="mt-4 flex flex-col gap-2 text-sm leading-7 text-[#41555d] sm:text-base">
            <a href="mailto:ev@metropolitanelectricng.com" class="font-semibold text-brand">
              ev@metropolitanelectricng.com
            </a>
            <a href="tel:+2348126630682" class="font-semibold text-brand">
              +234 812 663 0682
            </a>
            <p>77 Sinari Daranijo St, Victoria Island, Lagos 106104, Lagos.</p>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>
