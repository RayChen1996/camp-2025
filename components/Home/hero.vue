<template>
  <div class="bg-white text-gray-800 sm:container sm:mx-auto">
    <!-- 上方兩欄 -->
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- 左側個人照片 -->
      <div>
        <img
          src="../../assets/fea7717a1f97e950c0958cbf71d6b886005b7add.jpg"
          alt="個人照片"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- 右側背景與文字 -->
      <div class="relative">
        <img
          src="../../assets/b19aaaaa02cce8c29658712548f1ce4bffb31f5b.jpg"
          alt="背景"
          class="w-full h-full object-cover"
        />
        <!-- 文字區塊 -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div>
            <h1
              class="lg:text-[120px] text-5xl font-black leading-[1.5] text-blue-700"
            >
              Alyse Wang
            </h1>
            <p
              class="mt-2 text-sm md:text-[28px] text-blue-600 font-bold font-jinxuan"
            >
              前端工程師 & 職涯導師
            </p>
          </div>
        </div>
        <!-- 下方介紹與社群 -->
        <div class="p-6 md:p-10 bg-white absolute -left-32 -bottom-20">
          <p class="text-lg mb-4">嗨，我是 Alyse，一名熱愛前端技術的工程師。</p>
          <p class="mt-4">
            擅長 React、Vue
            等框架，致力於幫助新手工程師提供職涯指導，邀請你與我一起，開啟更具潛能的程式與職涯之旅！
          </p>

          <div class="flex space-x-4 text-blue-600 text-xl">
            <a
              href="https://www.youtube.com/@alysewang"
              target="_blank"
              rel="noopener"
            >
              <img src="/images/YtIcon.svg" alt="YT" />
            </a>
            <a
              href="https://podcast.example.com"
              target="_blank"
              rel="noopener"
            >
              <img src="/images/PodcastIcon.svg" alt="podcast" />
            </a>
            <a
              href="https://www.facebook.com/alysewang"
              target="_blank"
              rel="noopener"
            >
              <img src="/images/FbIcon.svg" alt="FB" />
            </a>
            <a
              href="https://www.linkedin.com/in/alysewang"
              target="_blank"
              rel="noopener"
            >
              <img src="/images/linkedinIcon.svg" alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/alysewang"
              target="_blank"
              rel="noopener"
            >
              <img src="/images/IgIcon.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
