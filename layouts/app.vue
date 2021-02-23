<template>
  <v-app dark>
    <!-- left menu -->
    <v-navigation-drawer :mini-variant="leftDrawer" class="primary" fixed app>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="providerLogo"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            Yayasan Al Amanah
          </v-list-item-title>
          <v-list-item-subtitle> {{ providerName }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <template v-for="(item, i) in menuFilter(items, search)">
          <v-list-item v-if="!item.items" :key="i" :to="item.to">
            <v-list-item-icon>
              <v-icon>mdi-{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-list-group
            v-if="item.items"
            :key="i"
            v-model="item.active"
            :prepend-icon="`mdi-${item.icon}`"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="subItem in menuFilter(item.items, search)"
              :key="subItem.title"
              :to="subItem.to"
            >
              <v-list-item-content>
                <v-list-item-title>{{ subItem.title }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>

      <template v-slot:append>
        <div v-if="!leftDrawer" class="pa-2">
          <v-btn class="secondary" block @click="logout"> Logout </v-btn>
        </div>
        <div v-if="leftDrawer" class="pa-2">
          <v-btn icon @click="logout">
            <v-icon color="white">mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- app bar -->
    <v-app-bar :clipped-left="clipped" fixed app class="elevation-2">
      <v-app-bar-nav-icon @click="leftDrawer = !leftDrawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>

    <!-- main page -->
    <v-main>
      <nuxt />
    </v-main>

    <!-- navigation footer -->
    <v-footer app fixed inset paddless class="elevation-2">
      <v-breadcrumbs :items="breadcrumbs" class="pa-1">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
        <template v-slot:item="props">
          <nuxt-link
            v-if="!props.item.disabled"
            class="v-breadcrumbs__item"
            :to="props.item.to"
          >
            <v-icon v-if="props.item.icon" small class="mr-2" color="primary"
              >mdi-{{ props.item.icon }}</v-icon
            >
            {{ props.item.text }}
          </nuxt-link>
          <span
            v-else
            class="v-breadcrumbs__item v-breadcrumbs__item--disabled"
          >
            <v-icon v-if="props.item.icon" small color="accent" class="mr-2"
              >mdi-{{ props.item.icon }}</v-icon
            >
            {{ props.item.text }}
          </span>
        </template>
      </v-breadcrumbs>
    </v-footer>

    <!-- right drawer -->
    <v-navigation-drawer v-model="rightDrawer" right temporary fixed>
      <v-list dense>
        <v-list-item two-line>
          <v-list-item-avatar class="text-center" color="primary" size="36">
            <v-img
              v-if="profilePicture && profilePicture.length"
              :src="profilePicture"
            />
            <template v-if="!profilePicture || !profilePicture.length">
              {{ profileName | initial }}
            </template>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title text-capitalize">{{
              profileName
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ profileEmail }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item @click.stop="logout()">
          <v-list-item-title>Keluar</v-list-item-title>
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- update notifications -->
    <v-snackbar v-model="isUpdate" :timeout="-1" :top="true" color="warning">
      <v-icon class="mr-2">mdi-alert-outline</v-icon>
      Versi terbaru telah tersedia
      <v-btn text outlined @click="updateApp()"> Update Sekarang </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts" src="./app.ts"></script>
