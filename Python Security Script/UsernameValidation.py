# Username Security Checker

def user_valid(username):

    # Rule 1: Max length 10
    if len(username) > 10:
        return "Invalid: Username must be 10 characters or less."

    # Rule 2: No Crocodiles
    if "<" in username or ">" in username:
        return "Invalid: Username cannot contain '<' or '>' characters."

    # Rule 3: Only alphanumeric
    if not username.isalnum():
        return "Invalid: Username must contain only letters and numbers."

    else:
        return "Valid username."



test_user = [
    "Alice123",      # valid
    "VeryLongName123",  # too long
    "Bob_123",       #underscore
    "Charlie>",      #contains >
    "Diana<3",       #contains <
    "Eve2025",       # valid
    "Tom!",          #special character
    "143123214314312412<>!"
]

for i in test_user:
    message = user_valid(i)
    print(f"{i}: {message}")
