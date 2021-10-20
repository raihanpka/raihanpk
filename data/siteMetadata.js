const siteMetadata = {
  title: 'Raihan PK',
  author: 'Raihan Putra Kirana',
  headerTitle: 'Raihan PK',
  description: 'Websitenya Raihan Putra Kirana',
  language: 'id',
  siteUrl: 'https://www.raihanpk.com',
  siteRepo: 'https://github.com/itslunareix/raihanpk',
  image: '/static/img/avatar.png',
  socialBanner: '/static/img/twitter-card.png',
  email: 'info@raihanpk.space',
  github: 'https://github.com/itslunareix',
  twitter: 'https://twitter.com/itslunareix',
  linkedin: 'https://www.linkedin.com/',
  discord: 'https://discord.com/users/529339818191224833',
  locale: 'id',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: false, // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: true, // true or false
    googleAnalyticsId: 'G-ERJBPQ922Y', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // Please add your .env file and modify it according to your selection
    provider: 'buttonDown',
  },
  comment: {
    provider: '', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: '', // username/repoName
      // Visit the link below, enter your repo in the configuration section and copy the script data parameters
      // Before that you should create a new Github discussions category with the Announcements type so that new discussions can only be created by maintainers and giscus
      // https://giscus.app/
      repositoryId: '',
      category: '',
      categoryId: '',
      mapping: '', // supported options: pathname, url, title
      reactions: '', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: '',
      // theme when dark mode
      darkTheme: '',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      repo: '', // username/repoName
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: 'raihanpk',
    },
  },
}

module.exports = siteMetadata
