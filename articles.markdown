---
layout: default
title: articles
---
{% assign sorted = site.articles | sort: 'date' %}
<div class="columns is-centered">
  <h1 class="title">Articles</h1>
</div>
<br>
{% assign previousyear = "" %}
{% for article in sorted reversed %}
{% capture year  %}{{ article.date | date: "%Y" }}{% endcapture %}
{% if year != previousyear %}<h2>{{ year }}</h2><hr>{% endif %}
{% assign previousyear = year %}
<div>
  <a href="{{ article.url }}"><b>{{ article.title }}</b></a><br>
  {{ article.short }}
</div>
<br>
{% endfor %}