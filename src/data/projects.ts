interface Project extends Record<"name" | "description", string> {
  link?: string;
}

export const projects: Project[] = [
  {
    name: "config-resume",
    description: "A resume page rendering tool with modern architecture",
    link: "https://github.com/stevending1st/config-resume"
  },
  {
    name: "poster-friendly",
    description: "A complete solution for GitHub (Gitee) Issue and Discussion templates.",
    link: "https://github.com/stevending1st/poster-friendly"
  }
]