import Image from "next/image";

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-12">
        <div className="sm:order-2">
          <a href="https://linkedin.com/in/hayyamyalcin" target="_blank">
            <Image
              src="/profile.jpg"
              alt="Hayyam Nazım Yalçın"
              className="rounded-full bg-gray-100 grayscale hover:grayscale-0 transition-all"
              width={160}
              height={160}
              priority
            />
          </a>
        </div>
        <div className="sm:order-1">
          <h1 className="text-3xl font-bold mb-2">Hayyam Nazım Yalçın</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">Full-Stack Developer</h2>
          <div className="space-y-1 text-gray-700 dark:text-gray-300">
            <p>📍 Isparta, Turkey</p>
            <p>📞 +90 506 066 80 12</p>
            <p>📧 hayyamyalcin@hotmail.com | hayyamyalcin@gmail.com</p>
            <div className="flex gap-4 mt-3">
              <a href="https://github.com/yalcinhayyam" target="_blank" className="hover:text-blue-600">GitHub</a>
              <a href="https://linkedin.com/in/hayyamyalcin" target="_blank" className="hover:text-blue-600">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">About Me</h2>
          <p>
            Full Stack Developer with 5+ years of experience specializing in modern software architectures (TDD, DDD, Clean Architecture, Microservices, MVVM). 
            I've worked on robust projects in web, mobile, and backend development. 
            Team-oriented, solution-focused developer with a passion for continuous learning.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Languages & Tools</h3>
              <ul className="space-y-2">
                <li><strong>Programming Languages:</strong> C#, TypeScript, Java/Kotlin, Dart, Python</li>
                <li><strong>Frontend:</strong> React, Next.js, Angular, Vue, Flutter</li>
                <li><strong>Backend:</strong> .NET, .NET Core, NestJS, FastAPI, Flask</li>
                <li><strong>Mobile:</strong> React Native, Flutter</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Architectures & More</h3>
              <ul className="space-y-2">
                <li><strong>Architectures:</strong> TDD, DDD, MVVM, Clean Architecture, Microservices</li>
                <li><strong>Database & Infrastructure:</strong> Redis, Docker, GraphQL, GRPC</li>
                <li><strong>AI/ML:</strong> LangChain, Reinforcement Learning</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Work Experience</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Veripark</h3>
              <p className="text-gray-600 dark:text-gray-400">Intern & Full-Stack Developer | June 2023 – May 2025</p>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li>Developed banking solutions using VeriChannel infrastructure for Federal Credit Union Bank</li>
                <li>Implemented both backend and frontend components for financial systems</li>
                <li>Worked with modern web technologies in a financial services environment</li>
                <li><a href="https://banking.innovationcu.ca" target="_blank" className="text-blue-600 hover:underline">banking.innovationcu.ca</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Wadaaa Marketplaces (Texas, USA)</h3>
              <p className="text-gray-600 dark:text-gray-400">Frontend Developer | 2021 – February 2022</p>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li>Built e-commerce platform using Shopify, Liquid, and GraphQL Storefront</li>
                <li>Developed mobile applications with React Native</li>
                <li>Implemented responsive UI components and optimized frontend performance</li>
                <li><a href="https://www.wadaaa.com" target="_blank" className="text-blue-600 hover:underline">www.wadaaa.com</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Morphosium Software</h3>
              <p className="text-gray-600 dark:text-gray-400">Frontend Developer | February 2022 – August 2022</p>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li>Developed user interfaces for web and mobile applications</li>
                <li>Collaborated with design teams to implement UI/UX designs</li>
                <li>Optimized application performance and accessibility</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Zensoft Software</h3>
              <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer | January 2020 – May 2022</p>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li>Developed Cafe & Restaurant Automation System using .NET Core and Angular</li>
                <li>Implemented both frontend and backend components</li>
                <li>Worked on database design and API development</li>
                <li><a href="https://zensoft.com.tr" target="_blank" className="text-blue-600 hover:underline">zensoft.com.tr</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Mehmet Akif Ersoy University</h3>
              <p className="text-gray-600 dark:text-gray-400">Bachelor's in Computer Engineering | September 2022 – January 2025</p>
              {/* <p>GPA: 2.1 / 4.0</p> */}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Isparta University of Applied Sciences</h3>
              <p className="text-gray-600 dark:text-gray-400">Associate Degree in Computer Programming</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Languages</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Language</th>
                  <th className="px-4 py-2">Reading</th>
                  <th className="px-4 py-2">Writing</th>
                  <th className="px-4 py-2">Speaking</th>
                  <th className="px-4 py-2">Listening</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">English</td>
                  <td className="border px-4 py-2">C1</td>
                  <td className="border px-4 py-2">C1</td>
                  <td className="border px-4 py-2">B2</td>
                  <td className="border px-4 py-2">B2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">References</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-4 rounded">
              <h3 className="font-semibold">Sedat Metlek</h3>
              <p className="text-gray-600 dark:text-gray-400">Associate Professor</p>
              <p>Burdur Mehmet Akif Ersoy University</p>
              <p>📞 +90 505 877 45 83</p>
            </div>
            <div className="border p-4 rounded">
              <h3 className="font-semibold">Mustafa Köle</h3>
              <p className="text-gray-600 dark:text-gray-400">Principle Developer</p>
              <p>📞 +90 506 547 84 74</p>
            </div>
            <div className="border p-4 rounded">
              <h3 className="font-semibold">Murat İnce</h3>
              <p className="text-gray-600 dark:text-gray-400">Associate Professor</p>
              <p>📞 +90 544 837 01 17</p>
            </div>
          </div>
        </section>

        {/* <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Additional Information</h2>
          <ul className="space-y-2">
            <li><strong>Disability Status:</strong> Visual impairment (Myopia) 55%</li>
            <li><strong>Military Status:</strong> Postponed (June 2026) - High probability of exemption</li>
          </ul>
        </section> */}
      </div>
    </section>
  );
}

