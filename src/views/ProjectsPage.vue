<template>
    <div id="vision">
    <section class="vision-section">
      <div class="vision-content">
        <!-- Left side: Image -->
        <div class="vision-image">
          <img src="@/assets/vision.webp" alt="Vision Image" />
        </div>

        <!-- Right side: Text Content -->
        <div class="vision-text">
          <h2 class="tagline">Arowwai Industries</h2>
          <h1 class="main-title">OUR VISION</h1>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum enim, sodales id nunc sit amet, interdum gravida ex.
            In sit amet maximus nisl, ut ullamcorper turpis. Sed lobortis eros arcu, iaculis aliquet eros molestie ut. Ut porttitor dolor non molestie dapibus.
          </p>
          <p class="footer-text">www.reallygreatsite.com</p>
        </div>
      </div>
    </section>
  </div>
  <!-- Divider between Hero and About -->
  <div class="section-divider"></div>
  <div id="mission">
    <section class="mission-section">
      <div class="mission-content">
        <!-- Left side: Text Content -->
        <div class="mission-text">
          <h2 class="tagline">Arowwai Industries</h2>
          <h1 class="main-title">OUR MISSION</h1>
          <p class="description">
            • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum enim, sodales id nunc sit amet, interdum gravida ex.
            In sit amet maximus nisl, ut ullamcorper turpis.
          </p>
          <p class="description">
            • Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum enim, sodales id nunc sit amet, interdum gravida ex.
            In sit amet maximus nisl, ut ullamcorper turpis.
          </p>
          <p class="footer-text">www.reallygreatsite.com</p>
        </div>

        <!-- Right side: Image -->
        <div class="mission-image">
          <img src="@/assets/mision.webp" alt="Mission Image" />
        </div>
      </div>
    </section>
  </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectsPage',
    data() {
      return {
        projects: [
          { id: 1, title: 'Project 1', description: 'This is my first project.', link: 'https://example.com' },
          { id: 2, title: 'Project 2', description: 'This is my second project.', link: 'https://example.com' },
        ],
      };
    },
  };
  </script>

