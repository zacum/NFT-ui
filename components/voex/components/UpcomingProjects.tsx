import { BlogItemInterface } from "interfaces/Blog";
import { useEffect, useState } from "react";
import { BlogItem } from "./BlogItem";


export const UpcomingProjects = () => {
    const [data, setdata] = useState<BlogItemInterface[]|undefined>();
    
	useEffect(() => {

    const setData = async () => {
		try {
      const response = await fetch('http://beta.voex.io:1337/api/posts?populate=*');
			const data = await response.json();
			setdata(data.data);
			console.log(data.data)
    } catch (error) {
      
    }
		
		};
		setData();

	}, []);
  return (
    <div  className='bg-purple d-flex justify-content-center py-5'>
        <div className=" col-11 col-xl-9 col-xxl-9 py-5">
            <h3 className="title_detail_nft ">Upcoming <br/> Projects</h3>
            <div className="d-flex flex-wrap  justify-content-between">
                <p className="col-12 col-lg-7 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis mattis tortor. Cras aliquet nisi consequat lacus ultrices eleifend. In ultricies turpis non odio sodales nec tristique elit.</p>
                <div className="mt-2" >
                <button className=" btn-main-hover-dark">View All</button>
                </div>
            </div>

            <div className='d-flex flex-wrap  justify-content-center justify-content-md-evenly  justify-content-xxl-around mb-5 '>
					{data!==undefined&&data.length>0&&data.map((item, i) => (
						<div key={i} className="">
                            <BlogItem urlImg={item.attributes.image.data[0].attributes.url} title={item.attributes.title} shortDescription={item.attributes.short_description}/>
                        </div>
					))}

					

				</div>
        </div>
    </div>
  )
}

