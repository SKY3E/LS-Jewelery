import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 min-h-screen bg-secondary">
      <nav className="navbar bg-primary rounded mb-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">LS Jewelery</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
        </div>
      </nav>
      <section className="flex gap-x-4">
        <section className="w-2/3">
          <article className="hero bg-primary rounded mb-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="flex gap-x-4">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
              </div>
              <div>
                <h1 className="text-5xl font-bold">Welcome to our store!</h1>
                <p className="py-6">We are Ludivine and Sophia, two dedicated middle school students how go to Fasny. Through our store, our hope is to sell our jewelery: necklaces, bracelets and more... in order to bring a little bit more joy to the world!</p>
                <button className="btn btn-secondary">Get Started</button>
              </div>
            </div>
          </article>
          <article className="hero bg-primary rounded">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="flex gap-x-4">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
              </div>
              <div>
                <h1 className="text-5xl font-bold">Welcome to our store!</h1>
                <p className="py-6">We are Ludivine and Sophia, two dedicated middle school students how go to Fasny. Through our store, our hope is to sell our jewelery: necklaces, bracelets and more... in order to bring a little bit more joy to the world!</p>
                <button className="btn btn-secondary">Get Started</button>
              </div>
            </div>
          </article>
        </section>
        <article className="hero bg-primary rounded w-1/3">
          <div className="hero-content flex flex-col">
            <h1 className="text-5xl font-bold">Our ❤️ Selection!</h1>
            <div className="h-20 bg-secondary w-full rounded"></div>
            <div className="h-20 bg-secondary w-full rounded"></div>
            <div className="h-20 bg-secondary w-full rounded"></div>
          </div>
        </article>
      </section>
    </main>
  );
}
