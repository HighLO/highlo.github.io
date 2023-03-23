---
title: "Publications"
bg: bgwhite
color: black
---

<h1>Latest publications</h1>

<div class="latestpub-container">

{% assign publications = site.publications | sort: 'date' | reverse %}

{% for pub in publications limit:4 %}

  <div id="latestpub">
    <div class="date"><span class="label {{ pub.label }}">{{ pub.label }}</span> {{ pub.date | date: '%b %Y'}}</div>
    <div class="title">{{ pub.title }}</div>
    <br>
     {{ pub.where }}
    {% if pub.link %}<br><a href="{{ pub.link }}" target="_blank">{{ pub.link }}</a>{% endif %}
  </div>

{% endfor %}

</div>

<center>
<br>
<b><i><a href="publications-archive.html">[see all publications]</a></i></b>
</center>
