import { projects, Project } from "../data/project";

export default function ProjectPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p: Project, i: number) => (
          <div key={i} className="p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
            <div className="mt-2 space-x-4">
              <a href={p.github} target="_blank" className="text-blue-500" rel="noopener noreferrer">GitHub</a>
              {p.demo && (
                <a href={p.demo} target="_blank" className="text-green-500" rel="noopener noreferrer">Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
