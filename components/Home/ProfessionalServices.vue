<template>
  <section class="sm:container max-md:mx-3 sm:m-auto md:mt-20">
    <h2
      class="font-bold max-md:text-5xl md:text-[64px] m-auto mb-8 mt-16 text-center md:text-left text-[32px] leading-[1.5]"
    >
      專業服務與方案
    </h2>
    <div class="services">
      <ServiceItem
        v-for="item in services"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        :index="item.index"
      />
    </div>
    <div class="flex items-center justify-end mt-10">
      <span class="font-bold text-[28px]"> 聯繫我，取得更多資訊！ </span>
      <button>
        <NuxtLink to="/contact" class="text-blue-500 hover:underline">
          <img
            src="/images/moreArrow.svg"
            alt="arrow right"
            class="inline-block mr-2"
          />
        </NuxtLink>
      </button>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "履歷健檢",
    description:
      "履歷是打開機會之門的第一步。讓我協助你突顯專業技術與核心能力，並透過簡短模擬面試為你加分，讓面試官第一眼就被你吸引。",
    image: "/2409b58b103f9423e8b5df5d0b2bc822d0c97748.jpg",
    index: 0,
  },
  {
    title: "線上諮詢",
    description:
      "想快速解決前端學習瓶頸，或需要專業職涯指引？透過線上一對一諮詢，我將協助你更有方向地邁進。",
    image: "/16aee6b3ce0680d771f0e175624c59ed3edda8c0.jpg",
    index: 1,
  },
  {
    title: "網頁開發",
    description:
      "想打造高效能、具美感的網站？我提供從需求訪談到架構實作的一站式服務，讓你的品牌與產品在線上脫穎而出。",
    image: "/85eaa9e81171b0f20789bf2b57f10926132c2598.jpg",
    index: 2,
  },
  {
    title: "企業內訓",
    description:
      "想讓團隊快速掌握前端最新技術或優化現有專案流程？我可協助打造專業、實用的企業內訓課程，一次解決團隊痛點。",
    image: "/e93b7295dad4b89c19a60b133fbcffb57a1c3145.jpg",
    index: 3,
  },
];
</script>
