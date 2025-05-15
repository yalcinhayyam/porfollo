import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-4">
      {/* Profile Header */}
      <div className="text-center mb-8">
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <Image
            src="/profile.jpg"
            alt="Hayyam Nazım Yalçın"
            className="rounded-full bg-gray-100 mx-auto mb-4 grayscale hover:grayscale-0 transition-all"
            width={120}
            height={120}
            priority
          />
        </a>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Hayyam Nazım Yalçın</h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
          Full-Stack Developer · Isparta, Turkey
        </p>
      </div>

      <div className="prose prose-sm sm:prose-base prose-neutral dark:prose-invert max-w-none">
        {/* About */}
        <section className="mb-6">
          <p>
            I'm a Full-Stack Developer with 5+ years of experience, deeply
            knowledgeable in modern software architectures such as TDD, DDD, Clean
            Architecture, Microservices, and MVVM. I've contributed to complex
            web, mobile, and backend projects. I thrive in team settings, focus on
            solutions, and am always eager to learn.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold mb-3">🧠 Technical Skills</h2>
          <ul className="space-y-1.5">
            <li>
              <strong>Languages:</strong> C#, TypeScript, Java/Kotlin, Dart, Python
            </li>
            <li>
              <strong>Frameworks:</strong> .NET, .NET Core, NestJS, Next.js,
              React, React Native, Angular, Vue, Flutter, FastAPI, Flask
            </li>
            <li>
              <strong>Architectures:</strong> TDD, DDD, MVVM, Clean Architecture,
              Microservices
            </li>
            <li>
              <strong>Tools & Infra:</strong> Redis, Docker, GraphQL, GRPC
            </li>
            <li>
              <strong>AI/LLM:</strong> LangChain, Reinforcement Learning
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold mb-3">💼 Experience</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-base sm:text-lg">Veripark (June 2023 – May 2025)</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-1 text-sm sm:text-base">
                <em>Intern & Full-Stack Developer</em>
              </p>
              <p className="text-sm sm:text-base">
                Actively contributed to Innovation Credit Union Bank projects using
                VeriChannel infrastructure. Developed both backend and frontend
                features.
                <br />
                🔗{" "}
                <a href="https://banking.innovationcu.ca" target="_blank" rel="noopener noreferrer" className="break-all">
                  banking.innovationcu.ca
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg">Wadaaa Marketplaces, Texas USA (2021 – Feb 2022)</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-1 text-sm sm:text-base">
                <em>Frontend Developer</em>
              </p>
              <p className="text-sm sm:text-base">
                Developed e-commerce solutions using Shopify, Liquid, GraphQL
                Storefront API, and React Native.
                <br />
                🔗{" "}
                <a href="https://www.wadaaa.com" target="_blank" rel="noopener noreferrer" className="break-all">
                  wadaaa.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg">Morphosium Software (Feb 2022 – Aug 2022)</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-1 text-sm sm:text-base">
                <em>Frontend Developer</em>
              </p>
              <p className="text-sm sm:text-base">
                Worked on UI development for web and mobile applications.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg">Zensoft Software (Jan 2020 – May 2022)</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-1 text-sm sm:text-base">
                <em>Full-Stack & Frontend Developer</em>
              </p>
              <p className="text-sm sm:text-base">
                Developed a café & restaurant automation system using .NET Core and
                Angular.
                <br />
                🔗{" "}
                <a href="https://zensoft.com.tr" target="_blank" rel="noopener noreferrer" className="break-all">
                  zensoft.com.tr
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold mb-3">🎓 Education</h2>
          <ul className="space-y-1.5 text-sm sm:text-base">
            <li>
              <strong>Mehmet Akif Ersoy University:</strong> BSc in Computer
              Engineering (GPA: 2.1 / 4.0)
            </li>
            <li>
              <strong>Isparta University of Applied Sciences:</strong> Associate
              Degree in Computer Programming
            </li>
          </ul>
        </section>

        {/* Languages */}
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold mb-3">🌐 Languages</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm sm:text-base">
              <thead>
                <tr>
                  <th className="px-3 py-1.5 text-left border">Language</th>
                  <th className="px-3 py-1.5 text-left border">Reading</th>
                  <th className="px-3 py-1.5 text-left border">Writing</th>
                  <th className="px-3 py-1.5 text-left border">Speaking</th>
                  <th className="px-3 py-1.5 text-left border">Listening</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-1.5 border">English</td>
                  <td className="px-3 py-1.5 border">C1</td>
                  <td className="px-3 py-1.5 border">C1</td>
                  <td className="px-3 py-1.5 border">B2</td>
                  <td className="px-3 py-1.5 border">B2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Keywords */}
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold mb-3">📌 Keywords</h2>
          <div className="flex flex-wrap gap-1.5">
            {[
              ".NET", "Node.js", "NestJS", "Flutter", "Clean Architecture", "DDD",
              "MVVM", "TDD", "Microservices", "Docker", "Redis", "React",
              "React Native", "Next.js", "Angular", "Vue", "GraphQL", "GRPC",
              "Java/Kotlin", "Python", "LangChain", "LLM", "Reinforcement Learning",
              "FastAPI", "Flask"
            ].map((keyword) => (
              <span 
                key={keyword}
                className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full text-xs sm:text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold mb-3">📞 Contact</h2>
          <ul className="space-y-1.5 text-sm sm:text-base">
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+905060668012" className="hover:underline break-all">
                +90 506 066 80 12
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:hayyamyalcin@hotmail.com" className="hover:underline break-all">
                hayyamyalcin@hotmail.com
              </a>{" "}
              /{" "}
              <a href="mailto:hayyamyalcin@gmail.com" className="hover:underline break-all">
                hayyamyalcin@gmail.com
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:underline break-all">
                github.com/yalcinhayyam
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline break-all">
                linkedin.com/in/hayyamyalcin
              </a>
            </li>
          </ul>
        </section>

        {/* References */}
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold mb-3">🧑‍⚖️ References</h2>
          <ul className="space-y-3 text-sm sm:text-base">
            <li>
              <strong>Assoc. Prof. Dr. Sedat Metlek</strong> – Mehmet Akif Ersoy
              University
              <br />
              📞{" "}
              <a href="tel:+905058774583" className="hover:underline break-all">
                +90 505 877 45 83
              </a>
            </li>
            <li>
              <strong>Mustafa Köle</strong> – Principal Developer
              <br />
              📞{" "}
              <a href="tel:+905065478474" className="hover:underline break-all">
                +90 506 547 84 74
              </a>
            </li>
            <li>
              <strong>Assoc. Prof. Dr. Murat İnce</strong>
              <br />
              📞{" "}
              <a href="tel:+905448370117" className="hover:underline break-all">
                +90 544 837 01 17
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
