'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'

interface Article {
  title: string
  author: string
  url: string
  urlToImage: string
  publishedAt: string
  source: {
    name: string
  }
  description: string
}

const NewsPage = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [pageNum, setPageNum] = useState(1)
  const [noMoreArticles, setNoMoreArticles] = useState<boolean>(false)

  const apiKey = '2be83c8308064b0ca59999b8a3108196'

  const today = new Date()
  const oneMonthAgo = new Date()
  oneMonthAgo.setMonth(today.getMonth() - 1)

  const fromDate = oneMonthAgo.toISOString().split('T')[0]
  const toDate = today.toISOString().split('T')[0] 

  const fetchArticles = async () => {
    setLoading(true)
    try {
      const url = `https://newsapi.org/v2/everything?q=Apple&from=${fromDate}&to=${toDate}&sortBy=popularity&pageSize=6&page=${pageNum}&apiKey=${apiKey}`
      const response = await axios.get(url)

      const filteredArticles = response.data.articles.filter(
        (article: Article) => article.source.name !== '[Removed]'
      )

      if (filteredArticles.length === 0 && pageNum === 1) {
        setError('No articles available.')
      }

      if (filteredArticles.length === 0) {
        setNoMoreArticles(true)
      } else {
        setArticles((prevArticles) => [...prevArticles, ...filteredArticles])
      }
    } catch (error) {
      setError('Failed to fetch articles. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [pageNum])

  const loadMoreArticles = () => {
    setPageNum((prevPage) => prevPage + 1)
  }

  return (
    <div className="text-white min-h-screen p-8">
      <h1 className="text-4xl text-gray-900 dark:text-white font-bold text-center mb-8">
        Latest News
      </h1>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 dark:text-white text-gray-900 rounded-lg overflow-hidden shadow-lg border-2">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4 grid justify-between">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600 dark:text-white mb-2">
                By {article.author || 'Unknown Author'}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                {article.publishedAt}
              </p>
              <p className="text-sm text-gray-900 dark:text-white mb-4">
                {article.description}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800">
                Read more
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Source: {article.source.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {!loading && !noMoreArticles && (
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className="px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white hover:text-white"
            onClick={loadMoreArticles}>
            Load More
          </Button>
        </div>
      )}

      {noMoreArticles && (
        <p className="text-center mt-8">No more articles to load</p>
      )}
    </div>
  )
}

export default NewsPage
