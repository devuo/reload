reload
======
> A Grunt based CLI tool to reload and refresh browser on file changes that match specific patterns.

## Installation

Install this globally and you'll have access to the `reload` command anywhere on your system.

```shell
npm install -g devuo-reload
```

**Note:** You need to install the **LiveReload extension** on your browser besides running `reload` on the CLI.

## How to Use
Go to the folder that you want to watch and execute the following command:

```shell
reload
```

The reload command will track changes to the **supported extensions** and if any of them changes will call a reload.
Activate the LiveReload extension on your browser, and as soon as you change one of the files your browser will reload.

### Supported Extensions
Only files that match the following extensions will be tracked by reload.

* .css
* .tpl.php
* .twig
* .js
