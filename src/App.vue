<template>
  <v-app>
    <v-main>
      <SearchingImages/>
    </v-main>
  </v-app>
</template>

<script>
import SearchingImages from './components/SearchingImages';

export default {
  name: 'App',

  components: {
    SearchingImages,
  },
};
</script>
