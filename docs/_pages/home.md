---
layout: splash
permalink: /
hidden: true
header:
  overlay_color: "#FFFFFF"
  overlay_image: /assets/landing/hero.jpeg
  actions:
    - label: "Get in touch"
      url: "#contact"
excerpt: >
  <h1>I Automate Complex Tasks</h1>
  <p style="margin-top: 10px">Using Industrial Robots, Sensors and/or Custom Software</p>
feature_row:
  - image_path: /assets/landing/assess.png
    alt: "Assessment"
    title: "Assess"
    excerpt: "Start by identifying processes that are unstable or inefficient"
    # url: "/optimize/"
    # btn_class: "btn--primary"
    # btn_label: "Learn more"
  - image_path: /assets/landing/optimize.png
    alt: "ultrasound ndt"
    title: "Optimize"
    excerpt: "Develop a concept that fits your business needs with a strong business case"
    # url: "/ndt/"
    # btn_class: "btn--primary"
    # btn_label: "Learn more"
  - image_path: /assets/landing/automate.png
    alt: "Automate"
    title: "Automate"
    excerpt: "Make your process efficient or scale it up"
    # url: "/automate/"
    # btn_class: "btn--primary"
    # btn_label: "Learn more"
  - image_path: /assets/landing/Alexander_Jahn.jpg
    alt: "Alexander Jahn"
    title: "I'm Alex"
    url: "/cv/"
    btn_class: "btn--primary"
    btn_label: "More about me"
---

<header>
  <link rel="stylesheet" href="../assets/css/landing.css" />
</header>
{% include feature_row %}

<div class="container">
  <h2 id="contact">Contact Form</h2>
  <form action="https://formspree.io/f/xnqlggyl" method="POST">
    <label>
      Your email:
      <input type="email" name="_replyto" />
    </label>
    <label>
      Your phone number:
      <input type="text" name="telehone" />
    </label>
    <label>
      Your message:
      <textarea name="message"></textarea>
    </label>

    <button class="btn btn--primary" type="submit">Send</button>

  </form>
</div>
<div class="container">
  <h2 id="contact">Schedule a Meeting</h2>
  <div class="calendly-inline-widget" data-url="https://calendly.com/jahn-alexander/15min" style="width:100%;height:700px;"></div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
</div>
