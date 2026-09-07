'use client';

// The site is a static export: there is no server, no route handler and no place
// for a POST to land. So this form does not pretend to submit. It composes a
// mailto: to the real inbox from what you typed, and it says so above the button
// rather than accepting a message into a void.
import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { business } from '@/lib/business';

const FIELD =
  'w-full rounded-[14px] border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-slate-soft focus:border-seafoam-deep';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [topic, setTopic] = useState('Not sure yet');
  const [message, setMessage] = useState('');

  const body = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Address: ${address}`,
    `About: ${topic}`,
    '',
    message,
  ].join('\n');

  const href = `${business.emailHref}?subject=${encodeURIComponent(
    `Garage door enquiry${name ? ` from ${name}` : ''}`,
  )}&body=${encodeURIComponent(body)}`;

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="cf-name" className="font-display text-sm font-medium text-teal">
            Your name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            className={FIELD}
            placeholder="Rosa Alvarez"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cf-phone" className="font-display text-sm font-medium text-teal">
            Phone
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={FIELD}
            placeholder="(850) 000-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-address" className="font-display text-sm font-medium text-teal">
          Street and town
        </label>
        <input
          id="cf-address"
          name="address"
          type="text"
          autoComplete="street-address"
          className={FIELD}
          placeholder="Fairpoint Drive, Gulf Breeze"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-topic" className="font-display text-sm font-medium text-teal">
          What is going on
        </label>
        <select
          id="cf-topic"
          name="topic"
          className={FIELD}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option>Not sure yet</option>
          <option>Broken spring</option>
          <option>Opener trouble</option>
          <option>Cable or drum</option>
          <option>Door off track</option>
          <option>Damaged panel</option>
          <option>Maintenance tune-up</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-message" className="font-display text-sm font-medium text-teal">
          Anything you have noticed
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          className={FIELD}
          placeholder="Sounds, when it started, whether the door still moves at all."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <p className="rounded-[14px] bg-seafoam-wash px-4 py-3 text-sm text-teal">
        This form opens an email to {business.email} with what you have typed already
        filled in. Nothing is sent from this page and nothing is stored on it. If the
        door is stuck, jammed or making noise right now, calling is faster.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn btn-solid">
          <Mail size={16} aria-hidden="true" />
          Open an email to us
        </button>
        <a href={business.phoneHref} className="btn btn-primary">
          <Phone size={16} aria-hidden="true" />
          Call {business.phone}
        </a>
      </div>
    </form>
  );
}