// import Image from "next/image";
// import { socialLinks } from "./config";

// export default function Page() {
//   return (
//     <section>
//       <a href={socialLinks.linkedin} target="_blank">
//         <Image
//           src="/profile.jpg"
//           alt="Hayyam Nazım Yalçın"
//           className="rounded-full bg-gray-100 block mx-auto mb-6 grayscale hover:grayscale-0"
//           width={160}
//           height={160}
//           priority
//         />
//       </a>

//       <h1 className="mb-2 text-2xl font-bold">Hayyam Nazım Yalçın</h1>
//       <p className="text-neutral-500 dark:text-neutral-400 mb-4">
//         Full-Stack Developer · Isparta, Turkey
//       </p>

//       <div className="prose prose-neutral dark:prose-invert">
//         <p>
//           I'm a Full-Stack Developer with 5+ years of experience, deeply
//           knowledgeable in modern software architectures such as TDD, DDD, Clean
//           Architecture, Microservices, and MVVM. I've contributed to complex
//           web, mobile, and backend projects. I thrive in team settings, focus on
//           solutions, and am always eager to learn.
//         </p>

//         <h2>🧠 Technical Skills</h2>
//         <ul>
//           <li>
//             <strong>Languages:</strong> C#, TypeScript, Java/Kotlin, Dart,
//             Python
//           </li>
//           <li>
//             <strong>Frameworks:</strong> .NET, .NET Core, NestJS, Next.js,
//             React, React Native, Angular, Vue, Flutter, FastAPI, Flask
//           </li>
//           <li>
//             <strong>Architectures:</strong> TDD, DDD, MVVM, Clean Architecture,
//             Microservices
//           </li>
//           <li>
//             <strong>Tools & Infra:</strong> Redis, Docker, GraphQL, GRPC
//           </li>
//           <li>
//             <strong>AI/LLM:</strong> LangChain, Reinforcement Learning
//           </li>
//         </ul>

//         <h2>💼 Experience</h2>

//         <h3>Veripark (June 2023 – May 2025)</h3>
//         <p>
//           <em>Intern & Full-Stack Developer</em>
//           <br />
//           Actively contributed to Innovation Credit Union Bank projects using
//           VeriChannel infrastructure. Developed both backend and frontend
//           features.
//           <br />
//           🔗{" "}
//           <a href="https://banking.innovationcu.ca" target="_blank">
//             banking.innovationcu.ca
//           </a>
//         </p>

//         <h3>Wadaaa Marketplaces, Texas USA (2021 – Feb 2022)</h3>
//         <p>
//           <em>Frontend Developer</em>
//           <br />
//           Developed e-commerce solutions using Shopify, Liquid, GraphQL
//           Storefront API, and React Native.
//           <br />
//           🔗{" "}
//           <a href="https://www.wadaaa.com" target="_blank">
//             wadaaa.com
//           </a>
//         </p>

//         <h3>Morphosium Software (Feb 2022 – Aug 2022)</h3>
//         <p>
//           <em>Frontend Developer</em>
//           <br />
//           Worked on UI development for web and mobile applications.
//         </p>

//         <h3>Zensoft Software (Jan 2020 – May 2022)</h3>
//         <p>
//           <em>Full-Stack & Frontend Developer</em>
//           <br />
//           Developed a café & restaurant automation system using .NET Core and
//           Angular.
//           <br />
//           🔗{" "}
//           <a href="https://zensoft.com.tr" target="_blank">
//             zensoft.com.tr
//           </a>
//         </p>

//         <h2>🎓 Education</h2>
//         <ul>
//           <li>
//             <strong>Mehmet Akif Ersoy University:</strong> BSc in Computer
//             Engineering
//           </li>
//           {/* (GPA: 2.1 / 4.0) */}
//           <li>
//             <strong>Isparta University of Applied Sciences:</strong> Associate
//             Degree in Computer Programming
//           </li>
//         </ul>

