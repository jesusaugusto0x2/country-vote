# Country Votes Challenge App

This is a basic fullstack application that covers the minimum requirements noted in [this repository](https://github.com/loopstudio/jesusaugusto0x2-challenge)

## Structure

Root folder contains 2 subfolders, being `/backend` and `/frontend` for each service. Also contains a `package.json` with some commands to run the app, and a `docker-compose.yml` file to declare the conainers used

## How to Run

- Each folder has an `.env.example` file that holds some environment variables, no need to change them, just copy and paste them into an `.env` file.
- Inside the root, just run `npm run start` to build and start the containers.
- Frontend app will be listening from http://localhost:3031/, and the backend from http://localhost:4041/ **on your local machine**
- Also, after run, you can go to http://localhost:4041/api to check the API docs

**Note:** Inside docker network, `backend` container uses port `3001` and `frontend` container uses port `3000`. This is important when accessing endpoints from server or client side.

### Other Commands

- You can run `npm run db:migrate` to run migrations in case you missed something (this will likely not happen as the backend service always run migrations on the entrypoint)
- Initially there won't be any data related to the tables, so you can run `npm run db:seed` to automatically feed the tables with countries, users, and Votes

## Brief Explanation About Services

### Frontend

In this part, I used `Nextjs` as requested. Splitted the logic on multiple folders outside the `/app`, these are:

- `/components` Holds the shared pieces of UI used to build bigger views.
- `/containers` The idea of this, is to have bigger structured components that are called inside `pages`, these can contain some small logic and call the smaller "dummy" components
- `/hooks` These is supposed to save pieces of external logic to be shared as customized hooks in the components that need them
- `/styles` In here I put all of the CSS pieces that can be shared to hold a consistency across UI pieces. This have variables for widths, colors, functions to calculate spacing and breakpoints to support reponsiveness

#### Extra comments

- I used `server-side` components to perform query calls, also update the URL querystring and reload the page when a search is performed.
- The only `client-side` component living inside the `HomePage` container is the `VoteForm`, I preffer this approach as I can have more responsiveness to the user, as well as manage validation from the client-side in order to "clear" the data as much as possible before being sent to the backend.

### Backend

Now, for this implementation, went for a `Nestjs` approach as thought is the one needed for the job 🤔 (and is the one I've been working most recently, ha!)

To manage the data (ORM library), I opted to use [Prisma](https://www.prisma.io/), main reason was this automatically creates the types needed, making it a safe option.

I followed the same module structure nestjs suggests, so under the `/src` folder you will see 2 base modules, which are `/votes` and `/countries` used to publish the endpoints needed to fetch data and make a votation.

Then, the `/prisma` folder just holds the `PrismaService` class exportation in order to use it across the other modules, as well as the `/seed` folder, which holds the logic to import the `PrismaService` and populate the tables for the initial application.

## Some Extra Comments

- I used [zod](https://zod.dev/) in both projects to handle validations, also, in the backend folder, I could use [nestjs-zod](https://www.npmjs.com/package/nestjs-zod) library to easily create `Data Transfer Objects` to put them as part of the swagger docs for endpoint responses
- Used [sass](https://sass-lang.com/) to style up the components, every folder has an `index.tsx` file that describes the component, and a `styles.module.scss` to define it's styles.
- Finally, I tried to keep it simple as the requirements and designs were pretty clear. I thought of maybe using some UI library like mui, or shadcn, nonetheless I preffer sometimes to build components by my own!

**Note:** I followed a PR process (even though it was just only me, approving myself lol) so it could be easier for you guys to follow the building path and commit history through separate steps, instead of seeing a huge line of commits pushed straight to main branch 😆. You just go to the Pull Requests tab in github and see all the closed ones!

**Another Note:** I thought of implementing some e2e and unit testing for the backend, also some docs for the frontend components, but I'm running out of time, and also the requirements do not ask for those, so I just decided not to go for it. It could be a kind of an overkill for such a small project? Maybe? 🤔 Just want to state out that I usually do testing for the features implemented, this always secure not breaking anything else when doing a change.

**Final Note:** Ha! Just wanted to thank you for giving me the opportunity to take the test. I hope you guys like it. Let me know if you got any doubts!
