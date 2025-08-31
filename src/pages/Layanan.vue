<template>
    <div>
        <PageHeader
        title="Layanan Kami"
        subTitle="Home - Layanan Kami"
    />
        <LayananSection />
    </div>
</template>
<script>
import PageHeader from "@/components/PageHeader.vue";
import LayananSection from "@/components/layanan/LayananSection.vue";
export default {
    name: "LayananPage",
    components: {
        PageHeader,
        LayananSection
    },
}
</script>
<style scoped>
    
</style>