//         <h2>🌐 Languages</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Language</th>
//               <th>Reading</th>
//               <th>Writing</th>
//               <th>Speaking</th>
//               <th>Listening</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>English</td>
//               <td>C1</td>
//               <td>C1</td>
//               <td>B2</td>
//               <td>B2</td>
//             </tr>
//           </tbody>
//         </table>

//         <h2>📌 Keywords</h2>
//         <p>
//           <code>.NET</code>, <code>Node.js</code>, <code>NestJS</code>,{" "}
//           <code>Flutter</code>,<code>Clean Architecture</code>, <code>DDD</code>
//           , <code>MVVM</code>, <code>TDD</code>, <code>Microservices</code>,
//           <br />
//           <code>Docker</code>, <code>Redis</code>, <code>React</code>,{" "}
//           <code>React Native</code>, <code>Next.js</code>, <code>Angular</code>,{" "}
//           <code>Vue</code>, <code>GraphQL</code>, <code>GRPC</code>,<br />
//           <code>Java/Kotlin</code>, <code>Python</code>, <code>LangChain</code>,{" "}
//           <code>LLM</code>, <code>Reinforcement Learning</code>,{" "}
//           <code>FastAPI</code>, <code>Flask</code>
//         </p>

//         <h2>📞 Contact</h2>
//         <ul>
//           <li>
//             <strong>Phone:</strong> +90 506 066 80 12
//           </li>
//           <li>
//             <strong>Email:</strong> hayyamyalcin@hotmail.com /
//             hayyamyalcin@gmail.com
//           </li>
//           <li>
//             <strong>GitHub:</strong>{" "}
//             <a href="https://github.com/yalcinhayyam" target="_blank">
//               yalcinhayyam
//             </a>
//           </li>
//           <li>
//             <strong>LinkedIn:</strong>{" "}
//             <a href="https://linkedin.com/in/hayyamyalcin" target="_blank">
//               hayyamyalcin
//             </a>
//           </li>
//         </ul>

//         <h2>🧑‍⚖️ References</h2>
//         <ul>
//           <li>
//             <strong>Assoc. Prof. Dr. Sedat Metlek</strong> – Mehmet Akif Ersoy
//             University
//             <br />
//             📞 +90 505 877 45 83
//           </li>
//           <li>
//             <strong>Mustafa Köle</strong> – Principal Developer
//             <br />
//             📞 +90 506 547 84 74
//           </li>
//           <li>
//             <strong>Assoc. Prof. Dr. Murat İnce</strong>
//             <br />
//             📞 +90 544 837 01 17
//           </li>
//         </ul>

//         {/* <h2>🏥 Additional Information</h2>
//         <ul>
//           <li><strong>Disability:</strong> Visual impairment (Myopia) – 55%</li>
//           <li><strong>Military Service:</strong> Postponed until June 2026 (likely to be exempted)</li>
//         </ul> */}
//       </div>
//     </section>
//   );
// }

// // import Image from "next/image";
// // import { socialLinks } from "./config";

// // export default function Page() {
// //   return (
// //     <section>
// //       <a href={socialLinks.twitter} target="_blank">
// //         <Image
// //           src="/profile.png"
// //           alt="Profile photo"
// //           className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
// //           unoptimized
// //           width={160}
// //           height={160}
// //           priority
// //         />
// //       </a>
// //       <h1 className="mb-8 text-2xl font-medium">
// //         Portfolio template!
// //       </h1>
// //       <div className="prose prose-neutral dark:prose-invert">
// //         <p>
// //           A clean, fast, and lightweight portfolio template built with Next.js,
// //           Vercel, and Tailwind CSS.
// //         </p>
// //         <p>
// //           Nextfolio has everything you need for a portfolio: MDX blog, SEO, RSS,
// //           Atom & JSON feeds, analytics, Tweet & YouTube embeds, KaTeX and {""}
// //           <a
// //             target="_blank"
// //             href="https://github.com/1msirius/Nextfolio?tab=readme-ov-file#features"
// //           >
// //             more
// //           </a>
// //           .
// //         </p>
// //         <p>
// //           Nextfolio is{" "}
// //           <a href={socialLinks.github} target="_blank">
// //             open-source
// //           </a>{" "}
// //           and fully customizable, making it easy to add more features.
// //         </p>
// //         <p>
// //           <a
// //             href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1msirius%2FNextfolio"
// //             target="_blank"
// //           >
// //             Deploy
// //           </a>{" "}
// //           your Nextfolio site with Vercel in minutes and follow the set up
// //           instructions in the{" "}
// //           <a href="/blog/getting-started">Getting Started</a> post.
// //         </p>
// //         <p>
// //           Built and maintained by{" "}
// //           <a href="https://imsirius.xyz/" target="_blank">
// //             Sirius
// //           </a>
// //           .
// //         </p>
// //       </div>
// //     </section>
// //   );
// // }
