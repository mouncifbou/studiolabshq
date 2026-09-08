import type { Metadata } from "next";
import { company } from "../company";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | StudioLabs LLC",
  description: "How refunds, cancellations, and disputes work for StudioLabs LLC services.",
  alternates: { canonical: "/refunds" },
};

const h2 = "text-xl font-semibold text-zinc-900 dark:text-zinc-100";

export default function RefundsPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            {`Effective date: ${company.legalEffectiveDate}`}
          </p>
        </div>

        <div className="flex flex-col gap-8 leading-7 text-zinc-600 dark:text-zinc-400">
          <p>
            This policy explains how payments, cancellations, and refunds work
            for services purchased from {company.name}. All prices are in US
            dollars (USD) unless a written proposal states otherwise.
          </p>

          <section className="flex flex-col gap-3">
            <h2 className={h2}>Payments and deposits</h2>
            <p>
              Fixed-price projects require a deposit of 50% before work begins,
              with the remaining 50% due on delivery of the final work. Larger
              projects may be split into milestones set out in the proposal.
              Monthly retainers and marketing plans are billed in advance at the
              start of each billing period.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className={h2}>Cancellation by you</h2>
            <p>
              You may cancel a project at any time by emailing {company.email}.
              Work completed up to the date of cancellation is billable. If the
              deposit exceeds the value of work completed, we refund the
              difference. If the value of work completed exceeds the deposit, the
              balance is invoiced. Monthly retainers can be cancelled with 14
              days&apos; written notice before the next billing date. Periods
              already billed are not refunded.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className={h2}>Refunds</h2>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong className="font-medium text-zinc-900 dark:text-zinc-100">Before work starts:</strong>{" "}
                a full refund of the deposit if you cancel within 7 days of payment and no work has been delivered.
              </li>
              <li>
                <strong className="font-medium text-zinc-900 dark:text-zinc-100">During a project:</strong>{" "}
                a pro-rated refund of any prepaid amount that exceeds the value of work completed.
              </li>
              <li>
                <strong className="font-medium text-zinc-900 dark:text-zinc-100">After delivery:</strong>{" "}
                if the delivered work does not match the agreed scope, tell us within 14 days and we will correct it at no charge. If we cannot correct it, we refund the portion of the fee attributable to the unmet scope.
              </li>
            </ul>
            <p>
              Refunds are issued to the original payment method within 10
              business days of approval. Third-party costs paid on your behalf,
              such as domains, hosting, ad spend, or software licences, are not
              refundable once purchased.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className={h2}>Cancellation by us</h2>
            <p>
              If we are unable to complete a project, we refund all prepaid
              amounts for work not yet delivered.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className={h2}>Disputes</h2>
            <p>
              If you are unhappy with any charge, contact us first at{" "}
              {company.email} or {company.phone}. We respond within 2 business
              days and aim to resolve every billing question within 10 business
              days. Please give us the chance to resolve an issue before opening
              a chargeback with your bank.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className={h2}>Contact</h2>
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
