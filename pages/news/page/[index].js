import React from 'react'
import SanityPageService from '../../../services/sanityPageService'
import sanity from '../../../services/sanity'
import NewsBody, { query, articlesPerPage } from '../../../components/news-body';

const pageService = new SanityPageService(query)

export default function News(initialData) {
  const startArticleIndex = initialData.index * articlesPerPage
  const stopArticleIndex = startArticleIndex + articlesPerPage
  const { data: { news, contact, cats, popup, numberOfArticles, index }  } = pageService.getPreviewHook(initialData, { start: startArticleIndex, stop: stopArticleIndex})()

  return <NewsBody news={news} cats={cats} contact={contact} popup={popup} index={Number(index)} numberOfArticles={Number(numberOfArticles)} subPage />
}

export async function getStaticProps(context) {
  const startArticleIndex = (context.params.index - 1) * articlesPerPage
  const stopArticleIndex = startArticleIndex + articlesPerPage
  
  const { props, notFound } = await pageService.fetchQuery({ params: { start: startArticleIndex, stop: stopArticleIndex }})
  props.index = context.params.index
  
  return {
    props,
    notFound
  };
}

export async function getStaticPaths() {
  const totalNumberOfArticles = await sanity.fetchQuery({ query: 'count(*[_type == "news"])' })

  const numberOfPages = Math.ceil((totalNumberOfArticles - articlesPerPage) / articlesPerPage)

  const paths = []

  // We don't want index 0, and index 1 is rendered at /news
  for (let i = 2; i < numberOfPages + 2; i++) {
    paths.push({ params: { index: String(i) } })
  }

  return {
    paths: paths,
    fallback: false,
  };
}
