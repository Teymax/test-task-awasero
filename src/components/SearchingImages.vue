<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="11">
          <v-text-field
                  v-model="keyword"
                  placeholder="Enter Search Keyword"
                  @input="searchImages"
                  outlined
                  hide-details
          />

        </v-col>
        <v-col cols="1" class="d-flex align-center">
          <v-btn icon x-large @click="getImages(keyword)">
            <v-icon>mdi-file-find</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" v-for="result in results" :key="result.id">
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
    </v-container>
  </div>
</template>

<script>
  import customAxios from '@/plugins/customAxios'

  export default {
    name: 'SearchTest',
    data: () => ({
      keyword: '',
      debounce: null,
      results: []
    }),
    created() {
      this.getImages('')
    },
    methods: {
      getImages(keyword) {
       let filteredKeyword = keyword.toLowerCase()
        filteredKeyword = filteredKeyword.replace(/ /g,"+")

        customAxios.get('/', {
          params: {
            q: `${filteredKeyword}`
          }
        }).then(res => {
          this.results = res.data.hits
        }).catch(error => console.error(error))
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
