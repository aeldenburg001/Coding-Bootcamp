# Unit 16: Project 2 Examples

## Examples/project-with-handlebars-apiroute-chai
> listing a set of data from an external api (OMDB) and set it up so it can be tested.

We worked through adding a page to pull a list of movies from the OMDB api and put them in handlebars. We used the existing project starter code and:

    
 1. Added a test for the "/api/movies" route we're going to create:
    [project-with-handlebars-apiroute-chai/test/apiRoutes.js](project-with-handlebars-apiroute-chai/test/apiRoutes.js)

 2. Added an `/api/movies` route to apiRoutes to get the list of movies:
    [project-with-handlebars-apiroute-chai/routes/apiRoutes.js](project-with-handlebars-apiroute-chai/routes/apiRoutes.js)

 3. Added a `movies` handlebars template to show the list of movies:
    [project-with-handlebars-apiroute-chai/views/movies.handlebars](project-with-handlebars-apiroute-chai/views/movies.handlebars)
  
 4. Added a `/movies` route to htmlRoutes:
     [project-with-handlebars-apiroute-chai/routes/htmlRoutes.js](project-with-handlebars-apiroute-chai/routes/htmlRoutes.js)


