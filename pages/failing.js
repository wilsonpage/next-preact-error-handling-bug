import Link from 'next/link'

const Failing = ({ query }) => console.log('render page') || (
  <div>
    <h1>Trouble</h1>
    <Link href={{ query: { fail: 1 } }}>
      <a>Fail</a>
    </Link>
    {query.fail ? <span>{window.foo.click()}</span> : null}
  </div>
)

Failing.getInitialProps = async (ctx) => {
  console.log('Page getInitialProps')
  return {
    query: ctx.query,
  }
}

export default Failing
