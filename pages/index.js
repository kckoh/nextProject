import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head >
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header  className="headers"></header>
    
     
      <style jsx>{`

    .headers {
      height:95vh;
      background-image: 
      linear-gradient(
        to right bottom,
        rgba(126,213,111,0.8),
        rgba(40,180,131,0.8)), 
      url(/hero.jpg);
      background-size:cover;
      background-position:top;
      clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100% )
      }
        
      `}</style>

      <style jsx global>{`
        html,
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      
      }
      
      body {
          font-family: "Lato", sans-serif;
          font-weight:400;
          line-height:1.7;
          color:#777;
          padding:30px;
      }
      `}</style>
    </>
  )
}
