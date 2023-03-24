<template>
  <b-card class="dashboard-filled-line-chart" no-body>
    <b-card-body>
      <div class="float-left float-none-xs">
        <div class="d-inline-block">
          <h5 class="d-inline">{{ $t('用戶趨勢') }}</h5>
          <span class="text-muted text-small d-block">{{ $t('visitors') }}</span>
        </div>
      </div>
      <b-dropdown
        id="ddown5"
        :text="$t('本周')"
        size="xs"
        variant="outline-primary"
        class="float-right float-none-xs mt-2"
      >
        <b-dropdown-item>{{ $t('上週') }}</b-dropdown-item>
        <b-dropdown-item>{{ $t('本月') }}</b-dropdown-item>
      </b-dropdown>
    </b-card-body>
    <div class="chart card-body pt-0">
      <area-chart :data="areaChartData" container-class="chart" shadow />
    </div>
  </b-card>
</template>
<script>
import AreaChart from "../../components/Charts/Area";
import { areaChartData } from "../../data/charts";

export default {
  components: {
    "area-chart": AreaChart
  },
  data() {
    return {
      areaChartData
    };
  }
};
</script>
