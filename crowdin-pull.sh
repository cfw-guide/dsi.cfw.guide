#!/bin/bash

# Add new languages here, space separated and using the ID for `crowdin pull`
# `lol` (LOLCAT) is In-Context
LANGUAGES="de el es-ES fr hu id it ja ko pl pt-BR uk zh-CN zh-TW lol"

# Delete old translations (incase a page was removed/renamed)
rm -rf docs/*_*/

# Download new translations
ARG=''
for LANGUAGE in $LANGUAGES; do
	ARG+="-l $LANGUAGE "
done
crowdin pull $ARG

./fix\ in-context.sh
