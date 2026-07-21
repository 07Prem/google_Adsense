import { aiArticles } from '../src/data/articles/ai.js';
import { guidesArticles } from '../src/data/articles/guides.js';
import { hardwareArticles } from '../src/data/articles/hardware.js';
import { programming1Articles } from '../src/data/articles/programming_1.js';
import { programming2Articles } from '../src/data/articles/programming_2.js';

const allCategories = [
  { name: 'ai', list: aiArticles },
  { name: 'guides', list: guidesArticles },
  { name: 'hardware', list: hardwareArticles },
  { name: 'programming_1', list: programming1Articles },
  { name: 'programming_2', list: programming2Articles }
];

allCategories.forEach(cat => {
  console.log(`\nCategory file: ${cat.name}`);
  cat.list.forEach(article => {
    let text = article.title + ' ' + article.description;
    
    // Add text from content
    article.content.forEach(block => {
      if (block.text) text += ' ' + block.text;
      if (block.items) text += ' ' + block.items.join(' ');
      if (block.code) text += ' ' + block.code;
    });
    
    // Add text from FAQs
    if (article.faqs) {
      article.faqs.forEach(faq => {
        text += ' ' + faq.question + ' ' + faq.answer;
      });
    }
    
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    console.log(`- "${article.title}" (slug: ${article.slug}): ${wordCount} words`);
  });
});
