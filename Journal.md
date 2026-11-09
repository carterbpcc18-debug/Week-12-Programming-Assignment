# Registration System Journal

## Phase 1: Name & Username Validation

In this phase, I created two validation functions using regular expressions. The first function checks that names contain only English letters and spaces and are at least two characters long. The second function checks that usernames are between 3 and 12 characters and only contain letters, numbers, and underscores.

The practical difference between using start and end anchors and not using them is that anchors make sure the entire string follows the pattern. Without them, a regular expression could find a matching section inside a longer string and incorrectly accept it. Using anchors makes the username validation more accurate.