import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import DECKEDLogo from '../components/DECKEDLogo.jsx'

import '../assets/styles/globals.css'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const LogoLockup = () => {
  return (
    <div>
      <div className="flex flex-col items-start gap-1">
        <DECKEDLogo width="100" className="w-[7.5rem]" />
        <p className="text-sm font-bold uppercase">Digital Digest</p>
      </div>
    </div>
  )
}

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<LogoLockup />}
        // ... Your additional navbar options
  />
)
const footer = <Footer>{new Date().getFullYear()} © DECKED LLC.</Footer>
 
export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          //banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/deckedusa/decked-digital-digest"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}