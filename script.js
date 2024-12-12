
document.getElementById("extractButton").addEventListener("click", () => {
    const jobDescription = document.getElementById("jobDescription").value; 
    const keywords = extractKeywords(jobDescription); 
    displayKeywords(keywords); 
  });
  
  
  function extractKeywords(jobDescription) {
 
    const stopWords = [
      "i", "me", "my", "we", "our", "you", "your", "he", "she", "it", 
      "they", "this", "that", "and", "but", "or", "so", "the", "is", 
      "in", "on", "to", "for", "of", "a", "an", "with", "as", "by", 
      "at", "from", "about", "into", "through", "during", "before", 
      "after", "above", "below", "up", "down", "out", "over", "under", 
      "again", "further", "then", "once","want",
      "a"," about"," above"," after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been"
      , "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does"
      , "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't"
      , "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", 
      "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't"
      ,"my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours",
       "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such",
       " than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll"
       , "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't"," we", "we'd", "we'll"
       , "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who"
       , "who's", "whom", "why", "why's'", "with"," won't","would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself"
       , "yourselves"

    ];
    
    
    const cleanText = jobDescription
      .toLowerCase() 
      .replace(/[^a-z\s]/g, ""); 
  
    
    const words = cleanText.split(/\s+/);
  
    
    const filteredWords = words.filter(word => !stopWords.includes(word) && word.length > 2);
  
    
    const wordFrequency = {};
    filteredWords.forEach(word => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
  
    
    const sortedKeywords = Object.keys(wordFrequency)
      .sort((a, b) => wordFrequency[b] - wordFrequency[a]);
  
   
    return sortedKeywords.slice(0, 10);
  }
  
 
  function displayKeywords(keywords) {
    const outputElement = document.getElementById("output"); 
    if (keywords.length === 0) {
      outputElement.innerText = "No keywords found. Please try again with a valid description.";
    } else {
      outputElement.innerHTML = `
        <strong>Top Keywords:</strong>
        <ul>
          ${keywords.map(keyword => `<li>${keyword}</li>`).join("")}
        </ul>
      `;
    }
  }
  