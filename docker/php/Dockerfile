FROM php:8-fpm-alpine

MAINTAINER Salma BEN HADJ ALI <salma.benhadjali.io@gmail.com>

RUN apk update \
    && apk add git \
        curl \
        vim \
        wget \
        bash \
        zlib \
        zlib-dev \
        patch \
        linux-headers \
        icu-dev

# Set Git global config
# RUN git config --global user.email ${GITHUB_EMAIL} \
#     && git config --global user.name ${GITHUB_NAME}
RUN git config --global user.email "salma.benhadjali.io@gmail.com" \
    && git config --global user.name "Salma BEN HADJ ALI"

# install php dependencies
RUN apk add --no-cache $PHPIZE_DEPS \
    && pecl install -f xdebug \
    && docker-php-ext-install intl opcache bcmath sockets \
    && docker-php-ext-enable xdebug intl opcache bcmath sockets \
    && rm -rf /var/lib/apt/lists/*

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer selfupdate

# install symfony
# RUN curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.alpine.sh' | php -- --install-dir=/usr/local/bin --filename=symfony
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony*/bin/symfony /usr/local/bin/symfony

# Set timezone
ENV TIMEZONE=Etc/UCT
RUN ln -snf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime && echo ${TIMEZONE} > /etc/timezone \
    && printf '[PHP]\ndate.timezone = "%s"\n', ${TIMEZONE} > /usr/local/etc/php/conf.d/tzone.ini \
    && "date"

CMD ["php-fpm", "-F"]

COPY . /var/www/app
WORKDIR /var/www/app

EXPOSE 9000
    