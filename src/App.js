import { useEffect, useState } from 'react';
import { getPosts, getUsers } from './api/requests';
import './App.scss';
import './assests/style/style.scss'
import Card from './components/card/card';
import Find from './components/find/find';
import FindInput from './components/inputs/find/findInput';
import MetaTags from 'react-meta-tags'

function App() {
  const [ postsData, setPostsData ] = useState(null)
  const [ usersData, setUsersData ] = useState(null)
  const [ posts, setPosts ] = useState(null)

  const setPostsFunc = (dataPosts, dataUsers, value) => {
    let posts = dataPosts.map(item => {
      let authorIndex = dataUsers.findIndex(user => user.id === item.userId)
      let author = dataUsers[authorIndex].name
      if(value) {
        if(
          author.toUpperCase().startsWith(value.toUpperCase())
        ) return <Card key={item.id} author={author} title={item.title} body={item.body}/>
      } else
          return <Card key={item.id} author={author} title={item.title} body={item.body}/>
    })
    setPosts(posts)
  }

  useEffect(() => {
    if(postsData) setPostsFunc(postsData, usersData)
  }, [postsData])

  useEffect(() => {
    getUsers()
    .then(result => {
     setUsersData(result)
      getPosts()
      .then(result => setPostsData(result))
    })
  }, [])

  return (
    <div className="app">
      <MetaTags>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
     <Find>
       <FindInput 
          postsData={postsData} 
          usersData={usersData} 
          setPostsFunc={setPostsFunc}
       />
     </Find>
      <div className='content'>
        {posts && posts}
      </div>
    </div>
  );
}

export default App;
