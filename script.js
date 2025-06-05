// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});

// Contact button interaction
document.getElementById("contactBtn").addEventListener("click", () => {
  const button = document.getElementById("contactBtn");
  button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  button.style.backgroundColor = '#2ecc71';
  
  setTimeout(() => {
    button.innerHTML = '<i class="fas fa-paper-plane"></i> Say Hello';
    button.style.backgroundColor = '';
    window.location.href = "mailto:mrudhvikadamaraju@gmail.com";
  }, 2000);
});

// Scroll progress indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (scrollIndicator) {
    scrollIndicator.style.width = scrolled + '%';
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Add specific animations for skill categories
      if (entry.target.classList.contains('skill-category')) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and skill categories
document.querySelectorAll('section, .skill-category').forEach(element => {
  element.classList.add('fade-in');
  observer.observe(element);
});

// Parallax effect for header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrolled = window.pageYOffset;
  header.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Animate scroll down arrow
const scrollDownArrow = document.querySelector('.scroll-down');
if (scrollDownArrow) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollDownArrow.style.opacity = '0';
    } else {
      scrollDownArrow.style.opacity = '0.8';
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add active class to current section in navigation
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  const highlightNavigation = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNavigation);
  highlightNavigation(); // Run once on load
  
  // Add hover animations for skill categories
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach(skill => {
    skill.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    skill.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Animate publication items on hover
  const publicationItems = document.querySelectorAll('.publication-item');
  publicationItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '';
    });
  });
});

// Updated section keywords with new categories
const SECTION_KEYWORDS = {
  about: {
    keywords: ['about', 'background', 'overview', 'who', 'introduction', 'summary'],
    content: {
      title: "About Me",
      points: [
        "🎯 EdTech professional with 7+ years of experience",
        "🌟 Specializing in technology adoption and outreach strategies",
        "💼 Impacted 100+ colleges through innovative solutions",
        "📈 Achieved 60% efficiency improvement in processes",
        "🎓 Focus on inclusive education systems"
      ]
    }
  },
  interests: {
    keywords: ['interests', 'hobbies', 'hobby', 'like', 'enjoy', 'passion', 'free time', 'drawing', 'music', 'guitar', 'dance', 'social'],
    content: {
      title: "Interests & Hobbies",
      points: [
        "🎨 Drawing - Visual arts and creative expression",
        "🎵 Music - Enjoying various genres",
        "🎸 Guitar - Learning and practicing",
        "💃 Dancing - Movement and rhythm expression",
        "👥 Social Events - Organizing and hosting community gatherings"
      ]
    }
  },
  languages: {
    keywords: ['language', 'languages', 'speak', 'speaking', 'proficiency', 'english', 'telugu', 'hindi'],
    content: {
      title: "Language Proficiency",
      points: [
        "🇺🇸 English",
        "  • Professional proficiency",
        "  • Strong reading, writing, and speaking skills",
        "🇮🇳 Telugu",
        "  • Native proficiency",
        "  • Excellent reading, writing, and speaking",
        "🇮🇳 Hindi",
        "  • Professional speaking and reading",
        "  • Basic writing skills"
      ]
    }
  },
  experience: {
    keywords: ['experience', 'work', 'job', 'career', 'achievement', 'professional'],
    content: {
      title: "Professional Experience",
      points: [
        "🏢 Current Role: Mid-Level Project Engineer at IIIT Hyderabad (2017 – Present)",
        "Key Achievements:",
        "• Led tech adoption initiatives across 100+ colleges",
        "• Improved issue resolution efficiency by 60%",
        "• Enhanced data accuracy by 78%",
        "• Increased visual branding impact by 80%",
        "• Boosted engagement rates by 50% through new strategies"
      ]
    }
  },
  skills: {
    keywords: ['skills', 'abilities', 'tools', 'technologies', 'expertise', 'capable', 'can'],
    content: {
      title: "Skills & Expertise",
      points: [
        "👥 Learner Engagement",
        "• Workshop Facilitation & Training",
        "• Student Mentoring & Community Building",
        "• Educational Program Development",
        
        "🎨 Content & Design",
        "• Tools: Canva, Figma, Adobe XD",
        "• Visual Design & Branding",
        "• Educational Material Creation",
        
        "📊 Analytics & Data",
        "• Google Analytics 4",
        "• Elasticsearch Implementation",
        "• Data Visualization & Reporting",
        
        "⚙️ Technical Leadership",
        "• Project Management",
        "• Team Coordination",
        "• Process Optimization",
        "• AI Tools Integration"
      ]
    }
  },
  education: {
    keywords: ['education', 'degree', 'university', 'college', 'academic', 'study', 'qualification'],
    content: {
      title: "Education",
      points: [
        "🎓 Master of Science in Information Technology",
        "• Institution: IIIT Hyderabad",
        "• Duration: 2015–2017",
        "• CGPA: 8.06",
        "",
        "🎓 B.Tech in Computer Engineering",
        "• Institution: Joginpally B R Engineering College",
        "• Duration: 2011–2015",
        "• Grade: 70.90%"
      ]
    }
  },
  contact: {
    keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'social'],
    content: {
      title: "Contact Information",
      points: [
        "📧 Email: mrudhvikadamaraju@gmail.com",
        "📱 Phone: +91 7207082940",
        "💼 LinkedIn: /in/mrudhvika-damaraju",
        "📄 Resume: Available for download on website"
      ]
    }
  }
};

