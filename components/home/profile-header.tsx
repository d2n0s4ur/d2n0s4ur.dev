import { Mail, Github, Linkedin, FileUser } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { ContentData } from "@/types/content";

interface ProfileHeaderProps {
  profile: ContentData["profile"];
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="border-zinc-200 dark:border-zinc-800 pb-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
        {/* Profile Image */}
        <div className="shrink-0 self-center lg:self-start">
          <Image
            src="/images/profile.png"
            alt={profile.name}
            width={180}
            height={180}
            className="rounded-[9999px] object-cover border border-zinc-200 dark:border-zinc-700 shadow-sm bg-white"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
              {profile.name}
            </h1>
            <h2 className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-normal">
              {profile.title}
            </h2>
          </div>

          <p className="text-base text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            {profile.summary}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <Link
              href={`mailto:${profile.contact.email}`}
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              <span>{profile.contact.email}</span>
            </Link>

            <Link
              href={`https://github.com/${profile.contact.github}`}
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span>{profile.contact.github}</span>
            </Link>

            <Link
              href={`https://linkedin.com/in/${profile.contact.linkedin}`}
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="/cv.pdf"
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileUser className="h-4 w-4" />
              <span>CV</span>
            </Link>
            <Link
              href="https://orcid.org/0009-0006-5167-4832"
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-4 w-4"
              >
                <path
                  fill="#a6ce39"
                  d="M358.7 252.2L312.8 252.2L312.8 406L360.3 406C427.9 406 443.4 354.7 443.4 329.1C443.4 287.5 416.9 252.2 358.7 252.2zM320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM239.2 432.8L209.4 432.8L209.4 225.3L239.2 225.3L239.2 432.8zM224.3 162.5C235.1 162.5 243.9 171.3 243.9 182.1C243.9 192.9 235.1 201.7 224.3 201.7C213.5 201.7 204.7 192.9 204.7 182.1C204.7 171.3 213.5 162.5 224.3 162.5zM364 433L283 433L283 225.3L363.6 225.3C440.3 225.3 474 280.1 474 329.2C474 382.5 432.3 433.1 364 433.1z"
                />
              </svg>
              <span>ORCID</span>
            </Link>

            {/* 
            <Link
              href={`https://scholar.google.com/citations?user=${profile.contact.google_scholar}`}
              className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GraduationCap className="h-4 w-4" />
              <span>Google Scholar</span>
            </Link> */}
          </div>
        </div>
      </div>
    </header>
  );
}
