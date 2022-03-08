import Link from 'next/link'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/posts">
                <a>Posts</a>
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
