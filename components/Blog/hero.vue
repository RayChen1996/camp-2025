<template>
  <div class="bg-white max-md:mx-3 text-gray-800 mx-auto">
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
          class="object-cover h-[180px] md:h-[500px] lg:h-[600px] w-full"
        />
        <!-- 文字區塊 -->
        <div
          class="absolute inset-0 -mt-52 md:mt-0 flex items-center justify-center"
        >
          <div>
            <h1
              class="lg:text-[120px] text-[52px] font-black leading-[1.5] text-blue-700"
            >
              BLOG
            </h1>
            <p class="mt-2 text-[28px] text-blue-600 font-bold font-jinxuan">
              前端工程師 & 職涯諮詢師
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
