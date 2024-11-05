<template>
  <button @click="share" class="flex justify-center items-center">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  platform: {
    type: String,
    default: "Twitter",
    validator: (value: string) =>
      ["Twitter", "Facebook", "Linkedin", "Whatsapp", "Instagram"].includes(
        value
      ),
  },
  url: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});

const shareUrl = computed(() => {
  const encodedUrl = encodeURIComponent(props.url || window.location.href);
  const encodedTitle = encodeURIComponent(props.title || document.title);

  switch (props.platform) {
    case "Twitter":
      return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    case "Facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case "LinkedIn":
      return `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`;
    case "WhatsApp":
      return `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
    case "Instagram":
      return "https://www.instagram.com/";
    default:
      return "";
  }
});

const share = () => {
  if (props.platform === "Instagram") {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // If on mobile, try to open the Instagram app
      window.location.href = "instagram://app";
      // After a short delay, if the app didn't open, redirect to the Instagram website
      setTimeout(() => {
        window.location.href = "https://www.instagram.com/";
      }, 250);
    } else {
      // If not on mobile, just open the Instagram website
      window.open("https://www.instagram.com/", "_blank");
    }
  } else {
    window.open(shareUrl.value, "_blank");
  }
};
</script>
