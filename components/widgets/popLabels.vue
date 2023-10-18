<template>
  <div class="widget-container">
    <div class="widget-header">热门标签</div>
    <div class="widget-body">
      <a-spin :spinning="spinning" />
      <template v-if="!spinning">
        <div v-if="list.length">
          <span
            v-for="(item, index) in list"
            :key="index"
            class="pop-label"
            @click="selectLabel(item._id)"
            >
              {{ item._id }}
            </span
          >
        </div>
        <div v-else class="no-data">
          <a-empty> <span slot="description">暂无内容</span> </a-empty>
        </div>
      </template>
    </div>
  </div>
</template> 

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { IResp } from "@/types";

const emit = getCurrentInstance()?.emit;
const list = ref([]);
const spinning = ref(false);
const fetchLabels = async () => {
  // spinning.value = true;
  // const { code, data }: IResp = await $axios.$get("/api/popLabels");
  // if (code === 1) {
  //   list.value = data.labels;
  // }
  // spinning.value = false;
};
onMounted(fetchLabels);
const selectLabel = (label:any) => {
  window.scrollTo(0, 0);
  emit?.("selectLabel", label);
};
</script> 

<style scoped>
.pop-label {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #555;
  border-radius: 50px;
  background-color: #eee;
  transition: all 0.3s ease;
  padding: 3px 14px;
  margin-right: 7px;
  margin-bottom: 10px;
  cursor: pointer;
}
.pop-label:hover {
  color: #fff;
  background-color: #1890ff;
}
</style>