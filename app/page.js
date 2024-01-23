'use client';

export default function Home() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
  }

  return (
    <main className="p-4 min-h-screen bg-secondary">
      <nav className="w-full flex items-center justify-center bg-primary rounded min-h-16 p-2 mb-4">
        <h1 className="font-bold text-4xl">LS Jewelery</h1>
      </nav>
      <section className="flex gap-x-4">
        <section className="w-2/3">
          <article className="grid w-full place-items-center bg-cover bg-center bg-primary rounded mb-4">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-4 p-4">
              <div className="flex gap-x-4">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
              </div>
              <div>
                <h1 className="text-5xl font-bold pb-4">Welcome to our store!</h1>
                <h3 className="text-2xl font-semibold pb-2">We are Ludivine and Sophia!</h3> 
                <p className="pb-4">Two dedicated students located in Mamaroneck NY. Through our store, our hope is to sell our necklaces, bracelets and more...</p>
                <button className="font-semibold bg-secondary h-12 min-h-12 rounded px-4 hover:bg-opacity-70">Shop Jewelery</button>
              </div>
            </div>
          </article>
          <article className="grid w-full place-items-center bg-cover bg-center bg-primary rounded">
            <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-4 p-4">
              <div className="flex gap-x-4">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
              </div>
              <div>
                <h1 className="text-5xl font-bold pb-4">Welcome to our store!</h1>
                <h3 className="text-2xl font-semibold pb-2">We are Ludivine and Sophia!</h3> 
                <p className="pb-4">Two dedicated students located in Mamaroneck NY. Through our store, our hope is to sell our necklaces, bracelets and more...</p>
                <button className="font-semibold bg-secondary h-12 min-h-12 rounded px-4 hover:bg-opacity-70">Shop Jewelery</button>
              </div>
            </div>
          </article>
        </section>
        <article className="grid w-1/3 place-items-center bg-cover bg-center bg-primary rounded w-1/3">
          <div className="z-0 flex flex-col items-center justify-center w-full gap-4 p-4">
            <h1 className="text-5xl font-bold">Contact US!</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name"/>
              <input type="email" name="email"/>
              <textarea name="message"></textarea>
              <button type="submit">Submit Form</button>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
}
