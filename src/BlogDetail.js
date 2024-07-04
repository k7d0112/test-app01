import { React,useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { posts } from './data/posts';
import './BlogDetail.css';

const BlogDetail = ({article}) => {
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

    // const article = posts.find(post => post.id === parseInt(id));
    if(!article){
        return <div>記事が見つかりませんでした。</div>
    }
    return (
        <>
            <img className='blogDetail__thumbnail' src={article.thumbnailUrl}/>
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
        </>
    );
}

const BlogDetailShow = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
      const fetcher = async () => {
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`)
        const data = await res.json()
        setArticle(data.post)
      }

      fetcher()
    }, [id])

    return (
        <div className='blogDetail__container'>
            <BlogDetail article={article} />
        </div>
    );
}

export default BlogDetailShow;