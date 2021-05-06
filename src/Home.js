import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'React with Yoshi', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
  // let name = "mario"
  // const [name, setName] = useState('mario');

 //  const handleClick = () => {
  //  setName('luigi');
  // }

  const handleClickAgain = (name, e) => {
    console.log('hello' + name, e.target);
  }

  return (
    <div className="home">
     <BlogList />
    </div>
  );
}

export default Home;
