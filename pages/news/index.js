import React from 'react'
import SanityPageService from '../../services/sanityPageService'
import NewsBody, { query, articlesPerPage } from '../../components/news-body';

const pageService = new SanityPageService(query)

export default function News(initialData) {
  const { data: { news, contact, cats, popup, numberOfArticles }  } = pageService.getPreviewHook(initialData, { start: 0, stop: articlesPerPage })()

  return <NewsBody news={news} cats={cats} contact={contact} popup={popup} index={1} numberOfArticles={numberOfArticles} />
}

export async function getStaticProps(context) {
  return pageService.fetchQuery({ params: { start: 0, stop: articlesPerPage }})
}