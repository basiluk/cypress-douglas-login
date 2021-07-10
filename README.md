# Test Automation Framework using Cypress

<p align="center">
A Test automation framework to for testing <strong>DOUGLAS Login Functionalties</strong> by using <a href="https://cypress.io">Cypress</a> testing methods, patterns, and workflows.
</p>

## Features

🛠 Built with Cypress and NPM  
🚀 Framework can be used for bulding End to End Testing suites with mulitple spec files. Single well Organized HTML reports can be generated for each test  
👮‍♂️ Can be used for Running tests in multiple environments by setting neccessary Config values in [config](./cypress/config)  
🔥 Test Data files can be maintained under [fixtures](./cypress/fixtures/)  
💻 CI/CD Compatiable  

## Environments

Environment specific configuration files are available under [config](./cypress/config) . For now all environment files are saved with same values, This can be updated accordingly. Find below one sample :

```json
{
    "baseUrl": "https://www.douglas.de"
}
```

## Tests

The test files are currently available under [cypress/integration](./cypress/integration)



| Type             | Location                                                                       |
| -----------------| ------------------------------------------------------------------------------ |
| Login            | [cypress/integration/Login.js](cypress/integration/Login.js)                   |
| Reset Password   | [cypress/integration/ResetPassword.js](cypress/integration/ResetPassword.js)   |


## Reporters

Currently mochawesome reporter is used in this framework. This will merge all spec json reports to form a sinlge HTML report.

The Report level configuration are maintained in [cypress.json](.cypress.json)

While running cypress tests from command line, reporter will be selected by default, need not mention this again.

After Teste execution reports will be generated under [TestReport](.TestReport)

## Getting Started

### Prerequisites

The only requirement for this project is to have [Node.js](https://nodejs.org/en/) installed on your machine.

### Installation

For installation all dependencies have been recorded in package.json. Run below command for installation of cypress and dependencies

```shell
npm install
```

### Run the Tests

For running specific spec files please use below sample format:

```shell
npm run cy:run -- --spec "cypress/integration/Login.js" --env fileConfig=qa
```

In the above example Login tests will be run on QA environment

> 🚩 **Note**
>
> Additional cypress options can be used such as selection specific browsers
> If you want to make changes to environment specific values , this can be updated in (./cypress/config)

### Opening Cypress runner for Debugging

For debugging purpose to open cypress runner the below commands can be used based on which environment the test needs to be run

```shell
npm run cy:dev
npm run cy:qa
npm run cy:prod
```

> 🚩 **Note**
>
> Additional cypress options can be used such selection specific browsers
> All of the scripts related to opening and running tests are maintained in (./package.json)