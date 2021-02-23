<template>
  <v-app dark style="overflow: hidden">
    <v-banner single-line sticky> Al Amanah </v-banner>
    <v-carousel hide-delimiters :show-arrows="false" height="250">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        active-class="header-carousel"
      >
        <v-sheet color="transparent" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="header-title">Yayasan Al Amanah RW 05 Kawaluyaan</div>
          </v-row>
        </v-sheet></v-carousel-item
      >
    </v-carousel>
    <v-btn text @click="logout()"> Login </v-btn>
  </v-app>
</template>

<script lang="ts" src="./index.ts"></script>
