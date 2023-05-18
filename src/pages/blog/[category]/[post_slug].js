import Layout from "../../../layout"
import styled from "styled-components"

import client from "../../../apollo/apollo-client"
import { gql } from "@apollo/client"
import Hero from "@/components/templates/post-hero"
import Content from "@/components/templates/post-content"

export default function Post({ page: { categories, slug, title, excerpt, featuredImage, content } }) {
  return (
    <Layout breadcrumbs={[{ page: 'Blog', url: '/blog/' }, { page: categories.nodes[0].name, url: `/blog/${categories.nodes[0].slug}` }, { page: title, url: `/blog/${categories.nodes[0].slug}/${slug}` }]}>
      <Wrapper>
        <Hero data={{ title: title, text: excerpt, background: featuredImage.node }} />
        {content && <Content data={content} />}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`

`

export async function getServerSideProps({ params }) {
  try {
    const { data: { page } } = await client.query({
      query: gql`
      query Post($slug: String) {
        page : postBy(slug: $slug) {
          slug
          title
          excerpt
          content
          categories {
            nodes{
              slug
              name
            }
          }
          featuredImage {
            node {
              altText
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
    `,
      variables: {
        slug: params.post_slug,
      },
      context: {
        fetchOptions: {
          next: { revalidate: .1 },
        },
      }
    });

    return {
      props: {
        page: page
      }
    }
  }
  catch (err) {
    console.log(err)
    return {
      notFound: true
    }
  }
}