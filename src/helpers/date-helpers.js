import moment from 'moment'

export function getUpcomingShows(showList) {
  const now = moment()
  return showList.filter(show => moment(show.date).isAfter(now));
}

export function getPastShows(showList) {
  const now = moment()
  return showList.filter(show => moment(show.date).isBefore(now));
}

export function sortByAscendingDate(array) {
  return array.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date)
  });
}

export function sortByDescendingDate(array) {
  return array.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date)
  });
}