import { Link } from "react-router-dom";
import { bottomImages, topImages } from "../../assets/data/homeImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSection = () => {
  var settings = {
    dots: true,
    // centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <section className="px-4 sm:px-10 lg:px-28">
      {/* TOP IMAGE SECTION */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-10">
        {topImages.map((data, idx) => {
          return (
            <div key={idx} className={`w-full h-[16rem] relative`}>
              <Link to="#">
                <img
                  src={data.image}
                  className="h-full w-full object-cover rounded-xl"
                />
                <div className=" absolute top-5 left-5 w-[55%]">
                  <h4 className="text-2xl font-semibold py-5">{data.title}</h4>
                  <span className="text-md"> {data.content} &#11166; </span>
                </div>
              </Link>
            </div>
          );
        })}
      </section>

      {/* BOTTOM IMAGE SECTION */}
      <section>
        <Slider {...settings}>
          {bottomImages.map((data, idx) => {
            return (
              <div key={idx} className={`w-full h-[14rem] relative text-white`}>
                <Link to="#">
                  <img
                    src={data.image}
                    className="h-full w-full object-cover rounded-xl"
                  />
                  <div
                    className={`absolute top-0 left-0 ${data.color} w-full h-full rounded-xl p-5`}
                  >
                    <h4 className="text-xl md:text-2xl font-semibold py-5">
                      {data.title}
                    </h4>
                    <span className="text-md md:text-xl"> {data.content} </span>
                    <button
                      className={`block bg-white my-3 py-2 px-4 rounded-sm text-md md:text-lg ${
                        idx == 0 ? "text-[rgba(88,165,127,1)]" : ""
                      } ${idx == 1 ? "text-[rgba(20,50,151,1)]" : ""} ${
                        idx == 2 ? "text-[rgba(61,109,141,1)]" : ""
                      }`}
                    >
                      View now &#11166;{" "}
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </section>
    </section>
  );
};

export default ImageSection;
