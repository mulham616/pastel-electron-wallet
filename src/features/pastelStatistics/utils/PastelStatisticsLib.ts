import { SqlValue } from 'sql.js'

import { TLineChartData, TMultiLineChartData } from '../../pastelDB/type'

export type TPeriod = '2h' | '2d' | '4d' | '30d' | '60d' | '180d' | '1y' | 'all'

export function getStartPoint(period: TPeriod): number {
  let duration = 1
  switch (period) {
    case '2h':
      duration = 2
      break
    case '2d':
      duration = 2 * 24
      break
    case '4d':
      duration = 4 * 24
      break
    case '30d':
      duration = 30 * 24
      break
    case '60d':
      duration = 60 * 24
      break
    case '180d':
      duration = 180 * 24
      break
    case '1y':
      duration = 360 * 24
      break
    case 'all':
      return 0
  }
  return Date.now() - duration * 60 * 60 * 1000
}

export function transformDifficultyInfo(
  difficulties: SqlValue[][],
  period: TPeriod,
): TLineChartData {
  const dataX: string[] = []
  const dataY: number[] = []

  const startDate = getStartPoint(period)

  for (let i = 0; i < difficulties.length; i++) {
    if (difficulties[i][3] !== null) {
      const createTime = Number(difficulties[i][3])
      if (createTime > startDate) {
        dataY.push(Number(difficulties[i][2]))
        dataX.push(new Date(createTime).toLocaleString())
      }
    }
  }

  return { dataX, dataY }
}

export function transformPriceInfo(
  prices: SqlValue[][],
  period: TPeriod,
): TMultiLineChartData {
  const dataX: string[] = []
  const dataY1: number[] = []
  const dataY2: number[] = []

  const startDate = getStartPoint(period)

  for (let i = 0; i < prices.length; i++) {
    const createTime = Number(prices[i][2])
    if (createTime > startDate) {
      const usd = Number(prices[i][1])
      const btc = (usd * 167.98) / 8336807
      dataY1.push(usd)
      dataY2.push(btc)
      dataX.push(new Date(createTime).toLocaleString())
    }
  }
  return { dataX, dataY1, dataY2 }
}

export const makeDownloadFileName = (
  currencyName: string | number,
  title: string,
): string => {
  let imageTitle = ''
  const date = new Date()

  if (title === 'Network Difficulty') {
    imageTitle = 'Network_Difficulty'
  } else if (title === 'PSL Prices') {
    imageTitle = 'Prices'
  }

  const dateTime = `${
    date.getMonth() + 1
  }_${date.getDate()}_${date.getFullYear()}__${date.getHours()}_${date.getMinutes()}`

  return `${currencyName}_${imageTitle}_${dateTime}`
}