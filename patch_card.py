import re

with open('Portfolio/src/Components/Card/styles.css', 'r') as f:
    content = f.read()

# Remove display: none for section-title in media query
content = re.sub(r'\.section-title\s*\{\s*display:\s*none;\s*\}', r'.section-title {\n      font-size: 32px;\n      margin-bottom: 30px;\n    }', content)

# Ensure base section-title matches
content = re.sub(r'\.section-title\s*\{\s*margin-bottom:\s*3%;\s*\}', r'.section-title {\n    font-size: 32px;\n    margin-bottom: 30px;\n  }', content)

with open('Portfolio/src/Components/Card/styles.css', 'w') as f:
    f.write(content)
