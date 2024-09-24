# Contact Form 

This project is a simple web-based **Contact Us** form that allows users to submit their contact information and messages. The backend is built using **Flask** (a Python web framework), and it stores submitted form data in an **SQLite** database. The API endpoint processes the form submissions and saves them securely to the database.

To view Project: <a href="https://ramnathnayak07.github.io/Contact-Form/">Click here</a><br>

## Features

- **Frontend**: A clean and stylish contact form interface built using HTML, CSS, and JavaScript.
- **Backend API**: Handles form submissions, performs basic validation, and stores data in an SQLite database.
- **API Integration**: The frontend interacts with the Flask backend via a RESTful API.
- **Database**: Data is persisted using SQLite, but this can be configured to any relational database.

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Flask (Python)
- **Database**: SQLite (easily swappable with other databases)
- **API**: RESTful API

### Prerequisites

Make sure you have the following installed on your system:

- Python 3.x
- pip (Python package installer)
- Virtual environment (optional but recommended)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ramnathnayak07/contact-form.git
    cd contact-form
    ```

2. Create and activate a virtual environment (optional):

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Run the Flask application:

    ```bash
    python app.py
    ```

   This will start the Flask development server at `http://127.0.0.1:5000`.

### Usage

1. Visit `http://127.0.0.1:5000` in your web browser to view the contact form.
2. Fill in the form with your details and submit it.
3. The backend API will process the form submission and store it in the SQLite database.
4. After successful submission, you will see a "Thank you for contacting us" message.

### API Endpoint

The following API endpoint is available:

- **POST /api/contact**: Submits contact form data.
  - **Request Body**: JSON containing `name`, `email`, and `message`.
  - **Response**: Returns a success message or an error message for invalid submissions.

Example request:
```json
{
    "name": "Ramnath",
    "email": "ramnath20@gmail.com",
    "message": "Hello! How are you?."
}
