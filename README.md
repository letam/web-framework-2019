# web-framework
Boring web framework to get stuff done. A framework on top of a framework.

## Tech Stack
- [Python programming language](https://www.python.org)
- [Django web framework](https://www.djangoproject.com/)

## Setup for Local Development
1. Install latest Python binary

2. Download and unzip project from [https://github.com/letam/web-framework/master.zip](https://github.com/letam/web-framework/archive/master.zip)

3. Open terminal and change present directory to be the project directory

4. Create and activate python virtual environment for the project
    ```
    python3 -m venv venv
    source venv/bin/activate
    ```

5. Install project requirements
    ```
    pip install -U pip
    pip install -r requirements.txt
    ```

6. Run project migrations
    ```
    python server/manage.py migrate
    ```

7. Run the development server
    ```
    python server/manage.py runserver
    ```

## Run Tests in Local Development
The test scripts are located in the `tests` directory.

To run tests for all django/server apps in the project, run:
    ```
    ./tests/test-server-apps.sh
    ```
