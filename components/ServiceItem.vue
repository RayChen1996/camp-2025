<template>
  <div
    data-aos="zoom-in-left"
    class="service-item"
    :class="{ reverse: isReverse }"
  >
    <img :src="image" :alt="title" class="service-image" />
    <div class="service-text">
      <h3 class="service-title">{{ title }}</h3>
      <p class="service-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  index: Number,
});

const isReverse = computed(() => props.index % 2 === 1);
</script>

<style scoped>
.service-item {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  max-width: 1076px;
  margin: 0 auto;
}
.service-text {
  max-width: 430px;
  background: #fff;
  padding: 24px;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  margin-left: -60px;
}

.service-image {
  width: 636px;
  height: 320px;
  object-fit: cover;
  margin-right: 1.5rem;
  background: #f5f5f5;
}
@media (max-width: 768px) {
  .service-item,
  .service-item.reverse {
    flex-direction: column !important;
    align-items: stretch;
  }
  .service-image {
    width: 100%;
    height: 200px;
    margin: 0 0 1rem 0 !important;
  }
  .service-text {
    margin-left: 0;
    max-width: 100%;
    padding: 16px;
  }
  .service-text {
    margin-left: 0;
    max-width: 100%;
    padding: 16px;
  }
  .service-image {
    width: 100%;
    height: 200px;
    padding: 16px;
  }
}

.service-item.reverse {
  flex-direction: row;
}

.service-item.reverse {
  flex-direction: row-reverse;
}

.service-item.reverse .service-image {
  margin-right: 0;
  margin-left: 1.5rem;
}

.service-text {
  max-width: 600px;
  background: #fff;
  padding: 24px;
}

.service-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.service-description {
  font-size: 1rem;
  color: #555;
}
</style>
