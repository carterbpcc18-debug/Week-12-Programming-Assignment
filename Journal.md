# Registration System Journal

## Phase 1: Name & Username Validation

In this phase, I created two validation functions using regular expressions. The first function checks that names contain only English letters and spaces and are at least two characters long. The second function checks that usernames are between 3 and 12 characters and only contain letters, numbers, and underscores.

The practical difference between using start and end anchors and not using them is that anchors make sure the entire string follows the pattern. Without them, a regular expression could find a matching section inside a longer string and incorrectly accept it. Using anchors makes the username validation more accurate.

## Phase 2: Phone Verification & Promo Codes

In this phase, I added two more validation functions. The phone validation function accepts 10-digit phone numbers with hyphens, periods, or no separators. The promo code function checks whether the entered code matches SUMMER without worrying about capitalization.

The case-insensitive flag i is cleaner because it allows the regular expression to accept different combinations of uppercase and lowercase letters automatically. This avoids having to convert the string to lowercase or write multiple conditions to check different variations.

## Phase 3: Capturing Groups & Phone Reformatting

In this phase, I created a phone formatting function using three capturing groups. Each group captures a different section of the phone number: the area code, exchange, and line number. I used the replace method with backreferences to put the captured numbers into a standardized format.

The main difference between test() and capturing groups is that test() only checks whether a string matches a pattern and returns true or false. Capturing groups allow me to separate specific parts of the matched string and reuse them. This makes it possible to reformat information instead of only checking whether it is valid.

## Phase 4: Registration Pipeline Integration

In this phase, I created the processRegistration() function to combine all of my previous validation and formatting functions. It checks the user's name, username, and phone number, and collects error messages if any required information is invalid. If everything passes, it returns the user's information with a formatted phone number and indicates whether the promotional discount was applied.

Building and testing each regular expression separately made the final pipeline easier because I already knew that each individual function worked. Instead of repeating validation code, I could call the functions I had already created. This made the program more organized and easier to understand.