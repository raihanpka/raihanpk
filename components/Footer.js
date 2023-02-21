import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NowPlaying from '@/components/NowPlaying'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="spotify" href={siteMetadata.spotify} size="6" />
          <SocialIcon kind="discord" href={siteMetadata.discord} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <div>{` – `}</div>
          <Link
            className="text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-100"
            href="/"
          >
            {siteMetadata.author}
          </Link>
        </div>
        <Link href="https://volt.fm/raihanpk">
          <NowPlaying />
        </Link>
        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Powered by Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  )
}
