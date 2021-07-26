import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <script async defer data-domain="dragomirt.com" src="https://analytics.dragomirt.com/js/plausible.js"></script>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default CustomDocument