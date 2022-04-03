import React, { FC } from 'react'
import { Article } from '../utils/types'

const ArticleCell: FC<{ article: Article }> = ({ article }) => {
  return (
    <a
      className="block overflow-hidden relative group m-4"
      href={article.link}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="block group-hover:scale-110 transition-transform transform-gpu object-cover"
        src={article.imagePath}
        alt={article.title}
        width="300"
        height="200"
        loading="lazy"
      />
      <div className="absolute p-2 inset-0 top-auto bg-black bg-opacity-30">
        <h3 className="text-lg text-left text-white">{article.title}</h3>
      </div>
    </a>
  )
}

export default ArticleCell
