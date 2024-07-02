import {posts} from './data/posts';
import './Blog.css';

function Blog () {
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
                <a href='' className='blog__link'>
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
                </a>
            </li>
            );
        })}
      </>
    );
}

function BlogList () {
    return (
        <div className='blog__container'>
            <ul className='blog__list'>
                <Blog />
            </ul>
        </div>
    );
}

export default BlogList;