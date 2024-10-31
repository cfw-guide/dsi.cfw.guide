#!/bin/bash

# Add new languages here, space separated and using the ID for `crowdin pull`
# `lol` (LOLCAT) is In-Context
LANGUAGES="de el es-ES fr hu it ja pl ro uk zh-CN lol"

# Delete old translations (incase a page was removed/renamed)
rm -rf docs/*_*/

# Download new translations
ARG=''
for LANGUAGE in $LANGUAGES; do
	ARG+="-l $LANGUAGE "
done
crowdin pull $ARG

./fix\ in-context.sh
