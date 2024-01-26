### ONLY FOR ANDROID BY NOW

## USAGE

### Add the package to your npm dependencies

```
npx expo install expo-cdnbye
```

### Config the plugins token

Add CDNBYE_TOEKN to your `app.json`:

```json
{
  "expo": {
    "plugins": [
      [
        "./node_modules/expo-cdnbye/app.plugin.js",
        {
          "token": "CDNBYE_TOKEN"
        }
      ]
    ]
  }
}
```
