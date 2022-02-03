# Ultimate Portfolio V2

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Deployment

Using github action for the deployment of the code, the process of build and deploy includes - 
1. Always push code to master branch so that it can be deployed to github pages for reviews,
2. Building the static site using `yarn export``,
3. Pushing the deployed code using credentials in the github repo to the firebase webapp.


