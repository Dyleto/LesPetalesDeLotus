export default {
  getCurrentWeekAffixes () {
    const currentWeekNumber = getCurrentWeekNumber()
    return affixesRotation[(currentWeekNumber) % affixesRotation.length]
  }
}

// const EU_DELAY = 2
const EU_START_WEEK = 1579618800000

const affixesRotation = [
  [10, 7, 12, 120],
  [9, 6, 13, 120],
  [10, 8, 12, 120],
  [9, 5, 3, 120],
  [10, 7, 2, 120],
  [9, 11, 4, 120],
  [10, 8, 14, 120],
  [9, 7, 13, 120],
  [10, 11, 3, 120],
  [9, 6, 4, 120],
  [10, 5, 14, 120],
  [9, 11, 2, 120]

  // [9, 7, 13, 120],
  // [10, 11, 3, 120],
  // [9, 6, 4, 120],
  // [10, 5, 14, 120],
  // [9, 11, 2, 120],
  // [10, 7, 12, 120],
  // [9, 6, 13, 120],
  // [10, 8, 12, 120],
  // [9, 5, 3, 120],
  // [10, 7, 2, 120],
  // [9, 11, 4, 120],
  // [10, 8, 14, 120]
]

const getCurrentWeekNumber = () => {
  const startWeek = new Date(EU_START_WEEK)

  const now = new Date()
  const day = now.getDay()
  const diff = now.getDate() - day + (day < 3 ? -4 : 3)
  const lastWednesday = new Date(diff)

  return Math.floor((startWeek - lastWednesday) / (1000 * 60 * 60 * 24 * 7))
}
