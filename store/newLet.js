export const state = () => ({
  letType: '',
  typeOfHousing: '',
  disposalOfGuests: '',
  forGuest: '',
  onBehalfOfTheCompany: '',
  bedsCount: '',
  bedsPerRoom: [],
  country: '',
  select: '',
  selectSafety: '',
  selectSpaces: '',
  selectedCode: '',
  phoneNumber: '',
  fromTwoYears: false,
  beforeTwoYears: false,
  possibleAnimals: false,
  possibleSmoking: false,
  possibleParty: false
})

export const getters = {
  letType: (state) => state.letType,
  typeOfHousing: (state) => state.typeOfHousing,
  disposalOfGuests: (state) => state.disposalOfGuests,
  forGuest: (state) => state.forGuest,
  onBehalfOfTheCompany: (state) => state.onBehalfOfTheCompany,
  bedsCount: (state) => state.bedsCount,
  bedsPerRoom: (state) => state.bedsPerRoom,
  country: (state) => state.country,
  select: (state) => state.select,
  selectSafety: (state) => state.selectSafety,
  selectSpaces: (state) => state.selectSpaces,
  selectedCode: (state) => state.selectedCode,
  phoneNumber: (state) => state.phoneNumber,
  fromTwoYears: (state) => state.fromTwoYears,
  beforeTwoYears: (state) => state.beforeTwoYears,
  possibleAnimals: (state) => state.possibleAnimals,
  possibleSmoking: (state) => state.possibleSmoking,
  possibleParty: (state) => state.possibleParty
}

export const mutations = {
  SET_STATE(state, { key, val }) {
    state[key] = val
  }
}

export const actions = {
  setState({ commit }, { key, val }) {
    commit('SET_STATE', { key, val })
  }
}
