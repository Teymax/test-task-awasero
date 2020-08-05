<template>
    <v-row>
        <v-col v-for="result in results" cols="3" :key="result.id">
            <v-card
                    class="mx-auto"
                    max-width="400"
            >
                <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="result.previewURL"
                >
                </v-img>
                <v-card-title>{{ result.id }}</v-card-title>
                <v-card-subtitle class="pb-0">{{ result.user }}</v-card-subtitle>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "SearchResultItem",
        props: {
            results: {
                type: Array,
                default: null
            }
        }
    }
</script>

<style scoped>

</style>