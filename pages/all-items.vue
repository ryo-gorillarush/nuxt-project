<script setup lang="ts">
    import { data } from "../assets/data"

    const allItems = ref<any>()

    async function fetchPromotion(id: string) {
        const data = $fetch(
            `https://luckiest-api.gigmagic.io/luckiest/sitefeatures/fetch/${id}`,
            {
                method: "POST",
                body: {
                    id: "65f3ef541c048ad72f49b6e7",
                    sid: "65f39a2f79be56c1d1882daa",
                    path: "/luckiest/sitefeatures/fetch/283482c1-8fcb-4642-b733-6ce258ee6140",
                    params: {},
                    options: {
                        isDevice: false,
                        token: "53178754061ea0449e6fe484",
                        baseUrl: "https://luckiest-api.gigmagic.io",
                        db: "luckiest",
                        noPing: true,
                        cms: true,
                        brand: "luckiest",
                    },
                    token: "53178754061ea0449e6fe484",
                    cms: true,
                    navigator: {
                        appCodeName: "Mozilla",
                        appName: "Netscape",
                        appVersion:
                            "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                        language: "en-US",
                        platform: "Win32",
                        product: "Gecko",
                        productSub: "20030107",
                        userAgent:
                            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                        vendor: "Google Inc.",
                        vendorSub: "",
                    },
                    sessionId: "65f39a2f79be56c1d1882daa",
                },
            },
        )

        return data.then((r: any) => r.res)
    }

    const result = computed(async () => {
        const r = await Promise.all(
            data.map(async (item: any) => {
                const config = await Promise.all([fetchPromotion(item.id)])
                return {
                    name: item.name,
                    config: config,
                }
            }),
        )
        const jsonObject = JSON.stringify(r)
        allItems.value = jsonObject
        return jsonObject
    })
    // const result = computed(async () => {
    //     const r = await Promise.all(
    //         data.map(async (item: any) => {
    //             const faqs = await Promise.all(
    //                 item.faqs.map((id: string) => fetchPromotion(id)),
    //             )
    //             return {
    //                 name: item.name,
    //                 faqs: faqs,
    //             }
    //         }),
    //     )
    //     const jsonObject = JSON.stringify(r)
    //     allItems.value = jsonObject
    //     return jsonObject
    // })
</script>

<template>
    <div class="text-white">{{ allItems }}</div>
    <div class="text-white">{{ result }}</div>
    <div class="text-white">test</div>
</template>

<style scoped></style>
