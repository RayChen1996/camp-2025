<template>
  <section class="sm:container sm:m-auto md:mt-20 px-4">
    <h2
      class="md:text-[64px] text-3xl font-bold text-center md:text-left mb-8 mt-16 md:mb-6"
    >
      職涯諮詢成功案例
    </h2>

    <div class="grid md:grid-cols-5 gap-6 mb-10 bg-gray-50 rounded-lg">
      <div class="md:col-span-2">
        <img
          src="/34efd0c257c5e693dab05744c18c565338efb8ed.jpg"
          alt=""
          class="object-cover aspect-square"
        />
      </div>
      <div class="md:col-span-3 p-6 flex flex-col justify-between relative">
        <div class="px-10 py-20 bg-white z-20 absolute -left-40 max-w-[526px]">
          <div class="flex items-center mb-4">
            <div class="w-6 h-0.5 bg-[#0027D5] rounded-full"></div>
          </div>
          <p class="font-bold leading-[1.5] mb-6 mt-6">
            在職涯發展的關鍵轉折點上，適時的協助與正確的方向至關重要。藉由職涯諮詢，我可以幫助你加速釐清目標、建立更全面的技術與軟實力，並有效
            <span class="text-[#0027D5]"> 突破原有的舒適圈</span>。
          </p>
        </div>
        <div
          class="bg-[#F5F5F5] px-10 py-20 absolute bottom-0 left-0 max-w-[526px]"
        >
          <div class="flex items-center mb-4 mt-8">
            <div class="w-6 h-0.5 bg-[#0027D5] rounded-full"></div>
          </div>
          <p class="mb-4 mt-6 font-bold leading-[1.5]">
            我們為了一個職涯夢想，我給你一個成功的可能性！
          </p>

          <button
            class="bg-white font-bold text-[#0027D5] border px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            立即預約諮詢
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6">
      <div
        v-for="(c, idx) in cases"
        :key="idx"
        class="bg-gray-50 rounded-lg p-6"
      >
        <div class="flex mb-4">
          <div
            class="w-16 h-16 rounded-full flex items-center"
            :class="c.color"
          >
            <img
              :src="c.image"
              alt="Icon"
              class="object-cover rounded-full w-16 h-16"
            />
          </div>
        </div>
        <h3 class="font-bold mb-4">{{ c.title }}</h3>
        <ul class="space-y-2 mb-4">
          <li
            v-for="(item, i) in c.items"
            :key="i"
            class="flex items-center gap-2"
          >
            <input checked type="checkbox" />
            <span class="text-sm">{{ item }}</span>
          </li>
        </ul>
        <hr />
        <div class="flex mt-4">
          <button
            class="border border-[#000000] text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            前往聆聽 podcast
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cases = [
  {
    title: "無經驗到前端工程師 Offer",
    image: "/ad71ef6284b0b9667f50b5e22e391ccf809ef211.jpg",
    color: "bg-yellow-100",
    items: ["打造前端專案與履歷亮點", "深度強化面試表現"],
  },
  {
    title: "轉職迷茫到明確學習規劃",
    image: "/dca4343d3eeca70e1ba592d981b270678258a0df.jpg",
    color: "bg-blue-100",
    items: ["制訂階段性目標與時間安排", "鼓勵參與前端社群或活動"],
  },
  {
    title: "面試緊張到從容應對",
    image: "/f45a52ed66c8d0fafa367831edecf33cf80960e3.jpg",
    color: "bg-green-100",
    items: ["透過面試模擬找出常犯的邏輯漏洞", "討論遇到不熟悉議題時的回應方式"],
  },
  {
    title: "面試緊張到從容應對",
    image: "/b1bbe4a77a15c619ef1715f612c93fb6c73c9386.jpg",
    color: "bg-purple-100",
    items: ["擬定進階框架或技術研究目標", "培養跨團隊溝通與簡報能力"],
  },
];
</script>
