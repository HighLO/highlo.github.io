---
title: "none"
classes: wide
bg: bgwhite
color: black
---

# Affiliated researchers

{% assign people = site.profiles | sort: 'priority' | where: "categories","affiliated" %}
{% assign last_organization = 0 %}
{% for person in people %}
{% if person.organization != last_organization %}
{% if last_organization != 0 %} <br> {% endif %}
<figure class="affiliated-org">
<h4> {{ person.organization }} </h4>
</figure>
{% endif %}
{% assign last_organization = person.organization %}
<figure class="affiliated">
  <div class="affiliated-img-wrapper">
    <img src="{{ person.picture }}">
  </div>
  <figcaption>
    <span class="collaborator-name">{{ person.name }}</span><br>{{ person.title }}
    <br>
{% if person.linkedin %}
    <a href="{{ person.linkedin }}"><i class="fa fa-linkedin-square"></i> LinkedIn</a>
{% endif %}
{% if person.cv %}
    <a href="{{ person.cv }}"><i class="fa fa-file-pdf"></i> CV</a>
{% endif %}
{% if person.researchgate %}
    <a href="{{ person.cv }}"><i class="fa-brands fa-researchgate"></i> ResearchGate</a>
{% endif %}
  </figcaption>
</figure>
{% endfor %}
