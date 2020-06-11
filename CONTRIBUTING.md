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
  * [Fork the cdnjs repository](#fork-the-cdnjs-repository)
  * [Make changes to your fork](#make-changes-to-your-fork)
  * [Follow the existing library conventions](#follow-the-existing-library-conventions)
  * [Making changes using your browser](#making-changes-using-your-browser)
  * [Create a pull request](#create-a-pull-request)
  * [Fixing any CI errors](#fixing-any-ci-errors)
  * [Reviewing and merging](#reviewing-and-merging)

## Overview

[`cdnjs/packages`](http://github.com/cdnjs/packages) is the GitHub repository that contains the package JSON files that control all the libraries available on [cdnjs.cloudflare.com](http://cdnjs.cloudflare.com).

cdnjs relies on user-submitted pull requests and automatic updating to populate and update libraries. With hundreds of contributors and thousands of commits, it is very important that new libraries are added to cdnjs using the correct procedure.

Libraries that are actively maintained on [npm](https://www.npmjs.com/) or in a git repository with tagged releases can be configured to be automatically updated.

Libraries that do not have a way to provide automatic updates are no longer supported in cdnjs as we are moving away from the need to maintainers to work with the repository that contains the full set of assets for cdnjs, which can be found in [`cdnjs/cdnjs`](http://github.com/cdnjs/cdnjs).

## Policy, rules and guidelines

cdnjs will host any production version of any JavaScript (JS) or Cascading Style Sheets (CSS) library, subject to appropriate licence permissions.

cdnjs will host a specific subset of file types, which include JS, TS, CSS, SCSS, JSON, WASM, SWF, images, audio.
The full list of supported extensions can be requested through the cdnjs API: [api.cdnjs.com/whitelist](https://api.cdnjs.com/whitelist)

New libraries are required to meet a basic popularity level to be hosted on cdnjs, to avoid wasting maintainer time.
For NPM packages, the base level for popularity is 800 downloads or more per month.
For GitHub repositories the requirement is normally 200 stars.
These requirements are at the discretion of cdnjs maintainers when adding libraries to cdnjs.

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

Changes to cdnjs happen with the following process:

* Fork the cdnjs/packages repository on your GitHub account
* Make the required changes to the forked repository
* Raise a pull request with appropriate information
* Remove your forked repository (or branch if you plan to contribute again) after merge

If these steps are followed, and everything works out, the process for adding a library is usually efficient and your library will go live soon afterwards.

### Fork the cdnjs repository

To fork the repository via your browser, visit this link:

[https://github.com/cdnjs/packages/fork](https://github.com/cdnjs/packages/fork)

Select your GitHub account for the destination and wait for the forking process to complete.
Assuming you saw no errors, you should be able to access your fork of cdnjs from your own GitHub account:

https://github.com/your-github-username/packages

Please make sure to fork cdnjs/packages, NOT cdnjs/cdnjs, as we only accept pull requests adding library JSON files to the cdnjs/packages repository.
cdnjs/cdnjs is now a robot-only repository and does not accept PRs.

### Make changes to your fork

Change are made to your fork of cdnjs. These changes contribute to a pull request, which may be merged after review by the cdnjs maintainers.

Changes to your fork can be made in GitHub using your browser, or on your computer using a `git` command line or graphical user interface.

* If you intend to make a _single, simple contribution_ to cdnjs you will likely find the browser experience more straightforward.

* If you intend to make _numerous contributions_ to cdnjs, you may find a local clone of your forked repository a better route.

### Follow the existing library conventions

When adding a new library, please refer to existing libraries in the repository, preferring more recently added ones as a source of truth for the preferred structure for a library JSON file.

### Making changes using your browser

The GitHub website provides an easy-to-use interface to add libraries.

In your fork of cdnjs, navigate to the `packages` directory of the repository:

https://github.com/your-github-username/packages/tree/master/packages

From here, you can then click the 'Create new file' button in the bar above the file list.

You can then define the name for the library JSON file, as well as the directory. If you type in `a/a-library.json` as the name, GitHub will automatically create or move you to the `a` directory and then create the file named `a-library.json`.

In the file contents you should include your basic library JSON data, based on the conventions set by existing libraries and following the above guidance on a valid auto-update configuration.

### Create a pull request

Once you have added your content to your file, you need to commit this and then create a PR.

If you're using the GitHub browser interface, below the file content will be a set of inputs for controlling the commit.

For the commit message, it should follow the standard following format so we can easily tracking libraries being added:

`Add my-library-name w/ npm/git auto-update`, where `my-library-name` is replaced with the name of the library (should match the JSON file name), and `npm/git` is replaced with the choice matching the auto-update config in the JSON file.

A commit description is not required, though if an issue requesting this library to be added exists, it may be useful to add `Resolves <issue link>` to the description so that GitHub tracks the PR in the issue.

Please do NOT commit to the `master` branch, instead choose to create a new branch and again give it a sensible name, such as `add-my-library-name`.

Finally, press the 'Propose new file' button to commit the new file and begin the process of creating a PR.

On the PR creation page, please fill out the provided template with the requested information about the library and then press the button to create the pull request.
cdnjs maintainers will then review your pull request as soon as they can.

### Fixing any CI errors

To help with ensuring all library JSON files added to cdnjs are of a standard format and contain a valid auto-update configuration as well as other information about the library, we have an automated CI that will review your JSON file in the PR.

If the CI finds any issues with your JSON file it will mark itself as failed and add an annotation to the JSON file in the pull request 'Files' tab with information about the issues it found.

Please edit your JSON file either in the GitHub browser interface or via your local clone to resolve issues highlighted.
If you are unsure, please ask a cdnjs maintainer for help and we'll happily work with you to get your PR ready to merge.

### Reviewing and merging

As soon as your PR is passing the CI, and when a maintainer has time, they will manually review your pull request to ensure no issues have slipped past the automated CI.

Once the maintainer is happy that your PR is ready to go, they will merge it.
You can then delete your fork (or branch if you plan to contribute again).

Thank you for contributing to cdnjs!

The cdnjs auto-updating logic runs roughly once per hour.
It will detect any newly added JSON files and populate the 10 most recent versions it can find into the cdnjs/cdnjs repository.

Once this is done, the files should shortly after be available on the CDN, though it may take a while longer for them to appear on our website as this doesn't automatically update as often.
