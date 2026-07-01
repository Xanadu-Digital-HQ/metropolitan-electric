<script lang="ts" setup>
const { container } = useTailwindConfig();
const absoluteUrl = useAbsoluteUrl();

useSeoMeta({
  title: 'Terms | Metropolitan Electric',
  ogTitle: 'Terms | Metropolitan Electric',
  description:
    'Website terms for using Metropolitan Electric pages, content, enquiries, and linked resources.',
  ogDescription:
    'Website terms for using Metropolitan Electric pages, content, enquiries, and linked resources.',
  ogImage: absoluteUrl('/og/ogImage.png'),
  twitterCard: 'summary_large_image',
});

const terms = [
  {
    title: 'Use of This Website',
    body: 'This website provides general information about Metropolitan Electric Limited, electric vehicles, charging infrastructure, mobility programmes, and related services. You agree to use the website lawfully and not interfere with its operation or security.',
  },
  {
    title: 'Website Content',
    body: 'Content on this website is provided for general information only. Product availability, specifications, pricing, programme terms, and service coverage may change and should be confirmed directly with Metropolitan Electric before making business decisions.',
  },
  {
    title: 'Enquiries',
    body: 'Submitting an enquiry does not create a binding contract, partnership, quotation, or service commitment. A formal agreement or written confirmation from Metropolitan Electric is required before any transaction, deployment, or engagement is binding.',
  },
  {
    title: 'Intellectual Property',
    body: 'Website text, imagery, branding, logos, page design, and other materials are owned by Metropolitan Electric or used with permission. You may not copy, modify, distribute, or reuse these materials without prior written approval, except where allowed by law.',
  },
  {
    title: 'Third-Party Links',
    body: 'The website may link to third-party platforms such as maps, social networks, media pages, or partner resources. Metropolitan Electric is not responsible for the content, availability, or practices of third-party websites.',
  },
  {
    title: 'Limitation of Liability',
    body: 'To the extent permitted by law, Metropolitan Electric is not liable for loss arising from website unavailability, errors, omissions, reliance on general website content, or use of linked third-party resources.',
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
          Terms
        </h1>
        <p class="mt-6 max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
          These terms govern use of the Metropolitan Electric website and enquiry experience.
        </p>
        <p class="mt-4 text-sm text-[#64746d]">Last updated: July 1, 2026</p>
      </div>

      <div class="mt-12 grid gap-6">
        <section v-for="item in terms" :key="item.title" class="border-t border-[#d8dfd5] py-7">
          <h2 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
            {{ item.title }}
          </h2>
          <p class="mt-4 max-w-4xl text-sm leading-7 text-[#41555d] sm:text-base">
            {{ item.body }}
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
