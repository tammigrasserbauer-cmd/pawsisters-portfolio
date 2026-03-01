import galleryData from "../../data/galleryData";
export default function ImageSection() {
  return (
    <>
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center py-5">
        Gallery!
      </h1>
      <div className="grid md:grid-cols-1 justify-center items-center w-fit mx-auto">
        {galleryData.map((item) => (
          <div className="mx-auto ">
            <img
              className="p-5 mx-auto rounded-4xl  md:w-1/2 "
              src={item.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
}
