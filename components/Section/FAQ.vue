<template>
  <div class="w-full py-20">
    <div :class="container">
      <div class="flex flex-1 flex-col gap-y-2.5">
        <h3
          v-motion
          :initial="{ opacity: 1, y: 20 }"
          :enter="{ opacity: 1, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="500"
          class="font-main text-white/80"
        >
          FAQ
        </h3>
        <h1
          v-motion
          :initial="{ opacity: 1, y: 50 }"
          :enter="{ opacity: 1, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="400"
          :delay="500"
          class="font-main text-2xl lg:text-3xl text-white"
        >
          Everything You need to know
        </h1>
      </div>

      <div class="py-10">
        <Accordion type="single" class="w-full" collapsible>
          <AccordionItem
            v-for="item in accordionItems.slice(0, 5)"
            :key="item.value"
            :value="item.value"
            class="text-white"
          >
            <AccordionTrigger
              class="text-lg md:text-xl md:font-medium hover:no-underline hover:text-white/80 text-left gap-5"
              >{{ item.item }}</AccordionTrigger
            >
            <AccordionContent class="text-base md:text-lg text-white/90">
              {{ item.content }}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { container } = useTailwindConfig();

const accordionItems = [
  {
    value: "item-1",
    item: "Are electric vehicles (EVs) suitable for Nigerian roads and climate?",
    content:
      "Yes, EVs are designed to handle diverse road conditions, and several models can perform well on Nigerian roads. EVs are also well-suited to Nigeria’s warm climate, as they often face fewer challenges in warmer conditions than in extreme colds.",
  },
  {
    value: "item-2",
    item: "How can I charge an electric vehicle in Nigeria?",
    content:
      "You can charge an EV at home using a standard electrical outlet or dedicated charging stations, which are becoming more common in Nigeria. Many EV owners use home charging systems overnight, which is convenient and affordable.",
  },
  {
    value: "item-3",
    item: "Is there enough charging infrastructure for EVs in Nigeria?",
    content:
      "Currently, charging infrastructure is still developing, with more public and private entities investing in EV charging stations. In urban areas like Lagos and Abuja, charging facilities are growing, and many owners are setting up home charging systems to ensure convenience.",
  },
  {
    value: "item-4",
    item: "How much does it cost to charge an electric vehicle compared to refuelling a petrol-powered car?",
    content:
      "Nigeria's electricity costs make charging an EV more affordable than fueling a conventional vehicle. The exact cost depends on the electricity rates and battery size but is usually lower than fuel expenses over the same distance.",
  },
  {
    value: "item-5",
    item: "What is the driving range of electric vehicles and is it sufficient for Nigerian cities?",
    content:
      "The range of an EV varies by model, but most modern EVs offer 200-400 km per charge, which is adequate for daily commuting and intercity travel. Planning trips and keeping your EV charged are key to maximizing your range.",
  },
  {
    value: "item-6",
    item: "What maintenance is required for electric vehicles?",
    content:
      "EVs require less maintenance than gasoline-powered cars. Key components like batteries, motors, and electronics are designed to last longer. Regular maintenance includes brake checks, tire rotations, and battery health checks.",
  },
  {
    value: "item-7",
    item: "How long does it take to charge an EV fully?",
    content:
      "Charging time depends on the type of charger used. Fast-charging stations can charge most EVs to 80% in 30-60 minutes, while home charging systems may take 4-12 hours for a full charge, depending on the vehicle and power source.",
  },
  {
    value: "item-8",
    item: "Are electric vehicles environmentally friendly?",
    content:
      "Yes, EVs produce zero emissions at the tailpipe, reducing air pollution. While electricity generation may still rely on fossil fuels, EVs' overall environmental impact is typically lower than that of conventional cars.",
  },
  {
    value: "item-9",
    item: "Is the battery of an electric vehicle affected by Nigeria’s frequent power outages?",
    content:
      "Power outages can impact home charging, but many EV owners mitigate this with solutions like solar backup systems, inverters, or generators. Public charging stations often have backup power to ensure reliability.",
  },
  {
    value: "item-10",
    item: "How long do electric vehicle batteries last, and what happens when they need replacement?",
    content:
      "Most EV batteries last 8-15 years, depending on usage and maintenance. Recycling options are available when they eventually need replacement, and some companies offer battery replacement programs to minimize costs.",
  },
  {
    value: "item-11",
    item: "What types of electric vehicles are available in Nigeria?",
    content:
      "Various EVs are available, including sedans, SUVs, and even commercial EVs like buses. Metropolitan Electric is expanding the range of models it introduces to meet Nigerian needs.",
  },
];
</script>
