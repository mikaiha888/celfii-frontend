import video from "../../../assets/celfii-video.mp4";

const HeroBanner = () => (
  <section>
    <div className="max-w-full shadow-md md:mt-8 2xl:container min-h-[750px] relative bg-gray-50">
    <video 
        className="object-cover min-h-[93vh] md:min-h-[750px] md:h-full w-full" 
        autoPlay 
        loop 
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);

export default HeroBanner;
