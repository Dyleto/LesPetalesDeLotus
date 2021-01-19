<template>
  <div class="row">
    <div class="col-12 col-lg-8 big_card home_card">
      <div class="content_card" style="background-image: url(/nathria.jpg);">
        <div class="fade" />
        <div class="title_card">
          <div class="text-subtitle-2 subtitle">
            Tous les Lundis et Mercredis de 21h00 à 23h30
          </div>
          <div class="text-h6 text-md-h4 title">
            Raid - Château Nathria
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 py-0 home_card">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-12 small_card home_card">
          <div class="content_card" style="background-image: url(/Shadowland.jpg);">
            <div class="fade" />
            <div class="affixes">
              <a
                v-for="(affix, i) in currentWeekAffixes"
                :key="i"
                :href="'https://fr.wowhead.com/affix='+ affix "
                target="_blank"
              >
                <v-img
                  :src="'/affixes/affix_' + affix + '.jpg'"
                  max-width="58"
                  max-height="58"
                  class="item-icon"
                /></a>
            </div>
            <div class="title_card">
              <div class="text-subtitle-2 subtitle">
                <div class="nextweek-affixes">
                Et pour la semaine prochaine :
                  <a
                    v-for="(affix, i) in nextWeekAffixes"
                    :key="i"
                    :href="'https://fr.wowhead.com/affix='+ affix "
                    target="_blank"
                    class="affix-icon"
                  >
                    <v-img
                      :src="'/affixes/affix_' + affix + '.jpg'"
                      max-width="25"
                      max-height="25"
                      class="item-icon"
                    /></a>
                </div>
              </div>
              <div class="text-h4 title">
                Affixes MM+
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-12 small_card home_card">
          <div class="content_card" style="background-image: url(/soontm.gif);">
            <div class="fade" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4 small_card home_card">
      <div class="content_card" style="background-image: url(/Opulence.jpg);">
        <div class="fade" />
        <div class="title_card">
          <div class="text-subtitle-2 subtitle">
            Merci d'aider la guilde pour les recettes de <a class="link" target="_blank" href="https://fr.wowhead.com/spell=308403/festin-de-fine-gueule" data-wowhead="item=308403">festins</a> et de <a  class="link" target="_blank" href="https://fr.wowhead.com/spell=307087/chaudron-%C3%A9ternel" data-wowhead="item=307087">chaudrons</a>
          </div>
          <div class="text-h4 title">
            Préparation des raids
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4 small_card home_card">
      <div class="content_card" style="background-image: url(/soontm.gif);">
        <div class="fade" />
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4 small_card home_card">
      <div class="content_card" style="background-image: url(/soontm.gif);">
        <div class="fade" />
      </div>
    </div>
  </div>
</template>

<script>
import affix from '@/services/affix'

export default {
  data () {
    return {
      currentWeekAffixes: []
    }
  },
  computed: {
    nextWednesday () {
      const date = new Date()
      const day = date.getDay()
      date.setDate(date.getDate() - day + (day < 3 ? -4 : 3) + 7)

      return date
    }
  },
  created () {
    this.currentWeekAffixes = affix.getCurrentWeekAffixes()
    this.nextWeekAffixes = affix.getNextWeekAffixes()
  }
}
</script>

<style scoped>
.affixes {
  height: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.nextweek-affixes {
  display: flex;
  align-items: center;
}

.nextweek-affixes .affix-icon {
  margin-left: 15px;
}

.fade {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 60%, #121212e6 90%);
}

.content_card {
  margin: 10px;
  background-color: #000;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  position: relative;
}

.title_card {
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
}

.title_card > .title,
.link {
  color: var(--lpdl-primary);
}

.link {
  font-weight: bold;
  text-decoration: none;
  font-size: 1.3em !important;
}

.title_card > .subtitle {
  text-shadow: 0 0 1px transparent, 0 1px 2px #000;
}

.home_card {
  display: flex;
  align-items: center;
  justify-content: center;
}

.small_card,
.big_card {
  height: calc(33vh - 12px);
}

@media (min-width: 1264px) {
  .big_card {
    height: calc(66vh - 24px);
  }
}
</style>
