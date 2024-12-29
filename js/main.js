// Initialize Lucide icons
lucide.createIcons();

// Render experience cards
const experienceGrid = document.querySelector('.experience-grid');
experiences.forEach(exp => {
  const card = document.createElement('div');
  card.className = 'card';
  
  card.innerHTML = `
    <div class="relative">
      <span class="badge badge-blue" style="position: absolute; top: -12px; right: -12px">
        ${exp.period}
      </span>
      <h3 style="color: var(--color-blue)">${exp.title}</h3>
      <p style="color: var(--color-text-secondary)">${exp.company}</p>
      <ul style="list-style: none; padding: 0; margin: 1rem 0">
        ${exp.achievements.map(achievement => `
          <li style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem">
            <span style="color: var(--color-blue)">•</span>
            <span>${achievement}</span>
          </li>
        `).join('')}
      </ul>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem">
        ${exp.skills.map(skill => `
          <span class="badge badge-purple">${skill}</span>
        `).join('')}
      </div>
    </div>
  `;
  
  experienceGrid.appendChild(card);
});

// Render skills cards
const skillsGrid = document.querySelector('.skills-grid');
skillCategories.forEach(category => {
  const card = document.createElement('div');
  card.className = 'card perspective-card';
  
  card.innerHTML = `
    <h3 class="gradient-text" style="text-align: center; margin-bottom: 1.5rem">
      ${category.title}
    </h3>
    <ul style="list-style: none; padding: 0; margin: 0">
      ${category.skills.map(skill => `
        <li class="skill-item" style="display: flex; align-items: center; margin-bottom: 0.75rem">
          <span class="skill-dot"></span>
          <span>${skill}</span>
        </li>
      `).join('')}
    </ul>
  `;
  
  skillsGrid.appendChild(card);
});