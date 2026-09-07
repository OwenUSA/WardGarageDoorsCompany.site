import type { Metadata } from 'next';
import { meta } from '@/content/copy';
import { business, SITE_URL } from '@/lib/business';
import { pageMetadata } from '@/lib/meta';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = pageMetadata(meta.privacy);

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Privacy"
        heading="What we do with what you tell us."
        intro={`This policy covers ${SITE_URL.replace('https://', '')}, the website of ${business.name}, and the information you share when you call, email or use the contact form.`}
      />

      <section className="band">
        <div className="shell">
          <div className="prose-block max-w-2xl text-slate">
            <p className="text-lg">
              Short version: this is a five-page brochure site. It has no accounts, no
              logins, no shopping cart and no advertising trackers. The only information
              we hold about you is what you choose to tell us when you get in touch about
              a garage door.
            </p>

            <h2 className="mt-12 mb-4 text-2xl text-teal">Who we are</h2>
            <p>
              {business.name}, {business.addressLine}. You can reach us by phone on{' '}
              {business.phone} or by email at {business.email}. If you have a question
              about anything on this page, either of those will get to us.
            </p>

            <h2 className="mt-12 mb-4 text-2xl text-teal">What we collect</h2>
            <p>
              When you call us, we take the details we need to do the work: your name,
              your phone number, the address of the door, and a description of the
              problem. When you email us, we hold whatever you put in the email.
            </p>
            <p>
              The contact form on this site does not submit anything to a server. This
              website is published as static files, so there is nothing behind it to
              receive a form. What the form does instead is open a message in your own
              email program with the fields you typed already filled in. Nothing is sent,
              stored or transmitted until you press send in your own email program, and
              nothing you type into it is saved by this website.
            </p>

            <h2 className="mt-12 mb-4 text-2xl text-teal">How we use it</h2>
            <p>
              We use your details to quote the work, to schedule a visit, to carry out the
              repair and to invoice for it. If we have serviced a door for you, we may
              keep a record of what we fitted so that a later repair can be matched to the
              parts already on the door. That is the whole of it. We do not sell, rent or
              trade your details, and we do not add you to a marketing list because you
              called about a broken spring.
            </p>

            <h2 className="mt-12 mb-4 text-2xl text-teal">Cookies and analytics</h2>
            <p>
              This site sets no cookies of its own and runs no analytics or advertising
              scripts. There is no tracking pixel, no remarketing tag and no third-party
              script watching how you move through the pages.
            </p>
            <p>
              Two pages embed a Google Maps frame so you can see where we are. That frame
              is loaded from Google and, once it loads, Google may set its own cookies and
              receive your IP address, as it would on any site that embeds a map. We do
              not receive anything from it. If you would rather not load it, the street
              address is printed in plain text beside the map on every page that carries
              one.
            </p>
            <p>
              Our web host keeps ordinary server logs — the requested page, the time, the
              browser type and the IP address the request came from. Those exist so the
              site can be kept running and secure, and they are not used to build any
              profile of you.
            </p>

            <h2 className="mt-12 mb-4 text-2xl text-teal">Who else sees it</h2>
            <p>
              Nobody, beyond the people who need it to do the job. We share details with a
              supplier only where a part has to be ordered against your door, and with an
              accountant or a payment processor only as far as invoicing requires. We will
              also disclose information where the law requires it of us.
            </p>

            <h2 className="mt-12 mb-4 text-2xl text-teal">How long we keep it</h2>
            <p>
              Job records and invoices are kept as long as our tax and warranty obligations
              require. Enquiries that never became jobs are deleted once it is clear they
              are not going anywhere.
            </p>

            <h2 className="mt-12 mb-4 text-2xl text-teal">Your choices</h2>
            <p>
              Email {business.email} and ask us what we hold about you, ask us to correct
              it, or ask us to delete it. We will do it, other than for records we are
              legally required to retain, and we will not ask you why.
            </p>

            <h2 className="mt-12 mb-4 text-2xl text-teal">Children</h2>
            <p>
              This site is aimed at homeowners and is not directed at children. We do not
              knowingly collect information from anyone under 13.
            </p>

            <h2 className="mt-12 mb-4 text-2xl text-teal">Changes to this policy</h2>
            <p>
              If we change how any of this works, we will change this page to match. There
              is no version of that where the practice changes and the page does not.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
