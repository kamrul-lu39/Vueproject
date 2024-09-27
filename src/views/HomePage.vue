<template>
  <div id="home">
       <!-- Hero Section -->
       <section id="hero" class="hero-section">
      <div class="hero-content">
        <!-- Upper Tagline -->
        <h2 class="tagline">Arowwai Industries</h2>
        <!-- Main Title -->
        <h1 class="main-title">ARTIFICIAL INTELLIGENCE</h1>
        <!-- Slogan -->
        <p class="slogan">Balancing Innovation and Responsibility</p>
        <!-- Footer Text -->
        <p class="footer-text">www.reallygreatsite.com</p>
      </div>
    </section>

    <!-- About Section -->
    <div id="about">
    <!-- Divider between Hero and About -->
    <div class="section-divider"></div>

    <!-- About Section -->
    <section class="about-section">
      <div class="about-content">
        <!-- Left side: Text Content -->
        <div class="about-text">
          <h2 class="tagline">Arowwai Industries</h2>
          <h1 class="main-title">ABOUT US</h1>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum enim, sodales id nunc sit amet, interdum gravida ex. 
            In sit amet maximus nisl, ut ullamcorper turpis. Sed lobortis eros arcu, iaculis aliquet eros molestie ut. Ut porttitor dolor non molestie dapibus.
          </p>
          <p class="footer-text">www.reallygreatsite.com</p>
        </div>

        <!-- Right side: Circular Image -->
        <div class="about-image">
          <img src="@/assets/s.webp" alt="About Us Image" />
        </div>
      </div>
    </section>
  </div>
   <!-- Vision Section -->
    <!-- Divider between Hero and About -->
    <div class="section-divider"></div>

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
    <!-- Divider between Hero and About -->
    <div class="section-divider"></div>
    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>

    <!-- Footer -->
    <footer>
      <p>© 2024 Kamrul | All Rights Reserved</p>
      <div class="social-links">
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </footer>
  </div>
</template>

<script>
import '@/assets/HomePage.css'; // Correct way to import global CSS
export default {
  name: 'HomePage',
};
</script>
