<template>
  <div class="page-header">
    <div class="overlay"></div>
    <div class="content">
      <div class="title-wrapper">
        <h1>{{ title }}</h1>
        <p>{{ subTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
  }
};
</script>

<style scoped>
.page-header {
  position: relative;
  background: url("https://images.unsplash.com/photo-1621998346149-3e4f82cddfdd?w=1600&auto=format&fit=crop&q=80")
    no-repeat center center;
  background-size: cover;
  min-height: 50vh;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.content {
  position: relative;
  max-width: 800px;
}

.title-wrapper {
  text-align: left;
}
h1 {
  font-size: 2.4rem;
  margin: 0;
}
p {
  font-size: 1.1rem;
  margin-top: 10px;
  text-align: center;
}

@media (max-width: 768px) {
  .page-header {
    padding-left: 20px; /* jarak dari kiri pada layar kecil */
    min-height: 30vh;
  }

  h1 {
    font-size: 2rem;
  }
}
</style>
