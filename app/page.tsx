import Link from "next/link"
import { ArrowDown, ArrowRight, BookOpen, Code, FileText, Github, GraduationCap, Mail, Phone, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">GUNA SEKHAR REDDY RAYAVARAM</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                Education
              </Link>
              <Link href="#resume" className="transition-colors hover:text-foreground/80">
                Resume
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button asChild variant="outline" className="ml-auto hidden md:flex">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <Link href="#projects" className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              Software Developer&Prompt Engineer
            </Link>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">GUNA SEKHAR REDDY RAYAVARAM</h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Fresh Computer Science graduate passionate about software development and eager to contribute to
              innovative projects.
            </p>
            <div className="space-x-4">
              <Button asChild>
                <Link href="https://drive.google.com/file/d/1Ml_ew6iPOplk2h8BdecS_Zr6zwZ6sdDR/view?usp=sharing">
                  View Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>
        <section id="about" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">About Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              I'm a recent Computer Science graduate with a strong foundation in programming fundamentals and a passion
              for creating efficient, user-friendly software solutions. I'm eager to apply my academic knowledge to
              real-world challenges and grow as a professional developer.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <User className="h-12 w-12 mb-4 text-primary" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Background</h3>
                  <p className="text-sm text-muted-foreground">
                    Computer Science graduate with a focus on software development and problem-solving.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Code className="h-12 w-12 mb-4 text-primary" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Technical Skills</h3>
                  <p className="text-sm text-muted-foreground">
                    Proficient in Java, Python, JavaScript, and web development technologies.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <BookOpen className="h-12 w-12 mb-4 text-primary" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Learning</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuously expanding my knowledge through online courses, tutorials, and personal projects.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="education" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Education</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              My academic journey and qualifications.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-1 md:max-w-[64rem] lg:grid-cols-3">
            <EducationCard
              title="Bachelor's Degree"
              institution="SRI VENKATESWARA COLLEGE OF ENGINEERING & TECHNOLOGY,CHITTOOR"
              year="2021-2025"
              description="Bachelor of Technology in CSE(AI&ML) - 7.25 CGPA"
              certificateLink="#"
            />
            <EducationCard
              title="Intermediate Education"
              institution="B.S.R JUNIOR COLLEGE,TIRUPATI"
              year="2019-2021"
              description="Mathematics, Physics, and Chemistry - 897 marks"
              certificateLink="#"
            />
            <EducationCard
              title="10th Standard"
              institution="Z.P.H.S,V.R.Agraharm"
              year="2019"
              description="CBSE/State Board - 9.2 GPA"
              certificateLink="#"
            />
          </div>
          <div className="mx-auto mt-12 max-w-[58rem]">
            <h3 className="text-2xl font-bold mb-6 text-center">Certificates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CertificateCard
                title="10th Standard Certificate"
                issuer="School Name"
                date="June 2017"
                image="/placeholder.svg?height=300&width=400"
              />
              <CertificateCard
                title="Intermediate Certificate"
                issuer="College Name"
                date="May 2019"
                image="/placeholder.svg?height=300&width=400"
              />
              <CertificateCard
                title="Bachelor's Degree"
                issuer="University Name"
                date="June 2023"
                image="/placeholder.svg?height=300&width=400"
              />
              <CertificateCard
                title="Programming Certification"
                issuer="Online Platform"
                date="December 2022"
                image="/placeholder.svg?height=300&width=400"
              />
            </div>
          </div>
        </section>
        <section id="resume" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
  <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Resume</h2>
    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
      Download my resume to learn more about my education, skills, and projects.
    </p>

    {/* Button linking to Drive download */}
    <a
      href="https://drive.google.com/uc?export=download&id=1Ml_ew6iPOplk2h8BdecS_Zr6zwZ6sdDR"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="mt-4" size="lg">
        <FileText className="mr-2 h-5 w-5" /> Download Resume <ArrowDown className="ml-2 h-4 w-4" />
      </Button>
    </a>
  </div>

  <div className="mx-auto mt-12 max-w-[64rem]">
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">Resume Preview</h3>

        {/* Embed PDF directly from Google Drive */}
        <div className="aspect-[3/4] bg-white border rounded-md overflow-hidden">
          <iframe
            src="https://drive.google.com/file/d/1Ml_ew6iPOplk2h8BdecS_Zr6zwZ6sdDR/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className="w-full h-full"
            title="Resume Preview"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  </div>
</section>

        <section id="projects" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Academic and personal projects I've worked on during my studies.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
            <ProjectCard
              title="Student Management System"
              description="A Java-based application for managing student records, courses, and grades."
              image="/placeholder.svg?height=300&width=400"
              link="#"
            />
            <ProjectCard
              title="Personal Portfolio Website"
              description="A responsive portfolio website built with React and Tailwind CSS."
              image="/placeholder.svg?height=300&width=400"
              link="#"
            />
            <ProjectCard
              title="Weather App"
              description="A web application that displays weather information using a public API."
              image="/placeholder.svg?height=300&width=400"
              link="#"
            />
          </div>
        </section>
        <section id="skills" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Skills</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Technical skills and technologies I've learned during my education.
            </p>
          </div>
          <div className="mx-auto md:max-w-[64rem]">
            <Tabs defaultValue="programming" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="tools">Tools & Others</TabsTrigger>
              </TabsList>
              <TabsContent value="programming" className="mt-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  <SkillCard name="Java" level="Intermediate" />
                  <SkillCard name="Python" level="Intermediate" />
                  <SkillCard name="C/C++" level="Basic" />
                  <SkillCard name="JavaScript" level="Intermediate" />
                  <SkillCard name="SQL" level="Basic" />
                  <SkillCard name="Data Structures" level="Intermediate" />
                  <SkillCard name="Algorithms" level="Intermediate" />
                  <SkillCard name="OOP" level="Intermediate" />
                </div>
              </TabsContent>
              <TabsContent value="web" className="mt-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  <SkillCard name="HTML" level="Intermediate" />
                  <SkillCard name="CSS" level="Intermediate" />
                  <SkillCard name="React" level="Basic" />
                  <SkillCard name="Node.js" level="Basic" />
                  <SkillCard name="Bootstrap" level="Basic" />
                  <SkillCard name="Tailwind CSS" level="Basic" />
                  <SkillCard name="RESTful APIs" level="Basic" />
                  <SkillCard name="Responsive Design" level="Basic" />
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-6">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  <SkillCard name="Git" level="Basic" />
                  <SkillCard name="GitHub" level="Basic" />
                  <SkillCard name="VS Code" level="Intermediate" />
                  <SkillCard name="Eclipse" level="Intermediate" />
                  <SkillCard name="MySQL" level="Basic" />
                  <SkillCard name="Microsoft Office" level="Intermediate" />
                  <SkillCard name="Problem Solving" level="Intermediate" />
                  <SkillCard name="Team Collaboration" level="Intermediate" />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section id="contact" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Contact Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Interested in discussing opportunities? Feel free to reach out to me.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-primary" />
                <span>gunasekharreddyr71@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-6 w-6 text-primary" />
                <a href="https://github.com/7cyberdevil" className="hover:underline">
                  github.com/7cyberdevil
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-primary" />
                <span>+91 8555025587</span>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground">
                  I'm currently looking for entry-level software development opportunities where I can apply my skills
                  and continue to learn and grow. I'm eager to contribute to innovative projects and collaborate with
                  experienced professionals.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Guna Sekhar Reddy Rayavaram. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  image,
  link,
}: {
  title: string
  description: string
  image: string
  link: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-all hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button asChild variant="outline" size="sm">
          <Link href={link}>
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function EducationCard({
  title,
  institution,
  year,
  description,
  certificateLink,
}: {
  title: string
  institution: string
  year: string
  description: string
  certificateLink: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <GraduationCap className="h-6 w-6 mr-2 text-primary" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="font-medium">{institution}</p>
        <p className="text-sm text-muted-foreground mb-2">{year}</p>
        <p className="text-sm mb-4">{description}</p>
        <Button asChild variant="outline" size="sm">
          <Link href={certificateLink}>
            View Certificate <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function CertificateCard({
  title,
  issuer,
  date,
  image,
}: {
  title: string
  issuer: string
  date: string
  image: string
}) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full transition-all hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {issuer} • {date}
        </p>
      </CardContent>
    </Card>
  )
}

function SkillCard({ name, level }: { name: string; level: string }) {
  return (
    <Card className="flex flex-col items-center p-4">
      <h3 className="font-medium">{name}</h3>
      <p className="text-xs text-muted-foreground">{level}</p>
    </Card>
  )
}

function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Name
          </label>
          <input
            id="name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your Name"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Subject
        </label>
        <input
          id="subject"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Job Opportunity"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Message
        </label>
        <textarea
          id="message"
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your message here..."
        />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
