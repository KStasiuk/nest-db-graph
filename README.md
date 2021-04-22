
# Before you started prepare DB
```
docker pull mysql:5
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=indesk_db -d  mysql:5 --character-set-server=utf8 --collation-server=utf8_general_ci
```
