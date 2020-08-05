<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
                  placeholder="Enter Search Keyword"
                  @input="searchImages"
                  outlined
                  hide-details
          />
        </v-col>
      </v-row>
      <v-row v-if="results.length">
        <v-col v-for="result in results" :key="result.id" cols="3">
          <SearchResultItem :result="result" />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <h2>No photos for your input</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import SearchResultItem from "@/components/SearchResultItem";

  export default {
    name: 'SearchTest',
    components: {
      SearchResultItem
    },
    data: () => ({
      debounce: null,
      results: []
    }),
    created() {
      this.getImages('')
    },
    methods: {
      async getImages(keyword) {
        let filteredKeyword = keyword.toLowerCase()
        filteredKeyword = filteredKeyword.replace(/ /g,"+")

        try {
          const response = await this.$http.get('/', {
            params: {
              q: `${filteredKeyword}`
            }
          })

          this.results = response.data.hits
        } catch (e) {
          console.error(e)
        }
      },
      searchImages(keyword) {
        clearTimeout(this.debounce)
        this.debounce = setTimeout(() => {
          this.getImages(keyword)
        }, 500)
      }
    }
  }
</script>
