import { Html, Head, Main, NextScript } from "next/document";
import { DefaultSeo } from "next-seo";

// google analytics measurement id
export const GA_TRACKING_ID = "";

export default function Document() {
  return (
    <Html lang="en-us">
      <Head>
        <DefaultSeo
          title="NextJS ChakraUI Template | Hazim Arafa"
          description="Boilerplate built to scale containing Typescript + NextJS + ChakraUI + Google Analytics + ESLint + Jest + Styled Components + Icons"
          openGraph={{
            type: "website",
            url: "https://boilerplate.hazim.tech",
            images: [
              {
                url: "/logo.png",
                type: "image",
                alt: "logo",
              },
            ],
          }}
          twitter={{
            cardType: "summary_large_image",
          }}
        />
        <link rel="icon" href="/favicon.ico" />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_TRACKING_ID}',{page_path:window.location.pathname});`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
