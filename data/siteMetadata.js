const siteMetadata = {
  title: 'Raihan PK',
  author: 'Raihan Putra Kirana',
  headerTitle: 'Raihan PK',
  description: 'Rumah digital milik Raihan Putra Kirana',
  language: 'id',
  siteUrl: 'https://www.raihanpk.com',
  siteRepo: 'https://github.com/itslunareix/raihanpk',
  image: '/static/img/avatar.png',
  socialBanner: '/static/img/twitter-card.png',
  email: 'me@raihanpk.com',
  github: 'https://github.com/raihanpka',
  twitter: 'https://twitter.com/raihanpka',
  linkedin: 'https://www.linkedin.com/in/raihanpk',
  discord: 'https://discord.com/users/529339818191224833',
  spotify: 'https://open.spotify.com/user/xuky516kfjvb1f5xw310bejhq?si=1155c88654e54774',
  locale: 'id',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: false, // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: true, // true or false
    googleAnalyticsId: 'UA-208521341-1', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // Please add your .env file and modify it according to your selection
    provider: 'buttonDown',
  },
  comment: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: 'itslunareix/raihanpk', // username/repoName
      // Visit the link below, enter your repo in the configuration section and copy the script data parameters
      // Before that you should create a new Github discussions category with the Announcements type so that new discussions can only be created by maintainers and giscus
      // https://giscus.app/
      repositoryId: '',
      category: '',
      categoryId: '',
      mapping: '', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
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
      repo: 'itslunareix/raihanpk', // username/repoName
      issueTerm: 'title', // supported options: pathname, url, title
      label: 'Pojok Komentar 💬', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: 'github-light',
      // theme when dark mode
      darkTheme: 'github-dark',
    },
    disqus: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: '',
    },
  },
}

module.exports = siteMetadata
