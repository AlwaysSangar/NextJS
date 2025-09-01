export default function SkillsPage() {
    const skills = [
      "HTML, CSS, JavaScript",
      "TypeScript",
      "React & Next.js",
      "Tailwind CSS",
      "Node.js",
      "Flutter (basic)"
    ];
  
    return (
      <section>
        <h1 className="text-2xl font-bold">My Skills</h1>
        <ul className="mt-4 list-disc list-inside space-y-1">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>
    );
  }
  