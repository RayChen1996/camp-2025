<template>
  <div class="min-h-screen bg-white text-gray-800">
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
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-blue-700">
              Alyse Wang
            </h1>
            <p class="mt-2 text-sm text-blue-600">前端工程師 & 職涯導師</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 下方介紹與社群 -->
    <div class="p-6 md:p-10 text-center bg-white">
      <p class="text-lg mb-4">
        嗨，我是 Alyse，一名熱愛前端技術的工程師。<br />
        擅長 React、Vue
        等框架，致力於幫助新手工程師提供職涯指導，邀請你與我一起，開啟更具潛能的程式與職涯之旅！
      </p>
      <div class="flex justify-center space-x-4 text-blue-600 text-xl">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-github"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
  </div>
</template>
