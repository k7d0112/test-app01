import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from './data/posts';
import './BlogDetail.css';

const BlogDetail = () => {
    const formatDateHyphen = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month}-${day}`;
    }
    const formatDateSlash = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}/${month}/${day}`;
    }

    const { id } = useParams();
    const article = posts.find(post => post.id === parseInt(id));
    if(!article){
        return <div>記事が見つかりませんでした。</div>
    }
    return (
        <>
          <div className='blogDetail__container'>
            <img ClassName='blogDetail__thumbnail' src={article.thumbnailUrl}/>
            <div className='blogDetail__contents'>
                <div className='blogDetail__tags'>
                    <time className='blog__time' dateTime={formatDateHyphen(article.createdAt)}>{formatDateSlash(article.createdAt)}</time>
                    <ul className='blog__tag-list'>
                        {article.categories.map((category,index) => <li className='blog__tag' key={index}>{category}</li>)}
                    </ul>
                </div>
                <h1 className='blog__title'>{article.title}</h1>
                <p className='blog__text'>{article.content}</p>
            </div>
          </div>
        </>
    );
}

export default BlogDetail;