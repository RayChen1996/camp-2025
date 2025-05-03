<template>
  <section class="sm:container sm:m-auto md:mt-20">
    <h2 class="md:text-[64px] font-bold">部落格精選</h2>
    <Carousel>
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :date="post.date"
        :tags="post.tags"
        :excerpt="post.excerpt"
        :image="post.image"
      />
    </Carousel>
  </section>
</template>
