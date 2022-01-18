function Posts() {
  return (
    <div className='postsMainContainer'>
        <div className='postsSidebar'>
          <ul className='postsSidebarLinks'>
            <li className='postsSidebarLink'>hello</li>
            <li className='postsSidebarLink'>goodbye</li>
            <li className='postsSidebarLink'>hello</li>
            <li className='postsSidebarLink'>goodbye</li>
            <li className='postsSidebarLink'>hello</li>
            <li className='postsSidebarLink'>goodbye</li>
          </ul>
        </div>
      <div className='postsFeed'>
        <ul className='reviews'>
          <li className='card'>hello</li>
          <li className='card'>goodbye</li>
          <li className='card'>hello</li>
          <li className='card'>goodbye</li><li className='card'>hello</li>
          <li className='card'>goodbye</li>
        </ul>
      </div>
    </div>
  )
}

export default Posts
