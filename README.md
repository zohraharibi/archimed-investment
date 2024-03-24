# archimed-investment

for the Backend
Navigate to the Project Directory:

Once the repository is cloned, you should navigate into the project directory using the cd command:

```cd /Backend```

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
--------------------
for the frontend

Install Node.js: Ensure Node.js is installed on your system. You can download it from the official website: Node.js Downloads.

Navigate to Project Directory: Open a terminal or command prompt and navigate to the directory where the React project is located using the cd command.
```cd /Frontend```
Install Dependencies: Run the following command to install the project dependencies listed in package.json:

```npm install```
Start the Development Server: After installing the dependencies, start the development server using the following command:

```npm run dev```
Access the Application: Once the server is started, you can access the React application by opening a web browser and navigating to the URL provided by the development server, usually http://localhost:3000.
