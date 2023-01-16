FROM python:3.10

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install sqlite3 -y
RUN mkdir /app
WORKDIR /app
COPY . .

RUN pip3 install flask
EXPOSE 5000
ENTRYPOINT [ "python" ]
CMD [ "login.py" ]




