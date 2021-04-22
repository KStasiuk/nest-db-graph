
# Before you started prepare DB
```
docker pull mysql:5
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=nest_db -d  mysql:5 --character-set-server=utf8 --collation-server=utf8_general_ci
```
# How to add user
```
mutation {
    createUser( name: "Some name", description: "aaaa", age: "22" ) {
        id  
        name
        description
        age
    }
}
```

# Get user list
```
query{
  users{
    id
    name
    age
    description
  }
}
```
