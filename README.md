# MongoDB $inc Operator Issue

This repository demonstrates an uncommon error related to the MongoDB `$inc` operator. The issue arises when attempting to increment a numeric field that doesn't exist.  The `$inc` operator, as currently implemented, does not create the field if it is missing; instead, it silently fails. This can lead to unexpected and difficult-to-debug issues.

The `bug.js` file shows the incorrect usage of `$inc`, while `bugSolution.js` provides a corrected version.

## Solution
The solution involves checking for the existence of the field before attempting to increment it. If the field doesn't exist, it should be created with an initial value before using `$inc`.
