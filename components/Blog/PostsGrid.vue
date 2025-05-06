<template>
  <section class="sm:container px-4 max-md:mx-3 m-auto mt-20 mb-16">
    <div class="relative mb-8 max-md:w-full lg:w-[416px]">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <img src="/search.svg" alt="" class="w-5 h-5 text-gray-400" />
      </span>
      <input
        class="border rounded-full pl-10 pr-4 py-2 w-full"
        placeholder="搜尋你感興趣的文章"
        type="search"
      />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(article, idx) in articles"
        :key="article.id"
        class="bg-white shadow-md rounded-lg overflow-hidden"
        :data-aos="
          Math.floor(idx / 3) % 2 === 0 ? 'fade-left' : 'fade-up-right'
        "
      >
        <img :src="article.imageUrl" alt="" class="w-full h-48 object-cover" />
        <div class="p-4">
          <p class="text-gray-600 text-sm">{{ article.date }}</p>
          <div>
            <div class="flex flex-wrap gap-2 mb-2">
              <span
                v-for="tag in article.tags"
                :key="tag"
                class="inline-block leading-[1.5] text-2xl text-[#0027D5] px-2 py-1 rounded"
              >
                #{{ tag }}
              </span>
              <span
                v-if="article.popular"
                class="inline-block leading-[1.5] rounded-full bg-[#0027D5] text-2xl text-white px-3 py-[6px]"
              >
                人氣文章
              </span>
            </div>
          </div>
          <h3 class="text-xl font-semibold">{{ article.title }}</h3>

          <p class="text-gray-700 mt-2">{{ article.description }}</p>
          <a href="#" class="inline-block mt-4 border py-2 px-4 rounded-full"
            >閱讀內文</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const articles = [
  {
    id: 1,
    title: "React 入門不再迷惘：三步驟帶你上手核心概念",
    date: "2024/10/11",
    category: "前端開發",
    description:
      "你是否對 React 感到好奇，卻苦惱於該如何正式啟動學習之路？身為前端工程師兼職涯諮詢師，我常遇到同學問我：「React 到底該怎麼入門？」為了幫大家減少摸索的時間，我整理出三個循序漸進的關鍵步驟，帶你更輕鬆地掌握 React 核心概念，真正把理論應用在實際專案中。",
    imageUrl: "/bc6d675dd7d837110cc1a635d786050edd8743c9.jpg",
    tags: ["React", "入門基礎"],
    popular: false,
  },

  {
    id: 2,
    title: "前端作品集打造指南：讓你的專案成為履歷亮點",
    date: "2024/09/07",
    category: "Vue",
    description:
      "對正在求職的前端工程師而言，作品集往往是第一個「說話」的利器。當面試官瀏覽你的網頁作品時，能夠快速了解你的程式邏輯、設計感以及解決問題的思路。我在協助多位同學優化履歷與作品集的過程中，總結出一些關鍵要素，分享給正在打造、升級作品集的你。",
    imageUrl: "/392384e978dcdd9b8119ce48c2f7f32f6fd4648a.jpg",
    tags: ["作品集", "求職攻略"],
    popular: false,
  },
  {
    id: 3,
    title: "CSS 魔法大揭密：排版與設計的三大關鍵技巧",
    date: "2024/09/03",
    category: "前端開發",
    description:
      "在瀏覽器畫面上實現各種精美介面，一直是前端開發充滿成就感的部分。但當面臨複雜的佈局需求或是響應式設計時，往往讓人抓破頭皮。這篇文章想跟大家分享我在實務專案中累積的三大技巧，幫助你更有效率地駕馭 CSS，打造兼具美感與功能性的網頁。",
    imageUrl: "/e720db67fcd887979582eea54a2bf338578b5b6f.jpg",
    tags: ["CSS設計", "視覺體驗"],
    popular: false,
  },
  {
    id: 4,
    title: "前端轉職必讀：從自學者到工程師的心路歷程",
    date: "2024/07/09",
    category: "數位行銷",
    description:
      "能夠憑藉自學進入前端領域，聽起來令人振奮，但實際過程中可能遇到的挫折與疑慮，卻常常令人猶豫。回想當初我也是對程式一竅不通，卻在興趣的驅使下毅然踏上自學之路。今天想透過這篇文章，分享我的轉職經驗和一些調適心態的秘訣，盼能為有心投入前端領域的你提供一些力量與方向。",
    imageUrl: "/5fbb6233dd7f0ea709ff3f9b47b73526b410f8bd.jpg",
    tags: ["轉職工程師", "學習心法"],
    popular: false,
  },

  {
    id: 5,
    title: "前端面試不再慌：破解常見提問的三大策略",
    date: "2024/07/08",
    category: "前端開發",
    description:
      "在這篇文章中，我將分享一些我在學習 JavaScript 過程中的心得與技巧，幫助你更深入地理解這門語言的核心概念，並能夠靈活運用於實際專案中。無論你是剛入門的初學者，還是已經有一定基礎的開發者，都能從中獲得一些啟發與幫助。",
    imageUrl: "/211564c442324212e1ab74f0b7999292e0d8bdc2.jpg",
    tags: ["面試準備", "工程師求職"],
    popular: true,
  },

  {
    id: 6,
    title: "Vue 3 新手指南：快速掌握 Composition API 與關鍵特色",
    date: "2024/06/29",
    category: "後端開發",
    description:
      "Node.js 是一個強大的後端開發工具，能夠幫助我們快速構建高效能的伺服器應用程式。在這篇文章中，我將分享一些我在實際專案中使用 Node.js 的經驗與技巧，幫助你更有效率地開發後端應用程式。",
    imageUrl: "/e8ca13cbd02cad0c98d0017368a724f88c89463d.jpg",
    tags: ["Vue3", "框架學習"],
    popular: false,
  },
  {
    id: 7,
    title: "Git 與版本控制：前端協作的必修課",
    date: "2024/05/04",
    category: "版本控制",
    description:
      "當你從一人開發晉升到多人合作，版本控制的好壞往往決定了專案的順暢度。Git 不僅能記錄程式碼變動，更能確保每位成員都在正確的分支上完成任務。透過這篇文章，你將了解常見的 Git 流程，並學會在前端專案中輕鬆管理與協作。",
    imageUrl: "/838b4c7e54b6c66f9f851c9ce20c4d12241bcf97.jpg",
    tags: ["Git", "協作流程"],
    popular: false,
  },

  {
    id: 8,
    title: "SEO 與前端最佳實踐：讓搜尋引擎看見你的網站",
    date: "2024/05/01",
    category: "前端開發",
    description:
      "即使你的網站擁有優美的介面與強大的功能，如果在搜尋引擎上找不到它，那就形同隱形。身為前端工程師，瞭解基本的 SEO 概念與技術是讓網站脫穎而出的關鍵。這篇文章將分享我在前端實作時，常用的 SEO 小技巧與實務做法，幫助你顯著提升網站曝光度。",
    imageUrl: "/a558a2db889b08eb893f5226abbf1b0024237dc6.jpg",
    tags: ["SEO", "網站曝光"],
    popular: false,
  },

  {
    id: 9,
    title: "穩定前端環境的祕訣：依賴管理與自動化流程",
    date: "2024/02/17",
    category: "前端開發",
    description:
      "前端世界日新月異，第三方套件與工具種類繁多，一個不留神就可能引爆依賴衝突。為了確保專案長期維護的穩定度，建立一套良好的依賴管理與自動化流程至關重要。在本文中，我會分享從套件更新到測試部署的實務經驗，讓你在開發時不再手忙腳亂。",
    imageUrl: "/9b158bdbfa545125b40eb0301ec05bd726aee2c3.jpg",
    tags: ["專案維護", "自動化測試"],
    popular: false,
  },

  {
    id: 10,
    title: "TypeScript 快速上手：強化前端程式碼的安全與可讀性",
    date: "2024/02/17",
    category: "前端開發",
    description:
      "許多前端開發者在成長過程中都曾面臨動態語言帶來的錯誤風險，而 TypeScript 的出現正是為了改善這種情況。它能在開發階段即發現型別錯誤，並帶來更友善的程式碼提示。本篇文章將介紹如何在前端專案中導入 TypeScript，並透過真實案例展示它為開發流程帶來的優勢。",
    imageUrl: "/c7edf3918523ecd4b63b59af8a41d7174a6ef0b5.jpg",
    tags: ["TypeScript", "程式設計"],
    popular: false,
  },

  {
    id: 11,
    title: "掌握前端測試：從單元測試到端對端測試的完整攻略",
    date: "2024/02/07",
    category: "前端開發",
    description:
      "寫程式容易，但要確保程式在多種情境、裝置都能正常運行就沒那麼簡單了。這時「測試」便成了維持程式品質的關鍵環節。從最基礎的單元測試，到模擬使用者行為的端對端測試，每一種測試方式都有它的價值與最佳應用情境。本文將帶你認識不同類型的前端測試工具，以及如何在開發流程中實踐自動化測試，打造更穩定、可預期的專案。",
    imageUrl: "/0a5f03f14827e7832083a821cf45e321d7f72c60.jpg",
    tags: ["測試框架", "品質保證"],
    popular: false,
  },
];
</script>
