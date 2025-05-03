<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-4 m-auto md:mt-20">
    <figure class="relative w-full h-full aspect-square">
      <img
        src="/d33ce4a323e1d2168e64c46acb1249aa9b46b8de.jpg"
        alt=""
        class="max-h-full object-contain"
      />
    </figure>
    <div class="">
      <img src="/b19aaaaa02cce8c29658712548f1ce4bffb31f5b.jpg" />
      <form>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 text-sm font-bold mb-2"
            >訂閱電子報</label
          >
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
            >立即訂閱，搶先掌握前端 x 職涯的獨家資訊！</label
          >
          <input
            type="email"
            id="email"
            placeholder="請輸入您的大名"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label
            for="message"
            class="block text-gray-700 text-sm font-bold mb-2"
            >訊息</label
          >
          <input
            type="email"
            id="email"
            placeholder="請輸入您的電子信箱"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          啟動訂閱
        </button>
      </form>
    </div>
  </section>
</template>
