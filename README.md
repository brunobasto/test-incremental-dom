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

For more information visit https://github.com/google/incremental-dom/issues/96.