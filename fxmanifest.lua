fx_version "cerulean"

author "ANTUNES#6541"
description "tw1st0R - Vehicles"
version '1.0.0'

game "gta5"

client_script '@tw-lib/client/cl_rpc.js'
client_script '@tw-lib/client/cl_ui.js'
client_script '@tw-lib/client/cl_interface.js'
client_script 'dist/client/**/*.js'
client_script 'client/cl_*.lua'
server_script '@tw-lib/server/sv_rpc.js'
server_script '@tw-lib/server/sv_sql.js'
server_script 'dist/server/**/*.js'
server_script 'server/sv_*.lua'