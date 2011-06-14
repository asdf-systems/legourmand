#!/bin/bash

function error() {
	echo "[!] Error: $@"
	exit 1
}



rm -rf build
mkdir build
cd build
(cd ../node && \
./configure --prefix=../build && \
make -j$NUMCPU && \
make install) || error "Could not compile node.js"

PATH=$(pwd)/bin:$PATH
(make -j$NUMCPU -C ../node_modules/less) || error "Could not compile less"



