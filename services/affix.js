import moment from 'moment'

export default {
  getCurrentWeekAffixes: () => {
    const currentWeekNumber = getCurrentWeekNumber()
    return getRotationAffix(currentWeekNumber)
  },
  getNextWeekAffixes: () => {
    const nextWeekNumber = getCurrentWeekNumber() + 1
    return getRotationAffix(nextWeekNumber)
  }
}

// const EU_DELAY = 2
const EU_START_WEEK = 1607472000000

const affixesRotation = [
  [10, 11, 13, 121],
  [9, 7, 124, 121],
  [10, 123, 12, 121],
  [9, 122, 4, 121],
  [10, 8, 14, 121],
  [9, 6, 13, 121],
  [10, 123, 3, 121],
  [9, 7, 4, 121],
  [10, 122, 124, 121],
  [9, 11, 13, 121],
  [10, 8, 12, 121],
  [9, 6, 14, 121]
]

const getCurrentWeekNumber = () => {
  const startWeek = moment(EU_START_WEEK)

  const now = moment()
  const day = now.day()
  const diff = day <= 3 ? 4 + day : -4 + day

  const lastWedn = now.subtract(diff, 'days')
  return lastWedn.diff(startWeek, 'weeks')
}

const getRotationAffix = (weekNumber) => {
  return affixesRotation[weekNumber % affixesRotation.length]
}
