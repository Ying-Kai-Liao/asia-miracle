<template>
  <b-card :title="$t('銷售數量')">
    <div class="dashboard-line-chart">
      <line-chart :data="lineChartData" shadow />
    </div>
  </b-card>
</template>
<script>
import LineChart from "../../components/Charts/Line";
import { lineChartData } from "../../data/charts";

export default {
  components: {
    "line-chart": LineChart
  },
  data() {
    return {
      lineChartData
    };
  },
  methods: {
    refreshButtonClick() {
      console.log("refreshButtonClick");
    }
  }
};
</script>
