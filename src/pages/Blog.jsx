import NetworkBackground from '../components/NetworkBackground'
import ScrollReveal from '../components/ScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Blog = () => {
  const { language } = useLanguage()
  const t = translations[language]
  
  const articles = t.blog.articles.map((article, index) => ({
    ...article,
    image: ['🌐', '🔐', '☁️', '🤖', '💼', '📚'][index]
  }))

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 text-white overflow-hidden">
        <NetworkBackground className="opacity-20" />
        <div className="section-container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.blog.title}
          </h1>
          <p className="text-2xl text-teal-100 max-w-3xl mx-auto">
            {t.blog.subtitle}
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ScrollReveal key={index} direction="left" delay={(index % 3) * 150}>
              <article className="bg-gray-900/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2 border border-blue-500/20 hover:border-blue-500/50">
              <div className="bg-gradient-to-br from-tir-blue to-tir-green p-12 flex items-center justify-center">
                <div className="text-8xl">{article.image}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-tir-green bg-green-50 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime} {t.blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tir-blue transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{article.date}</span>
                  <span className="text-tir-blue font-semibold group-hover:translate-x-2 transform transition-transform inline-flex items-center">
                    {t.blog.readMore}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gradient-to-br from-gray-900 via-tir-dark to-gray-900 py-20 text-white">
        <NetworkBackground className="opacity-20" />
        <div className="section-container text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4">
            {t.blog.newsletter.title}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t.blog.newsletter.description}
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder={t.blog.newsletter.emailPlaceholder}
              className="flex-1 px-6 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-tir-blue hover:bg-blue-700 font-bold px-8 py-3 rounded-lg transition-colors">
              {t.blog.newsletter.subscribeButton}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
