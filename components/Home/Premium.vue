<template>
  <section
    class="grid grid-cols-1 max-md:mx-3 md:grid-cols-2 gap-4 m-auto md:mt-20"
  >
    <figure class="relative w-full h-full aspect-square">
      <img
        src="/d33ce4a323e1d2168e64c46acb1249aa9b46b8de.jpg"
        alt=""
        class="max-h-full object-contain"
      />
    </figure>
    <div class="flex relative items-center justify-center min-h-[400px]">
      <img
        class="absolute inset-0 w-full h-full object-cover z-0"
        src="/b19aaaaa02cce8c29658712548f1ce4bffb31f5b.jpg"
        alt=""
      />
      <form
        class="relative z-10 bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-lg w-full max-w-md"
      >
        <div class="mb-4">
          <label
            for="name"
            class="block text-gray-700 text-5xl lg:text-[64px] font-bold mb-2"
            >訂閱電子報</label
          >
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
            >立即訂閱，搶先掌握
            <span class="text-[#0027D5]">前端 x 職涯</span>
            的獨家資訊！</label
          >
          <input
            type="text"
            id="name"
            placeholder="請輸入您的大名"
            class="appearance-none rounded w-full bg-[#F1F1F1] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
            >電子信箱</label
          >
          <input
            type="email"
            id="email"
            placeholder="請輸入您的電子信箱"
            class="appearance-none rounded w-full bg-[#F1F1F1] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          class="bg-white border-[1px] border-[#0027D5] rounded-full text-[#0027D5] font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
        >
          啟動訂閱
        </button>
      </form>
    </div>
  </section>
</template>
