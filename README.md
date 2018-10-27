# Fizz Documentation
Guide for contributing to fizz documentation

## Setting up on localhost

  1. ```npm install --global gatsby-cli``` -- Install Gatsby
  2. `gatsby new fizz-console-docs https://github.com/hassantariq-carameltech/fizz-console-docs.git` -- Setup Project Locally
  3. `cd fizz-console-docs` -- Navigate to project folder
  4. `gatsby develop` -- Run the Project
  5. Navigate to `http:localhost:8000` -- the project should appear

## Contributing to documentation
* Edit Page: Go to `src/pages/what_is_fizz`
    * Change the title from 'What is Fizz' to 'What is Fizz Docs'. It should reflect on `localhost:8000`
    * Try adding an image and code snippet -- see `src/pages/overview.md`
    * Try editing site wide meta information -- open `src/gatsby-config.js` and change the value of `LANGUAGES` to `40` 
* Add New Page: Add a new file `my_new_page.md` in `src/pages` directory with following content. 
```
---
title: "My New Page"
date: "2017-08-10"
order: 4
---

#My First Heading

Sample description for new page
```
* Restart the server and `localhost:8000` would be showing `My New Page` link in navigation. Click on the `My New Page`, you will be navigated to `localhost:8000/my_new_page`
* Please note that `.md` files have two parts
    * File Meta: 
        * `title` -- Title of the Page that would appear in navigation
        * `order` -- position number in navigation (4 because there were already three md files in the project).
        *  `date` -- Optional date that would be displayed on page (not supported currently)
    *  Content: Anything below second `---` in `.md` files can be written using standard markdown syntax. A good tool for writing that is [Dillinger](https://dillinger.io/)
