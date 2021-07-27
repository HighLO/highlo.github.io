---
permalink: /people/
title: "People"
---

<ul>
{% for person in site.data.people %}
  <li>
    }person.name}
    </a>
  </li>
{% endfor %}
</ul>
