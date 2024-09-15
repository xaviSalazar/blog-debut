import Link from 'next/link'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/" id="home-link">
                Home
              </Link>
            </li>

            <li>
              <Link href="/posts" id="posts-link">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
