<template>
    <div class="kontak">
        <Banner />
        <KontakDetail />
    </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import KontakDetail from "@/components/KontakDetail.vue";

export default {
    name:  'KontakPage',
    components: {
        Banner,
        KontakDetail,
    },
}
</script>
<style scoped>
.kontak {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 72px 0;
  align-items: center;
  overflow-x: hidden;
}

</style>