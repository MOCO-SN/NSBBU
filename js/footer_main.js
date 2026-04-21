


document.getElementById("footer-container").innerHTML = `
<footer id="contact">
  <div class="footer-grid">
    <div class="footer-col">
      <div class="brand footer-brand">
        <i class="fas fa-map-marked-alt" style="margin-right: 10px;"></i> BIHAR BHARMAN
      </div>
      <p class="footer-text">Preserving heritage for future generations.</p>
      <h4>Social Media</h4>
      <div class="socials">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
      </div>
    </div>

    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul class="footer-links">
        <li><a href="html/index.html">Home</a></li>
        <li><a href="html/history.html">About</a></li>
        <li><a href="html/destinations.html">Explore</a></li>
        <li><a href="html/cuisine.html">Cuisine</a></li>
        <li><a href="html/festivals.html">Festivals</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Policies</h4>
      <ul class="footer-links">
        <li><a href="html/privacy.html">Privacy Policy</a></li>
        <li><a href="html/terms.html">Terms of Use</a></li>
        <li><a href="html/contact.html">Contact</a></li>
        <li><a href="html/disclaimer.html">Disclaimer</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h4>Newsletter</h4>
      <p class="footer-text footer-text--spaced">
        Subscribe to get updates on heritage sites and events.
      </p>
      <form class="newsletter-form" action="php/main.php" method="POST">
        <input type="email" name="email" placeholder="Your Email" required>
        <button type="submit"><i class="fas fa-paper-plane"></i></button>
      </form>
    </div>
  </div>

  <div class="text-center footer-bottom">
    &copy; 2025 Bihar Bharman. All Rights Reserved.
  </div>
</footer>
`;
