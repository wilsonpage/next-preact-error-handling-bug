import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <main>
      <Link href="/failing">
        <a>Go to failing page</a>
      </Link>
    </main>
  )
}

export default Home;
