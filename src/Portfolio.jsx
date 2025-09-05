export default function Portfolio() {
  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 py-4 px-8 flex justify-between items-center">
        <div className="text-xl font-bold text-teal-600">Luke J.</div>
        <div className="flex gap-6 text-slate-700 font-medium">
          <a href="#about" className="hover:text-teal-600 transition">About</a>
          <a href="#projects" className="hover:text-teal-600 transition">Projects</a>
          <a href="#research" className="hover:text-teal-600 transition">Research</a>
          <a href="#skills" className="hover:text-teal-600 transition">Skills</a>
          <a href="#contact" className="hover:text-teal-600 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Luke J.</h1>
        <h2 className="text-2xl font-medium text-slate-600 mb-6">
          Aspiring Machine Learning Engineer | Research Enthusiast
        </h2>
        <a
          href="#resume"
          className="bg-teal-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-teal-700 transition"
        >
          Download Resume
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-slate-700">
          I am a Computer Science student with interests in machine learning,
          large-scale systems, and applied research. I enjoy building impactful
          projects and exploring optimizations in AI systems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-slate-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-600 mb-10">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Daily Progress Community Platform</h3>
              <p className="text-slate-600">
                A community-driven habit tracking platform with forum-style post
                creation, powered by Next.js, Supabase, and PostgreSQL.
              </p>
            </div>
            <div className="border border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">FlashAttention Optimization Study</h3>
              <p className="text-slate-600">
                Analyzed tiling strategies, KV cache management, and continuous
                batching to improve large-scale LLM inference.
              </p>
            </div>
            <div className="border border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">POP909 Arrangement Transformer</h3>
              <p className="text-slate-600">
                Fine-tuned a piano transformer on the POP909 dataset to generate
                stylistic music arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="max-w-5xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-teal-600 mb-10">Research</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition relative">
            <span className="absolute top-3 right-3 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-md">Research</span>
            <h3 className="text-xl font-semibold mb-2">Fine-tuning Riffusion with MusicCaps Dataset</h3>
            <p className="text-slate-600">
              Explored conditioned music generation by extending continuous
              inference capabilities.
            </p>
          </div>
          <div className="border border-teal-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition relative">
            <span className="absolute top-3 right-3 text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-md">Research</span>
            <h3 className="text-xl font-semibold mb-2">LLM Serving Optimizations</h3>
            <p className="text-slate-600">
              Investigated FlashAttention, Paged Attention, and continuous
              batching for scalable inference efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-slate-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-600 mb-10">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border border-teal-200 rounded-xl">Python</div>
            <div className="p-4 border border-teal-200 rounded-xl">C++</div>
            <div className="p-4 border border-teal-200 rounded-xl">PyTorch</div>
            <div className="p-4 border border-teal-200 rounded-xl">TensorFlow</div>
            <div className="p-4 border border-teal-200 rounded-xl">gRPC</div>
            <div className="p-4 border border-teal-200 rounded-xl">React</div>
            <div className="p-4 border border-teal-200 rounded-xl">PostgreSQL</div>
            <div className="p-4 border border-teal-200 rounded-xl">Docker</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">Get in Touch</h2>
        <p className="text-slate-700 mb-6">
          I’m open to opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex justify-center gap-6 text-teal-600">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:youremail@example.com">Email</a>
        </div>
      </section>
    </div>
  );
}
