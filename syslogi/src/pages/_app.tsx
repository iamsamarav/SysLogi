import type { AppProps } from 'next/app'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <style>
    *{`
        
    `}
  </style>
  <Component {...pageProps} />
  </>
  )
}