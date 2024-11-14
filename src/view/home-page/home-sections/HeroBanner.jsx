import video from "../../../assets/celfii-video.mp4";

const HeroBanner = () => (
  <section>
    <div className="relative w-full bg-gray-50">
      <video
        className="object-cover w-full"
        style={{ height: "calc(100vh - 80px)" }}
        autoPlay
        loop
        muted
      >
        {" "}
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);

export default HeroBanner;
