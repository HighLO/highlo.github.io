---
permalink: /people/
title: "People"
---

<ul>
{% for person in site.data.people %}
  <li>
    <a href="https://github.com/{{ person.github }}">
      {{ person.name }}
    </a>
  </li>
{% endfor %}
</ul>
