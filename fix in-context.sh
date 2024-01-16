#!/bin/bash

# Fix in-context images breaking site build
sed -i -r 's/\([^)]+\)/(http:\/\/0.0.0.0)/' docs/translate/*.md
