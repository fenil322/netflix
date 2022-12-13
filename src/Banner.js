import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";


  function truncation(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

const Banner = () => {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      
      let url = `https://api.themoviedb.org/3/discover/tv?api_key=34d55aaf90b3a1974e29321cd5ba08d3&with_networks=213`;
      let res = await fetch(url);
      let data = await res.json();
      //   console.log(data);
      setMovies(data.results);
      return data;
    };
    fetchdata();
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <> <Carousel {...settings}>
      {Movies.map((curElem) => {
        return (
          <>
           
              <Wrap>
                <header
                  className="banner img"
                  style={{
                    backgroundSize: `cover`,
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${curElem?.backdrop_path})`,
                    //   backgroundSize:`80%`,

                    backgroundPosition: `center center`,
                  }}
                >
                  <div className="banner_contents">
                    <h1 className="banner_title">
                      {" "}
                      {curElem?.title ||
                        curElem?.name ||
                        curElem?.original_name}
                    </h1>
                    <div className="banner_buttons">
                      <button className="banner_button">Play</button>
                      <button className="banner_button">My List</button>
                    </div>
                    <h3 className="banner_desription">
                      {truncation(curElem?.overview, 180)}
                    </h3>
                  </div>
                  <div className="banner_faded" />
                </header>
              </Wrap>
           
          </>
        );
      })}
      </Carousel>
    </>
  );
};

const Carousel = styled(Slider)`

  il li button {
    &:before {
      font-size: 50px;
      color:white;
    }
  }

  li.slick-active button::before {
    // color: red;
  }

  .slick-list {
    overflow: hidden;
    color:white;
  }
  button {
    z-index: 1;
    color:white;
  }
  .slick-dots li button:before{
    color:white;
  }
 .slick-next{
   right:5px;
 }
 .slick-prev{
   left:5px;
 }
`;

const Wrap = styled.div`
img {
    // border: 4px solid transparent;
    // border-radius: 4px;
    // width: 100%;
    // height: 100%;
    // box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    //   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
export default Banner;












// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const Banner = () => {
//   const [Movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchdata = async () => {
//       // const bannerData =request.fetchNetflxOriginal;
//       //   let url = `https://api.themoviedb.org/3${bannerData}}`;
//       //   let url = `https://api.themoviedb.org/3${request.fetchNetflxOriginal}}`;
//       let url = `https://api.themoviedb.org/3/discover/tv?api_key=34d55aaf90b3a1974e29321cd5ba08d3&with_networks=213`;
//       let res = await fetch(url);
//       let data = await res.json();
//       //   console.log(data);
//       setMovies(data.results[Math.floor(Math.random() * data.results.length)]);
//       return data;
//     };
//     fetchdata();
//   }, []);
// //   console.log(Movies);

// function truncation(str,n){
//     return str?.length>n ? str.substr(0,n-1)+"..." : str;
// }
//   return (
//     <>
//       <header
//         className="banner"
//         style={{
//           backgroundSize: `cover`,
//           backgroundImage: `url(https://image.tmdb.org/t/p/original/${Movies?.backdrop_path})`,
//           //   backgroundSize:`80%`,

//           backgroundPosition: `center center`,
//         }}
//       >
//         <div className="banner_contents">
//           <h1 className="banner_title">
//             {" "}
//             {Movies?.title || Movies?.name || Movies?.original_name}
//           </h1>
//           <div className="banner_buttons">
//             <button className="banner_button">Play</button>
//             <button className="banner_button">My List</button>
//           </div>
//           <h3 className="banner_desription">
//           {truncation(Movies?.overview,180)}
//           </h3>
//         </div>
//         <div className="banner_faded" />
//       </header>
//     </>
//   );
// };

// export default Banner;