// Enhanced suggestion system
const CHAT_SUGGESTIONS = {
  default: [
    { text: "Tell me about your skills", icon: "💡" },
    { text: "What's your work experience?", icon: "💼" },
    { text: "What languages do you know?", icon: "🗣️" },
    { text: "What are your interests?", icon: "💝" }
  ],
  skills: [
    { text: "Tell me about your technical skills", icon: "⚙️" },
    { text: "What design tools do you use?", icon: "🎨" },
    { text: "Analytics experience?", icon: "📊" }
  ],
  experience: [
    { text: "What are your key achievements?", icon: "🏆" },
    { text: "Tell me about your current role", icon: "💼" },
    { text: "Educational background?", icon: "🎓" }
  ],
  interests: [
    { text: "What kind of music do you like?", icon: "🎵" },
    { text: "Tell me about your artistic interests", icon: "🎨" },
    { text: "Social activities?", icon: "👥" }
  ]
};

// Function to show relevant follow-up suggestions
function showFollowUpSuggestions(category) {
  const suggestions = CHAT_SUGGESTIONS[category] || CHAT_SUGGESTIONS.default;
  const suggestionsHTML = suggestions.map(suggestion => 
    `<button onclick="handleSuggestion('${suggestion.text}')">${suggestion.icon} ${suggestion.text}</button>`
  ).join('');
  
  const suggestionsDiv = document.querySelector('.suggestion-chips');
  suggestionsDiv.innerHTML = suggestionsHTML;
}

// Updated suggestion handler
function handleSuggestion(query) {
  const input = document.getElementById('chat-input');
  input.value = query;
  appendMessage(query, true);
  input.value = ''; // Clear input after sending
  
  setTimeout(() => {
    const botResponse = generateResponse(query);
    appendMessage(botResponse);
    
    // Show follow-up suggestions based on the query
    const category = determineCategory(query.toLowerCase());
    showFollowUpSuggestions(category);
  }, 500);
}

// Helper function to determine query category
function determineCategory(query) {
  for (const [category, data] of Object.entries(SECTION_KEYWORDS)) {
    if (data.keywords.some(keyword => query.includes(keyword))) {
      return category;
    }
  }
  return 'default';
}

