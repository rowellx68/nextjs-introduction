import { formatDistanceToNow, isValid, parseISO, format } from 'date-fns'

export const formatToNow = (dateString: string) => {
  if (!dateString) {
    return ''
  }

  let date = parseISO(dateString)

  if (!isValid(date)) {
    return ''
  }

  return formatDistanceToNow(date, { includeSeconds: true })
}

export const formatTime = (dateString: string) => {
  if (!dateString) {
    return ''
  }

  let date = parseISO(dateString)

  if (!isValid(date)) {
    return ''
  }

  return format(date, 'HH:mm:ss')
}