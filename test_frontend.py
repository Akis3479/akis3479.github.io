from playwright.sync_api import sync_playwright

def test_loading_screen():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Go to preview server (runs on port 4173 usually)
        page.goto("http://localhost:4173")

        # Take a screenshot as soon as possible to see loading screen
        page.screenshot(path="loading.png")

        # Wait a bit
        page.wait_for_timeout(2000)

        # Take a screenshot after it might have loaded
        page.screenshot(path="loaded.png")

        browser.close()

if __name__ == "__main__":
    test_loading_screen()
