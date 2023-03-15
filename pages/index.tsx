
/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next';
import { BaseLayout,  } from '@ui';
import { HomeHeader } from '@voex/components/HomeHeader';
import { ListAuthor, CarouselCollection, CarouselNew, Catgor, FeatureBox, FeaturedNFTs, HomeAdvertising, HomeBlog, SliderMain, UpcomingProjects } from '@voex';
import { bgShape } from '@assets';


const Home: NextPage = () => {


  return (
    <BaseLayout>
     <HomeHeader/>
     <UpcomingProjects/>
     <FeaturedNFTs/>
     <HomeAdvertising/>
     <HomeBlog/>

{/* 

   <div>
      <section className="jumbotron breadcumb no-bg bg- h-vh text-dark" style={{backgroundImage: `url(${bgShape.src})`}}>
         <SliderMain/>
      </section>

      <section className='container no-top no-bottom'>
        <FeatureBox/>
      </section>

      <section className='container no-bottom '>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center '>
              <h2 className='text-white'>Hot Collections</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <CarouselCollection/>
          </div>
        </div>
      </section>

      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2 className='text-white'>New Items</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <CarouselNew/>
          </div>
        </div>
      </section>

      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2 className='text-white'>Top Sellers</h2>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <ListAuthor/>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2 className='text-white'>Browse by category</h2>
              <div className="small-border"></div>
            </div>
          </div>
        </div>
        <Catgor/>
      </section>



  </div> */}


    </BaseLayout>
  )
}

export default Home
