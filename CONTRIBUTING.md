<h1 align="center">
    <a href="https://cdnjs.com"><img src="https://raw.githubusercontent.com/cdnjs/brand/master/logo/standard/dark-512.png" width="175px" alt="< cdnjs >"></a>
</h1>

<h3 align="center">The #1 free and open source CDN built to make life easier for developers.</h3>

---

## Table of Contents

* [Overview](#overview)
* [Policy, rules and guidelines](#policy-rules-and-guidelines)
* [Configuring library auto-update](#configuring-library-auto-update)
  * [Auto-update overview](#auto-update-overview)
  * [Auto-update config](#auto-update-config)
* [Creating a new library on cdnjs](#creating-a-new-library-on-cdnjs)

## Overview

[`cdnjs/packages`](http://github.com/cdnjs/packages) is the GitHub repository that contains the package JSON files that control all the libraries available on [cdnjs.cloudflare.com](http://cdnjs.cloudflare.com).

cdnjs relies on user-submitted pull requests and automatic updating to populate and update libraries. With hundreds of contributors and thousands of commits, it is very important that new libraries are added to cdnjs using the correct procedure.

Libraries that are actively maintained on [npm](https://www.npmjs.com/) or in a git repository with tagged releases can be configured to be automatically updated.

Libraries that do not have a way to provide automatic updates are no longer supported in cdnjs as we are moving away from the need to maintainers to work with the repository that contains the full set of assets for cdnjs, which can be found in [`cdnjs/cdnjs`](http://github.com/cdnjs/cdnjs).

## Policy, rules and guidelines

<!-- TODO: Get a full list of whitelisted file types from Cloudflare, to be listed here -->

cdnjs will host any production version of any JavaScript (JS) or Cascading Style Sheets (CSS) library, subject to appropriate licence permissions.

cdnjs will host JS, CSS, SWF and library image files. Note: cdnjs does not currently serve HTML or PHP files.

New libraries should have some indicator of popularity (e.g., GitHub stars or watchers) and purpose (e.g., a jQuery plugin to display images).

cdnjs maintainers and peer-reviewers need to know the origin of new libraries and updates (i.e., where you downloaded the files from).

## Configuring library auto-update

### Auto-update overview

Libraries that are actively maintained on [npm](https://www.npmjs.com/) or in a git repository with tagged releases can be configured to be automatically updated. A cdnjs auto-update script runs at scheduled intervals to check for new versions for cdnjs libraries on the relevant npm packages and git repositories as configured in each library's JSON file in this repository.

Each cdnjs library has a JSON file. This file contains required and sometimes optional information about how the library works. Auto-update is configured in the library's JSON file alongside other library information.

### Auto-update config

- `autoupdate` is the top-level property that all autoupdate config options are contained within
  - `source` should be either `npm` for a NPM-based auto-update package, or `git` to indicate git-based auto-updating
  - `target` is the NPM package name, or the git url for the git repo to be used for updating
  - `fileMap` contains an array of a single object that houses the information on what files cdnjs should copy
    - `basePath` is the path in the git repository or NPM package that we will start exploring from
    - `files` indicates the file(s) to copy and can be named (e.g. `lodash.min.js`) or [globs](https://do.co/glob-tool) (e.g. `*.js`).

#### NPM-based auto-update example

```js
  "autoupdate": {
    "source": "npm",
    "target": "function-plot",
    "fileMap": [
      {
        "basePath": "dist",
        "files": [
          "**/*"
        ]
      }
    ]
  }
```

The example parses the `function-plot` tarball, which has this structure:

```text
|__dist
| |__function-plot.js
| |__utils
| | |__plotter.js
|__bower.json
|__index.js
|__site.js
|__package.json
|__README.md
|__lib
| |__...
|__node_modules
| |__...
|__sandbox
| |__...
```

The auto-update process will locate `dist` (specified in `basePath`) and copy `**/*` (specified in `files`) to cdnjs, removing the `dist` path. The resulting files in cdnjs will be:

```text
|__ajax
  |__libs
    |__function-plot
      |__x.y.z
        |__function-plot.js
        |__utils
          |__plotter.js
```

...where `x.y.z` is the library version number, extracted from the `package.json` on npmjs.

#### Git-based auto-update example

```js
  "autoupdate": {
    "source": "git",
    "target": "git://github.com/mikehostetler/amplify.git",
    "fileMap": [
      {
        "basePath": "lib",
        "files": [
          "*"
        ]
      }
    ]
  }
```

The example parses the `mikehostetler/amplify` git repository, which has this structure:

```text
|__demo
| |__...
|__docs
| |__...
|__external
| |__...
|__lib
| |__amplify-vsdoc.js
| |__amplify.core.js
| |__amplify.core.min.js
| |__amplify.js
| |__amplify.min.js
| |__amplify.request.js
| |__amplify.request.min.js
| |__amplify.store.js
| |__amplify.store.min.js
|__src
| |__...
|__test
| |__...
|__.gitignore
|__.jshintrc
|__GPL-LICENSE.txt
|__MIT-LICENSE.txt
|__bower.json
|__build.json
|__header.js
|__package.json
|__readme.md
|__test-jquery-versions.js
|__test-server.js
|__testswarm.json
```

The auto-update process will locate `lib` (specified in `basePath`) and copy `*` (specified in `files`) to cdnjs, removing the `lib` path. The resulting files in cdnjs will be:

```text
|__ajax
  |__libs
    |__amplify
      |__x.y.z
        |__amplify-vsdoc.js
        |__amplify.core.js
        |__amplify.core.min.js
        |__amplify.js
        |__amplify.min.js
        |__amplify.request.js
        |__amplify.request.min.js
        |__amplify.store.js
        |__amplify.store.min.js
```

...where `x.y.z` is the library version number, based on the tagged release found in the git repository.

## Creating a new library on cdnjs

<!-- TODO: Create PR that adds package.json file with correct properties and auto-update -->

<!--

TODO: Vet all of this

## 5. Adding and updating cdnjs

Changes to cdnjs happen with the following process:

* fork the cdnjs repository to your GitHub account
* make the required changes to the forked repository
* run the pre-flight `npm` check, resolve any errors
* raise a pull request with appropriate information
* remove your forked repository after the merge

If these steps are followed, and everything works out, the update process is usually efficient and your library update will go live soon afterwards.

### 5.1 Fork the cdnjs repository

Forking the cdnjs repository is easy. Be aware that it is one of the largest repositories on GitHub (>3GB), and this should be a consideration if you choose to clone it to your computer.

To fork the repository via your browser, visit this link:

[https://github.com/cdnjs/cdnjs/fork](https://github.com/cdnjs/cdnjs/fork)

Select your GitHub account for the destination and wait for the forking process to complete. Assuming you saw no errors, you should be able to access your fork of cdnjs from your own GitHub account:

https://github.com/your-github-username/cdnjs

&hellip;where your-github-username is, unsurprisingly, your GitHub username.

### 5.2 Make changes to your fork

Change are made to your fork of cdnjs. These changes contribute to a pull request, which may be merged after examination by the cdnjs maintainers.

Changes to your fork can be made at GitHub using your browser, or on your computer using a `git` command line or graphical user interface.

* If you intend to make a _single, simple contribution_ to cdnjs you will likely find the browser experience more straightforward.

* If you intend to make _numerous contributions_ to cdnjs, you may find a local clone of your forked repository a better route.

#### 5.2.1 Follow the existing library convention

Where possible, follow the existing file and directory structure for the library when adding a new version. Users should ideally be able to increment the version number reference in their projects to load a more recent version.

This is not always possible with major or minor version changes, especially with considerable changes, so please ask if you are not sure.

#### 5.2.2 Make changes using your browser

The GitHub website provides an easy-to-use interface to add and update simple libraries. A library containing a single or small number of text files is an ideal candidate for this route.

In your fork of cdnjs, navigate to `ajax/libs`:

https://github.com/your-github-username/cdnjs/tree/master/ajax/libs

&hellip;where, again, `your-github-username` is your GitHub username.

##### 5.2.2.1 Update a library using your browser

If you are updating an existing library, find it from the list. Click on the library name; you'll find a `package.json` file and one or more numbered directories. Each directory contains that version of the library, and that version _only_.

To add a new version of a library, create a new directory named after the new library version by clicking the `+` link near the top.

*[INCOMPLETE]*

#### 5.2.3 Make changes on a local repo clone

Coming soon - please refer to `README.md`.

### 5.3 Pre-flight checks

Coming soon - please refer to `README.md`.

### 5.4 Create a pull request

Coming soon - please refer to `README.md`.

### 5.5 Pull request follow-up

Coming soon - please refer to `README.md`.

## 6. Create an issue

-->
