FROM debian:12

RUN apt update && apt upgrade -y && apt install -y nodejs fortune fortunes-es locales-all && apt clean -y
RUN mkdir -p /var/www/fortune

COPY fortune.js /var/www/fortune

ENV LANG=es_ES.UTF-8 LANGUAGE=es_ES:es  LC_ALL=es_ES.UTF-8

CMD ["node", "/var/www/fortune/fortune.js" ]
