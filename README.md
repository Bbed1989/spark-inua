# Spark Inua

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses modern tools like TailwindCSS for styling and TypeScript for type safety.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
Clone the repository and install dependencies:
```bash
git clone <repository-url>
cd spark-inua
npm install
```

### Development Server
Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Building for Production
To create an optimized production build:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

## Features

- **Next.js**: A React framework for building fast and scalable web applications.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: Adds static typing to JavaScript for better developer experience.
- **PostCSS**: Used for processing CSS with plugins like autoprefixer.

## File Structure

- `src/app/`: Contains the main application files.
- `src/app/globals.css`: Global styles for the app, including TailwindCSS imports.
- `tailwind.config.js`: Configuration file for TailwindCSS.
- `postcss.config.js`: Configuration file for PostCSS.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Steps to Deploy on Vercel:
1. Push your code to a Git repository (e.g., GitHub, GitLab).
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Connect your repository and follow the setup instructions.
4. Vercel will automatically build and deploy your app.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Troubleshooting

### Common Issues
- **`Module not found: Can't resolve 'tailwindcss'`**  
  Ensure TailwindCSS is installed and configured correctly. Run:
  ```bash
  npm install tailwindcss postcss autoprefixer
  ```

- **Build Errors**  
  Clear the Next.js cache and rebuild:
  ```bash
  npm run build -- --no-cache
  ```

## Learn More

To learn more about the tools used in this project, check out the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [TailwindCSS Documentation](https://tailwindcss.com/docs) - Learn how to style your app with TailwindCSS.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn about TypeScript features.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).