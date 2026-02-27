# how did I make this repository?

## initial file wrangling
to start off this repository, i just made it through [github desktop](https://desktop.github.com/download/). it's free, easy to handle for beginners. after you've set up your account with github, i just added a new repository, called it `jspsych-dummy-repo`, with an MIT license, and it generated this. i looked up a handy .gitignore file for Node [here](https://github.com/github/gitignore/blob/main/Node.gitignore), and once we're done with that, we're off to the races.

npm handles distribution of jsPsych packages, and since we're creating a monorepo with multiple packages, we'll go ahead and instantiate a `package.json` file in this directory. i simply just yoinked [jsPsych's `package.json`](https://github.com/jspsych/jsPsych/blob/main/package.json), removing most of the scripts except for test as we won't need them all (the others are mostly used to maintain the repository). this gives us all the dependencies we will need. save your changes (make sure you do this every time you make an edit to ensure that nothing bad will happen when you try and commit). 

now, run `npm i` in the root directory to generate our lockfile `package-lock.json`. while `package.json` acts as a basic file for how our repository is ordered, describing structure and our dependencies, the lockfile ensures that our repository will have the same state when being installed on all machines, listing all necessary dependencies for all of our packages.

run `npx @changesets/cli init` to create changeset folder.