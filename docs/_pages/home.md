---
layout: splash
permalink: /
hidden: true
header:
  overlay_color: "#FFFFFF"
  overlay_image: /assets/landing/hero.png
  actions:
    - label: "Schedule a Quick Call"
      url: "#contact"
excerpt: >
  <h1>Indepentent Software Dev</h1>
  <p style="margin-top: 10px">Desktop or Web Applications</p>
feature_row:
  - image_path: /assets/landing/optimize.png
    title: "Skills"
    excerpt: "Desktop, web and industry-specific tech knowledge that I can offer"
    url: "/skills/"
    btn_class: "btn--secondary"
    btn_label: "Services offered"
  - image_path: /assets/landing/Alexander_Jahn.jpg
    title: "I'm Alex"
    excerpt: "I love tackling research heavy projects and deliver solutions in an agile way."
    url: "/cv/"
    btn_class: "btn--primary"
    btn_label: "More about me"
  - image_path: /assets/landing/automate.png
    title: "Portfolio"
    excerpt: "See some cool projects I worked on."
    url: "/portfolio/"
    btn_class: "btn--secondary"
    btn_label: "Portfolio"
---

<header>
  <script defer data-domain="alxndrjhn.github.io" src="https://plausible.io/js/plausible.js"></script>
  <link rel="stylesheet" href="../assets/css/landing.css" />
  <link rel="stylesheet" href="../assets/css/navbar.css" />
  <script>
    window.addEventListener('load', (event) => {
      console.log('page is fully loaded');
      var element = document.querySelector('.site-logo');
      element.classList.add("darkreader");
      element = document.querySelector('.site-logo img');
      element.classList.add("darkreader");
    });
  </script>
</header>
{% include feature_row %}

<div class="container">
  <h2 id="contact">Contact Form</h2>
  <form action="https://formspree.io/f/xnqlggyl" method="POST">
    <label>
      Email:
      <input type="email" name="_replyto" />
    </label>
    <label>
      Phone number:
      <input type="text" name="telehone" />
    </label>
    <label>
      Message:
      <textarea name="message"></textarea>
    </label>

    <button class="btn btn--primary" type="submit">Send (redirects to reCaptcha)</button>

  </form>
</div>
<div class="container">
  <h2 id="contact">Schedule a Meeting</h2>
  <div class="calendly-inline-widget" data-url="https://calendly.com/jahn-alexander/15min" style="width:100%;height:700px;"></div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
</div>
