# web-framework
Boring/monstrous web framework to get stuff done. A framework on top of frameworks.

## Tech Stack
- [Python programming language](https://www.python.org)
- [Django web framework](https://www.djangoproject.com)
- [TypeScript programming language](https://typescriptlang.org)
- [React user interface library](https://reactjs.org)

## Setup for Local Development
1. Install latest [Python](https://www.python.org) binary

2. Install latest [Node.js](https://nodejs.org) binary

3. Install [Yarn](https://yarnpkg.com) for Node.js package management

4. Download and unzip project from [https://github.com/letam/web-framework/master.zip](https://github.com/letam/web-framework/archive/master.zip)

5. Open terminal and change present directory to be the project directory

6. Install and setup project requirements
    ```
    ./install.sh
    ```

7. Run the development servers
    ```
    yarn dev
    ```

## Run Tests in Local Development
The test scripts are located in the `tests` directory.

- To run all tests of project, run:
    ```
    yarn test
    ```

- To run tests for server section of project, run:
    ```
    yarn test:server
    ```

- To run tests for GUI section of project, run:
    ```
    yarn test:gui
    ```
