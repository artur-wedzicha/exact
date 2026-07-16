import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function Seo({ description, title, children }) {
  let siteMetadata = { title: '', description: '', author: '' }

  try {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `)

    if (data?.site?.siteMetadata) {
      siteMetadata = data.site.siteMetadata
    }
  } catch (e) {
    console.warn('⚠️ Seo query failed', e)
  }

  const metaDescription = description || siteMetadata.description
  const defaultTitle = siteMetadata.title

  return (
    <Helmet htmlAttributes={{ lang: 'pl' }}>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </Helmet>
  )
}

export default Seo
