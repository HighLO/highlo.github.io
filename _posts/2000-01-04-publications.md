---
title: "Publications"
bg: bgwhite
color: black
---

# Publications

{% assign publications = site.publications | sort: 'date' | reverse %}

{% for pub in publications %}

<b>{{ pub.title }}</b>
<br>
<span class="label {{ pub.label }}">{{ pub.label }}</span> {{ pub.where }}
{% if pub.link contains '://' %}<br><a href="{{ pub.link }}" target="_blank">{{ pub.link }}</a>{% endif %}<br>
<i>{{ pub.date | date: '%B %Y' }}</i>

{% endfor %}
