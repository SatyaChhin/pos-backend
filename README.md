# Knex.js Migration Documentation

## Introduction

This document provides instructions for managing database migrations using Knex.js in the project.

## Prerequisites

Before running migrations, ensure that you have:

- **Node.js** installed
- **Knex.js** and **Database Client** (e.g., MySQL, PostgreSQL) installed

## Setup

1. **Install Knex.js CLI Globally** (if not already installed):
   
   ```bash
   npm install -g knex
   
2. **Run create Table:
   ```bash
   npx knex migrate:make create_your_table_name
   
3. **Run all migration:
   ```bash
   npx knex migrate:latest

4. **Rollback Migrations (if needed):
   ```bash
   npx knex migrate:latest
   npx knex migrate:rollback --all


