<template>
  <v-container>
    <v-card :disabled="loading">
      <v-form ref="addForm" @submit.prevent="save()">
        <v-card-text>
          <v-text-field
            v-model="title"
            label="judul pekerjaan"
            filled
            required
          />
          <v-textarea
            v-model="description"
            label="deskripsi pekerjaan"
            filled
            required
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" type="submit"> Simpan </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts" src="./add.ts"></script>
