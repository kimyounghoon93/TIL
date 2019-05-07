# MVC(MTV)

M - Model (models.py)

V - View (Template.html)

C - Controller (views.py)



# MVVM

M - Model (models.py)

V - View (Template.html)

VM - View-Model (Vue)   ===   C - Controller (views.py)



## Django

```python
# 조건
{% if post.is_public %}
	{{ post }}
{% endif %}

# 반복
{% for post in posts %}
	{{ post }}
{% endfor %}
```



## Vue Directive(지시자)

```html
<!-- 조건 -->
<p v-if="post.isPublic">
    {{ post }}
</p>
<ul>
    <li v-for="post in posts">
    	{{ post }}
    </li>
</ul>
```

