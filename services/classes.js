export default {
  getById (id) {
    return classes.find(c => c.id === id)
  },
  getByName (name) {
    return classes.find(c => c.name === name)
  }
}

const classes = [
  // GUERRIER
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/1?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 1,
    name: 'Guerrier',
    gender_name: {
      male: 'Guerrier',
      female: 'Guerrière'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/1?namespace=static-8.3.7_35114-eu'
      },
      name: 'Rage',
      id: 1
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/71?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_warrior_savageblow.jpg',
        name: 'Armes',
        id: 71
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/72?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_warrior_innerrage.jpg',
        name: 'Fureur',
        id: 72
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/73?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_warrior_defensivestance.jpg',
        name: 'Protection',
        id: 73
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/1?namespace=static-8.3.7_35114-eu'
      },
      id: 1,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_warrior.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_warrior.jpg',
          file_data_id: 626008
        }
      ],
      color: '#C79C6E'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/1/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  },

  // PALADIN
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/2?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 2,
    name: 'Paladin',
    gender_name: {
      male: 'Paladin',
      female: 'Paladin'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/0?namespace=static-8.3.7_35114-eu'
      },
      name: 'Mana',
      id: 0
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/65?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_holy_holybolt.jpg',
        name: 'Sacré',
        id: 65
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/66?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_paladin_shieldofthetemplar.jpg',
        name: 'Protection',
        id: 66
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/70?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_holy_auraoflight.jpg',
        name: 'Vindicte',
        id: 70
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/2?namespace=static-8.3.7_35114-eu'
      },
      id: 2,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_paladin.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_paladin.jpg',
          file_data_id: 626003
        }
      ],
      color: '#F58CBA'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/2/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  },

  // CHASSEUR
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/3?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 3,
    name: 'Chasseur',
    gender_name: {
      male: 'Chasseur',
      female: 'Chasseresse'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/2?namespace=static-8.3.7_35114-eu'
      },
      name: 'Focalisation',
      id: 2
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/253?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_hunter_bestialdiscipline.jpg',
        name: 'Maîtrise des bêtes',
        id: 253
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/254?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_hunter_focusedaim.jpg',
        name: 'Précision',
        id: 254
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/255?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_hunter_camouflage.jpg',
        name: 'Survie',
        id: 255
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/3?namespace=static-8.3.7_35114-eu'
      },
      id: 3,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_hunter.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_hunter.jpg',
          file_data_id: 626000
        }
      ],
      color: '#ABD473'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/3/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  },

  // VOLEUR
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/4?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 4,
    name: 'Voleur',
    gender_name: {
      male: 'Voleur',
      female: 'Voleuse'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/3?namespace=static-8.3.7_35114-eu'
      },
      name: 'Énergie',
      id: 3
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/259?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_rogue_deadlybrew.jpg',
        name: 'Assassinat',
        id: 259
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/260?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_rogue_waylay.jpg',
        name: 'Hors-la-loi',
        id: 260
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/261?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_stealth.jpg',
        name: 'Finesse',
        id: 261
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/4?namespace=static-8.3.7_35114-eu'
      },
      id: 4,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_rogue.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_rogue.jpg',
          file_data_id: 626005
        }
      ],
      color: '#FFF569'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/4/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  },

  // PRÊTRE
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/5?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 5,
    name: 'Prêtre',
    gender_name: {
      male: 'Prêtre',
      female: 'Prêtresse'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/0?namespace=static-8.3.7_35114-eu'
      },
      name: 'Mana',
      id: 0
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/256?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_holy_powerwordshield.jpg',
        name: 'Discipline',
        id: 256
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/257?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_holy_guardianspirit.jpg',
        name: 'Sacré',
        id: 257
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/258?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_shadow_shadowwordpain.jpg',
        name: 'Ombre',
        id: 258
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/5?namespace=static-8.3.7_35114-eu'
      },
      id: 5,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_priest.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_priest.jpg',
          file_data_id: 626004
        }
      ],
      color: '#FFFFFF'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/5/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  },

  // CHEVALIER DE LA MORT
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/6?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 6,
    name: 'Chevalier de la mort',
    gender_name: {
      male: 'Chevalier de la mort',
      female: 'Chevalier de la mort'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/6?namespace=static-8.3.7_35114-eu'
      },
      name: 'Puissance runique',
      id: 6
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/250?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_deathknight_bloodpresence.jpg',
        name: 'Sang',
        id: 250
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/251?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_deathknight_frostpresence.jpg',
        name: 'Givre',
        id: 251
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/252?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_deathknight_unholypresence.jpg',
        name: 'Impie',
        id: 252
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/6?namespace=static-8.3.7_35114-eu'
      },
      id: 6,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_deathknight.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_deathknight.jpg',
          file_data_id: 135771
        }
      ],
      color: '#C41F3B'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/6/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  },

  // CHAMAN
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/7?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 7,
    name: 'Chaman',
    gender_name: {
      male: 'Chaman',
      female: 'Chamane'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/0?namespace=static-8.3.7_35114-eu'
      },
      name: 'Mana',
      id: 0
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/262?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_nature_lightning.jpg',
        name: 'Élémentaire',
        id: 262
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/263?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_shaman_improvedstormstrike.jpg',
        name: 'Amélioration',
        id: 263
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/264?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_nature_magicimmunity.jpg',
        name: 'Restauration',
        id: 264
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/7?namespace=static-8.3.7_35114-eu'
      },
      id: 7,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_shaman.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_shaman.jpg',
          file_data_id: 626006
        }
      ],
      color: '#0070DE'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/7/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  },

  // MAGE
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/8?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 8,
    name: 'Mage',
    gender_name: {
      male: 'Mage',
      female: 'Mage'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/0?namespace=static-8.3.7_35114-eu'
      },
      name: 'Mana',
      id: 0
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/62?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_holy_magicalsentry.jpg',
        name: 'Arcanes',
        id: 62
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/63?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_fire_firebolt02.jpg',
        name: 'Feu',
        id: 63
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/64?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_frost_frostbolt02.jpg',
        name: 'Givre',
        id: 64
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/8?namespace=static-8.3.7_35114-eu'
      },
      id: 8,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_mage.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_mage.jpg',
          file_data_id: 626001
        }
      ],
      color: '#69CCF0'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/8/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  },

  // DEMONISTE
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/9?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 9,
    name: 'Démoniste',
    gender_name: {
      male: 'Démoniste',
      female: 'Démoniste'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/0?namespace=static-8.3.7_35114-eu'
      },
      name: 'Mana',
      id: 0
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/265?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_shadow_deathcoil.jpg',
        name: 'Affliction',
        id: 265
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/266?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_shadow_metamorphosis.jpg',
        name: 'Démonologie',
        id: 266
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/267?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_shadow_rainoffire.jpg',
        name: 'Destruction',
        id: 267
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/9?namespace=static-8.3.7_35114-eu'
      },
      id: 9,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_warlock.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_warlock.jpg',
          file_data_id: 626007
        }
      ],
      color: '#9482C9'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/9/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  },

  // MOINE
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/10?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 10,
    name: 'Moine',
    gender_name: {
      male: 'Moine',
      female: 'Moniale'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/3?namespace=static-8.3.7_35114-eu'
      },
      name: 'Énergie',
      id: 3
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/268?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_monk_brewmaster_spec.jpg',
        name: 'Maître brasseur',
        id: 268
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/269?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_monk_windwalker_spec.jpg',
        name: 'Marche-vent',
        id: 269
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/270?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_monk_mistweaver_spec.jpg',
        name: 'Tisse-brume',
        id: 270
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/10?namespace=static-8.3.7_35114-eu'
      },
      id: 10,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_monk.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_monk.jpg',
          file_data_id: 626002
        }
      ],
      color: '#00FF96'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/10/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  },

  // DRUIDE
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/11?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 11,
    name: 'Druide',
    gender_name: {
      male: 'Druide',
      female: 'Druidesse'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/0?namespace=static-8.3.7_35114-eu'
      },
      name: 'Mana',
      id: 0
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/102?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_nature_starfall.jpg',
        name: 'Équilibre',
        id: 102
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/103?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_druid_catform.jpg',
        name: 'Farouche',
        id: 103
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/104?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_racial_bearform.jpg',
        name: 'Gardien',
        id: 104
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/105?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/spell_nature_healingtouch.jpg',
        name: 'Restauration',
        id: 105
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/11?namespace=static-8.3.7_35114-eu'
      },
      id: 11,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_druid.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/classicon_druid.jpg',
          file_data_id: 625999
        }
      ],
      color: '#FF7D0A'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/11/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  },

  // CHASSEUR DE DÉMONS
  {
    _links: {
      self: {
        href: 'https://eu.api.blizzard.com/data/wow/playable-class/12?namespace=static-8.3.7_35114-eu'
      }
    },
    id: 12,
    name: 'Chasseur de démons',
    gender_name: {
      male: 'Chasseur de démons',
      female: 'Chasseuse de démons'
    },
    power_type: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/power-type/17?namespace=static-8.3.7_35114-eu'
      },
      name: 'Fureur',
      id: 17
    },
    specializations: [
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/577?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_demonhunter_specdps.jpg',
        name: 'Dévastation',
        id: 577
      },
      {
        key: {
          href: 'https://eu.api.blizzard.com/data/wow/playable-specialization/581?namespace=static-8.3.7_35114-eu'
        },
        icon: 'https://render-eu.worldofwarcraft.com/icons/56/ability_demonhunter_spectank.jpg',
        name: 'Vengeance',
        id: 581
      }
    ],
    media: {
      key: {
        href: 'https://eu.api.blizzard.com/data/wow/media/playable-class/12?namespace=static-8.3.7_35114-eu'
      },
      id: 12,
      icon: 'https://render-eu.worldofwarcraft.com/icons/56/class_demon-hunter.jpg',
      assets: [
        {
          key: 'icon',
          value: 'https://render-eu.worldofwarcraft.com/icons/56/class_demon-hunter.jpg',
          file_data_id: 236415
        }
      ],
      color: '#A330C9'
    },
    pvp_talent_slots: {
      href: 'https://eu.api.blizzard.com/data/wow/playable-class/12/pvp-talent-slots?namespace=static-8.3.7_35114-eu'
    }
  }
]
