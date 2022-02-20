# Understanding Next.js

Next.js generates HTML for each page on the server, and this can result in better performance and SEO.

**Static Generation (Recommended):**
The HTML is generated at build time and will be reused on each request.

**Server-side Rendering:**
The HTML is generated on each request.

## getStaticProps

- The data required to render the page is already available
- The data comes from a headless CMS
- The data can be publicly cached (not user-specific)
- HTML files can be cached by a CDN(Content Delivery Network) for performance

## getInitialProps

## getServerSideProps
