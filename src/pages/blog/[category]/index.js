import Layout from "../../../layout"
import styled from "styled-components"

import client from "../../../apollo/apollo-client"
import { gql } from "@apollo/client"
import Archive from "@/components/templates/blog-category-archive"
import { PAGE_ITEM_COUNT } from "../../../constants/blog-item-counts"

export default function Category({ background, category, catSlug, posts }) {
  return (
    <Layout breadcrumbs={[{ page: 'Blog', url: '/blog/' }, { page: category.name, url: `/blog/${catSlug}` }]}>
      <Wrapper>
        <Archive currPage='1' urlBasis={`/blog/${catSlug}`} background={background} category={category} posts={posts} />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
`

export async function getStaticPaths() {
  const { data: { categories } } = await client.query({
    query: gql`
      query paths {
        categories {
          nodes {
            name
            slug
          }
        }
      }
    `,
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    }
  });

  return {
    paths: categories.nodes.map(el => {
      return {
        params: {
          category: el.slug,
        }
      }
    }),
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  try {
    const { data: { categories, posts, page } } = await client.query({
      query: gql`
      query Category($category: String, $cat: [String], $count: Int) {
        categories(where: {name: $cat}) {
          nodes {
            seo {
              title
              metaDesc
              opengraphSiteName
              opengraphImage {
                mediaItemUrl
              }
            }
            name
            count
          }
        }
        posts(where: {offsetPagination: {offset: 0, size: $count}, categoryName: $category}) {
          nodes {
            uri
            excerpt
            title
            featuredImage {
              node{
                altText
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
          pageInfo {
            offsetPagination {
              total
            }
          }
        }
        page(id: "cG9zdDo2Mg==") {
          blog {
            heroBlog {
              background{
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
      }
    `,
      variables: {
        category: params.category,
        cat: params.category,
        count: PAGE_ITEM_COUNT
      },
      context: {
        fetchOptions: {
          next: { revalidate: 60 },
        },
      }
    });

    return {
      props: {
        posts: posts,
        category: categories.nodes[0],
        catSlug: params.category,
        background: page.blog.heroBlog.background,
        seo: categories.nodes[0].seo
      }
    }
  }
  catch (err) {
    return {
      notFound: true,
    }
  }
}