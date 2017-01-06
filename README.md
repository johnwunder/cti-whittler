# CtiWhittler

Hand craft your STIX 2.0 threat intelligence using a simplified YAML.

```yaml
campaign:
  name: Shade of Palms

indicator:
  pattern: "[file.hashes.MD5 = 'xxx']"

relationship:
  name: indicates
  source_ref: 1
  target_ref: 0
```

I was learning Angular 2 during this so please ignore all of my terrible coding practices. I clearly have no idea what I'm doing.

## Development
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.
