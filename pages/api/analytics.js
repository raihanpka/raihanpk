import { google } from 'googleapis'

const handlers = async (_, res) => {
  const startDate = '2021-10-01'
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  })

  const analytics = google.analytics({
    auth,
    version: 'v3',
  })

  const response = await analytics.data.ga.get({
    'end-date': 'today',
    ids: 'ga:251017969',
    metrics: 'ga:pageviews',
    'start-date': startDate,
  })

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')

  return res.status(200).json({
    pageViews: response.data.totalsForAllResults['ga:pageviews'],
  })
}
export default handlers
