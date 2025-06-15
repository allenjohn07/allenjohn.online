"use client";

import { Badge } from "@/components/ui/badge";
import { AnimatedShinyTextComponent } from "./shinnytext";
import BlurIn from "./ui/blur-in";

export default function PortfolioComponent() {
  const handleWebsiteRedirect = () => {
    window.open("https://www.cubingkerala.org", "_blank");
  };

  const handleWebsiteRedirectSCI = () => {
    window.open("https://www.speedcubersindia.com", "_blank");
  }

  const handleSourceRedirect = () => {
    window.open("https://github.com/cubingkeralaorg/cubingkerala", "_blank");
  };

  const handleSourceRedirectSCI = () => {
    window.open("https://github.com/Speed-Cubers-India", "_blank");
  }

  const handleHubRedirect = () => {
    window.open("https://www.luminartechnohub.com", "_blank");
  };

  const handleLabRedirect = () => {
    window.open("https://www.luminartechnolab.com", "_blank");
  };

  const handleMGURedirect = () => {
    window.open("https://www.mgu.ac.in", "_blank");
  };

  const handleSHRedirect = () => {
    window.open("https://www.shcollege.ac.in", "_blank");
  };

  const handleWCARedirect = () => {
    window.open(
      "https://www.worldcubeassociation.org/persons/2017JOHN14",
      "_blank"
    );
  };

  const handleLinkedInRedirect = () => {
    window.open("https://www.linkedin.com/in/allenjohn07", "_blank");
  };

  const handleGithubRedirect = () => {
    window.open("https://github.com/allenjohn07", "_blank");
  };

  const handleSAITRedirect = () => {
    window.open("https://www.sait.ca", "_blank");
  };

  return (
    <div className="min-h-screen text-white font-sans p-4 md:p-8 max-w-2xl mx-auto cursor-default">
      <header className="mb-16 text-center">
        <BlurIn word="Allen John" className="text-2xl text-center" />
        <p className="text-neutral-400">Full Stack Developer, Speedcuber</p>
      </header>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">About me</h2>
        <p className="text-neutral-400">
          I&apos;m a software development student at Southern Alberta Institute of Technology, living in Calgary. I enjoy building web apps that provide real value to users.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="font-medium text-neutral-200 pb-1">Cubing Kerala Website</h3>
            <p className="text-neutral-400">
              As an active member of the cubing community in Kerala, I developed this web application to help cubers track upcoming and past competitions, as well as their rankings. It builds upon a previous version made with JavaScript, React, and Node, which faced performance issues due to free hosting limitations. The new version leverages Next.js for better performance and deployment, and TypeScript for improved type safety. It integrates World Cube Association authentication and APIs to deliver essential real-time data, keeping the community informed and engaged.
            </p>
          </li>
          <div className="flex flex-wrap gap-2">
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Next.js
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              TypeScript
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Prisma
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              PostgreSQL
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              WCA Login
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              WCA API&apos;s
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Tailwind
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Shadcn UI
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Magic UI
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Leaflet
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Lottie JSON
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="w-fit" onClick={() => handleWebsiteRedirect()}>
              <AnimatedShinyTextComponent name="Website" />
            </div>
            <div className="w-fit" onClick={() => handleSourceRedirect()}>
              <AnimatedShinyTextComponent name="Source" />
            </div>
          </div>
          <li className="pt-2">
            <h3 className="font-medium text-neutral-200 pb-1">Speedcubers India Website</h3>
            <p className="text-neutral-400">
              As part of a 4-member team, I&apos;m responsible for the frontend development of this web application for SpeedCubers India, an organization currently seeking WCA regional recognition. I&apos;m also actively contributing to the backend of this application. The platform features a national ranking system for Indian cubers and includes a live feed of upcoming and past competitions organized by SpeedCubers India. We are aiming to launch the platform in the coming months. 
            </p>
          </li>
          <div className="flex flex-wrap gap-2">
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Next.js
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              TypeScript
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Express
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Amazon S3
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              WCA API&apos;s
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Tanstack query
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Tailwind
            </Badge>
            <Badge className="text-neutral-200 bg-neutral-900 hover:bg-neutral-900">
              Chakra UI
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="w-fit" onClick={() => handleWebsiteRedirectSCI()}>
              <AnimatedShinyTextComponent name="Website" />
            </div>
            <div className="w-fit" onClick={() => handleSourceRedirectSCI()}>
              <AnimatedShinyTextComponent name="Source" />
            </div>
          </div>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
        <ul className="space-y-4">
          <li className="space-y-1">
            <div>
              <div>
                <h3 className="font-medium text-neutral-200">MEARN Intern</h3>
                <p
                  onClick={() => handleHubRedirect()}
                  className="text-neutral-400 font-medium transition ease-out hover:text-blue-300 hover:duration-300 cursor-pointer w-fit"
                >
                  Luminar Technohub
                </p>
              </div>
            </div>
            <p className="text-neutral-500 text-sm md:ml-auto mt-1 md:mt-0">
              June 2024 - October 2024
            </p>
            <p className="text-neutral-400">
              Completed weekly tasks ahead of schedule, quickly mastering Google
              Authentication, Nodemailer, and Twilio. Created a web app for my
              cubing community.
            </p>
          </li>
          <li className="space-y-1">
            <div>
              <div>
                <h3 className="font-medium text-neutral-200">
                  MEA(R)N Stack Web Development Expert (Course)
                </h3>
                <p
                  onClick={() => handleLabRedirect()}
                  className="text-neutral-400 font-medium transition ease-out hover:text-blue-300 hover:duration-300 cursor-pointer w-fit"
                >
                  Luminar Technolab
                </p>
              </div>
            </div>
            <p className="text-neutral-500 text-sm md:ml-auto mt-1 md:mt-0">
              September 2023 - March 2024
            </p>
            <p className="text-neutral-400">
              Gained hands-on experience with a variety of frontend
              technologies, including React, Angular, JavaScript, HTML, and CSS.
              Developed backend skills using Node.js, Express, MongoDB, and
              Mongoose.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <ul className="space-y-4">
          <li className="space-y-1">
            <div>
              <div>
                <h3 className="font-medium text-neutral-200">
                  Diploma, Software Development
                </h3>
                <p
                  onClick={() => handleSAITRedirect()}
                  className="text-neutral-400 font-medium transition ease-out hover:text-blue-300 hover:duration-300 cursor-pointer w-fit"
                >
                  Southern Alberta Institute of Technology
                </p>
                <p
                  className="text-neutral-400 font-medium w-fit"
                >
                  Calgary, Alberta
                </p>
              </div>
            </div>
            <p className="text-neutral-500 text-sm md:ml-auto mt-1 md:mt-0">
              May 2025 - December 2026 
            </p>
          </li>
          <li className="space-y-1">
            <div>
              <div>
                <h3 className="font-medium text-neutral-200">
                  BSc Computer Application (Triple Main)
                </h3>
                <p
                  onClick={() => handleMGURedirect()}
                  className="text-neutral-400 font-medium transition ease-out hover:text-blue-300 hover:duration-300 cursor-pointer w-fit"
                >
                  Mahatma Gandhi University
                </p>
                <p
                  onClick={() => handleSHRedirect()}
                  className="text-neutral-400 font-medium transition ease-out hover:text-blue-300 hover:duration-300 cursor-pointer w-fit"
                >
                  Sacred Heart College, Thevara
                </p>
              </div>
            </div>
            <p className="text-neutral-500 text-sm md:ml-auto mt-1 md:mt-0">
              June 2019 - March 2022
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Cubing</h2>
        <ul className="space-y-4">
          <li className="space-y-1">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <h3 className="font-medium text-neutral-200">
                Professional Speedcuber and Organizer
              </h3>
              <p className="text-neutral-500 text-sm md:ml-auto mt-1 md:mt-0">
                July 2017 - Present
              </p>
            </div>
            <p className="text-neutral-400">
              For the past 8 years, I&apos;ve been an active participant in
              official Rubik&apos;s Cube competitions and various unofficial
              cubing events across Kerala. To date, I&apos;ve competed in 18
              World Cube Association competitions, along with several unofficial
              events hosted by college tech fests.
            </p>
            <p className="text-neutral-400">
              In addition to competing, I&apos;ve also had the privilege of
              organizing a couple of World Cube Association competitions,
              helping to bring the cubing community together in Kerala.
            </p>
          </li>
          <div className="w-fit" onClick={() => handleWCARedirect()}>
            <AnimatedShinyTextComponent name="World Cube Association Profile" />
          </div>
        </ul>
      </section>

      <footer className="mb-16">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <p className="text-neutral-200">
          Find me on{" "}
          <span
            onClick={() => handleLinkedInRedirect()}
            className="text-neutral-400 font-medium transition ease-out hover:text-blue-300 hover:duration-300 cursor-pointer"
          >
            LinkedIn
          </span>{" "}
          and{" "}
          <span
            onClick={() => handleGithubRedirect()}
            className="text-neutral-400 font-medium transition ease-out hover:text-blue-300 hover:duration-300 cursor-pointer"
          >
            Github
          </span>
        </p>
      </footer>
      <p className="text-neutral-600">Last updated on June 15, 2025</p>
    </div>
  );
}
