<template>
  <div>
    <CLanguageSwitcher />
    <h1 class="text-red-600 text-4xl my-2 font-bold">{{ $t("hello") }}</h1>
    <button @click="store.count++">Increment {{ store.getCount }}</button>
    <button @click="fetchData">Fetch data</button>
    <pre v-if="todoData">{{ todoData }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { useApi } from "@/composables/useApi.ts";
import { useMainStore } from "@/store";
import CLanguageSwitcher from "@/components/CLanguageSwitcher.vue";

const store = useMainStore();
const $api = useApi();

const todoData = ref();

async function fetchData() {
  if (todoData.value) return;
  try {
    const { data } = await $api.$get("/todos/1");
    todoData.value = data;
  } catch {
    alert("Error");
  }
}
</script>
