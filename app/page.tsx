const company = {
  name: "StudioLabs LLC",
  address: "1309 Coffeen Ave Ste 1200, Sheridan, WY 82801, United States",
  phone: "+1 (808) 774-5158",
  email: "info@studiolabshq.com",
  website: "https://studiolabshq.com",
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-5">
          <span className="text-lg font-semibold tracking-tight">
            {company.name}
          </span>
          <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              About
            </a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-20 px-6 py-20">
        <section className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {company.name}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            StudioLabs LLC is a digital studio that designs, builds, and grows
            software products and online brands for businesses.
          </p>
        </section>

        <section id="about" className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
            StudioLabs LLC is a United States company based in Sheridan,
            Wyoming. We partner with founders and small businesses to plan,
            design, and ship web and mobile products, and we run the digital
            marketing that helps those products reach their customers.
          </p>
          <p className="max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
            Our work covers product strategy, user experience and interface
            design, full-stack development, and ongoing support after launch.
          </p>
        </section>

        <section id="contact" className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-[8rem_1fr]">
            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              Company
            </dt>
            <dd>{company.name}</dd>

            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              Address
            </dt>
            <dd>{company.address}</dd>

            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              Phone
            </dt>
            <dd>{company.phone}</dd>

            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              Email
            </dt>
            <dd>{company.email}</dd>

            <dt className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
              Website
            </dt>
            <dd>{company.website}</dd>
          </dl>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 dark:text-zinc-500">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <p>{company.address}</p>
        </div>
      </footer>
    </div>
  );
}
