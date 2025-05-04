<template>
  <section class="sm:container max-md:mx-3 mt-20 sm:mx-auto max-w-[1296px]">
    <h1 class="title">與我聯繫</h1>

    <div class="contact-links">
      <a href="mailto:alycewang@theschool.com" class="contact-item">
        <div class="left">
          <span class="text underline underline-offset-2"
            >alycewang@theschool.com</span
          >
          <span class="description">合作洽談</span>
        </div>
        <div class="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </a>

      <a href="#" class="contact-item">
        <div class="left">
          <img src="/images/YtIcon.svg" alt="YT" />
          <span class="text">Youtube</span>
          <span class="description">最新影片室</span>
        </div>
        <div class="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </a>

      <a href="#" class="contact-item">
        <div class="left">
          <img src="/images/PodcastIcon.svg" alt="podcast" />
          <span class="text">podcast</span>
          <span class="description">最新話題室</span>
        </div>
        <div class="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </a>

      <a href="#" class="contact-item">
        <div class="left">
          <img src="/images/FbIcon.svg" alt="FB" />
          <span class="text">Facebook</span>
          <span class="description">粉絲社群</span>
        </div>
        <div class="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </a>

      <a href="#" class="contact-item">
        <div class="left">
          <img src="/images/linkedinIcon.svg" alt="linkedin" />

          <span class="text">linkedin</span>
          <span class="description">職場交流</span>
        </div>
        <div class="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </a>

      <a href="#" class="contact-item">
        <div class="left">
          <img src="/images/IgIcon.svg" alt="instagram" />

          <span class="text">Instagram</span>
          <span class="description">日常分享</span>
        </div>
        <div class="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
// No additional script needed for this component
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}

.title {
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 48px;
  }
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  text-decoration: none;
  color: #000;
  border-bottom: 1px solid #f0f0f0;
}

.left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #4a4a4a;
}

.email-icon {
  color: #4285f4;
}

.youtube-icon {
  color: #ff0000;
}

.podcast-icon {
  color: #8e44ad;
}

.facebook-icon {
  color: #3b5998;
}

.linkedin-icon {
  color: #0077b5;
}

.instagram-icon {
  color: #e4405f;
}

.text {
  font-size: 16px;
}

.description {
  margin-left: 8px;
}

.arrow {
  color: #999;
}

@media (max-width: 480px) {
  .contact-container {
    padding: 16px;
  }

  .description {
    display: none;
  }
}
</style>
