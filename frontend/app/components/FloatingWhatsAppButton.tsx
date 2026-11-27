const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi VARATECT, I'd like to discuss a project.",
);

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-6 w-6"
    >
      <path
        d="M20.2 11.7a8.2 8.2 0 0 1-12 7.1L4 20l1.3-4.1a8.2 8.2 0 1 1 14.9-4.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.1 8.1c.3-.5.6-.5.9-.2l1 1.4c.2.3.2.5 0 .8l-.5.6c.6 1.2 1.5 2.1 2.7 2.7l.6-.5c.2-.2.5-.2.8-.1l1.4.8c.3.2.4.5.2.8-.4.8-1 1.2-1.8 1.1-2.7-.3-5.8-3.3-6.1-6-.1-.6.2-1.1.8-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function FloatingWhatsAppButton() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
  const isConfigured = /^\d{8,15}$/.test(whatsappNumber);
  const className =
    "inline-flex h-14 w-14 items-center justify-center rounded-full border border-white bg-white text-[#25d366] shadow-[0_8px_24px_rgba(16,24,19,0.28)] transition hover:scale-105 hover:bg-[#f1f5ef] hover:text-[#1fb95b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25d366]";

  return (
    <div className="group fixed bottom-4 right-4 z-[80] sm:bottom-6 sm:right-6">
      {isConfigured ? (
        <a
          href={`https://wa.me/${whatsappNumber}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with VARATECT on WhatsApp"
          className={className}
        >
          <WhatsAppIcon />
        </a>
      ) : (
        <button
          type="button"
          disabled
          title="WhatsApp chat will be available when the business number is added."
          aria-label="WhatsApp chat is not configured yet"
          className={`${className} cursor-not-allowed opacity-75`}
        >
          <WhatsAppIcon />
        </button>
      )}
      {!isConfigured && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[calc(100%+0.75rem)] right-0 w-max rounded-lg bg-[#202b26] px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
        >
          WhatsApp chat coming soon
        </span>
      )}
    </div>
  );
}
