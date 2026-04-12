<template>
  <div class="overflow-visible">
    <NavBar class="fixed top-6 w-full z-30" />
    <NuxtLayout  />
  </div>
</template>

<script lang="ts" setup>


useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Metropolitan Electric Limited",
        url: "https://metropolitanelectricng.com",
      }),
    },
  ],
});
</script>


<style>
html {
  font-family:  var(--font-poppins);
  scroll-behavior: smooth;
  scroll-padding: 10rem;
}

</style>