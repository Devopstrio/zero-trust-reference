.PHONY: help build up down seed test

help:
	@echo "Zero Trust Reference Architecture - Management Commands"
	@echo "----------------------------------------------------"
	@echo "build     : Build all containers"
	@echo "up        : Start all services"
	@echo "down      : Stop all services"
	@echo "simulate  : Simulate access requests"
	@echo "enforce   : Enforce reference policies"
	@echo "test      : Run system tests"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

simulate:
	python scripts/simulate/request_flow.py

enforce:
	python scripts/enforce/apply_baseline.py

test:
	pytest tests/
