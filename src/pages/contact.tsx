import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="kontak" className="py-20 bg-[#fcfaf4]">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Punya ide keren buat kegiatan sosial di Kota Bogor? Yuk, ngobrol
            bareng — kolaborasi dimulai dari sini.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6 bg-white shadow-xl p-8 rounded-2xl border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Ayo Terhubung
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Kami terbuka untuk kolaborasi, ide sosial, dan kegiatan komunitas.
              Setiap langkah kecilmu bisa berdampak besar bagi Bogor!
            </p>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Alamat:</strong> Jl. Pajajaran No. 45, Bogor
              </p>
              <p>
                <strong>Telepon:</strong> +62 812 3456 7890
              </p>
              <p>
                <strong>Email:</strong> info@vokasibogor.id
              </p>
            </div>

            {/* Sosial Media */}
            <div className="flex space-x-5 mt-4">
              {[
                { alt: "Instagram", src: "/logos/logo_delta.png" },
                { alt: "TikTok", src: "/logos/logo_delta.png" },
                { alt: "YouTube", src: "/logos/logo_delta.png" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  className="transition"
                  href="#"
                >
                  <img src={item.src} alt={item.alt} className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Pesan kamu udah terkirim 😎");
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 space-y-6"
          >
            {[
              { label: "Nama", type: "text", placeholder: "Nama kamu..." },
              { label: "Email", type: "email", placeholder: "Email kamu..." },
            ].map((input, i) => (
              <div
                key={i}
                className="relative rounded-xl p-[2px] bg-gradient-to-r from-[#a7aeec] via-[#7c85f9] to-[#5a63f0] focus-within:shadow-[0_0_0_3px_rgba(167,174,236,0.4)] transition"
              >
                <div className="bg-white rounded-[10px]">
                  <input
                    type={input.type}
                    placeholder=" "
                    required
                    className="peer w-full border-none rounded-xl px-4 pt-5 pb-2 text-gray-800 focus:outline-none"
                  />
                  <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#7c85f9]">
                    {input.label}
                  </label>
                </div>
              </div>
            ))}

            {/* Pesan */}
            <div className="relative rounded-xl p-[2px] bg-gradient-to-r from-[#a7aeec] via-[#7c85f9] to-[#5a63f0] focus-within:shadow-[0_0_0_3px_rgba(167,174,236,0.4)] transition">
              <div className="bg-white rounded-[10px]">
                <textarea
                  rows={4}
                  placeholder=" "
                  required
                  className="peer w-full border-none rounded-xl px-4 pt-5 pb-2 text-gray-800 focus:outline-none resize-none"
                ></textarea>
                <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#7c85f9]">
                  Pesan
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#a7aeec] via-[#7c85f9] to-[#5a63f0] text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition"
            >
              Kirim Pesan
            </motion.button>
          </motion.form>
        </div>

        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            title="Lokasi Kami"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.028196279835!2d106.8060398748051!3d-6.258395993734515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e6f23b7f15d3%3A0x95d5747e2b8e1f36!2sBogor%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1699776452891!5m2!1sen!2sid"
            width="100%"
            height="400"
            loading="lazy"
            className="border-none"
          ></iframe>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Contact;
