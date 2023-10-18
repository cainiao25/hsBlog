<template>
  <div class="widget-container">
    <div class="widget-header">
      博客日历
    </div>
    <a-calendar
      :fullscreen="false"
      :disabled-date="disabledDate"
      @panelChange="panelChange"
      @select="selectDate"
    />
  </div>
</template>

<script setup lang="ts">
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { ref, onMounted } from 'vue';
import moment from 'moment';

const dateMode = ref<'month' | 'year'>('month');
const emit = getCurrentInstance()?.emit;

const disabledDate = (date: moment.Moment): boolean => {
  if (dateMode.value === 'year') {
    return date && date > moment().endOf('month');
  }
  return date && date > moment().endOf('day');
};

const panelChange = (date: moment.Moment, mode: 'month' | 'year'): void => {
  dateMode.value = mode;
};

const selectDate = (date: moment.Moment): void => {
  let inputDateMoment: [moment.Moment, moment.Moment];
  if (dateMode.value === 'year') {
    const start = moment(date.startOf('month'));
    const end = moment(date.endOf('month'));
    inputDateMoment = [start, end];
  } else {
    inputDateMoment = [date, date];
  }
  window.scrollTo(0, 0);
  emit?.('selectCalendar', inputDateMoment);
};

</script>