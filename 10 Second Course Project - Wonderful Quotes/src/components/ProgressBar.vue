
<template>
  <div>
    <h3>Quotes Added</h3>
    <div class="progressbar-wrapper">
      <div
        class="progressbar text-center"
        :style="{ width: setQuotesCount + '%' }"
      >
        {{ quotesCountParent > 0 ? `${quotesCountParent} / ${maxQuoteLimit}` : '' }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    quotesCountParent: Number,
    maxQuoteLimit: Number,
  },
  data: function () {
    return {};
  },

  computed: {
    setQuotesCount: function () {
      return this.quotesCountParent * 10;
    },
  },
};
</script>
<style scoped>
.text-center {
  text-align: center;
}
.progressbar-wrapper {
  width: 100%;
  height: 20px;
  margin: auto;
  border-radius: var(--br);
  background-color: #eee;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: width 500ms;
}

.progressbar {
  display: grid;
  place-items: center;
  width: 0%;
  height: 100%;
  margin: 0;
  color: white;
  background-color: var(--color-main);
}
</style>
<style>
</style>
