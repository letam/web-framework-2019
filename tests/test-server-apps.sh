#!/usr/bin/env bash

APPS=`ls server/apps`
ARGV=""
for x in $APPS; do
    ARGV="$ARGV apps.$x.tests"
done

echo -e "Executing: 'venv/bin/python server/manage.py test $ARGV' ...\n"
venv/bin/python server/manage.py test $ARGV
