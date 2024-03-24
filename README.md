# archimed-investment


Navigate to the Project Directory:

Once the repository is cloned, you should navigate into the project directory using the cd command:

```cd <project-directory>```

Install Dependencies:
Since this project uses pipenv, you need to install dependencies specified in the Pipfile.lock file. you can do this by running:

```pipenv install```

Activate the Virtual Environment:
After installing dependencies, you need to activate the project's virtual environment. This ensures that the installed dependencies are isolated from other projects. you can activate the virtual environment by running:

```pipenv shell```

Run Migrations:
Before running the Django project, you should apply migrations to set up the database. you can do this by running:

```python manage.py migrate```

Run the Development Server:
Finally, you can run the Django development server to start the application. you can do this by running:

python manage.py runserver
This command will start the development server, and you can access the application by navigating to http://127.0.0.1:8000 in your web browser.
