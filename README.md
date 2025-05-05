# Welcome to your Flixapay Project

This is the frontend project for the Flixapay web application.

---

## Project Info

This project is built using the following technologies:

* Vite
* React
* TypeScript
* Tailwind CSS
* shadcn-ui

---

## How to Edit This Code

You can edit the code using any of the following methods:

---

### 1. Using Git Locally with Your Preferred IDE

Follow these steps to set up the project locally:

```sh
# Step 1: Clone the repository using the project’s Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the required dependencies.
npm install

# Step 4: Start the development server.
npm run dev
```

---

### 2. Edit Files Directly in GitHub

1. Open your repository on GitHub.
2. Navigate to the file you want to edit.
3. Click the "Edit" button (pencil icon) on the top right.
4. Make your changes.
5. Scroll down, write a commit message, and click "Commit changes".

---

### 3. Use GitHub Codespaces

1. Go to your GitHub repository.
2. Click on the green **Code** button.
3. Open the **Codespaces** tab.
4. Click **New codespace** to launch a development environment.
5. Make changes directly in the Codespace and commit them.

---

## Domain Setup Steps

If you are setting up a custom domain, follow these steps:

1. Purchase or access your domain from a domain provider (e.g., GoDaddy, Namecheap).
2. Log in to your domain provider’s DNS management dashboard.
3. Add the following DNS records based on your hosting provider:

   * **CNAME Record**: Point your subdomain (e.g., `flixapaygroup.com`) to your hosting URL (e.g., `flixapay.vercel.app`).
   * **A Record**: If self-hosting, point to the IP address of your server.
4. Save the DNS records.
5. Ensure your hosting platform is configured to accept the custom domain.
6. Set up SSL (usually automatic with most hosting services).

---

## Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## Directory Structure (Example)

```
flixapay-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   ├── main.tsx
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

Replace `<YOUR_GIT_URL>` and `<YOUR_PROJECT_NAME>` with the actual repository link and folder name.
