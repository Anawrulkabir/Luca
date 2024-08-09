![3](https://github.com/Anawrulkabir/Luca/assets/100487781/4fce5a66-d279-4701-952d-03fbae339302)
![4](https://github.com/Anawrulkabir/Luca/assets/100487781/305a47e1-293a-4cb0-ba2f-c46dac700f64)
![5](https://github.com/Anawrulkabir/Luca/assets/100487781/10340581-94be-4c27-9b35-2afeb6e080f3)
![6](https://github.com/Anawrulkabir/Luca/assets/100487781/3ab13089-dfb9-4f31-8f55-4a347252a14e)
![7](https://github.com/Anawrulkabir/Luca/assets/100487781/ecb19345-2af1-4258-9826-161a959c3b4e)
![8](https://github.com/Anawrulkabir/Luca/assets/100487781/21c1e43f-b869-41b2-9272-dc93f82f938e)
![9](https://github.com/Anawrulkabir/Luca/assets/100487781/036c9a0e-4115-4ce9-a755-954d0325e537)

# Luca

Luca is a full-stack Tourist Guide website that provides users with comprehensive features to explore and book tour packages. The project includes customized dashboards for guests, hosts, and admins, ensuring role-based authorization and advanced data handling.

## Features

- **User Dashboards**: Fully customized dashboards for guests, hosts, and admins with role-based authorization.
- **Tour Package Management**: Create, update, delete tour packages, and add stories.
- **Secure Authentication**: User authentication using Firebase Auth.
- **Payment Integration**: Buy tour packages using Stripe payment gateway.
- **Advanced Data Fetching**: Efficient data fetching with Tanstack Query and JWT token for API protection.

## Technologies Used

- **Frontend**: React, Tailwind CSS, ShadCN UI
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase
- **Payment**: Stripe


## Getting Started


## Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Git**



### Clone the Repository

Clone the repository from GitHub and navigate to the project directory:

```bash
git clone https://github.com/anawrulkabir/luca.git
cd luca
```

### Set Up Environment Variables

To configure the necessary environment variables, follow these steps:

1. **Create the `.env.local` file:**

   Inside the `luca` directory, create a file named `.env.local`.

   ```bash
   touch .env.local
   ```

2. **Add the following environment variables to the `.env.local` file:**

   ```bash
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id

   VITE_API_URL=your_backend_api_url

   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

   VITE_IMGBB_API_KEY=your_imgbb_api_key
   ```

   Replace the placeholders (`your_firebase_api_key`, `your_backend_api_url`, etc.) with your actual configuration values.

### Install Dependencies

Install the required dependencies:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

### Access the Application

Once the server is running, you can access the application by visiting [http://localhost:3000](http://localhost:3000) in your web browser.





