<template>
  <div class="row">
    <div class="col-12 col-lg-8 big_card home_card">
      <div class="content_card" style="background-image: url(/WOW-Mounts-Feature.jpg);">
        <div class="fade" />
        <div class="title_card">
          <div class="text-subtitle-2 subtitle">
            Tous les Lundis et Mercredis à 21h00 jusqu'à la sortie de Shadowlands
          </div>
          <div class="text-h6 text-md-h4 title">
            Farm de Montures
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 py-0">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-12 small_card home_card">
          <div class="content_card" style="background-image: url(/nyalotha-the-waking-city-small.jpg);">
            <div class="fade" />
            <div class="affixes row">
              <a
                v-for="(affix, i) in currentWeekAffixes"
                :key="i"
                class="col-3 d-flex justify-center align-center"
                :href="'https://fr.wowhead.com/affix='+ affix.id "
                target="_blank"
              >
                <v-img
                  :src="'/affixes/affix_' + affix.id + '.jpg'"
                  max-width="58"
                  max-height="58"
                  class="item-icon"
                /></a>
            </div>
            <div class="title_card">
              <div class="text-subtitle-2 subtitle">
                Plus que {{ $moment().to(nextWednesday, true) }} pour faire votre donjon
              </div>
              <div class="text-h4 title">
                Affixes MM+
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-12 small_card home_card">
          <div class="content_card" style="background-image: url(//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/26/266TOMUJ6LRZ1594366586147.jpg);">
            <div class="fade" />
            <div class="title_card">
              <div class="text-subtitle-2 subtitle">
                Tous les Lundis et Mercredis à 21h00
              </div>
              <div class="text-h4 title">
                Farm de Montures
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4 small_card home_card">
      <div class="content_card" style="background-image: url(//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/o9/O9FSFPZMTDYZ1594226802755.jpg);">
        <div class="fade" />
        <div class="title_card">
          <div class="text-subtitle-2 subtitle">
            Tous les Lundis et Mercredis à 21h00
          </div>
          <div class="text-h4 title">
            Farm de Montures
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4 small_card home_card">
      <div class="content_card" style="background-image: url(//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/zh/ZHAGXXEOI9231594141868566.png);">
        <div class="fade" />
        <div class="title_card">
          <div class="text-subtitle-2 subtitle">
            Tous les Lundis et Mercredis à 21h00
          </div>
          <div class="text-h4 title">
            Farm de Montures
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-4 small_card home_card">
      <div class="content_card" style="background-image: url(//bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/mv/MVKK5EJOGPU61470421579108.jpg);">
        <div class="fade" />
        <div class="title_card">
          <div class="text-subtitle-2 subtitle">
            Tous les Lundis et Mercredis à 21h00
          </div>
          <div class="text-h4 title">
            Farm de Montures
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import affix from '@/services/affix'

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
    this.$axios.get('https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=fr').then(({ data }) => {
      this.currentWeekAffixes = data.affix_details
    })
  }
}
</script>

<style scoped>
.affixes {
  height: 60%;
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

.title_card > .title {
  color: var(--lpdl-primary);
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
