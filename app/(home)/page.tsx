/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import VideoSlider from "./components/portfolio/VideoSlider";
import CardPortfolio from "./components/portfolio/CardPortfolio";

export default function Page() {
  return (
    <main className="pb-24">
      {/* POSTER */}
      <div className="-mt-24">
        <Image src="/background/poster-ndt.png" alt="Poster-NDT" width={1440} height={900} className="" />
        <Image src="/twink.png" alt="Poster-NDT" width={436} height={572} className="absolute w-72 right-5 -mt-48" />
      </div>
    
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 mt-28 mb-16">
          {/* <h1 className="text-black text-5xl md:text-6xl font-extrabold leading-tight">
            We Build
            <br />
            <span className="text-black">Software Solutions</span>
          </h1> */}
          <div>
            <h1 className="text-5xl md:text-4xl font-semibold leading-tight">
              Solusi <span className="text-sky-500">Digital Terbaik</span> untuk
            </h1>
            <h1 className="mt-2 text-5xl font-extrabold">Pengalaman</h1>
            <h1 className="mt-2 text-5xl font-extrabold">Pengguna</h1>
            <h1 className="mt-3 py-1 w-64 text-center bg-white text-black text-5xl font-extrabold">Luar Biasa</h1>
          </div>
          <p className="mt-6 text-slate-400 max-w-xl">
            Nahcoda Digital Teknologi adalah software house yang fokus membuat
            solusi digital berkualitas untuk perusahaan dan startup. Kami
            menggabungkan desain elegan dan engineering yang scalable.
          </p>

          <div className="mt-16 flex items-center gap-4">
            <a
              href="#contact"
              className="w-32 py-3 text-center rounded-md font-medium hover:font-bold text-white bg-gradient-to-r from-indigo-600 to-sky-500"
            >
              Get Started
            </a>
            <a href="#portfolio" className="px-5 py-3 rounded-md glass border border-white/50 hover:border-white text-sm font-semibold">
              See our work →
            </a>
          </div>
        </div>
        

        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          {/* Replace the src with the exported PNG for better fidelity in Figma. */}
          {/* If the image is not available locally, use the placeholder SVG below (uncomment to use) */}
          <div className="w-full max-w-sm">
            <Image src="/background/picture1.png" alt="gambar pak bos" width={1440} height={900} className="" />
          </div>
        </div>
      </section>
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* ABOUT */}
        <section id="about" className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold">About Us</h2>
              <p className="mt-4 text-slate-400 max-w-prose">
                Kami adalah tim developer, designer, dan strategist yang
                berpengalaman. Kami membantu perusahaan membangun produk digital
                yang rapi, dapat diskalakan, dan mudah digunakan. Fokus kami pada
                kualitas kode, UX, dan delivery tepat waktu.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Image src="/twink.png" alt="Poster-NDT" width={436} height={572} className="absolute w-72 left-5 -mt-20" />
                <div className="p-4 glass rounded-lg border border-white/3 z-10">
                  <div className="text-sm  font-semibold">
                    Trusted process
                  </div>
                  <div className="mt-2 text-sm">
                    Agile workflows, regular review, dan komunikasi transparan.
                  </div>
                </div>
                <div className="p-4 bg-[color:var(--surface)] rounded-lg border border-white/3">
                  <div className="text-sm font-semibold">
                    Custom solutions
                  </div>
                  <div className="mt-2 text-sm">
                    Solusi di-desain sesuai kebutuhan bisnis, bukan template kaku.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-lg glass border border-white/3">
                <div className="text-sm text-slate-400">Quick facts</div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold">40+</div>
                    <div className="text-sm text-slate-400">
                      Projects delivered
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">10</div>
                    <div className="text-sm text-slate-400">Team members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-36">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Why Should <span className="bg-sky-500 px-3 text-black">You Choose</span>
            <br />
            Our Services?</h1>
            {/* <p className="mt-3 text-slate-400">
              Kami menawarkan solusi yang fleksibel yang dapat disesuaikan dengan perubahan bisnis Anda
            </p> */}
            <p className="mt-3 text-slate-400">
              We offer flexible solutions that can be adapted to your changing business.
            </p>
          </div>
          <div className="mt-24 grid grid-cols-5 gap-10">
            <div className="mx-auto">
              <div className="group w-36 h-36 pt-5 hover:pt-3 rounded-full hover:ring-1 hover:ring-purple-900 cursor-pointer bg-slate-700/50 text-center">
                <Image src="/services/services-web.png" alt="gambar web" width={360} height={360} className="w-28 group-hover:w-32 m-auto" /> 
              </div>
              <h1 className="mt-6 text-center">Web Development</h1>
            </div>
            <div className="mx-auto">
              <div className="group w-36 h-36 pt-5 hover:pt-3 rounded-full hover:ring-1 hover:ring-purple-900 cursor-pointer bg-slate-700/50 text-center">
                <Image src="/services/services-mobile.png" alt="gambar mobile" width={360} height={360} className="w-16 group-hover:w-20 m-auto" /> 
              </div>
              <h1 className="mt-6 text-center">Mobile Applications</h1>
            </div>
            <div className="mx-auto">
              <div className="group w-36 h-36 pt-4 hover:pt-3 rounded-full hover:ring-1 hover:ring-purple-900 cursor-pointer bg-slate-700/50 text-center">
                <Image src="/services/services-design.png" alt="gambar design" width={360} height={360} className="w-28 group-hover:w-32 m-auto" /> 
              </div>
              <h1 className="mt-6 text-center">UI/UX Design</h1>
            </div>
            <div className="mx-auto">
              <div className="group w-36 h-36 pt-4 hover:pt-3 rounded-full hover:ring-1 hover:ring-purple-900 cursor-pointer bg-slate-700/50 text-center">
                <Image src="/services/services-consult.png" alt="gambar konsultasi" width={360} height={360} className="w-28 group-hover:w-32 m-auto" /> 
              </div>
              <h1 className="mt-6 text-center">IT Consultations</h1>
            </div>
            <div className="mx-auto">
              <div className="group w-36 h-36 pt-4 hover:pt-3 rounded-full hover:ring-1 hover:ring-purple-900 cursor-pointer bg-slate-700/50 text-center">
                <Image src="/services/services-cyber.png" alt="gambar cyber" width={360} height={360} className="w-28 group-hover:w-32 m-auto" /> 
              </div>
              <h1 className="mt-6 text-center">Cyber Security</h1>
            </div>
          </div>

          {/* <h3 className="mt-28 text-3xl font-bold">Our Services</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl glass border border-white/4">
              <div className="text-xl font-semibold">Web Development</div>
              <p className="mt-3 text-slate-400">
                Building responsive, maintainable web applications and APIs using
                modern stacks.
              </p>
              <div className="mt-4 text-sm text-slate-400">
                React / Vue / Laravel / Node.js
              </div>
            </div>
            <div className="p-6 rounded-xl glass border border-white/4">
              <div className="text-xl font-semibold">Mobile Applications</div>
              <p className="mt-3 text-slate-400">
                Cross-platform and native apps with strong UX and offline support.
              </p>
              <div className="mt-4 text-sm text-slate-400">
                React Native / Flutter / Native iOS & Android
              </div>
            </div>
            <div className="p-6 rounded-xl glass border border-white/4">
              <div className="text-xl font-semibold">UI / UX Design</div>
              <p className="mt-3 text-slate-400">
                Design systems, prototypes, and usability testing to create
                delightful interfaces.
              </p>
              <div className="mt-4 text-sm text-slate-400">
                Figma / Design systems
              </div>
            </div>
          </div> */}
        </section>

        {/* BACKGROUND LAPTOP PORTFOLIO */}
        <div className="absolute right-0 mt-10"> 
          <Image src="/background/bg-laptop.png" alt="laptop" width={436} height={572} className="-z-10 w-[500px] opacity-20 -rotate-12" />
        </div>
        <div className="absolute -left-10 mt-[600px]"> 
          <Image src="/background/bg-laptop.png" alt="laptop" width={436} height={572} className="-z-10 w-[500px] opacity-20 rotate-12" />
        </div>
         <div className="absolute right-0 mt-[910px]"> 
          <Image src="/background/bg-laptop.png" alt="laptop" width={436} height={572} className="-z-10 w-[500px] opacity-20 -rotate-12" />
        </div>

        {/* PORTFOLIO */}
        <section id="portfolio" className="mt-44 relative">         
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold">Portfolio</h3>
            <p className="mt-3 text-slate-400">
              Selected projects & case studies.
            </p>
          </div>
          {/* VIDEO SLIDER (Carousel) */}
          <div>
            <VideoSlider />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <CardPortfolio 
            image="/products/gambar-projectA.png"
            title="Enterprise Dashboard"
            description="Dashboard for logistics company with realtime metrics."
            />
            {/* Card 2 */}
            <CardPortfolio 
            image="/products/gambar-projectB.png"
            title="Mobile e-Commerce"
            description="End to end shopping experience with in-app payments."
            />
            {/* Card 3 */}
            <CardPortfolio 
            image="/products/gambar-projectC.png"
            title="SaaS CRM"
            description="CRM platform for small to medium businesses."
            />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-44 pb-5">
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-6 gap-6">
            <div className="lg:col-span-3">
              <div>
                <h1 className="text-4xl font-bold">
                  Have a Project Idea?
                </h1>
                <h1 className="mt-2 py-1 w-52 text-center bg-sky-500 text-black text-4xl font-bold">Talk to us!</h1>
                <p className="mt-5">
                  Kami menawarkan solusi yang fleksibel yang dapat disesuaikan dengan perubahan bisnis Anda
                </p>
              </div>
              <div className="mt-5 px-6 pt-6 pb-10 rounded-lg glass shadow-xl">
                <div>
                  <h1 className="text-sm">Office</h1>
                  <div className="flex mt-2">
                    <BuildingOffice2Icon className="text-white w-5 h-5" />
                    <div className="ml-3">
                      <h1 className="font-semibold">Nahcoda Digital Teknologi</h1>
                      <h1 className="text-sm text-white">
                        Jakarta, Indonesia
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="mt-2 text-sm text-white">
                  <div className="flex">    
                    <EnvelopeIcon className="stroke-white w-5 h-5" />        
                    <div className="ml-3">
                      <h1>jkn.4ccounting@gmail.com</h1>
                      <h1>hrd.ndt22@gmail.com</h1>
                    </div>
                  </div>
                  <div className="flex mt-2">
                    <PhoneIcon className="stroke-white w-5 h-5" />         
                    <h1 className="ml-3">+62 823 3380 7047</h1>
                  </div>
                  <div className="flex mt-5 -ml-1">
                    <a  
                      href="mailto:jkn.4ccounting@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"> 
                      <Image src="/contact/contact-email.png" alt="gambar-logo-email" width={360} height={360} className="w-12 h-12 cursor-pointer hover:shadow-lg" />
                    </a>
                    <a 
                      href="https://wa.me/6282333807047"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Image src="/contact/contact-wa.png" alt="gambar-logo-wa" width={360} height={360} className="w-12 h-12 cursor-pointer hover:shadow-lg" /> 
                    </a>
                    <a 
                      href="https://www.instagram.com/nahcoda_digitech/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Image src="/contact/contact-ig.png" alt="gambar-logo-email" width={360} height={360} className="w-12 h-12 cursor-pointer hover:shadow-lg" /> 
                    </a>
                    <a 
                      href="https://www.tiktok.com/@nahcoda_?lang=en"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Image src="/contact/contact-tiktok.png" alt="gambar-logo-email" width={360} height={360} className="w-12 h-12 cursor-pointer hover:shadow-lg" /> 
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 lg:col-start-4 p-6 text-black rounded-lg bg-white shadow-lg shadow-black/30">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="my-1 p-3 placeholder:text-slate-600 rounded-md bg-transparent border border-black w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="my-1 p-3 placeholder:text-slate-600 rounded-md bg-transparent border border-black w-full"
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="my-1 p-3 placeholder:text-slate-600 rounded-md bg-transparent border border-black w-full"
                  />
                </div>
                <textarea
                  placeholder="Message"
                  className="w-full placeholder:text-slate-600 p-3 rounded-md bg-transparent border border-black h-36"
                ></textarea>
                <div>
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-md text-white bg-gradient-to-r from-indigo-600 to-sky-500 font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
