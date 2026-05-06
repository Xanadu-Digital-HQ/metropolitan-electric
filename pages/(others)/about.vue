<script lang="ts" setup>
import {
  PhBatteryCharging,
  PhBuildings,
  PhGlobeHemisphereWest,
  PhLeaf,
  PhLightning,
  PhShieldCheck,
  PhStrategy,
  PhUsersThree,
  PhWrench,
  PhTrendUp,
  PhTarget,
  PhSparkle,
} from '@phosphor-icons/vue';

const { container } = useTailwindConfig();

useSeoMeta({
  title: 'About Metropolitan Electric',
  ogTitle: 'About Metropolitan Electric',
  description:
    'Metropolitan Electric is pioneering electric mobility solutions committed to transitioning Africa to a cleaner, smarter, and more sustainable transportation future.',
  ogDescription:
    'Metropolitan Electric is pioneering electric mobility solutions committed to transitioning Africa to a cleaner, smarter, and more sustainable transportation future.',
  ogImage: 'https://metropolitanelectricng.com/logo.svg',
  twitterCard: 'summary_large_image',
});

const offerings = [
  {
    title: 'Sustainable Transport Solutions',
    description:
      'Innovative electric vehicles designed for efficiency, environmental sustainability, and cutting-edge technology.',
    icon: PhLeaf,
  },
  {
    title: 'EV Maintenance Services',
    description:
      'Expert maintenance and repair services ensuring optimal performance, reliability, and longevity.',
    icon: PhWrench,
  },
  {
    title: 'Charging Infrastructure',
    description:
      'Reliable and efficient charging stations with custom solutions tailored to specific needs.',
    icon: PhBatteryCharging,
  },
  {
    title: 'EV Leasing & Financing',
    description:
      'Cost-effective pathways for businesses and operators to transition to electric mobility.',
    icon: PhTrendUp,
  },
] as const;

const coreValues = [
  {
    letter: 'S',
    title: 'Sustainability',
    description: 'Building a cleaner future—one electric mile at a time.',
  },
  {
    letter: 'U',
    title: 'Unity',
    description: 'Fostering collective progress through inclusive ecosystems and collaboration.',
  },
  {
    letter: 'S',
    title: 'Safety',
    description: 'Prioritizing safety in vehicle design and urban transport standards.',
  },
  {
    letter: 'T',
    title: 'Transparency',
    description: 'Leading with clarity and integrity, ensuring accountability at every step.',
  },
  {
    letter: 'A',
    title: 'Adaptability',
    description: 'Providing agile solutions that meet the evolving needs of modern cities.',
  },
  {
    letter: 'I',
    title: 'Innovation',
    description: 'Transforming bold ideas into practical mobility solutions.',
  },
  {
    letter: 'N',
    title: 'Nurturing',
    description:
      'Investing in long-term relationships and experiences that support growth and impact.',
  },
] as const;

