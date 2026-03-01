export default function HomeSection() {
  return (
    <>
      <section id="home" className="mb-25">
        <div className="flex justify-center items-center ">
          <img
            className="mt-40 w-35 rounded-full "
            src="public\pawsisterslogo.png"
            alt=""
          />
        </div>
        <h1 className="text-center text-lg mt-5 mb-3">Welcome to Pawsisters</h1>
        <h2 className="text-center">
          Cute and colorful illustrations, stickers, and art prints for your
          everyday joy. Artist alley favorites since [YEAR].
        </h2>

        <div className="flex gap-5 justify-center items-center mt-10">
          <button
            onClick={() => {
              document
                .getElementById("portfolio")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className=" p-3.5 w-35 rounded-3xl text-center bg-linear-to-r from-pink-300 to-pink-500"
          >
            View Our Work
          </button>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-pink-500 border-2 p-3 rounded-3xl w-35 text-center"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </>
  );
}
