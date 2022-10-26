# CS3141-RO1-team3 ReadMe
Created 10/18/2022 by MEG


## Contents 
-What to Install Prior to Cloning Repo
-Clone the Repository
-How to Start the Website on Your LocalHost
-How to Make/Commit Changes
-Misc GitHub Stuff

### What to Install Prior to Cloning Repo
Ensure you have node.js downloaded from the node website to make sure the `npm` commands work.
Inside the VS Code terminal, Powershell, etc, you will need to run the following commands to make sure the codebase will work on your computer 
**NOTE: These commands are for Windows OS**
    `npm install node`
    `npm install express`
    `npm install bootstrap`
    `npm install path`
    `npm install ejs`
    `npm install markdown`
    `npm install -g nodemon`
    
### Clone the Repository
The code base lives here: [GitHub Link](https://github.com/mhalonen02/CS3141-RO1-team3)
1. Click the blue "Code" button to open options for cloning 
2. Choose cloning option - if you do not have SSH keys already working on your computer, I would suggest using the HTTPS method and copy the link
3. Create a folder that you will be able to access easily that will store the codebase
4. Inside the new folder, right click and choose "Git Bash here" to open a bash terminal
5. Clone the codebase using the following command
    `git clone https://github.com/mhalonen02/CS3141-RO1-team3.git`
**NOTE: You may need to log into your Github and/or input your GitHub password here**
6. Open VS Code (or your editor of choice) and open the folder you created in #3
7. Ensure all files are opened properly

### How to Start the Website on Your LocalHost
1. Open VS Code integrated terminal (or any terminal and navigate to the folder with the code base)
2. Use the command `npm start` to begin OR `nodemon FoodWeb`
3. Open [LocalHost](http://localhost:8000/)
**NOTE: If you used `npm start`, any changes made in the code base need to be saved  and the server need to be restarted (i.e terminate the batch job and return `npm start` before they show up on the website**
**NOTE: If you are using `nodemon FoodWeb`, after making a change, save it and navigate to the FoodWeb.js file and save here as well. The terminal should show a restart of the server automatically. No need to terminate the batch and restart.

### How to Make/Commit Changes
Using VS Code:
1. Click on the Source Control button on the left-hand side panel
2. See all the changes you've made - delete as necessary 
3. Type in a small description of the changes
4. Click the Commit button >> say yes to Staging the changes and then Committing

Using Git Bash Terminal
1. Open Bash terminal and navigate to folder where code is located
2. Use the command `git commit -m 'your message'` to commit the changes
3. Use the command `git push -u origin master` to push to master branch
   ***I don't use this often so there might be problems here that I am not seeing**


### Misc GitHub Stuff
Before you begin working on the code, ALWAYS make sure you have the most up-to-date branch (master or otherwise)
1. Run command in terminal `git status`. 
2. If the status does not say the code is up to date, run the command `git pull origin master` 
3. You may need to run `git fetch` and/or set up a remote repo first if you get errors
