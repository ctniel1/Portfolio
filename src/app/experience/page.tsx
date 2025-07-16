export default function ExperiencePage() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Software Engineer · Domo</h2>
        <p className="text-sm text-gray-600">Aug 2022 – Present · American Fork, UT</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Lead Frontend developer for shifting Domo’s pricing model, generating $200k+ expected annual income.</li>
          <li>Helped rebuild an in-house app store from scratch, participating in tech stack decisions and implementing polished UI.</li>
          <li>Created customer-facing features with React, TypeScript, Next.js, and Kotlin-based backend services.</li>
          <li>Worked cross-functionally to deliver data apps with feedback-driven iteration cycles.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Front End Web Developer · FamilySearch</h2>
        <p className="text-sm text-gray-600">Apr 2020 – Aug 2022 · Lehi, UT</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Translated Figma designs into functional React components with accessibility and performance in mind.</li>
          <li>Rebuilt legacy Flash apps into modern React web applications.</li>
          <li>Implemented feedback capture systems using Google Sheets APIs without 3rd-party libraries.</li>
          <li>Maintained test coverage using React Testing Library and Jest.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Full Stack Developer · YBA Shirts</h2>
        <p className="text-sm text-gray-600">Sep 2019 – Apr 2020 · Orem, UT</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Built internal portal using React, Node.js, and MySQL to track company-wide workflow and orders.</li>
          <li>Integrated QuickBooks Online for in-app invoice and billing functionality.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Full Stack Developer · BYU Athletics</h2>
        <p className="text-sm text-gray-600">Apr 2018 – Apr 2020 · Provo, UT</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Used Angular and Drupal CMS to manage byucougars.com content and custom modules.</li>
          <li>Collaborated with athletic department teams to build fast, optimized microsites for nutrition, sports camps, and boosters.</li>
          <li>Resolved front-end bugs within 24 hours to maintain site performance.</li>
        </ul>
      </div>
    </main>
  );
}