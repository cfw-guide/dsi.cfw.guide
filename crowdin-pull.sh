#!/bin/bash

# Add new languages here, space separated and using the ID for `crowdin pull`
# `lol` (LOLCAT) is In-Context
LANGUAGES="es-ES fr hu it pl zh-CN lol"

for LANGUAGE in $LANGUAGES; do
	echo $LANGUAGE
	crowdin pull -l $LANGUAGE
done
