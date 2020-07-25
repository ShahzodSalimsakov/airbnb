export const state = () => ({
  itemId: '',
  title: '',
  letType: '',
  typeOfHousing: '',
  disposalOfGuests: '',
  forGuest: '',
  guestsCount: 1,
  onBehalfOfTheCompany: '',
  bedsCount: 1,
  location: {
    lat: 41.310897130276416,
    lon: 69.28018172715117
  },
  bedsPerRoom: [
    {
      double: 0,
      single: 0,
      floorMatress: 0,
      sofa: 0,
      sofaBed: 0
    }
  ],
  bathCount: 0,
  country: '',
  comfortEquipment: '',
  safetyEquipment: '',
  selectSpaces: '',
  aboutLet: '',
  letAtmosphere: '',
  guestsCommunication: '',
  aboutDistrict: '',
  transportToLet: '',
  selectedCode: '',
  phoneNumber: '',
  childsFromTwoYears: false,
  childsBeforeTwoYears: false,
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
  discountWeek: '',
  discountMonth: '',
  address: '',
  flat: '',
  postIndex: '',
  calendarChosenDates: [],
  calendarMonths: [
    {
      month: new Date().getMonth(),
      year: new Date().getFullYear()
    },
    {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    },
    {
      month: new Date().getMonth() + 2,
      year: new Date().getFullYear()
    }
  ],
  updated_date: ''
})

export const getters = {
  itemId: (state) => state.itemId,
  title: (state) => state.title,
  letType: (state) => state.letType,
  typeOfHousing: (state) => state.typeOfHousing,
  disposalOfGuests: (state) => state.disposalOfGuests,
  forGuest: (state) => state.forGuest,
  location: (state) => state.location,
  guestsCount: (state) => state.guestsCount,
  onBehalfOfTheCompany: (state) => state.onBehalfOfTheCompany,
  bedsCount: (state) => state.bedsCount,
  bedsPerRoom: (state) => state.bedsPerRoom,
  bathCount: (state) => state.bathCount,
  country: (state) => state.country,
  comfortEquipment: (state) => state.comfortEquipment,
  safetyEquipment: (state) => state.safetyEquipment,
  selectSpaces: (state) => state.selectSpaces,
  aboutLet: (state) => state.aboutLet,
  letAtmosphere: (state) => state.letAtmosphere,
  guestsCommunication: (state) => state.guestsCommunication,
  aboutDistrict: (state) => state.aboutDistrict,
  transportToLet: (state) => state.transportToLet,
  selectedCode: (state) => state.selectedCode,
  phoneNumber: (state) => state.phoneNumber,
  childsFromTwoYears: (state) => state.childsFromTwoYears,
  childsBeforeTwoYears: (state) => state.childsBeforeTwoYears,
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
  discountWeek: (state) => state.discountWeek,
  discountMonth: (state) => state.discountMonth,
  address: (state) => state.address,
  flat: (state) => state.flat,
  postIndex: (state) => state.postIndex,
  calendarChosenDates: (state) => state.calendarChosenDates,
  updated_date: (state) => state.updated_date,
  calendarMonths: (state) => state.calendarMonths
}

export const mutations = {
  SET_STATE(state, { key, val }) {
    state[key] = val
  },
  SET_BEDS_PER_ROOM(state, { index, key, val }) {
    state.bedsPerRoom[index][key] = +val
  },
  TOGGLE_CALENDAR_DATE(state, { date }) {
    if (state.calendarChosenDates.includes(date)) {
      state.calendarChosenDates = state.calendarChosenDates.filter(
        (item) => item !== date
      )
    } else {
      state.calendarChosenDates.push(date)
    }
  },
  ADD_NEW_CALENDAR_MONTH(state, { month, year }) {
    state.calendarMonths.push({
      month,
      year
    })
  }
}

export const actions = {
  setState({ commit }, { key, val }) {
    commit('SET_STATE', { key, val })
  },
  setBedsPerRoom({ commit }, { index, key, val }) {
    commit('SET_BEDS_PER_ROOM', { index, key, val })
  },
  toggleChoosingDate({ commit }, { date }) {
    commit('TOGGLE_CALENDAR_DATE', { date })
  },
  addNewCalendarMonth({ commit }, { month, year }) {
    commit('ADD_NEW_CALENDAR_MONTH', { month, year })
  }
}
