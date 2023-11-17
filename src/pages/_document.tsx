import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='pt-br'>
        <Head />
        <body className='w-screen h-screen box-border'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument