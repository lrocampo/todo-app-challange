# todo-app-challange
I am challenged to do a full-stack SPA using Spring Boot and React.

### What is this app about
Todo App is a Single Page web Application, i.e. frontend and backend are different apps. It is developed on Spring Boot in the backened and React framework in the frontend. The backend app exposes a REST API that is the way in which the frontend app communicates with the backend, letting to do CRUD operations. The backend app is separated into layers (Task controller, task service and task repository). The app is fully responsive.

With this to do app, you can create, edit and delete to-do items or tasks as also to mark them as completed, storing everything on a PostgreSQL database.
This project has a launch.sh script which can run the java .jar file (containing the Spring Boot backend) and the react front-end.

Finally, as I received the assignment for this project I had three days to plan the project, select the technologies and start coding. After these days, I can say it was a very fun challange. I felt that I had to work hard because I didn't have much time to go through the project and I felt I left my comfort zone. A true challange.

### Technologies
* PostgreSQL 12.9
* openjdk version 11.0.14
* openjdk Runtime Environment (build 11.0.14+9)
* node v14.19.1
* npm v6.14.16
* react v17.0.2
* VSCode and IntelliJ Ultimate for editing.

### Install instructions
Now that technologies were listed before, please ensure that your system has all the needed software.
To run the whole project, open a terminal and run the `launch.sh` script as `./launch.sh`
If permission to execute is denied, run `chmod +x launch.sh`
