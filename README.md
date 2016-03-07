# Setup

`npm install`

`npm run compile`

# Unsupported Features

1) Insertion of messages

```
{msg desc="Says hello to the world."}
    Hello world!
{/msg}
```

2) Bidi Functions

```
<div id="title1" style="font-variant:small-caps" {bidiDirAttr($title)}>
    {$title}
</div>
```

3) Passing HTML to other templates

```
{call .template}
  {param content kind="html"}
    <div class="content">Foo</div>
  {/param}
{/call}
```

For more information visit https://github.com/google/incremental-dom/issues/96.
