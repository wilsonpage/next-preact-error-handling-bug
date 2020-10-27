import Link from 'next/link'

const Failing = ({ query }) => (
  <div>
    <h1>Trouble</h1>
    <Link href={{ query: { fail: 1 } }}>
      <a>Fail</a>
    </Link>
    {query.fail ? <span>{window.foo.click()}</span> : null}
  </div>
)

Failing.getInitialProps = async (ctx) => {
  console.log('gip')
  return {
    query: ctx.query,
  }
}

export default Failing
