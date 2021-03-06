# CtiWhittler

Hand craft your STIX 2.0 threat intelligence using a simplified YAML.

```yaml
campaign:
  name: Shade of Palms

indicator:
  pattern: "[file.hashes.MD5 = 'xxx']"

relationship:
  relationship_type: indicates
  source_ref: 1
  target_ref: 0
```

## Usage

Write your objects as above: each object should be valid YAML and separated from other objects by a blank line. The icons in the visualization get labeled by the `name` property.

Relationships can be defined in two ways: first, an integer with the 0-based index of the target. Second, a string with the name of the target (obviously requires names to be unique, otherwise it'll just target the first one). Relationships include both the `relationship` object (`source_ref`, `target_ref`) as well as any properties ending in `_ref`.

## Firebase Configuration

The application supports an optional storage mechanism via Firebase. To enable it, simply set the appropriate configuration parameters in your `environment.ts` file (see [here](https://github.com/angular/angularfire2/blob/master/docs/1-install-and-setup.md)). If the Firebase configuration is set, it will be used and storage will be allowed. If not, the UI for storage will be hidden and the app will otherwise work as expected.

## Development
I was learning Angular 2 during this so please ignore all of my terrible coding practices. I clearly have no idea what I'm doing.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build, use use `--base-href` to set the base href (e.g. to your github.io site root). For example, my build command is `ng build --prod --base-href https://johnwunder.github.io/cti-whittler/`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.
