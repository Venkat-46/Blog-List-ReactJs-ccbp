// Write your JS code here
import BlogItem from '../BlogItem/index'
import './index.css'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul className="blog-list-container">
      {blogList.map(eachItem => (
        <BlogItem key={eachItem.id} blogDetails={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
