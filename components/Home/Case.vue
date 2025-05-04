<template>
  <section class="sm:container sm:m-auto md:mt-20 px-4">
    <h2
      class="md:text-[64px] text-3xl font-bold md:text-center text-left mb-8 mt-16 md:mb-6"
    >
      職涯諮詢成功案例
    </h2>

    <!-- Featured Case Study -->
    <div
      class="grid md:grid-cols-5 gap-6 mb-10 bg-gray-50 rounded-lg overflow-hidden"
    >
      <div class="md:col-span-2">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Twbguau5FdfUccCdYFnqyrzVhklTfq.png"
          alt="Career consultation case study"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="md:col-span-3 p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center mb-4">
            <div class="w-6 h-0.5 bg-gray-400"></div>
          </div>
          <p class="text-sm mb-6">
            透過職涯諮詢的輔助與協助，我們的客戶成功了解自己的優勢與潛力，找到適合自己的職業發展方向。經過量身定制的職涯規劃，客戶能夠更有信心地前進。
          </p>

          <div class="flex items-center mb-4 mt-8">
            <div class="w-6 h-0.5 bg-gray-400"></div>
          </div>
          <p class="text-sm font-medium mb-4">
            我們為了一個職涯夢想，我給你一個成功的可能性！
          </p>

          <button
            class="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            立即預約諮詢
          </button>
        </div>
      </div>
    </div>

    <!-- Success Cases Section -->

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        data-aos="fade-left"
        v-for="(c, idx) in cases"
        :key="idx"
        class="bg-gray-50 p-6 rounded-lg"
      >
        <div class="flex justify-center mb-4">
          <div
            class="w-16 h-16 rounded-full flex items-center justify-center"
            :class="c.color"
          >
            <img
              :src="c.image"
              alt="Icon"
              class="object-cover rounded-full w-16 h-16"
            />
          </div>
        </div>
        <h3 class="text-center font-bold mb-4">{{ c.title }}</h3>
        <ul class="space-y-2 mb-4">
          <li
            v-for="(item, i) in c.items"
            :key="i"
            class="flex items-center gap-2"
          >
            <!-- <div class="min-w-5 h-5 bg-blue-500 mr-2 mt-0.5"></div> -->
            <input type="checkbox" />
            <span class="text-sm">{{ item }}</span>
          </li>
        </ul>
        <hr />
        <div class="flex mt-4">
          <button
            class="border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            前往聆聽 podcast
          </button>
        </div>
      </div>
    </div>

    <!-- Success Cases Grid -->
    <!-- <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    
    > -->

    <!-- Case 1 -->
    <!-- <div class="bg-gray-50 p-6 rounded-lg">
        <div class="flex justify-center mb-4">
          <div
            class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center"
          >
            <img
              src="/ad71ef6284b0b9667f50b5e22e391ccf809ef211.jpg"
              alt="Icon"
              class="object-cover rounded-full w-16 h-16"
            />
          </div>
        </div>
        <h3 class="text-center font-bold mb-4">職場轉型獲得工作的 Offer</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <div class="min-w-5 h-5 bg-blue-500 mr-2 mt-0.5"></div>
            <span class="text-sm">打造完整專業履歷與作品集</span>
          </li>
          <li class="flex items-start">
            <div class="min-w-5 h-5 bg-blue-500 mr-2 mt-0.5"></div>
            <span class="text-sm">面試技巧與溝通訓練</span>
          </li>
        </ul>
        <div class="flex justify-center">
          <button
            class="border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            前往聆聽 podcast
          </button>
        </div>
      </div> -->

    <!-- Case 2 -->
    <!-- <div class="bg-gray-50 p-6 rounded-lg">
        <div class="flex justify-center mb-4">
          <div
            class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <img
              src="/dca4343d3eeca70e1ba592d981b270678258a0df.jpg"
              alt="Icon"
              class="object-cover rounded-full w-16 h-16"
            />
          </div>
        </div>
        <h3 class="text-center font-bold mb-4">轉職成功取得理想薪資提升</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <div class="min-w-5 h-5 bg-blue-500 mr-2 mt-0.5"></div>
            <span class="text-sm">如何找到適合自身的職位</span>
          </li>
          <li class="flex items-start">
            <div class="min-w-5 h-5 bg-blue-500 mr-2 mt-0.5"></div>
            <span class="text-sm">薪資談判與職場技巧提升</span>
          </li>
        </ul>
        <div class="flex justify-center">
          <button
            class="border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            前往聆聽 podcast
          </button>
        </div>
      </div> -->

    <!-- Case 3 -->
    <!-- <div class="bg-gray-50 p-6 rounded-lg">
        <div class="flex justify-center mb-4">
          <div
            class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
          >
            <img
              src="/f45a52ed66c8d0fafa367831edecf33cf80960e3.jpg"
              alt="Icon"
              class="object-cover rounded-full w-16 h-16"
            />
          </div>
        </div>
        <h3 class="text-center font-bold mb-4">面試突破與成功錄取</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <div class="min-w-5 h-5 bg-blue-500 mr-2 mt-0.5"></div>
            <span class="text-sm">克服面試緊張與提升表達能力</span>
          </li>
          <li class="flex items-start">
            <div class="min-w-5 h-5 bg-blue-500 mr-2 mt-0.5"></div>
            <span class="text-sm">如何在面試中展現自我的優勢</span>
          </li>
        </ul>
        <div class="flex justify-center">
          <button
            class="border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            前往聆聽 podcast
          </button>
        </div>
      </div> -->

    <!-- Case 4 -->
    <!-- <div class="bg-gray-50 p-6 rounded-lg">
        <div class="flex justify-center mb-4">
          <div
            class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center"
          >
            <img
              src="/b1bbe4a77a15c619ef1715f612c93fb6c73c9386.jpg"
              alt="Icon"
              class="object-cover rounded-full w-16 h-16"
            />
          </div>
        </div>
        <h3 class="text-center font-bold mb-4">職涯規劃與目標實現</h3>
        <ul class="space-y-2 mb-4">
          <li class="flex items-start">
            <div class="min-w-5 h-5 bg-blue-500 mr-2 mt-0.5"></div>
            <span class="text-sm">制定清晰明確的職涯目標</span>
          </li>
          <li class="flex items-start">
            <div class="min-w-5 h-5 bg-blue-500 mr-2 mt-0.5"></div>
            <span class="text-sm">建立有效的職涯發展能力</span>
          </li>
        </ul>
        <div class="flex justify-center">
          <button
            class="border border-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            前往聆聽 podcast
          </button>
        </div>
      </div> -->
    <!-- </div> -->
  </section>
</template>

<script setup>
const cases = [
  {
    title: "職場轉型獲得工作的 Offer",
    image: "/ad71ef6284b0b9667f50b5e22e391ccf809ef211.jpg",
    color: "bg-yellow-100",
    items: ["打造完整專業履歷與作品集", "面試技巧與溝通訓練"],
  },
  {
    title: "轉職成功取得理想薪資提升",
    image: "/dca4343d3eeca70e1ba592d981b270678258a0df.jpg",
    color: "bg-blue-100",
    items: ["如何找到適合自身的職位", "薪資談判與職場技巧提升"],
  },
  {
    title: "面試突破與成功錄取",
    image: "/f45a52ed66c8d0fafa367831edecf33cf80960e3.jpg",
    color: "bg-green-100",
    items: ["克服面試緊張與提升表達能力", "如何在面試中展現自我的優勢"],
  },
  {
    title: "職涯規劃與目標實現",
    image: "/b1bbe4a77a15c619ef1715f612c93fb6c73c9386.jpg",
    color: "bg-purple-100",
    items: ["制定清晰明確的職涯目標", "建立有效的職涯發展能力"],
  },
];
</script>

<style scoped>
/* Custom styles */
.min-w-5 {
  min-width: 1.25rem;
}
</style>
