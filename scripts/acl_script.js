# Script-Controlled ACL – Restrict Record Access Based on Field Value

## Project Overview

This project demonstrates a ServiceNow Access Control List (ACL) that restricts access to records based on a field value.

## Objective

To restrict access to sensitive Incident records and allow access only to authorized users.

## Technologies Used

- ServiceNow
- JavaScript
- ACL
- GitHub

## How It Works

1. A user tries to access an Incident record.
2. The ACL checks the sensitive field.
3. If the record is not sensitive, access is allowed.
4. If the record is sensitive, the user's authorization is checked.
5. Unauthorized users are denied access.

## Testing

The project will be tested using authorized and unauthorized users.

## Result

The scripted ACL restricts access to sensitive records based on the configured field value and user authorization.
