import { Button } from '@/components/button';

export default function ContactPage() {
  const contactMethods = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Email',
      description: 'Send me a message anytime',
      value: 'ctniel1@gmail.com',
      href: 'mailto:ctniel1@gmail.com',
      primary: true,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      title: 'LinkedIn',
      description: "Let's connect professionally",
      value: 'linkedin.com/in/christopher-nielson',
      href: 'https://www.linkedin.com/in/christopher-nielson/',
      primary: false,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      title: 'GitHub',
      description: 'Check out my code',
      value: 'github.com/ctniel1',
      href: 'https://github.com/ctniel1',
      primary: false,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-24">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center md:mb-16">
          <h1 className="mb-4 text-3xl font-bold text-white md:mb-6 md:text-4xl lg:text-5xl">Let&apos;s Connect</h1>
          <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 md:mb-6 md:w-24"></div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            I&apos;m always interested in discussing new opportunities, collaborating on projects,
            or just connecting with fellow developers. Feel free to reach out through any of these
            channels.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-3 md:gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-2xl border p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl md:p-8 ${
                method.primary
                  ? 'border-blue-400/30 bg-gradient-to-br from-blue-600/20 to-purple-600/20 hover:border-blue-400/50 hover:shadow-blue-500/20'
                  : 'border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 hover:shadow-white/10'
              }`}
            >
              <div
                className={`mb-4 inline-flex rounded-xl p-3 ${
                  method.primary ? 'bg-blue-500/20 text-blue-300' : 'bg-white/10 text-gray-300'
                }`}
              >
                {method.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-300 md:text-xl">
                {method.title}
              </h3>
              <p className="mb-3 text-sm text-gray-400 md:text-base">{method.description}</p>
              <p
                className={`text-sm font-medium md:text-base ${
                  method.primary ? 'text-blue-300' : 'text-gray-300'
                } transition-colors group-hover:text-white`}
              >
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Quick Contact Card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm md:p-8">
          <h2 className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">Ready to Start a Conversation?</h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-gray-300 md:mb-8 md:text-base">
            Whether you&apos;re looking for a developer to join your team, need help with a project,
            or just want to chat about technology, I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="primary" size="lg">
              <a href="mailto:ctniel1@gmail.com">
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Send Email
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a
                href="https://www.linkedin.com/in/christopher-nielson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400">
            Typically respond within 24 hours • Based in Utah County, UT
          </p>
        </div>
      </div>
    </main>
  );
}
