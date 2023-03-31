<template>
<div class="rounded">
    <b-row>
        <b-colxx xxs="12">
            <h1>健檢卡</h1>
            <piaf-breadcrumb />
            <div class="separator mb-5"></div>
        </b-colxx>
    </b-row>
    <b-row>
        <b-colxx xxs="12" xl="8" class="col-left">
            <b-card class=" ratio-16-9 mb-5">
                <b-card-body>
                    <single-lightbox
                    thumb="/assets/img/cards/gold.jpg"
                    large="/assets/img/cards/gold.jpg"
                    class-name="social-header card-img"
                    />
                </b-card-body>
            </b-card>

            <b-card class="mb-4">
                <icon-cards></icon-cards>
            </b-card>
        </b-colxx>
    </b-row>
</div>
</template>

<script>

import IconCards from "../../../containers/ui/IconCards.vue";
import SingleLightbox from "../../../containers/ui/SingleLightbox";
export default {
  components: {
    "icon-cards": IconCards,
    "single-lightbox": SingleLightbox
  }
};
</script>

<style>
.ratio-16-9 > .card {
    position: relative;
    height: 0;
    padding-bottom: 56.25%; 
}
</style>