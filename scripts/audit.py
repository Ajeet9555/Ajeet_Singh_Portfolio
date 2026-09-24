import os
import re

print("==================================================")
print("       PORTFOLIO PRODUCTION AUDIT SUITE           ")
print("==================================================")

public_dir = os.path.abspath("public")

found_assets = set()
asset_pattern = re.compile(r'/assets/[a-zA-Z0-9_\-\.\/]+')

code_files = []
for root, dirs, files in os.walk("."):
    if any(d in root for d in ["node_modules", "dist", ".git"]):
        continue
    for f in files:
        if f.endswith((".ts", ".tsx", ".html", ".json", ".txt", ".xml", ".md")):
            code_files.append(os.path.join(root, f))

asset_usage = {}
for filepath in code_files:
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            matches = asset_pattern.findall(content)
            for m in matches:
                clean = re.sub(r'[\'"\);\n,>]+$', '', m)
                if clean not in asset_usage:
                    asset_usage[clean] = []
                asset_usage[clean].append(filepath)
    except Exception as e:
        print(f"Error reading {filepath}: {e}")

print("\n--- 1. ASSET CHECK ---")
missing_assets = []
for asset, files in sorted(asset_usage.items()):
    local_path = os.path.join(public_dir, asset.lstrip("/"))
    exists = os.path.exists(local_path)
    status = "PASS" if exists else "FAIL"
    print(f"[{status}] {asset}")
    if not exists:
        missing_assets.append((asset, files))

if missing_assets:
    print("\n[CRITICAL] MISSING ASSETS FOUND:")
    for m, files in missing_assets:
        print(f"  FAILED ASSET: {m}\n  Referenced in: {set(files)}")
else:
    print("\n[PASS] All referenced assets exist on disk.")

print("\n--- 2. PERSONAL DATA & PROFILE PIC CHECK ---")
with open("src/data/personal.ts", "r", encoding="utf-8") as f:
    personal_content = f.read()

profile_pic_match = re.search(r'profilePic:\s*["\']([^"\']+)["\']', personal_content)
if profile_pic_match:
    profile_pic = profile_pic_match.group(1)
    local_pic = os.path.join(public_dir, profile_pic.lstrip("/"))
    if os.path.exists(local_pic):
        print(f"[PASS] profilePic path '{profile_pic}' exists.")
    else:
        print(f"[FAIL] profilePic path '{profile_pic}' DOES NOT EXIST!")

resume_match = re.search(r'resumeUrl:\s*["\']([^"\']+)["\']', personal_content)
if resume_match:
    resume_url = resume_match.group(1)
    local_resume = os.path.join(public_dir, resume_url.lstrip("/"))
    if os.path.exists(local_resume):
        print(f"[PASS] resumeUrl path '{resume_url}' exists.")
    else:
        print(f"[FAIL] resumeUrl path '{resume_url}' DOES NOT EXIST!")

print("\n--- 3. SEO & METADATA CHECK ---")
with open("index.html", "r", encoding="utf-8") as f:
    index_html = f.read()

checks = {
    "Title tag": "<title>" in index_html and "</title>" in index_html,
    "Meta title": 'name="title"' in index_html,
    "Meta description": 'name="description"' in index_html,
    "Canonical link": 'rel="canonical"' in index_html,
    "Open Graph title": 'property="og:title"' in index_html,
    "Open Graph description": 'property="og:description"' in index_html,
    "Open Graph image": 'property="og:image"' in index_html,
    "Open Graph url": 'property="og:url"' in index_html,
    "Twitter card": 'name="twitter:card"' in index_html,
    "Twitter title": 'name="twitter:title"' in index_html,
    "Twitter description": 'name="twitter:description"' in index_html,
    "Twitter image": 'name="twitter:image"' in index_html,
    "No localhost/127.0.0.1 in metadata": "localhost" not in index_html and "127.0.0.1" not in index_html,
}

for name, ok in checks.items():
    print(f"[{'PASS' if ok else 'FAIL'}] {name}")

robots_path = os.path.join(public_dir, "robots.txt")
sitemap_path = os.path.join(public_dir, "sitemap.xml")

print(f"[{'PASS' if os.path.exists(robots_path) else 'FAIL'}] robots.txt exists")
print(f"[{'PASS' if os.path.exists(sitemap_path) else 'FAIL'}] sitemap.xml exists")

print("\n--- 4. PROJECTS DATA CHECK ---")
with open("src/data/projects.ts", "r", encoding="utf-8") as f:
    projects_content = f.read()

featured_count = len(re.findall(r'featured:\s*true', projects_content))
print(f"[{'PASS' if featured_count == 4 else 'FAIL'}] Featured projects count: {featured_count} (Expected: 4)")

print("\n--- 5. CERTIFICATES DATA CHECK ---")
with open("src/data/certificates.ts", "r", encoding="utf-8") as f:
    certs_content = f.read()

cert_count = len(re.findall(r'id:\s*["\']', certs_content))
print(f"Total certificates count: {cert_count}")

print("\n--- 6. EXPERIENCE DATA CHECK ---")
with open("src/data/experience.ts", "r", encoding="utf-8") as f:
    exp_content = f.read()

exp_count = len(re.findall(r'id:\s*["\']', exp_content))
print(f"[{'PASS' if exp_count == 2 else 'FAIL'}] Internships count: {exp_count} (Expected: 2)")

print("\n--- 7. SOCIAL LINKS CHECK ---")
social_keys = ["linkedin", "github", "email", "phone"]
for key in social_keys:
    m = re.search(rf'{key}:\s*["\']([^"\']+)["\']', personal_content)
    if m:
        print(f"[PASS] {key}: {m.group(1)}")
    else:
        print(f"[FAIL] {key} missing in personal.ts")

print("==================================================")
