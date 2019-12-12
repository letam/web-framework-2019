#!/usr/bin/env bash


function install_server_requirements {
    python3 -m venv venv
    source venv/bin/activate
    pip install -U pip
    pip install -r requirements.txt
    python server/manage.py migrate
    deactivate
}


function install_gui_requirements {
    cd gui
    yarn
    cd -
}


function install_project_requirements {
    yarn
}


function install {
    install_server_requirements
    install_gui_requirements
    install_project_requirements
}


install
