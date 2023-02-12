import dayjs from 'dayjs'

export const formatDate = (date: Parameters<typeof dayjs>[0], format: string) => {
  return dayjs(date).format(format)
}
