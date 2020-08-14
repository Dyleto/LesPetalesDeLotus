<template>
  <v-list-item>
    <v-list-item-content class="list-item-character-name">
      <v-list-item-title>{{ character.name }}</v-list-item-title>
    </v-list-item-content>
    <v-list-item-content>
      <span> {{ character.equipped_item_level }}    </span>
    </v-list-item-content>
    <v-list-item-content
      v-for="(item, i) in items"
      :key="i"
      class="list-item-items"
    >
      <v-img
        :src="item.media.icon"
        max-width="40"
        max-height="40"
        class="grey lighten-2 list-item-items-icon"
      />
      <span :class="`item-level ${item.quality ? 'quality-' + item.quality.type.toLowerCase() : ''}`"> {{ item.level ? item.level.value : '' }}</span>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
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
      character: {}
    }
  },
  mounted () {
    this.character = this.member.character
    this.loadCharacterInfo()
    this.loadItems()
  },
  methods: {
    async loadItems () {
      if (!this.member.itemsLoaded) {
        await this.$store.dispatch('members/loadMemberItems', this.member.character.name)
      }

      this.items = this.member.character.items
    },
    async loadCharacterInfo () {
      if (!this.member.characterInfoLoaded) {
        await this.$store.dispatch('members/loadMemberCharacterInfo', this.member.character.name)
      }

      this.character = this.member.character
    }
  }
}
</script>
 <style scoped>
.list-item-character-name {
  max-width: 200px;
}

.list-item-items {
  max-width: 50px;
  padding: 5px;
  position: relative;
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
