<h1 align="center">
    <a href="https://cdnjs.com"><img src="https://raw.githubusercontent.com/cdnjs/brand/master/logo/standard/dark-512.png" width="175px" alt="< cdnjs >"></a>
</h1>

<h3 align="center">The #1 free and open source CDN built to make life easier for developers.</h3>

---

<p align="center">
 <a href="#contributing">
   <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
 </a>
 <a href="https://github.com/cdnjs/packages/blob/master/LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square" alt="MIT License">
 </a>
 <a href="https://cdnjs.discourse.group/">
  <img src="https://img.shields.io/discourse/https/cdnjs.discourse.group/status.svg?label=Community%20Discourse&style=flat-square" alt="Community">
 </a>
</p>

<p align="center">
 <a href="#donate-and-support-us">
  <img src="https://img.shields.io/badge/GitHub-Sponsors-EA4AAA.svg?style=flat-square" alt="GitHub Sponsors">
 </a>
 <a href="https://opencollective.com/cdnjs">
  <img src="https://img.shields.io/badge/Open%20Collective-Support%20Us-3385FF.svg?style=flat-square" alt="Open Collective">
 </a>
 <a href="https://www.patreon.com/cdnjs">
  <img src="https://img.shields.io/badge/Patreon-Become%20a%20Patron-E95420.svg?style=flat-square" alt="Patreon">
 </a>
</p>

---

## Table of Contents

* [Introduction](#introduction)
  * [Other Repositories](#other-repositories)
* [Support Us](#support-us)
  * [Become a contributor](#become-a-contributor)
  * [Donate and support us](#donate-and-support-us)
* [Contributing](#contributing)
* [latest version URL support](#latest-version-url-support)
* [API usage](#api-usage)
* [Contributors](#contributors)
* [Sponsors](#sponsors)
* [License](#license)

## Introduction

This is the "human" repository for cdnjs, where all JSON package files that control the libraries hosted on cdnjs are stored. For all assets hosted on cdnjs, please see the robot-only [`cdnjs/cdnjs`](https://github.com/cdnjs/cdnjs) repository.

cdnjs is a free and open source project to organize and provide popular front-end web development resources to developers via a fast CDN infrastructure, powered by Cloudflare, without usage limitations and fees. We want to help individual library/framework developers distribute their projects, and web developers supercharge their websites! With our great free CDN service, developers can focus on their projects and website development. Developers no longer have to spend time worrying about how to set-up a CDN for projects or website assets. We hope to make web development easier, as well as your websites and the WWW faster and safer.

Currently, cdnjs is the #1 free and open source CDN built to make life easier for developers and is rated No. 2 ([ref](https://w3techs.com/technologies/overview/content_delivery/all)) overall in web front-end CDN services and has great performance. We fully support [https](https://en.wikipedia.org/wiki/HTTPS), [SPDY](https://en.wikipedia.org/wiki/SPDY), [http/2.0](https://http2.github.io/), and [SRI](https://www.w3.org/TR/SRI/). These will **boost** and **secure** your website with zero configuration. *(Note: You'll still need to take care of server-side and application layer security issues. We make it better, but we can't help you too much if you implement a bad practice.)*

### Other Repositories

For the full set of library assets that are hosted on cdnjs, please take a look at the robot-only [`cdnjs/cdnjs`](https://github.com/cdnjs/cdnjs) repository.

For our website, please refer to the [`cdnjs/new-website`](https://github.com/cdnjs/new-website) repository.

For the cdnjs API, please refer to the [`cdnjs/api-server`](https://github.com/cdnjs/api-server) repository.

For the full cdnjs branding and brand-related assets/guidelines, please see the [`cdnjs/brand`](https://github.com/cdnjs/brand) repository.

For our monthly CDN stats and usage reports, check out the [`cdnjs/cf-stats`](https://github.com/cdnjs/cf-stats) repository.

You can find all our repositories at [github.com/cdnjs](https://github.com/cdnjs/)!

## Support Us!

If you love 💖 what we are doing and would like to help us make the project better, please consider the following options:

### Become a contributor

Help us with the core of the service by adding and updating libraries based on requests in [issues](https://github.com/cdnjs/packages/issues) here, or by writing better [documentation](docs) on how the cdnjs project works.

### Donate and support us

#### GitHub Sponsors

GitHub now has their very own system for supporting developers on their platform, GitHub Sponsors. Please consider donating to any of the people involved in keeping cdnjs operational to help support what we do:

 - [MattIPv4](https://github.com/sponsors/MattIPv4)

#### Open Collective & Patreon

We also have [Open Collective](https://opencollective.com/cdnjs) and [Patreon](https://www.patreon.com/cdnjs) pages set up so that you can donate there too if these are platforms you prefer. We really appreciate your help. 😊

## Contributing

To contribute to cdnjs, please refer to our [CONTRIBUTING.md](https://github.com/cdnjs/packages/blob/master/CONTRIBUTING.md) document. This contains most of the information you might need to get involved either with adding a libarry to cdnjs or helping the project grow in other ways! If you need further information, please [create an issue](https://github.com/cdnjs/packages/issues/new).

**Working on your first Pull Request?** Learn how from this *free* series: [An Introduction to Open Source ](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source)

Want to chat with other users of the cdnjs service and some of the team before making your contribution? You can join our [community Discourse forum](https://cdnjs.discourse.group/) where you can post questions and interact with us!

## Latest version URL support

Please note that cdnjs does not provide a `latest` version URL for a library, due to the following considerations:

1. Your website might break if there are any compatibility issues or bugs coming from upstream. It's not a good idea to use it in the production environment. Both jQuery CDN and Google CDN don't provide this feature.
2. The `latest` URL feature also has cache and performance issues. This conflicts with what we are trying to do - make your website load as fast as possible.
3. Security issues have become more and more important nowadays. For example, Great Cannon attacked GitHub via malicious JavaScript ([ref1](https://citizenlab.org/2015/04/chinas-great-cannon/), [ref2](https://arstechnica.com/security/2015/04/meet-great-cannon-the-man-in-the-middle-weapon-china-used-on-github/)) during April 2015. One of the techniques to prevent this kind of attack is [Subresource Integrity (SRI)](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity). We have been supporting this feature for a long time. The `latest` URL feature, however, totally conflicts with the SRI technique.

## API usage

See the [API page](https://cdnjs.com/api) on our website for more information on working with the cdnjs.com API.

## Contributors

Please see the GitHub provided contributors page: [github.com/cdnjs/packages/graphs/contributors](https://github.com/cdnjs/packages/graphs/contributors).

## Sponsors

cdnjs wouldn't be the success that it is today without our sponsors' kind support. These companies currently support cdnjs:

* [Cloudflare](https://www.cloudflare.com/?utm_source=cdnjs&utm_medium=link&utm_campaign=cdnjs)
* [DigitalOcean](https://www.digitalocean.com/?utm_source=cdnjs&utm_medium=link&utm_campaign=cdnjs)
* [Algolia](https://www.algolia.com/?utm_source=cdnjs&utm_medium=link&utm_campaign=cdnjs)
* [Heroku](https://www.heroku.com/?utm_source=cdnjs&utm_medium=link&utm_campaign=cdnjs)

If you are interested in becoming a sponsor, please feel free to contact us!

## License

Each library is released under its own license. This cdnjs repository is published under [MIT license](LICENSE).