const leadershipTeam = [
  {
    name: 'John Doe',
    position: 'Chief Executive Officer',
    bio: "With 15+ years in the automotive and EV industry, John leads Metro's vision with strategic excellence and a commitment to sustainable innovation.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
  },
  {
    name: 'Jane Smith',
    position: 'Chief Technology Officer',
    bio: 'Jane brings deep technical expertise in EV systems and infrastructure, driving innovation across all our technology initiatives.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop',
  },
  {
    name: 'Michael Johnson',
    position: 'Chief Operations Officer',
    bio: 'Michael ensures operational excellence across all business units, with 12+ years of experience in scaling sustainable enterprises.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  },
  {
    name: 'Sarah Williams',
    position: 'Head of Sustainability',
    bio: 'Sarah drives our environmental impact strategy, ensuring every decision aligns with our sustainability commitments.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop',
  },
] as const;
</script>

<template>
  <div class="min-h-screen bg-[#fbfdfb] text-brand">
    <div
      class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(113,159,99,0.12),transparent_28%),radial-gradient(circle_at_86%_10%,rgba(16,32,39,0.08),transparent_24%),linear-gradient(180deg,#fdfefd_0%,#f8fbf8_55%,#f1f6f0_100%)]"
    />
    <div
      class="pointer-events-none fixed inset-0 -z-10 opacity-50 bg-[linear-gradient(rgba(16,32,39,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,32,39,0.03)_1px,transparent_1px)] bg-size-[32px_32px]"
    />

    <section
      :class="[container, 'flex flex-col gap-14 pb-16 pt-34 lg:pb-24 lg:pt-40']"
    >
      <!-- OVERVIEW SECTION -->
      <div class="page-reveal reveal-delay-1 space-y-8">
        <div class="space-y-6">
          <p class="text-xs font-bold font-opensans uppercase tracking-[0.34em] text-[#5d7368]">
            About Us
          </p>
          <h1
            class="max-w-6xl font-elemental text-4xl font-medium tracking-[-0.055em] text-brand sm:text-5xl lg:text-6xl"
          >
            Pioneering electric mobility solutions for Africa's sustainable future.
          </h1>
          <p class="max-w-3xl text-sm leading-7 text-[#41555d] sm:text-base">
            Metropolitan Electric is committed to transitioning Africa to a cleaner, smarter, and
            more sustainable transportation future. We offer end-to-end solutions for individuals,
            businesses, and public transport systems, combining innovative vehicles with
            infrastructure, expertise, and support systems that make electric mobility practical and
            accessible.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-3 lg:max-w-3xl lg:ml-auto">
          <div
            class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Focus</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">
              Accessibility
            </p>
          </div>
          <div
            class="rounded-[1.75rem] border border-[#d5ddd2] bg-white/92 p-5 shadow-[0_18px_60px_rgba(16,32,39,0.06)] backdrop-blur-sm"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-[#6c8177]">Impact</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">Sustainable</p>
          </div>
          <div
            class="rounded-[1.75rem] border border-brand/8 bg-brand p-5 text-white shadow-[0_24px_80px_rgba(16,32,39,0.16)]"
          >
            <p class="text-[11px] uppercase tracking-[0.28em] text-white/50">Approach</p>
            <p class="mt-3 font-opensans text-3xl font-semibold tracking-[-0.04em]">Integrated</p>
          </div>
        </div>
      </div>

      <!-- OUR OFFERINGS SECTION -->
      <section class="space-y-6">
        <div
          class="page-reveal reveal-delay-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
              What We Offer
            </p>
            <h2
              class="mt-2 font-opensans text-3xl font-semibold tracking-[-0.045em] text-brand sm:text-4xl"
            >
              Comprehensive EV Solutions
            </h2>
          </div>
          <p class="max-w-xl text-sm leading-7 text-[#41555d]">
            From sustainable vehicles to charging infrastructure and financing, we deliver
            everything needed for a seamless transition to electric mobility.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="(offering, index) in offerings"
            :key="offering.title"
            class="page-reveal page-reveal-soft group rounded-[1.85rem] border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_16px_50px_rgba(16,32,39,0.05)] transition-transform duration-300 hover:-translate-y-1"
            :style="{ '--reveal-delay': `${220 + index * 65}ms` }"
          >
            <div
              class="flex size-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#eff4eb,#dce6d7_55%,#cad8ca_100%)] text-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
            >
              <component :is="offering.icon" class="size-6" weight="fill" />
            </div>
            <h3 class="mt-5 font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
              {{ offering.title }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-[#41555d]">
              {{ offering.description }}
            </p>
          </article>
        </div>
      </section>

      <!-- OUR COMMITMENT SECTION -->
      <section class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div
          class="page-reveal reveal-delay-3 overflow-hidden rounded-[2.2rem] border border-[#d8dfd5] bg-white/92 shadow-[0_28px_90px_rgba(16,32,39,0.08)] backdrop-blur-sm"
        >
          <div class="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div class="relative overflow-hidden bg-brand p-6 text-white sm:p-8">
              <div
                class="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl"
              />
              <div
                class="pointer-events-none absolute bottom-0 left-0 h-36 w-36 rounded-full bg-[#719f63]/25 blur-3xl"
              />

              <div class="relative space-y-5">
                <p class="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
                  Our Commitment
                </p>
                <h2
                  class="max-w-6xl font-opensans text-3xl font-semibold tracking-[-0.045em] sm:text-4xl"
                >
                  Overcoming barriers to create a sustainable future.
                </h2>
                <p class="max-w-3xl text-sm leading-7 text-white/72 sm:text-base">
                  We are dedicated to addressing infrastructural gaps, cost barriers, and consumer
                  awareness challenges. Through partnerships and continuous innovation, we build an
                  ecosystem where electric vehicles become the norm.
                </p>
              </div>
            </div>

            <div class="flex flex-col justify-between gap-6 p-6 sm:p-8">
              <div class="space-y-4">
                <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
                  Impact & Growth
                </p>
                <p class="text-sm leading-7 text-[#41555d] sm:text-base">
                  By investing in training programs and knowledge-sharing initiatives, we empower
                  employees and stakeholders to contribute meaningfully to the EV industry.
                </p>
                <p class="text-sm leading-7 text-[#41555d] sm:text-base">
                  Our work is more than business—it's a movement toward a sustainable future. We're
                  creating green jobs, reducing carbon emissions, and building technical capacity
                  among youth across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid gap-4">
          <article
            class="page-reveal page-reveal-soft rounded-[1.75rem] border border-[#d8dfd5] bg-white/92 p-5 shadow-[0_16px_50px_rgba(16,32,39,0.05)] backdrop-blur-sm"
            style="--reveal-delay: 280ms"
          >
            <div class="flex items-start gap-4 p-2.5">
              <div
                class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#7ca78d,#26414d_72%)] text-white shadow-[0_14px_30px_rgba(16,32,39,0.12)]"
              >
                <PhStrategy class="size-5" weight="fill" />
              </div>
              <div class="space-y-2">
                <h3 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
                  Our Mission
                </h3>
                <p class="text-sm leading-7 text-[#41555d]">
                  To accelerate Africa's transition to clean transportation by delivering reliable,
                  affordable, and integrated EV solutions—from vehicles and charging to support and
                  skills development.
                </p>
              </div>
            </div>
          </article>

          <article
            class="page-reveal page-reveal-soft rounded-[1.75rem] border border-[#d8dfd5] bg-white/92 p-5 shadow-[0_16px_50px_rgba(16,32,39,0.05)] backdrop-blur-sm"
            style="--reveal-delay: 350ms"
          >
            <div class="flex items-start gap-4 p-2.5">
              <div
                class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#7ca78d,#26414d_72%)] text-white shadow-[0_14px_30px_rgba(16,32,39,0.12)]"
              >
                <PhTarget class="size-5" weight="fill" />
              </div>
              <div class="space-y-2">
                <h3 class="font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
                  Our Vision
                </h3>
                <p class="text-sm leading-7 text-[#41555d]">
                  To be Africa's leading force in electric mobility, solving real-world challenges
                  through sustainable innovation, empowering people, protecting the environment, and
                  driving inclusive economic growth.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- THE METRO STANDARD - CORE VALUES SECTION -->
      <section class="space-y-6">
        <div
          class="page-reveal reveal-delay-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
              Core Values
            </p>
            <h2
              class="mt-2 font-opensans text-3xl font-semibold tracking-[-0.045em] text-brand sm:text-4xl"
            >
              The Metro Standard: S.U.S.T.A.I.N.
            </h2>
          </div>
          <p class="max-w-xl text-sm leading-7 text-[#41555d]">
            Our seven core values guide every decision, innovation, and partnership we undertake.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(value, index) in coreValues"
            :key="value.letter"
            class="page-reveal page-reveal-soft group rounded-[1.85rem] border border-[#d8dfd5] bg-white/92 p-6 shadow-[0_16px_50px_rgba(16,32,39,0.05)] transition-transform duration-300 hover:-translate-y-1"
            :style="{ '--reveal-delay': `${280 + index * 50}ms` }"
          >
            <div
              class="flex size-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),#1f3a45_50%,#0f1f27_100%)] text-white shadow-[0_14px_30px_rgba(16,32,39,0.12)]"
            >
              <span class="font-opensans text-2xl font-bold">{{ value.letter }}</span>
            </div>
            <h3 class="mt-5 font-opensans text-2xl font-semibold tracking-[-0.04em] text-brand">
              {{ value.title }}
            </h3>
            <p class="mt-3 text-sm leading-7 text-[#41555d]">
              {{ value.description }}
            </p>
          </article>
        </div>
      </section>

      <!-- TEAM METRO SECTION -->
      <section
        class="overflow-hidden rounded-[2.25rem] border border-[#d3dbd0] bg-[linear-gradient(135deg,#f5f7f5_0%,#eff2ed_55%,#e8ebe5_100%)] px-6 py-10 text-brand shadow-[0_28px_90px_rgba(16,32,39,0.08)] sm:px-10 sm:py-14"
      >
        <div class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-3xl space-y-4">
            <p class="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#6b8177]">
              Our People
            </p>
            <h2
              class="font-opensans text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl"
            >
              Team Metro
            </h2>
            <p class="max-w-2xl text-sm leading-7 text-[#41555d] sm:text-base">
              Behind every innovation and milestone is Team Metro—a collective of passionate minds
              driven by excellence and a shared vision. We are engineers, creators, problem-solvers,
              and forward-thinkers united by one goal: to deliver outstanding results that move
              people and industries forward. We bring energy, precision, and collaboration into
              every project, celebrating wins together and building lasting relationships that
              strengthen our company and the experiences we create.
            </p>
          </div>

          <div
            class="relative h-64 w-full shrink-0 overflow-hidden rounded-4xl border border-[#d8dfd5] shadow-[0_20px_60px_rgba(16,32,39,0.08)] lg:h-80 lg:w-96"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              alt="Team Metro working together"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <!-- OUR LEADERSHIP TEAM SECTION -->
      <section class="space-y-8">
        <div
          class="page-reveal reveal-delay-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
        >
          <div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177]">
              Leadership
            </p>
            <h2
              class="mt-2 font-opensans text-3xl font-semibold tracking-[-0.045em] text-brand sm:text-4xl"
            >
              Our Leadership Team
            </h2>
          </div>
          <p class="max-w-xl text-sm leading-7 text-[#41555d]">
            Guiding Metro's vision and growth with industry expertise, strategic thinking, and a
            commitment to excellence. Shaping innovation and delivering lasting value at every
            level.
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="(leader, index) in leadershipTeam"
            :key="leader.name"
            class="page-reveal page-reveal-soft group rounded-[1.85rem] border border-[#d8dfd5] bg-white/92 overflow-hidden shadow-[0_16px_50px_rgba(16,32,39,0.05)] transition-transform duration-300 hover:-translate-y-1"
            :style="{ '--reveal-delay': `${300 + index * 70}ms` }"
          >
            <div class="relative h-56 w-full overflow-hidden bg-[#e8ebe5]">
              <img :src="leader.image" :alt="leader.name" class="h-full w-full object-cover" />
            </div>
            <div class="p-6">
              <p class="font-opensans text-lg font-semibold tracking-[-0.04em] text-brand">
                {{ leader.name }}
              </p>
              <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b8177] mt-2">
                {{ leader.position }}
              </p>
              <p class="mt-4 text-sm leading-6 text-[#41555d]">
                {{ leader.bio }}
              </p>
            </div>
          </article>
        </div>
      </section>

      <!-- FINAL CTA SECTION -->
      <section
        class="overflow-hidden rounded-[2.25rem] border border-[#d3dbd0] bg-[linear-gradient(135deg,#0f181f_0%,#17332a_55%,#50654f_100%)] px-6 py-10 text-white shadow-[0_28px_90px_rgba(16,32,39,0.16)] sm:px-10 sm:py-14"
      >
        <div class="pointer-events-none absolute" />
        <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl space-y-4">
            <p class="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/55">
              Next Step
            </p>
            <h2
              class="font-opensans text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl"
            >
              Ready to drive the EV revolution with us?
            </h2>
            <p class="max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
              Explore our vehicle gallery, discover our charging solutions, or contact our team to
              discuss a custom mobility plan for your organization.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              :to="URLS.SOLUTIONS"
              class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-brand transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Solutions
            </NuxtLink>
            <NuxtLink
              :to="URLS.GALLERY"
              class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              View Gallery
            </NuxtLink>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>
