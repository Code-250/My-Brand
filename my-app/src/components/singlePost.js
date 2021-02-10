import React from 'react';
import "./singlepost.css";
import Footer from './Footer';
import NavBar from './NavBar';
function SinglePost(){
    return(
        <>
            <NavBar/>
            <div className="image">
                <img src="images/blog1.jpg"alt="blog-title"/>
            </div>
            <div className="container">
                <div className="row row-title">
                    <h1 className="header">
                        Top 5 programing Languages 2021
                    </h1>
                    <label className="date-issued">created on 12, January,2021</label>
                </div>
                <div className="row row-content">
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati, suscipit assumenda voluptas rerum culpa reiciendis quae 
                            saepe laboriosam
                            pariatur dignissimos iusto quis earum aliquid maiores repudiandae. 
                            Perspiciatis quibusdam non, vel sequi veniam, 
                            fugit aspernatur saepe delectus enim nul

                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati, suscipit assumenda voluptas rerum culpa reiciendis quae 
                            saepe laboriosam
                            pariatur dignissimos iusto quis earum aliquid maiores repudiandae. 
                            Perspiciatis quibusdam non, vel sequi veniam, 
                            fugit aspernatur saepe delectus enim nul

                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati, suscipit assumenda voluptas rerum culpa reiciendis quae 
                            saepe laboriosam
                            pariatur dignissimos iusto quis earum aliquid maiores repudiandae. 
                            Perspiciatis quibusdam non, vel sequi veniam, 
                            fugit aspernatur saepe delectus enim nul

                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati, suscipit assumenda voluptas rerum culpa reiciendis quae 
                            saepe laboriosam
                            pariatur dignissimos iusto quis earum aliquid maiores repudiandae. 
                            Perspiciatis quibusdam non, vel sequi veniam, 
                            fugit aspernatur saepe delectus enim nul
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati, suscipit assumenda voluptas rerum culpa reiciendis quae 
                            saepe laboriosam
                            pariatur dignissimos iusto quis earum aliquid maiores repudiandae. 
                            Perspiciatis quibusdam non, vel sequi veniam, 
                            fugit aspernatur saepe delectus enim nul

                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati, suscipit assumenda voluptas rerum culpa reiciendis quae 
                            saepe laboriosam
                            pariatur dignissimos iusto quis earum aliquid maiores repudiandae. 
                            Perspiciatis quibusdam non, vel sequi veniam, 
                            fugit aspernatur saepe delectus enim nul

                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati, suscipit assumenda voluptas rerum culpa reiciendis quae 
                            saepe laboriosam
                            pariatur dignissimos iusto quis earum aliquid maiores repudiandae. 
                            Perspiciatis quibusdam non, vel sequi veniam, 
                            fugit aspernatur saepe delectus enim nul

                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Obcaecati, suscipit assumenda voluptas rerum culpa reiciendis quae 
                            saepe laboriosam
                            pariatur dignissimos iusto quis earum aliquid maiores repudiandae. 
                            Perspiciatis quibusdam non, vel sequi veniam, 
                            fugit aspernatur saepe delectus enim nul
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SinglePost;