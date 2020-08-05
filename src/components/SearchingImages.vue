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
      <SearchResultItem v-if="results.length !== 0" :results="results" />
      <h2 v-else>No photos for your input</h2>
    </v-container>
  </div>
</template>

<script>
  import SearchResultItem from "@/components/SearchResultItem";

  export default {
    name: 'SearchTest',
    data: () => ({
      debounce: null,
      results: []
    }),
    components: {
      SearchResultItem
    },
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
