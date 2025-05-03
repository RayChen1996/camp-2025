<template>
  <section>
    <h2>部落格精選</h2>
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
