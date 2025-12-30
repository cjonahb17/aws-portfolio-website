# Build and Deploy Your Professional Portfolio on AWS

## Project Objective
To design and deploy a personal portfolio website showcasing skills, projects, and education using HTML, CSS, and JavaScript, and host it on AWS using Amazon S3 and CloudFront.

---

## Technologies Used
- HTML
- CSS
- JavaScript
- Amazon S3 (Static Website Hosting)
- Amazon CloudFront
- AWS IAM

---

## Website Sections
- About Me
- Skills
- Projects
- Education
- Contact (LinkedIn, GitHub, Email)

---

## Project Structure
aws-portfolio-website/
├── index.html
├── style.css
├── script.js
├── profile.jpg

---

## AWS Deployment Steps

### Step 1: Create an S3 Bucket
- Open AWS Console → S3
- Create a bucket with a globally unique name
- Choose a region
- Disable “Block all public access”
- Acknowledge the warning

---

### Step 2: Upload Website Files
- Upload all HTML, CSS, JS, and image files to the bucket root

---

### Step 3: Enable Static Website Hosting
- Go to bucket Properties
- Enable Static website hosting
- Set `index.html` as the index document

---

### Step 4: Configure Public Access (Bucket Policy)
Add the following bucket policy to allow public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::<bucket-name>/*"
    }
  ]
}
```
##Step 5: Verify S3 Website
-Use the S3 static website endpoint
-Confirm the site loads correctly on desktop

---

##Step 6: Configure CloudFront
-Create a CloudFront distribution
-Set the S3 website endpoint as the origin
-Enable “Redirect HTTP to HTTPS”
-Set default root object to index.html
-Wait for deployment to complete

---

Public Access

The website is accessible via a CloudFront HTTPS URL, ensuring compatibility across desktop and mobile devices.

---

Security and Best Practices
-Followed IAM least-privilege principle
-Used S3 bucket policy for read-only public access
-No credentials stored in code
-Used CloudFront for secure HTTPS access

---

Author
Jonah Blessy C
