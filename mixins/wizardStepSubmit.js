import { mapGetters } from 'vuex'
export default {
  data: () => ({
    showRequiredError: false,
    submitErrorText: '',
    valid: false
  }),
  computed: {
    ...mapGetters({
      itemId: 'newLet/itemId'
    })
  },
  methods: {
    async submit() {
      this.$refs.form.validate()
      this.showRequiredError = !this.valid
      this.submitErrorText = ''
      if (!this.valid && this.$refs.errorBlock) {
        this.$refs.errorBlock.$el.scrollIntoView()
      }
      if (this.valid) {
        try {
          const { data } = await this.$axios.post('/api/unit', {
            id: this.itemId,
            recordContent: this.getSubmitData(),
            step: this.step
          })
          if (this.step === '1_1') {
            // await this.$router.push(
            //   this.localePath(`/become-a-host/${data._id}/`)
            // )
            history.replaceState({}, null, `/become-a-host/${data._id}/`)
          }
          this.$store.dispatch('newLet/setState', {
            key: 'itemId',
            val: data._id
          })
        } catch (e) {
          const submitErrors = this.submitErrors
          for (const key in submitErrors) {
            this.submitErrorText += submitErrors[key][0] + '<br />'
          }
          this.showRequiredError = true
          if (this.$refs.errorBlock) {
            setTimeout(() => {
              this.$refs.errorBlock.$el.scrollIntoView()
            })
          }
          return false
        }
      }
      return this.valid
    }
  }
}
