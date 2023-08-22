import Hero from '../Hero/Hero';
import Categories from '../Categories/Categories';
import PostCard from '../PostCard/PostCard';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>PIPIL - 2023</title>
      </Helmet>


      <Hero></Hero>
      <h2 className='text-center text-2xl font-bold'>Items Category</h2>
      <div className='my-20'>
        <Categories></Categories>
      </div>
      <div className='my-20'>
        <PostCard></PostCard>
      </div>
    </div>
  );
};

export default Home;