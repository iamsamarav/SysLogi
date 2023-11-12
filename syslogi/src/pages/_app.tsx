import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import '../app/globals.css';
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Component {...pageProps} />
  </>
  )
  }