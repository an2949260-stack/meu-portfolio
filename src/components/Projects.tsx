import { useEffect, useState } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  topics: string[];
}

export function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/an2949260-stack/repos')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Filtra apenas repositórios com descrição ou que tenham a tag portfolio
          const filtered = data.filter((repo) => !repo.fork && repo.description);
          setRepos(filtered);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar projetos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-12 text-center text-gray-400">Carregando projetos...</div>;
  }

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-white">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div 
            key={repo.id} 
            className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{repo.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{repo.description}</p>
            
            {repo.language && (
              <span className="inline-block px-2.5 py-1 text-xs font-medium text-blue-400 bg-blue-950/50 rounded-full mb-4">
                {repo.language}
              </span>
            )}

            <div className="flex gap-4 text-sm mt-auto">
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-300 hover:text-white underline"
              >
                GitHub
              </a>
              {repo.homepage && (
                <a 
                  href={repo.homepage} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
