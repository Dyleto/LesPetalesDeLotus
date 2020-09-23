<template>
  <div class="row">
    <div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1 d-flex align-center character-name" :style="{color: characterClassColor }" :title="member.username">
      {{ member.name }}
    </div>
    <div class="col-2 col-sm-1 col-md-1 col-lg-1 d-flex align-center ilevel" title="iLevel">
      {{ character.equipped_item_level }}
    </div>
    <div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1 d-flex align-center justify-space-around class-spec">
      <v-img
        class="class-icon"
        max-width="40"
        max-height="40"
        :src="characterClassIcon"
        :alt="characterClassName"
        :title="characterClassName"
      /><v-img
        class="class-icon"
        max-width="40"
        max-height="40"
        :src="characterSpecIcon"
        :alt="characterSpecName"
        :title="characterSpecName"
      />
    </div>
    <div class="col-12 col-md-7 col-lg-7 d-flex align-center list-item">
      <div
        v-if="items.length == 0"
        class="loader-container"
      >
        <v-progress-linear
          color="cyan accent-4"
          indeterminate
          rounded
          height="5"
        />
      </div>
      <div
        v-for="(item, i) in items"
        :key="i"
        class="item"
      >
        <a
          v-if="item.item && item.item.id"
          :href="'https://fr.wowhead.com/item=' + item.item.id"
          target="_blank"
        >
          <v-img
            :src="item.media.icon"
            max-width="40"
            max-height="40"
            class="item-icon"
          />
          <span :class="`item-level ${item.quality ? 'quality-' + item.quality.type.toLowerCase() : ''}`"> {{ item.level ? item.level.value : '' }}</span>
        </a>

        <v-img
          v-else
          title="Emplacement vide"
          :src="item.media.icon"
          max-width="40"
          max-height="40"
          class="item-icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import classes from '@/services/classes'

export default {
  props: {
    member: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      items: [],
      character: {},
      class: {},
      spec: {}
    }
  },
  computed: {
    characterClassColor () {
      return this.class && this.class.media ? this.class.media.color : ''
    },
    characterClassIcon () {
      return this.class && this.class.media ? this.class.media.icon : ''
    },
    characterClassName () {
      return this.class ? this.class.name : ''
    },
    characterSpecIcon () {
      return this.spec ? this.spec.icon : ''
    },
    characterSpecName () {
      return this.spec ? this.spec.name : ''
    }
  },
  mounted () {
    this.character = this.member
    this.loadCharacterInfo()
    this.loadItems()
  },
  methods: {
    async loadItems () {
      if (!this.member.itemsLoaded) {
        await this.$store.dispatch('members/loadMemberItems', this.member.name)
      }

      this.items = this.member.items
    },
    async loadCharacterInfo () {
      if (!this.member.characterInfoLoaded) {
        await this.$store.dispatch('members/loadMemberCharacterInfo', this.member.name)
      }

      this.character = this.member
      this.loadClassAndSpec()
    },
    loadClassAndSpec () {
      if (this.character && this.character.character_class) {
        this.class = classes.getById(this.character.character_class.id)
        this.spec = this.class.specializations.find(s => s.id === this.character.active_spec.id)
      }
    }
  }
}
</script>
<style scoped>
.character-name {
  min-width: 115px;
}

.level {
  min-width: 55px;
}

.class-spec {
  min-width: 130px;
}

.loader-container {
  height: 50px;
  display: flex;
  flex: 1;
  align-items: center;
}

.character-line {
  width: 1100px;
  height: 52px;
  text-align: left;
}

.list-item-character-name {
  max-width: 150px;
  min-width: 100px;
}

.list-item {
  overflow-x: auto;
  height: 74px;
}

.loader-container,
.list-item {
  max-width: 824px;
}

.item {
  max-width: 50px;
  min-width: 50px;
  padding: 5px;
  position: relative;
}

.equipped-ilevel {
  min-width: 40px;
}

.item-level {
  position: absolute;
  font-size: 0.8em;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
}
 </style>
