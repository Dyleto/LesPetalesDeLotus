export default ({ app }, inject) => {
  // eslint-disable-next-line prefer-promise-reject-errors
  inject('rejectPromise', (code, message) => Promise.reject({ code, message }))
}
