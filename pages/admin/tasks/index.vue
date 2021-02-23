<template>
  <v-container>
    <v-card :disabled="loading">
      <v-data-table
        :footer-props="{
          'items-per-page-all-text': 'Semua',
          itemsPerPageText: 'Item per halaman',
          'show-current-page': true,
          'show-first-last-page': true
        }"
        :headers="headers"
        :items="items"
        item-key="id"
        class="elevation-1"
        no-data-text="Data kosong"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-btn small color="primary" to="/admin/tasks/add">
              <span>buat tugas baru</span>
              <v-icon small class="ml-2">mdi-briefcase-plus-outline</v-icon>
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:[`item.date`]="{ item }">
          {{ _.get(item, 'createdAt', '-') | date }}
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <v-chip v-if="_.get(item, 'done', false)" color="primary" small>
            selesai
          </v-chip>
          <v-chip v-else small>belum selesai</v-chip>
        </template>
        <template v-slot:[`item.action`]="{ item }">
          <v-btn icon small @click.stop="remove(item.id)">
            <v-icon small>mdi-briefcase-remove-outline</v-icon>
          </v-btn>
          <v-btn :disabled="item.done" icon small @click.stop="done(item.id)">
            <v-icon small>mdi-briefcase-check-outline</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script lang="ts" src="./index.ts"></script>
