import axios from 'axios';
import Moment from 'moment';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import ButtonInput from '../ui/ButtonInput';
import InputFieldItem from '../ui/InputFieldItem';
import PopupSuccess from '../ui/PopupSuccess';
import SearchForm from '../ui/SearchForm';
import SingleLatestPost from '../ui/SingleLatestPost';
import TextAreaFieldItem from '../ui/TextAreaFieldItem';

const BlogFeed = () => {
  // fetch and set data of post
  const [currentpost, setCurrentPost] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [suggestedPosts, setSuggestedPosts] = useState([]);
  const [latestPosts2, setLatestPosts2] = useState([]);;
  const [categories, setCategories] = useState([]);
  const [axiosError, setAxiosError] = useState("");
  const [currentPosition, setCurrentPosition] = useState(-1);
  const [tags, setTags] = useState([]);
  const [comments, setComments] = useState([]);
  const [urlImg, setUrlImg] = useState("");
  const [save, setSave] = useState(localStorage.getItem("save")==="false" ? false: true);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults,setNoResult]=useState(false)
  const postId = useParams()
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [inputsValue, setInputsValue] = useState({
    username: localStorage.getItem("name")===null ? "" : localStorage.getItem("name"),
    email: localStorage.getItem("email") ===null ? "" : localStorage.getItem("email"),
    website: localStorage.getItem("website") ===null ? "" : localStorage.getItem("website"),
    comment: "",
  })
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const wpCurrentPost = await axios.get(baseUrl + '/posts?slug=' + postId.postname);
        console.log("wpCurrentPost",wpCurrentPost.data.length)
        if(wpCurrentPost.data.length!==0){
          setCurrentPost(wpCurrentPost.data)
        const wpLatestPosts = await axios.get(baseUrl + '/posts');
        setLatestPosts(wpLatestPosts.data)
        setIsLoading(true)
        let postPagination = []
        for (let i = 0; i < latestPosts.length; i++) {
          postPagination.push({ pos: i, latestPosts: latestPosts[i] })
        }
        for (let i = 0; i < postPagination.length; i++) {
          if (postPagination[i].latestPosts.id === currentpost[0].id) {
            setCurrentPosition(i)
          }
        }
        setLatestPosts2(postPagination)
        const media = await axios.get(baseUrl + '/media/' + currentpost[0].featured_media);
        setUrlImg(media.data.media_details.sizes.full.source_url)
        const wpComments = await axios.get(baseUrl + '/comments?post=' + currentpost[0].id);
        setComments(wpComments.data)
        const wpCategories = await axios.get(baseUrl + '/categories');
        let array = [];
        for (let i = 0; i < currentpost[0].tags.length; i++) {
          const wpTags = await axios.get(baseUrl + '/tags/' + currentpost[0].tags[i]);
          array.push(wpTags.data.name)
        }
        setTags(array)
        setCategories(wpCategories.data)
        }
        else{
          navigate("*")
        }


      } catch (error) {
        console.log("error fetch post",error)
        if(error==="TypeError: Cannot read properties of undefined (reading 'featured_media')"){
          console.log("yes")
        }
      }
    }
    fetchPost();

  }, [postId.postname, isLoading, currentPosition])
  const navigate = useNavigate();
  // validate comment form 
  const [focussedUsername, setFocussedUsername] = useState(false)
  const [focussedEmail, setFocussedEmail] = useState(false)
  const [focussedComment, setFocussedComment] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState("Email is required *")
  const [commentError, setCommentError] = useState("comment is required *")

  function handleOnchange(e) {
    setInputsValue({ ...inputsValue, [e.target.name]: e.target.value })
    if (e.target.name === "email") {
      if (e.target.value === "") {
        setEmailErrorMsg("Email is required *")
      }
      else if (!e.target.value.match(new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}'))) {
        setEmailErrorMsg("Invalid Email *")
      }
    }
  }
  function initialiseForm() {
    
    if(save){
      setInputsValue({
      username: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      website: localStorage.getItem("website"),
      comment: "",
    })
    }else{
      setInputsValue({
        username: "",
        email: "",
        website: "",
        comment: "",
      })
    }
    if(localStorage.getItem('save')){
      setSave(true)
    }else{
      setSave(false)
    }
    setFocussedUsername(false)
    setFocussedEmail(false)
    setFocussedComment(false)
  }
  // send from 
  const saveValueFalse=false
  const [commentSent, setCommentSent] = useState(false)
  async function handleSubmit(e) {
    if(inputsValue.username==="" || inputsValue.username===null){
      setFocussedUsername(true)
    }else if(inputsValue.email==="" || inputsValue.username===null){
      setFocussedEmail(true)
    } else if(inputsValue.comment==="" || inputsValue.username===null){
      setFocussedComment(true)
    }
    e.preventDefault();
    const newComment = {
      post: currentpost[0].id,
      author_name: inputsValue.username,
      author_email: inputsValue.email,
      author_url: inputsValue.website,
      content: inputsValue.comment,
    }
    try {
      const req = await axios.post(baseUrl + "/comments", newComment)
      setCommentSent(true)
      if(save){
        localStorage.setItem('name',inputsValue.username)
        localStorage.setItem('email',inputsValue.email)
        localStorage.setItem('website',inputsValue.website)
        localStorage.setItem('save',true)
      }else{
        localStorage.removeItem('name',inputsValue.username)
        localStorage.removeItem('email',inputsValue.email)
        localStorage.removeItem('website',inputsValue.website)
        localStorage.setItem('save',saveValueFalse)
      }
      initialiseForm()
      setAxiosError("")
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("data",error.response.data);
        console.log("status",error.response.status);
        console.log("headers",error.response.headers);
        const code=error.response.data.code
        switch (code) {
          case "rest_comment_content_invalid": setAxiosError("Comment is Required !")
            break;
            case "comment_duplicate": setAxiosError("Duplicate comment detected; it looks as though you've already said that !")
            break;
            case "rest_invalid_param": setAxiosError("Invalid Email !")
            break;
          default: setAxiosError(error.response.data.message)
            break;
        }
        // setAxiosError(error.response.data.message)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('request',error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log('config',error.config);
      // console.log("comment error", error.response.data)        
      // setAxiosError(error.response.data.message)
      if(error.response.data.code==="comment_duplicate"){
        setFocussedComment(true)
      }
    }
  }
  const [query, setQuery] = useState("")
  const navigate2=useNavigate()
  function handleSearch(e){
    navigate2("/blog?s="+query)
  }
  return (
    <div className="section py-[100px] blogPostsPage bg-lightGray">
      {
        isLoading
          ? <div className="sectionContainer px-5 sm:px-[30px] md:px-[50px] lg:px-[50px] xl:px-[100px] 2xl:px-[150px] flex gap-[20px] justify-between lg:flex-row flex-col">
            <div className="blogLeft lg:w-[calc(100%/3*2-20px)] p-[15px] lg:p-[30px] bg-white rounded-lg ">
              <h3 className="postTitle text-2xl font-medium mb-5 ">{currentpost[0].title.rendered}</h3>
              <div className="overflow-hidden postFeaturedMediaCon my-7 rounded-lg"><img className='w-full object-cover' src={urlImg} alt="" /></div>
              <div
                className="entry-content"
                dangerouslySetInnerHTML={{ __html: currentpost[0].content.rendered }}
              />
              {/* {post[0].content.rendered} */}

              <div className="pagination flex lg:justify-end justify-center items-center px-[30px] lg:px-0 gap-[10px] mt-5">
                <div
                  onClick={() => {
                    if (currentPosition > 0) {
                      initialiseForm()
                      navigate("/posts/" + latestPosts2[currentPosition - 1].latestPosts.slug)
                      setCurrentPosition(currentPosition - 1)
                    }
                  }}
                  style={{ backgroundColor: currentPosition <= 0 && "#74b787", cursor: currentPosition <= 0 && "not-allowed" }}
                  // to={currentPosition <= 0 ? "" : "/posts/"+latestPosts2[currentPosition-1].latestPosts.slug}
                  className="prev bg-verte cursor-pointer flex items-center justify-center p-2 w-[50px] h-[50px]">
                  <img className='w-[30px] ' src="../assets/icons - svg/Blanc/24 px/Achibest-icon-Left-Arrow.svg" alt="" />
                </div>
                <div
                  onClick={() => {
                    if (currentPosition < latestPosts2.length - 1) {
                      initialiseForm()
                      navigate("/posts/" + latestPosts2[currentPosition + 1].latestPosts.slug)
                      setCurrentPosition(currentPosition + 1)
                    }
                  }}
                  style={{ backgroundColor: currentPosition >= latestPosts2.length - 1 && "#74b787", cursor: currentPosition >= latestPosts2.length - 1 && "not-allowed" }}
                  // to={currentPosition >= latestPosts2.length-1 ? "" : "/posts/"+latestPosts2[currentPosition+1].latestPosts.slug}
                  className="next bg-verte cursor-pointer flex items-center justify-center p-2 w-[50px] h-[50px]">
                  <img className='w-[30px] ' src="../assets/icons - svg/Blanc/24 px/Achibest-icon-Right-Arrow.svg" alt="" />
                </div>
              </div>
              <form className='my-5' action="">
                <div className="blogRightBoxTitle">Leave a comment</div>
                {axiosError.length !== 0 && <div className="axiosError p-[10px]  bg-[#f9c8cd] rounded-md mb-[10px] text-[#721c24] w-full ">
                  { 
                    axiosError
                  }
                </div>}
                <div className="fieldList flex flex-wrap gap-[10px] justify-between">
                  <InputFieldItem
                    handleOnblur={(e) => setFocussedUsername(true)}
                    focused={focussedUsername.toString()}
                    errorItem="Username is required"
                    isRequired={true}
                    placeholder="Username"
                    name="username"
                    handleOnchange={handleOnchange}
                    value={inputsValue.username}
                    custumStyle={"w-full md:w-[calc(100%/3-10px)] gap-2"}
                    label="Username*"
                    type={"text"} />
                  <InputFieldItem
                    handleOnblur={(e) => setFocussedEmail(true)}
                    focused={focussedEmail.toString()}
                    errorItem={emailErrorMsg}
                    isRequired={true}
                    placeholder="Email"
                    name="email"
                    handleOnchange={handleOnchange}
                    value={inputsValue.email}
                    custumStyle={"w-full md:w-[calc(100%/3-10px)] gap-2"}
                    label="Email*"
                    type={"email"} />
                  <InputFieldItem
                    custumStyle={"w-full md:w-[calc(100%/3-10px)] gap-2"}
                    label="Website"
                    name="website"
                    handleOnchange={handleOnchange}
                    value={inputsValue.website}
                    type={"text"} 
                    placeholder="Your Website"/>
                  <TextAreaFieldItem
                    custumStyle={"w-full"}
                    label="Comment*"
                    handleOnblur={(e) => setFocussedComment(true)}
                    focused={focussedComment.toString()}
                    isRequired={true}
                    name="comment"
                    handleOnchange={handleOnchange}
                    value={inputsValue.comment}
                    errorItem={commentError}
                    placeholder="Your Comment"
                  />
                </div>
                <div className="saveMe my-5">
                  <input
                    type="radio"
                    id="saveMe"
                    name='saveInput'
                    hidden
                    checked={save}
                    onChange={(e) => e.target.value} />
                  <label
                    htmlFor="saveMe"
                    className={save ? "checked custum_radio_btn flex gap-5 items-baseline" : "custum_radio_btn flex gap-5 items-baseline"} onClick={() => setSave(!save)}>
                    <div className="custum_radio_contain"></div>
                    <p className='w-[calc(100%-37px)] '>Save my name, my email & my website, in this browser for the next time I comment.</p>
                  </label>
                </div>
                <div className="flex justify-end mb-5"><ButtonInput onClick={handleSubmit} btnContent={"submit comment"} rounded="rounded-lg" /></div>
              </form>
              {
                commentSent &&
                <PopupSuccess btnAction  onClick={()=>{
                  setCommentSent(false)
                }} popupContent={<>
                  Your Comment will be visible after being approved                </>
                }  />
              }
              <div className="blogRightBoxTitle">Comments ({comments.length}) </div>
              <div className="commentsList flex flex-col gap-5">
                {
                  comments.map((comment, c) => (
                    <div key={c} className="commentItem flex gap-5">
                      <div className="imgContainer w-[60px] h-[60px] overflow-hidden rounded-full ">
                        <img className='w-full h-full object-cover rounded-full' src={Object.values(comment.author_avatar_urls)[2]} alt="" />
                      </div>
                      <div className="commentInfo w-[calc(100%-60px)] ">
                        <div className="username capitalize text-[14px] font-medium">{comment.author_name}</div>
                        <div className="date opacity-70 text-[12px]">{Moment(comment.date).format('MMM DD, yyyy')}</div>
                        <p className="commentContent"
                          dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
                        />
                      </div>
                    </div>
                  ))
                }
                {comments.length === 0 &&
                  <p className="text-center text-[18px] py-[10px] ">No comments related to this post yet!</p>
                }
              </div>
            </div>
            <div className="blogRight lg:w-[calc(100%/3-20px)] flex flex-col gap-5" >
            <div className="blogRightBox p-[15px] bg-white lg:p-[30px] rounded-lg relative">
                <div className="blogRightBoxTitle"></div>
                <SearchForm 
                query={query} 
                setQuery={setQuery} 
                handleSearch={handleSearch} 
                setNoResult={setNoResult} 
                suggestedPosts={suggestedPosts} 
                setSuggestedPosts={setSuggestedPosts} 
                data={latestPosts} />
                { (suggestedPosts.length!==0 || noResults) && 
                  <div className="suggestionBar postsList flex flex-col gap-[10px] justify-between absolute bg-lightGray w-[calc(100%-30px)] lg:w-[calc(100%-60px)]  rounded-lg left-0 right-0 mx-auto p-[15px] mt-1 border-[1px] border-[lightgray] z-20">
                   { 

                    suggestedPosts.map((post, p) => (
                      p < 4 && <SingleLatestPost
                      suggestedPosts={suggestedPosts}
                        setCurrentPost={setCurrentPost}
                        key={p}
                        isLoading={isLoading}
                        title={post.title.rendered}
                        date={post.date}
                        slug={post.slug}
                        featuredMedia={post.featured_media}
                      />
                    ))
                    
                  }
                  {noResults && 
                  <div className="text-center text-[16px] ">No Results Found.</div>}
                </div>
                }
              </div>
              <div className="blogRightBox p-[15px] bg-white lg:p-[30px] rounded-lg">
                <div className="blogRightBoxTitle">Most Popular Posts</div>
                <div className="postsList flex flex-col gap-[10px] justify-between">
                  {
                    latestPosts.map((post, p) => (
                      p < 4 && <SingleLatestPost
                        setCurrentPost={setCurrentPost}
                        key={p}
                        isLoading={isLoading}
                        title={post.title.rendered}
                        date={post.date}
                        slug={post.slug}
                        featuredMedia={post.featured_media}
                      />
                    ))
                  }
                </div>
              </div>
              <div className="blogRightBox p-[15px] bg-white lg:p-[30px]">
                <div className="blogRightBoxTitle" >Categories</div>
                <div className="categoriesList flex flex-col gap-[10px]  ">
                  {
                    categories.map((category, cat) => (
                      <Link
                        key={cat}
                        to={"/blog?category=" + category.slug}
                        className="categoryItem flex items-center justify-between">
                        <h4 className="categoryTitle font-medium hover:text-orange">{category.name}</h4>
                        <div className="nbPosts">({category.count})</div>
                      </Link>
                    ))
                  }
                </div>
              </div>
              <div className="blogRightBox p-[15px] bg-white lg:p-[30px]">
                <div className="blogRightBoxTitle">Main Tags</div>
                <div className="tagsList flex flex-wrap gap-[10px] ">
                  {
                    tags.map((tag, t) =>
                    (
                      <span key={t} className="tagItem p-1 bg-verte text-white">
                        {tag}
                      </span>
                    ))
                  }
                  {tags.length === 0 &&
                    <div className="text-center text-[18px] py-[10px]">No tags realated to this post</div>
                  }
                </div>
              </div>
            </div>
          </div>
          : <p className='text-center w-full py-5 capitalize text-[25px] opacity-60 '>loading...</p>
      }
    </div>

  )
}

export default BlogFeed