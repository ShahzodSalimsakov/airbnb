<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card ref="form">
        <v-card-text>
          <v-select
            ref="place"
            v-model="place"
            :items="placeItems"
            label="Для начала сузим выбор"
            placeholder="Выберите 1 вариант"
          ></v-select>
        </v-card-text>
        <div v-if="place">
          <v-card-text>
            <v-select
              v-model="typeOfHousing"
              :items="type_of_housing"
              label="Теперь выберите тип жилья"
              placeholder="Выберите тип жилья"
            ></v-select>
            <p v-if="typeOfHousing">{{ descriptionHouse.description }}</p>
          </v-card-text>
          <div v-if="typeOfHousing">
            <v-card-text>
              <h3>Что будет в распоряжении гостей?</h3>
              <v-radio-group v-model="disposalOfGuests" :mandatory="false">
                <v-radio label="Жилье целиком" value="radio-1"></v-radio>
                <div>
                  Всё жилье целиком в распоряжении гостей: обычно это спальня,
                  ванная и кухня.
                </div>
                <v-radio label="Отдельная комната" value="radio-2"></v-radio>
                <div>
                  Гостям предоставляется отдельная спальня, остальные помещения
                  используются совместно.
                </div>
                <v-radio label="Место в комнате" value="radio-3"></v-radio>
                <div>
                  Гости спят в общей спальне или помещении с другими людьми.
                </div>
              </v-radio-group>
            </v-card-text>
            <v-card-text>
              <h3>Это помещение предназначено только для гостей?</h3>
              <v-radio-group v-model="forGuest" :mandatory="false">
                <v-radio
                  label="Да, им пользуются в основном только гости"
                  value="radio-4"
                ></v-radio>
                <v-radio
                  label="Нет, я храню здесь личные вещи"
                  value="radio-5"
                ></v-radio>
              </v-radio-group>
            </v-card-text>
            <v-card-text>
              <h3>Вы размещаете объявление на Airbnb от лица компании?</h3>
              <v-radio-group v-model="onBehalfOfTheCompany" :mandatory="false">
                <v-radio
                  label="Да, я управляю компанией или работаю в ней"
                  value="radio-6"
                ></v-radio>
                <v-radio
                  label="Нет, это ко мне не относится"
                  value="radio-7"
                ></v-radio>
                <div>
                  Это даст вам доступ к подходящим функциям Airbnb — гости этого
                  не увидят, и выбор никак не повлияет на позиции вашего жилья в
                  поиске.
                </div>
              </v-radio-group>
            </v-card-text>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    disposalOfGuests: '',
    forGuest: '',
    onBehalfOfTheCompany: '',
    place: '',
    typeOfHousing: '',
    placeItems: [
      {
        value: 1,
        text: 'Квартира'
      },
      {
        value: 2,
        text: 'Дом'
      },
      {
        value: 3,
        text: 'Жилье при доме / квартире'
      },
      {
        value: 4,
        text: 'Уникальное жилье'
      },
      {
        value: 5,
        text: 'B&B'
      },
      {
        value: 6,
        text: 'Бутик-отель'
      }
    ],
    type_of_housing: [
      {
        value: 1,
        text: 'Хижина',
        type: [1, 2],
        description:
          'Хижины делают из натуральных материалов: бревен или древесины. Обычно они находятся в лесах или горах.'
      },
      {
        value: 2,
        text: 'Кондоминиум',
        type: [1]
      },
      {
        value: 3,
        text: 'Каса партикуляр (Куба)',
        type: [1, 2]
      },
      {
        value: 4,
        text: 'Лофт',
        type: [1]
      },
      {
        value: 5,
        text: 'Апартаменты',
        type: [1]
      },
      {
        value: 6,
        text: 'Дом',
        type: [2]
      },
      {
        value: 7,
        text: 'Бунгало',
        type: [2]
      },
      {
        value: 8,
        text: 'Шале',
        type: [2]
      },
      {
        value: 9,
        text: 'Фермерский домик',
        type: [2]
      },
      {
        value: 10,
        text: 'Кикладский дом (Греция)',
        type: [2]
      },
      {
        value: 11,
        text: 'Даммузо (Италия)',
        type: [2]
      },
      {
        value: 12,
        text: 'Купольный дом',
        type: [2]
      },
      {
        value: 13,
        text: 'Землянка',
        type: [2]
      },
      {
        value: 14,
        text: 'Жилье на ферме',
        type: [2]
      },
      {
        value: 15,
        text: 'Плавучий дом',
        type: [2]
      },
      {
        value: 16,
        text: 'Маяк',
        type: [2]
      },
      {
        value: 17,
        text: 'Квартира',
        type: [1],
        description:
          'Квартиры находятся в многоквартирных домах или комплексах, где живут и другие люди.'
      }
    ]
  }),
  computed: {
    typeHouses() {
      return [...this.type_of_housing].filter((item) =>
        item.type.includes(this.place)
      )
    },
    descriptionHouse() {
      return [...this.type_of_housing].filter(
        (item) => item.value === this.typeOfHousing
      )[0]
    }
  },
  methods: {}
}
</script>

<style></style>