// Updated user input handler
function handleUserInput(event) {
  if (event.key === 'Enter') {
    const input = document.getElementById('chat-input');
    const userMessage = input.value.trim();
    
    if (userMessage) {
      appendMessage(userMessage, true);
      input.value = ''; // Clear input after sending
      
      setTimeout(() => {
        const botResponse = generateResponse(userMessage);
        appendMessage(botResponse);
        
        // Show relevant follow-up suggestions
        const category = determineCategory(userMessage.toLowerCase());
        showFollowUpSuggestions(category);
      }, 500);
    }
  }
}

// Initialize chat widget with enhanced suggestions
document.addEventListener('DOMContentLoaded', () => {
  const chatWidgetHTML = `
    <div id="chat-widget" class="chat-widget">
      <div class="chat-header">
        <span>Chat with Mrudhvika</span>
        <button id="chat-toggle" onclick="toggleChat()">💬</button>
      </div>
      <div id="chat-messages" class="chat-messages"></div>
      <div class="suggestion-chips">
        <button onclick="handleSuggestion('Tell me about your skills')">💡 Skills</button>
        <button onclick="handleSuggestion('What is your work experience?')">💼 Experience</button>
        <button onclick="handleSuggestion('What languages do you know?')">🗣️ Languages</button>
        <button onclick="handleSuggestion('What are your interests?')">💝 Interests</button>
        <button onclick="handleSuggestion('Tell me about your education')">🎓 Education</button>
      </div>
      <input type="text" id="chat-input" class="chat-input" 
             placeholder="Ask me anything..." 
             onkeypress="handleUserInput(event)">
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', chatWidgetHTML);
  
  setTimeout(() => {
    appendMessage("👋 Hi! I'm Mrudhvika's chatbot. I can help you learn about my:");
    appendMessage("• 💼 Professional Experience\n• 💡 Skills & Expertise\n• 🎓 Education\n• 🗣️ Languages\n• 💝 Interests & Hobbies\n\nClick a suggestion or ask me anything!");
  }, 1000);
});

// Chatbot response generator
function generateResponse(query) {
  const relevantContent = findRelevantContent(query);
  
  if (relevantContent.length === 0) {
    return "I apologize, but I couldn't find that information in the website content. I can help you with information about my experience, skills, education, or contact details. What would you like to know?";
  }

  let response = "Based on the website content:\n\n";
  relevantContent.forEach(content => {
    response += `${content.section}: ${content.content}\n\n`;
  });

  return response;
}

// Chat UI functionality
let chatOpen = false;

function toggleChat() {
  const chatWidget = document.getElementById('chat-widget');
  const suggestions = document.querySelector('.suggestion-chips');
  chatOpen = !chatOpen;
  chatWidget.style.height = chatOpen ? '400px' : '60px';
  document.getElementById('chat-toggle').innerHTML = chatOpen ? '✕' : '💬';
  if (suggestions) {
    suggestions.style.display = chatOpen ? 'flex' : 'none';
  }
}

function appendMessage(message, isUser = false) {
  const chatMessages = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${isUser ? 'user-message' : 'bot-message'}`;
  messageDiv.textContent = message;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Improved keyword mapping for better search accuracy
function findRelevantContent(query) {
  query = query.toLowerCase().trim();
  let matches = [];
  
  // Check each section for keyword matches
  for (const [section, data] of Object.entries(SECTION_KEYWORDS)) {
    if (data.keywords.some(keyword => query.includes(keyword))) {
      matches.push({
        section: data.content.title,
        content: data.content.points
      });
    }
  }
  
  // If no direct matches, try fuzzy matching
  if (matches.length === 0) {
    for (const [section, data] of Object.entries(SECTION_KEYWORDS)) {
      const words = query.split(' ');
      if (words.some(word => 
        word.length > 3 && // Only check words longer than 3 characters
        data.keywords.some(keyword => keyword.includes(word))
      )) {
        matches.push({
          section: data.content.title,
          content: data.content.points
        });
      }
    }
  }
  
  return matches;
}
