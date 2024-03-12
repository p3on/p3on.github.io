---
layout: default
title: cli-cs
---
<div class="columns is-centered">
    <h1 class="title">cli-CS</h1>
</div>
<br>
<p>
<div class="field">
    <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Search for tool or +tag" id="searchTools">
        <span class="icon is-small is-left">
            <i class="fa-solid fa-magnifying-glass"></i>
        </span>
    </p>
</div>
</p>
<br>
<div class="columns is-centered">
    <button class="tag" onclick="resetFilter()">Reset</button>
</div>
<br>
<table class="table is-fullwidth is-hoverable" id="toolTime">
    {% for cli in site.cli-cs %}
    <tr>
        <td style="max-width: 25px;">{% if cli.os == "linux" %}<i class="fab fa-linux"></i>{% elsif cli.os ==
            "windows" %}<i class="fab fa-windows"></i>{% else %}<i class="fab fa-linux"></i>&nbsp;&nbsp;&nbsp;<i
                class="fab fa-windows"></i>{% endif %}</td>
        <td><a href="{{ cli.url }}">{{ cli.title }}</a></td>
        <td>{% for tag in cli.tags %} <button class="tag" onclick="queryHandler('+{{ tag }}');">{{ tag }}</button> {%
            endfor %}</td>
    </tr>
    {% endfor %}
</table>
<script>
    clickSearch();
    (function () {
        var search = document.getElementById('searchTools');

        search.addEventListener('input', function () {
            var query = search.value.toUpperCase().trim();
            queryHandler(query);
        });
    })();
</script>