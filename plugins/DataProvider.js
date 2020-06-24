import Vue from 'vue'
const DataProvider = {
  props: ['url', 'modifier'],
  data: () => ({
    data: null,
    loaded: false
  }),
  created() {
    this.$axios.get(`/api/${this.url}`).then(({ data }) => {
      this.data = data.data
      this.loaded = true
    })
  },
  render() {
    let data = this.data
    if (this.modifier) {
      data = this.modifier(data)
    }
    const slot = this.$scopedSlots.default({
      loading: !this.loaded,
      data
    })
    return Array.isArray(slot) ? slot[0] : slot
  }
}

Vue.component('DataProvider', DataProvider)
