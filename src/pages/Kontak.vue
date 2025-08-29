<template>
    <div class="kontak">
        <PageHeader
        title="Hubungi Kami"
        subTitle="Home - Kontak"
    />
        <KontakDetail />
    </div>
</template>

<script>
import KontakDetail from "@/components/KontakDetail.vue";
import PageHeader from "@/components/PageHeader.vue";

export default {
    name:  'KontakPage',
    components: {
        KontakDetail,
        PageHeader
    },
}
</script>
<style scoped>
</style>