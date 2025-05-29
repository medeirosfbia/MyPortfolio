import React, { useEffect, useState, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Projects() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [rateLimitError, setRateLimitError] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Todos');
    const [languages, setLanguages] = useState([]);
    const rateLimitShown = useRef(false);

    // Limita para apenas 1 toast visível por vez
    const showToast = (msg, opts) => {
        toast.dismiss();
        toast.error(msg, opts);
    };

    useEffect(() => {
        async function fetchRepos() {
            try {
                const res = await fetch('https://api.github.com/users/medeirosfbia/repos');
                if (res.status === 403) {
                    if (!rateLimitShown.current) {
                        const reset = res.headers.get('x-ratelimit-reset');
                        let resetMsg = `Limite de requisições da API do GitHub excedido.` +
                            (reset
                                ? ` Tente novamente após ${new Date(parseInt(reset, 10) * 1000).toLocaleTimeString('pt-BR')}.`
                                : '');
                        showToast(resetMsg, {
                            position: "bottom-right",
                            autoClose: 8000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            style: { fontSize: '1rem', background: '#fff', color: '#333', border: 'none', boxShadow: 'none' },
                            icon: "⏳"
                        });
                        rateLimitShown.current = true;
                    }
                    setRateLimitError(true);
                    setRepos([]);
                    setLoading(false);
                    return;
                }
                const data = await res.json();
                if (!Array.isArray(data)) {
                    setRepos([]);
                    setLoading(false);
                    return;
                }
                // Ordena por data de modificação (pushed_at) decrescente
                const sorted = data.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
                setRepos(sorted);

                // Extrai linguagens únicas
                const langs = Array.from(
                    new Set(sorted.map(repo => repo.language).filter(Boolean))
                );
                setLanguages(langs);
            } catch {
                showToast('Erro ao buscar repositórios do GitHub.', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    style: { fontSize: '1rem', background: '#fff', color: '#333', border: 'none', boxShadow: 'none' },
                    icon: "⏳"
                });
                setRepos([]);
            }
            setLoading(false);
        }
        fetchRepos();
    }, []);

    // Filtra os repositórios pela linguagem selecionada
    const filteredRepos = selectedLanguage === 'Todos'
        ? repos
        : repos.filter(repo => repo.language === selectedLanguage);

    return (
        <div>
            <h2 className="mb-4">Meus Projetos no GitHub</h2>
            {/* Filtro de linguagem */}
            {!rateLimitError && !loading && (
                <div className="mb-3" style={{ maxWidth: 300 }}>
                    <label htmlFor="languageFilter" className="form-label">Filtrar por linguagem:</label>
                    <select
                        id="languageFilter"
                        className="form-select"
                        value={selectedLanguage}
                        onChange={e => setSelectedLanguage(e.target.value)}
                    >
                        <option value="Todos">Todos</option>
                        {languages.map(lang => (
                            <option key={lang} value={lang}>{lang}</option>
                        ))}
                    </select>
                </div>
            )}
            {rateLimitError ? (
                <div className="alert alert-warning mt-4" style={{ maxWidth: 500 }}>
                    <div>
                        <strong>Limite de requisições da API do GitHub excedido.</strong>
                        <br />
                        Você pode acessar diretamente seus repositórios pelo botão abaixo:
                    </div>
                    <a
                        href="https://github.com/medeirosfbia?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary mt-3"
                    >
                        Ir para o GitHub
                    </a>
                </div>
            ) : loading ? (
                <p>Carregando projetos...</p>
            ) : (
                <div className="row">
                    {filteredRepos.map(repo => (
                        <div className="col-md-6 col-lg-4 mb-4" key={repo.id}>
                            <div className="card card-custom h-100">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#f875aa' }}>
                                            <FaGithub className="me-2" />{repo.name}
                                        </a>
                                    </h5>
                                    <div className="card-text" style={{ overflow: 'auto', maxHeight: 200 }}>
                                        {repo.description
                                            ? repo.description
                                            : 'Sem descrição.'}
                                    </div>
                                </div>
                                <div className="card-footer bg-transparent border-0">
                                    <span className="badge bg-secondary me-2">{repo.language || 'N/A'}</span>
                                    <span className="badge bg-success">★ {repo.stargazers_count}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Projects;
