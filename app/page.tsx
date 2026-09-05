import { company } from "./company";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

const services = [
  {
    title: "Product Strategy",
    description:
      "We help you define what to build, who it is for, and how it will make money before a line of code is written.",
  },
  {
    title: "Design",
    description:
      "User experience and interface design for web and mobile products, from wireframes to polished, production-ready screens.",
  },
  {
    title: "Development",
    description:
      "Full-stack engineering for websites, web applications, and mobile apps, built on modern, maintainable technology.",
  },
  {
    title: "Growth & Marketing",
    description:
      "Launch campaigns, paid social, and analytics that help your product reach the right customers and keep them.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <SiteHeader />

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

        <section id="services" className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <li
                key={service.title}
                className="flex flex-col gap-2 rounded-lg border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <h3 className="font-semibold">{service.title}</h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
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
            We keep teams small and communication direct, so every project gets
            the attention it needs from start to finish.
          </p>
        </section>

        <section id="contact" className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
            Have a project in mind or a question about our services? Reach us
            using the details below and we will get back to you within one
            business day.
          </p>
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

      <SiteFooter />
    </div>
  );
}
