import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID, META } from "config";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-us">
				<Head>
					<meta name="description" content={META.description} />
					<meta name="author" content="https://webdefy.tech" />
					<meta name="keywords" content={META.tags.join(",")} />

					<meta itemProp="name" content={META.title} />
					<meta itemProp="description" content={META.description} />
					<meta itemProp="image" content={META.image} />

					<meta property="og:url" content={META.url} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={META.title} />
					<meta
						property="og:description"
						content={META.description}
					/>
					<meta property="og:image" content={META.image} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:title" content={META.title} />
					<meta
						name="twitter:description"
						content={META.description}
					/>
					<meta name="twitter:image" content={META.image} />

					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						// eslint-disable-next-line react/no-danger
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
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
}
