---
title: "Publications"
bg: bgwhite
color: black
---

<h1>Latest publications</h1>

{% assign publications = site.publications | sort: 'date' | reverse %}

{% for pub in publications %}

<b>{{ pub.title }}</b>
<br>
<span class="label {{ pub.label }}">{{ pub.label }}</span> {{ pub.where }}
{% if pub.link %}<br><a href="{{ pub.link }}" target="_blank">{{ pub.link }}</a>{% endif %}<br>
<i>{{ pub.date | date: '%B %Y' }}</i>

{% endfor %}

<center>
<br>
<b><i><a href="publications-archive.html">[see all publications]</a></i></b>
</center>
