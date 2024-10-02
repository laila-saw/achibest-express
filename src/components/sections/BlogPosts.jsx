import React, { useEffect, useRef, useState } from 'react'
import Pagination from '../ui/Pagination';
import SingleBlogPost from '../ui/SingleBlogPost'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom';
import ArrowRight from '../icon svgs/ArrowRight';
import SearchForm from '../ui/SearchForm';
import { data } from 'autoprefixer';

const BlogPosts = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryfromurl =searchParams.get("category")
    const searchQuery =searchParams.get("s")
    console.log(searchQuery)
    
    const [currentCategory, setCurrentCategory] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [suggestedPosts, setSuggestedPosts] = useState([]);
    
  const [noResults,setNoResult]=useState(false)
    const baseUrl=process.env.REACT_APP_BASE_URL;
//     useEffect(() => {
//          const fetchPosts= async ()=> {
//             try {
//              const response = await axios.get(baseUrl+'/posts');
//              if(categoryfromurl!==null){
//                 const wpCategory = await axios.get(baseUrl+'/categories?slug='+categoryfromurl);
//              setCurrentCategory(wpCategory.data[0].id)
//              }
//              const wpPosts = response.data;
//             setPosts(wpPosts);
//             setIsLoading(true) 
//             } catch (error) {
//                 console.log(error)
//             }
            
//         }
    
//         fetchPosts();
//    }, [])
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  let numberOfPage = Math.ceil(posts.length / postsPerPage)
  const blogSection=useRef(null);
  let array=[];
  const keys = [
    "title",
    "excerpt",
    "content",
]
useEffect(() => {
    console.log("ouhamou")
    setSuggestedPosts(posts.filter(
        (post) =>
            keys.some(key =>
                (post[key].rendered.toLowerCase().includes(searchQuery)) || post[key].rendered.includes(searchQuery))
    ))
    if (searchQuery === null) {
        setSuggestedPosts([])
    }
}, [searchQuery,isLoading])
  function showItems() {
    for (let i = 0; i < posts.length; i++) {
        for (let j = 0; j < posts[i].categories.length; j++) {
           if(posts[i].categories[j]==currentCategory || currentCategory===-1){
        array.push(posts[i])
           }
        }

    }
    currentPosts = array.slice(indexOfFirstPost, indexOfLastPost)

    numberOfPage = Math.ceil(array.length / postsPerPage)
    if(searchQuery!==null){
        console.log("searchQuery",searchQuery)
    }
    if(suggestedPosts.length!==0){
        currentPosts = suggestedPosts.slice(indexOfFirstPost, indexOfLastPost)

    numberOfPage = Math.ceil(suggestedPosts.length / postsPerPage)
    }
    array = []
  }
  if(categoryfromurl!==null || searchQuery!==null){
    showItems()
  }
  const currenPosts2=Object.values(currentPosts)
  const [query, setQuery] = useState("")
  const navigate2=useNavigate()
  function handleSearch(e){
    e.preventDefault();
    navigate2("/blog?s="+query)
  }
    return (
        <div ref={blogSection} className="section py-[100px] blogPostsPage">
            <div className="sectionContainer px-6 sm:px-[30px] md:px-[50px] lg:px-[50px] xl:px-[100px] 2xl:px-[150px]  ">
            <div className="sectionTop text-left flex flex-col  md:flex-row  justify-between items-start gap-[20px] mb-10 ">
                    <div className="sectionTitle flex flex-col items-start w-full lg:w-8/12 gap-1  ">DISCOVER OUR <br />  BLOGS <span>
                        <ArrowRight />
                        </span></div>
                    <div className="flex justify-end  searchBar w-full lg:w-4/12 ">
                    <SearchForm  
                    query={query} 
                    setQuery={setQuery} 
                    handleSearch={handleSearch} 
                    setNoResult={setNoResult} 
                    suggestedPosts={suggestedPosts} 
                    setSuggestedPosts={setSuggestedPosts} 
                    data={posts} />
                    </div>

                </div>
                <div  className="blogPostsList flex flex-wrap  gap-6 sm:gap-4 lg:gap-6"
                >
                    { (suggestedPosts.length===0 && !noResults ) && (isLoading
                        ? currenPosts2.map((post,i) =>
                        
                        { const newcategory=Object.values(post.categories)
                            return <SingleBlogPost 
                            setIsLoading={setIsLoading}
                            currentPage={currentPage}
                            feutured={post.featured_media}
                            category={newcategory.map((category)=>(
                                category
                            ))} 
                            date={post.date} 
                            author={post.author}
                            title={post.title.rendered} 
                            desc={post.excerpt.rendered.substring(0,130)+"..."} 
                            key={i}
                            slug={post.slug}
                            className="hidden"
                            />
                        }
                        )
                        : <p className='text-center w-full py-5 capitalize text-[25px] opacity-60 '>loading...</p>
                    )} 
                    {
                        (suggestedPosts.length!==0 || noResults) && 
                        Object.values(suggestedPosts).map((post,i) =>
                        
                        { const newcategory=Object.values(post.categories)
                            return <SingleBlogPost 
                            suggestedPosts={suggestedPosts}
                            setIsLoading={setIsLoading}
                            currentPage={currentPage}
                            feutured={post.featured_media}
                            category={newcategory.map((category)=>(
                                category
                            ))} 
                            date={post.date} 
                            author={post.author}
                            title={post.title.rendered} 
                            desc={post.excerpt.rendered.substring(0,130)+"..."} 
                            key={i}
                            slug={post.slug}
                            className="hidden"
                            />
                        }
                        )
                    }
                    {noResults && 
                  <p className='text-center w-full py-5 capitalize text-[25px] opacity-60 '>No results Found.</p>}
                    
                    {/*          
          {
            currentproducts.length===0 && <div className='w-full pb-[50px] text-[25px] text-center opacity-70 lg:text-3xl font-light flex items-center justify-center '>No products with this category.</div>
          } */}
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numberOfPage={numberOfPage} sectionToscroll={blogSection} />

            </div>
        </div>
    )
}

export default BlogPosts