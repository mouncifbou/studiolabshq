import type { Metadata } from "next";
import { company } from "../company";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | StudioLabs LLC",
  description: "How StudioLabs LLC collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            Effective date: {company.legalEffectiveDate}
          </p>
        </div>

        <div className="flex flex-col gap-8 leading-7 text-zinc-600 dark:text-zinc-400">
          <p>
            {company.name} (&quot;StudioLabs&quot;, &quot;we&quot;, &quot;us&quot;,
            or &quot;our&quot;) operates the website {company.website}. This
            Privacy Policy explains what information we collect when you visit
            our website or work with us, how we use it, and the choices you
            have.
          </p>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Information we collect
            </h2>
            <p>
              <strong className="font-medium text-zinc-900 dark:text-zinc-100">
                Information you provide.
              </strong>{" "}
              When you contact us by email or phone, we receive the information
              you choose to share, such as your name, email address, phone
              number, company name, and the details of your inquiry.
            </p>
            <p>
              <strong className="font-medium text-zinc-900 dark:text-zinc-100">
                Information collected automatically.
              </strong>{" "}
              Like most websites, our hosting provider records standard server
              logs when you visit, including your IP address, browser type,
              device type, referring page, and the pages you view. We use this
              information only to keep the site secure and understand how it is
              used in aggregate.
            </p>
            <p>
              We do not use advertising cookies or sell personal information.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              How we use information
            </h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>To respond to your inquiries and provide our services.</li>
              <li>To communicate with you about projects, proposals, and invoices.</li>
              <li>To operate, secure, and improve our website.</li>
              <li>To comply with legal obligations and enforce our agreements.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              How we share information
            </h2>
            <p>
              We share personal information only with service providers who
              help us operate our business, such as web hosting, email, and
              payment processors, and only to the extent needed for them to
              perform those services. We may also disclose information when
              required by law or to protect our rights, property, or safety.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Data retention and security
            </h2>
            <p>
              We keep personal information for as long as needed to fulfil the
              purposes described in this policy, or as required by law. We use
              reasonable administrative and technical safeguards to protect the
              information we hold, though no method of transmission or storage
              is completely secure.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Your choices
            </h2>
            <p>
              You may ask us to access, correct, or delete the personal
              information we hold about you by contacting us at the address
              below. We will respond within a reasonable time and in accordance
              with applicable law.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Third-party links
            </h2>
            <p>
              Our website may link to third-party sites. We are not responsible
              for the privacy practices of those sites and encourage you to
              read their policies.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Changes to this policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The effective
              date at the top of this page shows when it was last revised.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Contact us
            </h2>
            <p>If you have questions about this policy, contact us at:</p>
            <address className="not-italic">
              {company.name}
              <br />
              {company.address}
              <br />
              {company.phone}
              <br />
              {company.email}
            </address>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
