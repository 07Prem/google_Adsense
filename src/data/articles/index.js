import { aiArticles } from './ai';
import { hardwareArticles } from './hardware';
import { guidesArticles } from './guides';
import { programming1Articles } from './programming_1';
import { programming2Articles } from './programming_2';
import { programmingGeneratedArticles } from './generated_programming';
import { frontendGeneratedArticles } from './generated_frontend';
import { systemsGeneratedArticles } from './generated_systems';
import { mobile_aiGeneratedArticles } from './generated_mobile_ai';

// Combine all articles into a single registry array
export const articles = [
  ...aiArticles,
  ...hardwareArticles,
  ...guidesArticles,
  ...programming1Articles,
  ...programming2Articles,
  ...programmingGeneratedArticles,
  ...frontendGeneratedArticles,
  ...systemsGeneratedArticles,
  ...mobile_aiGeneratedArticles
];

// Helper utilities for articles data fetching
export function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug);
}

export function getArticlesByCategory(category) {
  return articles.filter(article => article.category === category);
}

export function getArticlesByTag(tag) {
  return articles.filter(article => 
    article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getFeaturedArticles() {
  // Return first 3 articles as featured
  return articles.slice(0, 3);
}

export function getLatestArticles(limit = 6) {
  // Sort by publishedDate desc
  return [...articles]
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .slice(0, limit);
}

export function getTrendingArticles(limit = 4) {
  // Return a subset as trending (for simplicity, we grab indices 4 to 8)
  return articles.slice(4, 4 + limit);
}

export function getRelatedArticles(slug, category, limit = 3) {
  return articles
    .filter(article => article.slug !== slug && article.category === category)
    .slice(0, limit);
}

export function searchArticlesQuery(query) {
  if (!query) return articles;
  const lowerQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.description.toLowerCase().includes(lowerQuery) ||
    article.category.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
