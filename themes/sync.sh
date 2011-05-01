#!/bin/bash
zip -r toolbox.zip toolbox
scp toolbox.zip asdf-systems.de:/var/www/projects.asdf-systems.de/gourmand/wordpress/wp-content/themes/
ssh asdf-systems.de /var/www/projects.asdf-systems.de/gourmand/wordpress/wp-content/themes/update_toolbox.sh
