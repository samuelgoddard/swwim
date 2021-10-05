import React from 'react'
import SanityPageService from '../../services/sanityPageService'
import NewsBody, { query, articlesPerPage } from '../../components/news-body';

const pageService = new SanityPageService(query)

export default function News(initialData) {
  const { data: { news, contact, numberOfArticles }  } = pageService.getPreviewHook(initialData, { start: 0, stop: articlesPerPage })()

  return <NewsBody news={news} contact={contact} index={1} numberOfArticles={numberOfArticles} />
}

export async function getStaticProps(context) {
  return pageService.fetchQuery({ params: { start: 0, stop: articlesPerPage }})
}