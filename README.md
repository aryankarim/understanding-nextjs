# Understanding Next.js

Next.js generates HTML for each page on the server, and this can result in better performance and SEO.

**Static Generation (Recommended):**
The HTML is generated at build time and will be reused on each request.

**Server-side Rendering:**
The HTML is generated on each request.

## getStaticProps

**Use getStaticProps when:**

- The data required to render the page is already available
- The data comes from a headless CMS
- The data is not user-specific
- HTML files can be cached by a CDN(Content Delivery Network) for performance

**getStaticProps will execute during:**

- `next build`
- ISR using `revalidate`
- ISR on-demand revalidation using `unstable_revalidate`

## getStaticPaths

## getServerSideProps

**Use getStaticPaths when:**

- The data comes from a headless CMS
- The data comes from a database
- The data comes from the filesystem
- The data is not user-specific
- HTML files can be cached by a CDN for performance

**getStaticProps will execute during:**

- `next build` for Pages included in paths
- getStaticPaths runs on-demand in the background when using fallback: true
- getStaticPaths runs on-demand blocking rendering when using fallback: blocking
