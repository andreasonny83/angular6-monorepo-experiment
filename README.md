# Angular6 Monorepo Experiment

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![npm][license-badge]](https://andreasonny.mit-license.org/@2018/)

## Why

Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing.
However, making changes across many repositories is messy and difficult to track, and testing across repositories gets complicated really fast.

With a monorepo, projects can be organized and grouped together in whatever way you find to be most logically consistent, and not just because your version control system forces you to organize things in a particular way. Using a single repo also reduces overhead from managing dependencies.

### Simplified dependencies

This probably goes without saying, but with multiple repos, you need to have some way of specifying and versioning dependencies between them. That sounds like it ought to be straightforward, but in practice, most solutions are cumbersome and involve a lot of overhead.

With a monorepo, it's easy to have one universal version number for all projects. Since atomic cross-project commits are possible, the repository can always be in a consistent state -- at commit #X, all project builds should work. Dependencies still need to be specified in the build system, but whether that's a make Makefiles or bazel BUILD files, those can be checked into version control like everything else. And since there's just one version number, the Makefiles or BUILD files or whatever you choose don't need to specify version numbers.

**Monorepo Pros:**

1. Single lint, build, test and release process.
1. Easy to coordinate changes across modules.
1. Single place to report issues.
1. Easier to setup a development environment.
1. Tests across modules are run together which finds bugs that touch multiple modules easier.

**Monorepo Cons:**

1. Codebase looks more intimidating.
1. Repo is bigger in size.

## Tooling

This project makes use of:

* [Lerna](https://lernajs.io/): A tool for managing JavaScript projects with multiple packages.
* [commitizen](http://commitizen.github.io/cz-cli/): a command line tool that helps format commit messages with a series of prompts that are used to generate a commit message.
* [semantic-release](https://semantic-release.gitbooks.io/semantic-release/content/#highlights): automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package. strictly following the [Semantic Versioning](https://semver.org/) specification.
* [Angular-CLI v6](https://cli.angular.io/) AngularCLI version 6 support for libraries and multiple applications.
It’s possible with this new version to have several applications in the same CLI project (now called a workspace), and to create libraries (a shared set of components, directives, pipes and services)!

## Real case scenario

This repository has been initialized with an Angular workspace using Angular-CLI v6.0.5
in where we generated 2 shared libraries: `library1` and `library2`, and one Angular application: `application` (developers normaly experience a lack of artistic creativity).

We want to release the 2 libraries to npm because we want to consume them inside our Angular application and we also want other Angular projects to be able to consume them separately.
Our Angular application doesn't need to be published to npm because is not supposed to be reusable, so it will have a dedicated releasing process.

The 3 projects are not directly connected so they can be hosted on 3 different repositories and have dedicated releasing processes.
However, they all share something in common: Angular.

As a software engineer, I want to use the same Angular version across all my Angular projects, so I can reduce the issues related to compatibility problems.
I also want to alway keep the Angular version of my projects updated to the latest stable version.

So, hosting all my Angular projects under the same git repository seems to be reasonable. However I also want to relay on a `global`
`node_modules` folder so I can define all my node dependencies in one place.
I also want to pubblish all my differnet projects in one go using a shared deployment strategy accross all my projects.

## Lerna to the rescue.

With Lerna, you can specify one global configuration file called `lerna.json` in where specifyng how to interact with the different projects.

```sh
lerna bootstrap
```

Bootstrap the packages in the current Lerna repo. Installing all their dependencies and linking any cross-dependencies.

This command is crucial, as it allows you to use your package names in require() as if the packages were already existing and available in your node_modules folder.

```sh
lerna publish
```

Create a new release of the packages that have been updated. Prompts for a new version and updates all the packages on git and npm.

## Usage

### Install

After cloning this repo, run the following command:

```sh
npm run bootstrap
```

This will run `lerna bootstrap` and install the node dependencies.

### Develop

Make some changes in one of the 3 projects, then commit with:

### Commit

```sh
npm run commit
```

This command is going to use Commitizen-cli for helping you creating a semantic commit message.

### Publish

```sh
npm run release
```

This command is going to bump all the `package.json` version following the [Semantic Versioning](https://semver.org/) specification.
Then will tag the version number in Git, push the changes and release a newer version of all your projects, to `npm`.

### Changelog

In addition to the previous task, Lerna is also going to generate/update a CHANGELOG file automatically using `cz-conventional-changelog` :tada:.

## Contributing

This package is using semantic-release as default way to contribute with commitizen node package integrated in this repository.

```
1. Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
1. Add your changes: `git add .`
1. Commit your changes: `npm run commit`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request 😎
```

## Changelog

Changelog [available here](https://github.com/andreasonny83/angular6-monorepo-experiment/blob/master/CHANGELOG.md)

## License

MIT License © [Andrea SonnY](https://andreasonny.mit-license.org)

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg