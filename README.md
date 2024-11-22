# This is a web project
It is used in splity app when there is email or password change

# How to run
1. Provide .env variables in .env in source directory (.env.template contains required variables)
2. - If you have `npm` run `npm install` and `npm start` in the console
   - If you want to run it as a docker image copy the commands below into the console
   ``docker build --build-arg REACT_APP_SUPABASE_URL=PROVIDE_VALUE \
             --build-arg REACT_APP_SUPABASE_ANON_KEY=PROVIDE_VALUE \
             -t splity-web .
    ``
    ** REPLACE PROVIDE_VALUE with actual values **
    `
    docker run -p 3000:80 splity-web
    `