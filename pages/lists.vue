<script setup lang="ts">
    const { data: list } = await useFetch(
        "https://luckiest-api.gigmagic.io/luckiest/gameVendors/fetch",
        {
            method: "POST",
            body: {
                id: "65f3f0980fc3c4c39ac3a492",
                sid: "65f3f0305f8b43520fb466a7",
                path: "/luckiest/gameVendors/fetch",
                params: {
                    order: "label",
                    order_direction: "asc",
                },
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
                sessionId: "65f3f0305f8b43520fb466a7",
            },
        },
    )

    function getListValue(list: any) {
        // const test= [...toRaw(list.res)]
        // const response = test.map((r: any) => ({
        //     name: r.name,
        //     actions: r.actions.map((i: any) => i.id),
        // }))
        return list.res.map((r: any) => ({
            name: r.name,
            id: r.id,
        }))
    }
</script>

<template>
    <div class="text-white">{{ getListValue(list) }}</div>
</template>

<style scoped></style>
