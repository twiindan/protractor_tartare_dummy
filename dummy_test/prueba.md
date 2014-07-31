Using the selenium server at http://localhost:4444/wd/hub


|   | passed | failed | pending | TOTAL |
|---|-------:|-------:|--------:|------:|
| Features (US) | 3 | 5 | 2 | 10 |
| Scenarios (TC) | 6 | 8 | 28 | 42 |
| Variants (DS) | 6 | 13 | 51 | 70 |

# TOC
- [Feature: Contextual Menu](#feature-contextual-menu)
  - [Scenario: Contextual menu from not compressed file](#feature-contextual-menu-scenario-contextual-menu-from-not-compressed-file)
  - [Scenario: Contextual menu from compressed file](#feature-contextual-menu-scenario-contextual-menu-from-compressed-file)
  - [Scenario: Contextual menu from folder](#feature-contextual-menu-scenario-contextual-menu-from-folder)
  - [Scenario: Contextual menu with several elements selected](#feature-contextual-menu-scenario-contextual-menu-with-several-elements-selected)
  - [Scenario: Contextual menu not showed in sidebar](#feature-contextual-menu-scenario-contextual-menu-not-showed-in-sidebar)
  - [Scenario: Contextual menu without selection](#feature-contextual-menu-scenario-contextual-menu-without-selection)
- [Feature: Create folder](#feature-create-folder)
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
- [Feature: Rename elements](#feature-rename-elements)
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
### _Scenario: Contextual menu not showed in sidebar_
<pre><code><b>Given:</b> There are a files application opened
<b> When:</b> I do right click in the sidebar
<i><b> Then:</b> No contextual menu is showed</i></code></pre>


<a name="feature-contextual-menu-scenario-contextual-menu-without-selection"></a>
### _Scenario: Contextual menu without selection_
<pre><code><i><b>Given:</b> Not There are elements selected</i>
<i><b> When:</b> I do right click in the folder without select any element</i>
<i><b> Then:</b> I obtain the folder menu elements: New folder,Refresh</i></code></pre>


<a name="feature-create-folder"></a>
## _Feature: Create folder_
- As a user
- I want browse the files and folders available

---
<a name="feature-create-folder-scenario-create-a-folder-using-contextual-menu"></a>
### _Scenario: Create a folder using contextual menu_
<pre><code><i><b>Given:</b> Not exist the element with name folder_testing</i>
<i><b> When:</b> I create a new folder with name folder_testing using the contextual menu</i>
<i><b> Then:</b> A new folder is created with name "New Folder"</i></code></pre>


<a name="feature-create-folder-scenario-create-a-folder-using--menu"></a>
### _Scenario: Create a folder using "+" menu_
<pre><code><i><b>Given:</b> Not exist the element with name folder_testing</i>
<i><b> When:</b> I create a new folder with name folder_testing using the "+" menu</i>
<i><b> Then:</b> A new folder is created with name "New Folder"</i></code></pre>


<a name="feature-create-folder-scenario-create-a-folder-with-case-sensitive"></a>
### _Scenario: Create a folder with case sensitive_
**_Variant #1_**
<pre><code><i><b>Given:</b> Exist the file with name folder_testing</i>
<i><b> When:</b> I rename the file with name Folder_testing</i>
<i><b> Then:</b> There is file file_testing Folder_testing</i>
<i><b>  And:</b> Not there are file before_test</i></code></pre>

**_Variant #2_**
<pre><code><i><b>Given:</b> Exist the file with name folder_testing</i>
<i><b> When:</b> I rename the file with name FOLDER_TESTING</i>
<i><b> Then:</b> There is file file_testing FOLDER_TESTING</i>
<i><b>  And:</b> Not there are file before_test</i></code></pre>


<a name="feature-create-folder-scenario-create-a-folder-with-existant-name"></a>
### _Scenario: Create a folder with existant name_
**_Variant #1_**
<pre><code><i><b>Given:</b> Exist the element with name file_testing</i>
<i><b> When:</b> I create the folder with name file_testing</i>
<i><b> Then:</b> And error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #2_**
<pre><code><i><b>Given:</b> Exist the element with name file_testing</i>
<i><b> When:</b> I create the folder with name    file_testing</i>
<i><b> Then:</b> And error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #3_**
<pre><code><i><b>Given:</b> Exist the element with name file_testing</i>
<i><b> When:</b> I create the folder with name file_testing    </i>
<i><b> Then:</b> And error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>


<a name="feature-create-folder-scenario-create-folder-with-the-default-name"></a>
### _Scenario: Create folder with the default name_
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with the default name</i>
<i><b> Then:</b> The folder is created with the name "New Folder"</i></code></pre>


<a name="feature-create-folder-scenario-create-folder-with-the-default-name-when-exist-an-element-with-the-default-name"></a>
### _Scenario: Create folder with the default name when exist an element with the default name_
<pre><code><i><b>Given:</b> Exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with the default name</i>
<i><b> Then:</b> The folder is created with the name "New Folder 2"</i></code></pre>


<a name="feature-create-folder-scenario-cancel-the-create-folder-action"></a>
### _Scenario: Cancel the create folder action_
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a new folder</i>
<i><b>  And:</b> I press the ESC key</i>
<i><b> Then:</b> The folder is created with the name "New Folder"</i></code></pre>


<a name="feature-create-folder-scenario-create-a-folder-with-more-than-200-charactares"></a>
### _Scenario: Create a folder with more than 200 charactares_
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with name with 201 characters</i>
<i><b> Then:</b> And error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>


<a name="feature-create-folder-scenario-rename-a-file-with-invalid-characters"></a>
### _Scenario: Rename a file with invalid characters_
**_Variant #1_**
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with name NaN</i>
<i><b> Then:</b> error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #2_**
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with name NaN</i>
<i><b> Then:</b> error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #3_**
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with name NaN</i>
<i><b> Then:</b> error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #4_**
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with name NaN</i>
<i><b> Then:</b> error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #5_**
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with name NaN</i>
<i><b> Then:</b> error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #6_**
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with name NaN</i>
<i><b> Then:</b> error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #7_**
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with name NaN</i>
<i><b> Then:</b> error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #8_**
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with name NaN</i>
<i><b> Then:</b> error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #9_**
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with name NaN</i>
<i><b> Then:</b> error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #10_**
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with name NaN</i>
<i><b> Then:</b> error is shown </i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>


<a name="feature-create-folder-scenario-rename-a-file-with-empty-string"></a>
### _Scenario: Rename a file with empty string_
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with an empty string</i>
<i><b> Then:</b> error is shown</i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>


<a name="feature-create-folder-scenario-rename-a-file-with-only-spaces"></a>
### _Scenario: Rename a file with only spaces_
<pre><code><i><b>Given:</b> Not exist a element with name "New folder"</i>
<i><b> When:</b> I create a folder with only spaces</i>
<i><b> Then:</b> error is shown</i>
<i><b>  And:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>


<a name="feature-create-folder-scenario-automatic-scrolling-create-folder"></a>
### _Scenario: Automatic scrolling create folder_
<pre><code><i><b>Given:</b> There are 100 elements starting with the chracter "c"</i>
<i><b> When:</b> I create a folder with the default name</i>
<i><b> Then:</b> The folder is created with the name "New Folder"</i>
<i><b>  And:</b> The system scrolls until the folder created</i></code></pre>



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

<a name="feature-rename-elements"></a>
## _Feature: Rename elements_
- As a user
- I want browse the files and folders available

---
<a name="feature-rename-elements-scenario-rename-a-file"></a>
### _Scenario: Rename a file_
**_Variant #1_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name file_testing</i>
<i><b> When:</b> I rename the file with name file_testing</i>
<i><b> Then:</b> There is file file_testing file_testing</i>
<i><b>  And:</b> Not there are file before_test</i></code></pre>


<a name="feature-rename-elements-scenario-rename-a-file-with-case-sensitive"></a>
### _Scenario: Rename a file with case sensitive_
**_Variant #1_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Exist the file with name file_testing</i>
<i><b> When:</b> I rename the file with name File_testing</i>
<i><b> Then:</b> There is file file_testing File_testing</i>
<i><b>  And:</b> Not there are file before_test</i></code></pre>

**_Variant #2_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Exist the file with name file_testing</i>
<i><b> When:</b> I rename the file with name FILE_TESTING</i>
<i><b> Then:</b> There is file file_testing FILE_TESTING</i>
<i><b>  And:</b> Not there are file before_test</i></code></pre>


<a name="feature-rename-elements-scenario-rename-a-file-with-existant-name"></a>
### _Scenario: Rename a file with existant name_
**_Variant #1_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Exist the file with name file_testing</i>
<i><b> When:</b> I rename the file before_test with name    file_testing</i>
<i><b> Then:</b> And error is shown </i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #2_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Exist the file with name file_testing</i>
<i><b> When:</b> I rename the file before_test with name file_testing    </i>
<i><b> Then:</b> And error is shown </i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>


<a name="feature-rename-elements-scenario-rename-a-file-with-existant-name-in-a-folder"></a>
### _Scenario: Rename a file with existant name in a folder_
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Exist the folder with name file_testing</i>
<i><b> When:</b> I rename the file before_test with name file_testing</i>
<i><b> Then:</b> And error is shown </i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>


<a name="feature-rename-elements-scenario-element-name-not-change-after-rename-without-changes"></a>
### _Scenario: Element name not change after rename without changes_
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b> When:</b> I rename the file without changes</i>
<i><b> Then:</b> There is file before_test</i></code></pre>


<a name="feature-rename-elements-scenario-cancel-the-element-rename-action"></a>
### _Scenario: Cancel the element rename action_
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name file_testing</i>
<i><b> When:</b> I rename the file with name file_testing without confirm it</i>
<i><b>  And:</b> I press ESC key</i>
<i><b> Then:</b> There is file before_test</i>
<i><b>  And:</b> Not there are file file_testing</i></code></pre>


<a name="feature-rename-elements-scenario-rename-a-file-with-more-than-200-charactares"></a>
### _Scenario: Rename a file with more than 200 charactares_
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b> When:</b> I rename the file with name with 201 characters</i>
<i><b> Then:</b> And error is shown </i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>


<a name="feature-rename-elements-scenario-rename-a-file-with-invalid-characters"></a>
### _Scenario: Rename a file with invalid characters_
**_Variant #1_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name hello\</i>
<i><b> When:</b> I rename the file with name NaN</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #2_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name hello/</i>
<i><b> When:</b> I rename the file with name NaN</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #3_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name hello:</i>
<i><b> When:</b> I rename the file with name NaN</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #4_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name hello*</i>
<i><b> When:</b> I rename the file with name NaN</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #5_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name hello:</i>
<i><b> When:</b> I rename the file with name NaN</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #6_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name hello?</i>
<i><b> When:</b> I rename the file with name NaN</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #7_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name hello"</i>
<i><b> When:</b> I rename the file with name NaN</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #8_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name hello<</i>
<i><b> When:</b> I rename the file with name NaN</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #9_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name hello></i>
<i><b> When:</b> I rename the file with name NaN</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>

**_Variant #10_**
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name hello|</i>
<i><b> When:</b> I rename the file with name NaN</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i>
<i><b>  And:</b> I continue in the edition name mode</i></code></pre>


<a name="feature-rename-elements-scenario-rename-a-file-with-empty-string"></a>
### _Scenario: Rename a file with empty string_
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with an empty string</i>
<i><b> When:</b> I rename the file with an empty string</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i></code></pre>


<a name="feature-rename-elements-scenario-rename-a-file-with-only-spaces"></a>
### _Scenario: Rename a file with only spaces_
<pre><code><i><b>Given:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with only spaces</i>
<i><b> When:</b> I rename the file with only spaces</i>
<i><b> Then:</b> I receive an alert</i>
<i><b>  And:</b> The file is not renamed</i></code></pre>


<a name="feature-rename-elements-scenario-automatic-scrolling-after-rename"></a>
### _Scenario: Automatic scrolling after rename_
<pre><code><i><b>Given:</b> There are 100 files starting with the chracter "c"</i>
<i><b>  And:</b> Exist a file with name before_test</i>
<i><b>  And:</b> Not exist the file with name file_testing</i>
<i><b> When:</b> I rename the file with name file_testing</i>
<i><b> Then:</b> There is file file_testing</i>
<i><b>  And:</b> Not there are file before_test</i>
<i><b>  And:</b> The system scrolls until the file renamed</i></code></pre>



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
### _Scenario: User B, that has not failed any attempt of login, can login without captcha after user A has been failing for more than 3 times_
<pre><code><i><b>Given:</b> User B has failed 3 attempts of login and captcha has appeared</i>
<i><b> When:</b> User A put his/her credentials on the same page</i>
<i><b> Then:</b> Captcha disappears and User A can do login</i></code></pre>


<a name="feature-captcha-scenario-user-cannot-login-if-heshe-does-not-fill-captcha-correctly"></a>
### _Scenario: User cannot login if he/she does not fill captcha correctly_
<pre><code><i><b>Given:</b> The login page ask the user for filling a captcha</i>
<i><b> When:</b> put something wrong in captcha</i>
<i><b> Then:</b> remains in the Login page and another Captcha appears</i></code></pre>


<a name="feature-captcha-scenario-user-can-login-if-heshe-fills-captcha-correctly"></a>
### _Scenario: User can login if he/she fills captcha correctly_
<pre><code><i><b>Given:</b> The login page ask the user for filling a captcha</i>
<i><b> When:</b> put the valid captcha and do login</i>
<i><b> Then:</b> user is logged</i></code></pre>


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
- Feature: Contextual Menu | Scenario: Contextual menu from compressed file | When: I do right click in the file
- Feature: Contextual Menu | Scenario: Contextual menu from compressed file | Then: I obtain the compressed menu elements: Open,Rename
- Feature: Contextual Menu | Scenario: Contextual menu from folder | When: I do right click in the folder
- Feature: Contextual Menu | Scenario: Contextual menu from folder | Then: I obtain the folder menu elements: Open,Rename
- Feature: Files Application | Scenario: Applications Menu shows the Files app | When: Open menu app and select Files
- Feature: Files Application | Scenario: Applications Menu shows the Files app | Then: Check the app opened is Files
- Feature: browse files | Scenario: List elements when open files application | Then: I see 150 elements
- Feature: browse files | Scenario: List elements when refresh files application | Then: I see 150 elements
- Feature: Files | Scenario: Go to Files page | Then: Check tittle
- Feature: Login | Scenario: Incorrect login | Variant #1 | Then: I remain in login page
- Feature: Login | Scenario: Incorrect login | Variant #2 | Then: I remain in login page
- Feature: Login | Scenario: Incorrect login | Variant #3 | Then: I remain in login page
- Feature: Login | Scenario: Incorrect login | Variant #4 | Then: I remain in login page
- Feature: Login | Scenario: Incorrect login | Variant #5 | Then: I remain in login page
- Feature: Login | Scenario: Correct login | Variant #1 | Then: I enter to eyeOS main page
- Feature: Login | Scenario: Correct login | Variant #2 | Then: I enter to eyeOS main page

