#!/bin/bash

if [ "$#" -ne 1 ] ; then
	echo "Usage: $0 <username>"
	exit 1
fi

mv toolbox toolbox_$1
zip -r toolbox_$1.zip toolbox_$1
mv toolbox_$1 toolbox
scp toolbox_$1.zip $1@asdf-systems.de:/var/www/projects.asdf-systems.de/gourmand/wordpress/wp-content/themes/
ssh $1@asdf-systems.de /var/www/projects.asdf-systems.de/gourmand/wordpress/wp-content/themes/update_toolbox.sh $1
rm toolbox_$1.zip
