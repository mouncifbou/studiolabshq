import type { Metadata } from "next";
import { company } from "../company";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Service | StudioLabs LLC",
  description: "The terms that govern use of the StudioLabs LLC website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Terms of Service
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            {`Effective date: ${company.legalEffectiveDate}`}
          </p>
        </div>

        <div className="flex flex-col gap-8 leading-7 text-zinc-600 dark:text-zinc-400">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the
            website {company.website} (the &quot;Site&quot;) operated by{" "}
            {company.name} (&quot;StudioLabs&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;). By accessing or using the Site
            you agree to these Terms. If you do not agree, please do not use the
            Site.
          </p>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Use of the Site
            </h2>
            <p>
              You may use the Site for lawful purposes only. You agree not to
              interfere with the Site&apos;s operation, attempt to gain
              unauthorized access to any part of it, or use it to transmit
              harmful or unlawful content.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Services and agreements
            </h2>
            <p>
              Information on the Site describes our services in general terms.
              Any design, development, or marketing work we perform for a
              client is governed by a separate written agreement, proposal, or
              statement of work. In the event of a conflict, that agreement
              controls.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Intellectual property
            </h2>
            <p>
              The Site and its content, including text, graphics, logos, and
              design, are owned by StudioLabs or its licensors and are
              protected by copyright and other intellectual property laws. You
              may not copy, modify, or distribute Site content without our
              prior written permission.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Disclaimer of warranties
            </h2>
            <p>
              The Site is provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, whether express or
              implied, including implied warranties of merchantability, fitness
              for a particular purpose, and non-infringement. We do not warrant
              that the Site will be uninterrupted or error-free.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, StudioLabs shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or relating to your use of the
              Site. Our total liability for any claim relating to the Site
              shall not exceed one hundred US dollars (US$100).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Third-party links
            </h2>
            <p>
              The Site may contain links to third-party websites. We do not
              control and are not responsible for the content or practices of
              those sites.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Governing law
            </h2>
            <p>
              These Terms are governed by the laws of the State of Wyoming,
              United States, without regard to its conflict of law principles.
              Any dispute arising from these Terms shall be brought in the state
              or federal courts located in Wyoming.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Changes to these Terms
            </h2>
            <p>
              We may revise these Terms at any time by updating this page. Your
              continued use of the Site after changes are posted constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Contact us
            </h2>
            <p>Questions about these Terms may be sent to:</p>
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
