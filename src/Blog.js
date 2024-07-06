import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useState, useEffect} from 'react';
// import {posts} from './data/posts';
import './Blog.css';

function Blog ({posts}) {
    const navigate = useNavigate();
    const handleNavigation = (id) => {
        navigate(`/article/${id}`, {state: {loading: true}});
    }

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
    return (
      <>
        {posts.map((post)=>{
            return (
            <li className='blog__item' key={post.id}>
                <Link to={`/articles/${post.id}`} className='blog__link' onClick={() => handleNavigation(post.id)}>
                    <div className='blog__related'>
                        <time className='blog__time' dateTime={formatDateHyphen(post.createdAt)}>{formatDateSlash(post.createdAt)}</time>
                        <ul className='blog__tag-list'>
                        {post.categories.map((category,index)=><li className='blog__tag' key={index}>{category}</li>)}
                        </ul>
                    </div>
                    <h1 className='blog__title'>{post.title}</h1>
                    <p className='blog__text'>
                        {post.content}
                    </p>
                </Link>
            </li>

            );
        })}
      </>
    );
}

function BlogList () {
    const [posts, setPosts] = useState([]);

    // APIでpostsを取得する処理をuseEffectで実行します。
    useEffect(() => {
      const fetcher = async () => {
        const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
        const data = await res.json()
        setPosts(data.posts)
      }

      fetcher()
    }, [])

    return (
        <div className='blog__container'>
            <ul className='blog__list'>
                <Blog posts={posts}/>
            </ul>
        </div>
    );
}

export default BlogList;