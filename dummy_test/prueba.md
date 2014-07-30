|   | passed | failed | pending | TOTAL |
|---|-------:|-------:|--------:|------:|
| Features (US) | 5 | 3 | 1 | 9 |
| Scenarios (TC) | 10 | 4 | 28 | 42 |
| Variants (DS) | 10 | 9 | 51 | 70 |

# TOC
- [Feature: Contextual Menu](#feature-contextual-menu)
  - [Scenario: Contextual menu from not compressed file](#feature-contextual-menu-scenario-contextual-menu-from-not-compressed-file)
  - [Scenario: Contextual menu from compressed file](#feature-contextual-menu-scenario-contextual-menu-from-compressed-file)
  - [Scenario: Contextual menu from folder](#feature-contextual-menu-scenario-contextual-menu-from-folder)
  - [Scenario: Contextual menu with several elements selected](#feature-contextual-menu-scenario-contextual-menu-with-several-elements-selected)
  - [Scenario: Contextual menu not showed in sidebar](#feature-contextual-menu-scenario-contextual-menu-not-showed-in-sidebar)
  - [Scenario: Contextual menu without selection](#feature-contextual-menu-scenario-contextual-menu-without-selection)
- [Feature: Rename elements](#feature-rename-elements)
- [Feature: Performance: Desktop Page Load](#feature-performance-desktop-page-load)
  - [Scenario: Desktop Page Load should be less than 3 seconds](#feature-performance-desktop-page-load-scenario-desktop-page-load-should-be-less-than-3-seconds)
- [Feature: Files Application](#feature-files-application)
  - [Scenario: Applications Menu shows the Files app](#feature-files-application-scenario-applications-menu-shows-the-files-app)
- [Feature: browse files](#feature-browse-files)
  - [Scenario: List elements when open files application](#feature-browse-files-scenario-list-elements-when-open-files-application)
  - [Scenario: List elements when refresh files application](#feature-browse-files-scenario-list-elements-when-refresh-files-application)
  - [Scenario: Back and forward button disabled when enter home the first time](#feature-browse-files-scenario-back-and-forward-button-disabled-when-enter-home-the-first-time)
- [Feature: Files](#feature-files)
  - [Scenario: Go to Files page](#feature-files-scenario-go-to-files-page)
- [Feature: Captcha](#feature-captcha)
  - [Scenario: 3 attempts of login with wrong credentials makes Captcha appear](#feature-captcha-scenario-3-attempts-of-login-with-wrong-credentials-makes-captcha-appear)
  - [Scenario: User B, that has not failed any attempt of login, can login without captcha after user A has been failing for more than 3 times](#feature-captcha-scenario-user-b-that-has-not-failed-any-attempt-of-login-can-login-without-captcha-after-user-a-has-been-failing-for-more-than-3-times)
  - [Scenario: User cannot login if he/she does not fill captcha correctly](#feature-captcha-scenario-user-cannot-login-if-heshe-does-not-fill-captcha-correctly)
  - [Scenario: User can login if he/she fills captcha correctly](#feature-captcha-scenario-user-can-login-if-heshe-fills-captcha-correctly)
- [Feature: Performance: Login Page Load](#feature-performance-login-page-load)
  - [Scenario: Login Page Load should be less than 0.5 seconds](#feature-performance-login-page-load-scenario-login-page-load-should-be-less-than-05-seconds)
- [Feature: Login](#feature-login)
  - [Scenario: Incorrect login](#feature-login-scenario-incorrect-login)
  - [Scenario: Correct login](#feature-login-scenario-correct-login)

<a name="feature-contextual-menu"></a>
## Feature: Contextual Menu
- As a user
- I want have a contextual menu in the files application

---
<a name="feature-contextual-menu-scenario-contextual-menu-from-not-compressed-file"></a>
### Scenario: Contextual menu from not compressed file
<pre><code><b>Given:</b> There is one file not compressed
<b> When:</b> I do right click in the file
<b> Then:</b> I obtain the not compressed menu elements: Open,Rename</code></pre>

<a name="feature-contextual-menu-scenario-contextual-menu-from-compressed-file"></a>
### Scenario: Contextual menu from compressed file
<pre><code><b>Given:</b> There is one compressed file
<b> When:</b> I do right click in the file
<b> Then:</b> I obtain the compressed menu elements: Open,Rename</code></pre>

<a name="feature-contextual-menu-scenario-contextual-menu-from-folder"></a>
### Scenario: Contextual menu from folder
<pre><code><b>Given:</b> There is one folder
<b> When:</b> I do right click in the folder
<b> Then:</b> I obtain the folder menu elements: Open,Rename</code></pre>

<a name="feature-contextual-menu-scenario-contextual-menu-with-several-elements-selected"></a>
### Scenario: Contextual menu with several elements selected
<pre><code><b>Given:</b> There are several elements selected
<b> When:</b> I do right click in the folder
<b> Then:</b> I obtain the folder menu elements: Open</code></pre>

<a name="feature-contextual-menu-scenario-contextual-menu-not-showed-in-sidebar"></a>
### ~~Scenario: Contextual menu not showed in sidebar~~

<a name="feature-contextual-menu-scenario-contextual-menu-without-selection"></a>
### ~~Scenario: Contextual menu without selection~~

<a name="feature-rename-elements"></a>
## ~~Feature: Rename elements~~
- As a user
- I want browse the files and folders available

---

<a name="feature-performance-desktop-page-load"></a>
## Feature: Performance: Desktop Page Load

---
<a name="feature-performance-desktop-page-load-scenario-desktop-page-load-should-be-less-than-3-seconds"></a>
### Scenario: Desktop Page Load should be less than 3 seconds
<pre><code><b>Given:</b> the url of the desktop
<b> When:</b> load the page
<b> Then:</b> the page is loaded in less than 3 seconds</code></pre>

<a name="feature-files-application"></a>
## Feature: Files Application
- As a user
- I want to be able to open Files app from menu

---
<a name="feature-files-application-scenario-applications-menu-shows-the-files-app"></a>
### Scenario: Applications Menu shows the Files app
<pre><code><b>Given:</b> The app is called Files
<b> When:</b> Open menu app and select Files
<b> Then:</b> Check the app opened is Files</code></pre>

<a name="feature-browse-files"></a>
## Feature: browse files
- As a user
- I want browse the files and folders available

---
<a name="feature-browse-files-scenario-list-elements-when-open-files-application"></a>
### Scenario: List elements when open files application
<pre><code><b>Given:</b> There are 150 elements in a folder
<b> When:</b> I open the folder
<b> Then:</b> I see 150 elements</code></pre>

<a name="feature-browse-files-scenario-list-elements-when-refresh-files-application"></a>
### Scenario: List elements when refresh files application
<pre><code><b>Given:</b> There are 150 elements in a folder
<b> When:</b> I open the folder
<b> Then:</b> I see 150 elements</code></pre>

<a name="feature-browse-files-scenario-back-and-forward-button-disabled-when-enter-home-the-first-time"></a>
### Scenario: Back and forward button disabled when enter home the first time
<pre><code><b> When:</b> I open files application
<b> Then:</b> The back and forward buttons are disabled</code></pre>

<a name="feature-files"></a>
## Feature: Files
- As a user
- I want to see on a webpage the files on a directory

---
<a name="feature-files-scenario-go-to-files-page"></a>
### Scenario: Go to Files page
<pre><code><b>Given:</b> Go to Files page
<b> When:</b> The page is loaded
<b> Then:</b> Check tittle</code></pre>

<a name="feature-captcha"></a>
## Feature: Captcha
- As a user
- I want to get a captcha after 3 failed attempts of login and not be able to do login if I dont fill captcha correctly

---
<a name="feature-captcha-scenario-3-attempts-of-login-with-wrong-credentials-makes-captcha-appear"></a>
### Scenario: 3 attempts of login with wrong credentials makes Captcha appear
<pre><code><b>Given:</b> A user with the fake username failedlogin and fake password failedlogin
<b> When:</b> tries 3 attempts of login
<b> Then:</b> and remains in the Login page but a Captcha appears</code></pre>

<a name="feature-captcha-scenario-user-b-that-has-not-failed-any-attempt-of-login-can-login-without-captcha-after-user-a-has-been-failing-for-more-than-3-times"></a>
### ~~Scenario: User B, that has not failed any attempt of login, can login without captcha after user A has been failing for more than 3 times~~

<a name="feature-captcha-scenario-user-cannot-login-if-heshe-does-not-fill-captcha-correctly"></a>
### ~~Scenario: User cannot login if he/she does not fill captcha correctly~~

<a name="feature-captcha-scenario-user-can-login-if-heshe-fills-captcha-correctly"></a>
### ~~Scenario: User can login if he/she fills captcha correctly~~

<a name="feature-performance-login-page-load"></a>
## Feature: Performance: Login Page Load

---
<a name="feature-performance-login-page-load-scenario-login-page-load-should-be-less-than-05-seconds"></a>
### Scenario: Login Page Load should be less than 0.5 seconds
<pre><code><b>Given:</b> the url of the Login Page
<b> When:</b> load the page
<b> Then:</b> the page is loaded in less than 0.5 seconds</code></pre>

<a name="feature-login"></a>
## Feature: Login
- As a user
- I want to do login in the platform

---
<a name="feature-login-scenario-incorrect-login"></a>
### Scenario: Incorrect login
**Variant #1**
<pre><code><b>Given:</b> the username qa.user and password 123123123
<b> When:</b> I do a login
<b> Then:</b> I remain in login page</code></pre>

**Variant #2**
<pre><code><b>Given:</b> the username qa.userXXX and password super1q2w3e4r5t6y7u8i9o0p
<b> When:</b> I do a login
<b> Then:</b> I remain in login page</code></pre>

**Variant #3**
<pre><code><b>Given:</b> the username qa.user and password  super1q2w3e4r5t6y7u8i9o0p 
<b> When:</b> I do a login
<b> Then:</b> I remain in login page</code></pre>

**Variant #4**
<pre><code><b>Given:</b> the username qa.user and password 
<b> When:</b> I do a login
<b> Then:</b> I remain in login page</code></pre>

**Variant #5**
<pre><code><b>Given:</b> the username  and password super1q2w3e4r5t6y7u8i9o0p
<b> When:</b> I do a login
<b> Then:</b> I remain in login page</code></pre>

<a name="feature-login-scenario-correct-login"></a>
### Scenario: Correct login
**Variant #1**
<pre><code><b>Given:</b> the username qa.user and password super1q2w3e4r5t6y7u8i9o0p
<b> When:</b> I do a login
<b> Then:</b> I enter to eyeOS main page</code></pre>

**Variant #2**
<pre><code><b>Given:</b> the username qA.uSeR and password super1q2w3e4r5t6y7u8i9o0p
<b> When:</b> I do a login
<b> Then:</b> I enter to eyeOS main page</code></pre>



---
# FAILURES
- Feature: Performance: Desktop Page Load | Scenario: Desktop Page Load should be less than 3 seconds | Then: the page is loaded in less than 3 seconds
- Feature: Files | Scenario: Go to Files page | Then: Check tittle
- Feature: Login | Scenario: Incorrect login | Variant #1 | Then: I remain in login page
- Feature: Login | Scenario: Incorrect login | Variant #2 | Then: I remain in login page
- Feature: Login | Scenario: Incorrect login | Variant #3 | Then: I remain in login page
- Feature: Login | Scenario: Incorrect login | Variant #4 | Then: I remain in login page
- Feature: Login | Scenario: Incorrect login | Variant #5 | Then: I remain in login page
- Feature: Login | Scenario: Correct login | Variant #1 | Then: I enter to eyeOS main page
- Feature: Login | Scenario: Correct login | Variant #2 | Then: I enter to eyeOS main page

