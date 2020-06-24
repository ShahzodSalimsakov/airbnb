<template>
  <div class="relative inline-block text-left lg:mt-0 mr-4 mt-2">
    <div>
      <button
        @click="open = !open"
        type="button"
        class="bg-white border duration-150 focus:border-blue-300 focus:outline-none focus:shadow-outline-blue inline-flex justify-center leading-5 px-4 text-base transition w-full"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {{ user.first_name }}
        <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-20"
      v-show="open"
    >
      <div
        class="rounded-md bg-white shadow-xs"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div class="py-1">
          <nuxt-link
            to="profile"
            class="block px-4 py-2 black--text text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            >Профиль
          </nuxt-link>
        </div>
        <div class="border-t border-gray-100"></div>
        <div class="py-1">
          <a
            href="javascript:void(0)"
            @click.prevent="logout"
            class="block px-4 py-2 black--text text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
            >Выйти
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'HeaderProfileDropdown',
  data() {
    return {
      open: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('')
    }
  }
}
</script>

<style scoped></style>
