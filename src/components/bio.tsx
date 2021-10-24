/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio: React.FC<{ lang: "es" | "pt" }> = ({ lang }) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            summary_pt
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio flex items-center py-8 text-gray-600 dark:text-gray-400">
      <StaticImage
        className="rounded-full"
        height={50}
        width={50}
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile.jpg"
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p className="ml-4 flex-1">
          por <strong>{author.name}</strong>{" "}
          {lang === "es" ? author?.summary || null : author?.summary_pt || null}
        </p>
      )}
    </div>
  )
}

export default Bio
