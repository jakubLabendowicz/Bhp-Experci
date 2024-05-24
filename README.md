# Starting

1. Execute: docker compose up

# Modifiyng

1. Edit the contents of the app or studio directory. PROTIP: Can develop in a non-docker environment and move changes to the app or studio directory
2. Execute: docker compose up -d --no-deps --build webapp OR docker compose up -d --no-deps --build studio
