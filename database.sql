https://dbdiagram.io/d/boxchat-64cc9e1602bd1c4a5e3b3fe1
Table user {
  id integer
  email varchar
  password varchar
  fullname varchar
}

Table messages {
  id integer
  message_content varchar
  user_send integer
  user_receive integer
  deleted integer
}



Ref: "user"."id" < "messages"."user_send"

Ref: "user"."id" < "messages"."user_receive"