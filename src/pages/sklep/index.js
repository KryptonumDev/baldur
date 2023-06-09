import styled from 'styled-components'
import Layout from '../../layout'

import Hero from '@/components/templates/hero-shop'
import Categories from '@/components/templates/categories-shop'
import ProductGrid from '@/components/templates/product-grid-shop'
import CallToAction from '@/components/templates/call-to-action'
import Reviews from '@/components/templates/reviews'
import Blog from '@/components/templates/blog-slider'
import Search from '@/components/templates/product-search'

import { gql } from "@apollo/client"
import client from "../../apollo/apollo-client"

export default function Sklep({ cta, categories, posts, hero, reviews }) {
  return (
    <Layout breadcrumbs={[{ page: 'Sklep', url: '/sklep/' }]}>
      <Wrapper>
        <Hero data={hero} />
        <Categories data={categories} />
        <Search />
        <ProductGrid data={categories} />
        <CallToAction data={cta} />
        <Reviews data={reviews} />
        <Blog posts={posts} />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  overflow: hidden;
  margin-bottom: calc(-1 * clamp(80px, ${220 / 1440 * 100}vw, 220px));
  padding-bottom: clamp(80px, ${220 / 1440 * 100}vw, 220px);
`

export async function getStaticProps() {
  const { data: { productCategories, posts, global, page: { shop: page, seo } } } = await client.query({
    query: gql`
      query Sklep {
        productCategories {
          nodes {
            slug
            name
            count
            products(where: {stockStatus: IN_STOCK}, first: 4) {
              nodes {
                uri
                ... on SimpleProduct {
                  acf : product{
                    description{
                      line
                    }
                  }
                  id
                  databaseId
                  name
                  slug
                  stockQuantity
                  stockStatus
                  price(format: RAW)
                  regularPrice(format: RAW)
                  salePrice(format: RAW)
                  image {
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
        }
        posts(first: 3) {
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
        }
        global : page(id: "cG9zdDoyOQ==") {
          reviews {
            title
            text
            reviews {
              author
              content
              mark
            }
          }
          callToAction{
            ctaText
            ctaLink{
              title
              url
            }
          }
        }
        page(id: "cG9zdDoxMDU=") {
          seo {
            title
            metaDesc
            opengraphSiteName
            opengraphImage {
              mediaItemUrl
            }
          }
          shop {
            heroShop {
              title
              text
              background {
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
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    }
  });

  return {
    props: {
      hero: page.heroShop,
      posts: posts.nodes,
      categories: productCategories.nodes,
      reviews: global.reviews,
      cta: global.callToAction,
      seo: seo
    },
    revalidate: 60
  };
}