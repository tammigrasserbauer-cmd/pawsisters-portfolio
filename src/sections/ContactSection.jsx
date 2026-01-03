import { Mail, Instagram } from "lucide-react";
export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center mb-2 md:text-xl">Get in Touch!</h1>
        <h2 className="text-center md:text-lg text-gray-600">
          Have a question or want to place and order? We would love to hear from
          you!
        </h2>
        <div className="grid md:grid-cols-2 mt-10 gap-5">
          <div className="bg-pink-200 p-12 rounded-2xl flex gap-5 ">
            <div className="h-11 w-11 bg-pink-400/50 rounded-full flex justify-center items-center text-purple-600 ">
              <Mail size={22} />
            </div>
            <div>
              <h2 className="text-lg md:text-xl">Email:</h2>
              <h3 className="text-sm md:text-lg">Email and something more!</h3>
              <h4 className="text-sm md:text-lg">
                Best way to get in touch with us!
              </h4>
            </div>
          </div>

          <div className="bg-pink-200 p-12 rounded-2xl flex gap-5 ">
            <div className="h-11 w-11 bg-pink-400/50 rounded-full flex justify-center items-center text-purple-600 ">
              <div className="text-2xl">
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div>
              <h2 className="text-lg md:text-xl">Instagram</h2>
              <h3 className="text-sm md:text-lg">Email and something more!</h3>
              <h4 className="text-sm md:text-lg">
                See our latest work & updates
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
