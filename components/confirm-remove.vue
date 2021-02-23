<template>
  <div>
    <v-dialog v-model="open" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <v-spacer class="headline">Menghapus Obat</v-spacer>
          <v-btn text icon @click="cancel()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          anda yakin akan menghapus "{{
            _.get(medicine, 'medicine.name', '-')
          }}"?
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn @click.stop="cancel()">Batal</v-btn>
          <v-btn color="error" @click.stop="confirm()">
            <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
            Ya, hapus
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" src="./confirm-remove.ts"></script>
