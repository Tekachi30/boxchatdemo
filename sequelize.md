npx sequelize-cli model:generate --name user --attributes email:string,password:string,fullname:string

npx sequelize-cli model:generate --name message --attributes message_content:string,user_send:integer,user_receive:integer,deleted:integer




npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name seed-event 
npx sequelize-cli db:seed:all
