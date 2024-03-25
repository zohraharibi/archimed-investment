<h1 align="center">Archimed Investment</h1>





<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#backend">Backend</a></li>
        <li><a href="#frontend">Frontend</a></li>
      </ul>
    </li>
    <li>
      <a href="#demo">Demo</a>
        <ul>
        <li><a href="#investors">Investors</a></li>
        <li><a href="#bills">Bills</a></li>
        <li><a href="#capital-calls">Capital Calls</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The company wishes to send invoices as part of the capital call to investors. This
process is currently done manually with excel files and therefore it creates issues
of redundancy as well as difficulties in maintenance of such excel files. Since,
there are so many issues with the manual process, the company has decided to
invest its resources towards building a product that automates this process of
sending the invoices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This project is built using React and Django
* [![React][React.js]][React-url]
* [![Django][django]][django-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
After cloning your project you can follow the upcoming steps for the frontend and the backend.

### Backend
  
* You should navigate into the project directory using the cd command:
  ```sh
  cd /Backend
  ```
* Install Dependencies:
Since this project uses pipenv, you need to install dependencies specified in the Pipfile.lock file. you can do this by running:

```sh
pipenv install
```

* Activate the Virtual Environment:
After installing dependencies, you need to activate the project's virtual environment. This ensures that the installed dependencies are isolated from other projects. you can activate the virtual environment by running:

``` sh 
pipenv shell
```

* Run Migrations:
Before running the Django project, you should apply migrations to set up the database. you can do this by running:

``` sh 
python manage.py migrate
```
* Run the Development Server:
Finally, you can run the Django development server to start the application. you can do this by running:

``` sh 
python manage.py runserver
```
This command will start the development server, and you can access the application by navigating to ```http://127.0.0.1:8000``` in your web browser.

### Frontend

* Navigate to Project Directory: Open a terminal or command prompt and navigate to the directory where the React project is located using the cd command.
```sh 
cd /Frontend
```
* Install Dependencies: Run the following command to install the project dependencies listed in package.json:

```sh
npm install
```
* Start the Development Server: After installing the dependencies, start the development server using the following command:

```sh
npm run dev
```
* Access the Application: Once the server is started, you can access the React application by opening a web browser and navigating to the URL provided by the development server, you will find the URL provided in the terminal.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Demo

In this section I will share with you some screenshots with a description of the work that I have made.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Investors


* List of Investors:
This is the list of investors.


![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/f4693b41-922d-457b-917b-75c502fbef25)


* Add an Investor:
to add a new investor you can simply click on Add New Investor button

![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/dc36a889-e55f-41c3-b932-07f2923834a5)

* Add an Investor:
to add a new investor you can simply click on Add New Investor button.
In order to add an investor we need to keep in mind that there are form validations both in the frontend and the backend. Here are the validations that should taken into account.
1. All fields are required
2. The email should be in an email format
3. the IBAN should be valid
4. Investor name and email should be unique
5. If an IBAN is valid but contains spaces, it's fine because it will be saved in the database without spaces

   here are pictures illustrating different validation cases

   ![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/8678e5be-26c8-429a-87d0-85ce86a4f15f)
   ![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/ed48d0c1-ecf6-4d9c-a4d8-c37fc9362fab)
   ![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/3532e13c-c11f-4dd5-9b9b-d83c31da1ff3)

   until the investor is added successfully

   ![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/b0b9dfd4-216e-471e-afe8-1d13cd9613d0)
   ![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/1a4d013e-8a3d-411c-92ef-ff3dfada6ecd)

   we can also get bills related to an investor by clicking on an investor

   ![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/88731a11-4192-4e96-ae39-29a8f94d7076)













### Bills

A bill has also a form validation both from the frontend and the backend.

1. All fields except for capital call are required
2. The amount is not typed by the user but it’s calculated using the other fields, it is in a read-only mode
![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/4b55fab6-f00c-4ec7-af18-1d488e7965ad)
![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/a3750c08-5bf0-4dbd-b119-4d3635429340)

3. And all the rules to calculate a bill are applied as in the business case
* If an investor has invested more than 50000 euros than membership bill amount is 0. Otherwise it’s 3000. For this business case, I have calculated the amount invested by a user by calculating the sum amount of all the capital calls only if they are paid.
  For example here this is the first bill for Ronald and it's membership so the amount is 3000 euros

  ![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/f1909e04-e78f-4427-a587-f4ffd94708d6)

For Zohra Haribi, she has invested a lot with us so if we add a membership bill for her it's going to be 0

![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/99ef078f-1c80-4931-82d2-ab65f1d89af9)


This is an example of the other calculations for bill

![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/7a97f633-3ee3-431e-837d-d048e46f654b)



* A bill doesn’t necessarily belong to a capital call, but once we assign a capital call to it, the total amount of that capital call gets updated by summing up all the bill amounts of that capital call. Initially while creating a capital call we set the total_amount to 0 because it doesn’t have any bill related to it at the moment of creation.

With that said let’s move on to capital calls.






### Capital Calls


A capital call belongs to one investor and can have many bills. As said previously, the total amount is calculated each time we add assign a bill to a capital call.
A capital call form needs to be validated also from the frontend and backend
All fields are required and the due_date should be greater than today. Because we cannot assign a capital call now to an investor and want him to pay in the past

![image](https://github.com/zohraharibi/archimed-investment/assets/162974399/09c14621-9401-4572-8a11-2139c8febe08)
















<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[django]:https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green
[django-url]: https://www.djangoproject.com/










