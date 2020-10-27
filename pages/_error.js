const ErrorPage = () => console.log('render ErrorPage') || <h1>Error</h1>

ErrorPage.getInitialProps = async () => {
    console.log('ErrorPage getInitialProps')
    return {}
}

export default ErrorPage