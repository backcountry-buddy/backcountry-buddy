FROM codekitchen/dinghy-http-proxy
RUN apt-get -y update && apt-get -y install iputils-ping dnsutils
COPY docker-entry.sh /
COPY Procfile /app/
ENTRYPOINT /docker-entry.sh
CMD ["forego", "start", "-r"]
