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
  possibleParty: false,
  climbStairs: false,
  noisy: false,
  pets: false,
  parking: false,
  commonArea: false,
  convenienceLimitations: false,
  cctv: false,
  gun: false,
  dangerPets: false,
  upToDate: false,
  rentedHouse: '',
  receiveGuests: '',
  ReserveHouse: '',
  reserveHouseHourFrom: '',
  reserveHouseHourUntil: '',
  reserveHouseMonth: '',
  price: '',
  specOffer: false,
  discontWeek: '',
  discontMonth: ''
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
  possibleParty: (state) => state.possibleParty,
  climbStairs: (state) => state.climbStairs,
  noisy: (state) => state.noisy,
  pets: (state) => state.pets,
  parking: (state) => state.parking,
  commonArea: (state) => state.commonArea,
  convenienceLimitations: (state) => state.convenienceLimitations,
  cctv: (state) => state.cctv,
  gun: (state) => state.gun,
  dangerPets: (state) => state.dangerPets,
  upToDate: (state) => state.upToDate,
  rentedHouse: (state) => state.rentedHouse,
  receiveGuests: (state) => state.receiveGuests,
  ReserveHouse: (state) => state.ReserveHouse,
  reserveHouseHourFrom: (state) => state.reserveHouseHourFrom,
  reserveHouseHourUntil: (state) => state.reserveHouseHourUntil,
  reserveHouseMonth: (state) => state.reserveHouseMonth,
  price: (state) => state.price,
  specOffer: (state) => state.specOffer,
  discontWeek: (state) => state.discontWeek,
  discontMonth: (state) => state.discontMonth
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