const Failing = () => (
  <div>
    <h1>This page throws on client render</h1>
    <span>{typeof window !== 'undefined' && self.prop.is.undefined}</span>
  </div>
)

export default Failing
