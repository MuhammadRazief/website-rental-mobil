<template>
    <div class="kontak">
        <KontakDetail />
    </div>
</template>

<script>
import KontakDetail from "@/components/KontakDetail.vue";

export default {
    name:  'KontakPage',
    components: {
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