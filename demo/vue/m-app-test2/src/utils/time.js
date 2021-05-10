import moment from 'moment'
export let oneDay = () => {
  let endDate = new Date(new Date().toLocaleDateString())
  let startStamp = endDate.getTime()
  let endStamp = endDate.getTime() + (24 * 3600 * 1000 - 1)
  return [moment(startStamp), moment(endStamp)]
}
