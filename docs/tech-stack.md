# Tech Stack

- Yarn Workspace
- React + TypeScript
- Tailwind CSS
- Jest AXE
- Styled Dictionary
- Storybook
- React Testing Library
- Changesets



Technologies

React

React is a JavaScript library for building user interfaces (UI). We will be using React to share our components between codebases.

While we will use React, you are welcome to use any UI frameworks that fit your company's stack (Svelte, Solid, Vue, etc.).

TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript. It helps improve the developer experience for both library authors and consumers.

We will be developing our component library with TypeScript, as it will have additional benefits with Storybook integration.

Yarn Workspace

Yarn is a package manager, similar to npm & pnpm. It also has features like workspaces that will help us manage our monorepo in a more declarative and manageable way.

Styled Dictionary

Style Dictionary is a build system that allows us to define styles once as design tokens, and then generate assets that allow us to consume on any platform or programming language.

TailwindCSS

TailwindCSS is a utility-first CSS framework that revolutionalized the way we style our user interfaces.

In this course we will create a preset that we can share with other teams so they can extend and work with the provided design tokens.

React Testing Library

React Testing Library is the testing framework used in this course. It allows us to write maintainable tests that ensure we are testing components in the same way that consumers will use them.

Axe

Axe is the default go-to software to conduct accessibility testing for our web services.

In our course we will integrate Axe into our testing pipeline, so we will be sure that we provide accessible components.

Storybook (+ Chromatic)

Storybook will be the environment where we develop and document our components.

Also for conducting visual testing with Chromatic, the company behind Storybook.

GitHub Actions

GitHub Actions will be our Continuous Integration and Continuous Deployment (CI/CD) platform.

We will provide example files to build, test, and deploy our code.

Course Content

Module 0: Introduction

In the rest of this module, we will focus on the mental models of a design system, and how we can start translating our Figma file to code requirements.

Module 1: Design System Monorepo

Learn the fundamental concepts of design systems we will work on the architecture of the monorepo we will create to host our codebase.

Additionally, we will create shared configurations for:

TypeScript

ESLint

Prettier

Module 2: Foundation Package

Start our first monorepo package, the foundation package that will host and distribute our design tokens and assets.

Module 3: React Package

Create the react package, with a demo Button and IconButton component that is flexible enough and will be styled with our design system styles tokens.

Module 4: Storybook Package

Create storybook package, and lay out the best practices for developing documenting components with TypeScript.

Module 5: Styling Components

Focus on styling our Storybook components in two ways, with assets provided by the foundation package:

CSS-in-JS with styled-components and JavaScript design tokens

Tailwind CSS classes by extending the preset

Module 6: Testing Components

Learn how to create tests for our react components using React Testing Library.

Also will use AXE to test automatically for accessibility issues.

Module 7: CI, Changelogs & Publising

Provide CI and CD workflow files that we can use with GitHub Actions to deploy our design system assets to a package registry like NPM.
