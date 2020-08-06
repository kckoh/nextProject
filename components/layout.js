import Head from 'next/head'


const Layout = (props) => (
  <>
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv = "X-UA-Compatible" content="ie=edge"/>
    </Head>
      {props.children}

  
  </>
  
)




export default Layout