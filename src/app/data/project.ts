export type Project = {
    name: string;
    description: string;
    github: string;
    demo?: string;
  };
  
  export const projects: Project[] = [
    {
      name: "Portfolio Website",
      description: "Website pribadi menggunakan Next.js & Tailwind CSS",
      github: "https://github.com/AlwaysSangar/PortofolioAllwanKece",
    },
    {
      name: "Gojek",
      description: "Tampilan Aplikasi Gojek",
      github: "https://github.com/AlwaysSangar",
    },
    {
      name: "Telkomsel",
      description: "Tampilan Aplikasi Selayaknya Telkomsel",
      github: "https://github.com/AlwaysSangar",
      
    },
  ];
  